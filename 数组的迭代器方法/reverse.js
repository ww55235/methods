Array.prototype.myReverse = function () {
  let arr = []
  let len = this.length
  for (let i = len - 1; i >= 0; i--) {
    arr.push(this[i])
  }
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i]
  }
  return this
}
let arr = [4, 6, 8, 9, 10]
let newArr = arr.reverse()
console.log(newArr)
