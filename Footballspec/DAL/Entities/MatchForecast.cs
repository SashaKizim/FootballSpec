using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSpeci.DAL.Entities
{
    [Table("tblMatchForecasts")]
    public class MatchForecast
    {
        [Key]
        public long Id { get; set; }
        [ForeignKey("MatchDay")] 
        public long MatchDayId { get; set; }
        public virtual MatchDayPts MatchDay { get; set; }
        public int MatchId { get; set; }
        public int HomeTeam { get; set; }
        public int AwayTeam { get; set; }
    }
}
