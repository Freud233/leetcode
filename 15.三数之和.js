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
  let resArr = []
  if (nums.length < 3) return resArr
  // 排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    // 长度小于3直接返回
    if (nums[i] > 0) return resArr
    // 左右指针
    let l = i + 1, r = nums.length - 1;
    if (i > 0 && nums[i] == nums[i-1]) continue // 去重
    while (l < r) {
      let result = nums[i] + nums[l] + nums[r]
      if (result === 0) {
        resArr.push([nums[i], nums[l], nums[r]])
        while (nums[l] == nums[l + 1] && l < r) l++ // 去重
        while (nums[r] == nums[r - 1] && l < r) r-- // 去重
        l++
        r--
      } else if (result > 0) {
        r--
      } else if (result < 0) {
        l++
      }
    }
  }
  return resArr
};
// @lc code=end

