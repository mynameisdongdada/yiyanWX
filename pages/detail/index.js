import audioList from './data.js';
var util = require("../../utils/util.js");
var theneirong='';
var a = '';
var audioSrc='';
var imgSrc='';
var collection='';
const app = getApp();
var t, e = wx.getSystemInfoSync(),
  n = getApp(),
  a = n.FAV,
  i = n.API,
  s = require("../../libs/weToast/weToast.js");
var random;
var theimgurl="";

var index = 0;
Page({
  data: {
    zhuanfa:true,
    showGuide: true,
    audioList: audioList,
    audioIndex: 0,
    pauseStatus: true,
    data: {},
    date: [],
    LOADING: 1,
    IS_LIKED: !1,
    IS_SHARE_PAGE: !1,
    SCROLL_TOP: 0,
    opacity: 0,
    HEIGHT: e.windowHeight,
    STATUSBAR_HEIGHT: e.statusBarHeight
  },
  onLoad: function(e) {
    wx.cloud.init();
    var uuid= e.vol;
    var time2 = util.formatTime2(new Date());
    let time = util.formatDate4(new Date());
    var Week = util.getDates(0, time);
    if(Week.week == "周四" || Week.week == "周五" || Week.week == "周六" || Week.week == "周日"){
      this.setData({
        //zhuanfa: false
      })
    }
    random = Math.floor(Math.random() * 31);
    const backgroundAudioManager = wx.getBackgroundAudioManager();
    backgroundAudioManager.onPlay(() => {
      console.log("音乐播放中...");
    })
    var audioIndexStorage = wx.getStorageSync('audioIndex');
    if (audioIndexStorage) {
      this.setData({
        audioIndex: audioIndexStorage
      })
    };
    var n = this;
    if (random == '1') {
      index = 1;
    };
    if (random == '2') {
      index = 2;
    };
    if (random == '3') {
      index = 3;
    };
    if (random == '4') {
      index = 4;
    }
    if (random == '5') {
      index = 5;
    }
    if (random == '6') {
      index = 6;
    }
    if (random == '7') {
      index = 7;
    };
    if (random == '8') {
      index = 8;
    };
    if (random == '9') {
      index = 9;
    };
    if (random == '10') {
      index = 10;
    }
    if (random == '11') {
      index = 11;
    }
    if (random == '12') {
      index = 12;
    }
    if (random == '13') {
      index = 13;
    };
    if (random == '14') {
      index = 14;
    };
    if (random == '15') {
      index = 15;
    };
    if (random == '16') {
      index = 16;
    };
    if (random == '17') {
      index = 17;
    };
    if (random == '18') {
      index = 18;
    };
    if (random == '19') {
      index = 19;
    };
    if (random == '20') {
      index = 20;
    };
    if (random == '21') {
      index = 21;
    };
    if (random == '22') {
      index = 22;
    };
    if (random == '23') {
      index = 23;
    };
    if (random == '24') {
      index = 24;
    };
    if (random == '25') {
      index = 25;
    };
    if (random == '26') {
      index = 26;
    };
    if (random == '27') {
      index = 27;
    };
    if (random == '28') {
      index = 28;
    };
    if (random == '29') {
      index = 29;
    };
    if (random == '30') {
      index = 30;
    };
    if (random == '31') {
      index = 31;
    };
    t = new s(this), new Promise(function(t) {
      if (e.item) return t(JSON.parse(decodeURIComponent(e.item)));
      e.id ? i.getDataById(e.id).then(t) : e.scene && i.getDataById(e.scene).then(t);
    }).then(function(t) {
      n.setData({
        data: t,
        date: t.date.split(" / "),
        IS_LIKED: a.check(t.id),
        HEIGHT: wx.getSystemInfoSync().windowHeight,
        IS_SHARE_PAGE: 1 === getCurrentPages().length
      }), setTimeout(function() {
        return n.setData({
          LOADING: 1
        });
      }, 500);
    }), this.SHARE_IMG = null;

    wx.request({
      url: 'https://www.jay1983.cn/queryByUuid',
      method:'POST',
      header: {
       "Content-Type": "application/x-www-form-urlencoded" 
      },
      data:{
       uuid:uuid
     },
      success:function(req){
        var uuidData= req.data.text;
        theneirong=uuidData.todaytext.replace(/\\n/g,'\n');
        audioSrc=uuidData.audio;
        imgSrc=uuidData.image;
        var musicFlag= req.data.flag;
        var thisZhuanFa=true;
        if("1"==musicFlag){
          thisZhuanFa=false;
        }
        collection='「'+uuidData.collection+'」';
		    n.setData({
              theneirong: theneirong,
              uuidData:uuidData,
              zhuanfa: thisZhuanFa
          })
         }
    })


  },
  onReady: function() {},
  closeEvent: function() {
    this.setData({
      showGuide: false
    })
  },
  zhuanfa: function() {
    this.onShareAppMessage();
    },
  thecopy:function(){
    wx.setClipboardData({
      data: theneirong,
      success(res) {
        wx.getClipboardData({
          success(res) {
            wx.showToast({
              title: '复制成功',
              icon: 'success',
              duration: 2000
            }),
            console.log(res.data) // data
          }
        })
      }
    })
  },
  viewImageHandler: function (t) {
    debugger;
    var e = t.currentTarget.dataset.url;
    wx.previewImage({
      urls: [e]
    });
  },
  onShow: function() {},
  onHide: function() {},
  onUnload: function() {},
  onPullDownRefresh: function() {},
  onReachBottom: function() {},
  onShareAppMessage: function() {
    return {
      title: collection,
      path: "/pages/home/index",
      imageUrl:imgSrc
    };
  },
  
  goBackHandler: function() {
    wx.navigateBack({});
  },
  bindTapPlay: function() {
    console.log(index);
    if (this.data.pauseStatus === true) {
      this.bindback();
      this.setData({
        pauseStatus: false
      })
    } else if (this.data.pauseStatus === false) {
      this.zanting();
      this.setData({
        pauseStatus: true
      })
    }
  },
  bindback: function() {
    let {
      audioList,
      audioIndex
    } = this.data;
    const back = wx.getBackgroundAudioManager();
    //back.src = audioList[index].src;
    back.src=audioSrc;
    back.title = audioList[index].name;
    back.coverImgUrl='http://cdn.jay1983.cn/fengmian.jpg';
    back.play();
    back.onPlay(() => {
      console.log("音乐播放开始");
      console.log(random);
    })
    back.onEnded(() => {
      console.log("音乐播放结束");
      this.setData({
        pauseStatus: true
      });
    })
  },
  zanting() {
    wx.pauseBackgroundAudio({
      success: function() {
        console.log("暂停")
      }
    })
  },
  bindNext: function() {
    console.log("下一首");
    if (index == 30) {
      index = 0;
    } else {
      index++;
    }
    this.bindback();
    this.setData({
      pauseStatus: false
    })
  },
  bindBefore: function() {
    console.log("上一首");
    if (index == 0) {
      index = 30;
    } else {
      index--;
    }
    this.bindback();
    this.setData({
      pauseStatus: false
    })
  },
  goHomeHandler: function() {
    wx.redirectTo({
      url: "/pages/home/index"
    });
  },
  viewImageHandler: function(t) {
    var e = t.currentTarget.dataset.url;
    wx.previewImage({
      urls: [e]
    });
  },
  copyHandler: function() {
    wx.setClipboardData({
      data: this.data.data.content
    });
  },
  toTopHandler: function(t) {
    this.setData({
      SCROLL_TOP: 0
    });
  },
  scrollHandler: function(t) {
    var e = t.detail.scrollTop,
      n = parseFloat(e / 250).toFixed(2);
    n > 1 && (n = 1), n < .1 && (n = 0), e < 300 && this.setData({
      opacity: n
    });
  },
  toggleLikeHandler: function(t) {
    var e = this.data,
      n = e.IS_LIKED,
      i = e.data;
    n ? a.del(i.id) : a.add(i), this.setData({
      IS_LIKED: !n
    });
  },
  shareHandler: function(e) {
    var n = this;
    if (this.SHARE_IMG) return wx.previewImage({
      urls: [this.SHARE_IMG]
    });
    var a = parseInt(wx.getStorageSync("share_count") || 0);
    a < 3 && t.info("生成图片后长按保存分享！"), wx.showLoading({
      title: "生成图片中",
      mask: !0
    });
    var i = wx.createCanvasContext("shareCanvas", this);
    i.drawImage("/assets/share_tpl2@2x.png", 0, 0, 414, 736);
    var s = this.data.data,
      o = (s.id, s.img_url),
      r = s.content,
      l = s.date,
      c = s.text_authors,
      d = s.picture_author;
    new Promise(function(t) {
      wx.getImageInfo({
        src: o.replace("https://oodcj.com", "https://oodcj.com"),
        success: function(e) {
          i.drawImage(e.path, 0, 0, 414, 276), i.drawImage("/assets/box@2x.png", 0, 174, 414, 562),
            t();
        }
      });
    }).then(function() {
      return new Promise(function(t) {
        wx.getImageInfo({
          src: "https://oodcj.com/wp-content/uploads/一言lite.jpg",
          success: function(e) {
            i.drawImage(e.path, 167, 618, 80, 80), t();
          }
        });
      });
    }).then(function() {
      return new Promise(function(t) {
        var e = 15,
          n = 22,
          a = r.split("\r\n"),
          s = 0;
        a.length > 3 && (a = a.slice(0, 3));
        for (var o in a)
          for (var u = a[o], h = parseInt(u.length / e) + 1, g = 0; g < h; g++) ! function(t, a) {
            if (2 === a && t.length === e) t = t.slice(0, 13) + "..";
            else if (a > 2) return;
            var s = 450 + 35 * a;
            console.log("[draw]", t, s), i.setFontSize(20), i.setTextAlign("center"), i.setFillStyle("#333333");
            for (var o in t) {
              var r = t[o];
              i.fillText(r, 50 + o * n, s);
            }
          }(u.slice(g * e, (g + 1) * e), s), s++;
        i.setFontSize(12), i.setTextAlign("center"), i.setFillStyle("#888888"), i.fillText(d, 207, 260),
          i.setFontSize(16), i.setTextAlign("center"), i.setFillStyle("#999999"), i.fillText(c, 207, 590);
        var f = l.split(" / ");
        i.setFontSize(60), i.setTextAlign("center"), i.setFillStyle("#666666"), i.fillText(f[2], 207, 350),
          i.setFontSize(18), i.setTextAlign("center"), i.setFillStyle("#999999"), i.fillText(f[1] + " / " + f[0], 207, 390),
          i.stroke(), i.draw(), setTimeout(function() {
            return t();
          }, 1e3);
      });
    }).then(function() {
      wx.hideLoading(), wx.canvasToTempFilePath({
        canvasId: "shareCanvas",
        x: 0,
        y: 0,
        width: 414,
        height: 736,
        success: function(t) {
          n.SHARE_IMG = t.tempFilePath;
          var e = [t.tempFilePath];
          a < 3 && (e.push("https://i.loli.net/2018/07/09/5b4341c50063e.jpg"), wx.setStorageSync("share_count", a + 1)),
            wx.previewImage({
              urls: e
            });
        }
      }, n);
    });
  }
});