function thro(fun, delay) {
  let canRun = true
  return function (...args) {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fun.apply(this, args)
      canRun = true
    }, delay)
  }
}
