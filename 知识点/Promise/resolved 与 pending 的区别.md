1. async 函数，返回一个 Promise 对象，如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
2. Resolved，完成状态
3. Pending，进行状态，表示延迟（异步）操作正在进行。