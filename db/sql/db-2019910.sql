-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 10, 2019 at 06:34 PM
-- Server version: 5.7.25
-- PHP Version: 7.3.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sweet-corner-api`
--
CREATE DATABASE IF NOT EXISTS `sweet-corner-api` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sweet-corner-api`;

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` int(10) UNSIGNED NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `quantity` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `pid`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`, `cartId`, `productId`) VALUES
(9, 'a46ccdcb-726a-4ac0-89a6-725e9cce07f1', 0, '2019-05-16 20:35:45', '2019-05-16 23:07:36', '2019-05-16 23:07:57', 1, 8),
(10, '29a37a16-75fd-476c-a936-28db0565492d', 4, '2019-05-16 21:52:04', '2019-05-16 22:48:18', '2019-05-16 23:11:18', 1, 9),
(11, '8af349c5-bc1f-4ef0-bd65-3e2b0be7422c', 3, '2019-05-16 23:09:10', '2019-05-16 23:09:10', '2019-05-16 23:12:23', 1, 7),
(12, '35374c52-3eae-4a33-8706-7b341be46e3d', 5, '2019-05-16 23:24:49', '2019-05-16 23:25:17', '2019-05-16 23:28:40', 2, 7),
(13, '1df706c6-44cf-4be4-bb51-d5e16ba62b54', 2, '2019-05-16 23:42:02', '2019-05-17 00:01:25', '2019-05-17 00:23:43', 3, 7),
(14, '49685734-afed-42b3-b960-a0b77b778fea', 2, '2019-05-16 23:42:13', '2019-05-16 23:42:13', NULL, 4, 7),
(15, 'd43fc93c-a07c-49a4-a5a4-d5eaf4cb2ee7', 1, '2019-05-17 00:01:58', '2019-05-17 00:01:58', '2019-05-17 00:23:43', 3, 8),
(16, 'fb9734a4-e086-4de4-9ef5-3956a9ebbe20', 7, '2019-05-17 00:24:23', '2019-05-17 00:32:17', '2019-05-17 23:07:51', 5, 8),
(17, '5933ae28-88ea-404c-b735-9009a21cbf9b', 1, '2019-05-17 00:32:42', '2019-05-17 00:32:42', '2019-05-17 23:07:51', 5, 7),
(18, '80ab5c99-3a83-4233-afa7-8859009592bf', 1, '2019-05-17 01:05:06', '2019-05-17 01:05:06', NULL, 6, 2),
(19, 'a9ff86bc-e564-49da-8b44-cc2eeff0359d', 6, '2019-05-17 23:20:01', '2019-05-17 23:20:01', '2019-05-17 23:21:34', 7, 5),
(20, '06500be3-e4db-4377-9a7d-7b8da7ce2ab4', 4, '2019-05-17 23:20:45', '2019-05-17 23:20:45', '2019-05-17 23:21:34', 7, 8),
(21, '83da5caa-46cd-4116-bce3-ff18812195ef', 8, '2019-05-17 23:21:09', '2019-05-17 23:21:09', '2019-05-17 23:21:34', 7, 9),
(22, '795817d5-dab9-4b80-802e-c28f17cf899d', 8, '2019-05-18 00:49:43', '2019-05-18 00:49:43', NULL, 8, 9),
(23, 'f6174068-1cf7-41a3-92aa-a82a974b92ee', 8, '2019-05-18 17:06:23', '2019-05-18 17:06:23', '2019-05-18 17:11:47', 9, 9),
(24, '9986fbc1-56be-4acf-887d-77041a3df8b9', 8, '2019-05-18 17:07:36', '2019-05-18 17:07:36', '2019-05-18 17:11:47', 9, 2),
(25, '7e0d0c13-7bb8-450e-8b25-31d1d4cd234c', 8, '2019-05-18 18:13:18', '2019-05-18 18:13:18', '2019-05-18 18:18:48', 10, 2),
(26, '16dd3365-6260-420e-a63a-6c13e6ae332e', 8, '2019-05-18 18:20:02', '2019-05-18 18:20:02', '2019-05-18 18:20:41', 11, 2),
(27, '7d612b27-143a-499d-9a21-2dd7a74e704b', 8, '2019-05-18 19:03:51', '2019-05-18 19:03:51', '2019-05-29 17:15:33', 12, 2),
(28, '66a372ef-a598-49e3-8961-04bb2cfa09e6', 8, '2019-05-29 17:16:12', '2019-05-29 17:16:12', '2019-05-30 22:04:20', 13, 2),
(29, '2edb2c46-2053-4c9b-8e3b-277bd2fba7e6', 3, '2019-05-30 00:45:58', '2019-05-30 03:14:29', '2019-05-30 19:22:17', 14, 2),
(30, '84d67253-7b2a-4d1d-9350-4f1997c228fb', 2, '2019-05-30 19:19:38', '2019-05-30 19:19:38', '2019-05-30 19:30:17', 14, 7),
(31, 'ad2ab940-82fb-48dd-b03a-c11f78de3a40', 2, '2019-05-30 19:32:46', '2019-05-30 19:32:46', '2019-05-30 22:15:24', 15, 7),
(32, 'a1cebe93-5b21-4a93-964e-e5ac512a1136', 6, '2019-05-30 19:33:45', '2019-05-30 19:33:45', '2019-05-30 22:15:24', 15, 9),
(33, 'adc3adc8-b996-44c7-b7d6-fe01ca85f3af', 6, '2019-05-30 22:02:51', '2019-05-30 22:02:51', '2019-05-30 22:04:20', 13, 6),
(34, 'c23dffc9-9c5c-48d7-a212-6d35ea14b883', 2, '2019-07-24 23:19:54', '2019-07-24 23:20:29', NULL, 19, 1),
(35, 'a251cd7a-645d-4b91-a38c-17a5a44bb500', 2, '2019-07-26 17:55:21', '2019-07-26 17:55:21', NULL, 20, 1),
(36, '44d81e52-adcd-4cc3-8a2e-d17c39ebc9d2', 1, '2019-07-26 17:56:51', '2019-07-26 17:56:51', NULL, 21, 7);

