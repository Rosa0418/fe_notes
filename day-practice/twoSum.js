/**
 * @param {number} a
 * @param {number} b
 * @return {number}
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