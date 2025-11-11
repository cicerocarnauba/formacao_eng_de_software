create table Personagem(
	nome varchar(50), -- chave unica
	idade integer,
	cod_casa integer,
	sangue varchar(10)
);

create table casa(
	cod_casa integer,
	nome varchar(50)
);

insert into casa(cod_casa,nome)
values 	(1, 'Grifinoria'),
		(2, 'Corvinal'),
		(3, 'Sonserina'),
		(4, 'Lufa-lufa');
		
-- para recupera ros dados
select * from casa; 

-- especificando uma restrição de chave primária
alter table casa 
add constraint pk_casa
primary key(cod_casa);

--- insert into casa(cod_casa,nome)
--- values 	(1, 'Grifinoria');

-- alterar tabela - add coluna
alter table personagem
add column cod_personagem int;

alter table personagem 
add constraint pk_personagem 
primary key(cod_personagem);

alter table personagem
add constraint uk_personagem_nome
unique(nome);

alter table personagem 
add constraint fk_personagem_casa
foreign key (cod_casa) references casa(cod_casa);


insert into personagem 
values 
('Hermione', 15, 1, 'mestiço',1),
('Harry Potter', 16, 1, 'mestiço', 2),
('Rony Weasley', 15, 1, 'puro', 3);

insert into personagem 
values 
('Luna', 15, 3, 'mestiço',4);

create table feitico(
	cod_feitico integer primary key,
	nome varchar(50) unique not null,
	descricao varchar(150) not null
);


alter table feitico
add column nivel_dificuldade integer;


-- remover a restrição de não nulidade
ALTER TABLE feitico
ALTER COLUMN descricao DROP NOT NULL;


-- remover coluna descricao
alter table feitico
drop column descricao;


-- exclusao
delete from personagem
where cod_personagem =4;

select * from personagem;


delete from casa
where cod_casa=1;


update casa
set nome = 'GRIFINORIA'
where cod_casa = 1;

select * from casa;

update casa
set cod_casa = 7
where cod_casa = 1;
