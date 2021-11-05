/**
 * for in，Object.keys，for of 的区别
 * https://juejin.cn/post/6844903621444763661
 * @param {*} value 
 * @returns 
 */
function cloneObject(value) {
    if (isPrimitiveValue(value)) {
      return value
    }
  
    let result;
  
    if (typeof value === 'function') {
      result = eval(`(${value.toString()})`)
    } else if (Array.isArray(value)) {
      console.log('=======2222=', 123456768)
      result = []
    } else if (value instanceof RegExp) {
      result = new RegExp(value)
    } else if (value instanceof Date) {
      result = new Date(value)
    } else if (value instanceof Number) {
      result = new Number(value)
    } else if (value instanceof String) {
      result = new String(value)
    } else if (value instanceof Boolean) {
      console.log('is Boolean', value);
      result = new Boolean(value.valueOf())
    } else if (typeof value === 'object') {
      result = new Object()
    }
  
    // for (let key in value) {
    //     console.log('========', key)
    //   if (value.hasOwnProperty(key)) {
    //     try {
    //       result[key] = cloneObject(value[key])
    //     } catch (error) {
    //       // console.error(error)
    //     }
    //   }
    // }
    console.log('value before', value, Object.entries(value))
    for(let [key, val] of Object.entries(value)) {
      try {
        console.log('key, val', key, val)
        result[key] = cloneObject(val)
      } catch (error) {
        // console.error(error)
      }
    }
  
    return result
  }
  
   
  function isPrimitiveValue(value) {
    if (
      typeof value === 'string' ||
      typeof value === 'number' ||
      value == null ||
      typeof value === 'boolean' ||
      Number.isNaN(value)
    ) {
      console.log('is primitive')
      return true
    }
  
    return false
  }
  
  let value = function (a, b) {
        return a+b;
  }

  // let cloneValue = cloneObject(value)
  value = function (a, b) {
    return a+b + 1;
}
//   console.log(cloneValue.toString(), value.toString())

  let array = [23456, 42345675];
  console.log(array, cloneObject(array))