const applePrice = .49;

let pickedApples = 4;

// Went back and pixked more apples 
pickedApples += 10;

// Dropped some apps'
pickedApples -= 4;

const totalForApples = applePrice * pickedApples

console.log("Cost of Apples",  totalForApples);

console.log("Too many apples", pickedApples > 5);

//Eat a few and drop the rest, cause I aint eating 6 apps'  back to back
pickedApples -=6;

console.log("Too many apples", pickedApples > 5);

let rememeberRouteHome = false;

console.log("Good to go home", pickedApples > 5 && rememeberRouteHome);

let haveAMap = true;

console.log("Good to go home", rememeberRouteHome || haveAMap || Boolean(""));

console.log("Total for apples a number?", typeof totalFoApples);

console.log("String of 5:", typeof String(5), typeof 5);

let myAddress = "413";

//  myAddress = myAddress + "Peach"
myAddress += "Peach" + "St";

console.log("My Address:", myAddress);

console.log("Streetr name has st:", myAddress.toLowerCase().includes("st"));

console.log("My Address", myAddress.replace("St", "Street"));

console.log("Xay".length);

let myAge = "76";

myAge = Number(myAge);

myAge += .5;

console.log("My Age", myAge.toFixed(2));

console.log("Next Birthday:", Math.ceil(myAge));

console.log("My Favorite Number", Math.round(Math.random() * 100))

