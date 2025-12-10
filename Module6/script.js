

const shopName = "cap boutique";
const city = "Lyon";
let isOpen = true;
let productCount = 3;
let slogan = "Des goodies pour développeurs passionnés !";
const taglineElement = document.querySelector(".site-tagline");
if (taglineElement) {
  taglineElement.textContent =
    "Bienvenue dans " + shopName + " à " + city + " 👋";
}

const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

let welcomeMessage =
  "Bienvenue dans " + shopName + " située à " + city + " !";
let welcomeMessage2 = `Bienvenue dans ${shopName} à ${city} !`;
let sloganLength = slogan.length;
let sloganUppercase = slogan.toUpperCase();
let sloganModified = slogan.replace("goodies", "trésors");

const TVA = 0.2;
let examplePriceHT = 20;
let examplePriceTTC = examplePriceHT + examplePriceHT * TVA;
let salesCount = 2;



// Fonction qui calcule un prix TTC à partir d'un prix HT
function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;
}

// Fonction qui formate un prix en "xx,xx €"
function formatPrice(price) {
  return price.toFixed(2).replace("20", 0, 2 "0,2") + " €";
}

// Tests dans la console
console.log("Prix TTC pour 10€ HT :", formatPrice(calculatePriceTTC(10)));
console.log(
  "Prix TTC pour 19,99€ HT :",
  formatPrice(calculatePriceTTC(19.99))
);



const cartMessageElement = document.getElementById("cart-message");
if (cartMessageElement) {
  cartMessageElement.textContent =

    "";
}
console.log("carteMessageElement");


let productNames = ["pull"; "t shirt"; "jeans"];


let productPriceHT = [50,60,80];
function afficherproduitconsole() {
  productNames.forEach{(element,index) =>
    const priceHT = productPriceHt{index};
    const pricettc = calculatePriceTTC(priceHT);
    const formattedPrice = formatPrice(pricettc);
    console.log('produit:${index+1}-nom:${element}- prix:${formattedPrice} TTC');

  }};
afficherproduitconsole();

console.log("Voici la taille des produits : ", productNames.length);


let console.log(Function displayProductsInConsole);
console.log(productNames.length);
for (let index = 0; index < array.length; index++) {
  const element = array[index];
  productNames[0] = zoo
  function 

}















