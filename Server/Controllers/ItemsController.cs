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

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetItemById(int Id) //שליפת פריט לפי איידי
        {
            if (Id > 0) //האם הגיע איידי תקין של פריט
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Item oneItem = await _context.Items.FirstOrDefaultAsync(i => i.ID == Id); //שליפת הפריט
                    if (oneItem != null) //אם נמצא הפריט
                    {
                        Category categoryOfItem = await _context.Categories.FirstOrDefaultAsync(c => c.ID == oneItem.CategoryID); //שליפת הקטגוריה
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == categoryOfItem.GameID); //שליפת המשחק
                        if (gameOfCategory != null) //אם נמצא המשחק
                        {
                            if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                            {
                                //תוכן השיטה בפועל
                                return Ok(oneItem);
                            }
                            return BadRequest("המשתמש הרצוי אינו מחובר");
                        }
                        return BadRequest("משחק לא נמצא");
                    }
                    return BadRequest("פריט לא נמצא");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }
    

        [HttpPost("New")]
        public async Task<IActionResult> AddItem(Item newItem) //יצירת פריט חדש
        {
            if (newItem!=null) //האם הגיע מידע על פריט
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Category categoryOfItem = await _context.Categories.FirstOrDefaultAsync(c => c.ID == newItem.CategoryID); //שליפת הקטגוריה
                    Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == categoryOfItem.GameID); //שליפת המשחק
                    if (gameOfCategory != null) //אם נמצא המשחק
                    {
                        if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                        {
                            //תוכן השיטה בפועל
                            _context.Items.Add(newItem);
                            await _context.SaveChangesAsync();
                            //הכנסת הפריט לבסיס הנתונים

                            return Ok(newItem);
                        }
                        return BadRequest("המשתמש הרצוי אינו מחובר");
                    }
                    return BadRequest("משחק לא נמצא");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }


        [HttpPost("Update")]
        public async Task<IActionResult> UpdateItem(Item itemToUpdate) //עדכון פריט
        {
            if (itemToUpdate!=null) //האם הגיע איידי תקין של פריט
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Item ItemfromDB = await _context.Items.FirstOrDefaultAsync(i => i.ID == itemToUpdate.ID); //שליפת הפריט
                    if (ItemfromDB != null) //אם נמצא הפריט
                    {
                        Category categoryOfItem = await _context.Categories.FirstOrDefaultAsync(c => c.ID == ItemfromDB.CategoryID); //שליפת הקטגוריה
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == categoryOfItem.GameID); //שליפת המשחק
                        if (gameOfCategory != null) //אם נמצא המשחק
                        {
                            if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                            {
                                //תוכן השיטה בפועל
                                ItemfromDB.ItemContent = itemToUpdate.ItemContent;
                                ItemfromDB.IsPicture = itemToUpdate.IsPicture;

                                await _context.SaveChangesAsync();
                                return Ok(ItemfromDB);
                            }
                            return BadRequest("המשתמש הרצוי אינו מחובר");
                        }
                        return BadRequest("משחק לא נמצא");
                    }
                    return BadRequest("פריט לא נמצא");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }


        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteItem(int id) //מחיקת פריט
        {
            if (id > 0) //האם הגיע איידי תקין של פריט
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Item itemToDelete = await _context.Items.FirstOrDefaultAsync(i => i.ID == id); //שליפת הפריט
                    if (itemToDelete != null) //אם נמצא הפריט
                    {
                        Category categoryOfItem = await _context.Categories.FirstOrDefaultAsync(c => c.ID == itemToDelete.CategoryID); //שליפת הקטגוריה
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == categoryOfItem.GameID); //שליפת המשחק
                        if (gameOfCategory != null) //אם נמצא המשחק
                        {
                            if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                            {
                                //תוכן השיטה בפועל
                                if (itemToDelete.ItemContent.StartsWith("uploaded") == true) //אם הפריט מכיל תמונה שצריך למחוק אותה
                                {
                                    //האם יש לפחות פריט נוסף שמשתמש בה
                                    List<Item> isPictureReused = await _context.Items.Where(i => i.ItemContent == itemToDelete.ItemContent).ToListAsync();
                                    if (isPictureReused.Count > 1)
                                    {
                                        //אם יש, אז לא למחוק
                                    }
                                    else
                                    {
                                        //יצירת רשימה של תמונות למחיקה
                                        List<string> imagesToDelete = new List<string>();
                                        imagesToDelete.Add(itemToDelete.ItemContent.Substring(14));
                                        foreach (string img in imagesToDelete)
                                        {
                                            await _fileStorage.DeleteFile(img, "uploadedFiles"); //מחיקת התמונות ברשימה
                                        }
                                    }
                                }

                                _context.Items.Remove(itemToDelete); //מחיקה ללא שמירה
                                await _context.SaveChangesAsync(); //שמירה של השינויים

                                return Ok(true); //מחיקת הפריט בוצעה בהצלחה
                            }
                            return BadRequest("המשתמש הרצוי אינו מחובר");
                        }
                        return BadRequest("משחק לא נמצא");
                    }
                    return BadRequest("פריט לא נמצא");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }

        [HttpPost("upload")]
        public async Task<IActionResult> UploadFile([FromBody] string imageBase64) //העלאת תמונה
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
                return BadRequest("העלאת תמונה כשלה");
            }
        }

        [HttpPost("deleteImages")]
		public async Task<IActionResult> DeleteImages([FromBody] List<string> imagesToDelete) //מחיקת תמונות מרובות
		{
            foreach(string img in imagesToDelete)
            {
                List<Item> isPictureReused = await _context.Items.Where(i => i.ItemContent == img).ToListAsync();
                if (isPictureReused.Count > 1)
                {
                    //אם יש, אז לא למחוק
                }
                else
                {
                    string imgToDelete = img.Substring(14);
                    await _fileStorage.DeleteFile(imgToDelete, "uploadedFiles");
                }
            }
            return Ok("deleted");
        }

        [HttpPost("deleteImage")]
        public async Task<IActionResult> DeleteImage([FromBody] string imageToDelete) //מחיקת תמונה בודדת
        {

            List<Item> isPictureReused = await _context.Items.Where(i => i.ItemContent == imageToDelete).ToListAsync();
            if (isPictureReused.Count > 1)
            {
                //אם יש, אז לא למחוק
                return Ok("not deleted " + isPictureReused.Count);
            }
            else
            {
                string img = imageToDelete.Substring(14);
                await _fileStorage.DeleteFile(img, "uploadedFiles");
                return Ok("deleted " + img);
            }
        }
    }
}
