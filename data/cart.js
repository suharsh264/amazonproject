export let cart = [{
    cardid:1233,
    quantity:2
},{
   cardid:1235,
    quantity:4
}];

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
        console.log(cart);
    };

//Tracking cart Quantity here and displaying it on the screen
let count = 0;

export function increaseCartQuantity(){
   let cartCountEL = document.querySelector('#cartquantity');
   count++;
   console.log(count);
   cartCountEL.textContent = count;
}