-- --------------------------------------------------------

--
-- Table structure for table `carts`
--

CREATE TABLE `carts` (
  `id` int(11) NOT NULL,
  `lastInteraction` datetime DEFAULT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `userId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `carts`
--

INSERT INTO `carts` (`id`, `lastInteraction`, `pid`, `createdAt`, `updatedAt`, `deletedAt`, `userId`, `statusId`) VALUES
(1, '2019-05-16 23:11:18', '96a53f8c-645c-4483-9a21-7184d7acf62b', '2019-05-16 20:35:45', '2019-05-16 23:11:18', '2019-05-16 23:12:23', NULL, 2),
(2, '2019-05-16 23:25:17', '365c2340-2f5b-47fc-b739-9d16204da824', '2019-05-16 23:24:49', '2019-05-16 23:25:17', '2019-05-16 23:28:40', NULL, 2),
(3, '2019-05-17 00:01:58', '1a967aec-7971-46ba-b241-a3be8ca35fe0', '2019-05-16 23:42:02', '2019-05-17 00:21:19', '2019-05-17 00:23:43', 1, 2),
(4, '2019-05-16 23:42:13', '2a19622d-f045-4b43-bc6f-4077e08faf0e', '2019-05-16 23:42:13', '2019-05-18 19:17:33', NULL, 1, 5),
(5, '2019-05-17 00:32:42', 'fea481d0-04ec-4a5e-a495-5279abebc47c', '2019-05-17 00:24:23', '2019-05-17 23:07:51', '2019-05-17 23:07:51', 1, 3),
(6, '2019-05-17 01:05:06', '8e95cddc-8b0f-4311-ac65-8a927ede2431', '2019-05-17 01:05:06', '2019-05-18 19:17:33', NULL, 1, 5),
(7, '2019-05-17 23:21:09', '35754fcd-846a-4644-a47c-23c334021213', '2019-05-17 23:20:01', '2019-05-17 23:21:34', '2019-05-17 23:21:34', 1, 3),
(8, '2019-05-18 00:49:43', 'ada3fc3d-65b9-433a-84ae-6bee60c75127', '2019-05-18 00:49:43', '2019-05-18 00:52:13', NULL, 2, 2),
(9, '2019-05-18 17:07:36', '4cfbe94b-cfdc-4c6f-b619-adebc442ef9e', '2019-05-18 17:06:23', '2019-05-18 17:11:47', '2019-05-18 17:11:47', NULL, 3),
(10, '2019-05-18 18:13:18', '88118b60-ab11-4f0f-9f0b-3c54802f666f', '2019-05-18 18:13:18', '2019-05-18 18:18:48', '2019-05-18 18:18:48', 1, 3),
(11, '2019-05-18 18:20:02', 'b9d978c1-aa79-475c-af1b-072fcb0a574e', '2019-05-18 18:20:02', '2019-05-18 18:20:41', '2019-05-18 18:20:41', NULL, 3),
(12, '2019-05-18 19:17:33', '48c864cc-a50f-47c5-9632-43a7d3a92af7', '2019-05-18 19:03:51', '2019-05-29 17:15:33', '2019-05-29 17:15:33', 1, 3),
(13, '2019-05-30 22:02:51', '3dabf377-c7b8-4cf2-96ca-271302099fa4', '2019-05-29 17:16:12', '2019-05-30 22:04:20', '2019-05-30 22:04:20', 1, 3),
(14, '2019-05-30 19:22:17', 'eb219d35-9a1f-492f-8b83-eab8660f3d74', '2019-05-30 00:45:58', '2019-05-30 19:22:17', '2019-05-30 19:30:17', NULL, 2),
(15, '2019-05-30 19:33:45', '68e4edf1-07e0-4485-bdde-8df84bc3ce91', '2019-05-30 19:32:46', '2019-05-30 22:15:24', '2019-05-30 22:15:24', NULL, 3),
(16, '2019-07-24 23:09:59', '53665238-7a85-4848-bc22-6ceaa72e19e4', '2019-07-24 23:09:59', '2019-07-24 23:09:59', NULL, NULL, 2),
(17, '2019-07-24 23:12:28', '668d5b76-7710-4cab-8316-cca61748a5ec', '2019-07-24 23:12:28', '2019-07-24 23:12:28', NULL, NULL, 2),
(18, '2019-07-24 23:14:15', '399e264d-d781-491d-96ee-663c7a66bd21', '2019-07-24 23:14:15', '2019-07-24 23:14:15', NULL, NULL, 2),
(19, '2019-07-24 23:20:29', 'ce97d7de-5007-43d8-993a-e862eaf1d304', '2019-07-24 23:19:54', '2019-07-24 23:20:29', NULL, NULL, 2),
(20, '2019-07-26 17:55:21', 'e8bb2086-9f05-459d-9c1e-9b208f0ec55a', '2019-07-26 17:55:21', '2019-07-26 17:55:21', NULL, NULL, 2),
(21, '2019-07-26 17:56:51', '6cae58d8-63e4-4473-9718-81b2abcda824', '2019-07-26 17:56:51', '2019-07-26 17:56:51', NULL, NULL, 2);

-- --------------------------------------------------------

--
-- Table structure for table `cartStatuses`
--

CREATE TABLE `cartStatuses` (
  `description` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `mid` varchar(40) NOT NULL,
  `name` varchar(64) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `cartStatuses`
--

INSERT INTO `cartStatuses` (`description`, `id`, `mid`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('Cart is new and empty', 1, 'new', 'New', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('Cart has items but the order has not been completed', 2, 'active', 'Active', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('The order has been completed and the cart is closed', 3, 'closed', 'Closed', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('The order has been canceled and the cart is closed', 4, 'canceled', 'Canceled', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('Cart is no longer the currently active cart, but can be reactivated', 5, 'inactive', 'Inactive', '2019-05-18 19:09:38', '2019-05-18 19:09:38', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `guests`
--

CREATE TABLE `guests` (
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `lastAccessedAt` datetime NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `guests`
--

INSERT INTO `guests` (`email`, `firstName`, `id`, `lastAccessedAt`, `lastName`, `pid`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('jim@mail.com', 'Jim', 1, '2019-05-18 18:20:41', 'Bob', '9105f60b-5dff-4a94-a43c-996809700416', '2019-05-18 17:02:57', '2019-05-18 18:20:41', NULL),
('jane@example.com', 'Jane', 2, '2019-05-30 22:15:24', 'Smith', 'ec2603a3-ac2a-4fbe-b717-1e1c848bd280', '2019-05-30 22:15:24', '2019-05-30 22:15:24', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `altText` varchar(255) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `file` varchar(255) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `type` enum('full_images','thumbnails') NOT NULL DEFAULT 'full_images',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdById` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`altText`, `id`, `name`, `file`, `pid`, `type`, `createdAt`, `updatedAt`, `deletedAt`, `createdById`) VALUES
('Strawberry cupcake', 1, 'Strawberry Delight', 'cupcake_sq_1.jpg', '6a2d268d-b2ed-40a3-87bb-2f06a58a67b2', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Strawberry cupcake', 2, 'Strawberry Delight', 'cupcake_sq_1.jpg', 'db7e2412-8f4e-486b-af4a-b8f09c5711c0', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Berry cupcake', 3, 'Purple Dream', 'cupcake_sq_2.jpg', 'd861acf5-fb3a-436b-b14d-da5a0981c9e5', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Berry cupcake', 4, 'Purple Dream', 'cupcake_sq_2.jpg', '72b569d8-7c47-475b-8a03-5bb5b8d808b8', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Mini strawberry cupcake', 5, 'Mini Berry', 'cupcake_sq_3.jpg', '62e360a1-a1fa-4fd1-8c54-60d5ad388da0', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Mini strawberry cupcake', 6, 'Mini Berry', 'cupcake_sq_3.jpg', 'd2247eba-7ea9-4ecd-ab39-0185b367c788', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Unicorn tear sparkling cupcake', 7, 'Unicorn Tear', 'cupcake_sq_4.jpg', 'bb0c8054-d5df-4adb-82ff-5fcbc9762a41', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Unicorn tear sparkling cupcake', 8, 'Unicorn Tear', 'cupcake_sq_4.jpg', '13656dc7-fc78-474b-a578-42742ec39181', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Red and yellow vanilla cupcake', 9, 'Pearl Rose', 'cupcake_sq_5.jpg', '021761a1-60ab-450a-925a-ec718134d4a2', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Red and yellow vanilla cupcake', 10, 'Pearl Rose', 'cupcake_sq_5.jpg', 'ff7ff5d8-6c00-4437-ad49-bbdc8f48b221', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Silky red cupcake loaded with frosting', 11, 'Red Silk', 'cupcake_sq_6.jpg', 'ca0df306-2f01-4593-8aa4-28e487202869', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Silky red cupcake loaded with frosting', 12, 'Red Silk', 'cupcake_sq_6.jpg', '70bd12d5-9f64-4911-ba56-246e58b3ec55', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Vanilla cupcake with vanilla frosting', 13, 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', '376c90a8-f980-4860-b146-49cba7162928', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Vanilla cupcake with vanilla frosting', 14, 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', 'ac5df182-0f39-49ee-ae5c-950a63276016', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Blueberry cupcake piled high with toppings', 15, 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', '0624a760-f782-43a1-b1b4-1cf17963e71e', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Blueberry cupcake piled high with toppings', 16, 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', '4ac7478a-4fe4-4b64-995a-15da74b79845', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Lemon cupcake with piled high lemon frosting', 17, 'Double Lemon', 'cupcake_sq_9.jpg', '162646dc-6764-4203-9b2c-ab105fc36e49', 'full_images', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1),
('Lemon cupcake with piled high lemon frosting', 18, 'Double Lemon', 'cupcake_sq_9.jpg', '12db87f3-c471-4a1a-9cb3-d4c1651334a2', 'thumbnails', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `orderItems`
--

CREATE TABLE `orderItems` (
  `each` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `quantity` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `orderId` int(11) DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderItems`
--

INSERT INTO `orderItems` (`each`, `id`, `pid`, `quantity`, `createdAt`, `updatedAt`, `deletedAt`, `orderId`, `productId`) VALUES
(775, 3, '3ebebf63-fce1-4f2a-8f34-d6596d6dae39', 7, '2019-05-17 23:07:51', '2019-05-17 23:07:51', NULL, 3, 8),
(600, 4, '3d6c42f7-b0d8-4821-b56c-f12083c9ec79', 1, '2019-05-17 23:07:51', '2019-05-17 23:07:51', NULL, 3, 7),
(575, 5, '08901a1f-cfff-4df2-ae7d-837cd29fa7f1', 6, '2019-05-17 23:21:34', '2019-05-17 23:21:34', NULL, 4, 5),
(775, 6, '483359eb-c232-431d-bb9a-d6f8c390b24b', 4, '2019-05-17 23:21:34', '2019-05-17 23:21:34', NULL, 4, 8),
(450, 7, '4ee3e1bd-1f71-411f-b0e8-68992d93b08b', 8, '2019-05-17 23:21:34', '2019-05-17 23:21:34', NULL, 4, 9),
(450, 8, '28281357-8d42-4228-a3f6-8e797adfec51', 8, '2019-05-18 17:11:47', '2019-05-18 17:11:47', NULL, 5, 9),
(200, 9, 'a1995b5a-4e10-4b7a-a482-f58617ff83f9', 8, '2019-05-18 17:11:47', '2019-05-18 17:11:47', NULL, 5, 2),
(200, 10, '224fc78e-9286-4d81-95ca-a1ccc8c3fade', 8, '2019-05-18 18:18:48', '2019-05-18 18:18:48', NULL, 6, 2),
(200, 11, 'a37d440e-c855-470a-aedd-5458fdf9b399', 8, '2019-05-18 18:20:41', '2019-05-18 18:20:41', NULL, 7, 2),
(200, 12, '78f455c3-ae3e-4529-8810-1b4b273887eb', 8, '2019-05-29 17:15:33', '2019-05-29 17:15:33', NULL, 8, 2),
(200, 13, '3267e46d-b0fe-4687-a3d1-5a3d7bce9854', 8, '2019-05-30 22:04:20', '2019-05-30 22:04:20', NULL, 9, 2),
(350, 14, '91425c39-c398-4efb-8b1a-818d52454ab1', 6, '2019-05-30 22:04:20', '2019-05-30 22:04:20', NULL, 9, 6),
(600, 15, '3dbc4b28-5858-475d-8ce9-2df6f56c6c89', 2, '2019-05-30 22:15:24', '2019-05-30 22:15:24', NULL, 10, 7),
(450, 16, 'd9e9295c-67fb-4641-98cc-a69c510abc9f', 6, '2019-05-30 22:15:24', '2019-05-30 22:15:24', NULL, 10, 9);

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `itemCount` int(11) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `total` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `cartId` int(11) DEFAULT NULL,
  `guestId` int(11) DEFAULT NULL,
  `statusId` int(11) DEFAULT NULL,
  `userId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `itemCount`, `pid`, `total`, `createdAt`, `updatedAt`, `deletedAt`, `cartId`, `guestId`, `statusId`, `userId`) VALUES
(3, 8, '141b44e6-5379-468c-a978-8195fe922082', 6025, '2019-05-17 23:07:51', '2019-05-17 23:07:51', NULL, 5, NULL, 2, 1),
(4, 18, '39ecb33e-f7bd-4213-a767-d91982e55e5f', 10150, '2019-05-17 23:21:34', '2019-05-17 23:21:34', NULL, 7, NULL, 2, 1),
(5, 16, '2dc2ef1e-01b8-45ad-a9dc-d8faf2749490', 5200, '2019-05-18 17:11:47', '2019-05-18 17:11:47', NULL, 9, 1, 2, NULL),
(6, 8, '47426637-fdf0-4393-90d5-4ccf6725c2c1', 1600, '2019-05-18 18:18:48', '2019-05-18 18:18:48', NULL, 10, NULL, 2, 1),
(7, 8, '88448d18-a799-43ab-bba1-ef746fb90cfc', 1600, '2019-05-18 18:20:41', '2019-05-18 18:20:41', NULL, 11, 1, 2, NULL),
(8, 8, '29d40d56-a753-4914-8ca3-84fecbea8f51', 1600, '2019-05-29 17:15:33', '2019-05-29 17:15:33', NULL, 12, NULL, 2, 1),
(9, 14, '97747518-97c6-44e1-bb71-bbe34b6862f3', 3700, '2019-05-30 22:04:20', '2019-05-30 22:04:20', NULL, 13, NULL, 2, 1),
(10, 8, 'c7ea7018-3592-487b-96cf-25d89842f13f', 3900, '2019-05-30 22:15:24', '2019-05-30 22:15:24', NULL, 15, 2, 2, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `orderStatuses`
--

CREATE TABLE `orderStatuses` (
  `description` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `mid` varchar(40) NOT NULL,
  `name` varchar(64) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orderStatuses`
--

INSERT INTO `orderStatuses` (`description`, `id`, `mid`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('Order created but not submitted', 1, 'new', 'New', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL),
('Order placed, pending processing from store', 2, 'pending', 'Pending', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL),
('Order is on hold', 3, 'hold', 'On Hold', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL),
('Order has been shipped to customer', 4, 'shipped', 'Shipped', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL),
('Order has been canceled', 5, 'canceled', 'Canceled', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL),
('Order is complete', 6, 'complete', 'Complete', '2019-05-17 20:28:01', '2019-05-17 20:28:01', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `caption` varchar(255) DEFAULT NULL,
  `cost` int(10) UNSIGNED NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `createdById` int(11) DEFAULT NULL,
  `imageId` int(10) UNSIGNED DEFAULT NULL,
  `thumbnailId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`caption`, `cost`, `description`, `id`, `name`, `pid`, `createdAt`, `updatedAt`, `deletedAt`, `createdById`, `imageId`, `thumbnailId`) VALUES
('Delicious Strawberry Cupcake', 350, 'These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.', 1, 'Strawberry Delight', '65481bd6-f571-45fb-9d21-2ffd0662f3d8', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 1, 2),
('Sweet Berry Cupcake', 200, 'This is the berry cupcake of your dreams, they may be small but pack huge flavor.', 2, 'Purple Dream', '6f33d1ac-3750-4888-94b5-d4c5b520fc32', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 3, 4),
('Mini Strawberry Cupcake', 225, 'These are a miniature version of our famous Strawberry Delight cupcakes, all the flavor, half the guilt.', 3, 'Mini Berry', 'aefb365b-4df6-4831-a043-39159e154981', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 5, 6),
('Unicorn Tear Sparkling Cupcake', 650, 'What do unicorn tears taste like? We don\'t know, but we do know these cupcakes taste better!', 4, 'Unicorn Tear', '10c38d1b-ba64-42c2-bd19-cd339a8bcc0a', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 7, 8),
('Red and Yellow Rose Vanilla Cupcake', 575, 'Delightful vanilla cupcakes with rose frosting piled high on top.', 5, 'Pearl Rose', 'bacef6bc-f50a-45ee-b1c7-f05945842bf8', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 9, 10),
('Silky Red Cupcake Loaded with Frosting', 350, 'A vanilla cupcake with strawberry silk frosting eloquently piled high with a peach topping.', 6, 'Red Silk', '1f475742-de05-480b-a150-557fd221b0c4', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 11, 12),
('Vanilla Cupcake Piled with Vanilla Frosting', 600, 'Not just another vanilla cupcake. Our Vanilla Stack Cake cupcake is stacked with three scoops of vanilla frosting and topped with drizzled vanilla and a delicious cherry.', 7, 'Vanilla Stack Cake', 'c17c4e65-ce9c-42b2-a8c6-1f51af5cd1b2', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 13, 14),
('Blueberry Cupcake Piled High with Toppings', 775, 'A large blueberry cupcake topped with blueberry frosting, chocolate syrup, whip cream, and a sweet cherry. Looks and taste like your favorite blueberry malt.', 8, 'Blueberry Malt Cake', 'd2704033-6435-42c5-b7c4-c6543212a63b', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 15, 16),
('Lemon Cupcake with Piled High Lemon Frosting', 450, 'Lemon, lemon, and more lemon! Love lemon? So do we and our Double Lemon cupcake proves it!', 9, 'Double Lemon', 'dcfcd0f9-2ae8-46a5-bf64-d41a2c84ad10', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL, 1, 17, 18);

-- --------------------------------------------------------

--
-- Table structure for table `userRoles`
--

CREATE TABLE `userRoles` (
  `description` varchar(255) DEFAULT NULL,
  `id` int(11) NOT NULL,
  `mid` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userRoles`
--

INSERT INTO `userRoles` (`description`, `id`, `mid`, `name`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
('Site administrator with full site access', 1, 'site_admin', 'Site Admin', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('Store manager, can add, remove, and delete products. Can review and process orders', 2, 'store_manager', 'Store Manager', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL),
('Customer can only view order history and personal account settings', 3, 'customer', 'Customer', '2019-05-14 17:39:19', '2019-05-14 17:39:19', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `email` varchar(255) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `id` int(11) NOT NULL,
  `lastAccessedAt` datetime NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `password` varchar(60) NOT NULL,
  `pid` char(36) CHARACTER SET utf8 COLLATE utf8_bin NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `roleId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`email`, `firstName`, `id`, `lastAccessedAt`, `lastName`, `password`, `pid`, `createdAt`, `updatedAt`, `deletedAt`, `roleId`) VALUES
('test@mail.com', 'Sam', 1, '2019-05-30 22:04:20', 'Adams', '$2a$10$OZR87Xb.73q5HSdvcX9p0uf3u9JBcJAu67N042xi.kpKdDyy30WOi', '29672b90-6d10-4ea6-a197-365bd17b7a2f', '2019-05-14 17:39:19', '2019-05-30 22:04:20', NULL, 1),
('scott@mail.com', 'Scott', 2, '2019-05-18 00:52:13', 'Bowler', '$2a$10$dejIw1Y3HCcceL3WGfIsMuCczGknYDtIGD2.6aWcfD.GwBghsFAqW', '41b7db4b-3f11-4fa0-9a1f-4dfdef8a6160', '2019-05-18 00:52:13', '2019-05-18 00:52:13', NULL, 3),
('example@email.com', 'Jane', 3, '2019-05-29 20:13:57', 'Doe', '$2a$10$raScwLKGuaiWylXCAI/Z4eT7V/X941pzETbkyGOIXL6sE7JdrBCvy', '1c2158a8-c5fb-4a61-8e10-cdc02a48635b', '2019-05-29 19:58:13', '2019-05-29 20:13:57', NULL, 3),
('steve3@example.com', 'Steve', 4, '2019-07-24 23:24:39', 'Jobs', '$2a$10$dAfaZCLV.u6ez1XVhU8U5uAWI6xifk0tFdg49frczrb8nMt3I6GH.', '4d49c095-ddd4-4179-a142-b30f05b27b5e', '2019-07-24 23:24:39', '2019-07-24 23:24:39', NULL, 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartId` (`cartId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `statusId` (`statusId`);

--
-- Indexes for table `cartStatuses`
--
ALTER TABLE `cartStatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `createdById` (`createdById`);

--
-- Indexes for table `orderItems`
--
ALTER TABLE `orderItems`
  ADD PRIMARY KEY (`id`),
  ADD KEY `orderId` (`orderId`),
  ADD KEY `productId` (`productId`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cartId` (`cartId`),
  ADD KEY `guestId` (`guestId`),
  ADD KEY `statusId` (`statusId`),
  ADD KEY `userId` (`userId`);

--
-- Indexes for table `orderStatuses`
--
ALTER TABLE `orderStatuses`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `createdById` (`createdById`),
  ADD KEY `imageId` (`imageId`),
  ADD KEY `thumbnailId` (`thumbnailId`);

--
-- Indexes for table `userRoles`
--
ALTER TABLE `userRoles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `roleId` (`roleId`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `cartStatuses`
--
ALTER TABLE `cartStatuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `guests`
--
ALTER TABLE `guests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `orderItems`
--
ALTER TABLE `orderItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `orderStatuses`
--
ALTER TABLE `orderStatuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `userRoles`
--
ALTER TABLE `userRoles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD CONSTRAINT `cartitems_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cartitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `carts_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `carts_ibfk_2` FOREIGN KEY (`statusId`) REFERENCES `cartStatuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `images_ibfk_1` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderItems`
--
ALTER TABLE `orderItems`
  ADD CONSTRAINT `orderitems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orderitems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_2` FOREIGN KEY (`guestId`) REFERENCES `guests` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_3` FOREIGN KEY (`statusId`) REFERENCES `orderStatuses` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orders_ibfk_4` FOREIGN KEY (`userId`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`createdById`) REFERENCES `users` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_2` FOREIGN KEY (`imageId`) REFERENCES `images` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `products_ibfk_3` FOREIGN KEY (`thumbnailId`) REFERENCES `images` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `userRoles` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
