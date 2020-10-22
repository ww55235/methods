let arr = [1, 2, 3, 4, 5]

Array.prototype.myEvery = function (cb) {
  if (!cb) {
    return null
  }
  let res
  for (let i = 0, len = this.length; i < len; i++) {
    res = cb(this[i], i)
    if (!res) {
      return false
    }
  }
  return !!res
}

let res = arr.myEvery((item, index) => {
  console.log(item)
  console.log(index)
  return 5
})
console.log(res)
