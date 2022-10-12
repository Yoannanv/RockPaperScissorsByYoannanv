function game(index) {
    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let playerTurn = index;
    let computerRandomNumber = Math.floor(Math.random() * 3) + 1;
    let computerNextMove = '';

    if (playerTurn == 'r' || playerTurn == 'rock') {
        playerTurn = rock;
    } else if (playerTurn == 'p' || playerTurn == 'paper') {
        playerTurn = paper;
    } else if (playerTurn == 's' || playerTurn == 'scissors') {
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
    console.log(`\x1b[33m You win! \x1b[0m`); //' Welcome to the app! '
    }else if((playerTurn === rock && computerNextMove === paper) || (playerTurn === paper && computerNextMove === scissors) || 
    (playerTurn === scissors && computerNextMove === rock)){
        console.log(`You lose`);
    }else{
        console.log(`\x1b[33m This game was a draw \x1b[0m`);
    }
}
game('p')