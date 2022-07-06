using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;


namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities
{
    public class Item
    {
        public int ID { get; set; }

        [StringLength(100, ErrorMessage = "מגבלת תווים - 100")]
        public string ItemContent { get; set; }
        public bool IsPicture { get; set; }
        public int CategoryID { get; set; }
        public Category ItemCategory { get; set; }
    }
}
