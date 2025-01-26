/*Crie um formulário HTML com dois campos de data (input type="date").
Quando o usuário selecionar as duas datas e clicar em um botão "Calcular", 
crie uma função JavaScript que calcule a diferença em dias entre as duas datas 
usando o objeto Date.
Exiba o resultado (número de dias de diferença) na página HTML.
Adicione uma validação que verifique se as datas inseridas são válidas 
e se a data final é maior que a data inicial. 
Se não forem, exiba uma mensagem de erro no HTML.*/
function calcular() {
  let primeiraData = new Date(document.getElementById("primeiraData").value);
  let segundaData = new Date(document.getElementById("segundaData").value);
  if (isNaN(primeiraData) || isNaN(segundaData)) {
    document.getElementById("retorno").innerText =
      "Essa não é uma data válida.";
    return;
  }
  if (segundaData > primeiraData) {
    let calculo = segundaData - primeiraData;
    let dias = Math.floor(calculo / (1000 * 60 * 60 * 24));
    document.getElementById(
      "retorno"
    ).innerText = `A diferença é de ${dias} dia(s).`;
  } else {
    document.getElementById("retorno").innerText =
      "A segunda data deve ser posterior à primeira.";
  }
}
