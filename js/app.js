'use strict';

// This is where Lab-02 begins

var name = prompt('Please tell me your name');
alert('Welcome to my bio ' + name + '!');

var score = 0;

var pet = prompt('Am i a cat person?!');
var lPet = pet.toLowerCase();
if (lPet === 'yes' || lPet === 'y') {
  score = score + 1;
  alert('Hoorraay that\'s 1 correct answer');
  // console.log("Hoorraay that's 1 correct answer");
} else if (lPet === 'no' || lPet === 'n') {
  alert('Nope, no dogs are allowed near me!!');
  // console.log("Nope no dogs are allowed near me!!");
} else {
  alert('Well, not the answer expected, but i adore cats :D');
  // console.log("Well not the answer expected, but i adore cats :D");
}

var drink = prompt('Do i enjoy coffe?!');
var lDrink = drink.toLowerCase();
if (lDrink === 'yes' || lDrink === 'y') {
  alert('Team tea for the win!');
  // console.log("Team tea for the win!");
} else if (lDrink === 'no' || lDrink === 'n') {
  score = score + 1;
  alert('I drink it when i have to, but i don\'t enjoy it :(');
  // console.log("I drink it when i have to, but i don't enjoy it :(");
} else {
  alert('Well not the answer expected, but all colors of tea :D');
  // console.log("Well not the answer expected, but all colors of tead :D");
}

var ear = prompt('Am i able to move my ears?!');
var lEar = ear.toLowerCase();
if (lEar === 'yes' || lEar === 'y') {
  score = score + 1;
  alert('Yep, but i\'m not a weirdo i swear!!');
  // console.log("Yep, but i'm not a weirdo i swear!!");
} else if (lEar === 'no' || lEar === 'n') {
  alert('Wrronggg, I\'m full of talents ;)');
  // console.log("Wrronggg, I'm full of talents ;)");
} else {
  alert('Well not the answer expected, but yeah I can no biggy');
  // console.log("Well not the answer expected, but yeah no biggy");
}

var food = prompt('Do i love to eat?');
var lFood = food.toLowerCase();
if (lFood === 'yes' || lFood === 'y') {
  score = score + 1;
  alert('Yep. Eat, sleep, repeat!');
  // console.log("Yep. Eat, Sleep, Repeat");
} else if (lFood === 'no' || lFood === 'n') {
  alert('Nope i do, and if you don\'t then we can\'t be friends :(');
  // console.log("Nope i do, and if you don't then i don't think we can be friends");
} else {
  alert('Well not the answer expected, but SHAWERMAA!!');
  // console.log("Well not the answer expected, but shawerma!!");
}

var dance = prompt('Can i dance my belly?!');
var lDance = dance.toLowerCase();
if (lDance === 'yes' || lDance === 'y') {
  score = score + 1;
  alert('Hehehe correct!!');
  // console.log("Hehehe correct!!");
} else if (lDance === 'no' || lDance === 'n') {
  alert('Nope i can, but i won\'t show you or maybe i will IDK');
  // console.log("Nope i can, but i won't show you or maybe i will IDK");
} else {
  alert('Well not the answer expected, but i use it\'s how i survive a boring day');
  // console.log("Well not the answer expected, but i use it to kill boredom");
}


// This is where Lab-02 ends

// This is where Lab-03 begins

var ranNumber = Math.round(Math.random() * 10);
alert('let\s play a little guessing game, shall we?!');
alert('Right now i\'m thinking of a number between 0 and 10, can you guess what number i\'m thinking of?');
var attempt = 1;
for (attempt = 1; attempt <= 4; attempt++) {

  var userNumber = Number(prompt('Enter the number i\'m thinking of here'));
  // console.log(userNumber);
  var lowHigh = Math.abs(userNumber - ranNumber);
  // console.log(lowHigh);
  if (lowHigh >= 1 && lowHigh <= 3) {
    alert('You\'re getting really close but try again');
  }

  else if (lowHigh > 3 && lowHigh <= 9) {
    alert('You\'re way far try choosing another number');
  }

  else if (lowHigh == 0) {
    alert('Horraaay you got it right, i think we might be twins!!');
    score = score + 1;
    // console.log(score);
    break;
  }
  else {
    var type = typeof lowHigh;
    // console.log(type);
    var nType = Number(type);
    // console.log(nType);
    var valid = isNaN(nType);
    // console.log(valid);
    while (valid === NaN) {
      var userNumber = Number(prompt('Enter the number i\'m thinking of here'));
      // console.log(userNumber);
      var lowHigh = Math.abs(userNumber - ranNumber);
      // console.log(lowHigh);
    }
  }

} if (attempt > 4) {
  alert('Oops you ran out of attempts, though i was thinking of the number ' + ranNumber);
}
// console.log(attempt);



var colors = ['magenta', 'indian red', 'black'];                                                        // my array of my favourite colors
var elseCount = 0;                                                                                      // counter for every time -else- is executed inside the first if, will be used later in the code
alert('So how about you try to guess one of my 3 top favourite colors?!');                              // useless, just for convenience
var colorGuess = prompt('So tell me what\'s your guess?!');                                             // First time the user enters their guess
// console.log(colorGuess);                                                                             // So i can see if it's taken correctly by my code
for (var i = 0; i < 6; i++) {                                                                           // First loop to execute the code 6 times which is the number of attempts required
  // console.log(colorGuess);                                                                           // To log each new value of the guess when it's wrong and make sure the code is working till this point
  for (var j = 0; j <= colors.length - 1; j++) {                                                        // to go each element of the array
    if (colorGuess === colors[j]) {                                                                     // to go over the array and check if the guess is equal to a value inside the array
      alert('Bravoo that\'s correct, are you somekind of an alien or something :P');                    // if true execute -alert- and make -i- and -j- equal 10 which will end the loop
      score = score + 1;
      // j = 10;
      // i = 10;
      // console.log(score);
      // console.log(colors[j]);
      // console.log(colors[i]);
      // console.log(j);
      // console.log(i);
      break;
    }
    else {                                                                                              // if false add 1 to the elseCount variable and i want to use it when it's goes through the whole array and no match is found 
      //it will equal to 3 which will activaite the next -if- asking for a new value for the new attempt
      elseCount = elseCount + 1;
      // console.log(elseCount);

    }
  }

  if (elseCount === 3) {                                                                                // will only be executed if he enterd his guess wrong for 3 times which is the amount of elements inside the array
    colorGuess = prompt('Naaah that\'s not one of my favourite colors, try a differnt guess');
    // console.log(colorGuess);
    elseCount = 0;
    // console.log(elseCount);                                                                          // resetting the counter for the new attempt
  }
  else {                                                                                                // this one is not needed but to make sure no other values affect the code i put it in
    break;
  }                                                                                                     // now the big loop the attempt one will go through the second time and repeat till it's 6 times and the code will be over
}

if (i >= 6) {
  alert('Oops you ran out of attempts, you can check my website to know my top 3 colors ;)');
}

if (score >= 3) {
  alert('Congrats you\'ve answere ' + score + ' out of 7 questions correctly, i think we would be good friends ' + name + '!');
}
else if (score > 0 && score < 3) {
  alert('That\'s not bad you\'ve answered ' + score + ' out 7 questions correctly, i hope we\'ll get to know each other more ' + name + '!');
}
else {
  alert('You didn\'t answer a single question correctly, after viewing the website am sure you will ;)');
}

// This is where Lab-03 ends
