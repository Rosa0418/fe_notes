#模拟
1. 项目介绍

2. 浏览器是如何工作的

3. promise

4. 继承


5. 缓存策略

6. 性能优化
从输入url到

7. react fiber，hooks，diff算法

8. css 相关
    a. reflow 和 repaint

    b. 盒模型


// Q: difference between throttle and debounce utils, implementing a throttle funcion
//节流 
var throttle = function(fn, time, immediate) {
    let timer = null;
    return (...args) => {
        if(!timer) {
            if(immediate) {
                fn.apply(...args);
                timer = setTimeOut(() => {
                    timer = null;
                }, time)
            } else {
                timer = setTimeOut(() => {
                    fn.apply(...args);
                    timer = null;
                }, time)
            }
        }
    }
}
            14:45
//props: {getTimeFunc, onTimeCb}

import {useEffect} from 'React';
export default function Timer(props) {
    const {getTimeFunc} = props;
    let [time, setTime] = useState(10);
    let [currTimer, setCurrTimer] = useState();
    
    useEffect(async () => {
        setTimeOut();
        let atTime = await getTimeFunc();
        let time = atTime - Date.getTime();
        if(currTimer){
            clearInterval(currTimer);
            setCurrTimer(null);
        }
        setTime(time);
        let currt = setIterval(() => {
            setTime(time - 1);
        }, 1000);
        setCurrTimer(currt);
    }, [])
    
    
    if(time <=0 ) {
        clearInterval(currTimer);
        setCurrTimer(null);
        onTimeCb && onTimeCb();
    }
        
    return <div>{time}</div>;
    
} 


// 求一个非负整数数组 [1, 23, 400, 241]，自由排列后可拼接成的最大整数值 "400241231"。
var concatMaxNumber = function(nums) {
    if(nums.length === 0 ){return 0}
    
    let res = '';
    nums = nums.sort((a,b) => {
        return Number(String(b) + String(a)) - Number(String(a) + String(b));
    });
    
    return nums.join('');
}

* 一个海盗首领将100枚金币分给5名凶残、贪婪且聪明的海盗，按顺序编号，
* 由第一个海盗提出分配方案，其他海盗（不包括首领）进行投票，
* 半数及以上通过，则他们可以按照分配方案获得金币，否则这名海盗将被处死，
* 由第二个海盗再提出分配方案， 进行投票，依次类推。
* 问 第一名海盗 如何分配可以使自己能够获得更多的金币？


