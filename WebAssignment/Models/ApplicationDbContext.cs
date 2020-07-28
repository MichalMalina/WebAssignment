using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebAssignment.Models;

namespace WebAssignment.Models
{
    public class ApplicationDbContext : DbContext
    {
      
            public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }

protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

public DbSet<WebAssignment.Models.Product> Product { get; set; }
public DbSet<WebAssignment.Models.ShoppingCart> ShoppingCart { get; set; }

    }
}
