// components/menu/menu.js
var util = require("../../utils/util.js");
var themusic = '';
var music = " ";
var imgurl = " ";
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mainmodel: {
      type: Object,
      value: {}
    },
    menulist: {
      type: Object,
      value: []
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    showmenus:true,
    pauseStatus: true
  },
  onLoad:function(options){
    
  },
  /**
   * 组件的方法列表
   */
  methods: {
    showclick:function(){
      let isshow = !this.data.showmenus;
      let time = util.formatDate4(new Date());
      var Week = util.getDates(0, time);
      wx.request({
        url: 'https://www.jay1983.cn/queryDetailsByChangWenMusic',
        success:function(req){
          imgurl=req.data.changWen.link;
          console.log(imgurl);
          music=req.data.music.link;
        }
      });
      this.setData({
        showmenus: isshow,
        imgurl: imgurl
      })
    },
   
    bindTapPlay: function () {
      if (this.data.pauseStatus === true) {
        this.bindback();
        this.setData({ pauseStatus: false })
      } else if (this.data.pauseStatus === false) {
        this.zanting();
        this.setData({ pauseStatus: true })
      }
    },
    bindback: function () {
      let { audioList, audioIndex } = this.data;
      const back = wx.getBackgroundAudioManager();
      back.src = music;
      
      console.log(music);
      
      back.title = '作者是个小伙';
      back.play();
      back.onPlay(() => {
        console.log("音乐播放开始");
      })
      back.onEnded(() => {
        console.log("音乐播放结束");
        this.setData({ pauseStatus: true });
      })
    },
    zanting() {
      wx.pauseBackgroundAudio({
        success: function () {
          console.log("暂停")
        }
      })
    },
    setDuration(that) {
      wx.getBackgroundAudioPlayerState({
        success: function (res) {
          let { status, duration, currentPosition } = res
          if (status === 1 || status === 0) {
            that.setData({
              currentPosition: that.stotime(currentPosition),
              duration: that.stotime(duration),
              sliderValue: Math.floor(currentPosition * 100 / duration),
            })
          }
        }
      })
    },
    
    viewImageHandler: function (t) {
      var e =  imgurl;
      wx.previewImage({
        urls: [e]
      });
    },
    itemclick:function(e){
      /*this.showclick();*/
      console.log(e.currentTarget.dataset);
      let info = e.currentTarget.dataset.item;
      if (info){
        this.triggerEvent('menuItemClick', {
            "iteminfo":info
        })
      }
    }
   

  }
})
