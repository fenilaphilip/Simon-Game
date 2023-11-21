var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {
  var randomNummer = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNummer];

  // for animate / flash  the button

  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  $(".btn").click(function (events) {
    console.log(events.target);
    var userChosenColour = events.target.id;
    var audio = new Audio("./sounds/" + userChosenColour + ".mp3");
    audio.play();
  });

  gamePattern.push(randomChosenColour);
  console.log(gamePattern);
}

nextSequence();
