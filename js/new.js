
var colors = ['magenta', 'indian red', 'black'];// my array of my favourite colors
var elseCount = 0;// counter for every time -else- is executed inside the first if, will be used later in the code
alert('So how about you try to guess one of my 3 top favourite colors?!'); // useless, just for convenience
var colorGuess = prompt('So tell me what\'s your guess?!');// First time the user enters their guess
console.log(colorGuess);// So i can see if it's taken correctly by my code
for (var i = 0; i < 6; i++) {  // First loop to execute the code 6 times which is the number of attempts required
    console.log(colorGuess); // To log each new value of the guess when it's wrong and make sure the code is working till this point
    for (var j = 0; j <= colors.length - 1; j++) { // to go each element of the array
        if (colorGuess === colors[j]) { // to go over the array and check if the guess is equal to a value inside the array
            alert('Bravoo that\'s correct, are you somekind of an alien or something :P'); // if true execute -alert- and make -i- and -j- equal 10 which will end the loop
            j = 10;
            i = 10;
            break;
        }
        else { // if false add 1 to the elseCount variable and i want to use it when it's goes through the whole array and no match is found 
                //it will equal to 3 which will activaite the next -if- asking for a new value for the new attempt
            elseCount = elseCount + 1;

        }
    }
    
    if (elseCount === 3) {// will only be executed if he enterd his guess wrong for 3 times which is the amount of elements inside the array
        colorGuess = prompt('Naaah that\'s not one of my favourite colors, try a differnt guess');
        elseCount = 0; // resetting the counter for the new attempt
    }
    else {// this one is not needed but to make sure no other values affect the code i put it in
        break;
    }// now the big loop the attempt one will go through the second time and repeat till it's 6 times and the code will be over
}
