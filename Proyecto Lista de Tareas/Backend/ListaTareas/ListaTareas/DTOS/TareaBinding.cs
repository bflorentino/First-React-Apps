using System;
using System.ComponentModel.DataAnnotations;

namespace ListaTareas.DTOS
{
    public class CreateTareaBinding
    {
        [Required]
        public string Detalles { get; set; }
        public bool Realizada { get; set; } = false;
        public DateTime Fecha { get; set; } = DateTime.Now;
    }

    public class EditTareaBinding
    {
        public int Id { get; set; }
        public string Detalles { get; set; }
        public bool Realizada { get; set; }
        public DateTime Fecha { get; set; }
    }
}
