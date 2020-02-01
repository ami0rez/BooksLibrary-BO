using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Core.Models;
using Core.Queries;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServicesLayer.BooksLibrary;

namespace BooksLibrary.Controllers.Books
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class BooksController : ControllerBase
    {
        private IBooksServices _Books;
        public BooksController(IBooksServices Books)
        {
            _Books = Books;
        }
        // GET: api/Books
        [AllowAnonymous]
        [HttpGet]
        public IEnumerable<Book> Get()
        {
            return _Books.ReadAll();
        }

        // GET: api/Books/5
        [HttpGet("editor", Name = "GetEdditorBooks")]
        public IEnumerable<BookResponse> GetEditorBooks()
        {
            var accessToken = User.Identities.First().Claims;
            var id = accessToken.SingleOrDefault(c => c.Type == ClaimTypes.Name).Value;
            return _Books.GetEditorBooks(int.Parse(id));
        }

        [AllowAnonymous]
        // GET: api/Books/5
        [HttpGet("{id}", Name = "GetBooks")]
        public BookResponse Get(int id)
        {
            return _Books.ReadOne(id);
        }
        // GET: api/FilterBooks
        [AllowAnonymous]
        [HttpPost("api/books/filterBooks", Name = "FilterBooks")]
        public IEnumerable<BookResponse> FilterBooks([FromBody] FilterQuery query)
        {
            return _Books.FilterBy(query);
        }

        // GET: api/Books/5
        [AllowAnonymous]
        [HttpPost("api/books/filterOptions/", Name = "GetFilters")]
        public FilterResponse GetFilters([FromBody] FilterQuery query)
        {
            var result = _Books.GetFilters(query);

            return new FilterResponse
            {
                Authors = result.Authors.Select(a => new FilterItem { Id = a?.Id, Name = string.Format("{0} {1}", a?.FirstName, a?.LastName) }).ToList(),
                Editors = result.Editors.Select(e => new FilterItem { Id = e?.Id, Name = string.Format("{0} {1}", e?.FirstName, e?.LastName) }).ToList(),
                //Categories = result.Categories.Select(c => new FilterItem { Id = c?.Id, Name = c?.Name }).ToList(),
                SubCategories = result.SubCategories.Select(sc => new FilterItem { Id = sc?.Id, Name = sc?.Name }).ToList(),
                Tags = result.Tags.Select(t => new FilterItem { Id = t?.Id, Name = t?.Name }).ToList(),
            };
        }

        // POST: api/Books
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] IFormCollection query)
        {
            //byte[] fileBytes;
            //byte[] imageBytes;
            //using (var memoryStream = new MemoryStream())
            //{
            //    await query.CopyToAsync(memoryStream);
            //    fileBytes = memoryStream.ToArray();
            //}
            ////using (var memoryStream = new MemoryStream())
            ////{
            ////    await query.Image.CopyToAsync(memoryStream);
            ////    imageBytes = memoryStream.ToArray();
            ////}

            //var filename = query.FileName;
            //var contentType = query.ContentType;
            ////System.IO.File.WriteAllBytes("resources\\" + filename, fileBytes);
            ////query.RessourcePath = "resources\\" + filename;
            ////query.ImageBase64 = Convert.ToBase64String(imageBytes);
            ////var createdBook = _Books.Create(query);

            return Ok();
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