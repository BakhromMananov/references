// 5 forms of data types
// data type  explanation                      example
// number     varibale with number value       0.75 
// string     variable with string value       greeting = "hi, how are you?"
// boolean    varibale with true/false value   atWork = true
// undefined  variable with no assigned value  undefined
// null       variable with empty value        null


// statement - sentence

// how to link Javascript file to html doc: 
// <sript src="example.js"> </script>

// how to insert javascript into html doc:
{/* <html>
    <script>
        alert ('hello');
    </script>
</html> */}

// alert ('hello'); - dialogue box will appear
// to fix bugs, use browser console to find on which line of js file you have a bug

// variable - box that stores info, you assign value to variable  ex: var day = "Monday"

// JS has a list of reserved keywords for syntax, if you use these words to name variables, you will have error in your code


// 6 rules for naming variables
// 1) use clear & descriptive words to name variables. start with a letter, $ or _; do not start with number ex: price$ and home_alone - works, 9lives @home - does not work
// 2) do not use - or . in names
// 3) do not use keywords or reserved words ex: var, document, alert etc.
// 4) variables are case sensitive, case and Case are 2 different variables
// 5) use descriptive names for variables, ex: firstName - 1st name of a person
// 6) use camelCase rule, 1st word with small letter, next word with capital letter

// prompt ('example question'); - command to collect user input 
// concatanation ex: 'welcome' + "to" + "treehouse"
// += adding content or combining 2 or more values
// objects - are elements of documents,, browser's console
// objects have properties, ex: length of string
// objects have methods, that they can perform, ex: capitalize all letters of string
 

// ARRAY  - box that stores list of values related to each other
// var colors;
// color =['white',
//  'black', 
//  'blue']; //array literal

// var colors = new Array('white', 
// 'black', 
// 'blue'); //array constructor, array literal is preferred one

// adding new values to array:
// array.concat ["value1", "value2"];
//VALUES IN ARRAYS

//index value
    // 0   'white'
    // 1   'black'
    // 2   'blue'

//ACCESING ITEMS IN ARRAY
// var itemThree;
// itemThree = colors [2];

// var numColors;
// numColors = colors.length;

// Objects, they have parameters 
// user {
//     name:"John",
//     age: 34,
//     hobby: "Soccer",
//     isMarried: false,
//     favoriteFood:"Spinach"
// };

// difference between arrays and objects, objects use parameters, arrays use indexes
// user {
//     0:"John",
//     1: 34,
//     2: "Soccer",
//     3: false,
//     4:"Spinach"
// };

// Javasript has loops 
// for
// while
// do
// forEach (new in ECMASript 5)

// objects are good for user profiles, video game characters, etc.; arrays are good for to-do lists, shopping lists
// function inside of object is method



//EXPRESSION EVALUATES INTO (RESULTS IN) A SINGLE VALUE
// EXPRESSIONS ASSIGN VALUE TO VARIABLES
var color = 'beige'
// EXPRESSIONS USE 2 OR MORE VALUES TO RETURN SINGLE VALUE
var area = 3*2;

//OPERATORS 
//ASSIGNMENT OPERATORS
// color = 'beige'

//COMPARISON OPERATORS
buy = 3>5;

//ARITHMETIC OPERATORS
// area = 3*2;
// + addition
// - subtraction 
// / division
// * multiplication
// ++ increment, adds 1 to current number
// -- decreement, subtracts 1 from current number
// % modulo, devides two values & returns remainder
 
//LOGICAL OPERATORS
// buy = (5>3) && (2 <4);

//STRING OPERATORS
// greeting = 'Hi' + 'Molly'; 

// COMPARISON OPERATORS
// operator   name                      example  result 
// >          greater than               x> 10    false
// >=         greater than or equal to   x>=5     true
// <          less than                  x < -50  false
// <=         less than or equal to      x <=100  true
// ==         equal to                   x=="5"   true
// !=         not equal to               x!="b"   true
// ===        equal value & type         x==="5"  false 
// !==        not equal value or type    x!=="5"  true 

// LOGICAL OPERATORS
// operator name   example         result 
// &&       and    x<10 && x!==5   false
// ||       or     y>9 || x===5    true
// !        not    !(x===y)        true 
 
// FUNCTION - GROUP OF STATEMENTS TOGETHER PERFORMING SPECIFIC TASK

// SCOPE OF VARIABLES, LOCAL SCOPE - VARIABLE IS DECLARED WITHIN FUNCTION; GLOBAL SCOPE - VARIABLE CREATED OUTSIDE OF FUNCTION & CAN BE USED ANYWHERE

// OBJECT - SET OF VARIABLES AND FUNCTION THAT CAN BE RECOGNIZED 
// var hotel = {
//     name: 'Quay',
//     rooms: 40,
//     booked: 25,
//     gym: true,
//     roomTypes: ['twin', 'double', suite],
//     checkAvailability: function () {
//         return this.room - this.booked; 
//     }
// }; 

