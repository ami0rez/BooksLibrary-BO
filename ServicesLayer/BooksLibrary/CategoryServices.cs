using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace ServicesLayer.BooksLibrary
{
    public class CategoryServices : BaseServices, ICategoryServices
    {
        public CategoryServices(BooksDbContext database) : base(database)
        {

        }

        public Category ReadOne(int id)
        {
            return _database.Categories.SingleOrDefault(t => t.Id == id);
        }

        public IEnumerable<Category> ReadAll()
        {
            return _database.Categories
                .Include(c => c.subCategories)
                .Select(
                c => new Category
                {
                    Id = c.Id,
                    Name = c.Name,
                    subCategories = c.subCategories.Select(
                        sc => new SubCategory
                        {
                            Id = sc.Id,
                            CategoryId = sc.CategoryId,
                            Name = sc.Name,
                            Category = null,
                            
                        }
                        ).ToList(),
                }
                )
                .ToList();
        }

        public Category Create(Category Category)
        {
            _database.Categories.Add(Category);
            _database.SaveChanges();
            return Category;
        }

        public void Update(Category Category)
        {
            var result = _database.Categories.SingleOrDefault((oldCategory) => oldCategory.Id == Category.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(Category);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var Category = new Category { Id = id };
            _database.Categories.Attach(Category);
            var deleted = _database.Categories.Remove(Category);
            _database.SaveChanges();
        }
    }
}
