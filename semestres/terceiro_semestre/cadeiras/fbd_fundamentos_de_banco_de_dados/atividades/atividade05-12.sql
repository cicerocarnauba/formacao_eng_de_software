select P.nome
from participantes_batalhas PB 
join personagens P on PB.id_personagem = P.id 
where PB.resultado like 'Vitória';

select D.nome
from participantes_batalhas PB 
join personagens P on PB.id_personagem=P.id
join batalhas B on PB.id_batalha = B.id
join dragoes D on D.id_personagem = P.id
where B.data < '01-01-0200'


select P1.nome, P2.nome
from participantes_batalhas PB 
join personagens P1 on PB.id_personagem=P1.id
join batalhas B on PB.id_batalha = B.id
join relacoes_familiares F on F.id_personagem1 = P1.id
join personagens P2 on F.id_personagem2 = P2.id
where B.nome like 'Batalha do Vale'


select *
from batalhas


select D.nome
from participantes_batalhas PB 
join personagens P on PB.id_personagem=P.id
join batalhas B on PB.id_batalha = B.id
join dragoes D on D.id_personagem = P.id
where B.data < '01-01-0200'

select P1.nome, P2.nome, F.relacao
from relacoes_familiares F join personagens P1 on F.id_personagem1=P1.id
join personagens P2
on F.id_personagem2 = P2.id;

select resultado
from participantes_batalhas