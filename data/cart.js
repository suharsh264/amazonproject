
//Here the items when clicking on button gets added in the cart...
export let cart = JSON.parse(localStorage.getItem('cart')) || [];

// console.log(cart);

function saveToLocalStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}

//adding matching product to cart Array
export function addToCart(productId){
    let matchingitem;

        cart.forEach((cartitem)=>{
            
            if(Number(productId) === Number(cartitem.id)){
             matchingitem = cartitem;
            }
        });
        
        if(matchingitem){
            matchingitem.quantity += 1;
        }else{
            cart.push({
            id:Number(productId),
            quantity:1,
        });
         
        }
        
        saveToLocalStorage();
        console.log(cart);
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

   saveToLocalStorage();
}

localStorage.removeItem('cart');


