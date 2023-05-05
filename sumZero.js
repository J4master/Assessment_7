function addToZero(arr) {
    const seen = {}

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i]
      if (seen[-num]) {
        return true
      }
      seen[num] = true
    }
    return false
  }

console.log("Array 1:", addToZero([]))
console.log("Array 2:", addToZero([1]))
console.log("Array 3:", addToZero([1, 2, 3]))
console.log("Array 4:", addToZero([1, 2, 3, -2]))
///////////////////////////////////////////////////////////////////////////////

function hasUniqueChars(word) {
    const seen = {}
  
    for (let i = 0; i < word.length; i++) {
      const char = word[i]
      if (seen[char]) {
        return false
      }
      seen[char] = true
    }
    return true
  }

console.log("Monday:", hasUniqueChars("Monday"))
console.log("Moonday:", hasUniqueChars("Moonday"))
console.log("Tuesday:", hasUniqueChars("Tuesday"))
console.log("Tooosday:", hasUniqueChars("Tooosday"))
///////////////////////////////////////////////////////////////////////////////////

function isPangram(sentence) {
    const seen = {}
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i].toLowerCase()
      if (/[a-z]/.test(char)) {
        seen[char] = true;
      }
    }
    return Object.keys(seen).length === 26;
  }

console.log("abcdefghijklmnopqrstuvwxyz:", isPangram("abcdefghijklmnopqrstuvwxyz"))
console.log("The quick brown fox jumps over the lazy dog:", isPangram("The quick brown fox jumps over the lazy dog!"))
console.log("I like cats, but not mice:", isPangram("I like cats, but not mice"))
console.log("Waltz, bad nymph, for quick jigs vex:", isPangram("Waltz, bad nymph, for quick jigs vex."))
console.log("why you did this:", isPangram("why you did this"))
//////////////////////////////////////////////////////////////////////////////////////////

function findLongestWord(words) {
    let maxLength = 0
    for (let i = 0; i < words.length; i++) {
      const word = words[i]
      if (word.length > maxLength) {
        maxLength = word.length
      }
    }
    return maxLength
  }

console.log(findLongestWord([]))
console.log(findLongestWord(["hi", "hello"]))
console.log(findLongestWord(["kiwi", "pineapple", "peach", "mango"]))
console.log(findLongestWord(["pizza", "boy", "Pneumonoultramicroscopicsilicovolcanoconiosis"]))
///////////////////////////////////////////////////////////////////////////////////////////////////////////