using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;



namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities
{
    public class User
    {
        public int ID { get; set; }

        [Required(ErrorMessage ="שדה חובה")]
        [EmailAddress(ErrorMessage ="נא להכניס כתובת מייל תקינה")]
        public string Email { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public List<Game> UserGames { get; set; }
    }
}
