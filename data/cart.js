import {id, img, name, price} from '../data/amazondata.js';

let productid = id;
let productname = name;
let productimglink = img;
let productprice = price;

export let cart = [];

let cartdivInnerHTML = document.querySelector('#cartitemsdiv');

cartdivInnerHTML.innerHTML += `<div class="innerdivcartitem">
                                                <div class="innerimgcart">
                                                    <img src="${productimglink}">
                                                    <div class ="cartdescription">
                                                        <h3>${productname}</h3>
                                                        <span>${productprice}</span>
                                                        <div id="quantitydiv" class="quantitytext"><span>Qunantity:2</span><a href="#">Update</a><a href="#">Delete</a></div>
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
                                            </div>`;



