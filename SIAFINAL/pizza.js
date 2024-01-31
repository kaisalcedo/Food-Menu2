
let price = 0;
let discount =50;

let cheese =250;
let chicken =350;
let hawaiian =300;
let margherita =280;
let mushroom =260;
let pepperoni =275;
let seafood =350;
let sweet =230;
let vegertarian =260;

let cheeseEl = document.getElementById("cheese");
let chickenEl = document.getElementById("chicken");
let hawaiianEl = document.getElementById("hawaiian");
let margheritaEl = document.getElementById("margherita");
let mushroomEl = document.getElementById("mushroom");
let pepperoniEl = document.getElementById("pepperoni");
let seafoodEl = document.getElementById("seafood");
let sweetEl = document.getElementById("sweet");
let vegertarianEl = document.getElementById("vegetarian");

let totalEl = document.getElementById("total-el");

let qtyEl = document.elementByID("qty");
// let qtyel = document.getElementById("qty").value;
let cashTendered = document .getElementById("cashT");

// DISCOUNT CATEGORIES
let noneEl = document.getElementById("none");
let pwedEl = document.getElementById("pwd");
let srEl = document.getElementById("sr");


let displayDscnt = document.getElementById("discount-el");

let dtotal = document.getElementById("DTotal-el");
let chNGEel = document.getElementById("change-el");

function compute(){

    if(cheeseEl.checked === true){
    price += cheese;
}

if(chickenEl.checked === true){
price += chicken;
}

if(hawaiianEl.checked === true){
    price += hawaiian;
}

if(margheritaEl === true){
    price += margherita;
}

if(mushroomEl === true){
    price += mushroom;
}

if(pepperoniEl === true){
    price += pepperoni;
}

if(seafoodEl === true){
    price += seafood;
}

if(sweetEl === true){
    price += sweet;
}

if(vegertarianEl === true){
    price += vegertarian;
}

let qtyformula = price * qtyEl.value;



totalEl.textContent = qtyformula;
console.log(qtyEl)


if(noneEl.checked === true){
    discount = 0;
    displayDscnt.textContent = "NoDiscount";
}

if(pwedEl.checked === true){
    discount = discount + qtyEl.value;
    price = price - discount;
    displayDscnt.textContent = "20%";
}

if(srEl.checked === true){
    discount = discount * qtyEl.value;
    price = price - discount;

    displayDscnt.textContent = "NoDiscount";
}



let qd = qtyformula - discoun;
dtotal.textContent ="P " + qd;

let sukliCompute = qtyformula - discount;
let sukliCompute2 = cashTendered.value - sukliCompute
changeEl.textContent = "p "+sukliCompute2 ;

}