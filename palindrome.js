// function declaration.
palindromo();

function palindromo() {
  let palavra = "outro";
  let palavraSeparada = palavra.split("");
  let palavraInvertida = palavraSeparada.reverse();
  palavraInvertida = palavraInvertida.join("");

  palavra == palavraInvertida
    ? console.log(`A palavra "${palavra}" é um palíndromo!`)
    : console.log(`A palavra "${palavra}" não é um palíndromo!`);
}

// function expression.
const verificandoPalindromo = function (palavra) {
  let palavraSeparada = palavra.split("");
  let palavraInvertida = palavraSeparada.reverse("");
  palavraInvertida = palavraInvertida.join("");

  palavra == palavraInvertida
    ? console.log(`A palavra "${palavra}" é um palíndromo!`)
    : console.log(`A palavra "${palavra}" não é um palíndromo!`);
};

verificandoPalindromo("rever");
