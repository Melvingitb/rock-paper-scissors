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
        return 'Tie!';
    }
    else if (player === "Rock" && computer === "Scissors"){
        return `You Win! ${player} beats ${computer}`;
    }
    else if (player === "Scissors" && computer === "Paper"){
        return `You Win! ${player} beats ${computer}`;
    }
    else if (player === "Paper" && computer === "Rock"){
        return `You Win! ${player} beats ${computer}`;
    }
    else{
        return `You Lose! ${computer} beats ${player}`;
    }
}

console.log(playRound('rock', 'Scissors'));