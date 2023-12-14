var n = getApp(), t = (n.API, n.vPush), a = wx.getSystemInfoSync();

Page({
    data: {
        PUSH_OPEN: !1,
        PUSH_LOADING: !0,
        STATUSBAR_HEIGHT: a.statusBarHeight
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    addPushHandler: function(n) {},
    togglePushHandler: function(n) {
        var a = this;
        this.addPushHandler(n);
        var e = this.data, o = e.PUSH_LOADING, s = e.PUSH_OPEN;
        if (o) return console.log("loading push..");
        this.setData({
            PUSH_LOADING: !0
        }), s ? t.closePush(function(n) {
            a.setData({
                PUSH_LOADING: !1,
                PUSH_OPEN: !n && s
            });
        }) : t.openPush(function(n) {
            a.setData({
                PUSH_LOADING: !1,
                PUSH_OPEN: !!n || s
            });
        });
    },
    goBackHandler: function() {
        wx.navigateBack({});
    },
    openSourceHandler: function(n) {
        this.addPushHandler(n), wx.navigateTo({
            url: "/pages/setting/openSource"
        });
    }
});