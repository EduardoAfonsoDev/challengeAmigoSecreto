//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let listadeamigos = [];

function adicionarAmigo() {
    let nomeamigo = document.getElementById('amigo').value;
    if (nomeamigo != '') {

        addarrayamigos(nomeamigo);
        console.log(listadeamigos);
       
    } else {
        alert("Digite um nome válido!");
    }

}

function addarrayamigos(novoamigo) {
    listadeamigos.push(novoamigo);
}