using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Core.Models;
using Core.Queries;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer.BooksLibrary;

namespace BooksLibrary.Controllers.Books
{
    [Route("api/[controller]")]
    [ApiController]
    public class BooksController : ControllerBase
    {
        private IBooksServices _Books;
        public BooksController(IBooksServices Books)
        {
            _Books = Books;
        }
        // GET: api/Books
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _Books.ReadAll();
        }

        // GET: api/Books/5
        [HttpGet("{id}", Name = "GetBooks")]
        public Book Get(int id)
        {
            return _Books.ReadOne(id);
        }
        // GET: api/FilterBooks
        [HttpPost("api/books/filterBooks", Name = "FilterBooks")]
        public IEnumerable<BookResponse> FilterBooks([FromBody] FilterQuery query)
        {
            return _Books.FilterBy(query);
        }

        // GET: api/Books/5
        [HttpPost("api/books/filterOptions/", Name = "GetFilters")]
        public FilterOptions GetFilters([FromBody] FilterQuery query)
        {
            return _Books.GetFilters(query);
        }

        // POST: api/Books
        [HttpPost]
        public ActionResult Post([FromBody] CreateBookQuery query)
        {
            var createdBook = _Books.Create(query);
            return Ok(createdBook);
        }

        // PUT: api/Books/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Book Book)
        {
            Book.Id = id;
            _Books.Update(Book);
            return Ok();
        }

        // DELETE: api/Books/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Books.Delete(id);
            return Ok();
        }
    }
}