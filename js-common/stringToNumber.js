/**
 * 实现类似于 Number('233) => 233
 * 二进制、八进制、十进制的不同情况，使用正则表达式判断是否存在非数字，如果存在则throw TypeError
 * @param {*} str
 */
function stringToNumber (str) {
	var num = 0,
	maps = {
		'48': 0,
		'49': 1,
		'50': 2,
		'51': 3,
		'52': 4,
		'53': 5,
		'54': 6,
		'55': 7,
		'56': 8,
		'57': 9,
	};
	for(var i=0,len=str.length;i<len;i++){
		var scode = str[i].charCodeAt(0),
	key = scode +'';
		if(scode < 48 || scode > 57) throw new Error('string can not convert number');
		num += maps[key] * Math.pow(10, len - i - 1);
	}
	return num;
}
