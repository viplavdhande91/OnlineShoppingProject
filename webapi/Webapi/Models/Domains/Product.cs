namespace Webapi.Models.Domains
{
    public class Product
    {
        
        public long ProductId { get; set; }
        public string? ProductName{ get; set; }
        public double Price { get; set; }

        public double DiscountedPrice { get; set; }

        public string? CreatedAt { get; set; }

        public string? brand { get; set; }

        public string? colour { get; set; }

        public string? category { get; set; }


        public Boolean? Availability { get; set; }





    }
}
