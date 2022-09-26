// 如何实现响应式
// 通过发布订阅模式和双向数据绑定 实现基本的响应式

// 订阅器模型
let Dep = {
  clientList: {},
  // 添加订阅者
  listen: function (key, fn) {
    // if(!this.clientList[key]) {
    //   this.clientList[key] = []
    // }
    // this.clientList[key].push(fn)
    // 订阅者添加订阅内容
    (this.clientList[key] || (this.clientList[key] = [])).push(fn)

  },
  // 推送方法
  trigger: function () {
    // 拿到当前订阅者所有参数并转化为数组
    let key = Array.prototype.shift.call(arguments)
    console.log('key', key)
    // 当前订阅者订阅的内容
    let fns = this.clientList[key]
    if (!fns || fns.length === 0) {
      return false
    }
    for (let i = 0, fn; fn = fns[i++];) {
      // this 指向当前订阅者, arguments 为附带参数
      fn.apply(this, arguments)
    }
  }
}

// 劫持目标方法
let dataHijack = function (data, target, dataKey, selector) {
  let value = ''
  let el = document.querySelector(selector)
  Object.defineProperty(data, dataKey, {
    get: function () {
      console.log('取值')
      return value
    },
    set: function (val) {
      console.log('设置值')
      value = val
      // document.getElementById(target).innerText = val
      // 数据变化了，立即调用 trigger
      Dep.trigger(target, val)
    }
  })
  // 添加订阅者
  Dep.listen(target, function (text) {
    el.innerHTML = text
  })
}