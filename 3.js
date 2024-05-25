function rollDie() {
    return Math.floor(Math.random() * 6) + 1; 
}

function rollUntilThree() {
    let rolls = 0;
    while (true) {
        rolls++;
        const rollResult = rollDie();
        console.log(`Roll ${rolls}: ${rollResult}`);
        if (rollResult === 3) {
            return rolls;
        }
    }
}

function playGame() {
    const rollsA = rollUntilThree();
    const rollsB = rollUntilThree();

    if (rollsA < rollsB) {
        console.log(' A wins!');
    } else if (rollsA > rollsB) {
        console.log(' B wins!');
    } else {
        console.log('It\'s a tie!');
    }
}


