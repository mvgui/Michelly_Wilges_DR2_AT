/* Crie um sistema onde o usuário digita um nome de usuário e senha utilizando prompt.
Verifique se as credenciais estão corretas 
(defina valores fixos para nome de usuário e senha em JavaScript, 
como user: admin, password: 1234).
Mostre um alert com a mensagem correta, 
conforme se o login foi bem sucedido ou não. */

const login = "admin";
const senha = "1234";
let loginDigitado = prompt("Digite o usuário:");
let senhaDigitada = prompt("Digite a senha:");

if (isNotEmpty(loginDigitado) && isNotEmpty(senhaDigitada)) {
  if (loginDigitado === login && senhaDigitada === senha) {
    alert(`Bem-vindo ${login}!`);
  } else {
    alert(`Os dados de usuário e senha não conferem.`);
  }
} else {
  alert("Essa não é uma entrada válida.");
}
