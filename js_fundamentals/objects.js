// Exercises: Objects

// EXERCISE: The Recipe Card

// Never forget another recipe!

// Create an object to hold information on your favorite recipe. It should have properties for title (a string), servings (a number), and ingredients (an array of strings).
// On separate lines (one console.log statement for each), log the recipe information so it looks like:
// Mole
// Serves: 2
// Ingredients:
// cinnamon
// cumin
// cocoa

function Recipe(){
  var myRecipes = [
    {name: "Mole", 
      serves: 2,
      ingredients: "cinnamon, cumin, cocoa"}
  ];

  for (var i = 0; i < myRecipes.length; i++){
    var myRecipe = myRecipes[i];
    document.write("Recipe Name: " + myRecipe.name + "<br>Serves: " + myRecipe.serves + "<br>Ingredients: " + myRecipe.ingredients);
  }
}
// EXERCISE: The Reading List

// Keep track of which books you read and which books you want to read!

// Create an array of objects, where each object describes a book and has properties for the title (a string), author (a string), and alreadyRead (a boolean indicating if you read it yet).
// Iterate through the array of books. For each book, log the book title and book author like so: "The Hobbit by J.R.R. Tolkien".
// Now use an if/else statement to change the output depending on whether you read it yet or not. If you read it, log a string like 'You already read "The Hobbit" by J.R.R. Tolkien', and if not, log a string like 'You still need to read "The Lord of the Rings" by J.R.R. Tolkien.'

function readingList(){
  var myBooks = [
  {name: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true},
  {name: "JPod", author: "Douglas Coupland", alreadyRead: true},
  {name: "Pride & Prejudice", author: "Jane Austen", alreadyRead: false}
  ]

    for (var i = 0; i < myBooks.length; i++){
      var book = myBooks[i];
      if (book.alreadyRead == true){
        document.write("<div>You have already read ");
      }else{
        document.write("You need to read ");
      }

      document.write(book.name + " by " + book.author + ".</div>");
    }

}
// EXERCISE: The Movie Database

// It's like IMDB, but much much smaller!

// Create an object to store the following information about your favorite movie: title (a string), duration (a number), and stars (an array of strings).
// Create a function to print out the movie information like so: "Puff the Magic Dragon lasts for 30 minutes. Stars: Puff, Jackie, Living Sneezes."

function IMDB() {
  var movies = [
  {name: "Captain America", duration: "3", stars: ["Captain America", "Red Skull"]},
  {name: "Thor", duration: "2.5", stars: ["Thor", "Loki", "Some Girl", "Orin", "Xena Warrior Princess", "S.H.I.E.L.D."]},
  {name: "Transformers", duration: "4", stars: ["Optimus Prime", "Megatron", "blonde girl", "kooky guy"]}
  ]

  for (var i = 0; i < movies.length; i++){
    var movie = movies[i];
    document.write("<div>Movie title: " + movie.name + " is " + movie.duration + " hours long. It stars ")
    
    for (var j = 0; j < movie.stars.length - 1; j++){
      document.write(movie.stars[j] + ", ");
    }
    document.write("and " + movie.stars[movie.stars.length - 1] + ".</div>");
  }
}


