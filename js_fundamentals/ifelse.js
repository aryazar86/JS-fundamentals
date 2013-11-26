// Exercises: if/else statements

// EXERCISE: What number's bigger?

// Write a function named greaterNum that:
// takes 2 arguments, both numbers.
// returns whichever number is the greater (higher) number.
// Call that function 2 times with different number pairs, and log the output to make sure it works (e.g. "The greater number of 5 and 10 is 10.").

function greaterNum(num1, num2){

  if (num1 > num2){
    document.write("The greater number of " + num1 + " and " + num2 + " is " + num1 + ". ");
  }else{
    document.write("The greater number of " + num1 + " and " + num2 + " is " + num2 + ". ");
  }
}
// EXERCISE: The World Translator

// Write a function named helloWorld that:
// takes 1 argument, a language code (e.g. "es", "de", "en")
// returns "Hello, World" for the given language, for atleast 3 languages. It should default to returning English.
// Call that function for each of the supported languages and log the result to make sure it works.

// function helloWorld(lang){
//   var response = "";
//   if (lang == "Alb"){
//     response = "Tungjatjeta";
//   }else{
//     response = "Hellow World!";
//   }

//   document.write("<div>" + response + "</div>");
// }

function helloWorld(lang){

  var response = "";

    switch (lang){
      case "Alb":
        response = "In Albanian: Tungjatjeta";
        break;
      case "Grm":   
        response = "In German: Grüßgott";
        break;
      case "Bsq":   
        response = "In Basque: kaixo";
        break;
      case "Bls":   
        response = "In Belarussian: Вiтаю";
        break;
      case "Kor":   
        response = "In Korean: nyeong ha se yo";
        break;
      case "Lng":   
        response = "In Lingulian: mbote";
        break;
      default:       
        response = "In English: Hello World";
        break;
  }

   document.write("<div>" + response + "</div>");

}
// EXERCISE: The Grade Assigner

// Write a function named assignGrade that:
// takes 1 argument, a number score.
// returns a grade for the score, either "A", "B", "C", "D", or "F".
// Call that function for a few different scores and log the result to make sure it works.

function assignGrade(score){
  grade = "";

  if (score < 50){
    grade = "F";
  }else if(score < 60){
    grade = "D";
  }else if(score < 75){
    grade = "C";
  }else if(score < 85){
    grade = "B";
  }else{
    grade = "A";
  }

   document.write("<div>On a score of " + score + ", your grade is: " + grade + ".</div>");

}
// EXERCISE: The Pluralizer

// Write a function named pluralize that:
// takes 2 arguments, a noun and a number.
// returns the number and pluralized form, like "5 cats" or "1 dog".
// Call that function for a few different scores and log the result to make sure it works.
// Bonus: Make it handle a few collective nouns like "sheep" and "geese".

function pluralize(noun, number){
  if (number != 1){
      noun = noun + "s";
  }

  document.write("<div>" + number + " " + noun +"</div>");
}


