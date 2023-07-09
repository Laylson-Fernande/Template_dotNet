using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Template.API.Data;
using Template.API.Models;

namespace Template.API.Controllers.users
{
    [ApiController]
    [Route("users")]
    public class UsersController : ControllerBase
    {

        private readonly DataContext _context;
        public UsersController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public IEnumerable<Usuario> getAllUsers(){
            return _context.Usuarios;
        }

        [HttpGet("{id}")]
        public IEnumerable<Usuario> getUserById(int id){
            return _context.Usuarios.Where(user => user.Id == id);
        }
        
    }
}