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
