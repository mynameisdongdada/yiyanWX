var app = getApp
Page({
  previewImage: function (e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: 'http://s0b6v4kov.hb-bkt.clouddn.com/fenxiang.jpg',
      urls: ['http://s0b6v4kov.hb-bkt.clouddn.com/fenxiang.jpg']
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    //用户个人信息
    userInfo: {
      avatarUrl: "",//用户头像
      nickName: "",//用户昵称
    },
    wlad: {
      adData: {},
      ad: {
        fixed: "fixed" //是否展示右下⻆悬浮⼴告，如不需展示删掉该字段即可
      }
    },
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    show: false,
    showModal: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    var that = this;
    var show;
    wx.getSetting({
      success:function(res){
        if (res.authSetting['scope.userInfo']){
          that.setData({
            show: true,
            canIUse: false,
            showModal: false
          });
        }
      }
    })
  },

  bindGetUserInfo(e) {
    console.log(e.detail.userInfo+"11111");
    this.onLoad();
    this.setData({
      showModal: false
    })
  },
  // guanggao:function(){
  //   let videoAd = wx.createRewardedVideoAd({
  //     adUnitId: 'adunit-df3b1317ef9ace44'
  //   });
  //   videoAd.onError(err => {
  //     console.log(err)
  //   });
  //   videoAd.onLoad(() => {
  //     console.log('激励视频 广告加载成功')
  //   });
  //   videoAd.show()
  //     .catch(err => {
  //       videoAd.load().then(() => videoAd.show())
  //       console.log('激励视频 广告显示成功')
  //     });
  // },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '每一句，每一字，每一个你',
      path: 'pages/index/index',
      imageUrl: 'http://cdn.jay1983.cn/tuijian.jpg'
    }
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },

  preventTouchMove: function () {

  },


  go: function () {
    this.setData({
      showModal: false
    })
  }

})
