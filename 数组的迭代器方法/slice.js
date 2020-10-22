Array.prototype.mySlice = function (starts, ends) {
  //要返回的新数组
  const newArr = []
  let args = [...arguments]
  function f(starts, newArrs, context, ends) {
    let len
    //参数是正数的情况
    if (Math.abs(ends) === ends) {
      len = ends || context.length
    } else {
      //传递的参数是负数的情况
      len = context.length + ends
    }
    for (let i = starts; i < len; i++) {
      newArrs.push(context[i])
    }
    return newArrs
  }
  //如果没有传递参数
  if (args.length === 0) {
    f(0, newArr, this)
  } else if (args.length === 1) {
    //如果传递的参数个数为1
    f(starts, newArr, this)
  } else {
    //如果传递参数的个数为2
    f(starts, newArr, this, ends)
  }
  return newArr
}
let data = [1, 2, 3, 4, 5, 6, 7, 8]
let res = data.mySlice(1, -2)
console.log(res)
