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
			string SessionContent = HttpContext.Session.GetString("UserId");//בדיקה איזה משתמש מחובר
			if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש בכלל
			{
				if (userId == Convert.ToInt32(SessionContent))//האם המשתמש המחובר זה המשתמש שמחפשים את המשחקים שלו
				{
					User userToReturn = await _context.Users.Include(u => u.UserGames).ThenInclude(g=>g.GameCategories).ThenInclude(c=>c.CategoryItems).FirstOrDefaultAsync(u => u.ID == userId);//שליפת פרטי המשתמש כולל רשימת המשחקים שלו
					if (userToReturn != null)
					{
						return Ok(userToReturn);//החזרת פרטי המשתמש
					}
					return BadRequest("User not found");
				}
				return BadRequest("User not logged in");
			}
			return BadRequest("Empty Session");
		}

		[HttpGet("byCode/{gameCode}")]
		public async Task<IActionResult> GetGameByCode(int gameCode) //שליפת תוכן משחק לפי קוד - לצורך המחולל
		{

			Game gameToReturn = await _context.Games.Include(g => g.GameCategories).ThenInclude(c=> c.CategoryItems).FirstOrDefaultAsync(g => g.GameCode == gameCode);
			if (gameToReturn != null)
			{
				return Ok(gameToReturn);
			}
			return BadRequest("no such game");
		}

		[HttpGet("toPlay/{gameCode}")]
		public async Task<IActionResult> PlayGameByCode(int gameCode) //שליפת תוכן משחק לפי קוד - לצורך המשחק עצמו
		{
			//Game gameToReturn = await _context.Games.FirstOrDefaultAsync(g => g.GameCode == gameCode);
			//בהמשך, להוסיף לשליפה הזאת את תוכן המשחקים באינקלוד לפני הפירסט אור דיפולט

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
		public async Task<IActionResult> AddGame(Game newGame) //יצירת משחק חדש
		//מקבל כפרמטר את גוף הקריאה שמתקבל בהפעלת השיטה - מידע על משחק בודד
		{
			Console.WriteLine("newGame ID " + newGame.ID);

			if (newGame != null)
			{
				string SessionContent = HttpContext.Session.GetString("UserId");
				Console.WriteLine("SessionContent " + SessionContent);
				Console.WriteLine("newGame.UserID " + newGame.UserID);

				if (string.IsNullOrEmpty(SessionContent) == false)//האם מישהו מחובר
				{
					if (newGame.UserID == Convert.ToInt32(SessionContent))//האם מי שמחובר זה מי שיצר את המשחק
					{
						User userToReturn = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == newGame.UserID);
						//שליפת פרטי המשתמש והמשחקים שלו
						if (userToReturn != null)
						{
							_context.Games.Add(newGame);
							await _context.SaveChangesAsync();
							//הכנסת המשחק לבסיס הנתונים

							newGame.GameCode = newGame.ID + 100;
							await _context.SaveChangesAsync();

							return Ok(newGame);
						}
						return BadRequest("User not found");
					}
					return BadRequest("User not logged in");
				}
				return BadRequest("Empty session");
			}
			else
			{
				return BadRequest("Game was not sent");
			}
		}

		[HttpPost("Copy")]
		public async Task<IActionResult> DuplicateGame(Game gamefrompage) //יצירת משחק חדש
																		  //מקבל כפרמטר את גוף הקריאה שמתקבל בהפעלת השיטה - מידע על משחק בודד
		{
			Game gameToCopy = await _context.Games.Include(g => g.GameCategories).ThenInclude(c => c.CategoryItems).FirstOrDefaultAsync(g => g.ID == gamefrompage.ID);
			if (gameToCopy != null)
			{
				string SessionContent = HttpContext.Session.GetString("UserId");

				if (string.IsNullOrEmpty(SessionContent) == false)//האם מישהו מחובר
				{
					if (gameToCopy.UserID == Convert.ToInt32(SessionContent))//האם מי שמחובר זה מי שיצר את המשחק
					{
						Game newGame = new Game();
						newGame.GameName = "עותק של " + gameToCopy.GameName;
						newGame.IsPublished = false;
						newGame.UserID = gameToCopy.UserID;
						newGame.GameCategories = gameToCopy.GameCategories;
						

						_context.Games.Add(newGame);
						await _context.SaveChangesAsync();
						//הכנסת המשחק לבסיס הנתונים

						newGame.GameCode = newGame.ID + 100;
						await _context.SaveChangesAsync();

						if (newGame != null)
						{
							return Ok(newGame);
						}
						return BadRequest("failed");
					}
					return BadRequest("User not logged in");
				}
				return BadRequest("Empty session");
			}
			else
			{
				return BadRequest("Game was not sent");
			}
		}

			[HttpPost("Publish")]
		public async Task<IActionResult> PublishGame(Game gameToPublish)
		{
			Game gameFromDb = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToPublish.ID);

			if (gameFromDb != null)
            {
				gameFromDb.IsPublished = true;
				await _context.SaveChangesAsync();
				return Ok(gameFromDb.IsPublished);
			}
			else
            {
                return BadRequest("no such game");
            }
		}

		[HttpPost("UnPublish")]
		public async Task<IActionResult> UnPublishGame(Game gameToPublish)
		{
			Game gameFromDb = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToPublish.ID);

			if (gameFromDb != null)
			{
				gameFromDb.IsPublished = false;
				await _context.SaveChangesAsync();
				return Ok(gameFromDb.IsPublished);
			}
			else
			{
				return BadRequest("no such game");
			}
		}

		[HttpPost("Update")]
		public async Task<IActionResult> UpdateGame(Game gameToUpdate)
		{
			Game gameFromDB = await _context.Games.FirstOrDefaultAsync(g => g.ID == gameToUpdate.ID);

			if (gameFromDB != null)
			{
				gameFromDB.GameName = gameToUpdate.GameName;
				gameFromDB.IsPublished = gameToUpdate.IsPublished;

				await _context.SaveChangesAsync();
				return Ok(gameFromDB);

			}
			else
			{
				return BadRequest("no such game");
			}
		}

		[HttpDelete("{id}")]
		public async Task<IActionResult> DeleteGame(int id)
		{
			Game gameToDelete = await _context.Games.FirstOrDefaultAsync(g => g.ID == id);
			if (gameToDelete != null)
			{
				_context.Games.Remove(gameToDelete); //מחיקה ללא שמירה
				await _context.SaveChangesAsync(); //שמירה של השינויים

				return Ok(true); //החזרה של תשובה חיובית שמעידה על הצלחה של המחיקה
			}
			else
			{
				return BadRequest("no such game");
			}
		}
	}
}
