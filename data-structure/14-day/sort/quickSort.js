/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let len = nums.length;
    let left = 0;
    let right = 0;

    while(right < len) {
        if(nums[right] !== 0) {
            swap(nums, left, right);
            left++;
        } 
        right++;
    }
};
var swap = function (nums, i, j) {
    if(nums.length === 0) return;
    let temp = nums[i];
    nums[i]=nums[j];
    nums[j]=temp;
}

function twoSums () {
    
}
/**
 *   给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。s = "()[]{}" true; s = "([)]" false。然后又让给括号加上嵌套优先级，不符合优先级返回false
 * 
 */

