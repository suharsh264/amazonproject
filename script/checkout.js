import {cart} from '../data/cart.js';
import {amazondataobj} from '../data/amazondata.js';



//Searching throught cart array
cart.forEach((cartitems)=>{
   const productId = cartitems.cardid;

    let matchingProduct;

    amazondataobj.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });
 
    
    let cartItemDisplayDiv = document.querySelector('#cartitemsdiv');
    
    cartItemDisplayDiv.innerHTML += `
    <div class="innerdivcartitem">
         <div class="innerimgcart">
            <h1>Delivery Date: Tuesday, June 12</h1>
            <div id="parentdivofdescription">
             <img src="${matchingProduct.img}">
             <div class ="cartdescription">
                 <h3>${matchingProduct.name}</h3>
                 <span class="pricespan">$${matchingProduct.price}</span>
                 <div id="quantitydiv" class="quantitytext"><span>Qunantity:${matchingProduct.quantity}</span><a href="#">Update</a><a href="#">Delete</a></div>
                 </div>
         </div> 
         </div>
         <div id="deliveryoptiondiv">
         <h4>Choose the delivery option</h4>
         <div id="dateoption" class="dateoption">
             <input type="radio" name="deliveryoption">
             Tuesday, May 12
         </div>
         <div id="dateoption" class="dateoption">
             <input type="radio" name="deliveryoption">
             Tuesday, May 12
         </div>
         <div id="dateoption" class="dateoption">
             <input type="radio" name="deliveryoption">
             Tuesday, May 12
         </div>
         <div id="dateoption" class="dateoption">
             <input type="radio" name="deliveryoption">
             Tuesday, May 12
         </div>
     </div>
    
    
    `

    
})

let checkoutquantitydisplay = document.querySelector('.checkoutspan');

checkoutquantitydisplay.textContent = `(${increaseCartQuantity()}Items)`;