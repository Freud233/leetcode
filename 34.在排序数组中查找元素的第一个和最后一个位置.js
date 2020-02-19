/*
 * @lc app=leetcode.cn id=34 lang=javascript
 *
 * [34] 在排序数组中查找元素的第一个和最后一个位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let indexArr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == target) {
      indexArr.push(i)
    }
  }
  if (indexArr == '') return [-1, -1];
  if (indexArr.length == 1) return [indexArr[0], indexArr[0]]
  if (indexArr.length == 2) return indexArr;
  if (indexArr.length > 2) return [indexArr[0], indexArr[indexArr.length - 1]]
};
// @lc code=end

