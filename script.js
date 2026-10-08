function venderItem(id) {
    const elementoEstoque = document.getElementById(`estoque${id}`);
    let valorAtual = parseInt(elementoEstoque.innerText);

    if (valorAtual > 0) {
        elementoEstoque.innerText = valorAtual - 1;
    } else {
        alert("Produto esgotado!");
    }
}

function reporItem(id) {
    const elementoEstoque = document.getElementById(`estoque${id}`);
    elementoEstoque.innerText = 10;
}

function filtrarProdutos() {
    const termo = document.getElementById("campoBusca").value.toLowerCase();
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        const nomeProduto = card.querySelector("h3").innerText.toLowerCase();
        if (nomeProduto.includes(termo)) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });
}

function enviarReview() {
    const nome = document.getElementById("nome").value.trim();
    const comentario = document.getElementById("comentario").value.trim();

    if (nome === "" || comentario === "") {
        alert("Por favor, preencha o seu nome e o comentário.");
        return;
    }

    const containerReviews = document.getElementById("listaReviews");
    const novoReview = document.createElement("div");
    novoReview.className = "item-review";
    novoReview.innerHTML = `<strong>${nome}</strong><p>${comentario}</p>`;

    containerReviews.appendChild(novoReview);

    document.getElementById("nome").value = "";
    document.getElementById("comentario").value = "";
}