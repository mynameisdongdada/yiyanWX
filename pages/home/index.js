var util = require("../../utils/util.js");
var t1 = getApp(), n1 = t1.API, o = (t1.vPush, wx.getSystemInfoSync());
var theid = 0;
var a = new (require("../../utils/calendar-converter.js").CalendarConverter)(),
  t = getApp(),
  r = [
    [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  ],
  e = function (a) {
    return a % 400 == 0 || a % 4 == 0 && a % 100 != 0 ? 1 : 0;
  },
  n = function (a, t) {
    return r[e(a)][t];
  },
  o = function (a, t) {
    return (t.getTime() - a.getTime()) / 36e5 / 24;
  },
  D = {
    dateData: {
      date: "",
      arrIsShow: [],
      arrDays: [],
      arrInfoEx: [],
      arrInfoExShow: [],
      arrIsSelected: []
    },
    detailData: {
      curDay: "",
      curInfo1: "",
      curInfo2: "",
      curInfo3: ""
    },

    isWorkTurn: 0 != t.globalData.workTurnType.length,
    workTurnTypeName: t.globalData.workTurnTypeName,
    workTurnTypeArr: [],
    workTurnData: {
      startWorkDate: {},
      startWorkDateString: "",
      arrWorkTurn: []
    }
  },
  u = function () {
    var a = new Date(c, w, 1).getDay();
    return a = 0 == a ? 6 : a - 1;
  },
  l = 0,
  i = function (a) {
    null == a ? a = l : l = a;
    var t = D.dateData.arrInfoEx[a];
    t && (g = t.sDay, D.detailData.curInfo1 = t.lunarMonth + "月" + t.lunarDay + " " + t.lunarFestival,
      D.detailData.curInfo2 = t.cYear + t.lunarYear + "年",
      D.detailData.curInfo3 = t.cMonth + "ㆍ" + t.cDay);
  },
  T = function (a) {
    var t = D.workTurnData.startWorkDate,
      r = o(t, a);
    if (r < 0) return "";
    var e = r % D.workTurnTypeArr.length;
    return D.workTurnTypeArr[e];
  },
  d = function () {
    if (0 !== t.globalData.workTurnType.length)
      for (var a = u(), r = n(c, w) + a, e = 0; e < 42; ++e)
        if (!(e < a || e >= r)) {
          var o = new Date(c, w, e - a + 1);
          D.workTurnData.arrWorkTurn[e] = T(o);
        }
  },
  s = function (t, r, e) {
    w = r, c = t, g = e;
    var o = new Date(),
      l = o.getMonth(),
      T = o.getFullYear(),
      s = o.getDate();
    D.dateData.date = c + "年" + (w + 1) + "月";
    for (var k = u(), f = n(c, w) + k, h = 0; h < 42; ++h)
      if (D.dateData.arrIsShow[h] = !(h < k || h >= f),
        D.dateData.arrIsShow[h]) {
        D.dateData.arrDays[h] = h - k + 1;
        var y = new Date(t, r, h - k + 1);
        D.dateData.arrIsSelected[h] = T == t && l == r && s == h - k + 1;
        var p = a.solar2lunar(y);
        D.dateData.arrInfoEx[h] = p, "" != p.lunarFestival ? D.dateData.arrInfoExShow[h] = p.lunarFestival : "初一" === p.lunarDay ? D.dateData.arrInfoExShow[h] = p.lunarMonth + "月" : D.dateData.arrInfoExShow[h] = p.lunarDay;
      }
    d(), i(k + e - 1);
  },
  k = new Date(),
  w = k.getMonth(),
  c = k.getFullYear(),
  g = k.getDate();

D.workTurnData.startWorkDate = t.globalData.startWorkDate,
  function () {
    var a = D.workTurnData.startWorkDate,
      t = a.getMonth(),
      r = a.getFullYear(),
      e = a.getDate();
    D.workTurnData.startWorkDateString = r + "-" + (t + 1) + "-" + e;
  }(), s(c, w, g);
Page({
    data: {
        D,
        data: [],
        first: [],
        opacity: 0,
        LOADING: !0,
        SCROLL_TOP: 0,
        STATUSBAR_HEIGHT: o.statusBarHeight,
      menulist: [
        {
          "id": "1",
          "url": "../../images/top.png",
          "title": "顶部",
        },
        {
          "id": "2",
          "url": "../../images/add.png",
          "title": "添加",
        }
      ],
      mainmodel: {
        "url": "../../images/home.png",
      }
    },
 
    onLoad: function(t1) {
      var t=this;
      var  themonth = util.formatTime2(new Date());
      var  theday = util.formatTime3(new Date());
      let time = util.formatDate4(new Date());
      var day1 = new Date();
      day1.setTime(day1.getTime()-20*24*60*60*1000);
      var s1 = day1.getFullYear()+"-" + (day1.getMonth()+1) + "-" + day1.getDate();
      console.log(s1);
      var beforemonth=day1.getMonth()+1;
      beforemonth=String(beforemonth);
      var beforeday=day1.getDate();
      beforeday=String(beforeday);
      var beforeid=0;
      var Week = util.getDates(0, time);
      this.setData({
        Week:Week.week
      }),
      wx.request({
        url: 'https://www.jay1983.cn/queryAllText',
        success:function(req){
          var lunbList= req.data.details;
          var text=req.data.text;
          var todaytext= text.todaytext.replace(/\\n/g,'\n');
          var testList= req.data.testList;
          for(var i=0;i<testList.length;i++){
            testList[i].todaytext=testList[i].todaytext.replace(/\\n/g,'\n');
          }
          t.setData({
            lunbList:lunbList,
            text:text,
            todaytext:todaytext,
            testList:testList
          });
        }
      });
      wx.cloud.init();

    },
    onReady: function() {
       /**this.onPullDownRefresh() */
    },
    onShow: function() {
      console.log('onShow');
      D.isWorkTurn = 0 != t.globalData.workTurnType.length, D.workTurnTypeName = t.globalData.workTurnTypeName,
        D.workTurnTypeArr = [];
      for (var a = t.globalData.workTurnType.split(" "), r = 0; r < a.length; ++r) "" != a[r] && D.workTurnTypeArr.push(a[r]);
      d(), i(), this.setData({
        isWorkTurn: D.isWorkTurn,
        workTurnTypeName: D.workTurnTypeName,
        workTurnTypeArr: D.workTurnTypeArr,
        workTurnData: D.workTurnData,
        detailData: D.detailData
      });
    },
    onHide: function() {},
    onUnload: function() {},
    onReachBottom: function() {
    },
  /**
* 用户点击右上角分享
*/
  onShareAppMessage: function () {
    return {
      title: "那些努力的人啊 身上总是闪闪发光",
      path: 'pages/home/index',
      imageUrl: "https://6d79-myapps-acfec7-1258045707.tcb.qcloud.la/672ee57bly1g12ovm9c70j20jg0obtjp.jpg?sign=8855ab2f543945264bea9c9b904773a9&t=1553656010"
    }
  },
    addPushHandler: function(t1) {
        var n1 = t1.currentTarget.dataset.item;
        console.log('n1:'+n1);
        if (!n1) return console.log("[not item]");
        wx.navigateTo({
            url: "/pages/detail/index?vol=" + n1
        });
    },
    scrollHandler: function(t1) {
        var n1 = t1.detail.scrollTop, o1 = parseFloat(n / 250).toFixed(2);
        o1 > 1 && (o1 = 1), o1 < .1 && (o1 = 0), n1 < 300 && this.setData({
            opacity: o1
        });
    },

    gotoSetting: function() {
        wx.navigateTo({
            url: "/pages/setting/index"
        });
    },
    gotoOpenSource: function() {
        wx.navigateTo({
            url: "/pages/setting/openSource"
        });
    },
    toTopHandler: function(t1) {
        this.setData({
            SCROLL_TOP: 0
        });
    }
});