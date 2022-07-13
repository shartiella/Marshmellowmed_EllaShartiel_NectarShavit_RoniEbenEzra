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

        [HttpGet("{Id}")]
        public async Task<IActionResult> GetCategoryById(int Id) //טעינת קטגוריה לפי איידי
        {
            if (Id > 0) //האם הגיע איידי תקין של קטגוריה
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Category oneCategory = await _context.Categories.FirstOrDefaultAsync(c => c.ID == Id); //שליפת הקטגוריה
                    if (oneCategory != null) //אם נמצאה הקטגוריה
                    {
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == oneCategory.GameID); //שליפת המשחק
                        if (gameOfCategory != null) //אם נמצא המשחק
                        {
                            if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                            {
                                //תוכן השיטה בפועל
                                return Ok(oneCategory);
                            }
                            return BadRequest("המשתמש הרצוי אינו מחובר");
                        }
                        return BadRequest("משחק לא נמצא");
                    }
                    return BadRequest("קטגוריה לא נמצאה");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }

        [HttpPost("New")]
        public async Task<IActionResult> AddCategory(Category newCategory) //יצירת קטגוריה חדשה
        {
            if (newCategory != null) //האם הגיע מידע על קטגוריה
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == newCategory.GameID); //שליפת המשחק
                    if (gameOfCategory != null) //אם נמצא המשחק
                    {
                        if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                        {
                            //תוכן השיטה בפועל
                            _context.Categories.Add(newCategory);
                            await _context.SaveChangesAsync();
                            //הכנסת הקטגוריה לבסיס הנתונים

                            return Ok(newCategory);
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
        public async Task<IActionResult> UpdateCategory(Category categoryToUpdate) //עדכון שם של קטגוריה
        {
            if (categoryToUpdate!=null) //האם הגיע מידע על קטגוריה
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Category CategoryfromDB = await _context.Categories.FirstOrDefaultAsync(c => c.ID == categoryToUpdate.ID);//שליפת הקטגוריה
                    if (CategoryfromDB != null) //אם נמצאה הקטגוריה
                    {
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == CategoryfromDB.GameID); //שליפת המשחק
                        if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                        {
                            //תוכן השיטה בפועל
                            CategoryfromDB.CategoryName = categoryToUpdate.CategoryName;

                            await _context.SaveChangesAsync();
                            return Ok(CategoryfromDB);
                        }
                        return BadRequest("המשתמש הרצוי אינו מחובר");
                    }
                    return BadRequest("קטגוריה לא נמצאה");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCategory(int id) //מחיקת קטגוריה
        {
            if (id > 0) //האם הגיע איידי תקין של קטגוריה
            {
                string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
                if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
                {
                    Category categoryToDelete = await _context.Categories.FirstOrDefaultAsync(c => c.ID == id); //שליפת הקטגוריה
                    if (categoryToDelete != null) //אם נמצאה הקטגוריה
                    {
                        Game gameOfCategory = await _context.Games.FirstOrDefaultAsync(g => g.ID == categoryToDelete.GameID); //שליפת המשחק

                        if (gameOfCategory.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
                        {
                            //תוכן השיטה בפועל
                            _context.Categories.Remove(categoryToDelete); //מחיקה ללא שמירה
                            await _context.SaveChangesAsync(); //שמירה של השינויים

                            return Ok(true); //החזרה של תשובה חיובית שמעידה על הצלחה של המחיקה
                        }
                        return BadRequest("המשתמש הרצוי אינו מחובר");
                    }
                    return BadRequest("קטגוריה לא נמצאה");
                }
                return BadRequest("אין משתמש מחובר");
            }
            return BadRequest("בעיה בקבלת המידע");
        }
    }
}
