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
var longestCommonPrefix = function(strs) {
  if (strs.length == 0) return ''
  let comm = strs[0].split('')
  for (let i = 0; i < comm.length; i++) {
    strs.forEach((item, index) => {
      if (item.indexOf(comm[i]) != -1) {
        comm = item.slice(0, index)
      }
    })
  }
  return comm
};
// @lc code=end

