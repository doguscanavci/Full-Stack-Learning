/* Codes Here! */

function myCharacter(answers) {
  let total = 0;

  for (let i = 0; i < answers.length; i++) {
    // Question 1
    if (i === 0) {
      if (answers[i] === 'a') total = total + 20;
      else if (answers[i] === 'b') total = total + 10;
      else total = total + 5;
    }

    // Question 2
    else if (i === 1) {
      if (answers[i] === 'a') total = total + 10;
      else if (answers[i] === 'b') total = total + 5;
      else total = total + 20;
    }

    // Question 3
    else if (i === 2) {
      if (answers[i] === 'a') total = total + 5;
      else if (answers[i] === 'b') total = total + 20;
      else total = total + 10;
    }

    // Question 4
    else if (i === 3) {
      if (answers[i] === 'a') total = total + 5;
      else if (answers[i] === 'b') total = total + 10;
      else total = total + 20;
    }

    // Question 5
    else if (i === 4) {
      if (answers[i] === 'a') total = total + 10;
      else if (answers[i] === 'b') total = total + 20;
      else total = total + 5;
    }
  }

  if (total >= 80) {
    return 'Brave';
  } else if (total >= 50) {
    return 'Thoughtful';
  } else {
    return 'Lovely';
  }
}

/* Do not delete the lines after this one! */
module.exports = myCharacter;
