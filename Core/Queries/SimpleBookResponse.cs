using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Queries
{
    public class SimpleBookResponse
    {
        public int Id { get; set; }

        public string Name { get; set; }

        public string Base64Image { get; set; }

        public IList<string> Authors { get; set; }

        public string Editor { get; set; }

        public IList<string> Tags { get; set; }

        public IList<string> Comment { get; set; }


        public IList<string> SubCategories { get; set; }
    }
}
