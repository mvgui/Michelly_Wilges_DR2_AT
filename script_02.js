/* Obtenha, usando prompt, o nome do usuário, a sua idade e a cidade onde mora.
Gere uma mensagem personalizada no formato:
"Olá, [nome]! Você tem [idade] anos e mora em [cidade]." */
let nome = prompt("Digite o seu nome:");
let idade = Number(prompt("Digite a sua idade:"));
let cidade = prompt("Digite a cidade em que você reside:");

if (
  isNotEmpty(nome) &&
  isNotEmpty(cidade) &&
  idade !== "" &&
  numInteiroPositivo(idade)
) {
  console.log(nome);
  alert(`Olá, ${nome}! Você tem ${idade} anos e mora em ${cidade}.`);
} else {
  alert("Erro.");
}
