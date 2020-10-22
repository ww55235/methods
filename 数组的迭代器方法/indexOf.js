let data = [2, 4, 5, 5, 6, 7, 6, 5]
Array.prototype.myIndexOf = function (find, index) {
  //如果传入的参数为1
  if (arguments.length === 1) {
    for (let i = 0, len = this.length; i < len; i++) {
      if (this[i] === find) {
        return i
      }
    }
    return -1
  } else {
    //如果传入的参数是2
    //判断第二个参数是不是负数
    //正数的情况
    if (Math.abs(index) === index) {
      for (let i = index, len = this.length; i < len; i++) {
        if (this[i] === find) {
          return i
        }
      }
      return -1
    } else {
      //负数的情况
      for (let i = this.length + index, len = this.length; i < len; i++) {
        if (this[i] === find) {
          return i
        }
      }
      return -1
    }
  }
}
let res = data.myIndexOf(5, -1)
console.log(res)
