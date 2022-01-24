
/**
 * 方法用于限定
 * @param {*} promiseFuns 
 * @returns 
 */
function promiseLimit(promiseFuns) {
    let iterators = Array.from(promiseFuns).entries();

    let works = Array(3).fill(iterators).map(async (iterator) => {
        for([index, item] of iterators) {
            console.log('test', index, item);
            result[index] = await item();
        }
    });
    return Promise.all(works).then(() => {console.log(result); return result});
}
function testPromiseLimit() {
    let promiseFuns = [];
    let count = 10;
    let result = [];
    while(count--) {
        ((c) => {
            promiseFuns.push(() => {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        console.log(c, new Date())
                        resolve(c);
                    }, c * 500);
                });
            })
        })(count)
    }
    promiseLimit(promiseFuns).then(data => {
        console.log('return data:', data)
    })
}

