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
    public class AuthorController : ControllerBase
    {
        private IAuthorServices _Authors;
        public AuthorController(IAuthorServices Authors)
        {
            _Authors = Authors;
        }
        // GET: api/Authors
        [HttpGet]
        public IEnumerable<Author> Get()
        {
            return _Authors.ReadAll();
        }

        // GET: api/Authors/5
        [HttpGet("{id}", Name = "GetAuthor")]
        public Author Get(int id)
        {
            return _Authors.ReadOne(id);
        }

        // POST: api/Authors
        [HttpPost]
        public ActionResult Post([FromBody] Author Author)
        {
            var createdAuthor = _Authors.Create(Author);
            return Ok(createdAuthor);
        }

        // PUT: api/Authors/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Author Author)
        {
            Author.Id = id;
            _Authors.Update(Author);
            return Ok();
        }

        // DELETE: api/Authors/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Authors.Delete(id);
            return Ok();
        }
    }
}