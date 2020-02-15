using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSpeci.DAL.Entities
{
    public class DbUser : IdentityUser<long>
    {
      public virtual ICollection<MatchDayPts> MatchDays { get; set; }
    }
}
