﻿using Microsoft.EntityFrameworkCore;
using System.Data;
using Webapi.Models.Domains;

namespace Webapi.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {

        }


      
        public DbSet<User> Users{ get; set; }
        public DbSet<Cart> Carts { get; set; }
        public DbSet<Order> Orders { get; set; }
        public DbSet<Product> Products { get; set; }


    }
}


