////////// EXERCISE 1: GENERATION CLASSIFICATION //////////
// create variable called yearBorn set to the year you were born!
const yearBorn = 1996;
// create an if statement that determines the generation of yearBorn based on
// the following classificiations:
// Baby Boomer - 1946-1964
// Gen X ------- 1965-1979
// Millenial --- 1980-1995
// Gen Z ------- 1996-2012
// Gen Alpha --- 2013-2025
// Once the generation is determined, log the following message to the console:
// "You're a [generation name]!"
if (yearBorn >= 1946 && yearBorn <= 1964) {
  console.log("You're a Baby Boomer!  ");
} else if (yearBorn >= 1965 && yearBorn <= 1979) {
  console.log("You're a Gen X!  ");
} else if (yearBorn >= 1980 && yearBorn <= 1995) {
  console.log("You're a Millenial!  ");
} else if (yearBorn >= 1996 && yearBorn <= 2012) {
  console.log("You're a Gen Z!  ");
} else {
  console.log("You're a Gen Alpha!  ");
}
////////// EXERCISE 2: CALCULATE DISCOUNT //////////
// create variable called isOnSale set to a boolean value
let isOnSale = true;
// create variable called initialPrice set to a number
let initialPrice = 21;
// create variable called percentDiscount set to 20%
// NOTE: remember that we cannot use the percent symbol to represent percentages!
let percentDiscount = 0.2;
// create variable called discountPrice that is the arithmetic result of
// applying the discount to the initialPrice
let discountPrice = initialPrice - initialPrice * percentDiscount;
// create variable called finalPrice that is set to discountPrice if isOnSale is true
// and set to initialPrice if isOnSale is false.
// NOTE: use the ternary operator to set this value!
let finalPrice = isOnSale ? discountPrice : initialPrice;
// Using a template string, log the following message to the console:
// "The final price for this item is $[finalPrice]"
console.log(`The final price for this item is ${finalPrice}`);
