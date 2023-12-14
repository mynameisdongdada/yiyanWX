function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), 
            Object.defineProperty(t, r.key, r);
        }
    }
    return function(e, n, r) {
        return n && t(e.prototype, n), r && t(e, r), e;
    };
}();

Date.prototype.format = function(t) {
    var e = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
    };
    /(y+)/.test(t) && (t = t.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
    for (var n in e) new RegExp("(" + n + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? e[n] : ("00" + e[n]).substr(("" + e[n]).length)));
    return t;
};

var n = function() {
    function n() {
      t(this, n), this.KEY = "DATAS", this.API = "http://api.tianapi.com/txapi/one/";
    }
    return e(n, [ {
        key: "formatData",
        value: function(t) {
            var e = [];
            return t.map(function(t) {
                e.push({
                    id: t.id,
                    title: t.vol,
                    img_url: t.img_url,
                    picture_author: t.img_kind + " | " + t.img_author,
                    date: t.date.split(" ")[0].replace(/-/g, " / "),
                    content: t.word,
                    text_authors: t.word_from
                });
            }), e;
        }
    }, {
        key: "getData",
        value: function() {
            var t = this;
            return new Promise(function(e, n) {
                var r = t.getCache();
                if (!1 !== r) return e(r);
                wx.request({
                    url: t.API,
                    method: "POST",
                    dataType: "json",
                    data: {
                        TransCode: "030112",
                        OpenId: "123456789",
                        Body: ""
                    },
                    success: function(n) {
                        var r = t.formatData(n.data.Body);
                        wx.setStorageSync(t.KEY, r), e(r);
                    },
                    fail: n
                });
            });
        }
    }, {
        key: "getCache",
        value: function() {
            var t = wx.getStorageSync(this.KEY);
            return !!t && (t[0].date === new Date().format("yyyy / MM / dd") && t);
        }
    }, {
        key: "getDataById",
        value: function(t) {
            var e = this;
            return new Promise(function(n, r) {
                e.getData().then(function(e) {
                    var r = {};
                    return e.map(function(e) {
                        e.id === parseInt(t) && (r = e);
                    }), n(r);
                });
            });
        }
    } ]), n;
}();

module.exports = new n();