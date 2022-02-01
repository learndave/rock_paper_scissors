function computerPlay() {
    return getRandomInteger(0,3);
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

    playerSelection = convertIntegerToWords(playerSelection);
    computerSelection = convertIntegerToWords(computerSelection);
    console.log("        YOU: " + playerSelection);
    console.log("   COMPUTER: " + computerSelection);
    if (roundWinner == 0) {
        console.log("     You win this round! " + playerSelection + " beats " + computerSelection + ".");
    } else if (roundWinner == 1) {
        console.log("     You lose this round! " + computerSelection + " beats " + playerSelection + ".");
    } else {
        console.log("You are tied with the computer! Nobody wins.");
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

function getPlayerSelection() {
    console.log("Input 0 for Rock, 1 for Paper; and 2 for Scissors.")
    console.log("INPUT: ")
    let playerSelection = parseInt(prompt("What is your choice:\n "));
    if (playerSelection >= 0 & playerSelection <= 2) {
        return playerSelection;
    } else {
        console.log("Please input 0, 1, or 2.")
        getPlayerSelection();
    }
}

function showScores(scores) {
    console.log("SCORES: \n       You: " + scores[0] + "\n  Computer: " + scores[1]);
}

function playGame() {
    console.log("WELCOME TO THE GAME OF ROCK, PAPER, AND SCISSORS");
    console.log("You are to play with the computer.");
    console.log("The first to score 5 wins.");
    console.log("--------------------------");
    console.log(" ------------------------ ");
    console.log("  ---------------------- ");
    console.log(" ------------------------ ");
    console.log("--------------------------");

    let scores = [0,0,0] // [playerScore, computerScore, ties]

    let i = 1;
    while (!checkIfWinnerExists(scores)) {
        console.log("ROUND " + i);
        let playerSelection = getPlayerSelection(); 
        let computerSelection = computerPlay();
        let roundWinner = getRoundWinner(playerSelection, computerSelection);
        scores[roundWinner] = scores[roundWinner] + 1;
        showScores(scores);
        i++;
        console.log("--------------------------");
        console.log(" ------------------------ ");
        console.log("--------------------------");
    }

    let winner = getWinner(scores);

    let message;

    if (winner == 1) {
        message = "Sorry, you lost. The computer won."
    } else {
        message = "Congratulations! You won.\n However, you angered the computer overlords. Prepare for the computer uprising."
    }

    console.log(message);

    return;
}

playGame();