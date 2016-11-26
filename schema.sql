drop table if exists accounts;
create table accounts (
	id integer primary key autoincrement,
	username text not null UNIQUE,
	password text not null
);
