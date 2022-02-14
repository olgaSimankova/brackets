module.exports = function check(str, bracketsConfig) {
  let bracketsPair = {}, openBrackets = []
  bracketsConfig.map(item => {
    bracketsPair[item[1]] = item[0];
    openBrackets.push(item[0]);
  })
  console.log(bracketsPair)
  let stack = []

  for (let i = 0; i < str.length; i++) {
    let current = str[i]

    if (stack[stack.length - 1] == current && bracketsPair[current] == current) stack.pop();
    else if (openBrackets.includes(current)) {
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