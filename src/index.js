import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);


//-------------------------------------------------------


let inputResultado = document.getElementById("inputDisplayResultado");
let calculo = {
  primeiroValor: 0,
  segundoValor: 0,
  funcaoParaCalular: null
}

//inputResultado.value="seven";


// Ao carregar a janela, inicializa os métodos e variaveis
window.addEventListener("load", function () {
  atribuirEventos();
});

// Adiciona o número na tela
function inserirNumero() {
  // Se o valor na tela não for um número,
  // substitui pelo número/valor do botão
  if (isNaN(inputResultado.value)) {
      inputResultado.value = event.target.textContent;
      // Senão, adiciona o texto junto com o existente
  } else {
      // Se o valor na tela for zero, substitui o valor na tela pelo número clicado
      if (inputResultado.value == 0) {
          inputResultado.value = event.target.textContent;
      // Senão adiciona o número ao input para criar digitos maiores que 0
      } else {
          inputResultado.value += event.target.textContent;
      }
  }
}

function atribuirEventos() {
  document.getElementById("seven").value.addEventListener("click", inserirNumero);
}
