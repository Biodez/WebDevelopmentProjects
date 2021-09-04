function sandwichFactory(bread, protein, cheese, toppings) {
  var sandwich = {};
  sandwich.bread = bread;
  sandwich.protein = protein;
  sandwich.cheese = cheese;
  sandwich.toppings = toppings;
  return sandwich;
}

// var s1 = sandwichFactory("wheat", "turkey", "provolone", ["mustard", "fried onions", "arugula"]);
// console.log(s1);

const pizzaOver = (crustType, sauceType, cheeses, toppings) => {
  let Pizza = {};
  Pizza.crustType = crustType;
  Pizza.sauceType = sauceType;
  Pizza.cheeses = cheeses;
  Pizza.toppings = toppings;

  return Pizza;
};

let value = pizzaOver(
  "deep dish",
  "traditional",
  ["mozzarella"],
  ["pepperoni", "sausage"]
);
let value2 = pizzaOver(
  "hand tossed",
  "marinara",
  ["mozzarella", "feta"],
  ["mushrooms", "olives", "onions"]
);
let value3 = pizzaOver("wheat", "turkey", "provolone", [
  "mustard",
  "fried onions",
  "arugula",
]);
console.log(value, value2, value3);
