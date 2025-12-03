const { createElement } = require("react");

function calculatePriceTTC(priceHT) {
  return priceHT + priceHT * TVA;

  function formatPrice(price) {
  return price.toFixed(2).replace("20"0,2"0,2") + "12,99€"

    console.log("Prix TTC pour 12,99 HT :", formatPrice(calculatePriceTTC(10)));
    console.log(**/
      "Prix TTC pour 19,99€ HT :",
      formatPrice(calculatePriceTTC(19.99))
    );


    createElement 

