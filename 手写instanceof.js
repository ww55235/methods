function myInstanceof(obj, fun) {
  let __proto = obj.__proto__
  let prototype = fun.prototype
  while (true) {
    if (__proto === null) {
      return false
    }
    if (__proto === prototype) {
      return true
    }
    __proto = __proto.__proto__
  }
}

function fun() {}

let r = new fun()
let o = {}
let flag = myInstanceof(o, fun)
console.log(flag)
