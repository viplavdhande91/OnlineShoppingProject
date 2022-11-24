using System.Diagnostics.Metrics;
using System.Drawing;
using System.Net;
using System.Numerics;
using System.Reflection.Emit;
using System.Reflection;
using Webapi.Models.Domains;
namespace Webapi.Models.Domains
{
    public class Order
    {
        public int OrderId { get; set; }

        public string? Address { get; set; }

        public string? LandMark { get; set; }
        public string? Locality { get; set; }

        public string? City { get; set; }
        public string? State { get; set; }
        public string? Country { get; set; }
        public int? ZipCode { get; set; }

        public string? PaymentMode { get; set; }

        public double Price { get; set; }

        public double GstAddedPrice { get; set; }

        public double DiscountedPrice { get; set; }

        public int Size { get; set; } //SIZE OF SHOE
        public int Quantity { get; set; } //NUMBER OF UNITS PURCHASED

        public int MobileNo { get; set; }


        public string? ProductName { get; set; }

        public Boolean? ProcessedStatus { get; set; }

        public string? TrackingStatus { get; set; }

        public long ProductId { get; set; }

        public string? DateAdded { get; set; }

    }
}

