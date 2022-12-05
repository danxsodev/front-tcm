const itemsCart = [
    
    {
        id: 0,
        nameProduct: '',
        imageProduct: '',
        quantityProduct: 0
    },

    {
        id: 1,
        nameProduct: '',
        imageProduct: '',
        quantityProduct: 0
    },

    {
        id: 2,
        nameProduct: '',
        imageProduct: '',
        quantityProduct: 0
    },

    {
        id: 3,
        nameProduct: '',
        imageProduct: '',
        quantityProduct: 0
    }

]

const btnAddCart = document.getElementsByClassName("add-to-cart");

function addItemsCart() {
    var contentCardCart = document.getElementsByClassName("content-card-cart");
    itemsCart.map((item)=>{
        
        contentCardCart.innerHMTL+= `
            <div class="content-card-cart">
                <span class="img-item">
                    <img src="`+item.imageProduct+`" alt="">
                </span>

                <span class="name-item">
                    <h4>`+item.nameProduct+`</h4>
                </span>

                <span class="price-item">
                    <h5 class="price">R$XX,XX</h5>
                </span>

                <span class="quantity-item">
                    <p class="quantity">Quantidade: `+item.quantityProduct+`</p>
                </span>
            </div>
        `
    })
}
