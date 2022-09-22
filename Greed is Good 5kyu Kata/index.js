function score(dice) {
  const occurrences = dice.reduce(function (acc, curr) {
    return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
  }, {});

  let score = [];
  const entries = Object.entries(occurrences);

  for (let [key, value] of entries) {
    if (key == 1) {
      if (value == 3) {
        score.push(1000);
      }
      if (value == 4) {
        score.push(1100);
      }
      if (value == 1) {
        score.push(100);
      }
      if (value == 2) {
        score.push(200);
      }
    } else {
      score.push(0);
    }
    if (key == 2) {
      if (value == 3) {
        score.push(200);
      }
    } else {
      score.push(0);
    }
    if (key == 3) {
      if (value == 3) {
        score.push(300);
      }
      if (value == 5) {
        score.push(300);
      }
    } else {
      score.push(0);
    }
    if (key == 4) {
      if (value == 3) {
        score.push(400);
      }
    } else {
      score.push(0);
    }
    if (key == 5) {
      if (value == 3) {
        score.push(500);
      }
      if (value == 4) {
        score.push(550);
      }
      if (value == 1) {
        score.push(50);
      }
    } else {
      score.push(0);
    }
    if (key == 6) {
      if (value == 3) {
        score.push(600);
      }
    } else {
      score.push(0);
    }
  }

  const totalScore = score.reduce((acc, cur) => acc + cur, 0);
  console.log(totalScore);
}
score([3, 1, 3, 1, 2]);
