/**
 * @param {string} s
 * @return {number} maxLen
 * 滑动窗口来解决问题
 * start 和 end 都指向第一个元素
 * 通过map来记录每一个字符是否存在以及存在的最后位置
 * 如果字符在map中不存在，则写进map, 更新maxLen = max(end-start+1, maxLen), end++
 * 若存在，则更新map，重置滑动窗口，start = max(i, map[s[i]])
 */
 var lengthOfLongestSubstring = function(s) {
    let start = end = 0;
    let map = {};
    let maxLen = 1;
    for(let i = 0; i<s.length;i++){
        end = i;
        if(map[s[i]]) {
            start = Math.max(map[s[i]], i);
        } 
        maxLen = Math.max(end-start+1, maxLen);
        map[s[i]] = i;
    }
    return maxLen;
};