using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Webapi.Models.Domains
{
    public class BillingInfo
    {
        [Key]
        public Guid billingId { get; set; }

        public string? Username { get; set; }

        public string? FirstName { get; set; }

        public string? LastName { get; set; }


        public string? Address { get; set; }


        public string? State { get; set; }
        public string? Country { get; set; }
        public int? ZipCode { get; set; }


        public double Price { get; set; }
        public double TotalCost { get; set; }


        public int Quantity { get; set; } //NUMBER OF UNITS PURCHASED

        public string? MobileNo { get; set; }



        public Boolean? ProcessedStatus { get; set; }

        public string? TrackingStatus { get; set; }


    }
}
