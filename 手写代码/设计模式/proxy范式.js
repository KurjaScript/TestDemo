// 代理
// 声明 girl 对象
let Girl = function (name) {
  this.name = name // this 指向 obj
}

// 声明 boy 对象
let Boy = function (girl) {
  // 女孩
  this.girl = girl
  // 送花
  this.sendGift = function (gift) {
    console.log('hi,' + this.girl.name + '，送你' + gift + '！')
    // 在花店下订单，花店的人去送花
  }
}
// 代理对象 花店的员工
let ProxyObj = function (girl) {
  this.girl = girl // 需要知道女孩信息
  this.sendGift = function (gift) {
    (new Boy(this.girl)).sendGift(gift) // 替人送花
  }
}
// 代理模式：代理对象与真实对象有相同的行为
// 调用的时候看不出来是谁送的花
let girl = new Girl('张云柱')
let proxy = new ProxyObj(girl)
proxy.sendGift('99朵玫瑰')