/*Crie um sistema que solicite um ano por prompt e informe se o ano é bissexto ou não.
 */
let ano = Number(prompt("Digite o ano com 4 dígitos:"));

if (validNumber(ano) && numInteiroPositivo(ano) && ano <= 9999) {
  if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
    alert(`${ano} é bissexto.`);
  } else {
    alert(`${ano} não é bissexto.`);
  }
} else {
  alert("Este programa espera receber um número inteiro como entrada.");
}
