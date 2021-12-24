using System;

namespace ListaTareas.DTOS
{
    public class TareaViewModel
    {
        public int Id { get; set; } 
        public string Detalles { get; set; }
        public bool Realizada { get; set; } 
        public DateTime Fecha { get; set; }
    }
}
