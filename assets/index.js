let valorDoInput = document.querySelector("#tarefa").value;
let listaDeItens = document.querySelector(".lista__tarefas");
let itemDaLista = document.querySelector(".lista__itens")
let botaoAdicionar = document.querySelector(".botao__adicionar");
let botaoRemover = document.querySelector(".botao__remover")

botaoAdicionar.addEventListener("click", () =>{
    if(valorDoInput == '' || valorDoInput == null){
        alert("Digite alguma tarefa a ser inserida.");
        return
    }
    let itemLista = document.createElement("li");
    itemLista.appendChild(document.createTextNode(valorDoInput));
    itemLista.classList.add("lista__itens");
    listaDeItens.appendChild(itemLista);
    document.querySelector("#tarefa").value = '';
})

botaoRemover.addEventListener("click", () =>{
    if(valorDoInput == '' || valorDoInput == null){
        alert("Digite alguma tarefa a ser excluída.");
        return;
    }
})