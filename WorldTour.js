function solve(input) {

    let startState = input.shift();
    while (input[0] != 'Travel') {
        let command = input.shift().split(':');
        if (command[0] == 'Add Stop') {
            startState = startState.split('')
            let index = Number(command[1]);
            let city = command[2];

            if (index >= 0 && index <= startState.length) {
                startState.splice(index, 0, city);
                startState = startState.join('');
                console.log(startState);
            }


        } else if (command[0] == 'Remove Stop') {
            startState = startState.split('')
            let startIndex = Number(command[1]);
            let endIndex = Number(command[2]);
            if ((startIndex >= 0 && endIndex <= startState.length) && (endIndex >= 0 && endIndex <= startState.length)) {
                startState.splice(startIndex, endIndex - startIndex + 1);
                startState = startState.join('');
                console.log(startState);
            }

        } else if (command[0] == 'Switch') {
            let oldCity = command[1];
            let newCity = command[2];

            if (oldCity !== newCity) {
                startState = startState.replace(oldCity, newCity)
            }
            console.log(startState);
        }
    }
    console.log(`Ready for world tour! Planned stops: ${startState}`);
}
solve(["Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch:Hawai:Bulgaria",
    "Travel"]);