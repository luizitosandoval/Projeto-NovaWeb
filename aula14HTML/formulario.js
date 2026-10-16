const idade = document.getElementById("Idade");
const botao = document.getElementById("habilitar");

botao.addEventListener("click", function() {
    idade.disabled = false;
    idade.focus();
});

idade.addEventListener("blur", function() {
    idade.disabled = true;
});
