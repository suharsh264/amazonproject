
//Here the items when clicking on button gets added in the cart...
export let cart = [{
    id: 1233,
    quantity: 1
},{
    id: 1234,
    quantity: 3
}];

console.log(cart);
//adding matching product to cart Array
export function addToCart(productId){
    let matchingitem;
    
        cart.forEach((cartitem)=>{
            if(productId === cartitem.id){
             matchingitem = cartitem;
            }
        });
        
        if(matchingitem){
            matchingitem.quantity += 1;
        }else{
            cart.push({
            cardid:productId,
            quantity:1,
        });
         
        }
        
    };

    // console.log(document.readyState);

//Tracking cart Quantity here and displaying it on the screen
let count = 0;

export function increaseCartQuantity(){
   count++;
   return count;
}


export function removeFromCart(cartitem){
    let newCart = [];

    cart.forEach((item)=>{
      if(item.id !== cartitem){
        newCart.push(item);
      }
    });

   cart = newCart;
}




