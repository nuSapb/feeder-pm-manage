create table `ordermanag`.`mas_user` ( 
    `usr_id_pk` int(11) not null auto_increment , 
    `usr_username` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_password` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_fullname` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_rol_id_fk` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_email` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_tel` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `usr_receive_email` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `creator` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    `update_date` timestamp not null default current_timestamp() , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null , 
    primary key (`usr_id_pk`)) engine = innodb;

create table `ordermanag`.`ref_role` ( 
    `rol_id_pk` int(11) not null auto_increment ,  
    `rol_name` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    primary key (`rol_id_pk`)) engine = innodb;

create table `ordermanag`.`ref_bank` ( 
    `bnk_id_pk` int(11) not null auto_increment ,   
    `bnk_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `bnk_logo` varchar(255) character set utf8 collate utf8_general_ci not null , 
    primary key (`bnk_id_pk`)) engine = innodb;

create table `ordermanag`.`mas_payment` ( 
    `pay_id_pk` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `pay_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pay_tel` int(10) not null , 
    `pay_email` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pay_amount` decimal(11) not null ,
    `pay_transfer_date` date not null , 
    `pay_transfer_time` time not null , 
    `pay_slip` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pay_remark` varchar(255) character set utf8 collate utf8_general_ci null , 
    `pay_pro_id_fk` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pay_bac_id_fk` int(11) not null ,
    `pay_approve_status` varchar(255) character set utf8 collate utf8_general_ci null ,
    `pay_approve_user` varchar(255) character set utf8 collate utf8_general_ci null ,
    `pay_approve_date` timestamp not null default current_timestamp() ,  
    `creator` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    `update_date` timestamp not null default current_timestamp() , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null , 
    primary key (`pay_id_pk`)) engine = innodb;

create table `ordermanag`.`mas_project` ( 
    `pro_id_pk` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    `pro_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pro_hook_url` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pro_redirect_url` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pro_link_payment` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pro_owner` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creator` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    `update_date` timestamp not null default current_timestamp() , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null , 
    primary key (`pro_id_pk`)) engine = innodb;    

create table `ordermanag`.`mas_bank_account` ( 
    `bac_id_pk` int(11) not null auto_increment ,  
    `bac_pro_id_fk` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `bac_bnk_id_fk` int(11) not null , 
    `bac_number` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `bac_account_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `bac_branch_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `bac_book_bank` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creator` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null ,  
    `update_date` timestamp not null default current_timestamp() , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null , 
    primary key (`bac_id_pk`)) engine = innodb;    