create table `pm_infomation`.`feeder_pm_detail` ( 
    `feeder_id` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `mfg_tooling_id` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `tooling_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `model` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `brand` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `size` int(11) not null , 
    `location` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `pm_group` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `pm_round1` int(11) not null ,  
    `pm_round2` int(11) not null ,  
    `pm_round3` int(11) not null ,  
    `pm_round4` int(11) not null ,  
    `creater` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `update_date` timestamp not null default current_timestamp() , 
    primary key (`feeder_id`)) engine = innodb;


create table `pm_infomation`.`feeder_size` ( 
    `size_id_pk` int(11) not null auto_increment, 
    `size` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creater` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `update_date` timestamp not null default current_timestamp() , 
    primary key (`size_id_pk`)) engine = innodb;

create table `pm_infomation`.`feeder_brand` ( 
    `brand_id_pk` int(11) not null auto_increment, 
    `brand` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creater` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `update_date` timestamp not null default current_timestamp() , 
    primary key (`brand_id_pk`)) engine = innodb;

create table `pm_infomation`.`feeder_model` ( 
    `model_id_pk` int(11) not null auto_increment, 
    `model` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creater` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `create_date` timestamp not null default current_timestamp() , 
    `updater` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `update_date` timestamp not null default current_timestamp() , 
    primary key (`model_id_pk`)) engine = innodb;

create table `pm_infomation`.`feeder_scrap_details` ( 
    `feeder_id` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `mfg_tooling_id` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `tooling_name` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `model` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `brand` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `size` int(11) not null , 
    `location` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `status` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `pm_group` varchar(255) character set utf8 collate utf8_general_ci not null , 
    `creater` varchar(255) character set utf8 collate utf8_general_ci not null ,
    `create_date` timestamp not null default current_timestamp() , 
    primary key (`feeder_id`)) engine = innodb;