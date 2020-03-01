/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // 如果长度小于 3 返回 []
  if (nums.length < 3) return []
  // 1. nums 排序
  nums.sort()
  let arr = []
  for (let i = 0; i < nums.length; i++) {
    let l = i + 1; r = nums.length - 1 - i;
    if (nums[i] > 0) return arr
    while (l < r) {
      if (nums[l] == nums[i]) l++;
      if (nums[r] == nums[i]) r--;
      if (nums[i] + nums[l] + nums[r] == 0) {
        arr.push([nums[i], nums[l], nums[r]])
        l++;
        r--;
      } else if (nums[i] + nums[l] + nums[r] > 0) {
        r--;
      } else if (nums[i] + nums[l] + nums[r] < 0) {
        l++;
      }
    }
  }
  return arr
};
// @lc code=end

