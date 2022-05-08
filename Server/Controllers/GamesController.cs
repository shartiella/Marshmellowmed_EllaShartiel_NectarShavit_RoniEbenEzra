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
			string SessionContent = HttpContext.Session.GetString("UserId");
			if (string.IsNullOrEmpty(SessionContent) == false)
			{
				if (userId == Convert.ToInt32(SessionContent))
				{
					User userToReturn = await _context.Users.Include(u => u.UserGames).FirstOrDefaultAsync(u => u.ID == userId);
					if (userToReturn != null)
					{
						return Ok(userToReturn);
					}
					return BadRequest("User not found");
				}
				return BadRequest("User not logged in");
			}
			return BadRequest("Empty Session");
		}

		[HttpGet("byCode/{gameCode}")]
		public async Task<IActionResult> GetGameByCode(int gameCode)
		{
			Game gameToReturn = await _context.Games.FirstOrDefaultAsync(g => g.GameCode == gameCode);
			//בהמשך, להוסיף לשליפה הזאת את תוכן המשחקים באינקלוד לפני הפירסט אור דיפולט
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
	}
}
