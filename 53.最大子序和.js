/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let arr = [], sum = 0
  nums.forEach(item => {
    if (sum > 0) sum += item
    else sum = item
    arr.push(sum)
  })
  return Math.max(...arr)
};
// @lc code=end

