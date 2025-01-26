/*Uma fábrica produz vários tipos de doces que são enviados para as lojas em caixas de vários tipos e tamanhos. 
Construa um programa que obtenha a quantidade de doces fabricados e informe quantas caixas completas vão ser necessárias e se será necessário uma caixa adicional para os doces que restaram.
Distribuir os doces por caixas grandes (com 40 doces), médias (com 30 doces) e pequenas (com 20 doces).*/
const qtdDoces = Number(prompt("Digite a quantidade de doces:"));
let numCaixaP = 0;
let numCaixaM = 0;
let numCaixaG = 0;
let restante = qtdDoces;
if (numInteiroPositivo(qtdDoces)) {
  numCaixaG = Math.floor(qtdDoces / 100);
  restante = qtdDoces % 100;
  if (restante >= 50) {
    numCaixaM = Math.floor(restante / 50);
    restante = restante % 50;
  }
  if (restante > 0) {
    numCaixaP = Math.floor(restante / 20);
    restante = restante % 20;
    if (restante > 0) {
      numCaixaP++;
    }
  }
  alert(
    `Para ${qtdDoces} doces serão necessárias: \n${numCaixaG} caixa(s) do tamanho G, \n${numCaixaM} caixa(s) do tamanho M, \n${numCaixaP} caixa(s) do tamanho P.`
  );
} else {
  alert("Os valores passados são inválidos.");
}
