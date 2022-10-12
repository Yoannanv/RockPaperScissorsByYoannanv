function game() {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let playerTurn = '';
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerNextMove = '';

    if (playerTurn == 'r' || playerTurn == 'Rock') {
        playerTurn = rock;
    } else if (playerTurn == 'p' || playerTurn == 'Paper') {
        playerTurn = paper;
    } else if (playerTurn == 's' || playerTurn == 'Scissors') {
        playerTurn = scissors;
    } else {
        console.log('Invalid Input. Try again ...');
    }
    console.log(`You chose ${playerTurn}`);

    switch (computerRandomNumber) {
        case 1: computerNextMove = rock;
            break;
        case 2: computerNextMove = paper;
            break;
        case 3: computerNextMove = scissors;
            break;
    }
    console.log(`The computer chooses ${computerNextMove}`);

    if ((playerTurn === rock && computerNextMove === scissors) || (playerTurn === paper && computerNextMove === rock) || 
    (playerTurn === scissors && computerNextMove === paper)){
    console.log(`You win!`);
    }else if((playerTurn === rock && computerNextMove === paper) || (playerTurn === paper && computerNextMove === scissors) || 
    (playerTurn === scissors && computerNextMove === rock)){
        console.log(`You lose`);
    }else{
        console.log(`This game was a draw`);
    }
}
game('r')