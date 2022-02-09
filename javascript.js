function computerPlay() {
    const result = getRandomInteger(0,3);
    
    return result;
}

function getRandomInteger(start,end) {
    // max is exclusive; min is inclusive
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end-start) + start);
}

function convertIntegerToWords(n) {
    let words = ["Rock", "Paper", "Scissors"];
    return words[n];
}

function getRoundWinner(playerSelection, computerSelection) {
    let roundWinner = 0;

    if (playerSelection == computerSelection) {
        roundWinner = 2;
    } else if (playerSelection == 2) {
        if (computerSelection == 0) {
            roundWinner = 1;
        } else {
            roundWinner = 0;
        }
    } else {
        if (playerSelection > computerSelection) {
            roundWinner = 0;
        } else {
            roundWinner = 1;
        }
    }
    return roundWinner;
}

function checkIfWinnerExists(scores) {
    let winning_score = 5;
    if (scores[0] == winning_score || scores[1] == winning_score) {
        return 1;
    } else {
        return 0;
    }
}

function getWinner(scores) {
    let winning_score = 5;
    if (scores[0] == winning_score) {
        return 0;
    } else if (scores[1] === winning_score) {
        return 1;
    } else {
        return 2;
    }
}

function randomizeHTML(text) {
    const computerPlay = document.querySelector(".text.computer-play")
    computerPlay.textContent = text;
}

function generateRandomizationInHTML(computerSelection,playerSelection) {
    let temp = document.querySelector(".text-i.two");
    let temp2 = document.querySelector(".text-i.three");
    temp2.innerHTML = "    You: " + convertIntegerToWords(playerSelection);
    temp.innerHTML = "Computer: " + convertIntegerToWords(computerSelection);
}

function playRound(choice) {
    const playerSelection = parseInt(choice.getAttribute("key-value"));
    const computerSelection = computerPlay();
    generateRandomizationInHTML(computerSelection,playerSelection);
    let roundWinner = getRoundWinner(playerSelection, computerSelection);
    if (roundWinner == 2) {
        message = "IT'S A TIE";
    } else {
        message = (roundWinner == 0) ? "SORRY, COMPUTER WINS" : "CONGRATS, YOU WIN";
    }
    return message;
}

function clicked(e) {
    const choice = e.target;
    choice.classList.add("clicked");
    message = playRound(choice);
    document.querySelector(".winner").innerHTML = message;
    console.log(message);
}

function main() {
    const choices = Array.from(document.body.querySelectorAll(".choice"));
    for (let choice of choices) {
        choice.addEventListener("mousedown",clicked);
        choice.addEventListener("mouseup",e => {e.target.classList.remove("clicked")});
    }
}

main();