let data = [2, 4, 6, 8]

Array.prototype.mySome = function (cb) {
  if (!cb) {
    return null
  }
  for (let index = 0; index < this.length; index++) {
    let res = cb(this[index], index, this)
    if (res === true) {
      return true
    }
  }
  return false
}
let result = data.some(function (item, index, arr) {
  console.log(item)
  console.log(index)
  console.log(arr)
})

console.log(result)
