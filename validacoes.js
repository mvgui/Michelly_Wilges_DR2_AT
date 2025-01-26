//Biblioteca de Funções de Validação de Dados

/* Verifica se um prompt tem é diferente de vazio e nulo, 
também elimina excesso de espaços*/
function isNotEmpty(field) {
  return field && field.trim() && field.length > 0;
}

// Verifica se é um número inteiro e positivo
function numInteiroPositivo(numero) {
  return Number.isInteger(numero) && numero > 0;
}

// Verifica se prompt é um número diferente de vazio e nulo
function validNumber(numero) {
  return !isNaN(numero) && numero !== "";
}

// Verifica se a string tem no mínimo 5 caracteres
function qtdMinCaracteres(field) {
  return field.length > 4;
}

// Verifica se a string tem no máximo 15 caracteres
function qtdMaxCaracteres(field) {
  return field.length < 16;
}

// Verifica se a string contém a palavra “cpf” (em minúsculo)
function verificaCpf(field) {
  return field.indexOf("cpf") !== -1;
}
