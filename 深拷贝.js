Object.prototype.deepClone = function (obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj
  }
  let result
  if (Array.isArray(obj)) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = deepClone(obj[key])
    }
  }
  return result
}

let obj = { name: '楠仔', friends: ['小红', '小南', '小雨'] }

let obj2 = Object.prototype.deepClone(obj)

obj2.friends[0] = '瞎子'
console.log(obj)
console.log(obj2)
