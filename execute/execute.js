
class Pessoa{
  nome;
  idade;
  ano;

  constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.ano = 2022;
  }

calcularIdade(idade) {
 return this.ano - idade; 
}
}

const kauan = new Pessoa('Kauan', 18, 2022);
const Bruno = new Pessoa('Bruno', 19, 2022);
console.log(kauan, 'Valor' + ' ' + kauan.calcularIdade(18));
