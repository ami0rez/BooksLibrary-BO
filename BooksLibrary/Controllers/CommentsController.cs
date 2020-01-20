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
    public class CommentsController : ControllerBase
    {
        private ICommentServices _Comments;
        public CommentsController(ICommentServices Comments)
        {
            _Comments = Comments;
        }
        // GET: api/Comments
        [HttpGet]
        public IEnumerable<Comment> Get()
        {
            return _Comments.ReadAll();
        }

        // GET: api/Comments/5
        [HttpGet("{id}", Name = "GetComment")]
        public Comment Get(int id)
        {
            return _Comments.ReadOne(id);
        }

        // POST: api/Comments
        [HttpPost]
        public ActionResult Post([FromBody] Comment Comment)
        {
            var createdComment = _Comments.Create(Comment);
            return Ok(createdComment);
        }

        // PUT: api/Comments/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Comment Comment)
        {
            Comment.Id = id;
            _Comments.Update(Comment);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Comments.Delete(id);
            return Ok();
        }
    }
}