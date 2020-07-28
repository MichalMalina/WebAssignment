using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebAssignment.Models
{
    public class ShoppingCart
    {
        public int ShoppingCartId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; }

        public ShoppingCart() { }
    }
}
