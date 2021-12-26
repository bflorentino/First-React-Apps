using System;
using System.Collections.Generic;

#nullable disable

namespace ListaTareas.Entity
{
    public partial class Tarea
    {
        public int Id { get; set; }
        public string Detalles { get; set; }
        public bool Realizada { get; set; }
        public DateTime Fecha { get; set; }
    }
}