// PROPERTIES
// length
// toUpperCase ()
// toLowerCase ()
// charAt ()
// indexOf ()
// lastIndexOf ()
// substring ()
// NaN ()
// isNaN ()
// toFixed ()
// toPrecision ()
// toExponential ()

// variables
// var 
// let (new in ECMAScript 6)
// const (new in ECMAScript 6)


// conditionals
// if
// else
// else if
// ternary operator
// switch



// methods & functions
// clear ()
// alert ()
// prompt ()
// function name () {}
//  var a = function name () {}
// return

// data structures 
// array
// objects

// JS keywords
// break
// case
// catch
// class
// const
// continue
// debugger
// default
// delete
// do
// else
// export
// extends
// finally
// for
// function
// if
// import
// in
// instanceof
// new
// return
// super
// switch
// this
// throw
// try
// typeof
// var
// void
// while
// with
// yield

// DOM selectors
// getElementByTagName
// getElementByClassName
// getElementById
// querySelector
// querySelectorAll
// getAttribute
// setAttribute

// changing Styles
// style.{property} //ok
// className //best
// classList //best

// classList.add
// classList.remove
// classList.toggle

// Bonus
// innerHTML//Dangerous
// parentElement
// children

// It is important to CASHE selectors in variables






integer - whole number;
real number - may contain fractional parent;
floating point number - real number using decimals to represent fractional;
scientific notation - numbers that are too big or too small;

Math.round () - rounds number to nearest integer;
Math.sqrt () - square root of positive number;
Math.ceil () - rounds up to nearest integer
Math.floor () - rounds down to nearest integer
Math.random () - generates random number










// DIFFERENT EVENT TYPES
load
unload
error
resize
scroll

keydown
keyup
keypress
click
dbclick
mousedown
mouseup
mousemove
mouseover
mouseout
focus/focus in
blur/ focusout
input
change
submit
reset
cut
copy
paste
select

jquery effects
.show ()
.hide ()
.toggle ()
.fadeIn ()
.fadeOut ()
.fadeToggle ()

.slideUp ()
.slideDown ()
.slideToggle ()
.delay ()
.stop ()
.animate ()

traversing DOM
.find ()
.closest ()
.parent ()
.parents ()
.children ()
.siblings ()
.next ()
.nextAll ()
prev ()
prevAll ()

add & filter elements 
.add ()
.filter ()
.find ()
.not () / :not ()
.has () / :has ()
:contains ()

selecting form elements
:button
:checkbox
:checked
:disabled
:enabled
:focus
:file
:image
:input
:password
:radio
:reset
:selected
:submit
:text










































document.write ('write smth here ');
camelCaseValues - startNewWordWithCapLetters

function functionThatDoesSmth () {
    // all statements, instructions go here
} 

alert () - shows message in Browser
NaN - not a number

in operations multiplication and division operators take precedence over addition and subtraction operators, multiplying and dividing is done 1st then addition and subtraction 

var value= asignedValue; 
 if (condition) {
     instructions
 } else if (condition) {
     instructions
 }

var value= asignedValue; 
while (condition) {
    instructions
}

for (var value=asigningValue; condition; function) {
    instructions 
}

var (i, 00);
function var (i, k ) {
    if (k <= 350 && k>0) {
        instruction i + "string1");
    } else if (k <=0) {
        instruction (i + "string2");
    } else {
        instruction(i + "string3"); 
    }
}

var name = "henry" //global variable, affects all code
function printName() {
    var name2="sarah" //local variable, affects only code inside braces
}
printName(); //call functions
document.write(name);

var value=asignedValue //this is variable with single value
var value = ["value0", "value1", "value2"]; //this is array - variable that has more than 1 value, array orders always start from 0 index
value[1]= "newValue" //this is how you change value of array
value[1]; //this is how you access value inside array
var value = {color:"green", height: 5, weight: 180
yell:function() {
document.write("orcs are best!")}}; //this is object, it is similar to array but it has properties that describe it and functions (methods) executed by objects
1. Selecting elements we want to trget 
.getElementById () - select elements by their ids 
.getElementByTagName() - select elements by their tag name
.getElementByClassName () - select elements by class name 
2. Change elements we want to change in that elements
css style
change text 
change images 
3. Events
onclick 




innerHTML 







Number.toString();

Statement (); 
var i=1; ++=2; i++=2;
-x; y -x; unary and binary operators
()? true : false () ? true: () ? true: () ? true: false - ternary operators
NaN not a Number
isNaN (number)
infinity (bigger than any number)
|| either or 
&& and 
if (condition) {
    instructions 
}



















// alert ('hello'); 
// alert("thanks");
// document.write ('<h1> how are you?</h1>');

