function validaEmail() {
    senha = document.getElementById("senha").value
    nome = document.getElementById("nome").value
    email = document.getElementById("email").value

    if (nome === "") {
        alert("Preencha o nome")
    } else if (email === "") {
        alert("Preencha o email")
    } else if (!emailValido(email)) {
        window.alert("Email inválido");
    } else if (senha === "") {
        alert("Preencha a senha")
    } else {
        alert('Sucesso!');
    }
}
function emailValido(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}