var a = 1;

Page({
    data: {
        girlData: [],
        loadingHidden: !1
    },
    onLoad: function() {
        var t = this;
        this.loadGankGirlData(function(n) {
            a = 2, t.setData({
                loadingHidden: !0,
                girlData: n
            });
        });
    },
    onBindscrolltolower: function(t) {
        var n = this;
        console.log("滚动到底部..."), this.loadGankGirlData(function(t) {
            a++, n.setData({
                girlData: n.data.girlData.concat(t)
            });
        });
    },
    loadGankGirlData: function(t) {
        var n = this;
        wx.request({
            url: "http://gank.io/api/data/福利/10/" + a,
            header: {
                "Content-Type": "application/json"
            },
            success: function(a) {
                return t(n.convertData(a.data.results));
            }
        });
    },
    convertData: function(a) {
        var t = [], n = [];
        return a.map(function(a) {
            a.url = a.url.replace("http://ww", "http://ws"), 2 == n.length ? (t.push(n), n = [ a ]) : n.push(a);
        }), n.length > 0 && t.push(n), t;
    },
    onImageClick: function(a) {
        wx.navigateTo({
            url: "../showpic/showpic?pic=" + a.target.id
        });
    }
});