function solve(input) {

    let waitingPeoples = Number(input.shift());
    let wagons = input.shift().split(' ');

    for (let i = 0; i < wagons.length; i++) {
        if (waitingPeoples < 0) {
            break;
        }

        let currentWagon = Number(wagons[i]);

        if (currentWagon <= 4) {
            let peoplesToPut = 4;

            if (waitingPeoples < 4) {
                wagons[i] = waitingPeoples;
            }
            else {
                wagons[i] = peoplesToPut;
            }
            waitingPeoples -= (4 - currentWagon);
            
        }
    }
    if (waitingPeoples < 0) {
        waitingPeoples = 0
    }
    if (waitingPeoples > 0) {
        console.log(`There isn't enough space! ${waitingPeoples} people in a queue!`);
        console.log(wagons.join(' '));
    }
    else if (waitingPeoples === 0 && wagons[wagons.length - 1] === 4) {
        console.log(wagons.join(' '));
    }
    else {
        console.log('The lift has empty spots!');
        console.log(wagons.join(' '));
    }
}
solve(
    [
        "15",
        "0 0 0 0 0"
    ]
);
console.log('---------------');
solve([
    "20",
    "0 2 0"
]
)