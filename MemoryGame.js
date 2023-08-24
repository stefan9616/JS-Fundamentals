function solve(input) {

    let elements = input.shift().split(' ');
    let movesCounter = 0

    while (input[0] != 'end') {
        if (elements.length == 0) {
            break;
        }
        movesCounter++;
        let twin = input.shift().split(' ');
        let firstIndex = Number(twin[0]);
        let secondIndex = Number(twin[1]);

        if (firstIndex < 0 || secondIndex < 0) {
            console.log('Invalid input! Adding additional elements to the board');
            let addElement = `-${movesCounter}a`
            elements.splice(movesCounter * 2, 0, addElement);
            elements.splice(movesCounter * 2, 0, addElement);
            continue;
        }

        if (firstIndex > secondIndex) {
            let temp = firstIndex;
            firstIndex = secondIndex;
            secondIndex = temp;
        }

        if (elements[firstIndex] == elements[secondIndex]) {
            console.log(`Congrats! You have found matching elements - ${elements[firstIndex]}!`);
            elements.splice(firstIndex, 1);
            elements.splice(secondIndex - 1, 1);
        }

        else if (elements[firstIndex] != elements[secondIndex]) {
            console.log('Try again!');
        }

    }
    if (elements.length == 0) {
        console.log(`You have won in ${movesCounter} turns!`);
    }
    else {
        console.log('Sorry you lose :(');
        console.log(elements.join(' '));
    }
}
solve([
    "a 2 4 a 2 4",
    "4 0",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
);
console.log('------------');
solve([
    "1 1 2 2 3 3 4 4 5 5",
    "1 0",
    "-1 0",
    "1 0",
    "1 0",
    "1 0",
    "end"]
);
console.log('-------------');
solve([
    "a 2 4 a 2 4", 
    "0 3", 
    "0 2",
    "0 1",
    "0 1", 
    "end"
    ]
    )
