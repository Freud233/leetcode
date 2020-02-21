/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
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
        if (bracketArr[bracketArr.length - 1] == '(') {
          bracketArr.pop()
        } else {
          return false;
        }
        break;
      case '[':
        bracketLeftTwo += 1;
        bracketArr.push('[')
        break;
      case ']':
        bracketLeftTwo -= 1;
        if (bracketArr[bracketArr.length - 1] == '[') {
          bracketArr.pop()
        } else {
          return false
        }
        break;
      case '{':
        bracketLeftThree += 1;
        bracketArr.push('{')
        break;
      case '}':
        bracketLeftThree -= 1;
        if (bracketArr[bracketArr.length - 1] == '{') {
          bracketArr.pop()
        } else {
          return false
        }
        break;
    }

  }
  if (bracketLeftOne || bracketLeftTwo || bracketLeftThree) return false;
  if (bracketArr == '') return true
};
// @lc code=end

