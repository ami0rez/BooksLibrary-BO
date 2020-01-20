using Core.Enums;
using System;
using System.Collections.Generic;
using System.Text;

namespace Core.Models
{
    public class Ressource
    {
        public int Id { get; set; }

        public RessourceFormat Format { get; set; }
        
        public string Location { get; set; }
    }
}
