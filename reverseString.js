let phrase = 'Mesmo se este mundo estiver te machucando, você ainda precisa viver nele.';

function reverseString(word) {
    let reversedWord = '';

    for (let i = word.length - 1; i >= 0; i--) {
        reversedWord += word[i];
    }

    return reversedWord;
}

console.log('Frase:', phrase);
console.log('Frase invertida:', reverseString(phrase));