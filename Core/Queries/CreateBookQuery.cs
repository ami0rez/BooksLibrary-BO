using Core.Models;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Core.Queries
{
    public class CreateBookQuery
    {

        [Required]
        public string Name { get; set; }

        [Required]
        public string ImageBase64 { get; set; }

        [Required]
        public IList<int> Authors { get; set; }

        [Required]
        public int EditorId { get; set; }

        [Required]
        public IList<int> Tags { get; set; }

        [Required]
        public Ressource Ressource { get; set; }

        [Required]
        public IList<int> SubCategories { get; set; }
    }
}
