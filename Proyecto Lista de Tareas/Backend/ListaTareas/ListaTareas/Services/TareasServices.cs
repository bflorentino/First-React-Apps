using AutoMapper;
using ListaTareas.Entity;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using ListaTareas.DTOS;
using System.Linq;

namespace ListaTareas.Services
{
    public class TareasServices:ITareasServices
    {
        private readonly IMapper mapper;  
        private readonly Lista_TareasContext context;

        public TareasServices(IMapper mapper, Lista_TareasContext context)
        {
            this.mapper = mapper;
            this.context = context;
        }

        public async Task<ServerRes<List<TareaViewModel>>>AddTask(CreateTareaBinding task)
        {
            // Add a new task to Database
            ServerRes<List<TareaViewModel>> response;
            var taskToEntity = mapper.Map<Tarea>(task);
            await context.AddAsync(taskToEntity);
            await context.SaveChangesAsync();
            response = await GetAllTasks();
            response.Message = "Task added succesfully";
            return response;    
        }

        public async Task<ServerRes<TareaViewModel>>GetTaskById(int id)
        {
            // Get task by Id from database
            ServerRes<TareaViewModel>response = new();
            var task = await context.Tareas.FirstOrDefaultAsync(c => c.Id == id);
            response.Data = mapper.Map<TareaViewModel>(task);
            return response;
        }

        public async Task<ServerRes<List<TareaViewModel>>> GetAllTasks()
        {
            // Get all tasks from database
            ServerRes<List<TareaViewModel>> response = new();
            var tasks = await context.Tareas.OrderByDescending(x => x.Id).ToListAsync();
            response.Data = tasks.Select(t => mapper.Map<TareaViewModel>(t)).ToList();
            return response;
        }

        public async Task<ServerRes<List<TareaViewModel>>> UpdateTask(EditTareaBinding task)
        {
            // Update a task
            ServerRes<List<TareaViewModel>> response;
            var taskToUpdate = await context.Tareas.FirstOrDefaultAsync(c => c.Id == task.Id);
            taskToUpdate.Realizada = task.Realizada;
            taskToUpdate.Detalles = task.Detalles;
            context.Update(taskToUpdate);
            await context.SaveChangesAsync();
            response = await GetAllTasks();
            response.Message = "Task updated succesfully";
            return response;
        }

        public async Task<ServerRes<List<TareaViewModel>>> DeleteTask(int id)
        {
            ServerRes<List<TareaViewModel>> response;
            var taskToDelete = await context.Tareas.FirstOrDefaultAsync(c => c.Id == id);
            context.Remove(taskToDelete);
            await context.SaveChangesAsync();
            response = await GetAllTasks();
            response.Message = "Task Deleted";
            return response;
        }
    }
}