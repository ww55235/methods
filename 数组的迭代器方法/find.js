Array.prototype.myFind = function (cb) {
  if (!cb) {
    return null
  }
  let res
  for (let i = 0, len = this.length; i < len; i++) {
    res = cb(this[i], i, this)
    if (res) {
      return this[i]
    }
  }
}

let data = [1, 2, 3, 5, 6]
let res = data.find((item, index, arr) => {
  console.log(item, index, arr)
  return true
})
console.log(res)
