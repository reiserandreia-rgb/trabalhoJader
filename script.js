function openModal(name, desc, price, imgSrc) {
    // Captura os elementos do modal
    const modal = document.getElementById('modal');
    const title = document.getElementById('modal-title');
    const description = document.getElementById('modal-desc');
    const priceText = document.getElementById('modal-price');
    const image = document.getElementById('modal-img');

    // Insere os dados dinamicamente
    title.innerText = name;
    description.innerText = desc;
    priceText.innerText = price;
    image.src = imgSrc; // Aqui a imagem muda para a do produto clicado

    // Mostra o modal
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Fecha o modal se o usuário clicar na parte escura (fora da janela branca)
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        closeModal();
    }
}
