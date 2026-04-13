const factorial = function (num) {
  if (!Number.isInteger(num)) {
    return undefined
  } else {
    if (num >= 0) {
      if (num === 1 || num === 0) {
        return 1
      } else {
        return num * factorial(num - 1)
      }
    }
    else{
        return undefined
    }
  }
}

// Do not edit below this line
module.exports = factorial
