async function sleep(delay) {
    return new Promise((resolve, reject) => {
        console.log('====')
        setTimeout(resolve, delay)
    })
}

async function test() {
    for(let i=0;i<5;i++) {
        await sleep(1000);
        console.log('+++++')
    }
}
test()

/*
*Gets the value at path of object. If the resolved value is undefined, the defaultValue is returned in its place
* @param (Object) object
* @param (String|Array) path
* @param (any | undefined) defaultValue
* @return (any) value
*/
function _get(object, path, defaultValue) {
  if (!object || !path) {
      return object || defaultValue
  }
  let pathArr = path;
  if (typeof path === 'string') {
      pathArr = path.replace('[', '.').replace(']', '').split('.');
  }  
  let currentObj = object;
  for(let i=0; i < pathArr.length; i++) {
    const key = pathArr[i];
    if (typeof currentObj === 'object' && currentObj) {
      currentObj = currentObj[key];
    } else {
      break;
    }
  }
  if (currentObj === undefined) {
    return undefined;
  } else {
    return currentObj || defaultValue;
  }
}


var object = { 'a': [{ 'b': { 'c': 3 } }] };
_get(object, 'a[0].b.c');
// => 3
 
_get(object, ['a', '0', 'b', 'c']);
// => 3
 
_get(object, 'a.b.c', 'default');
// => 'default'


var node = function(val) {
  this.value = val;
  this.next = null;
  this.pre = null;
}
node.prototype.setNext = function(n) {
	this.next = n;
}
node.prototype.setPre = function(n) {
	this.pre = n;
}
/**
* @param {number} capacity
*/
var LRUCache = function(capacity) {
  this.cache = new Map();
  this.visitList = new Node(null);
  this.capacity = capacity;
};
/**
* @param {number} key
* @return {number}
*/
LRUCache.prototype.get = function(key) {
  const target = this.cache.get(key);
  if (target || target == 0) {
    const newNode = new Node(key);
    newNode.setPre(this.visitList);
    this.visitList.setNext(newNode);
    return target;
  } else {
    return -1;
  }
};
/**
* @param {number} key
* @param {number} value
* @return {void}
*/
LRUCache.prototype.put = function(key, value) {
  if (this.cache.length < this.capacity) {
    const target = this.cache.get(key);
    if (!target) {
      const newNode = new Node(key);
      newNode.setPre(this.visitList);
      this.visitList.setNext(newNode);
      this.cache.put(key, {
        value: value,
        node: newNode
      });
    } else {
      const n = target.node;
      n.pre.setNext(n.next);
      n.next.setPre(n.pre);
      const newNode = new Node(key);
      newNode.setPre(this.visitList);
      this.visitList.setNext(newNode);
      this.cache.put(key, {
        value: value,
        node: newNode
      });
    }
} else {
  const lastNode = this.visitList.pre;
  this.cache.delete(lastNode.value);
  if (!target) {
    const newNode = new Node(key);
    newNode.setPre(this.visitList);
    this.visitList.setNext(newNode);
    this.cache.put(key, {
      value: value,
      node: newNode
    });
  } else {
    const n = target.node;
    n.pre.setNext(n.next);
    n.next.setPre(n.pre);
    const newNode = new Node(key);
    newNode.setPre(this.visitList);
    this.visitList.setNext(newNode);
    this.cache.put(key, {
      value: value,
      node: newNode
    });
  }
}
};

