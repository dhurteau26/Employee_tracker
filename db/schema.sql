drop database if exists company;
create database company;

\c company;

create table department (
    department_id serial primary key,
    name varchar(30) unique not null
);

create table role (
    role_id serial primary key,
    title varchar(30) unique not null,
    salary decimal not null,
    department_id integer not null,
    foreign key (department_id) references department(department_id)
);

create table employee (
    id serial primary key,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    role_id integer not null,
    manager_id integer,
    foreign key (role_id) references role(role_id)
);