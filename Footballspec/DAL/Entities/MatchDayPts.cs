using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSpeci.DAL.Entities
{
    [Table("tblMatchDayPts")]
    public class MatchDayPts
    {
        [Key]
        public long Id { get; set; }
        [ForeignKey("Lig")]
        public long LigaId { get; set; }
        public virtual Liga Lig { get; set; }
        [ForeignKey("User")]
        public long UserId { get; set; }
        public virtual DbUser User { get; set; }
        public int Matchday { get; set; }
        public int? Pts { get; set; }
        public virtual ICollection<MatchForecast> ForeCasts { get; set; }
    }
}
