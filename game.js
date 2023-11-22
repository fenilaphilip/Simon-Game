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
  console.log(gamePattern);
}

$(".btn").click(function (events) {
  var userChosenColour = events.target.id;
  userClickedPattern.push(userChosenColour);
  console.log(userClickedPattern);

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

nextSequence();
