using Core.Exceptions;
using Core.Models;
using InfrastructureLayer.DataAccess.BooksLibrary;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServicesLayer.BooksLibrary
{
    public class SubCategoryServices : BaseServices, ISubCategoryServices
    {
        public SubCategoryServices(BooksDbContext database) : base(database)
        {

        }

        public SubCategory ReadOne(int id)
        {
            return _database.SubCategories.SingleOrDefault(t => t.Id == id);
        }

        public async Task<IEnumerable<SubCategory>> ReadAll()
        {
            return await _database.SubCategories
                .Include(c => c.Category)
                .Select(
                c => new SubCategory
                {
                    Id = c.Id,
                    CategoryId = c.CategoryId,
                    Name = c.Name,
                    Category = new Category
                    {
                        Id = c.Category.Id,
                        Name = c.Category.Name,
                        subCategories = null
                    }
                }
                )
                .ToListAsync();
        }

        public SubCategory Create(SubCategory SubCategory)
        {
            Category category = _database.Categories.SingleOrDefault(c => c.Id == SubCategory.CategoryId);
            if(category == null)
            {
                throw new RecordNotFoundException();
            }
            SubCategory.Category = category;
            _database.SubCategories.Add(SubCategory);
            _database.SaveChanges();
            return SubCategory;
        }

        public void Update(SubCategory SubCategory)
        {
            var result = _database.SubCategories.SingleOrDefault((oldSubCategory) => oldSubCategory.Id == SubCategory.Id);
            if (result != null)
            {
                _database.Entry(result).CurrentValues.SetValues(SubCategory);
                _database.SaveChanges();
            }
        }

        public void Delete(int id)
        {
            var SubCategory = new SubCategory { Id = id };
            _database.SubCategories.Attach(SubCategory);
            var deleted = _database.SubCategories.Remove(SubCategory);
            _database.SaveChanges();
        }
    }
}
