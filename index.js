function sentenceAnalysis(sentence) {
    // Variables
    let lengthCounter = 0;
    let wordCounter = 0;
    let vowelCounter = 0;

    // Helper function to check if a character is a letter
    function isLetter(char) {
        return /[a-zA-Z]/.test(char);
    }

    // Helper function to check if a character is a vowel
    function isVowel(char) {
        return /[aeiouAEIOU]/.test(char);
    }

    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        const character = sentence[i];

        // Check if the character is a letter or space
        if (isLetter(character) || (character === ' ' && sentence[i - 1] !== ' ')) {
            // Increment word counter when a new word starts
            if (character === ' ' && sentence[i - 1] !== ' ') {
                wordCounter++;
            }

            // Increment vowel counter if the character is a vowel
            if (isVowel(character)) {
                vowelCounter++;
            }

            // Increment the length counter
            lengthCounter++;
        }
    }

    // Display the results
    console.log("Length of the sentence:", lengthCounter);
    console.log("Number of words:", wordCounter);
    console.log("Number of vowels:", vowelCounter);
}

// Example usage
const inputSentence = "This is a sample sentence.";
sentenceAnalysis(inputSentence);
