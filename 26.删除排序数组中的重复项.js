/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let slowPointer = 0, fastPointer = 0, arrLength = nums.length;
    while(fastPointer < arrLength) {
      if (nums[slowPointer] == nums[fastPointer]) {
        fastPointer++;
      }else {
        ++slowPointer;
        nums[slowPointer] = nums[fastPointer];
        fastPointer++;
      }
    }
    return slowPointer + 1
};
// @lc code=end

