using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore.ValueGeneration;

namespace Template.API.Models
{
    public class Usuario
    {
        public int Id {get;set;}

        public string Name {get;set;}

        public string Username {get;set;}

        public int PerfilId {get;set;}
    }
}