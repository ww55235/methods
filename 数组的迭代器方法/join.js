Array.prototype.myJoin = function (params) {
  function f(context, str = '', flag = ',') {
    for (let i = 0, len = context.length; i < len; i++) {
      if (i !== len - 1) {
        str += context[i] + flag
      }
      if (i === len - 1) {
        str += context[i]
      }
    }
    return str
  }
  let result
  //如果用没有传值，默认以逗号分隔开
  if (!params) {
    result = f(this)
    return result
  } else {
    result = f(this, '', params)
    return result
  }
}
