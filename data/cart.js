export let cart = [];

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
            cardid:`${productId}`,
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
let cartdivInnerHTML = document.querySelector('#cartitemsdiv');

// cartdivInnerHTML.innerHTML += `<div class="innerdivcartitem">
//                                                 <div class="innerimgcart">
//                                                     <img src="${productimglink}">
//                                                     <div class ="cartdescription">
//                                                         <h3>${productname}</h3>
//                                                         <span>${productprice}</span>
//                                                         <div id="quantitydiv" class="quantitytext"><span>Qunantity:2</span><a href="#">Update</a><a href="#">Delete</a></div>
//                                                 </div> 
//                                                 </div>
//                                                 <div id="deliveryoptiondiv">
//                                                 <h4>Choose the delivery option</h4>
//                                                 <div id="dateoption" class="dateoption">
//                                                     <input type="radio" name="deliveryoption">
//                                                     Tuesday, May 12
//                                                 </div>
//                                                 <div id="dateoption" class="dateoption">
//                                                     <input type="radio" name="deliveryoption">
//                                                     Tuesday, May 12
//                                                 </div>
//                                                 <div id="dateoption" class="dateoption">
//                                                     <input type="radio" name="deliveryoption">
//                                                     Tuesday, May 12
//                                                 </div>
//                                                 <div id="dateoption" class="dateoption">
//                                                     <input type="radio" name="deliveryoption">
//                                                     Tuesday, May 12
//                                                 </div>
//                                             </div>`;



