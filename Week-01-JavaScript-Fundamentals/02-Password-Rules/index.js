/* Codes Here! */

function resetNeeded(passwords) {
  let result = [];

  for (let i = 0; i < passwords.length; i++) {
    let password = passwords[i];
    if (password.length < 8) {
      result.push(password);
    } else if (password === password.toLowerCase()) {
      result.push(password);
    } else if (password === password.toUpperCase()) {
      result.push(password);
    }
  }
  return result;
}

/* Do not delete the lines after this one! */
module.exports = resetNeeded;
