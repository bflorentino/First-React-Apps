using System.Collections.Generic;
using System;

namespace ListaTareas.Services
{
    public class ServerRes<T>
    {
        public T Data { get; set; }
        public bool Success { get; set; } = true;
        public string Message { get; set; } = null;
    }
}