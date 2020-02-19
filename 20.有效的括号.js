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
  let bracketLeftOne = 0, bracketLeftTwo = 0, bracketLeftThree = 0;
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case '(':
        bracketLeftOne += 1;
        break;
      case ')':
        bracketLeftOne -= 1;
        break;
      case '[':
        bracketLeftTwo += 1;
        break;
      case ']':
        bracketLeftTwo -= 1;
        break;
      case '{':
        bracketLeftThree += 1;
        break;
      case '}':
        bracketLeftThree -= 1;
      break;
    }
  }
  if (bracketLeftOne || bracketLeftTwo || bracketLeftThree) return false;
  return true;
};
// @lc code=end

