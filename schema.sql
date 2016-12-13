drop table if exists accounts;
create table accounts (
	id integer primary key autoincrement,
	username text not null UNIQUE,
	password text not null
);

drop table if exists action1;
create table action1
(
	id integer primary key autoincrement,
	input1 text,
	input2 text 
);