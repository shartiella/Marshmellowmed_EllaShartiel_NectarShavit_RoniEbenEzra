using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Data;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities;

namespace TriangleProject_Class.Server.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class GamesController : ControllerBase
	{
		private readonly DataContext _context;


		public GamesController(DataContext context)
		{
			_context = context;
		}

		[HttpGet("{userId}")]
		public async Task<IActionResult> GetAllGames(int userId) //שיטה לשליפת כל המשחקים של משתמש מסוים
		{
			if (userId > 0) //האם הגיע איידי תקין של יוזר
            {
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					if (userId == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
					{
						//תוכן השיטה בפועל
						User userToReturn = await _context.Users.Include(u => u.UserGames).ThenInclude(g=>g.GameCategories).ThenInclude(c=>c.CategoryItems).FirstOrDefaultAsync(u => u.ID == userId);//שליפת פרטי המשתמש כולל רשימת המשחקים שלו
						if (userToReturn != null)
						{
							return Ok(userToReturn); //החזרת פרטי המשתמש
						}
						return BadRequest("משתמש לא נמצא");
					}
					return BadRequest("המשתמש הרצוי אינו מחובר");
				}
				return BadRequest("אין משתמש מחובר");
            }
			return BadRequest("בעיה בקבלת המידע");
		}

		[HttpGet("byCode/{gameCode}")]
		public async Task<IActionResult> GetGameByCode(int gameCode) //שליפת תוכן משחק לפי קוד - לצורך המחולל
		{
			if (gameCode > 0) //האם הגיע קוד תקין של משחק
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					//שליפת המשחק
					Game gameToReturn = await _context.Games.Include(g => g.GameCategories).ThenInclude(c => c.CategoryItems).FirstOrDefaultAsync(g => g.GameCode == gameCode);
					if (gameToReturn != null) //האם נמצא המשחק
					{
						if (gameToReturn.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
						{
							return Ok(gameToReturn);
						}
						return BadRequest("המשתמש הרצוי אינו מחובר");
					}
					return BadRequest("משחק לא נמצא");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}

		[HttpGet("toPlay/{gameCode}")]
		public async Task<IActionResult> PlayGameByCode(int gameCode) //שליפת תוכן משחק לפי קוד - לצורך המשחק עצמו
		{
			//אין צורך לבדוק סשן כי השיטה מיועדת לשימוש האנימייט
			Game gameToReturn = await _context.Games.Include(g => g.GameCategories).ThenInclude(c => c.CategoryItems).FirstOrDefaultAsync(g => g.GameCode == gameCode);
			if (gameToReturn != null)
			{
				if (gameToReturn.IsPublished == true)
				{
					return Ok(gameToReturn);
				}
				return BadRequest("game not published");
			}
			return BadRequest("no such game");
		}

		[HttpPost("Insert")]
		public async Task<IActionResult> AddGame(Game newGame) //יצירת משחק חדש לפי שם
		{
			if (newGame != null) //האם הגיע מידע
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם משתמש מחובר בכלל
				{
					if (newGame.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
					{
						User userToReturn = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == newGame.UserID);
						//שליפת פרטי המשתמש והמשחקים שלו
						if (userToReturn != null) //אם נמצא המשתמש
						{
							_context.Games.Add(newGame);
							await _context.SaveChangesAsync();
							//הכנסת המשחק לבסיס הנתונים

							newGame.GameCode = newGame.ID + 100; //הגדרת קוד המשחק לפי האיידי
							await _context.SaveChangesAsync();

							return Ok(newGame);
						}
						return BadRequest("משתמש לא נמצא");
					}
					return BadRequest("המשתמש הרצוי אינו מחובר");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}

		[HttpPost("Copy")]
		public async Task<IActionResult> DuplicateGame(Game gamefrompage) //שכפול משחק קיים
		{
			if (gamefrompage != null) //אם הגיע מידע על משחק
            {
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false)//האם מחובר משתמש בכלל
				{
					//שליפת המשחק לשכפול והתוכן שלו
					Game gameToCopy = await _context.Games.Include(g => g.GameCategories).ThenInclude(c => c.CategoryItems).FirstOrDefaultAsync(g => g.ID == gamefrompage.ID);
					if (gameToCopy != null) //אם נמצא המשחק
					{
						if (gameToCopy.UserID == Convert.ToInt32(SessionContent))//האם המשתמש המחובר זה המשתמש הרצוי
						{
							//הכנסת משחק חדש לבסיס הנתונים
							Game newGame = new Game();
							newGame.IsPublished = false;
							newGame.UserID = gameToCopy.UserID;

							if (gameToCopy.GameName.Length <= 22)
                            {
								newGame.GameName = "עותק של " + gameToCopy.GameName;
							}
							else
                            {
                                newGame.GameName = "עותק של " + gameToCopy.GameName.Substring(0, gameToCopy.GameName.Length - 11) + "...";
                            }

							_context.Games.Add(newGame);
							await _context.SaveChangesAsync();

							//עכשיו כשיש למשחק המועתק איידי חדש משלו נשלוף אותו מחדש
							Game newGameFromDb = await _context.Games.Include(g => g.GameCategories).ThenInclude(c => c.CategoryItems).FirstOrDefaultAsync(g => g.ID == newGame.ID);

							List<Category> categoriesToCopy = gameToCopy.GameCategories.ToList(); //רשימת הקטגוריות להעתקה
							List<Category> categoriesToAdd = new List<Category>(); //רשימת קטגוריות ריקה זמנית
							foreach (Category c in categoriesToCopy) //עבור כל קטגוריה שצריך להעתיק
							{
								Category currentCategory = new Category();
								currentCategory.CategoryName = c.CategoryName;
								currentCategory.GameID = newGameFromDb.ID;
								categoriesToAdd.Add(currentCategory);

								List<string> imagesToCopy = new List<string>();

								currentCategory.CategoryItems = new List<Item>();
								foreach (Item i in c.CategoryItems) //עבור כל פריט בקטגוריה הזו
								{
									Item currentItem = new Item();
									currentItem.IsPicture = i.IsPicture;
									currentItem.ItemContent = i.ItemContent;
									currentItem.ItemCategory = currentCategory;
									currentCategory.CategoryItems.Add(currentItem);
								}
							}
							newGameFromDb.GameCategories.AddRange(categoriesToAdd);

							//עדכון קוד המשחק לפי האיידי החדש
							newGame.GameCode = newGame.ID + 100;
							await _context.SaveChangesAsync();

							if (newGame != null) //אם יש משחק
							{
								return Ok(newGame);
							}
							return BadRequest("שגיאה בשכפול המשחק");
						}
						return BadRequest("המשתמש הרצוי אינו מחובר");
					}
					return BadRequest("משחק לא נמצא");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}

			[HttpPost("Publish")]
		public async Task<IActionResult> PublishGame(Game gameToPublish) //פרסום משחק
		{
			if (gameToPublish!=null) //האם הגיעו פרטים על משחק
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					//שליפת פרטי המשחק אותו רוצים לפרסם
					Game gameFromDb = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToPublish.ID);
					if (gameFromDb != null) //האם נמצא המשחק
					{
						if (gameFromDb.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
						{
							//תוכן השיטה בפועל
							gameFromDb.IsPublished = true;
							await _context.SaveChangesAsync();
							return Ok(gameFromDb.IsPublished);
						}
						return BadRequest("המשתמש הרצוי אינו מחובר");
					}
					return BadRequest("משחק לא נמצא");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}

		[HttpPost("UnPublish")]
		public async Task<IActionResult> UnPublishGame(Game gameToPublish) //ביטול פרסום משחק
		{
			if (gameToPublish!=null) //האם הגיעו פרטים על משחק
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					//שליפת פרטי המשחק אותו רוצים לפרסם
					Game gameFromDb = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToPublish.ID);
					if (gameFromDb != null) //האם נמצא המשחק
					{
						if (gameFromDb.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
						{
							//תוכן השיטה בפועל
							gameFromDb.IsPublished = false;
							await _context.SaveChangesAsync();
							return Ok(gameFromDb.IsPublished);
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
		public async Task<IActionResult> UpdateGame(Game gameToUpdate) //עדכון משחק
		{
			if (gameToUpdate!=null) //האם הגיע מידע על משחק
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					Game gameFromDB = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToUpdate.ID); //שליפת פרטי המשחק מבסיס הנתונים
					if (gameFromDB != null) //אם נמצא המשחק שרוצים לעדכן
					{
						if (gameFromDB.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
						{
							//תוכן השיטה בפועל
							gameFromDB.GameName = gameToUpdate.GameName;
							gameFromDB.IsPublished = gameToUpdate.IsPublished;

							await _context.SaveChangesAsync();
							return Ok(gameFromDB);
						}
						return BadRequest("המשתמש הרצוי אינו מחובר");
					}
					return BadRequest("משחק לא נמצא");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteGame(int id)
		{
			if (id > 0) //האם הגיע איידי תקין של משחק
			{
				string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
				if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
				{
					Game gameToDelete = await _context.Games.FirstOrDefaultAsync(g => g.ID == id); //שליפת המשחק שהאיידי שלו
					if (gameToDelete != null) //האם נמצא המשחק
					{
						if (gameToDelete.UserID == Convert.ToInt32(SessionContent)) //האם המשתמש המחובר זה המשתמש הרצוי
						{
							//תוכן השיטה בפועל
							_context.Games.Remove(gameToDelete); //מחיקה ללא שמירה
							await _context.SaveChangesAsync(); //שמירה של השינויים

							return Ok(true); //החזרה של תשובה חיובית שמעידה על הצלחה של המחיקה
						}
						return BadRequest("המשתמש הרצוי אינו מחובר");
					}
					return BadRequest("משחק לא נמצא");
				}
				return BadRequest("אין משתמש מחובר");
			}
			return BadRequest("בעיה בקבלת המידע");
		}
	}
}
