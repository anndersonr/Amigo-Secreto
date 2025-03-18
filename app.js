let amigos = [];

let sorteados = [];

function adicionarAmigo(){
  const input = document.getElementById("amigo");
  let nome = input.value.trim().toLowerCase();

     if (nome === "" || !isNaN(nome)) {
    alert("Por favor, insira um nome válido.");
    return;
    }

    if (amigos.includes(nome)) {
    alert('Nome já adicionado!');
    return;
    }

    amigos.push(nome);
    atualizarLista();
    input.value = "";

}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  (lista.innerHTML = ""),
    amigos.forEach((amigo, index) => {
      const li = document.createElement("li");
      li.textContent = amigo + (index < amigos.lenght - 1 ? "," : "");
      lista.appendChild(li);
    });
}

function sortearAmigo() {
  if (amigos.lenght === 0) {
    alert("A lista está vazia.");
    return;
  }

  if (amigos.length <= 2) {
    alert("Para poder realizar o sorteio, é preciso ter três amigos ou mais.");
    return;
  }


  let indiceSorteado = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceSorteado];
  sorteados.push(amigoSorteado);
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "O amigo secreto sorteado é: " + sorteados;
  sorteados = [];
  atualizarLista();
}