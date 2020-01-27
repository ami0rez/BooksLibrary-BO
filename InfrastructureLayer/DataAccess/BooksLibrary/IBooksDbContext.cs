using Core.Models;
using Microsoft.EntityFrameworkCore;

namespace InfrastructureLayer.DataAccess.BooksLibrary
{
    public interface IBooksDbContext
    {
        DbSet<Author> Authors { get; set; }
        DbSet<Book> Books { get; set; }
        DbSet<Category> Categories { get; set; }
        DbSet<Comment> Comments { get; set; }
        //DbSet<Editor> Editors { get; set; }
        DbSet<Ressource> Ressources { get; set; }
        DbSet<SubCategory> SubCategories { get; set; }
        DbSet<Tag> Tags { get; set; }
    }
}