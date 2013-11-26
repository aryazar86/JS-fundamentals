// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: number of children, partner's name, geographic location, job title.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."

var numberOfChildren = 2;
var partner = "Sally";
var l = "Tesla";
var job = "Transparent Wall Technician";

function tellFortune(){
  document.write("You will be a " + job + " in " + l + ", and married to " + partner + " with " + numberOfChildren + " kids.");
}

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
// Store their birth year in a variable.
// Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: "They are either NN or NN", substituting the values.

var currentYear = new Date().getFullYear();
var birthYear = 1986;

function ageCalc(){

  var age1 = currentYear - birthYear - 1;
  var age2 = currentYear - birthYear;

  document.write("You are either " + age1 + " or " + age2 + ".");
}
// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

var currentAge = 26;
var maxAge = 99;
var average = 2;

function LifeTimeSupplyCalc(){
  var eatTotal = (maxAge - currentAge) * 2;
  document.write("You will need " + eatTotal + " to last you until the ripe old age of " + maxAge + ".");
}
// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

var radius = 3;

function CircleCalc(){
  document.write("The circumference is " + Math.ceil(2 * radius * Math.PI) + ". ");
  document.write("The area is " + Math.ceil(Math.PI * Math.pow(radius, 2))+ ".");
}

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

var celsius = 0;
var fahrenheit = 32;

function TempCalc(){
  document.write("" + celsius + " degrees C is " + Math.ceil((celsius*9)/5 + 32) + " degrees F. ");
  document.write(fahrenheit + " degrees F is " + Math.ceil(((fahrenheit-32)*5)/9) + " degrees C. ");

}

