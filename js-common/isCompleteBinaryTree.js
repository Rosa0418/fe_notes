// 判断完全二叉树  leetcode - 43
/** 什么是完全二叉树：高度差不超过1，且永远左边是满的 1 2 3 4 5 null 7 非完全二叉树
 * 
 * @param {*} root 
 */
function isCompleteBinaryTree(root) {
    if(root === null ) return true;
    let temp = root;
    let res = [];
    while (temp) {
        res.push(temp.left);
        res.push(temp.right);
        temp = res.shift(); 
    }
    return res.filter(Boolean).length === 0;
}

function Node (val, left, right) {
    this.val = val;
    this.left = left;
    this.right = right;
}

function test () {
    let root = new Node(1);
    // root.left = new Node(2);
    root.right = new Node(3);
    return isCompleteBinaryTree(root);
}

console.log(test())