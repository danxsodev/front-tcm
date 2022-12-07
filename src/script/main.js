const selectItem = (elemento) => document.querySelector(elemento)
const selectItemAll = (elemento) => document.querySelectorAll(elemento)

const formatMonetaryReal = (valor) => {
    return valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

const formatMonetary = (valor) => {
    if(valor) {
        return valor.toFixed(2)
    }
}

function loadCard() {
    
    itemsProduct.map((menuItem, item, index)=>{
        menuItem.setAttribute('data-key', index)
        menuItem.document.getElementsByClassName("add-to-cart").innerHMTL = item.id;
        menuItem.document.getElementsByClassName("product-name").innerHMTL = item.nameProduct;
        menuItem.document.getElementsByClassName("image-product").src = item.imageProduct;
        menuItem.document.getElementsByClassName("price").innerHMTL = item.priceProduct;
        
    })
}

const btnAddCart = document.getElementsByClassName("add-to-cart");

function addItemsCart() {
    itemsProduct.map((item)=>{

        ("").src = item.img
        ("").innerHTML = item.name
        ("").innerHTML = item.description
        ("").innerHTML = formatReal(item.price[2])

    })
}

