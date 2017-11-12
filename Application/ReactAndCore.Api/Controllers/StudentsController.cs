using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ReactAndCore.Api.Models;
using Newtonsoft.Json.Linq;

namespace ReactAndCore.Api.Controllers
{
    [Route("api/Students")]
    [Produces("application/json")]
    public class StudentsController : Controller
    {
        [HttpGet]
        public IActionResult GetStudents()
        {
            var students = new List<Student>
            {
                new Student
                {
                    Name = "Student 01",
                    Age = 13,
                    Grade = "1º Grade"
                },
                new Student
                {
                    Name = "Student 02",
                    Age = 15,
                    Grade = "3º Grade"
                },
            };

            return Ok(students);
        }

        [HttpPost]
        public IActionResult PostSaveNewStudent([FromBody]Student newStudent)
        {
            return Ok(true);
        }
    }
}