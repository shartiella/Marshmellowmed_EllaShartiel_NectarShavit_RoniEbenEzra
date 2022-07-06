using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Shared.Entities;
using Microsoft.EntityFrameworkCore;


namespace Marshmellowmed_EllaShartiel_NectarShavit_RoniEbenEzra.Server.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<Category> Categories { get; set; }
        public DbSet<Item> Items { get; set; }
    }

}
