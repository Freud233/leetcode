/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length == 0) return ''
  let comm = strs[0]
  for (let i = 0; i < strs.length; i++) {
    let j = 0;
    for (;j < comm.length && j < strs[i].length; j++) {
      if (comm[j] != strs[i][j]) {
        break;
      }
    } 
    comm = comm.slice(0, j)
  }
  return comm
};
// @lc code=end

