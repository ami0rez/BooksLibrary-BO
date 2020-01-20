using Core.Models;
using Core.Models.Identification;
using Microsoft.EntityFrameworkCore;

namespace InfrastructureLayer.DataAccess.BooksLibrary
{
    public class BooksDbContext : DbContext, IBooksDbContext
    {

        public BooksDbContext(DbContextOptions<BooksDbContext> cotextOptions): base(cotextOptions)
        {

        }
        public DbSet<Account> Accounts { get; set; }
        public DbSet<Author> Authors { get; set; }

        public DbSet<Editor> Editors { get; set; }

        public DbSet<Tag> Tags { get; set; }

        public DbSet<Comment> Comments { get; set; }

        public DbSet<Ressource> Ressources { get; set; }

        public DbSet<Category> Categories { get; set; }

        public DbSet<SubCategory> SubCategories { get; set; }

        public DbSet<Book> Books { get; set; }
        public DbSet<BookSubCategies> BookSubCategies { get; set; }
    }
}
