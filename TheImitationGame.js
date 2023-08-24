function solve(input) {
    let message = input.shift();

    while (input[0] !== 'Decode') {
        let line = input.shift().split('|');
        
        if (line[0] === 'Move') {
            let moves = Number(line[1]);
            let firstpart = message.substring(0,moves);
            let secondpart = message.substring(moves);
            message = secondpart + firstpart;
        }
        else if (line[0] === 'Insert') {
            let index = Number(line[1]);
            let letter = line[2];
            let splittedMessage = message.split('');
            splittedMessage.splice(index,0,letter);
            message = splittedMessage.join('');
        }
        else if (line[0] === 'ChangeAll') {
            let substring = line[1];
            let replacement = line[2];
            message = message.replaceAll(substring,replacement);
           // message = message.split(substring).join(replacement);
        }
    }
    console.log(`The decrypted message is: ${message}`);
}
solve([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode',
  ]
  );