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
    public class EditorController : ControllerBase
    {
        private IEditorsServices _Editors;
        public EditorController(IEditorsServices Editors)
        {
            _Editors = Editors;
        }
        // GET: api/Editors
        [HttpGet]
        public IEnumerable<Editor> Get()
        {
            return _Editors.ReadAll();
        }

        // GET: api/Editors/5
        [HttpGet("{id}", Name = "GetEditor")]
        public Editor Get(int id)
        {
            return _Editors.ReadOne(id);
        }

        // POST: api/Editors
        [HttpPost]
        public ActionResult Post([FromBody] Editor Editor)
        {
            var createdEditor = _Editors.Create(Editor);
            return Ok(createdEditor);
        }

        // PUT: api/Editors/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Editor Editor)
        {
            Editor.Id = id;
            _Editors.Update(Editor);
            return Ok();
        }

        // DELETE: api/Editors/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Editors.Delete(id);
            return Ok();
        }
    }
}