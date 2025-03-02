DROP TABLE IF EXISTS `roles`;
create table roles (
    `id` BIGINT(20) primary key not null auto_increment,
    `name` varchar(200) not null,
    `is_active` tinyint(1) not null default 1,
    `created_at` timestamp not null default current_timestamp,
    `updated_at` timestamp not null default current_timestamp,
    `created_by` varchar(200) not null default 'system',
    `updated_by` varchar(200) not null default 'system'
);

insert into `roles` (`name`) values ('admin');
insert into `roles` (`name`) values ('security');
insert into `roles` (`name`) values ('visitor');
insert into `roles` (`name`) values ('member');

DROP TABLE IF EXISTS `visitor`;
create table visitor (
    `id` BIGINT(20) primary key not null auto_increment,
    `name` varchar(200) not null,
    `phone` varchar(200) not null,
    `apartment_number` varchar(50),
    `purpose` varchar(4000) not null,
    `is_active` tinyint(1) not null default 1,
    `status` varchar(50) not null default 'pending',
    `created_at` timestamp not null default current_timestamp,
    `updated_at` timestamp not null default current_timestamp,
    `created_by` varchar(200) not null default 'system',
    `updated_by` varchar(200) not null default 'system'
);

insert into `visitor` (`name`, `phone`, `apartment_number`, `purpose`) values ('John Doe', '1234567890', '101', 'I want to visit the museum');
insert into `visitor` (`name`, `phone`, `apartment_number`, `purpose`, `status`) values ('Nishant', '1234567890', '101', 'I want to visit the museum','approved');
insert into `visitor` (`name`, `phone`, `apartment_number`, `purpose`, `status`) values ('BlueDart Delivery', '1234567890', '101', 'I want to visit the museum','rejected');

DROP TABLE IF EXISTS `user`;
create table user (
    `id` BIGINT(20) primary key not null auto_increment,
    `name` varchar(200) not null,
    `phone` varchar(200) not null,
    `apartment_number` varchar(50),
    `email` varchar(200) not null,
    `password` varchar(200) not null,
    `role_id` BIGINT(20) not null,
    `is_active` tinyint(1) not null default 1,
    `created_at` timestamp not null default current_timestamp,
    `updated_at` timestamp not null default current_timestamp,
    `created_by` varchar(200) not null default 'system',
    `updated_by` varchar(200) not null default 'system',
    foreign key (role_id) references roles(id)
);

insert into `user` (`name`, `phone`,`apartment_number`, `email`,`password`, `role_id`) values ('John Doe', '1234567890','101', 'tTQ5u@example.com','101', 4);
insert into `user` (`name`, `phone`,`apartment_number`, `email`,`password`, `role_id`) values ('Silly boy', '1234567890','102', 'test@example.com','102', 4);
insert into `user` (`name`, `phone`,`apartment_number`, `email`,`password`, `role_id`) values ('Just Girl', '1234567890','103', 'test@example.com','103', 4);