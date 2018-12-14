-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 06, 2018 at 02:06 AM
-- Server version: 10.1.21-MariaDB
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `feedermanage`
--

-- --------------------------------------------------------

--
-- Table structure for table `mas_bank_account`
--

CREATE TABLE `mas_bank_account` (
  `bac_id_pk` int(11) NOT NULL,
  `bac_pro_id_fk` varchar(255) NOT NULL,
  `bac_bnk_id_fk` int(11) NOT NULL,
  `bac_number` varchar(255) NOT NULL,
  `bac_account_name` varchar(255) NOT NULL,
  `bac_branch_name` varchar(255) NOT NULL,
  `bac_book_bank` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater` varchar(255) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mas_bank_account`
--

INSERT INTO `mas_bank_account` (`bac_id_pk`, `bac_pro_id_fk`, `bac_bnk_id_fk`, `bac_number`, `bac_account_name`, `bac_branch_name`, `bac_book_bank`, `creator`, `create_date`, `updater`, `update_date`, `status`) VALUES
(1, '3d2585bc-58c4-441b-9b74-21345c857513', 2, '13456-8522', 'romnnnnsp iommm', '', '2b92f5a9-3212-4b03-b96b-d75c4d0d397e', 'BOY', '2018-10-02 16:43:08', 'BOY', '2018-10-02 16:43:08', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `mas_payment`
--

CREATE TABLE `mas_payment` (
  `pay_id_pk` varchar(255) NOT NULL,
  `pay_name` varchar(255) NOT NULL,
  `pay_tel` varchar(10) NOT NULL,
  `pay_email` varchar(255) NOT NULL,
  `pay_amount` decimal(11,0) NOT NULL,
  `pay_transfer_date` date NOT NULL,
  `pay_transfer_time` time NOT NULL,
  `pay_slip` varchar(255) NOT NULL,
  `pay_remark` varchar(255) DEFAULT NULL,
  `pay_pro_id_fk` varchar(255) NOT NULL,
  `pay_bac_id_fk` int(11) NOT NULL,
  `pay_approve_status` varchar(255) DEFAULT NULL,
  `pay_approve_user` varchar(255) DEFAULT NULL,
  `pay_approve_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `creator` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater` varchar(255) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mas_payment`
--

INSERT INTO `mas_payment` (`pay_id_pk`, `pay_name`, `pay_tel`, `pay_email`, `pay_amount`, `pay_transfer_date`, `pay_transfer_time`, `pay_slip`, `pay_remark`, `pay_pro_id_fk`, `pay_bac_id_fk`, `pay_approve_status`, `pay_approve_user`, `pay_approve_date`, `creator`, `create_date`, `updater`, `update_date`, `status`) VALUES
('123', 'boy', 981562995, 'boy.harddaway@ghm.com', '2600', '2018-10-03', '10:20:00', '', NULL, '3d2585bc-58c4-441b-9b74-21345c857513', 1, 'w', NULL, '2018-10-02 17:00:30', '', '2018-10-02 17:00:30', '', '2018-10-02 17:00:30', '');

-- --------------------------------------------------------

--
-- Table structure for table `mas_project`
--

CREATE TABLE `mas_project` (
  `pro_id_pk` varchar(255) NOT NULL,
  `pro_name` varchar(255) NOT NULL,
  `pro_hook_url` varchar(255) NOT NULL,
  `pro_redirect_url` varchar(255) NOT NULL,
  `pro_link_payment` varchar(255) NOT NULL,
  `pro_owner` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater` varchar(255) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mas_project`
--

INSERT INTO `mas_project` (`pro_id_pk`, `pro_name`, `pro_hook_url`, `pro_redirect_url`, `pro_link_payment`, `pro_owner`, `creator`, `create_date`, `updater`, `update_date`, `status`) VALUES
('3d2585bc-58c4-441b-9b74-21345c857513', 'NoddeJs 2019', 'http://localhost:3000/project/api/v1', 'http://localhost:3000/project', 'http://localhost:8000/payment/3d2585bc-58c4-441b-9b74-21345c857513', 'BOY', 'BOY', '2018-10-02 16:43:08', 'BOY', '2018-10-02 16:43:08', 'a');

-- --------------------------------------------------------

--
-- Table structure for table `mas_user`
--

CREATE TABLE `mas_user` (
  `usr_id_pk` int(11) NOT NULL,
  `usr_username` varchar(255) NOT NULL,
  `usr_password` varchar(255) NOT NULL,
  `usr_fullname` varchar(255) NOT NULL,
  `usr_rol_id_fk` varchar(255) NOT NULL,
  `usr_email` varchar(255) NOT NULL,
  `usr_tel` varchar(255) NOT NULL,
  `usr_receive_email` varchar(255) NOT NULL,
  `creator` varchar(255) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updater` varchar(255) NOT NULL,
  `update_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `ref_bank`
--

CREATE TABLE `ref_bank` (
  `BNK_ID_PK` int(11) NOT NULL,
  `BNK_NAME` varchar(255) NOT NULL,
  `BNK_LOGO` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ref_bank`
--

INSERT INTO `ref_bank` (`BNK_ID_PK`, `BNK_NAME`, `BNK_LOGO`) VALUES
(1, 'ธนาคารกรุงไทย', ''),
(2, 'ธนาคารกสิกรไทย', ''),
(3, 'ธนาคารกรุงเทพ', ''),
(4, 'ธนาคารออมสิน', '');

-- --------------------------------------------------------

--
-- Table structure for table `ref_role`
--

CREATE TABLE `ref_role` (
  `ROL_ID_PK` int(11) NOT NULL,
  `ROL_NAME` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ref_role`
--

INSERT INTO `ref_role` (`ROL_ID_PK`, `ROL_NAME`) VALUES
(1, 'admin'),
(2, 'user');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mas_bank_account`
--
ALTER TABLE `mas_bank_account`
  ADD PRIMARY KEY (`bac_id_pk`);

--
-- Indexes for table `mas_payment`
--
ALTER TABLE `mas_payment`
  ADD PRIMARY KEY (`pay_id_pk`);

--
-- Indexes for table `mas_project`
--
ALTER TABLE `mas_project`
  ADD PRIMARY KEY (`pro_id_pk`);

--
-- Indexes for table `mas_user`
--
ALTER TABLE `mas_user`
  ADD PRIMARY KEY (`usr_id_pk`);

--
-- Indexes for table `ref_bank`
--
ALTER TABLE `ref_bank`
  ADD PRIMARY KEY (`BNK_ID_PK`);

--
-- Indexes for table `ref_role`
--
ALTER TABLE `ref_role`
  ADD PRIMARY KEY (`ROL_ID_PK`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `mas_bank_account`
--
ALTER TABLE `mas_bank_account`
  MODIFY `bac_id_pk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mas_user`
--
ALTER TABLE `mas_user`
  MODIFY `usr_id_pk` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `ref_bank`
--
ALTER TABLE `ref_bank`
  MODIFY `BNK_ID_PK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT for table `ref_role`
--
ALTER TABLE `ref_role`
  MODIFY `ROL_ID_PK` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
