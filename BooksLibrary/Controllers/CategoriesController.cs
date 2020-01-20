using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer.BooksLibrary;

namespace BooksLibrary.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private ICategoryServices _Categories;
        public CategoriesController(ICategoryServices Categories)
        {
            _Categories = Categories;
        }
        // GET: api/Categories
        [HttpGet]
        public IEnumerable<Category> Get()
        {
            return _Categories.ReadAll();
        }

        // GET: api/Categories/5
        [HttpGet("{id}", Name = "GetCategories")]
        public Category Get(int id)
        {
            return _Categories.ReadOne(id);
        }

        // POST: api/Categories
        [HttpPost]
        public ActionResult Post([FromBody] Category Category)
        {
            var createdCategory = _Categories.Create(Category);
            return Ok(createdCategory);
        }

        // PUT: api/Categories/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Category Category)
        {
            Category.Id = id;
            _Categories.Update(Category);
            return Ok();
        }

        // DELETE: api/Categories/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Categories.Delete(id);
            return Ok();
        }
    }
}