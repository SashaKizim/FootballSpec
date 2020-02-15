using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FootballSpeci.DAL.Entities
{
    public class EFDbContext : IdentityUserContext<DbUser,  long, IdentityUserClaim<long>,
    IdentityUserLogin<long>,
     IdentityUserToken<long>>
    {
        public EFDbContext(DbContextOptions<EFDbContext> options)
            : base(options)
        {

        }

       

       
    }
}
