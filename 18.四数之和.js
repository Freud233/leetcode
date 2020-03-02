/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  if (nums.length < 4) return []
  let fourSumArr = []
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = i + 1; j < nums.length - 2; j++) {
      let l = j + 1, r = nums.length - 1
      while (l < r) {
        if (nums[i] + nums[j] + nums[l] + nums[r] === target) {
          fourSumArr.push([nums[i], nums[j], nums[l], nums[r]])
          // 如果第三与它后一位数字相同, 那么就跳过, 去重
          while (l < r && nums[l] === nums[++l]) { }
          while (l < r && nums[r] === nums[--r]) { }
          l++
          r--
        } else if (nums[i] + nums[j] + nums[l] + nums[r] < target) {
          l++
        } else if (nums[i] + nums[j] + nums[l] + nums[r] > target) {
          r--
        }
      }
    }
  }
  return fourSumArr
};
// @lc code=end

