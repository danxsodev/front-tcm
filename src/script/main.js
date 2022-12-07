const itemsCart = [
    
    {
        id: 0,
        nameProduct: 'Temaki',
        imageProduct: 'sushis.jpg',
        priceProduct: '30,90',
        quantityProduct: 0
    },

    /*{
        id: 1,
        nameProduct: '',
        imageProduct: '',
        priceProduct: '39,90',
        quantityProduct: 0
    },

    {
        id: 2,
        nameProduct: '',
        imageProduct: '',
        priceProduct: '35,90',
        quantityProduct: 0
    },

    {
        id: 3,
        nameProduct: '',
        imageProduct: '',
        priceProduct: '25,90',
        quantityProduct: 0
    }*/

]

function loadCard() {
    const contentCard = document.getElementsByClassName("content-card");
    itemsCart.map((item)=>{

        var productID = document.getElementsByClassName("add-to-cart") = item.id;
        var productName = document.getElementsByClassName("product-name") = item.nameProduct;
        var productImage = document.getElementsByClassName("image-product") = item.imageProduct;
        var productPrice = document.getElementsByClassName("price") = item.priceProduct;
        /*var productQuantity = document.getElementsByClassName("").value = item.quantityProduct;*/

    })
}

const btnAddCart = document.getElementsByClassName("add-to-cart");

function addItemsCart() {
    const contentCardCart = document.getElementsByClassName("content-card-cart");
    itemsCart.map((item)=>{

        if (item.quantityProduct > 0) {
            
            contentCardCart.innerHMTL = "";

            contentCardCart.innerHMTL+= `
                <div class="card-cart">
                    <span class="img-item">
                        <img src="`+item.imageProduct+`" alt="">
                    </span>

                    <span class="name-item">
                        <h4>`+item.nameProduct+`</h4>
                    </span>

                    <span class="price-item">
                        <h5 class="price">`+item.priceProduct+`</h5>
                    </span>

                    <span class="quantity-item">
                        <p class="quantity">Quantidade: `+item.quantityProduct+`</p>
                    </span>
                </div>
            `;
        }

    })
}

