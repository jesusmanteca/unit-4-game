$(document).ready(function() {
    
    // Make variables for the stones = 0

    var stone2 = 0
    var stone3 = 0
    var stone4 = 0
    var stone5 = 0

    // Assign a random number from 0 -12 to stones
    var generateRandomNumber = function(min, max) { 
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    stone2 = generateRandomNumber(1,12);
    stone3 = generateRandomNumber(1,12);
    stone4 = generateRandomNumber(1,12);
    stone5 = generateRandomNumber(1,12);

    // Make a variable for wins and losses
    var wins = 0;
    var losses = 0;
    var yourGuess = 0;
    var randomNumber = 0;


// Click on a crystal to add amount of points to the total score
// Player wins if user guess === computer guess
// Player loses if user guess > computer guess
// Game starts over if player wins or loses
// New game = new values
   
// Show a random number between 19-120 at the beginning of the page
    var random   
    
    randomNumber = $("#randomNumber").on("click", function() {
    random = Math.floor(Math.random() * 120);
    $("#randomNumber").text(random);
    console.log(random)
    })

var numbersSofar = [0]

// Create a click event for each of the stones 
    $("#stone2").on("click", function() {
        numbersSofar.push(stone2);
        console.log(numbersSofar);
        updateTotal()
    })
    $("#stone3").on("click", function() {
        numbersSofar.push(stone3);
        console.log(numbersSofar)
        updateTotal()
    })
    $("#stone4").on("click", function() {
        numbersSofar.push(stone4);
        console.log(numbersSofar)
        updateTotal()
    })
    $("#stone5").on("click", function() {
        numbersSofar.push(stone5);
        console.log(numbersSofar)
        updateTotal();
        console.log(parseInt(document.getElementById("yourGuess").innerHTML) )
        console.log(parseInt(random) )
    })
    
    yourGuess = numbersSofar
    
     // Hide the instructions when button clicked
    $("#introParagraphGreeting").click(function (){
        $(".introParagraphs").slideToggle();
    })
    
    // making a function to add the values of the array and then a function to return that value into the "yourGuess"
    function updateTotal() {
        document.getElementById("yourGuess").innerHTML = numbersSofar.reduce(myFunc);
    }
    function myFunc(total, num) {
        return total + num;
    }

// Set up wins/loss with else if conditions

    if (parseInt(document.getElementById("yourGuess").innerHTML) === parseInt(random)) {
        alert("YOU WIN!!");
        wins++;
        // add to the id #winRecord: "Won: " + win++
    }
    else if (parseInt(document.getElementById("yourGuess").innerHTML) >= parseInt(random)) {
        alert("WHAT A LOSER!");
        console.log("You Lost");
        losses++;
           // add to the id #loseRecord: "Lost: " + loss++
    }
    if (yourGuess > randomNumber) {
        alert("WHAT A LOSER!");}

    $("#winRecord").text("Your wins: " + wins);
    $("#loseRecord").text("Your losses: " + losses);
});

