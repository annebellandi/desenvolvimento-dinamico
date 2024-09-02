const shoppingCart = [];


function addItemToCart(item){
    shoppingCart.push(item) /*push adiciona um item no carrinho*/
}

function removeItemFromCart(item){
    const index = shoppingCart.indexOf(item);
    if(index !== -1 /* -1 significa que nao encontrou | !== -> nao é identico | === identico*/){
        shoppingCart.splice(index,1)
    } 
}

function viewCart(){
    if(shoppingCart.length == 0){
        console.log("your shopping cart is empty")
    }else{
        console.log("itens added to your shopping cart: ")
        for(let i = 0; i < shoppingCart.length;i++){
            console.log(`${i + 1} - ${shoppingCart[i]}`)
        }
    }
}

function clearCart(){
    shoppingCart.length = 0;
    console.log("your has been cleaned")
}

addItemToCart("Tennis")
addItemToCart("blusa")
addItemToCart("shorts")

viewCart()

removeItemFromCart("blusa")

viewCart()

clearCart()

viewCart()