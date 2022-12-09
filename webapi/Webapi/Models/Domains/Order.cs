using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net;
using System.Numerics;
using System.Reflection.Emit;
using System.Reflection;
using Webapi.Models.Domains;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.Models.Domains
{
    public class Order
    {
       
        [Key]
        public int OrderId { get; set; }

        public Guid billingId { get; set; }

        public Guid ProductId { get; set; }

        public int Quantity { get; set; }

        public string? UserName { get; set; }




    }
}

