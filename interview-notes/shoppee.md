一面
1. 链表反转
    ```
    function Node (val, next) {
        this.val = val;
        this.next = next;
    }

    function revertList(root) {
        if(!root) {return root};
        let p = root;
        let q = root.next;  // 新链表 head 节点
        p.next = null;
        while (q) {
            let tmp = q.next;
            q.next = p;
            p = q;
            q = tmp;
        }
        return p;
    }
    ```
2. 实现 Math.pow(x,y): 二分法
- 思路：考虑y是0的情况，y是负数的情况，y是奇数，偶数 （leetcode 50）
```


```
3. webpack：



4. react：
    - react 是怎么渲染的？
    - 虚拟dom有什么好处？

5. redux是什么东西？有哪些好处，单项数据流和双向数据流？

6. 安全：
- csrf: cookie 是怎么拿到的，难道不会受同源策略的影响
    根据我上文所说，那么这里存在一个问题：cookie也是受到同源策略限制的，两个不同源的网站其中一个应该是不会让另一个获得自己的cookie的，那为什么CSRF攻击仍然有效？
    除了跨域 XHR 请求情况下，浏览器在发起请求的时候会把符合要求的 cookie 自动带上 (涉及：域名，有效期，路径，secure 属性)
    跨域 XHR 的请求的情况下，也可以携带 cookie
    浏览器允许跨域提交表单
- xss

# 二面
1. 打印出来
    - 思路：虽然说所有实例都共享一个原型引用，但是在new一个对象出来的时候实际上给这个对象的原型是当时的引用，所以在new之后动态改变函数的原型，并不会修改原来已经new出来的对象的原型，只会修改之后new出来的对象的原型的引用。
    ```
    function A() {

    }

    A.prototype.n = 1;
    let a = new A();

    A.prototype = {
        n:3,
        m:4
    }
    let b = new A();

    console.log(a.n);  // 1
    console.log(a.m)   // undefined
    console.log(b.n)   // 3
    console.log(b.m)   // 4

    ```

2. 打印结果 （事件循环：https://segmentfault.com/a/1190000017078299）
    - macro-task: script (整体代码)，setTimeout, setInterval, setImmediate, I/O, UI rendering. 
    - micro-task: process.nextTick, Promise(原生)，Object.observe，MutationObserver
   -  优先级： promise.Trick()>promise的回调>setTimeout>setImmediate
    - 分析方法
        - 主栈：a c g h j d i e b f k   // 最终的输出结果
        - 微任务：d i e  // 注意：i在e的前面
        - 宏任务：f k

    ```
    async  function async1() {
        console.log('a');
        setTimeout(() => {
            console.log('k')
        }, 0)
        await async2();
        console.log('b')

    }
    async function async2() {
        console.log('c');
        return new Promise((resolve, reject) => {
            resolve();
        }).then(d => {
            console.log('d');
        })
        .then(d => {
            console.log('e');
        })

    }
    setTimeout(() => {
        console.log('f')
    }, 0)

    async1()
    console.log('g')
    new Promise((resolve, reject) => {
            console.log('h')
            resolve();
        }).then(d => {
            console.log('i');
        })

    console.log('j');
    ```

3. 多个请求，保证顺序输出的前提下，满足下面的条件
req1: 5ms
req2: 10ms
结果是5ms后输出req1，10ms后输出 req2；
req1: 10ms
req2: 5ms
结果是10ms后输出req1， req2；

4. 排列的所有结果（此类问题都是使用的回溯算法）；[1,2,3],输出：[[1], [2], [3], [1,2], [2,1] .... ] 
```
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let track = [];
    let result = [];
    backTrack(nums, track, result);
    return result
};
var backTrack = function(nums, track, result) {
    result.push([...track]);
    
    for(let i=0; i<nums.length; i++) {
        if(track.includes(nums[i])){
            continue;
        }
        track.push(nums[i]);
        backTrack(nums, track, result);
        track.pop(nums[i]);
    }
}
```