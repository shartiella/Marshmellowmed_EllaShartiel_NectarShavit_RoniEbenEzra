using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities
{
    public class Category
    {
        public int ID { get; set; }

        [StringLength(10, ErrorMessage = "מגבלת תווים - 10")]
        public string CategoryName { get; set; }
        public int GameID { get; set; }
        public Game CategoryGame { get; set; }
        public List<Item> CategoryItems { get; set; }
    }
}
