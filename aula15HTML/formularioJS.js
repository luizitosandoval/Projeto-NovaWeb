
function cadastrar(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Cadastrado com sucesso! Nome: " + nome);

    document.getElementById("mensagem").textContent =
        "Cadastrado com sucesso! Bem-vindo, " + nome + "!";
}
