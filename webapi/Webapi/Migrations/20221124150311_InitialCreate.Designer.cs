﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Webapi.Data;

#nullable disable

namespace Webapi.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20221124150311_InitialCreate")]
    partial class InitialCreate
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Webapi.Models.Domains.Cart", b =>
                {
                    b.Property<int>("CartId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("CartId"));

                    b.Property<string>("DateAdded")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("DiscountedPrice")
                        .HasColumnType("float");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<long>("ProductId")
                        .HasColumnType("bigint");

                    b.Property<string>("ProductName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("Size")
                        .HasColumnType("int");

                    b.Property<double>("TotalPrice")
                        .HasColumnType("float");

                    b.Property<string>("UserName")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("CartId");

                    b.ToTable("Carts");
                });

            modelBuilder.Entity("Webapi.Models.Domains.Order", b =>
                {
                    b.Property<int>("OrderId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("OrderId"));

                    b.Property<string>("Address")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("City")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Country")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("DateAdded")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("DiscountedPrice")
                        .HasColumnType("float");

                    b.Property<double>("GstAddedPrice")
                        .HasColumnType("float");

                    b.Property<string>("LandMark")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Locality")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("MobileNo")
                        .HasColumnType("int");

                    b.Property<string>("PaymentMode")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<bool?>("ProcessedStatus")
                        .HasColumnType("bit");

                    b.Property<long>("ProductId")
                        .HasColumnType("bigint");

                    b.Property<string>("ProductName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Quantity")
                        .HasColumnType("int");

                    b.Property<int>("Size")
                        .HasColumnType("int");

                    b.Property<string>("State")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TrackingStatus")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int?>("ZipCode")
                        .HasColumnType("int");

                    b.HasKey("OrderId");

                    b.ToTable("Orders");
                });

            modelBuilder.Entity("Webapi.Models.Domains.Product", b =>
                {
                    b.Property<long>("ProductId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("bigint");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<long>("ProductId"));

                    b.Property<bool?>("Availability")
                        .HasColumnType("bit");

                    b.Property<string>("CreatedAt")
                        .HasColumnType("nvarchar(max)");

                    b.Property<double>("DiscountedPrice")
                        .HasColumnType("float");

                    b.Property<double>("Price")
                        .HasColumnType("float");

                    b.Property<string>("ProductName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("brand")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("category")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("colour")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("ProductId");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
