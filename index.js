var isValid = function (s) {
  let bracketLeftOne = 0, bracketLeftTwo = 0, bracketLeftThree = 0, bracketArr = [];
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        bracketLeftOne += 1;
        bracketArr.push('(')
        break;
      case ')':
        bracketLeftOne -= 1;
        if (bracketArr[bracketArr.length - 1] == '(') bracketArr.pop()
        break;
      case '[':
        bracketLeftTwo += 1;
        bracketArr.push('[')
        break;
      case ']':
        bracketLeftTwo -= 1;
        if (bracketArr[bracketArr.length - 1] == '[') bracketArr.pop()
        break;
      case '{':
        bracketLeftThree += 1;
        bracketArr.push('{')
        break;
      case '}':
        bracketLeftThree -= 1;
        if (bracketArr[bracketArr.length - 1] == '{') bracketArr.pop()
        break;
    }
  }
  if (bracketLeftOne || bracketLeftTwo || bracketLeftThree) return false;
  if (bracketArr == '') return true
};
console.log(isValid("()"));
