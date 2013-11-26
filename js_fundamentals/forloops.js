// Exercises: for loops

// EXERCISE: The even/odd reporter

// Write a for loop that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").

function oddEven() {
  for (count = 1; count < 21; count++){
    if (count % 2 == 0){
      document.write("<div>The number " + count + " is even.</div>");
    }else{
      document.write("<div>The number " + count + " is odd.</div>");
    }
  }
}

// EXERCISE: Multiplication Tables

// Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").

// Bonus: Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).


function multiply(){
  document.write("<table><tbody>")
  for (number = 1; number < 11; number++){
    document.write("<tr><td><b>" + number + ":</b></td>");
    for (multiplier = 1; multiplier < 11; multiplier++){
      document.write("<td>" + number + " x " + multiplier + " = " + (number*multiplier) + "</td>");
    }
    document.write("</tr>");
  }
  document.write("</table></tbody>")
}

// EXERCISE: The Grade Assigner

// Check the results of assignGrade function from the conditionals exercise for every value from 60 to 100 - so your log should show "For 89, you got a B. For 90, you got an A.", etc.

function checkGrades(){
  for (g = 60; g < 101; g++){
    assignGrade(g);
  }
}