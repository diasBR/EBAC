//multiplica 2 números com typescript
const a: number = 2;
const b: number = 5;

function multiplica(): number {
    const result = a * b;
    return result;
}

const multiplicationResult = multiplica();
console.log(`O resultado da multiplicação de ${a} por ${b} é: ${multiplicationResult}`);

//____________________________________________________
//função que recebe um nome e retorna com concatenação
const nome: string = 'Bruno';

function recieveName(): string {
    const concatName = 'Olá' + nome;
    return concatName;
}

const saudacao = recieveName();
console.log(saudacao);