/*Crie uma aplicação que obtenha uma string através de um prompt e informe:
Se a string tem no mínimo 5 caracteres.
Se a string tem no máximo 15 caracteres.
Se a string contém a palavra “cpf” (em minúsculo).
Crie funções em uma biblioteca para executar as 3 verificações solicitadas.*/

let input = prompt("Digite algo:");
if (isNotEmpty(input)) {
  qtdMinCaracteres(input)
    ? alert("Tem 5 ou mais caracteres")
    : alert("Não tem 5 ou mais caracteres");

  qtdMaxCaracteres(input)
    ? alert("Tem 15 ou menos caracteres")
    : alert("Não tem 15 ou menos caracteres");

  verificaCpf(input)
    ? alert("Contém a palavra cpf em minúsculas")
    : alert("Não contém a palavra cpf em minúsculas");
} else {
  alert("Essa não é uma entrada válida.");
}
