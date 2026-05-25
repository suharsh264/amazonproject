//imported the objects and variable data require for storage

import {amazondataobj, Ullistname} from '../data/amazondata.js';
import {cart, addToCart, increaseCartQuantity} from '../data/cart.js';


// Element for creating the language dropdown
let UldropdownEL = document.querySelector('#languagedropDown');


Ullistname.unshift('lang');


Ullistname.forEach((lang)=>{

    let UlListEL = document.createElement('li');
    
    UlListEL.classList.add("ullistclass");

    UlListEL.innerHTML = `${lang}
    `;

    UldropdownEL.appendChild(UlListEL);
});
 
//added eventListener on dropdown image
let dropdowniconaction = document.querySelector('#dropdownimg');

dropdowniconaction.addEventListener('click', function(e){
    // console.log('clicked');
    UldropdownEL.classList.toggle('seclangdropdownclass');
});

let mainElement = document.querySelector('main');
console.log(mainElement);

//ul dropdown id selected here....



UldropdownEL.addEventListener('click', function(e){
    let dropdownUl = document.querySelector('.dropdowntext');
    console.log(e);
     let selectElementText = e.target.textContent;
     dropdownUl.textContent = `${selectElementText}`;
     UldropdownEL.classList.toggle('seclangdropdownclass');
});

//main card items 

let cartproductsitems = '';

amazondataobj.forEach((cartitems)=>{
   cartproductsitems += `
        <div id="CartBox">
            <div id="cartimagdiv">
             <img src="${cartitems.img}">
            </div>
            <div id="cartDiscription">          
            <span id="imgName"><h3>${cartitems.name}</h3></span>
            <span id="productprice"><h4>₹${cartitems.price}</h4></span>
            <div id="productrating">⭐⭐⭐⭐ <span id="productratingcount">${cartitems.rating.count}</span></div>
            <button id="addtocartbtn" data-product-id="${cartitems.id}">Add to Cart</button>
            </div>
        </div>`;
}); 

let maindisplayitems = document.querySelector('main');


maindisplayitems.innerHTML = cartproductsitems;


document.querySelectorAll('#addtocartbtn').forEach((button)=>{
    button.addEventListener('click',function(){
        let productid = button.dataset.productId;
        addToCart(productid);
        increaseCartQuantity();
        
});
});
