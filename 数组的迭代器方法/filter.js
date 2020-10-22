Array.prototype.myFilter = function (cb, context = globalThis) {
  let newArr = []
  for (let i = 0, len = this.length; i < len; i++) {
    if (cb) {
      let result = cb.call(context, this[i], i, this)
      if (result) {
        newArr.push(this[i])
      }
    }
  }
  return newArr
}
let arr = [4, 6, 8, 9, 11, 10]

let res = arr.myFilter(function (item, index, a) {
  console.log(item)
  console.log(index)
  console.log(a)
  return item > 7
})
console.log(res)