// running, executing program

// FIXING BUGS
// console.log ('start program'); 
// alert('hello');
// alert('how are you');
// document.write('no it works!');
// document.write("<h1>how are you?</h1>");
// console.log ('end program'); 

// var - VARIABLE - BOX CONTAINING INFO
// var message = "hello";
// alert (message);
// message = "Welcome"; 
// alert (message);

// values - numbers & strings stored as variables
// var message = 'Hello!';
// alert(message);
// message = "Goodbye";
// alert (message);
// message = "she's a great person!";
// // document.write ('message');
// var htmlSnippet = '<h1 class="special"> Important headline</h1>';
// document.write( var "htmlSnippet");
// message = 'She\'s a great person';

// getting user input
// concatenation - combining strings together 'Welcome' + "to" + "treehouse"
// var visitorName = prompt('whats your name?');
// alert(visitorName);
// document.write(visitorName); why error??
// console.log(visitorName);
// var visitor = prompt ('what is your name?');
// var message = "hello " + visitor;
// document.write(message);

// var passphrase = "open sesame";
// console.log(passphrase.length);
// console.log(passphrase.toLocaleLowerCase());

// var stringToShout = prompt("What should I shoult?");
// var shout = stringToShout.toUpperCase();
// shout +="!!!!";
// alert(shout);

// Chalenge 1

// var adjective= prompt ('write adjective');
// var noun=prompt('write noun');
// var verb=prompt('write verb');
// var sentence='There was a ' +[adjective] + [noun] + 'who wanted to ' + [verb] + ' the world ';
// alert ('are you ready?');
// document.write(sentence);










// "<h2>There once was a [adjective] programmer who wanted to use Javascript to [verb] the [noun]. </h2>"

// var adjective = prompt ('type adjective');
// var sentence = "<h2> There once was a " + adjective; 
// var verb = prompt("type verb");
// var noun = prompt("type noun");

// alert("ready?");
// sentence += + "programmer who wanted to use JS to " + noun + "the" + noun; 
// document.write(sentence);

// NUMBERS
// document.write ("<h1> Time calculator</h1>")
// var secondsPerMin = 60;
// var minsPerHour = 60;
// var hoursPerDay = 24;
// var daysPerWeek = 7;
// var weeksPerYear = 52;
// var daysPerYear = 365; 
// var secondsPerDay = secondsPerMin * minsPerHour * hoursPerDay;
// document.write('there are ' + secondsPerDay + ' seconds in a day');
// // var yearsAlive = secondsPerDay * daysPerWeek * weeksPerYear / 365; find a solution for this
// document.write("I am alive for " +yearsAlive + "days");

// random numbers
// JS is made of objects, numbers & strings are types of objects
// clear (); write this command into console on browser to clear everything
// Math.random ();
// var dieRoll = Math.floor(Math.random()*6)+1;
// alert('You rolled a' + dieRoll);

// var input1 = prompt ("type starting number");
// var bottomNumber = parseInt (input1);
// var input = prompt ("type a number");
// var topNumber = parseInt(input);
// var randomNumber = Math.floor(Math.random() * (topNumber - bottomNumber + 1)) + bottomNumber;
// var message = "<p>" + randomNumber + " is a number between 1 and " + topNumber + "</p>"
// document.write (message);

// Conditional statements
// var answer = prompt ("what prog lang is the name of gem?");
// if ( answer.toUpperCase () === "RUBY") {
//     document.write("<p> That's right! </p>"); 
// } else {
//     document.write ("<p> Sorry, thats wrong</p>")
// }

// random number guessing
// var randomNumber = Math.floor(Math.random() * 6) +1;
// var guess = prompt ("guess # btw 1 & 6");
// if (parseInt(guess) === randomNumber) {
//     document.write('<p> You guessed # </p>');
// } else {
//     document.write ('<p>Sorry, number was ' + randomNumber + '</p>'); 
// }

// Boolean value 
// var correctGuess = false; 
// var randomNumber = Math.floor(Math.random() * 6) + 1;
// var guess = prompt ('what number I am thinking about ');
// if (parseInt(guess) === randomNumber) {
//     correctGuess = true; 
// } else if (parseInt(guess) < randomNumber) {
//     var guessMore = prompt ('try again, I am thinking about' + randomNumber); 
//     if (parseInt(guessMore) === randomNumber) {
//         correctGuess === true; 
//     }
// } else if (parseInt(guess) > randomNumber) {
//     var guessLess = prompt ('try again, I am thinking about ' + randomNumber); 
//     if (parseInt (guessLess) === randomNumber) {
//         correctGuess = true; 
//     }
// }

// if (correctGuess) {
//     document.write (' <p>You guessed the number, it was ' + randomNumber + '</p>');
// } else {
//     document.write ('<p> Sorry wrong number' + randomNumber + '</p>'); 
// }

