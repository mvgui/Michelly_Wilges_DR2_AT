/*Peça ao usuário para adivinhar o número usando prompt.
Gere um número aleatório entre 1 e 100.
Exiba mensagens como "Muito alto", "Muito baixo", ou "Correto!" com alert. */
let opUsuario = Number(
  prompt(
    "Adivinhe o número escolhido pelo programa entre 1 e 100, \ndigitando-o abaixo:"
  )
);
let opPrograma = Math.floor(Math.random() * 100) + 1;

if (numInteiroPositivo(opUsuario) && opUsuario >= 1 && opUsuario <= 100) {
  opUsuario > opPrograma
    ? alert(
        `Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}. \nSeu palpite foi muito alto.`
      )
    : opUsuario < opPrograma
    ? alert(
        `Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}. \nSeu palpite foi muito baixo.`
      )
    : alert(
        `Você escolheu ${opUsuario} e o programa escolheu ${opPrograma}. \nSeu palpite foi correto.`
      );
} else {
  alert("Essa não é uma entrada válida.");
}
