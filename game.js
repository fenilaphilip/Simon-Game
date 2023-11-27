var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];

function nextSequence() {
  var randomNummer = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNummer];

  // for animate / flash  the button

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  gamePattern.push(randomChosenColour);
  level = level + 1;
  $("#level-title").text("Level " + level);
  console.log("gamePattern : " + gamePattern);
}

$(".btn").click(function (events) {
  var userChosenColour = events.target.id;
  userClickedPattern.push(userChosenColour);
  console.log("userClickedPattern :" + userClickedPattern);

  checkAnswer(userClickedPattern.length - 1);
  playSound(userChosenColour);
  animatePress(userChosenColour);
});

function playSound(name) {
  var audio = new Audio("./sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  setTimeout(function () {
    $(".btn").removeClass("pressed");
  }, 100);
}

// Show instructions

$("#instruction-guide").hide();
$("#guide-game").click(function () {
  $("#game-platform").hide();
  $("#instruction-guide").show();
  $("#level-title").hide();
});
$("#play-game").click(function () {
  $("#instruction-guide").hide();
  $("#game-platform").show();
  $("#level-title").show();
});

//  To start the game

var gameStart = false;
var level = 0;

$(document).keypress(function () {
  if (gameStart == false) {
    nextSequence();
    gameStart = true;
  }
});

// To check the sequence with user sequence

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] == userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      console.log("Correct");

      //Calling nextSequence() after a 1000 millisecond delay
      setInterval(nextSequence(), 1000);
      userClickedPattern = [];
    }
  } else {
    playSound("wrong");

    // Red flash light on screen

    $("body").addClass("game-over");
    $("#level-title").text("Game Over, Press Any Key to Restart");

    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);

    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  gameStart = false;
}
