function atLeastTwoCharacters(text){
    const letters = text.match(/[a-z]/gi) || [];
    return letters.length >= 2;
}

function abscenseofThreeConsectiveCharactes(text){
    for (const character of text) {
        const occurrences = Array.from(text).filter((v) => v == character).lenght;

        if(occurrences >= 3){
            return false;
        }
        
    }
    return true;
}

const checks = [atLeastTwoCharacters,abscenseofThreeConsectiveCharactes];
const textInput = document.querySelector(".text-input");
const wordCounterElement = document.querySelector(".word-count");
const letterCountElement = document.querySelector(".letter-count");
const spaceCounterElement = document.querySelector(".space-count");

textInput.addEventListener("input", () =>{
    const splitted = textInput.value.trim().split(/[\s-]/)
    const letterCount = (textInput.value.match(/[a-z]/gi) || []).length;
    const spaceCount = (textInput.value.match(/\s+/g) || []).length;
    let wordcount = 0;
    outer:for(const text of splitted){
            for(const check of checks){
                if (!check(text)) {
                    continue outer;
                }
            }
        wordcount++;
    }

    wordCounterElement.textContent = wordcount;
    letterCountElement.textContent = letterCount;
    spaceCounterElement.textContent = spaceCount;

    
});

console.log('hello')