function bigNumSum (a, b) {
    let aLen = a.length;
    let bLen = b.length;
    while(aLen>=0 || bLen>=0) {
        if(aLen < 0) {
            a = '0' + a;
        }
        if(bLen <0) {
            b = '0' + b;
        }
        aLen--;
        bLen--;
    }
    let ret = [];
    let carry = 0;
    for(let i=a.length-1;i>=0; i--) {
        let sum = carry + +a[i] + +b[i];
        console.log(sum)
        if(sum>9) {
            carry = 1;
        } else {
            carry = 0;
        }
        ret[i] = (sum) % 10;
    }
    if(carry>0) {
        ret.unshift(1);
    }
    return ret.join('');
}
console.log(bigNumSum('23333333', '9333'))