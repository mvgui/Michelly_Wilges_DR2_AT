/*Desenvolva uma aplicação que solicite dia, mês e ano via prompts separados de uma data futura
 e mostre quantos dias, horas e minutos faltam para chegar.
*/
let dia = Number(prompt("Digite o dia de uma data futura com dois dígitos:"));
let mes = Number(prompt("Digite o mes de uma data futura com dois dígitos:"));
let ano = Number(prompt("Digite o ano de uma data futura com quatro dígitos:"));
if (
  dia >= 1 &&
  dia <= 31 &&
  mes >= 1 &&
  dia <= 12 &&
  ano >= 1000 &&
  ano <= 9999
) {
  let dataFutura = new Date(ano, mes - 1, dia);
  let dataAtual = new Date();
  let calculo = dataFutura - dataAtual;
  let dias = Math.floor(calculo / (1000 * 60 * 60 * 24));
  let horas = Math.floor((calculo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutos = Math.floor((calculo % (1000 * 60 * 60)) / (1000 * 60));
  alert(`Faltam ${dias} dias, ${horas}h${minutos}min.`);
} else {
  alert("Essa não é uma data válida.");
}
