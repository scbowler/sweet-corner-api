-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 10, 2019 at 10:24 PM
-- Server version: 5.7.26-0ubuntu0.18.04.1
-- PHP Version: 7.2.17-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `sweet-corner-api`
--
CREATE DATABASE IF NOT EXISTS `sweet-corner-api` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `sweet-corner-api`;

-- --------------------------------------------------------

--
-- Table structure for table `allergies`
--

CREATE TABLE `allergies` (
  `dairy` tinyint(1) NOT NULL,
  `gluten` tinyint(1) NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `nuts` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `allergies`
--

INSERT INTO `allergies` (`dairy`, `gluten`, `id`, `nuts`, `createdAt`, `updatedAt`, `deletedAt`, `productId`) VALUES
(1, 1, 1, 0, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
(0, 1, 2, 1, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 2),
(0, 1, 3, 1, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 3),
(0, 0, 4, 0, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 4),
(1, 1, 5, 1, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 5),
(1, 0, 6, 1, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 6),
(1, 1, 7, 0, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 7),
(1, 0, 8, 1, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 8),
(0, 0, 9, 0, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 9);

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
('Cart is new and empty', 1, 'new', 'New', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Cart has items but the order has not been completed', 2, 'active', 'Active', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('The order has been completed and the cart is closed', 3, 'closed', 'Closed', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('The order has been canceled and the cart is closed', 4, 'canceled', 'Canceled', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL);

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
('Strawberry cupcake', 1, 'Strawberry Delight', 'cupcake_sq_1.jpg', '1edda9cc-fea0-4b00-b9eb-34a84572ed67', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Strawberry cupcake', 2, 'Strawberry Delight', 'cupcake_sq_1.jpg', '1e69c592-8bf5-4da3-9aa3-993936898d20', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Berry cupcake', 3, 'Purple Dream', 'cupcake_sq_2.jpg', 'f8576e46-50b4-47f8-8ad0-5efff784e42f', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Berry cupcake', 4, 'Purple Dream', 'cupcake_sq_2.jpg', '58fe05f1-859c-49f2-af75-0c670925349d', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Mini strawberry cupcake', 5, 'Mini Berry', 'cupcake_sq_3.jpg', 'b510c455-1140-4046-ae94-72b890361cf8', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Mini strawberry cupcake', 6, 'Mini Berry', 'cupcake_sq_3.jpg', '63c0ba2d-25cb-47b0-8dd4-04cbb02f0587', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Unicorn tear sparkling cupcake', 7, 'Unicorn Tear', 'cupcake_sq_4.jpg', '52060a0b-706e-4b3f-ba39-38a0bc517c0e', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Unicorn tear sparkling cupcake', 8, 'Unicorn Tear', 'cupcake_sq_4.jpg', '83ef4a69-d5be-4c44-8107-59b2b16de483', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Red and yellow vanilla cupcake', 9, 'Pearl Rose', 'cupcake_sq_5.jpg', 'f77a0d38-eee6-4648-974b-94b484fe0f44', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Red and yellow vanilla cupcake', 10, 'Pearl Rose', 'cupcake_sq_5.jpg', '6b9f8557-aa4e-4f75-b683-474ca75cf364', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Silky red cupcake loaded with frosting', 11, 'Red Silk', 'cupcake_sq_6.jpg', '53aa0d44-c0e9-4b3d-abd1-4f536194a269', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Silky red cupcake loaded with frosting', 12, 'Red Silk', 'cupcake_sq_6.jpg', '1eb4be2f-d255-4075-87d9-f04d85f6ee8e', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Vanilla cupcake with vanilla frosting', 13, 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', '12f707fa-6381-4c51-9a2f-86cbf7432e0c', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Vanilla cupcake with vanilla frosting', 14, 'Vanilla Stack Cake', 'cupcake_sq_7.jpg', '469aa60e-710f-434d-a222-26a33e1018f6', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Blueberry cupcake piled high with toppings', 15, 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', '150c01f3-9469-481d-b99f-4ef976e760fa', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Blueberry cupcake piled high with toppings', 16, 'Blueberry Malt Cake', 'cupcake_sq_8.jpg', 'dc6c2918-91c9-4481-b6f0-afa60e2f43f7', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Lemon cupcake with piled high lemon frosting', 17, 'Double Lemon', 'cupcake_sq_9.jpg', '71538e75-1df9-4e7f-a7ec-0320867883b6', 'full_images', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
('Lemon cupcake with piled high lemon frosting', 18, 'Double Lemon', 'cupcake_sq_9.jpg', '927dc783-8266-4f5d-8b2e-5671a2e9155a', 'thumbnails', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1);

-- --------------------------------------------------------

--
-- Table structure for table `nutrition`
--

CREATE TABLE `nutrition` (
  `carbs` int(10) UNSIGNED NOT NULL,
  `fat` int(10) UNSIGNED NOT NULL,
  `id` int(10) UNSIGNED NOT NULL,
  `sugar` int(10) UNSIGNED NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `deletedAt` datetime DEFAULT NULL,
  `productId` int(10) UNSIGNED DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nutrition`
--

INSERT INTO `nutrition` (`carbs`, `fat`, `id`, `sugar`, `createdAt`, `updatedAt`, `deletedAt`, `productId`) VALUES
(200, 100, 1, 130, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1),
(220, 200, 2, 150, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 2),
(140, 130, 3, 230, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 3),
(445, 330, 4, 123, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 4),
(245, 100, 5, 432, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 5),
(654, 111, 6, 321, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 6),
(412, 156, 7, 380, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 7),
(284, 154, 8, 168, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 8),
(180, 75, 9, 142, '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 9);

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
('Order created but not submitted', 1, 'new', 'New', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Order placed, pending processing from store', 2, 'pending', 'Pending', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Order is on hold', 3, 'hold', 'On Hold', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Order has been shipped to customer', 4, 'shipped', 'Shipped', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Order has been canceled', 5, 'canceled', 'Canceled', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Order is complete', 6, 'complete', 'Complete', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `calories` int(10) UNSIGNED NOT NULL,
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

INSERT INTO `products` (`calories`, `caption`, `cost`, `description`, `id`, `name`, `pid`, `createdAt`, `updatedAt`, `deletedAt`, `createdById`, `imageId`, `thumbnailId`) VALUES
(300, 'Delicious Strawberry Cupcake', 350, 'These strawberry delights will satisfy both your sweet tooth and those strawberry cravings.', 1, 'Strawberry Delight', '6686e24c-db9b-48b9-8d80-65ac4e6d94d3', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 1, 2),
(350, 'Sweet Berry Cupcake', 200, 'This is the berry cupcake of your dreams, they may be small but pack huge flavor.', 2, 'Purple Dream', 'd8b91f0b-e922-4472-990a-65cdb3637858', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 3, 4),
(200, 'Mini Strawberry Cupcake', 225, 'These are a miniature version of our famous Strawberry Delight cupcakes, all the flavor, half the guilt.', 3, 'Mini Berry', '5c99619d-47e5-4ebb-b036-aed3f831721e', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 5, 6),
(280, 'Unicorn Tear Sparkling Cupcake', 650, 'What do unicorn tears taste like? We don\'t know, but we do know these cupcakes taste better!', 4, 'Unicorn Tear', '14ca29de-72fa-4c05-b470-90a30ab23777', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 7, 8),
(175, 'Red and Yellow Rose Vanilla Cupcake', 575, 'Delightful vanilla cupcakes with rose frosting piled high on top.', 5, 'Pearl Rose', '73ea9cf6-14cb-477f-af19-b70a6e480ddf', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 9, 10),
(230, 'Silky Red Cupcake Loaded with Frosting', 350, 'A vanilla cupcake with strawberry silk frosting eloquently piled high with a peach topping.', 6, 'Red Silk', '4ba86a51-00ad-495a-95ab-e3ff8458644c', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 11, 12),
(320, 'Vanilla Cupcake Piled with Vanilla Frosting', 600, 'Not just another vanilla cupcake. Our Vanilla Stack Cake cupcake is stacked with three scoops of vanilla frosting and topped with drizzled vanilla and a delicious cherry.', 7, 'Vanilla Stack Cake', '27e970b8-c9de-479c-a6c2-9b1136ee4b29', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 13, 14),
(345, 'Blueberry Cupcake Piled High with Toppings', 775, 'A large blueberry cupcake topped with blueberry frosting, chocolate syrup, whip cream, and a sweet cherry. Looks and taste like your favorite blueberry malt.', 8, 'Blueberry Malt Cake', 'a07a4690-3a1c-47b7-9b66-c1b2a10f3eba', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 15, 16),
(230, 'Lemon Cupcake with Piled High Lemon Frosting', 450, 'Lemon, lemon, and more lemon! Love lemon? So do we and our Double Lemon cupcake proves it!', 9, 'Double Lemon', 'b5884631-03f4-41e6-91e1-61920985da52', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1, 17, 18);

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
('Site administrator with full site access', 1, 'site_admin', 'Site Admin', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Store manager, can add, remove, and delete products. Can review and process orders', 2, 'store_manager', 'Store Manager', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL),
('Customer can only view order history and personal account settings', 3, 'customer', 'Customer', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL);

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
('scott@example.com', 'Scott', 1, '2019-09-10 20:08:33', 'Test', '$2a$10$730uv19DZAzwRCc3Se2sJeNEfOTZpv/8JjYIk4ET8/RslXd1KtetO', 'fef9bace-cd14-4d47-a75e-6a2fa9d218b9', '2019-09-10 20:08:33', '2019-09-10 20:08:33', NULL, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `allergies`
--
ALTER TABLE `allergies`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

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
-- Indexes for table `nutrition`
--
ALTER TABLE `nutrition`
  ADD PRIMARY KEY (`id`),
  ADD KEY `productId` (`productId`);

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
-- AUTO_INCREMENT for table `allergies`
--
ALTER TABLE `allergies`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `carts`
--
ALTER TABLE `carts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `cartStatuses`
--
ALTER TABLE `cartStatuses`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `guests`
--
ALTER TABLE `guests`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `nutrition`
--
ALTER TABLE `nutrition`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
--
-- AUTO_INCREMENT for table `orderItems`
--
ALTER TABLE `orderItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `allergies`
--
ALTER TABLE `allergies`
  ADD CONSTRAINT `allergies_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD CONSTRAINT `cartItems_ibfk_1` FOREIGN KEY (`cartId`) REFERENCES `carts` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `cartItems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
-- Constraints for table `nutrition`
--
ALTER TABLE `nutrition`
  ADD CONSTRAINT `nutrition_ibfk_1` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Constraints for table `orderItems`
--
ALTER TABLE `orderItems`
  ADD CONSTRAINT `orderItems_ibfk_1` FOREIGN KEY (`orderId`) REFERENCES `orders` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `orderItems_ibfk_2` FOREIGN KEY (`productId`) REFERENCES `products` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;

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
