var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var randomChosenColor;



function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    randomChosenColor = buttonColours[randomNumber];
    gamePattern.push(randomChosenColor);
};

$(".btn").click(function (e) {
    playSound(e.target.id);
    $(e.target).fadeOut(100).fadeIn(100);
    console.log(e.target.id);

});


function playSound(color) {

    switch (color) {
        case "blue":

            audio = new Audio("../Simon Game/sounds/blue.mp3");
            audio.play();

            break;


        case "green":

            audio = new Audio("../Simon Game/sounds/green.mp3");
            audio.play();

            break;

        case "red":

            audio = new Audio("../Simon Game/sounds/red.mp3");
            audio.play();

            break;

        case "wrong":

            audio = new Audio("../Simon Game/sounds/wrong.mp3");
            audio.play();

            break;

        case "yellow":

            audio = new Audio("../Simon Game/sounds/yellow.mp3");
            audio.play();

            break;

        default:
            break;
    }


};