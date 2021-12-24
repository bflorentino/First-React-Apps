using System.Threading.Tasks;
using ListaTareas.DTOS;
using ListaTareas.Entity;
using System.Collections.Generic;

namespace ListaTareas.Services
{
    public interface ITareasServices
    {
        Task<ServerRes<List<TareaViewModel>>> AddTask(CreateTareaBinding task);
        Task<ServerRes<TareaViewModel>> GetTaskById(int id);
        Task<ServerRes<List<TareaViewModel>>> GetAllTasks();
        Task<ServerRes<List<TareaViewModel>>> UpdateTask(EditTareaBinding task);
        Task<ServerRes<List<TareaViewModel>>> DeleteTask(int id);
    }
}
