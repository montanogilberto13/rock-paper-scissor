function computerPlay() {

    const option = ["rock", "paper", "scissor"];
    const randInt = Math.floor(Math.random() * 3);
    //console.log("randInt",randInt)
    return option[randInt];

}


function playRound(playerSelection) {

    let result = '';
    let computerSelection = computerPlay();

    //console.log('result', playerSelection + ' ' + computerSelection)

    //debugger;

    if (playerSelection == computerSelection) {
        result = "Draw"
    }
    if (playerSelection != computerSelection && playerSelection == "rock") {
        if (playerSelection == "rock" && computerSelection == "scissor") {
            result = "Winner Player"
        } else {
            result = "Winner Computer"
        }
    }

    if (playerSelection != computerSelection && playerSelection == "paper") {
        if (playerSelection == "paper" && computerSelection == "rock") {
            result = "Winner Player"
        } else {
            result = "Winner Computer"
        }
    }

    if (playerSelection != computerSelection && playerSelection == "scissor") {
        if (playerSelection == "scissor" && computerSelection == "paper") {
            result = "Winner Player"
        } else {
            result = "Winner Computer"
        }
    }

    document.getElementById('result').innerHTML = result;
    
}