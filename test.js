

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
let iterators = Array.from(promiseFuns).entries();

let works = Array(3).fill(iterators).map(async (iterator) => {
    for([index, item] of iterators) {
        console.log('test', index, item);
        result[index] = await item();
    }
});
Promise.all(works).then(() => {console.log(result)});


// for([index, item] of iterators) {
//     console.log(index, item);
//     break;
// }

// for([index, item] of iterators) {
//     console.log(3333, index,item);
//     // break;
// }