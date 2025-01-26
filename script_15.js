/*Crie um formulário HTML com campos para nome, idade e e-mail, 
além de um botão de envio. Utilize as tags input, e button.
Quando o formulário for submetido, crie uma função JavaScript que valide os campos:
O nome deve ter pelo menos 3 caracteres.
A idade deve ser um número positivo.
O e-mail deve conter "@".
Exiba uma mensagem no HTML informando se os dados estão corretos ou não.*/
function enviar() {
  const nome = document.getElementById("nome");
  const idade = document.getElementById("idade");
  const email = document.getElementById("email");
  let mensagem = "";
  if (!nome.value || nome.value.length < 3) {
    mensagem +=
      "O campo Nome é obrigatório e deve possuir no mínimo 3 caracteres." +
      "<br>";
  } else {
    mensagem += "O campo Nome foi preenchido corretamente." + "<br>";
  }
  if (!idade.value || idade.value < 1) {
    mensagem +=
      "O campo Idade é obrigatório e deve ser um número maior que 0." + "<br>";
  } else {
    mensagem += "O campo Idade foi preenchido corretamente." + "<br>";
  }
  if (!email.value) {
    mensagem += "O campo E-mail é obrigatório." + "<br>";
  } else if (email.value.indexOf("@") === -1) {
    mensagem += "Esse não é um E-mail válido." + "<br>";
  } else {
    mensagem += "O campo E-mail foi preenchido corretamente." + "<br>";
  }
  const mensagens = document.getElementById("mensagem");
  mensagens.innerHTML = mensagem;
}
