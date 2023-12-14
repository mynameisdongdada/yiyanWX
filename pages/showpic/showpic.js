Page({
    data: {
        pic: "",
        SCROLL_TOP: 0
    },
    onLoad: function(a) {
        this.setData({
            pic: a.pic
        });
    },
    onShareAppMessage: function() {
        return {
            title: "via：'girlInfo[0].who'",
            path: "/pages/detail/index?id=" + this.data.data.id
        };
    },
    goBackHandler: function() {
        wx.navigateBack({});
    },
    goHomeHandler: function() {
        wx.redirectTo({
            url: "/pages/home/index"
        });
    },
    toTopHandler: function(a) {
        this.setData({
            SCROLL_TOP: 0
        });
    }
});