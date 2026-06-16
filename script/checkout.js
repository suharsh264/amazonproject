import {cart, increaseCartQuantity, removeFromCart} from '../data/cart.js';
import {amazondataobj} from '../data/amazondata.js';

let cartitemssummary = '';

//Searching throught cart array
cart.forEach((cartitems)=>{
   
   
    let productId = cartitems.id;

    // console.log("Cart Item:", cartitems);
    // console.log("Product ID from cart:", productId);
    console.log(cartitems);
    let matchingProduct;

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
                                            <div id="quantitydiv" class="quantitytext"><span>Qunantity:${cartitems.quantity}</span><a href="#" class="updateLink checkoutcardlinks">Update</a><a href="#" class="deleteLink checkoutcardlinks" data-cartdiv-id="${matchingProduct.id}">Delete</a></div>
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

let checkoutquantitydisplay = document.querySelector('.checkoutspan');

checkoutquantitydisplay.textContent = `${increaseCartQuantity()} Items`;




document.querySelectorAll('.checkoutcardlinks').forEach((links)=>{
   links.addEventListener('click',function(){
        let productsid = parseInt(links.dataset.cartdivId, 10);
        removeFromCart(productsid);
    
        const deleteddiv = document.querySelector(`.js-div-cart-${productsid}`);
        
        deleteddiv.remove();
    })
});