// // Multiple outcomes

// functions
// function alertRandom () {
//     var randomNumber = Math.floor (Math.random()*6) +1;
//     alert (randomNumber); 
// }
// alertRandom();
// var alertRandom = function () {
//     var randomNumber = Math.floor(Math.random() * 6) +1;
//     alert(randomNumber); 
// };
// alertRandom();

// get info from function
// function isEmailEmpty () {
//     var field = document.getElementById('email');
//     if (field.value === '') {
//         return value; 
//     } else {
//         return false; 
//     }
// }

// var fieldTest = isEmailEmpty ();
// if (fieldTest === true) {
//     alert ('provide email');
// }

// giving info to functions 
// function getRandomNumber ( upper ) {
//     var randomNumber = Math.floor (Math.random () * upper ) + 1;
//     return randomNumber; 
// }
// /* console.log ( getRandomNumber (6) );
// console.log ( getRandomNumber(100) );
// console.log ( getRandomNumber (10000) );
// console.log ( getRandomNumber(2) ); */
// function getArea (width, length, unit) {
//     var area = width * length; 
//     return area + " "  + unit; 
// }

// console.log (getArea (10, 20, ' sq ft') );

// variable scope
// always use var keyword when creating functions

// chalenge
// function getRandomNumber ( lower, upper ) {
//     if (isNaN (lower) || isNaN (upper) ) {
//         throw new Error ('Both arguments must be numbers')
//     }
//     return Math.floor (Math.random() * ( upper - lower + 1)) + lower; 
// }

// console.log ( getRandomNumber (1,6) );
// console.log ( getRandomNumber('nine', 100) );
// console.log ( getRandomNumber (200, 500)); 
// console.log ( getRandomNumber (10000, 20000) );
// console.log ( getRandomNumber(50, 'one-hundred'));


// LOOPS, ARRAYS, OBJECTS
// loop - repeating action cretain number of times or certain condition is true
// function randomNumber (upper) {
//     return Math.floor ( Math.random() * upper) + 1; 
// }
//     var counter = 0;
//     while ( counter < 10000 ) {
//         var randNum = randomNumber (6);
//         document.write(randNum + ' ');
//         counter +=1;  
//     }

// !== - not equal to

// var upper = 10000;
// var randomNumber = getRandomNumber (upper);
// var guess;
// var attempts = 0;

// function getRandomNumber (upper) {
//     return Math.floor (Math.random () * upper) + 1;
// }

// while (guess !== randomNumber) {
//     guess = getRandomNumber (upper);
//     attempts +=1;
// }
// document.write("<p> The random number was: " + randomNumber + "</p>");
// document.write("<p> It took comp " + attempts + " attempts to get it right </p>");

// do while loop
// var randomNumber = getRandomNumber (10);
// var guess;
// var guessCount = 0;
// var correctGuess = false; 

// function getRandomNumber ( upper ) {
//     var num = Math.floor (Math.random () * upper) + 1;
//     return num; 
// }

// do {
//     guess = prompt(" what number I thinking about?");
//     guessCount +=1;
//     if (parseInt (guess) === randomNumber) {
//         correctGuess = true; 
//     }
// } while (!correctGuess)
 
// document.write ('<h1> You guessed the number! </h1>');
// document.write ('It took you ' + guessCount + ' tries to guess the number' + randomNumber);


// for loop
// var html = '';
// for (var i = 1; i <= 10000; i +=1) {
//     html +='<div>' + i + '</div>';
// }
// document.write (html);

