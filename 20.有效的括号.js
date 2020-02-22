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
  let obj = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  let arr = [];
  for (let i of s) {
    let item = arr.length > 0 ? arr[arr.length - 1] : null
    if (obj[i] === item) {
      arr.pop()
    } else {
      arr.push(i)
    }
  }
  return 0 === arr.length
};
// @lc code=end

