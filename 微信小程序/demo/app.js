//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    let that = this;
    wx.getSystemInfo({
      success(res) {
        console.log(res)
        var temp = res.model.replace(/iPhone X/g, '')
        if (temp != res.model) {
          that.globalData.isIpx = true
        }
        that.globalData.windowWidth = res.windowWidth;
        that.globalData.windowHeight = res.windowHeight;
        that.globalData.pixelRatio = res.pixelRatio
        that.globalData.statusBarHeight = res.statusBarHeight
        that.globalData.facility = res.model;
        that.globalData.phoneAppVersion = res.system
        console.log(that.globalData.facility)
      }
    });


    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    pixelRatio: 0,
    windowWidth: 0,
    windowHeight: 0,
    pixelRatio: null,
    statusBarHeight: 0
  }
})