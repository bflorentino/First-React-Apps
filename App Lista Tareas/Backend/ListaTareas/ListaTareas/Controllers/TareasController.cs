using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ListaTareas.DTOS;
using ListaTareas.Services;
using System.Threading.Tasks;

namespace ListaTareas.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TareasController : ControllerBase
    {
        private readonly ITareasServices services;

        public TareasController(ITareasServices taskServices)
        {
            services = taskServices;
        }

        [HttpPost]
        public async Task<IActionResult> AddTask(CreateTareaBinding task)
        {
            return Ok(await services.AddTask(task));
        }

        [HttpGet]
        public async Task<IActionResult> GetAllTaks()
        {
            return Ok(await services.GetAllTasks());
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetTaskById(int id)
        {
            return Ok(await services.GetTaskById(id));
        }

        [HttpPut]
        public async Task<IActionResult> PutTask(EditTareaBinding task)
        {
            return Ok(await services.UpdateTask(task));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult>DeleteTask(int id)
        {
            return Ok(await services.DeleteTask(id));
        }

    }
}
