function loadCard() {
    var contentCard = document.getElementsByClassName("card-content");
    itemsCart.map((item)=>{
        console.log(item.nameProduct)

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

                    <h5 class="price">R$XX,XX</h5>
                </span>
            </div>
        `
        
    })
}