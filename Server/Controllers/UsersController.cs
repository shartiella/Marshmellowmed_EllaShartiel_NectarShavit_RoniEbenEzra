using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Data;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities;

namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly DataContext _context;

		public UsersController(DataContext context)
		{
			_context = context;
		}

		[HttpGet("{mail}")]
		public async Task<IActionResult> LoginUser(string mail)
		{
			//string SessionID = HttpContext.Session.GetString("UserId");
			//if (string.IsNullOrEmpty(SessionID))
			//{
			//	User userToReturn = await _context.Users.FirstOrDefaultAsync(u => u.Email == mail.ToLower());
			//	if (userToReturn != null)
			//	{
			//		HttpContext.Session.SetString("UserId", userToReturn.ID.ToString());
			//		return Ok();
			//	}
			//	return BadRequest("User not found");
			//}
			//else
			//{
			//	int userId = Convert.ToInt32(SessionID);
			//	User userToReturn = await _context.Users.FirstOrDefaultAsync(u => u.ID == userId && u.Email == mail.ToLower());
			//	if (userToReturn != null)
			//	{
			//		return Ok();
			//	}

			//	HttpContext.Session.SetString("UserId", "");
			//	return BadRequest("User not found");
			//}
			User userToReturn = await _context.Users.FirstOrDefaultAsync(u => u.Email == mail.ToLower()); //האם האימייל תואם למייל שהתקבל, אם כן אז לקלוט אותו
			if (userToReturn != null)
			{
				HttpContext.Session.SetString("UserId", userToReturn.ID.ToString());
				return Ok(userToReturn.ID);
			}
			return BadRequest("User not found");

		}
	}
}
