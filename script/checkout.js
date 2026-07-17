import {cart, increaseCartQuantity, removeFromCart} from '../data/cart.js';
import {amazondataobj} from '../data/amazondata.js';

let cartitemssummary = '';

//Searching throught cart array
let matchingProduct;

cart.forEach((cartitems)=>{
   
   
    let productId = cartitems.id;

    // console.log("Cart Item:", cartitems);
    // console.log("Product ID from cart:", productId);
    // console.log(cartitems);
    

    amazondataobj.forEach((product) => {

        if (String(product.id) === String(productId)) {
            matchingProduct = product;
        }

    // console.log("Matching Product:", matchingProduct);
        
});
    
                
    cartitemssummary += `
                            <div class="innerdivcartitem js-div-cart-${matchingProduct.id}" >
                                    <div class="innerimgcart">
                                        <h1>Delivery Date: Tuesday, June 12</h1>
                                        <div id="parentdivofdescription">
                                        <div id="cartdescriptionimg">
                                        <img src="${matchingProduct.img}">
                                        </div>
                                        <div class ="cartdescription">
                                            <h3>${matchingProduct.name}</h3>
                                            <span class="pricespan">$${matchingProduct.price}</span>
                                            <div id="quantitydiv" class="quantitytextdiv">Qunantity:<span class="QuantityText">${cartitems.quantity}<button class="updateLink checkoutcardlinks" id='data-productUpdateId-${matchingProduct.id}'>Update</button></span><button type='submit' class="deleteLink checkoutcardlinks" data-cartdiv-id="${matchingProduct.id}">Delete</button></div>
                                            </div>
                                    </div> 
                                    </div>
                                    <div id="deliveryoptiondiv">
                                    <h4>Choose the delivery option</h4>
                                    <div id="dateoption" class="dateoption">
                                        <input type="radio" id="deliveryoption" name="deliveryoption">
                                        <label for="deliveryoption">Tuesday, May 12<p>free delivery</p></label>
                                    </div>
                                    <div id="dateoption" class="dateoption">
                                        <input type="radio" id="deliveryoption2" name="deliveryoption">
                                        <label for="deliveryoption2">Tuesday, May 12<p>free delivery</p></label>
                                    </div>
                                    <div id="dateoption" class="dateoption">
                                        <input type="radio" id="deliveryoption3" name="deliveryoption">
                                        <label for="deliveryoption3">Tuesday, May 12<p>free delivery</p></label>
                                    </div>
                                    <div id="dateoption" class="dateoption">
                                        <input type="radio" id="deliveryoption4" name="deliveryoption">
                                        <label for="deliveryoption4">Tuesday, May 12<p>free delivery</p></label>
                                    </div>
                                </div>
                            </div>
    
    `;
});

// console.log(cartitemssummary);

//displaying the matching items in checkout cart page

let cartItemDisplayDiv = document.querySelector('#cartitemsdiv');
    
cartItemDisplayDiv.innerHTML = cartitemssummary;


let cartDivCount = cart.length;
export function cartQuantityCounter(Count){
        let checkoutquantitydisplay = document.querySelector('.checkoutspan');
       
        console.log(Count);
        checkoutquantitydisplay.textContent = `${Count} Items`;
}

cartQuantityCounter(cartDivCount);

document.querySelectorAll('.checkoutcardlinks').forEach((links)=>{
   links.addEventListener('click',function(){
        let productsid = parseInt(links.dataset.cartdivId, 10);
        removeFromCart(productsid);
    
        const deleteddiv = document.querySelector(`.js-div-cart-${productsid}`);
        
        deleteddiv.remove();
    
        --cartDivCount;
       cartQuantityCounter(cartDivCount);

       if(cartDivCount === 0){
        localStorage.removeItem('cart');
       }
    })
});


// let updatetextspan = document.querySelector('.QuantityText');


// let updatefirsttext = updatetextspan.childNodes[0];
  
// let matchingProductId;

// cart.forEach((productID)=>{

//     let productIDs = productID.id;

//     amazondataobj.forEach((matchingitems)=>{
//     if (String(matchingitems.id) === String(productIDs)) {
//             matchingProductId = matchingitems;
//         }
// })

// })

// console.log(matchingProductId);

let matchingProId = matchingProduct.id;


function updatetextoflink(matchingProd){
   //first clicking on the update button which needs to add event listener to it.
   //after clicking update link it should change the whole html of the main container content.
   //innerHTMl should appear has <input type="number" min='0' max='100' value='0'><button>Save</button>
   //after clicking on the save button it should update the count in first main container content.
   //And when clicking again it should do the same process.

   let quantityText = document.querySelector('.QuantityText');
   console.log(quantityText);
   let updateButton = document.querySelector('.updateLink');
   updateButton.addEventListener('click', ()=>{
     quantityText.innerHTML = `<input type='number' min='1' max='100' id='saveinput'><button id="saveUpdateBtn">Save</button>`;


     let saveUpdateBtn = document.querySelector('#saveUpdateBtn');

   saveUpdateBtn.addEventListener('click', ()=>{
    let saveInputEl = document.querySelector('#saveinput');
    let saveInputValue = saveInputEl.value;
    quantityText.innerHTML = `<span class="QuantityText">${saveInputValue}<button class="updateLink checkoutcardlinks" id='data-productUpdateId-${matchingProd}'>Update</button></span>`;

    updatetextoflink(matchingProd);
    console.log(quantityText);
   });
});
   
   
};

updatetextoflink(matchingProId);
