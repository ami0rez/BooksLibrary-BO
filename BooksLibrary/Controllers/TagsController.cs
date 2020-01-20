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
    public class TagsController : ControllerBase
    {
        private ITagsServices _tags;
        public TagsController(ITagsServices tags)
        {
            _tags = tags;
        }
        // GET: api/Tags
        [HttpGet]
        public IEnumerable<Tag> Get()
        {
            return _tags.ReadAll();
        }

        // GET: api/Tags/5
        [HttpGet("{id}", Name = "GetTag")]
        public Tag Get(int id)
        {
            return _tags.ReadOne(id);
        }

        // POST: api/Tags
        [HttpPost]
        public ActionResult Post([FromBody] Tag tag)
        {
            var createdTag = _tags.Create(tag);
            return Ok(createdTag);
        }

        // PUT: api/Tags/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Tag tag)
        {
            tag.Id = id;
            _tags.Update(tag);
            return Ok();
        }

        // DELETE: api/Tags/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _tags.Delete(id);
            return Ok();
        }
    }
}
