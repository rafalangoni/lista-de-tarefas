let listaDeItens = document.querySelector(".lista__tarefas");
let itemDaLista = document.querySelector(".lista__itens")
let botaoAdicionar = document.querySelector(".botao__adicionar");
let botaoRemover = document.querySelector(".botao__remover")
let itemClicado = false;

/**
 * A variável itemClicado serve para fazer com que se saiba se o item foi clicado ou não para remover.
 * Se ele foi clicado, o alerta de campo preenchido não deve aparecer, pois o item já existe.
 */

/**
 * O primeiro Li criado está oculto. Fiz isso porque na primeira adição, como não havia elementos
 * a remoção não funcionava. Então criei um Li com display: none, para que a iteração
 * funcionasse normalmente.
 */
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
    if (itemClicado == false) {
        if (valorDoInput == '' || valorDoInput == null) {
            alert("Digite alguma tarefa a ser excluída.");
            return;
        }
    }
    let item = document.querySelectorAll("ul .lista__itens");
    item.forEach((elemento) => {
        if (valorDoInput === elemento.textContent) {
            listaDeItens.removeChild(elemento);
            document.querySelector("#tarefa").value = '';
        }
    })
})

listaDeItens.addEventListener("click", (evento) => {
    itemClicado = true;
    evento.target.classList.add("item__selecionado");
    botaoRemover.addEventListener("click", (e) => {
        document.querySelector("#tarefa").value = evento.target.textContent;
        evento.originalTarget.hidden = "true";
        document.querySelector("#tarefa").value = '';
    })
})