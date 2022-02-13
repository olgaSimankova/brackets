module.exports = function check(str, bracketsConfig) {

  const bracketsPair = bracketsConfig.reduce(function (previousValue, currentItem) {
    previousValue[currentItem[1]] = currentItem[0];
    return previousValue;
  }, {})

  const openBrackets = bracketsConfig.reduce(function (previousValue, currentItem) {
    previousValue.push(currentItem[0]);
    return previousValue;
  }, [])

  let stack = []

  // const verticalBrQty = str.match(/[|]/g).length ? str.match(/[|]/g).length : 0;
  // let verticalBrCount = 0

  for (let i = 0; i < str.length; i++) {

    let current = str[i]

    if (openBrackets.includes(current)) {
      stack.push(current)
    } else {

      if (stack.length === 0) {
        return false
      }

      let topItem = stack[stack.length - 1]

      if (bracketsPair[current] === topItem) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return stack.length == 0
}