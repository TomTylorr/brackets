module.exports = function check(str, bracketsConfig) {
  let openBrackets = [],
    bracketsPair = {},
    stack = [];

  bracketsConfig.forEach(index => {
    openBrackets.push(index[0]);
    bracketsPair[index[1]] = index[0];
  })


  for (let i = 0; i < str.length; i++) {
    let currentSymbol = str[i];

    if (openBrackets.includes(currentSymbol)) {
      if (currentSymbol === stack[stack.length - 1] && stack[stack.length - 1] === '|' ||  stack[stack.length - 1] === '7' || stack[stack.length - 1] === '8') {
        stack.pop();
      } else {
      	stack.push(currentSymbol);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }

      let topElement = stack[stack.length - 1];
      

      if (bracketsPair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}

