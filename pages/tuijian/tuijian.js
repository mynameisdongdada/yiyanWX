Page({
  data: {
    wlad: {
      adData: {},
      ad: {
        fixed: "fixed"
      }
    }
  },
  goBackHandler: function() {
    wx.navigateBack({});
  },
  onLoad: function() {

  },
  onShareAppMessage: function() {
    return {
      title: "缝补世界计划开启。",
      path: 'pages/home/index',
      imageUrl: "http://cdn.jay1983.cn/tuijian.jpg"
    }
  },
  previewImage: function(e) {
    var current = e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: [current]
    })
  }
})