Array.prototype.myReduce = function (cb, preVal) {
  let result = null
  for (let i = 0; i < this.length; i++) {
    if (i === 0) {
      result = cb(preVal, this[i], i, this)
    } else {
      result = cb(result, this[i], i, this)
    }
  }
  return result
}

let arr = [5, 6, 8, 4]
let result = arr.myReduce(
  function (prev, item, index, t, t) {
    return (prev += item)
  },
  0,
  {}
)
console.log(result)
