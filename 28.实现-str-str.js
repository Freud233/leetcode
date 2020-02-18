/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (haystack == needle || needle == '') return 0
  if (needle.length > haystack.length) return -1
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] == needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] != needle[j]) {
          break;
        }
        if (j + 1 === needle.length) return i
      }
    }
  };
  return -1;
}
// @lc code=end

