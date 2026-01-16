const input = document.getElementById("campoTexto");
const botao = document.getElementById("botao");
const botaoLimpar = document.getElementById("botaoLimpar");

// Evento do botão Enviar
botao.addEventListener("click", function() {
    const paragrafoRetorno = document.getElementById("mensagem");

    if (input.value.trim() === "") {
      alert("Por favor, digite um texto antes de enviar.");
      input.focus();
      return; // interrompe aqui se estiver vazio
    }
    
    let fraseRetorno = document.createElement("p");
    fraseRetorno.textContent = input.value;
    paragrafoRetorno.appendChild(fraseRetorno);

    input.value = ""; // limpa o campo
    input.style.borderColor = "black"; // volta cor normal
    input.focus();
});

// Evento do botão Limpar
botaoLimpar.addEventListener("click", function() {
    const paragrafoRetorno = document.getElementById("mensagem");
    paragrafoRetorno.innerHTML = "";
  });

// Evento de digitação: só muda a cor da borda
input.addEventListener("input", function() {
    if (input.value.trim() === "") {
      input.style.borderColor = "red";
    } else {
      input.style.borderColor = "black";
    }
});
