function t(t, n) {
    if (!(t instanceof n)) throw new TypeError("Cannot call a class as a function");
}

var n = function() {
    function t(t, n) {
        for (var e = 0; e < n.length; e++) {
            var i = n[e];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(n, e, i) {
        return e && t(n.prototype, e), i && t(n, i), n;
    };
}(), e = function() {
    function e() {
        t(this, e), this.CACHE = [], this.KEY = "favorited/data", this.init();
    }
    return n(e, [ {
        key: "init",
        value: function() {
            var t = wx.getStorageSync(this.KEY);
            try {
                this.CACHE = JSON.parse(t);
            } catch (t) {}
        }
    }, {
        key: "add",
        value: function(t) {
            this.CACHE.push(t), wx.setStorageSync(this.KEY, JSON.stringify(this.CACHE));
        }
    }, {
        key: "del",
        value: function(t) {
            var n = [];
            this.CACHE.map(function(e) {
                e.id !== t && n.push(e);
            }), this.CACHE = n, wx.setStorageSync(this.KEY, JSON.stringify(n));
        }
    }, {
        key: "check",
        value: function(t) {
            var n = !1;
            return this.CACHE.map(function(e) {
                e.id === t && (n = !0);
            }), n;
        }
    } ]), e;
}();

module.exports = e;