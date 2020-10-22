Array.prototype.mySort = function (cb) {
  let flag = true
  let temp = null
  let result

  // function fun(context) {
  //   let temp = null
  //   function fun2(prev, next) {
  //     if (prev > next) {
  //       temp = next
  //       next = prev
  //       prev = temp
  //     }
  //   }
  //   for (let i = 0, len = context.length; i < len - 1; i++) {
  //     for (let j = 0, len = context.length - i - 1; j < len; j++) {
  //       fun2(context[j], context[j + 1])
  //     }
  //   }
  // }
  if (!cb) {
    for (let i = 0, len = this.length; i < len - 1; i++) {
      for (let j = 0, len = this.length - i - 1; j < len; j++) {
        if (this[j] > this[j + 1]) {
          temp = this[j + 1]
          this[j + 1] = this[j]
          this[j] = temp
        }
      }
    }
  } else {
    //传入了cb
    for (let i = 0, len = this.length; i < len - 1; i++) {
      for (let j = 0, len = this.length - i - 1; j < len; j++) {
        if (flag) {
          result = cb(this[j], this[j + 1])
          flag = false
        }
        //console.log(result)
        //如果返回值是一个大于0的数
        if (Math.abs(result) === result) {
          if (this[j] > this[j + 1]) {
            temp = this[j + 1]
            this[j + 1] = this[j]
            this[j] = temp
          }
        } else if (result === 0) {
          //如果返回值是0
        } else {
          //否则，就是一个负数
          if (this[j] < this[j + 1]) {
            temp = this[j]
            this[j] = this[j + 1]
            this[j + 1] = temp
          }
        }
      }
    }
  }
  return this
}
//[1, 6, 3, 4, 5, 7, 2]
// console.log(arr.sort((a, b) => a - b))
// console.log(arr)

console.log(arr.mySort((a, b) => b - a))
console.log(arr)
