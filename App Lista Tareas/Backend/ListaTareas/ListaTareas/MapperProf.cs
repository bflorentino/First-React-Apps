using AutoMapper;
using ListaTareas.DTOS;
using ListaTareas.Entity;

namespace ListaTareas
{
    public class MapperProf:Profile
    {
       public MapperProf()
        {
            CreateMap<CreateTareaBinding, Tarea>();
            CreateMap<Tarea, TareaViewModel>();
            CreateMap<TareaViewModel, Tarea>();
        }
    }
}