const alunosJSON = [
    { id: 101, nome: "João", notas: [3, 5], status: "ativo" },
    { id: 102, nome: "Maria", notas: [3, 5, 6], status: "inativo" },
    { id: 103, nome: "Pedro", notas: [4, 6], status: "ativo" },
    { id: 104, nome: "Ana", notas: [7, 9], status: "ativo" },
];

function gerarRelatorio(alunos) {
    try {
        if (alunos.length === 0)
            throw new Error("A lista de alunos está vazia!");

        const ativos = alunos.filter(a => a.status === "ativo");

        const resultado = ativos.map(({ id, nome, notas }) => {
            const media = notas.reduce((s, n) => s + n, 0) / notas.length;
            const situacao = media >= 7 ? "Aprovado" : "Reprovado";
            return { id, nome, media, situacao };
        });

        console.log(resultado);

        const dict = resultado.reduce((obj, a) => {
            obj[a.id] = a.nome;
            return obj;
        }, {});

        console.log(dict);
        return dict;

    } catch (e) {
        console.error(e.message);
    } finally {
        console.log("Processamento concluído");
    }
}

gerarRelatorio(alunosJSON);
