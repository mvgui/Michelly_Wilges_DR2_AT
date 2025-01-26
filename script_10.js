/*Os endereços IP versão 4 são divididos em cinco classes: A, B, C, D e E. 
Os endereços no intervalo de 0 a 127 são classe A, de 128 a 191 são classe B, de 192 a 223 são classe C, de 224 a 239 são classe D e a partir de 240 são classe E. 
Crie um programa que leia o primeiro octeto, no formato de um número inteiro, de um endereço IP e informe a sua classe. Use prompt e alert.*/
const octeto = Number(
  prompt("Digite os três primeiros números do endereço de IP:")
);

if (Number.isInteger(octeto) && octeto >= 0 && octeto <= 255) {
  let classe;
  if (octeto < 128) {
    classe = "A";
  } else if (octeto < 192) {
    classe = "B";
  } else if (octeto < 224) {
    classe = "C";
  } else if (octeto < 240) {
    classe = "D";
  } else {
    classe = "E";
  }
  alert(`O endereço do IP ${octeto} é classe ${classe}.`);
} else {
  alert("Este não é um endereço de IP válido.");
}
