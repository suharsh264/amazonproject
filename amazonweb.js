//imported the objects and variable data require for storage

import {amazondataobj, Ullistname} from '../amazondata.js';


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

