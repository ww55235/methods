Array.prototype.myFindexIndex = function (cb) {
  if (!cb) {
    return null
  }
  let res
  for (let i = 0, len = this.length; i < len; i++) {
    res = cb(this[i], i, this)
    if (res) {
      return i
    }
  }
}
let data = [1, 2, 4, 5, 9, 8]
let res = data.findIndex((item, index, arr) => {
  console.log(item, index, arr)
  return true
})
console.log(res)
