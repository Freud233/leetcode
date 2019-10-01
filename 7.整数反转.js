/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // 1. 判断 x 是否大于零, 如果小于零 添加 '-' 号
    let symbol = x >= 0 ? '' : '-';
    // 2. 将 x 转换为 字符串
    let strX = x.toString()
    let reverseX = parseInt(symbol + strX.split('').reverse().join(''));
    if ( -Math.pow(2, 31) > reverseX || Math.pow(2, 31) < reverseX) {
      return 0
    }
    return reverseX
};
// @lc code=end

