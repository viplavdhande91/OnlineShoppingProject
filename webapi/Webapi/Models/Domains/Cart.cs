using System.Drawing;
using System.Numerics;
using System.Reflection;

namespace Webapi.Models.Domains
{
    public class Cart
    {
        public Guid CartId { get; set; }

        public string? UserName { get; set; }
        public double TotalPrice { get; set; }

        public double DiscountedPrice { get; set; }

        public int  Size { get; set; }

        public int  Quantity { get; set; }

        public string? ProductName { get; set; }

        public double Price { get; set; }

        public long ProductId { get; set; }

        public string? DateAdded { get; set; }
    }
}

