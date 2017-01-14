function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// tags are : "meat", "fish", "gluten", "eggs", "dairy", "acidic", "fatty"
var breakfastOptions = [
  {name: "Oatmeal",
  tags: []},
  {name: "Omelet",
  tags: ["eggs", "fatty"]},
  {name: "Cereal",
  tags: []},
  {name: "Bacon and Eggs",
  tags: ["meat", "eggs", "fatty"]},
  {name: "Yogurt",
  tags: ["dairy"]},
  {name: "Toast",
  tags: ["gluten"]}
];
var lunchOptions = [
  {name: "Cold cut sandwich",
  tags: ["meat", "gluten"]},
  {name: "Chicken salad",
  tags: ["meat"]},
  {name: "Kraft Dinner",
  tags: ["dairy", "fatty"]},
  {name: "Hamburger",
  tags: ["meat", "gluten", "fatty"]},
  {name: "Egg salad sandwich",
  tags: ["eggs", "gluten"]},
  {name: "Tuna sandwich",
  tags: ["fish", "gluten"]},
  {name: "Garden burger",
  tags: ["gluten"]},
  {name: "Potato salad",
  tags: []},
  {name: "Ramen",
  tags: ["gluten", "fatty"]},
  {name: "Zaru soba",
  tags: []},
  // {name: "",
  // tags: [""]},
];
var snackOptions = [
  {name: "Nuts",
  tags: []},
  {name: "Cheese and crackers",
  tags: ["dairy"]},
  {name: "Beef jerky",
  tags: ["meat"]},
  {name: "Chips",
  tags: []},
  {name: "Fresh fruit",
  tags: []},
  {name: "Edamame",
  tags: []},
  {name: "Granola bar",
  tags: []},
  {name: "Popcorn",
  tags: []},
  // {name: "",
  // tags: [""]},
];
var dinnerOptions = [
  {name: "Teriyaki chicken and rice",
  tags: ["meat"]},
  {name: "Salad",
  tags: []},
  {name: "Meat and potatoes",
  tags: ["meat"]},
  {name: "Spaghetti bolognaise",
  tags: ["meat", "gluten", "acidic"]},
  {name: "Perogies",
  tags: ["dairy", "gluten"]},
  {name: "Fish and rice",
  tags: ["meat"]},
  {name: "Caprese salad",
  tags: ["dairy", "acidic"]},
  {name: "Okonomiyaki",
  tags: ["fish"]},
  {name: "Beans and rice",
  tags: []},
  {name: "Zaru soba",
  tags: []},
  {name: "Deep fried tofu",
  tags: []},
  {name: "Tempura",
  tags: ["gluten"]},
  {name: "Penne al arrabiata",
  tags: ["gluten"]},
  // {name: "",
  // tags: [""]},
];
var dessertOptions = [
  {name: "Mochi manju",
  tags: []},
  {name: "Chocolate",
  tags: ["dairy"]},
  {name: "Ice cream",
  tags: ["dairy", "fatty"]},
  {name: "Sorbet",
  tags: []},
  {name: "Pudding",
  tags: ["dairy"]},
  {name: "Red velvet cupcakes",
  tags: ["dairy", "gluten"]},
  {name: "Carrot cake cupcakes",
  tags: ["dairy", "gluten"]},
  {name: "Coconut balls",
  tags: ["dairy"]},
  {name: "Apple fritters",
  tags: ["gluten"]},
  {name: "Sugar cookies",
  tags: ["gluten"]},
  // {name: "",
  // tags: [""]},
];

// var meals = {
//   breakfast :[
//     {name: "Oatmeal",
//     tags: []},
//     {name: "Omelet",
//     tags: ["eggs"]},
//     {name: "Cereal",
//     tags: []},
//     {name: "Bacon",
//     tags: ["meat"]},
//     {name: "Yogurt",
//     tags: ["dairy"]},
//     {name: "Toast",
//     tags: ["gluten"]}
//   ],
//   lunch :[
//     {name: "Sandwich",
//     tags: []},
//     {name: "Salad",
//     tags: []},
//   ]
// };


var generateRecipes = function() {
  console.log("generateRecipes() called.")
  var noMeat = document.getElementById("noMeat").checked;
  var noFish = document.getElementById("noFish").checked;
  var noGluten = document.getElementById("noGluten").checked;
  var noEggs = document.getElementById("noEggs").checked;
  var noDairy = document.getElementById("noDairy").checked;
  var notFatty = document.getElementById("notFatty").checked;
  var notAcidic = document.getElementById("notAcidic").checked;

  var filters = [];
  if (noDairy) {
    filters.push("dairy");
  }
  if (noMeat) {
    filters.push("meat");
  }
  if (noGluten) {
    filters.push("gluten");
  }
  if (noEggs) {
    filters.push("eggs");
  }
  if (notFatty) {
    filters.push("fatty");
  }
  if (notAcidic) {
    filters.push("acidic");
  }

  console.log("filters = " + filters);

  var breakfasts = document.getElementsByClassName("breakfast");
  var lunches = document.getElementsByClassName("lunch");
  var snacks = document.getElementsByClassName("snack");
  var dinners = document.getElementsByClassName("dinner");
  var desserts = document.getElementsByClassName("dessert");

  function populateRow(obj, mealList) {
    for (i = 0; i < obj.length; i++) {

      console.log("generating row.")
      while (true) {
        var failedMatch = false;
        var mealChoice = mealList[getRandomInt(0, mealList.length-1)];

        if (mealChoice.tags !== [] && filters !== []) {
         for (j = 0; j < filters.length; j++) {
           if (mealChoice.tags.indexOf(filters[j]) !== -1) {
             failedMatch = true;
           }
         }
        }

        if (!failedMatch) {
         obj[i].firstChild.nodeValue = mealChoice.name;
         break;
        }
      }
    }
  }

  populateRow(breakfasts, breakfastOptions);
  populateRow(lunches, lunchOptions);
  populateRow(snacks, snackOptions);
  populateRow(dinners, dinnerOptions);
  populateRow(desserts, dessertOptions);

  console.log("row generated.")
};


window.onload = function() {
  var generateButton = document.getElementById('generateButton');
  console.log(generateButton);
  generateButton.addEventListener("click", generateRecipes, false);
};
