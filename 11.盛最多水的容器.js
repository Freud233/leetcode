/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let beforeIndex = 0, afterINdex = height.length - 1, area = 0;
    while(beforeIndex < afterINdex) {
      area = Math.max(area, Math.min(height[beforeIndex], height[afterINdex]) * (afterINdex - beforeIndex))
      if (height[beforeIndex] < height[afterINdex]) {
        beforeIndex++;
      } else {
        afterINdex--;
      }
    }
    return area
};
// @lc code=end

