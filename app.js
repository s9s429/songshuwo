// app.js
App({
  onLaunch(option) {
    // console.log(option.path)
    // 展示本地存储能力
    // const logs = wx.getStorageSync('logs') || []
    // console.log(logs)
    // logs.unshift(Date.now())
    // wx.setStorageSync('logs', logs)

    // 登录
    // wx.login({
    //   success: res => {
    //     // 发送 res.code 到后台换取 openId, sessionKey, unionId
    //     console.log(res)
    //   }
    // })
    // console.log(this.globalData)
    // tabber标签右上角添加数字
    wx.setTabBarBadge({
      index: 2,
      text: '50'
    })
  },
  globalData: {
    userInfo: "小洪"
  }
})
