function myNew(fun, ...args) {
  //创建一个对象
  const context = {}
  //给context设置原型链
  Object.setPrototypeOf(context, fun.prototype)
  let result = fun.call(context, ...args)
  if (
    typeof result === 'function' ||
    (typeof result === 'object' && result !== null)
  ) {
    return result
  }
  return context
}

function fun() {
  this.name = '楠仔'
  this.age = 20
  this.sex = '男'
}
let r = myNew(fun)
console.log(r)
