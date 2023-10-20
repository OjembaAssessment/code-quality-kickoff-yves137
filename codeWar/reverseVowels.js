function reverseVowels(string) {
    const vowels = ["a", "e", "i", "o", "u"];
    // create a reversed string array of vowels
    const ReverseVowel = string
      .split("")
      .filter((vowel) => vowels.includes(vowel.toLowerCase()))
      .reverse();
    
    return string
      .split("")
      .map((character) => {
        if (vowels.includes(character.toLowerCase()))
          return ReverseVowel.shift();
        return character;
      })
      .join("");
  }