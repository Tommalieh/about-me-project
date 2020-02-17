'use strict'

var name = prompt("Please tell me your name");
alert("Welcome to my bio " + name + "!");

var score = 0;

var pet = prompt("Am i a cat person?!");
var lPet = pet.toLowerCase();
if (lPet === "yes" || lPet === "y"){
    score= score + 1;
    alert("Hoorraay that's 1 correct answer");
    // console.log("Hoorraay that's 1 correct answer");
} else if (lPet === "no" || lPet === "n"){
    alert("Nope no dogs are allowed near me!!");
    // console.log("Nope no dogs are allowed near me!!");
} else {
    alert("Well not the answer expected, but i adore cats :D");
    // console.log("Well not the answer expected, but i adore cats :D");
}

var drink = prompt("Do i enjoy coffe?!");
var lDrink = drink.toLowerCase();
if (lDrink === "yes" || lDrink === "y"){
    alert("Team tea for the win!");
    // console.log("Team tea for the win!");
} else if (lDrink === "no" || lDrink === "n"){
    score= score + 1;
    alert("I drink it when i have to, but i don't enjoy it :(");
    // console.log("I drink it when i have to, but i don't enjoy it :(");
} else {
    alert("Well not the answer expected, but all colors of tead :D");
    // console.log("Well not the answer expected, but all colors of tead :D");
}

var ear = prompt("Am i able to move my ears?!");
var lEar = ear.toLowerCase();
if (lEar === "yes" || lEar === "y"){
    score= score + 1;
    alert("Yep, but i'm not a weirdo i swear!!");
    // console.log("Yep, but i'm not a weirdo i swear!!");
} else if (lEar === "no" || lEar === "n"){
    alert("Wrronggg, I'm full of talents ;)");
    // console.log("Wrronggg, I'm full of talents ;)");
} else {
    alert("Well not the answer expected, but yeah no biggy");
    // console.log("Well not the answer expected, but yeah no biggy");
}

var food = prompt("Do i love to eat?");
var lFood = food.toLowerCase();
if (lFood === "yes" || lFood === "y"){
    score= score + 1;
    alert("Yep. Eat, Sleep, Repeat");
    // console.log("Yep. Eat, Sleep, Repeat");
} else if (lFood === "no" || lFood === "n"){
    alert("Nope i do, and if you don't then i don't think we can be friends");
    // console.log("Nope i do, and if you don't then i don't think we can be friends");
} else {
    alert("Well not the answer expected, but shawerma!!");
    // console.log("Well not the answer expected, but shawerma!!");
}

var dance = prompt("Can i dance my belly?!");
var lDance = dance.toLowerCase();
if (lDance === "yes" || lDance === "y"){
    score= score + 1;
    alert("Hehehe correct!!");
    // console.log("Hehehe correct!!");
} else if (lDance === "no" || lDance === "n"){
    alert("Nope i can, but i won't show you or maybe i will IDK");
    // console.log("Nope i can, but i won't show you or maybe i will IDK");
} else {
    alert("Well not the answer expected, but i use it to kill boredom");
    // console.log("Well not the answer expected, but i use it to kill boredom");
}

if (score >= 3){
    alert("Congrats you've answere " + score + " out of 5 questions correctly, i think we would be good friends " + name + "!");
}
else {
    alert("That's not bad you've answered " + score + " out 5 questions correctly, i hope we'll get to know each other more " + name + "!");
}
