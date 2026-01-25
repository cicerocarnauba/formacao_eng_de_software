
create table personagem (
  id serial primary key,
  nome varchar(50) unique not null,
  idade int not null, 
  casa int,
  sangue varchar(50)
);


create table casa(
  id integer not null,
  nome varchar(50)
);

alter table personagem 
rename column idade to idade_em_anos;

alter table personagem
drop column id;

alter table personagem
add column id serial;

alter table casa
add constraint casa_nome_uk unique(nome);

alter table casa
add constraint casa_id_pk PRIMARY KEY(id);

alter table personagem
add constraint personagem_id_pk PRIMARY KEY(id);

alter table personagem
add constraint casa_fk  FOREIGN key(casa) references casa(id);

insert into casa
values (1, 'Grifinoria'), (2, 'Lufa-Lufa'), (3, 'Corvinal'), (4, 'Sonserina');

insert into personagem(nome, idade_em_anos, casa)
values ('Harry', 16, 1), ('Hermione', 15, 1), ('Rony', 16, 1), ('Malfoy', 15, 4);

insert into personagem(nome, idade_em_anos, casa)
values ('Malfoy', 15, 4);

create table habilidade (id serial PRimary key, nome varchar(50) not null);

create table pers_usa_habilidade ( id_pers integer, id_habilidade integer,
primary key(id_pers, id_habilidade))


select * FROM personagem;
select * FROM casa;

alter table casa
add column id_coord int;

alter table casa
add constraint fk_coord foreign key (id_coord) references personagem(id) on delete cascade 
on update no action;

update casa
set id_coord=2
where id=1;

update personagem
set id=3 where id=2;

delete from personagem
where id=2;

alter table casa
drop column id_coord;

insert into personagem(nome, idade_em_anos) values('Harry', 18)

delete from personagem where nome='Harry';