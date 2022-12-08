/*const selectItem = (elemento) => document.querySelector(elemento);
const selectItemAll = (elemento) => document.querySelectorAll(elemento);*/

let modalKey = 0;

// variavel para controlar a quantidade inicial de pizzas na modal
let modalQuantity = 1;

let cart = [];

const modal = document.getElementsByClassName("content-modal-card");
const btnAddCart = document.getElementsByClassName("add-to-cart");

const formatMonetaryReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

const formatMonetary = (valor) => {
    if(valor) {
        return valor.toFixed(2);
    }
}

const openModal = () => {
    modal.style.opacity = 0 // transparente
    modal.style.display = 'flex'
    setTimeout(() => modal.style.opacity = 1, 150)
}

const closeModal = () => {
    modal.style.opacity = 0; // transparente
    setTimeout(() => modal.style.display = 'none', 500);
}

const btnClose = () => {
    // BOTOES FECHAR MODAL
    document.getElementsByClassName('back').forEach( (item) => item.addEventListener('click', closeModal) );
}

function loadCard() {
    
    itemsProduct.map((menuItem, item, index)=>{
        menuItem.setAttribute('data-key', index)
        menuItem.document.getElementsByClassName("image-product").src = item.imageProduct;
        menuItem.document.getElementsByClassName("product-name").innerHMTL = item.nameProduct;
        menuItem.document.getElementsByClassName("product-description").innerHMTL = item.descriptionProduct;
        menuItem.document.getElementsByClassName("price").innerHMTL = formatMonetaryReal(item.priceProduct[2]);
        
    })
}

function addItemModal() {
    itemsProduct.map((item)=>{

        document.getElementsByClassName("modal-product-img").src = item.img
        document.getElementsByClassName("cart-item-name").innerHTML = item.name
        document.getElementsByClassName("cart-item-description").innerHTML = item.description
        document.getElementsByClassName("cart-item-actual-price").innerHTML = formatReal(item.price[2])

    })
}

const takeKey = (element) => {
    // .closest retorna o elemento mais proximo que tem a class que passamos
    // do .pizza-item ele vai pegar o valor do atributo data-key
    let key = element.target.closest('.card').getAttribute('data-key')
    console.log('Pizza clicada ' + key)
    console.log(pizzaJson[key])

    // garantir que a quantidade inicial de pizzas é 1
    modalQuantity = 1

    // Para manter a informação de qual pizza foi clicada
    modalKey = key

    return key
}

const changeQuantity = () => {
    // Ações nos botões + e - da janela modal

    const btnQuantityMore = document.getElementsByClassName('cart-item-quantity-more').addEventListener('click', () => {
        modalQuantity++
        btnQuantityMore('cart-item-quantity-more').innerHTML = modalQuantity;
    })

    const btnQuantityLess = document.getElementsByClassName('cart-item-quantity-less').addEventListener('click', () => {
        if(modalQuantity > 1) {
            modalQuantity--
            btnQuantityLess('item-quantity').innerHTML = modalQuantity;
        }
    })
}