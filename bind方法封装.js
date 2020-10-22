Function.prototype.myBind = function () {
  //函数this指向的对象
  let context = arguments[0]
  //保存函数
  let fn = this
  //保存传入的参数(不包括arguments[0])
  let args = [...arguments].slice(1)
  console.log(args)
  //作为对象的key使用
  let key = Symbol('key')
  context[key] = fn
  //返回一个函数
  return function func() {
    //判断是否对返回函数使用了new操作符
    if (this instanceof func) {
      //如果对返回的函数使用了new操作符
      fn.apply(this, [...args.concat(arguments, args)])
    } else {
      let params = args.concat(arguments, args)
      let result = context[key](...params)
      //删除对象中的属性
      delete context.key
      if (result) {
        return result
      }
    }
  }
}

// let obj = { name: '楠仔', age: 20 }
// console.log(Function.prototype.myBind(obj, 1, 2))
