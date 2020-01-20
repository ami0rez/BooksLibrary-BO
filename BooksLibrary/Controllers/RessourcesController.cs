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
    public class RessourcesController : ControllerBase
    {
        private IRessourcesServices _Ressources;
        public RessourcesController(IRessourcesServices Ressources)
        {
            _Ressources = Ressources;
        }
        // GET: api/Ressources
        [HttpGet]
        public IEnumerable<Ressource> Get()
        {
            return _Ressources.ReadAll();
        }

        // GET: api/Ressources/5
        [HttpGet("{id}", Name = "GetRessource")]
        public Ressource Get(int id)
        {
            return _Ressources.ReadOne(id);
        }

        // POST: api/Ressources
        [HttpPost]
        public ActionResult Post([FromBody] Ressource Ressource)
        {
            var createdRessource = _Ressources.Create(Ressource);
            return Ok(createdRessource);
        }

        // PUT: api/Ressources/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Ressource Ressource)
        {
            Ressource.Id = id;
            _Ressources.Update(Ressource);
            return Ok();
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            _Ressources.Delete(id);
            return Ok();
        }
    }
}