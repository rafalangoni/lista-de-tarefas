let listaDeItens = document.querySelector(".lista__tarefas");
let itemDaLista = document.querySelector(".lista__itens")
let botaoAdicionar = document.querySelector(".botao__adicionar");
let botaoRemover = document.querySelector(".botao__remover")

botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault;
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
})

botaoRemover.addEventListener("click", () => {
    let valorDoInput = document.querySelector("#tarefa").value;
    if (valorDoInput == '' || valorDoInput == null) {
        alert("Digite alguma tarefa a ser excluída.");
        return;
    }
    let item = document.querySelectorAll("ul .lista__itens");
    item.forEach( (elemento) => {
        if(valorDoInput === elemento.textContent){
            listaDeItens.removeChild(elemento);
            document.querySelector("#tarefa").value = '';
        }
    })
})