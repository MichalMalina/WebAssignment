using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebAssignment.Models;

namespace WebAssignment.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public string Title { get; set; }

        public double Price { get; set; }

        public double Rating { get; set; }

        public string Image { get; set; }


        public Product() { }

    }
}
