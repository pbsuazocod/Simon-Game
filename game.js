var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var randomChosenColour;
var Level;
var result;


function gameStar(e) {
    nextSequence();
    $(this).off(e);
};

function gameReStar() {
    $(document).on("keypress", gameStar);
};


$(document).on("keypress", gameStar);

function gameOver() {
    userClickedPattern.length = 0;
    gamePattern.length = 0;
    $("#level-title").text("Game Over, Press Any Key to Restart");
    $(document.body).css("background-color", "red").delay(50).queue(function (next) {
        $(this).css("background-color", "#011F3F");
        next();
        audio = new Audio("../Simon Game/sounds/wrong.mp3");
        audio.play();
    });
    gameReStar();
};



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    var Level = "level " + (gamePattern.length);
    $("#level-title").text(Level);
    console.log(gamePattern);
};




$(".btn").click(function handlerFunction(e) {
    var userChosenColor = e.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userChosenColor);
    $("#" + userChosenColor).addClass("pressed").delay(100).queue(function (next) {
        $(this).removeClass("pressed");
        next();
    });
    test();
    console.log(userClickedPattern);
});


function test() {
    for (let i = 0; i < userClickedPattern.length; i++) {
        if (gamePattern[i] === userClickedPattern[i]) {
            result = true;
        } else {
            result = false;
            gameOver();
            return
        }
    }
    if (gamePattern.length === userClickedPattern.length) {
        nextSequence();
        result = undefined;
        userClickedPattern.length = 0;
    }


};

function playSound(name) {

    switch (name) {
        case "blue":

            audio = new Audio("./Simon Game/sounds/blue.mp3");
            audio.play();

            break;


        case "green":

            audio = new Audio("./Simon Game/sounds/green.mp3");
            audio.play();

            break;

        case "red":

            audio = new Audio("./Simon Game/sounds/red.mp3");
            audio.play();

            break;

        case "yellow":

            audio = new Audio("./Simon Game/sounds/yellow.mp3");
            audio.play();

            break;

        default:
            break;
    };


};