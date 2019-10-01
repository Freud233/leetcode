/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let obj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }
  let sum = 0;
  s.toString().split('').forEach((item, index) => {
    if (obj[item] < obj[s.toString().split('')[index + 1]]) {
      sum -= obj[item]
    } else {
      sum += obj[item]
    }
  })
  return sum
};
// @lc code=end
``
