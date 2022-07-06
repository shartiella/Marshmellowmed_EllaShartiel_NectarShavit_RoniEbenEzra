using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities
{
    public class Game
    {
        public int ID { get; set; }

        [Required(ErrorMessage = "שדה חובה")]
        [StringLength(30,ErrorMessage ="מגבלת תווים - 30")]
        public string GameName { get; set; }
        public int GameCode { get; set; }
        public bool IsPublished { get; set; }
        public int UserID { get; set; }
        public User GameUser { get; set; }
        public List<Category> GameCategories { get; set; }
    }
}
