// 使用for循环打印九九乘法表
let sum = ''
for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= i; j++) {
    sum += j + '*' + i + '=' + j * i + '\t'
  }
  sum += '\n'
}
console.log(sum)
