

function getComputerChoice()
{
    let choice = Math.floor(Math.random() * 3) 
    return choice === 0 ? "rock" : choice === 1 ? "paper" : choice === 2 ? "scissor" : null
}

function playRound(playerChoice)
{
    const computerChoice = getComputerChoice();
    let winner = 1;
    let winText;
    
    if( playerChoice.toLowerCase() == "rock" && computerChoice == "scissor" ||
        playerChoice.toLowerCase() == "paper" && computerChoice == "rock" ||
        playerChoice.toLowerCase() == "paper" && computerChoice == "rock") 
    {
        winner = 0; 
    }  else if(playerChoice.toLowerCase() === computerChoice)
    {
        winner = 2;
    }

    switch(winner)
    {
        case 0 :
            winText = "You won! " + playerChoice.toLowerCase() + " beats "  + computerChoice + "!";
            break;
        case 1 :
            winText = "You lost! " + computerChoice + " beats "  + playerChoice.toLowerCase() + "!";
            break;
        case 2 :
            winText = "It's a draw! You both chose: " + computerChoice + "!";  
            break;
    } 
    console.log(winText);
}
