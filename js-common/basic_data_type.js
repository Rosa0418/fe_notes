/**
 * 还需要深入了解Symbol是什么意思，还不太理解
 */

function knowSymbol () {
	var o = new Object;

	o[Symbol.iterator] = function () {
		var v = 0 ;
		return {
			next: function () {
				return {
					value: v++,
					done: v > 10
				}
			}
		}
	}

	for (const v of o) {
		console.log(v);
	}
}

/**
 * Object 基本数据类型： "属性的集合"，分为数据属性和访问器属性， key-value 结构，key 可以是字符串或者 Symbol 类型
 */

// Number 是数据解析的最佳时间，多数情况下，Number 是比 parseInt 和 parseFloat 更好的选择 （parseInt 会把 0开头的直接当做8进制解析，float会直接把源字符串当做十进制来解析）
/**
 * 字符串到数字的类型转换，存在一个语法结构，类型转换支持十进制、二进制、八进制和十六进制，比如： 30；0b111；0o13；0xFF。此外，JavaScript 支持的字符串语法还包括正负号科学计数法，可以使用大写或者小写的 e 来表示：1e3；-1e-2。
 */
console.log(Number('1e12'));
