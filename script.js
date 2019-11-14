// Function where all the magic happens.
function rpsGame(yourChoice) {
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    results = decideWinner(humanChoice, botChoice);
    message = finalMessage(results);
    rpsFrontEmd(humanChoice, botChoice, message);
}

// Generates a random number between 0, 1 and 2.
function randToRpsInt() {
    return Math.floor(Math.random() * 3);
}

// Returns a value by taking the number generated from randToRpsInt function.
function numberToChoice(number) {
    return ["rock", "paper", "scissors"][number];
}

// Decides the winner of the battle by returning an array.
function decideWinner(yourChoice, computerChoice) {
    var rpsDatabase = {
        "rock": {
            "scissor": 1, "rock": 0.5, "paper": 0
        },
        "paper": {
            "rock": 1, "paper": 0.5, "scissors": 0
        },
        "scissors": {
            "paper": 1, "scissors": 0.5, "rock": 0
        }
    }

    var yourScore = rpsDatabase[yourChoice][computerChoice];
    var computerScore = rpsDatabase[computerChoice][yourChoice];
    
    return [yourScore, computerScore];
}

// Displays a message by taking value returned by decideWinner function.
function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {"message": "You Lost!", "color": "red"};
    } else if (yourScore === 0.5) {
        return {"message": "Draw!", "color": "yellow"};
    } else {
        return {"message": "You Won!", "color": "green"};
    }
}

// Displays the images of the winner on the screen.
function rpsFrontEmd(humanImageChoice, botImageChoice, finalMessage) {
    var imagesDatabase = {
        "rock": document.getElementById("rock").src,
        "paper": document.getElementById("paper").src,
        "scissors": document.getElementById("scissors").src
    }

    document.getElementById("rock").remove();
    document.getElementById("paper").remove();
    document.getElementById("scissors").remove();

    var humanDiv = document.createElement("div");
    var botDiv = document.createElement("div");
    var messageDiv = document.createElement("div");

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";
    document.getElementById("flex-box-rps-div").appendChild(humanDiv);

    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size:30px; padding:30px;'>" + finalMessage['message'] + "</h1>";
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);

    botDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>";
    document.getElementById("flex-box-rps-div").appendChild(botDiv);

}