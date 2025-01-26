/*Crie uma aplicação que obtenha o dia, mês e o ano de uma data com prompt e informe:
O dia da semana em português.
O mês do ano em português.*/
let dia = Number(prompt("Digite o dia com dois dígitos:"));
let mes = Number(prompt("Digite o mes com dois dígitos:"));
let ano = Number(prompt("Digite o ano com quatro dígitos:"));
let data = new Date(ano, mes - 1, dia);
let diaSemana;
if (
  dia >= 1 &&
  dia <= 31 &&
  mes >= 1 &&
  dia <= 12 &&
  ano >= 1000 &&
  ano <= 9999
) {
  switch (data.getDay()) {
    case 0:
      diaSemana = "Domingo";
      break;
    case 1:
      diaSemana = "Segunda-feira";
      break;
    case 2:
      diaSemana = "Terça-feira";
      break;
    case 3:
      diaSemana = "Quarta-feira";
      break;
    case 4:
      diaSemana = "Quinta-feira";
      break;
    case 5:
      diaSemana = "Sexta-feira";
      break;
    case 6:
      diaSemana = "Sábado";
      break;
  }
  let mesAno;
  switch (data.getMonth()) {
    case 0:
      mesAno = "Janeiro";
      break;
    case 1:
      mesAno = "Fevereiro";
      break;
    case 2:
      mesAno = "Março";
      break;
    case 3:
      mesAno = "Abril";
      break;
    case 4:
      mesAno = "Maio";
      break;
    case 5:
      mesAno = "Junho";
      break;
    case 6:
      mesAno = "Julho";
      break;
    case 7:
      mesAno = "Agosto";
      break;
    case 8:
      mesAno = "Setembro";
      break;
    case 9:
      mesAno = "Outubro";
      break;
    case 10:
      mesAno = "Novembro";
      break;
    case 11:
      mesAno = "Dezembro";
      break;
  }
  alert(`O dia da semana é ${diaSemana} e o mês do ano é ${mesAno}.`);
} else {
  alert("Essa não é uma entrada válida.");
}
