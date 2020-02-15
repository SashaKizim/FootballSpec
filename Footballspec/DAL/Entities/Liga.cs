using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSpeci.DAL.Entities
{
    [Table ("tblLigas")]
    public class Liga
    {
        [Key]
        public long Id { get; set; }
        public string Name { get; set; }
    }
}
