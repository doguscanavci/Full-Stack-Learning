/* Codes Here! */

function isPalindrom(word) {
  word = word.toLowerCase();

  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* Do not delete the lines after this one! */
module.exports = isPalindrom;
