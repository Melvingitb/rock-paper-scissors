function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    
    if (choice === 0){
        return "Rock";
    }
    else if (choice === 1){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}

function playRound(player, computer){
    //Change capitalization
    player = player.toLowerCase();
    player = player[0].toUpperCase() + player.substring(1);

    if (player === computer){
        console.log(`Tie! You both chose ${computer}`);
        return 0;
    }
    else if (player === "Rock" && computer === "Scissors"){
        console.log(`You Win! ${player} beats ${computer}`);
        return 1;
    }
    else if (player === "Scissors" && computer === "Paper"){
        console.log(`You Win! ${player} beats ${computer}`);
        return 1;
    }
    else if (player === "Paper" && computer === "Rock"){
        console.log(`You Win! ${player} beats ${computer}`);
        return 1;
    }
    else{
        console.log(`You Lose! ${computer} beats ${player}`);
        return -1;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        let outcome = playRound(prompt("Choose Rock, Paper, or Scissors."), getComputerChoice());
        if (outcome === 1){
            playerScore += outcome;
        }
        else if (outcome === -1){
            computerScore -= outcome;
        }
    }

    if (playerScore > computerScore){
        console.log("You win the game of 5!");
    }
    else if (playerScore < computerScore){
        console.log("You lost the game of 5.");
    }
    else {
        console.log("You tied the game of 5.");
    }
}

game();