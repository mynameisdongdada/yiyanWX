App({
    onLaunch: function() {
      if (!wx.getStorageSync("version") && (e = wx.getStorageSync("customTypeStr"))) {
        for (var a = "", t = 0; t < e.length; ++t) a += e.charAt(t), a += " ";
        wx.setStorageSync("customTypeStr", a);
      }
      wx.setStorageSync("version", "2.0");
      var e = wx.getStorageSync("customTypeStr");
      e || (e = ""), this.globalData.arrTypeDetail[this.globalData.arrTypeDetail.length - 1] = e;
      var r = wx.getStorageSync("selectIndex");
      r || (r = 0);
      var o = wx.getStorageSync("startWorkDate");
      o || (o = new Date()).setHours(0, 0, 0, 0), this.globalData.startWorkDate = o, this.globalData.workTurnTypeName = this.globalData.arrTypeName[r],
        this.globalData.workTurnType = this.globalData.arrTypeDetail[r];
      // 展示本地存储能力
      var logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
      wx.getSetting({
        success(res) {
          if (!res.authSetting['scope.writePhotosAlbum']) {
            wx.authorize({
              scope: 'scope.writePhotosAlbum',
              success() {
                console.log('授权成功')
              }
            })
          }
        }
      })
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
  setWorkTurnType: function (a, t) {
    this.globalData.workTurnTypeName = a, this.globalData.workTurnType = t;
  },
  globalData: {
    workTurnTypeName: "",
    workTurnType: "",
    startWorkDate: {},
    arrTypeName: ["不显示倒班信息", "五班三运转", "四班两运转", "上三休三", "三班二运转", "四班三运转（两天一倒制）", "四班三运转（三天一倒制）", "自定义"],
    arrTypeDetail: ["", "中 中 白 白 夜 夜 休 休 休 休", "白 白 夜 夜 休 休 休 休", "白 白 全 休 休 休", "白 白 夜 夜 休 休", "白 白 中 中 休 夜 夜 休", "白 白 白 中 中 中 休 夜 夜 夜 休 休", ""]
  } 
});