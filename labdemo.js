function solve(text) {

    let tokens = text.split(' ');
    let modernWords = [];
    let finalWords = [];

    for (let token of tokens) {

        if (token.startsWith('#')) {
            if (token.length > 1) {
                modernWords.push(token);
            }
        }
    }
    for (let word of modernWords){
    let splittedModernWords = word.split('');
    let finalWord = word.slice(1);
    finalWords.push(finalWord);
    }
    console.log(finalWords.join('\n'));
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia')