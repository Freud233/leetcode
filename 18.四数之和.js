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
var fourSum = function(nums, target) {
  let arr = [0, 1, 2, 3];
  let fourSumArr = [];
  for (let i = 0; i < nums.length - 3; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[arr[0]] + nums[arr[1]] + nums[arr[2]] + nums[arr[3 + j]] == target) {
        fourSumArr.push([nums[arr[0]],nums[arr[1]],nums[arr[2]],nums[arr[j + 3]]])
      }
    }
    arr = arr.map(x => x + 1)
  }
  return fourSumArr
};
// @lc code=end

