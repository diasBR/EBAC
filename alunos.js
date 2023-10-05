//instâncias
const aluno1 = new Aluno("Maria", "Inglês", 12);
const aluno2 = new Aluno("João", "Violão", 13);
const aluno3 = new Aluno("Marta", "Futebol", 14);

//abstrações e heranças
function Nome(nome) {
    this.nome = nome;

    this.dizNome = function() {
        console.log(this.nome);
    }
    this.dizModalidade = function() {
        console.log(this.modalidade);
    }
    this.dizIdade = function() {
        console.log(this.idade);
    }
}

function Modalidade(modalidade) {
    this.modalidade = modalidade;
}

function Idade(idade) {
    this.idade = idade;
}

function Aluno(nome, modalidade, idade) {
    Nome.call(this, nome);
    Modalidade.call(this, modalidade);
    Idade.call(this, idade);
}


//-----------------------------------------------
//chamadas
imprimeDadosAluno1();
imprimeDadosAluno2();
imprimeDadosAluno3();

function imprimeDadosAluno1() {
    aluno1.dizNome();
    aluno1.dizModalidade();
    aluno1.dizIdade();
}

function imprimeDadosAluno2() {
    aluno2.dizNome();
    aluno2.dizModalidade();
    aluno2.dizIdade();
}

function imprimeDadosAluno3() {
    aluno3.dizNome();
    aluno3.dizModalidade();
    aluno3.dizIdade();
}



