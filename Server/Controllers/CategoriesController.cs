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
    public class CategoriesController : ControllerBase
    {
        private readonly DataContext _context;
        private readonly FileStorage _fileStorage;

        public CategoriesController(DataContext context, FileStorage fileStorage)
        {
            _context = context;
            _fileStorage = fileStorage;
        }

        [HttpPost("New")]
        public async Task<IActionResult> AddCategory(Category newCategory)
        //מקבל כפרמטר את גוף הקריאה שמתקבל בהפעלת השיטה - מידע על קטגוריה בודדת
        {
            if (newCategory != null)
            {
                _context.Categories.Add(newCategory);
                await _context.SaveChangesAsync();
                //הכנסת הקטגוריה לבסיס הנתונים

                return Ok(newCategory);
            }
            else
            {
                return BadRequest("Category was not sent");
            }
        }

        [HttpPost("Update")]
        public async Task<IActionResult> UpdateCategory(Category categoryToUpdate)
        {
            Category CategoryfromDB = await _context.Categories.FirstOrDefaultAsync(c => c.ID == categoryToUpdate.ID);

            if (CategoryfromDB != null)
            {

                CategoryfromDB.CategoryName = categoryToUpdate.CategoryName;

                await _context.SaveChangesAsync();
                return Ok(CategoryfromDB);

            }
            else
            {
                return BadRequest("no such category");
            }
        }

        [HttpGet("{Id}")]//הנתיב של השיטה הוא כנתיב הקונטרולר סלאש משהו שיפורש כפרמטר ת.ז
        public async Task<IActionResult> GetCategoryById(int Id) //השיטה מקבל איידי כפרמטר אינטי
        {
            Category oneCategory = await _context.Categories.FirstOrDefaultAsync(c => c.ID == Id);
            //יצרנו משתנה מסוג עובד שמכיל את כל הפרטים על עובד מסוים
            //פנינו לבסיס הנתונים ולטבלה בתוכו ומתוכה לקחנו את השורה שהאיידי שלה שווה לפרמטר שקיבלנו
            if (oneCategory != null) //אם קיבלנו משהו תקין
            {
                return Ok(oneCategory); //נחזיר תשובת רשת של הצלחה עם המידע שקיבלנו
            }
            else //אחרת - אם לא נמצא איידי תואם לפרמטר
            {
                return BadRequest("No such category"); //נחזיר תשובת אי הצלחה עם משוב מחרוזתי
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id)
        {
            Category categoryToDelete = await _context.Categories.FirstOrDefaultAsync(c => c.ID == id);
            if (categoryToDelete != null)
            {
                _context.Categories.Remove(categoryToDelete); //מחיקה ללא שמירה
                await _context.SaveChangesAsync(); //שמירה של השינויים

                return Ok(true); //החזרה של תשובה חיובית שמעידה על הצלחה של המחיקה
            }
            else
            {
                return BadRequest("no such category");
            }
        }
    }
}
