//array de objetos
const arrayDeObjetos = [
    {nome: "Bruno", nota:"7.0"},
    {nome: "Juliana", nota:"5.0"},
    {nome: "Tatiana", nota:"6.0"},
    {nome: "Yuri", nota:"5.5"},
];

//função que retorna alunos com nota maior que 6.0
function alunosAprovados(arrayDeObjetos) {

//filtra a condição de nota maior que 6.0
    const aprovados = arrayDeObjetos.filter(function(i) {
        return i.nota >= 6.0;
    });
    return aprovados;

}

const nomesAprovados = alunosAprovados(arrayDeObjetos);

//junta o conteúdo do array e extrai do array formando uma mensagem mais limpa para visualização
const nomes = nomesAprovados.reduce(function(acumulador, itemAtual) {
    acumulador += `O aluno(a): ${itemAtual.nome}, Nota: ${itemAtual.nota} foi aprovado(a); `;
    return acumulador;
}, '');

//imprime resultado da função como uma mensagem
console.log(nomes);

//imprime o retorno da função em array de objeto
console.log(nomesAprovados);
