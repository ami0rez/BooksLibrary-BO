using Core.Models;
using Microsoft.AspNetCore.Http;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Queries
{
    public class CreateBookQuery
    {

        [Required]
        public string Name { get; set; }

        [Required]
        public IFormFile Image { get; set; }
        public string ImageBase64 { get; set; }

        [Required]
        public IList<int> Authors { get; set; }

        [Required]
        public int EditorId { get; set; }

        [Required]
        public IList<int> Tags { get; set; }

        [Required]
        public IFormFile Ressource { get; set; }
        public string RessourcePath { get; set; }

        [Required]
        public IList<int> SubCategories { get; set; }
    }
}
