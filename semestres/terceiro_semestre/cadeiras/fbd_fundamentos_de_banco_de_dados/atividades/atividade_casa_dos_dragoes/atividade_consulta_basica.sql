/* 1 */ select * from personagens where nome like 'A%';

/* 2 */ select * from personagens where nome like '%a%' and nome not like 'A%';

/* 3 */ select * from personagens where casa like 'Targaryen' or casa like 'Hightower';

/* 4 */ select nome, data_falecimento from personagens where data_falecimento is not null order by data_falecimento asc

/* 5 */ select nome, data_nascimento from personagens where data_nascimento between '0080-01-01' and '0100-12-31' order by data_nascimento desc

/* 6 */ select nome from dragoes where tamanho not like 'Grande'

/* 7 */ select nome from dragoes where id_personagem is null

/* 8 */ select nome, localizacao from batalhas where data < '0132-01-01' 

/* 9 */ select * from relacoes_familiares where relacao like 'Mãe' or relacao like 'Filha'

/* 10 */ select * from participantes_batalhas where resultado like 'Vitória'