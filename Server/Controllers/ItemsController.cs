using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Data;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Helpers;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities;

namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ItemsController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly FileStorage _fileStorage;

        public ItemsController(DataContext context, FileStorage fileStorage)
        {
            _context = context;
            _fileStorage = fileStorage;
        }

        [HttpGet] //הנתיב של השיטה יהיה הנתיב של הקונטרולר
        public async Task<IActionResult> GetItems() //שיטה מסוג טאסק אסינכרוני שמחזירה תשובת רשת
        {
            List<Item> ItemsList = await _context.Items.Include(i => i.ItemCategory).ThenInclude(c => c.CategoryName).ToListAsync();
            //יצרנו רשימה שכל פריט בה הוא כמו שורה בטבלה שלנו ונתנו לה שם
            //לתוך הרשימה קראנו לבסיס הנתונים ובתוכו לטבלה ואת מה שקיבלנו המרנו לרשימה באופן אסינכרוני
            //האינקלוד הוא כדי שהקריאה תכלול גם את המידע מהטבלה השנייה במקום נאל
            return Ok(ItemsList);
            //החזרת תשובת רשת של הצלחה ובתוכה התוכן של הרשימה שיצרנו
        }

        [HttpGet("{Id}")]//הנתיב של השיטה הוא כנתיב הקונטרולר סלאש משהו שיפורש כפרמטר ת.ז
        public async Task<IActionResult> GetItemById(int Id) //השיטה מקבל איידי כפרמטר אינטי
        {
            Item oneItem = await _context.Items.FirstOrDefaultAsync(i => i.ID == Id);
            //יצרנו משתנה מסוג עובד שמכיל את כל הפרטים על עובד מסוים
            //פנינו לבסיס הנתונים ולטבלה בתוכו ומתוכה לקחנו את השורה שהאיידי שלה שווה לפרמטר שקיבלנו
            if (oneItem != null) //אם קיבלנו משהו תקין
            {
                return Ok(oneItem); //נחזיר תשובת רשת של הצלחה עם המידע שקיבלנו
            }
            else //אחרת - אם לא נמצא איידי תואם לפרמטר
            {
                return BadRequest("No such worker"); //נחזיר תשובת אי הצלחה עם משוב מחרוזתי
            }
        }

        [HttpPost("New")]
        public async Task<IActionResult> AddItem(Item newItem)
        //מקבל כפרמטר את גוף הקריאה שמתקבל בהפעלת השיטה - מידע על פריט בודד
        {
            if (newItem != null)
            {
                _context.Items.Add(newItem);
                await _context.SaveChangesAsync();
                //הכנסת הפריט לבסיס הנתונים

                return Ok(newItem);
            }
            else
            {
                return BadRequest("Item was not sent");
            }
        }



        [HttpPost("Update")]
        public async Task<IActionResult> UpdateItem(Item itemToUpdate)
        {
            Item ItemfromDB = await _context.Items.FirstOrDefaultAsync(i => i.ID == itemToUpdate.ID);

            if (ItemfromDB != null)
            {
                ItemfromDB.ItemContent = itemToUpdate.ItemContent;
                ItemfromDB.IsPicture = itemToUpdate.IsPicture;

                await _context.SaveChangesAsync();
                return Ok(ItemfromDB);

            }
            else
            {
                return BadRequest("no such item");
            }
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id)
        {
            Item itemToDelete = await _context.Items.FirstOrDefaultAsync(i => i.ID == id);
            if (itemToDelete != null)
            {
                _context.Items.Remove(itemToDelete); //מחיקה ללא שמירה
                await _context.SaveChangesAsync(); //שמירה של השינויים

                return Ok(true); //החזרה של תשובה חיובית שמעידה על הצלחה של המחיקה
            }
            else
            {
                return BadRequest("no such item");
            }
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64)
        {
            //לוקח תמונה ויוצר לה נתיב
            byte[] picture = Convert.FromBase64String(imageBase64);
            string url = await _fileStorage.SaveFile(picture, "png", "uploadedFiles");
            if (url != null)
            {
                return Ok(url);
            }
            else
            {
                return BadRequest("upload failed");
            }
        }

        [HttpPost("deleteImages")]
		public async Task<IActionResult> DeleteImages([FromBody] List<string> images)
		{
			foreach (string img in images)
			{
				await _fileStorage.DeleteFile(img, "uploadedFiles");
			}
			return Ok("deleted");
		}
	}
}
