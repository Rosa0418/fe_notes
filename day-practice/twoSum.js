/**
 * 实现两个数相加
 * @param {number} a
 * @param {number} b
 * @return {number}
 * 最终的和为， a^b以及进位值相加， 以下面为例，a: 6(二进制110)，b:2(二进制010)
 * 110
// 010

// 100
// 100

// 0000
// 1000

// 1000
// 0000

// 1000 最终结果

 */
 var add = function(a, b) {
     // 递归实现
    // if(b ==0) {return a;}
    // return add(a^b, (a&b) << 1);
    // 非递归实现。
    while(b!==0) {
        let c = (a&b) << 1;
        a = a^b;
        b = c;
    }
    return a;
};

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    // let ret = 1;
    // let y = Math.abs(n);
    // while(y>0) {
    //     ret =ret * x;
    //     y--;
    // }
    // return n>0 ? ret : 1/ret;
    if(n === 0) {return 1}
    if(n===1){return x}
    if(n===-1){return 1/x}

    function isOdd (k) {
        return !(k % 2);
    }
    let tmp = n;
    let privot = Math.floor(tmp / 2);
    let subPow = myPow(x, privot);
    let ret= isOdd(n) ? subPow * subPow : subPow * subPow * x;
    return ret;
};