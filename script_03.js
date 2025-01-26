/* Use o prompt para obter um número.
Em seguida use outro prompt para obter uma operação aritmética.
Em seguida use outro prompt para obter um outro número.
Exiba o resultado em um alert. */
let primeiroNum = Number(prompt("Digite o primeiro número:"));
let operacao = Number(
  prompt(
    "Digite o número da operação desejada, sendo: \n1 = adição \n2 = subtração \n3 = multiplicação \n4 = divisão"
  )
);
let segundoNum = Number(prompt("Digite o segundo número:"));

if (validNumber(primeiroNum) && validNumber(segundoNum)) {
  switch (operacao) {
    case 1:
      alert("O resultado da soma é: " + (primeiroNum + segundoNum));
      break;
    case 2:
      alert("O resultado da subtração é: " + (primeiroNum - segundoNum));
      break;
    case 3:
      alert("O resultado da multiplicação é: " + primeiroNum * segundoNum);
      break;
    case 4:
      alert("O resultado da divisão é: " + primeiroNum / segundoNum);
      break;
    default:
      alert("Essa não é uma operação válida.");
  }
} else {
  alert("Essa não é uma entrada válida.");
}
