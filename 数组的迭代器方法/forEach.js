Array.prototype.myForEach = function (cb, context = globalThis) {
  for (let i = 0, len = this.length; i < len; i++) {
    cb && cb.call(context, this[i], i, this)
  }
}

let arr = [1, 2, 3, 4, 5]

arr.myForEach(
  function (item, index, arr) {
    console.log(item, index, arr)
    console.log(this)
  },
  { name: '楠仔' }
)
