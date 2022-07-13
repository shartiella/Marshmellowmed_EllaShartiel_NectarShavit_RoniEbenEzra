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
			User userToReturn = await _context.Users.FirstOrDefaultAsync(u => u.Email == mail.ToLower()); //האם יש אימייל שתואם למייל שהתקבל, אם כן אז לקלוט אותו
			if (userToReturn != null)
			{
				HttpContext.Session.SetString("UserId", userToReturn.ID.ToString());
				return Ok(userToReturn.ID);
			}
			return BadRequest("משתמש לא נמצא");
		}

		[HttpGet("Check")]
		public async Task<IActionResult> LoginCheck()
		{
			string SessionContent = HttpContext.Session.GetString("UserId"); //בדיקת הסשן
			if (string.IsNullOrEmpty(SessionContent) == false) //האם מחובר משתמש כלשהו
			{
				return Ok(Convert.ToInt32(SessionContent)); //החזרת פרטי המשתמש
			}
			return BadRequest("אין משתמש מחובר");
		}

		[HttpGet("Logout")]
		public async Task<IActionResult> LogoutUser()
		{
			HttpContext.Session.SetString("UserId", "");
			return Ok(HttpContext.Session.GetString("UserId"));
		}
	}
}
