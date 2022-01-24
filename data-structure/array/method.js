/**
 * 为什么很多编程语言的数组下标都是从零开始：可能跟内存地址的计算有关，读取数组元素的时候只需要起始地址 + 偏移量即可
 * 什么是线性数据结构：只有前后两种关系
 * 数组：连续的内存空间，用来存储相同数据类型的数据
 * ****** JVM 标记清除垃圾回收算法：不是一个一个去删除，而是等数组没有空间了，将所有标记的需要删除的一次性清除，O(n)
 */

class Node {
	constructor (v) {
		this.value = v;
		this.next = null;
	}

}

// 二维数组： 
var searchValue = function (matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;
    if(!m || !n) {return false}
    // 如果传入一个undefined，会导致循环不能结束。
    if(typeof target !== 'number') {return false}
    
    let right = m*n - 1; // 19
    let left = 0;
    let count = 0;
    while(left <= right && count < 10) {
      let mid = Math.floor(left + (right-left)/2); // 9
      let x = Math.floor(mid / n);
      let y = mid % n;
      console.log(m,n, mid,right, left, x,y);
      let value = matrix[x][y];
      console.log(value, target);
      if(value === target) {
        return true;
      } else if(value < target) {
        left = mid + 1;
      } else if(value > target) {
        console.log('22', value,target)
        right = mid -1;
      }
    //   count++;
    }
    return false;
  }
  
  console.log(searchValue([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 10))