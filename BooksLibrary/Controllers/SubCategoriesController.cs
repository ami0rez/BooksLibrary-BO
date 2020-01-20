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
    public class SubCategoriesController : ControllerBase
    {
        private ISubCategoryServices _SubCategories;
        public SubCategoriesController(ISubCategoryServices SubCategories)
        {
            _SubCategories = SubCategories;
        }

        // GET: api/SubCategories
        [HttpGet]
        public async Task<IEnumerable<SubCategory>> Get()
        {
            var results = await _SubCategories.ReadAll();
            return results;
        }

        // GET: api/SubCategories/5
        [HttpGet("{id}", Name = "GetSubCategory")]
        public SubCategory Get(int id)
        {
            return _SubCategories.ReadOne(id);
        }

        // POST: api/SubCategories
        [HttpPost]
        public ActionResult Post([FromBody] SubCategory SubCategory)
        {
            var createdSubCategory = _SubCategories.Create(SubCategory);
            return Ok(createdSubCategory);
        }

        // PUT: api/SubCategories/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] SubCategory SubCategory)
        {
            SubCategory.Id = id;
            _SubCategories.Update(SubCategory);
            return Ok();
        }

        // DELETE: api/SubCategories/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _SubCategories.Delete(id);
            return Ok();
        }
    }
}