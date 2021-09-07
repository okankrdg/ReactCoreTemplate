using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactCoreTemplate.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ProjectTypeController : ControllerBase
    {
        private static readonly string[] Names = new[]
        {
            "Tübitak", "Bap", "Cumhurbaşkanlığı", "Avrupa Birliği", "Sanayi Bak."
        };
        [HttpGet]
        public IEnumerable<ProjectTypeDTO> Get()
        {
            var rng = new Random();
            return Enumerable.Range(1, 5).Select(index => new ProjectTypeDTO
            {
                Date = DateTime.Now.AddDays(index),
                Name = Names[rng.Next(Names.Length)]
            })
            .ToArray();
        }
    }
}
