let listaDeItens = document.querySelector(".lista__tarefas");
let itemDaLista = document.querySelector(".lista__itens")
let botaoAdicionar = document.querySelector(".botao__adicionar");
let botaoRemover = document.querySelector(".botao__remover")

botaoAdicionar.addEventListener("click", () => {
    let valorDoInput = document.querySelector("#tarefa").value;
    if (valorDoInput == '' || valorDoInput == null) {
        alert("Digite alguma tarefa a ser incluída.");
        return;
    }
    let itemDaListaLi = document.createElement("li");
    itemDaListaLi.appendChild(document.createTextNode(valorDoInput));
    itemDaListaLi.classList.add("lista__itens");
    listaDeItens.appendChild(itemDaListaLi);
    document.querySelector("#tarefa").value = '';
    let botaoIncluirClicado = true;
    return botaoIncluirClicado;
})

/**
 * essa parte de baixo não está fucional
 * quero habilitar o clique no item para poder removê-lo
 * verificar o local onde usar o itemDaLista
 */
console.log(itemDaLista)
itemDaLista.addEventListener("click", () => {
    itemDaLista.style.backgroundColor = "white";
})


botaoRemover.addEventListener("click", () => {
    if (valorDoInput == '' || valorDoInput == null) {
        alert("Digite alguma tarefa a ser excluída.");
        return;
    }
})