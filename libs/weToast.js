function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), 
            Object.defineProperty(t, i.key, i);
        }
    }
    return function(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
    };
}(), n = {
    duration: 200,
    delay: 2e3,
    defaultBG: "linear-gradient(-135deg, #B4EC51 0%, #429321 100%)",
    defaultSHADOW: "rgba(0,0,0,0.50)"
}, i = [], a = !1, o = null, s = function() {
    function s(e) {
        t(this, s), this.page = e, e.weToastHideHandler = this._hide.bind(this);
        var i = wx.createAnimation({
            duration: n.duration,
            timingFunction: "ease"
        });
        i.bottom(100).opacity(1).scale(1).step(), this._showAnimation = i.export(), i.bottom(-100).opacity(0).scale(0).step(), 
        this._hideAnimation = i.export(), this.setData({
            icon: "",
            title: "",
            content: "",
            boxBG: n.defaultBG,
            SHADOW: n.defaultSHADOW,
            animation: this._hideAnimation
        });
    }
    return e(s, [ {
        key: "setData",
        value: function(t) {
            this.page.setData({
                weToast: t
            });
        }
    }, {
        key: "getData",
        value: function(t) {
            return this.page.data.weToast[t];
        }
    }, {
        key: "_add",
        value: function(t) {
            i.push({
                icon: t.icon,
                title: t.title,
                content: t.content,
                boxBG: t.style || n.defaultBG,
                SHADOW: t.shadow || n.defaultSHADOW,
                animation: this._showAnimation
            }), a || this._show();
        }
    }, {
        key: "_show",
        value: function() {
            var t = i.shift();
            t && (this.setData(t), a = !0, o = setTimeout(this._hide.bind(this), n.delay + n.duration));
        }
    }, {
        key: "_hide",
        value: function() {
            var t = this;
            o && clearTimeout(o), this.setData({
                title: "",
                content: "",
                boxBG: this.getData("boxBG"),
                SHADOW: this.getData("SHADOW"),
                animation: this._hideAnimation
            }), setTimeout(function() {
                a = !1, t._show();
            }, n.duration);
        }
    }, {
        key: "success",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this._add({
                title: e,
                content: t,
                icon: "ok",
                style: "linear-gradient(135deg, #B4EC51 0%, #429321 100%)",
                shadow: "rgba(180, 236, 81, 0.5)"
            });
        }
    }, {
        key: "info",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this._add({
                title: e,
                content: t,
                icon: "info",
                style: "linear-gradient(-45deg, #009EFD 0%, #77CDFF 100%)",
                shadow: "rgba(0, 158, 253, 0.5)"
            });
        }
    }, {
        key: "warning",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this._add({
                title: e,
                content: t,
                icon: "attention",
                style: "linear-gradient(135deg, #FAD961 0%, #F76B1C 100%)",
                shadow: "rgba(250, 217, 97, 0.5)"
            });
        }
    }, {
        key: "error",
        value: function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            this._add({
                title: e,
                content: t,
                icon: "cancel",
                style: "linear-gradient(135deg, #F5515F 0%, #D63547 36%, #9F041B 100%)",
                shadow: "rgba(245, 81, 95, 0.5)"
            });
        }
    }, {
        key: "setDelay",
        value: function() {
            var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e3;
            n.delay = t;
        }
    } ]), s;
}();

module.exports = s;