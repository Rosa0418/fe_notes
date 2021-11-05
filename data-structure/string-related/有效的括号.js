/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    let inmap={
        '(': ')',
        ')': '(',
        '{': '}',
    }
    if(!s) return false;
    if(s && !inmap[s[0]]) return false;
    let stack = [s[0]];
    
    let outmap = {
        '}': '{',
        '[': ']',
        ']': '['
    };
    let i = 1;
    while(stack.length>0) {
        if(outmap[s[i]]) {
            let c = stack.pop();
            if(outmap[s[i]] !== c) return false;
        }
        if(inmap[s[i]]) {
            stack.push(s[i]);
        }
        i++
    }
    return true;
};
// 三数之和：也是两个指针的问题，i, left, right(在数组队尾)

var threeSum = function (nums) {
    if(Array.isArray(nums) || nums.length <= 1) return [];

    let i = 0, left=1, right = nums.length -1;
    let res = [];
    nums = nums.sort(); // 升序排列
    while(i < nums.length -2) {
        let target = -nums[i];
        while(left<right && (nums[left] + nums[right]) < target) {
            left++;
        }
        while(left<right && (nums[left] + nums[right]) > target) {
            right--;
        }
        if((nums[left] + nums[right]) === target) {
            res.push([nums[i], nums[left], nums[right]]);
        }
        i++;
    }
}

// 翻转二叉树的逻辑
/**
 * 1. 确定root该做什么，什么时候做（是在前中后序的哪个位置）
 * 2. 子节点递归的使用相同的方法
 * 
 */

const traverse = function() {
    if(!root) return root;
    traverse(root.left);
    traverse(root.right);

    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
}

/**
 *  二叉树拉平成链表
 */

 const flatten = function() {
    if(!root) return root;
    
    flatten(root.left);
    flatten(root.right);

    let right = root.right;
    root.right = root.left;
    root.left = null; //！！！一定要清空
    let p = root;
    while(p.right) {
        p = p.right;
    }
    p.right = right;
    
    return root;
}
/**
 * 按照数组构造最大二叉树： [3,2,1,6,0,5]
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right);
}

TreeNode.prototype.preTraverse = function(node) {
    if(!node) {
        return null;
    }
    let nums = [];
    let stack = [node];
    while(stack.length){
        let curr = stack.pop();
        nums.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }
    return nums;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums, start, end) {
    if(nums.length === 0) {return null}
    let privot = findMax(nums, start, end);
    let left = null;
    let right = null;
    if(privot-start>0) {
        left = constructMaximumBinaryTree(nums, start, privot-1);
    }
    if(end-privot>0) {
        right = constructMaximumBinaryTree(nums, privot+1, end);
    }
    return new TreeNode(nums[privot], left, right);
};
var findMax = function(nums, start, end){ // 返回最大值的下标
    let maxValue = nums[start];
    let index = start;
    for(let i=start; i<=end; i++) {
        if(nums[i]>maxValue) {
            maxValue = nums[i];
            index = i;
        }
    }
    return index;
}
// let nodeValue = constructMaximumBinaryTree([3,2,1,6,0,5], 0, 5);
// console.log(nodeValue.preTraverse(nodeValue))
/**
 * BST 中序遍历是有序的
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    if(!root) return -1;
    let temp = 0;
    let value;
    var search = function(currNode) {
        search(currNode.left);
        if(temp++ === k){return currNode}
        search(currNode.right);
        return  -1;
    }
    return search(root);
};

/**
 * BST 变成累加树 （https://leetcode-cn.com/problems/convert-bst-to-greater-tree/solution/yi-tao-quan-fa-shua-diao-nge-bian-li-shu-de-wen-5/）
 * 
 * 103：锯齿形遍历
 * 
 * 二叉树的右视图  
 * 
 * 1
 */ 

