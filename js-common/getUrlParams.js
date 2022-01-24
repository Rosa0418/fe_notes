function getUrlParams(url, key) {
    if(typeof url !== 'string') {
        return null;
    }
    let query = url.split('?')[1] || '';
    let items = query.split('&');
    let ret = null;
    items.forEach(q => { // !!!!! forEach 中return数据不管用
        let value = q.split('=');
        if(value[0] === key) {
            ret = value[1];
        }
    })
    return ret;
}

console.log(getUrlParams('http://www.baidu.com?a=1&c=sdsd','c'));