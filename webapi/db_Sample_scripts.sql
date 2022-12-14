USE [master]
GO
/****** Object:  Database [sneakersdb]    Script Date: 07-12-2022 23:31:36 ******/
CREATE DATABASE [sneakersdb]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'sneakersdb', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\sneakersdb.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'sneakersdb_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\sneakersdb_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [sneakersdb] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [sneakersdb].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [sneakersdb] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [sneakersdb] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [sneakersdb] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [sneakersdb] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [sneakersdb] SET ARITHABORT OFF 
GO
ALTER DATABASE [sneakersdb] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [sneakersdb] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [sneakersdb] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [sneakersdb] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [sneakersdb] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [sneakersdb] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [sneakersdb] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [sneakersdb] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [sneakersdb] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [sneakersdb] SET  DISABLE_BROKER 
GO
ALTER DATABASE [sneakersdb] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [sneakersdb] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [sneakersdb] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [sneakersdb] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [sneakersdb] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [sneakersdb] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [sneakersdb] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [sneakersdb] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [sneakersdb] SET  MULTI_USER 
GO
ALTER DATABASE [sneakersdb] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [sneakersdb] SET DB_CHAINING OFF 
GO
ALTER DATABASE [sneakersdb] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [sneakersdb] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [sneakersdb] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [sneakersdb] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [sneakersdb] SET QUERY_STORE = OFF
GO
USE [sneakersdb]
GO
/****** Object:  Table [dbo].[__EFMigrationsHistory]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[__EFMigrationsHistory](
	[MigrationId] [nvarchar](150) NOT NULL,
	[ProductVersion] [nvarchar](32) NOT NULL,
 CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY CLUSTERED 
(
	[MigrationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[BillingInfos]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[BillingInfos](
	[billingId] [uniqueidentifier] NOT NULL,
	[Username] [nvarchar](max) NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Address] [nvarchar](max) NULL,
	[State] [nvarchar](max) NULL,
	[Country] [nvarchar](max) NULL,
	[ZipCode] [int] NULL,
	[Price] [float] NOT NULL,
	[Quantity] [int] NOT NULL,
	[MobileNo] [nvarchar](max) NULL,
	[ProcessedStatus] [bit] NULL,
	[TrackingStatus] [nvarchar](max) NULL,
	[TotalCost] [float] NOT NULL,
 CONSTRAINT [PK_BillingInfos] PRIMARY KEY CLUSTERED 
(
	[billingId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Carts]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Carts](
	[CartId] [uniqueidentifier] NOT NULL,
	[UserName] [nvarchar](max) NULL,
	[TotalPrice] [float] NOT NULL,
	[DiscountedPrice] [float] NOT NULL,
	[Quantity] [int] NOT NULL,
	[ProductName] [nvarchar](max) NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[ImageFolderName] [nvarchar](max) NULL,
	[DateAdded] [nvarchar](max) NULL,
 CONSTRAINT [PK_Carts] PRIMARY KEY CLUSTERED 
(
	[CartId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Orders]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Orders](
	[OrderId] [int] IDENTITY(1,1) NOT NULL,
	[billingId] [uniqueidentifier] NOT NULL,
	[ProductId] [uniqueidentifier] NOT NULL,
	[Quantity] [int] NOT NULL,
	[UserName] [nvarchar](max) NULL,
 CONSTRAINT [PK_Orders] PRIMARY KEY CLUSTERED 
(
	[OrderId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Products]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Products](
	[ProductId] [uniqueidentifier] NOT NULL,
	[ProductName] [nvarchar](max) NULL,
	[Price] [float] NOT NULL,
	[DiscountedPrice] [float] NOT NULL,
	[CreatedAt] [nvarchar](max) NULL,
	[brand] [nvarchar](max) NULL,
	[colour] [nvarchar](max) NULL,
	[Processor] [nvarchar](max) NULL,
	[ImageFolderName] [nvarchar](max) NULL,
	[category] [nvarchar](max) NULL,
	[Availability] [bit] NULL,
 CONSTRAINT [PK_Products] PRIMARY KEY CLUSTERED 
(
	[ProductId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Users]    Script Date: 07-12-2022 23:31:36 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Users](
	[UserId] [uniqueidentifier] NOT NULL,
	[EmailAddress] [nvarchar](max) NULL,
	[Password] [nvarchar](max) NULL,
	[FirstName] [nvarchar](max) NULL,
	[LastName] [nvarchar](max) NULL,
	[Role] [nvarchar](max) NULL,
 CONSTRAINT [PK_Users] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221205141134_Initial Create', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221205141533_Pk constraints removed', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221205143429_user id removed', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221205143520_user name added', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221206093835_Added Quantity to order table', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221206095414_InitialCreate', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221206114231_Total cost added', N'7.0.0')
INSERT [dbo].[__EFMigrationsHistory] ([MigrationId], [ProductVersion]) VALUES (N'20221206135012_changed Datatype ofMobileno', N'7.0.0')
GO
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'1503fb7a-63d2-4f2f-a67c-2b9795c60da5', N'viplavdhande91@yahoo.com', N'Viplav', N'Patil', N'Elite Homes,503,C-Wing', N'California', N'United States', 42342, 68715, 2, N'1313131', 1, N'In Transit', 68715)
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'2a494927-d96e-4d2f-9268-307082c5d89b', N'viplavdhande91@yahoo.com', N'Viplav', N'Patil', N'Elite Homes,503,C-Wing', N'Maharashtra', N'India', 4261212, 213189.99, 3, N'8446848547', 1, N'In Transit', 213189.99)
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'36854f9a-01b3-4653-9b1a-45ed083bdbee', N'viplavdhande91@yahoo.com', N'Viplav', N'Patil', N'Elite Homes,503,C-Wing', N'California', N'United States', 42342, 239900, 1, N'313131', 1, N'In Transit', 239900)
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'ff244f55-7d8c-4bf4-90c3-57232cc1e5ce', N'simran@test.com', N'simran ', N'saxena', N'Elite Homes,503,C-Wing', N'Maharashtra', N'United States', 42342, 159996, 2, N'8446848547', 1, N'In Transit', 159996)
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'aa8a64dc-5106-4545-b56f-d46721ba6adc', N'abhay@test.com', N'Abhay', N'Dubey', N'Elite Homes,503,C-Wing', N'Gujrat', N'India', 42342, 20098, 1, N'08446848547', 1, N'In Transit', 20098)
INSERT [dbo].[BillingInfos] ([billingId], [Username], [FirstName], [LastName], [Address], [State], [Country], [ZipCode], [Price], [Quantity], [MobileNo], [ProcessedStatus], [TrackingStatus], [TotalCost]) VALUES (N'49d05cd3-de0b-4765-81cc-d9e1f572b531', N'abhay@test.com', N'Abhay', N'Dubey', N'Elite Homes,503,C-Wing', N'Gujrat', N'India', 42342, 278518, 2, N'8446848547', 1, N'In Transit', 278518)
GO
INSERT [dbo].[Carts] ([CartId], [UserName], [TotalPrice], [DiscountedPrice], [Quantity], [ProductName], [ProductId], [ImageFolderName], [DateAdded]) VALUES (N'253a052c-7684-4154-8fb9-2298414bd40b', N'viplavdhande91@yahoo.com', 19999.99, 18000, 1, N'Acer surface book 2.5', N'7c9e6679-7425-40de-944b-e07fc1f90ae7', N'laptop1', N'12/07/2022')
INSERT [dbo].[Carts] ([CartId], [UserName], [TotalPrice], [DiscountedPrice], [Quantity], [ProductName], [ProductId], [ImageFolderName], [DateAdded]) VALUES (N'5e63d2d8-6191-4a06-897a-250614aba8db', N'simran@test.com', 119900, 98900, 2, N'Apple MacBook Air', N'be170000-f32d-19db-1816-08da26f2ad5b', N'laptop3', N'12/06/2022')
GO
SET IDENTITY_INSERT [dbo].[Orders] ON 

INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (14, N'1503fb7a-63d2-4f2f-a67c-2b9795c60da5', N'be170000-f32d-18db-8694-08da26f2ad5b', 1, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (15, N'1503fb7a-63d2-4f2f-a67c-2b9795c60da5', N'be170000-f32d-18db-65b3-08da26f2ad5c', 3, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (16, N'36854f9a-01b3-4653-9b1a-45ed083bdbee', N'be170000-f32d-19db-1816-08da26f2ad5b', 2, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (17, N'2a494927-d96e-4d2f-9268-307082c5d89b', N'be170000-f32d-18db-8694-08da26f2ad5b', 3, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (18, N'2a494927-d96e-4d2f-9268-307082c5d89b', N'7c9e6679-7425-40de-944b-e07fc1f90ae7', 1, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (19, N'2a494927-d96e-4d2f-9268-307082c5d89b', N'be170000-f32d-18db-8694-08da26f2ad5b', 2, N'viplavdhande91@yahoo.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (20, N'ff244f55-7d8c-4bf4-90c3-57232cc1e5ce', N'be170000-f32d-19db-1816-08da26f2ad5b', 1, N'simran@test.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (21, N'ff244f55-7d8c-4bf4-90c3-57232cc1e5ce', N'be170000-f32d-18db-65b3-08da26f2ad5c', 4, N'simran@test.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (22, N'49d05cd3-de0b-4765-81cc-d9e1f572b531', N'be170000-f32d-19db-1816-08da26f2ad5b', 2, N'abhay@test.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (23, N'49d05cd3-de0b-4765-81cc-d9e1f572b531', N'be170000-f32d-18db-8694-08da26f2ad5b', 1, N'abhay@test.com')
INSERT [dbo].[Orders] ([OrderId], [billingId], [ProductId], [Quantity], [UserName]) VALUES (24, N'aa8a64dc-5106-4545-b56f-d46721ba6adc', N'be170000-f32d-18db-65b3-08da26f2ad5c', 2, N'abhay@test.com')
SET IDENTITY_INSERT [dbo].[Orders] OFF
GO
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'be170000-f32d-19db-1816-08da26f2ad5b', N'Apple MacBook Air', 119900, 98900, N'3/12/2022', N'Apple', N'Silver', N'm1_chip', N'laptop3', N'laptop', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'be170000-f32d-18db-4dbd-08da26f2ad5b', N'HP All in one', 48990, 42000, N'3/12/2022', N'HP', N'Black', N'i3', N'desktop1', N'desktop', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'be170000-f32d-18db-8694-08da26f2ad5b', N'Lenovo IdeaPad 3 ', 38618, 34000, N'3/12/2022', N'Lenovo', N'Black', N'i3', N'laptop4', N'laptop', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'be170000-f32d-18db-65b3-08da26f2ad5c', N'MOTOROLA tab g20', 9999, 7890, N'3/12/2022', N'Motorola', N'Black', N'snapdragon', N'tablet1', N'tablet', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'9245fe4a-d402-451c-b9ed-9c1a04247482', N'Dell XPS Surface', 39999.99, 35000, N'1/12/2022', N'Dell', N'Silver', N'i7', N'laptop2', N'laptop', 1)
INSERT [dbo].[Products] ([ProductId], [ProductName], [Price], [DiscountedPrice], [CreatedAt], [brand], [colour], [Processor], [ImageFolderName], [category], [Availability]) VALUES (N'7c9e6679-7425-40de-944b-e07fc1f90ae7', N'Acer surface book 2.5', 19999.99, 18000, N'1/12/2022', N'Acer', N'Silver', N'i5', N'laptop1', N'laptop', 1)
GO
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'bc1b4036-4347-421e-ab64-3d4b17ccd513', N'ganesh@admin.com', N'qwer', N'Ganesh', N'Patnaik', N'Seller')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'77f5a809-e0da-489f-9725-6e626b628e2e', N'abhay@test.com', N'asdf', N'Abhay', N'Gupta', N'Seller')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'ae59e14f-dabb-4671-9c66-9f2a71a1b6f0', N'viplavdhande91@yahoo.com', N'zxcv', N'Viplav', N'Patil', N'Seller')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'b7e60e63-eb38-4c47-bd02-c1a4f1c0eab5', N'viplav.patil@nagarro.com', N'qwer', N'Viplav', N'Patil', N'Buyer')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'ae4ab068-1d70-4457-84c3-cfa0a28acc63', N'viplavdhande91@yahoo.com', N'asdf', N'Viplav', N'Patil', N'Buyer')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'8df0ef00-509a-49cc-b155-d6871563a052', N'avi@test.com', N'qwer', N'Avinash', N'Patil', N'Buyer')
INSERT [dbo].[Users] ([UserId], [EmailAddress], [Password], [FirstName], [LastName], [Role]) VALUES (N'aff11447-b892-4b2b-83e2-efbe7c2c2b86', N'', N'', N'', N'', N'')
GO
ALTER TABLE [dbo].[BillingInfos] ADD  DEFAULT ((0.0000000000000000e+000)) FOR [TotalCost]
GO
USE [master]
GO
ALTER DATABASE [sneakersdb] SET  READ_WRITE 
GO