// break statement
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber ( upper ) {
//     var num = Math.floor(Math.random() * upper) + 1;
//     return num; 
// }

// while (guessCount < 10) {
//     guess = prompt ('what numbder Im thinking');
//     guessCount +=1;
//     if (parseInt(guess) === getRandomNumber) {
//         correctGuess = true;
//         break; 
//     }
// }

// if (correctGuess) {
//     document.write ('<h1> You guessed the number </h1>');
//     document.write('It took you ' + guessCount + ' tries to guess the number ' + randomNumber);
// } else {
//     document.write (' <h1> Sorry you did not guess the number </h1>');
// };

// dry - do not repeat yourself
//  refactoring - improving existing code

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;

// for ( var i = 1; i <=1000; i += 1) {
//     red = Math.floor (Math.random () *256);
//     green = Math.floor (Math.random () *256);
//     blue = Math.floor (Math.random() *0256);
//     rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
//     html += '<div style="background-color:' + rgbColor + '"> </div>';
// }
// document.write(html);

// refactoring 2

// var html = '';
// var red;
// var green;
// var blue;
// var rgbColor;

// function randomRGB () {
//     return Math.floor (Math.random()*256);
// }


// function randomColor () {
// var color = 'rgb(';
// color += randomRGB () + ',';
// color += randomRGB () + ',';
// color += randomRGB () + ',';
// return color; 
// }
// function print (message) {
//     document.write (message); 
// }

// for ( var i = 1; i <=1000; i += 1) {
    
//     rgbColor =randomColor ();  
//     html += '<div style="background-color:' + rgbColor + '"> </div>';
// }
// print(html);

// array - data structure, list of items
// var shoppingList = [
//     'carrots',
//     'milk',
//     'eggs'
// ];

// 1st item in array is 0
// 0 'carrots'
// 1 'milk'
// 2 'eggs'

// accesing items in arrays 
// var shopping = ['carrots', 'milk', 'eggs'];
// console.log (shopping[0]);

// adding data to arrays 

// var numbers = [1,2,3,4,5,6];
// numbers.push(7);
// numbers.unshift ( 0 );

// index   value
// 0         0   
// 1         1
// 2         2
// 3         3
// 4         4
// 5         5
// 6         6

// var playlist = [];
// playlist.push ('I did it my way');
// playlist.push('Respect','Imagine');
// playlist.unshift ('born to run');
// playlist.unshift('Louie Louie', 'Maybelene');
// document.write ( playlist );


//  remove items from arrays
// var numbers = [1,2,3,4,5,6];
// numbers.pop (); - this line shows and deletes last array DataTransferItem

// using for loops with Arrays

// function print (message) {
//     document.write (message);
// }

// function printList (list) {
//     var listHTML = ('<ol>');
//     for (var i=0; i <list.length; i +=1) {
//         listHTML += '<li>' + list[i] + '</li>';
//     }
//     listHTML +='</ol>';
//     print(listHTML);
// }

// printList(playList);

// useful array methods
// var inStock = ['apples', 'eggs', 'milk', 'cookies', 'cheese', 'bread', 'lettuce', ' carrot', 'broccoli','pizza','potato','crackers','onion','tofu', 'forzen dinner', 'cucumber'];

// function print(message) {
//     document.write('<p>' + message + '</p>');
// }

// while (true) {
//     search = prompt ("search product,'list' to show product, 'quit' to exit");
//     search = search.toLowerCase();
//     if (search === 'quit') {
//         break; 
//     } else if ( search === 'list') {
//         print (inStock.join (','));
//     } else {
//         if (inStock.indexOf (search )> -1) {
//             print ('yes we have ' + search + ' in store');
//         } else {
//             print ( search + ' is not in stock');
//         }
//     }
// }

// two dimensional array
// var playList = [
//     ['I did it my way', 'frank sinatra'],
//     ['respect', 'Aretha franklin'],
//     ['imagine', 'John Lenon'],
//     ['Born to run', 'bruce springsteen'],
//     ['louie louie', 'the kingsmen'],
//     ['maybelene', 'chuck berry']
// ];

// function print (message) {
//     document.write (message);
// }

// function printSongs (songs) {
//     var listHTML = '<ol>';
//     for ( var i = 0; i < list.length; i += 1) {
//         listHTML += '<li>' + songs[i] [0] + ' by ' + songs[i][1] + '</li>';
//     }
//     listHTML +='</ol>';
//     print(listHTML);
// }

// printSongs(playList);

// challenge solution 
// var questions = [
//     ['how many states in us', 50],
//     ['how many continents', 7],
//     ['how many legs dog have',4]
// ];

// var correctAnswers = 0;
// var questions;
// var answer;
// var response;
// var html;

// function print (message) {
//     document.write (message); 
// }

// for (var i = 0; i < questions.length; i +=1) {
//     question = questions[1][0];
//     answer = questions [i] [1];
//     response = parseInt (prompt (question));
//     response = parseInt (response); 
//     if (response === answer) {
//         correctAnswers +=1;
//     }
// }

// html = "You got " + correctAnswers + " questions right";
// print(html);

// refactoring challenge
// var questions = [
//     ['how many states in us', 50],
//     ['how many continents', 7],
//     ['how many legs dog have',4]
// ];

// var correctAnswers = 0;
// var questions;
// var answer;
// var response;
// var html;
// var correct = [];
// var wrong = [];


// function print (message) {
//    var outputDiv = document.getElementById ('output');
//    outputDiv.innerHTML = message; 
// }

// function buildList (arr) {
//     var listHTML = '<ol>';
// for (var i=0; i<arr.length; i+=1) {
//     listHTML +='<li>' + arr[i] + '</li>'; 
// }
// listHTML +=' </ol>';
// return listHTML; 
// }

// for (var i = 0; i < questions.length; i +=1) {
//     question = questions[1][0];
//     answer = questions [i] [1];
//     response = parseInt (prompt (question));
//     response = parseInt (response); 
//     if (response === answer) {
//         correctAnswers +=1;
//         correct.push(question);
//     } else {
//         wrong.push (question); 
//     }
// }

// html = "You got " + correctAnswers + " questions right";
// html +='<h2> You got these questions correct: </h2>';
// html +=buildList(correct); 
// html +='<h2> You got these questions wrong: </h2>';
// html +=buildList(wrong); 
// print(html);

//object literal, object uses curly braces {}
// var person = {
//     name : 'Sarah',
//     country: 'US',
//     age: 35,
//     treehouseStudent: true,
//     skills : ['JavaScript', 'HTML', 'CSS']
// }; 

// Accessing object

// var person = {
//     name : 'Sarah',
//     country: 'US',
//     age: 35,
//     treehouseStudent: true,
//     skills : ['JavaScript', 'HTML', 'CSS']
// }; 

// function print (message) {
//     var div = document.getElementById('output');
//     div.innerHTML = message;
// }

// var message = '<p> Hello. My name is ' + person.name + '</p>';
// message +='<p> I live in the ' +person.country + '</p>';
// person.name = 'Rainbow Dash';
// message +='<p> But, I wish my name was ' + person.name '</p>';

// print(message);

// var person = {
//     name : 'Sarah',
//     country: 'US',
//     age: 35,
//     treehouseStudent: true,
//     skills : ['JavaScript', 'HTML', 'CSS']
// }; 

// for (prop in person ) {
//     console.log (prop, ':', person[prop]); 
// }

// var questions = [
//     {question: 'How many states in US', answer: 50},
//     {question: 'How many continents', answer: 7},
//     {question: 'How many legs dog have', answer: 4 }
// ];

// json - javascript object notation

// var students = [
//     {
//         name: 'Dave',
//         track: 'Front end developer',
//         achievements: 158,
//         points: 14730
//     },
//     {
//         name: 'Jody',
//         track: 'iOS developer',
//         achievements: '55',
//         points: '2025'
//     }
// ]

// var message = '';
// var student;

// function print (message) {
//     var outputDiv = document.getElementById('output');
//     outputDiv.innerHTML = message;
// }

// for (var i=0; i < students.length; i +=1) {
//     student = students[i];
//     message +='<h1>Student:' + student.name + '</h1>';

// }
// print (message);

// const - once const is assigned, it cannot be changed
// const pi = 2.567

// const days = ["monday"];
// const person = {first_name: "Imogen"};

// let keyword reassigns variable and works like var


// const myHeading = document.getElementById ('myHeading');
// const myButton = document.getElementById ('myButton');
// const myTextInput = document.getElementById ('myTextInput'); 
    

// myHeading.addEventListener('click', () => {
//     myHeading.style.color = 'red'; 
// });
// myButton.addEventListener('click', () => {
//     myHeading.style.color = 'myTextInput.value'; 
//     myHeading.style.fontFamily = "italic";
//     myHeading.style.fontSize = "34px"; 
// });

// document.write ('hello world');
// var number = 35;
// var string = string;
// var boolean = true; var boolean = false;
// alert (number + string + boolean);

// function saySomethng ()  {
//     // all statements go inside braces
//     alert ('this is a function');
// }

// var num1=12
// var num2=34
// // var num1 = num1 + num2;
// // num1 += num2
// // num1 /= num2 
// document.write (num1);

// var food = "meat";
// if (food == "apple") {
//     alert ( ' We eat apples'); 
// } else if (food === "meat") {
//     alert (' We ate meat'); 
// }

// var i = 1;
//  while (i<5) {
//      document.write ('A statement has run');
//      i++; 
//  }

// for (var i=1; i<5; i++) {
//     document.write ('A statement has run'); 
// }

// function batting (player, distance) {
//     if (distance <= 350 && distance >0) {
//         document.write (player + "hit the ball");
//     } else if (distance <=0) {
//         document.write (player + "struck out");
//     } else {
//         document.write(player + "hit home run"); 
//     }
// }

// batting ("Jack", 00);
// var result = add(5,6)
// document.write (result); 
// function add (x,y) {
//     result = x*y;
//     return result; 
// }

// var name = "henry" //global variable
// function printName() {
//     var name2="sarah" //local variable
//     document.write(name2);
// }
// printName(); //call functions
// // document.write(name);

// var road = ["stone", "dirt", "cement", "tar"];
// road[1]="cobblestone"
// var roadTravel = road[1];
// document.write(roadTravel);

// var orc = {
//     hair: "green",
//     age: 26,
//     stomachFull: true,
//     eat: function () {
//         document.write("yum yum");
//     } 
// }; 

// orc.stomachFull = false; 
// if (orc.stomachFull == true) {
//     orc.eat ();
// } else {
//     document.write ("not eating"); 
// }

// var num = 4.3;
// var newNumber=26 + Math.floor(num);
// document.write(newNumber);

// var todayDate = new Date ();
// var useString = todayDate.toDateString (); 
// document.write(useString);
// var randomColor = [25 * Math.random(), 25 *Math.random(), 25 *Math.random(), ];

// function changeStyle () {
//     var text = document.getElementById ("heading1").style.backgroundColor = "green";

// };

// function changeStyle () {
//     var paragraph = document.getElementsByTagName ("p"); 
//     var changeParaText = paragraph[0].style.fontFamily = "Georgia";
//     var changeParaText = paragraph[1].style.backgroundColor = "blue";
//     var changeParaText = paragraph[2].style.fontWeight = "900";
//     var changeParaText = paragraph[3].style.letterSpacing = "5px"; 
// }


// function changeStyle () {
//     var paragraph = document.getElementsByTagName ("p");
//     for (var i = 0; i <4; i++) {
//         paragraph[i].style.backgroundColor = "aquamarine";
//     }
//     // var changeParaText = paragraph[0].style.fontFamily = "Georgia";
//     // var changeParaText = paragraph[1].style.backgroundColor = "blue";
//     // var changeParaText = paragraph[2].style.fontWeight = "900";
//     // var changeParaText = paragraph[3].style.letterSpacing = "5px"; 
// }

// function changeStyle () {
//     var paragraph = document.getElementsByClassName ('para');
//     var changeText = paragraph[0].style.color = "red"; 
//     var changeText = paragraph[1].style.color = "blue"; 
//     var changeText = paragraph[2].style.color = "green"; 
//     var changeText = paragraph[3].style.color = "yellow"; 
// }

// function changeStyle () {
//     var paragraph = document.getElementsByClassName ('para');
//     var changeText = paragraph[0].innerHTML = "Hello world" 
//     var changeText = paragraph[1].innerHTML = "This is my JS code"
//     var changeText = paragraph[2].innerHTML = "I will become good coder"
//     var changeText = paragraph[3].innerHTML = "this will take time"
// }

// function changeStyle () {
//     var paragraph = document.getElementsByClassName ('para');
//     var changeText = paragraph[0].innerHTML = "Hello world" 
//     var changeText = paragraph[1].innerHTML = "This is my JS code"
//     var changeText = paragraph[2].innerHTML = "I will become good coder"
//     var changeText = paragraph[3].innerHTML = "this will take time"
//     var paragraph = document.getElementsByClassName ('para');
//     var firstParaText = paragraph[0].innerHTML
//     var secondParaText = paragraph[1].innerHTML 
//     var addThem = paragraph [2].innerHTML = firstParaText + secondParaText; 
   
// }

// function changeBackground () {
// var text=document.getElementById('para1').style.backgroundColor = 'red'; 
// };  
//     function backToNormal () {
//         var text=document.getElementById('para1').style.backgroundColor = 'transparent'; 
//         }; 
        
// var now = 2019;
// var yearJon = 1989;
// var fullAge = 18;
// var isFullAge = now = yearJon >= fullAge;
// console.log (isFullAge);

// var ageJon = now - yearJon;
// var ageMark = 35;
// var average = (ageJon + ageMark) /2;
// console.log (average); 

// // Multiple assignements
// var x,y;
// x= y = (3+5)*4 -6;
// console.log (x, y);

// // More operators
// x*=2;
// console.log (x);
// x+=10;
// console.log (x);
// x=x+1;
// x+=1;
// x++
// console.log (x);

// //challenge
// var johnMass = 87;
// var johnHeight = 163;

// var markMass = 90;
// var markHeight = 185;

// var johnBMI = johnMass/johnHeight*2
// var markBMI = markMass/markHeight*2

// document.write('John has' + johnBMI + 'BMI.');
// document.write ('  ');
// document.write('Mark has' + markBMI + 'BMI.');

// if / else statements

// var firstName = 'John';
// var civilStatus = 'single';
// if (civilStatus === 'married') {
//     console.log (firstName + ' is married') ;
// } else {
//     console.log (firstName + ' will marry soon');
// }

// //boolean logic
// var firstName = 'john';
// var age = 22;
// if (age <13) {
//     console.log (firstName + ' is a boy');
// } else if (age >= 13 && age < 20) {
//     console.log (firstName + ' is a teenager');
// } else if (age >= 13 || age >30) {
//     console.log (firstName + ' is a young man');
// } else {
//     console.log (firstName + ' is a man');
// }

// // ternary operator and switch statements
// var firstName = ' John';
// var age = 18;
// age >=18 ? console.log (firstName + ' drinks beer') : console.log (firstName + ' drinks juice');
// // ternary
// var drink = age >= 18 ? 'beer' : ' juice';
// console.log (drink);
// //switch
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//         console.log (firstName + ' teaches at school');
//         break; 
//     case 'driver':
//         console.log(firstName + ' drives car'); 
//         break; 
//         default :
//         console.log (firstName + ' does smth else');
// } 

// // truthly & falsy values & equality operators
// // falsy values: undefined, null, ' ', NaN
// //truthly values: NOT falthy values
// var height;
// height = 0;
// if (height || height === 0) {
//     console.log ('var is defined');
// } else {
//     console.log ('var is NOT defined'); 
// }

// //challenge
// var johnTeam1=89;
// var johnTeam2=120;
// var johnTeam3=103;

// var johnTeamAverage = (johnTeam1 + johnTeam2 + johnTeam3) /2;

// var mikeTeam1=116;
// var mikeTeam2=94;
// var mikeTeam3=123;

// var mikeTeamAverage = (mikeTeam1 + mikeTeam2 + mikeTeam3)/2;

// if (johnTeamAverage > mikeTeamAverage) {
//     document.write ("John won, his score is");
//     document.write (johnTeamAverage); 
// } else if (johnTeamAverage < mikeTeamAverage){
//     document.write("Mike won, his score is "); 
//     document.write (mikeTeamAverage)
// };

// // functions
// function calculateAge (birthYear) {
//     return 2019 - birthYear; 
// } 
// var ageJohn = calculateAge (1987);
// var ageMike = calculateAge (1985);
// var ageMary = calculateAge (1975);
// console.log (ageJohn, ageMike, ageMary);

// //function statements and expressions
// var whatDoYouDo = function(job, firstName) {
//     switch (job) {
//         case 'teacher':
//             return firstName + ' teaches at school';
//             break;
//         case "driver":
//             return firstName + ' drives cars';
//             break; 
//         case 'designer': 
//             return firstName + ' designs websites';
//             break; 
//         default: 
//             return firstName + ' does smth else'; 
//     }
// };
// document.write (whatDoYouDo ('teacher', 'John'));
// document.write (whatDoYouDo ('designer', 'Mark'));
// document.write (whatDoYouDo ('driver', 'Mike'));

// // arrays
// // initialize new array
// var names = ['John','Mark', 'Jane'];
// var years = new Array (1990, 1969, 1948);
// console.log (names[0]);
// console.log (names.length);

// // mutate array data 
// names[1] = 'ben';
// names[names.length] = 'Mary';
// console.log (names);

// function tipCalculator (bill) {
//     var percentage;
//     if (bill <50) {
//         percentage = .2;
//     } else if (bill >=50 && bill <200) {
//         percentage =.15;
//     } else {
//         percentage = .1;
//     }
//     return percentage * bill;
// }

// var bills = [124, 48, 268];
// var tips = [tipCalculator(bills[0]),
// tipCalculator(bills[1]),
// tipCalculator(bills[2])
// ];
// document.write (bills[0], [1], [2]);

// // objects & properties 
// var John = {
//     firstName: 'John',
//     lastName: "Smith",
//     birthYear: 1990,
//     family: ['Jane', 'Mark','Bob'],
//     job: 'Teacher',
//     isMarried:false
// };
// document.write(John.firstName);

// // new object syntax 
// var jane=new Object ();
// jane.firstName='Jane';
// jane.birthYear=1969;
// jane['lastName']='Smith';
// console.log (jane)

// // objects & methods
// var John = {
//         firstName: 'John',
//         lastName: "Smith",
//         birthYear: 1990,
//         family: ['Jane', 'Mark','Bob'],
//         job: 'Teacher',
//         isMarried:false,
//         calcAge:function(birthYear) {
//             this.age = 2019 - this.birthYear;
//         }
//     };

//     John.calcAge();
//     console.log(John.age);

// // Challenge
// var john = {
//     height: 170,
//     weight: 90,
//     bMI: function (BMI) { john.weight/john.height
// }};

// var mark = new Object ();
// mark.height = '163',
// mark.weight = '85',
// mark.bMI = function (BMI) {mark.weight/mark.height}


//    if (john.bMI > mark.bMI)  {
//     document.write ('john' + "has " + 'john.bMI');
//    } else if (john.bMI <mark.bMI) {
//     document.write (mark + 'has ' + mark.bMI); }; 

// loops and iterations
// // for loop
// for (var i=0; i<10; i++) {
//     console.log(i);
// }

// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// for ( var i=0; i<john.length; i++) {
//     console.log(john[i]); 
// }

// // while loop
// var john = ['John', 'Smith', 1990, 'designer', false, 'blue'];
// var i=0;
// while(i<john.length) {
//     console.log(john[i]);
//     i++;
// }

// // continue and break statements 
// for (var i=0; i<john.length;i++) {
//     if(typeof john[i] !=='string') continue; 
//     console.log(john[i]); 
// }

// var scores, roundScore, activePlayer, dice;
// scores = [0,0];
// roundScore = 0; 
// activePlayer = 0; 
// dice = Math.floor(Math.random() *6) +1;
// console.log(dice);

// document.querySelector ('#score-o').textContent = dice;
