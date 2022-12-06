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

        console.log(item.id)
        console.log(item.nameProduct)
        console.log(item.imageProduct)
        console.log(item.priceProduct)
        console.log(item.quantityProduct)

        contentCard.innerHMTL+= `
        <div class="card">
            <span class="menu-img">
                <img src="`+item.imageProduct+`" alt="">
            </span>

            <span class="menu-description">
                <h4>`+item.nameProduct+`</h4>
                <p>Descrição</p>
            </span>

            <span class="content-cart-price">
                <button key="`+item.id+`" class="add-to-cart">
                    <img src="../assets/images/menu-cart.svg" alt="">
                </button>

                <h5 class="price">`+item.priceProduct+`</h5>
            </span>
        </div>
        `;
        
    })
}

const btnAddCart = document.getElementsByClassName("add-to-cart");

function addItemsCart() {
    const contentCardCart = document.getElementsByClassName("content-card-cart");
    itemsCart.map((item)=>{

        console.log(item.nameProduct)
        console.log(item.imageProduct)
        console.log(item.priceProduct)
        console.log(item.quantityProduct)

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

