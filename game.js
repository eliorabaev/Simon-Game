var buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];
var level = 0;
function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    audioPlay(randomChosenColour);
    level++;
    $("#level-title").text("level " + level);
    userClickedPattern.splice(0, userClickedPattern.length);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);
    audioPlay(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length);
})

$(document).keydown(function(event) {
    if(event.key === " " && level === 0) {
        nextSequence();
    }
});

function audioPlay(playSound){
    switch (playSound.toLowerCase()) {
        case "green":
            var green = new Audio('./sounds/green.mp3');
            green.play();
            break;

        case "yellow":
            var yellow = new Audio('./sounds/yellow.mp3');
            yellow.play();    
            break;

        case "red":
            var red = new Audio('./sounds/red.mp3');
            red.play();    
            break;

        case "blue":
            var blue = new Audio('./sounds/blue.mp3');
            blue.play();    
            break;

        default: 
            console.log(buttonKey);
            break;
      }
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}

function checkAnswer(currentLevel) {
    var id = currentLevel - 1;
    if(userClickedPattern[id] == gamePattern[id]) {
        if(currentLevel === gamePattern.length) {
            setTimeout(nextSequence, 1000);
        }
    } else {
        var wrong = new Audio('./sounds/wrong.mp3');
        wrong.play(); 
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("#level-title").text("GAME OVER, Press Space to Restart");
        startOver()
    }
}

function startOver() {
    gamePattern.splice(0, gamePattern.length);
    level = 0;
}