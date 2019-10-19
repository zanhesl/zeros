module.exports =
  function zeros(expression) {
    expression = expression.split(`*`);
    let fives = 0;
    let zeros = 0;
    let onlyOdds = true;
    for (let number of expression) {
      if (number.slice(-2) == `!!`) {
        if (!(+number.slice(0, number.length - 2) % 2)) {
          onlyOdds = false;
        }
        for (let i = +number.slice(0, number.length - 2); i > 0; i -= 2) {
          if (!(i % 5)) {
            let num = i;

            while (!(num % 5)) {
              fives++;
              num /= 5;
            }
          }
        }
      } else {
        onlyOdds = false;
        let num = +number.slice(0, number.length - 1);
        while (num > 0) {
          num = Math.floor(num / 5)
          zeros += num;
        }
      }
    }

    if (onlyOdds) {
      return 0;
    }

    return fives + zeros;
  }
