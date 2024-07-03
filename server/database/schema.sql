create table admins_App (
  Id_User int unsigned primary key auto_increment not null,
  Email varchar(255) not null unique,
  Password varchar(255) not null
);
create table clients (
  Id_Client int unsigned primary key auto_increment not null,
  Email varchar(255) not null unique,
  Password varchar(255) not null,
  FirstName varchar(255) not null,
  LastName varchar(255) not null,
  NumberPhone  varchar(10) null
);

create table translators (
  id INT unsigned PRIMARY KEY AUTO_INCREMENT not null,
  email varchar(255) not null,
  password varchar(255) not null,
  firstName varchar(255) not null,
  lastName varchar(255) not null,
  numberPhone  varchar(10) null,
  language  varchar(10) null
);
/*create table disponibility (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  Id_Translator int not null,
  Day_Dispo Date,
  Hour_Dispo varchar(10)
);*/
create table Model_docs(

 Id_Doc int unsigned primary key auto_increment not null, 

 TYPE  varchar(255) not null unique,

Languages_source varchar(255) not null unique
)

create table Estimation(

Id_tarification  int unsigned primary key auto_increment not null 
 )
create table TRANSLATED_DOC(
Id_Client int unsigned primary key auto_increment not null, 
 TYPE  varchar(255) not null unique
)

create table LANGUAGES(

Id_tarification int unsigned primary key auto_increment not null, 
name  varchar(255) not null, 
)