/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
import routes from './routes.js';
import App from './components/App.vue';
import components from './components'
import Velocity from "velocity-animate"
window.Velocity = window.velocity = Velocity;
Vue.use(VueRouter);
/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.

 Vue.component('example', require('./components/Loading.vue'));

 const app = new Vue({
    el: '#app'
});*/




const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    linkActiveClass: 'active',
    routes: routes
});

new Vue(Vue.util.extend({router}, App)).$mount('#app');
(function () {
    function e(b, e, f) {
        if (!h) throw Error("textarea-caret-position#getCaretCoordinates should only be called in a browser");
        if (f = f && f.debug || !1) {
            var a = document.querySelector("#input-textarea-caret-position-mirror-div");
            a && a.parentNode.removeChild(a);
        }
        a = document.createElement("div");
        a.id = "input-textarea-caret-position-mirror-div";
        document.body.appendChild(a);
        var c = a.style,
            d = window.getComputedStyle ? window.getComputedStyle(b) : b.currentStyle,
            k = "INPUT" === b.nodeName;
        c.whiteSpace = "pre-wrap";
        k || (c.wordWrap = "break-word");
        c.position = "absolute";
        f || (c.visibility = "hidden");
        l.forEach(function (a) {
            k && "lineHeight" === a ? c.lineHeight = d.height : c[a] = d[a];
        });
        m ? b.scrollHeight > parseInt(d.height) && (c.overflowY = "scroll") : c.overflow = "hidden";
        a.textContent = b.value.substring(0, e);
        k && (a.textContent = a.textContent.replace(/\s/g, " "));
        var g = document.createElement("span");
        g.textContent = b.value.substring(e) || ".";
        a.appendChild(g);
        b = {
            top: g.offsetTop + parseInt(d.borderTopWidth),
            left: g.offsetLeft + parseInt(d.borderLeftWidth),
            height: parseInt(d.lineHeight)
        };
        f ? g.style.backgroundColor = "#aaa" : document.body.removeChild(a);
        return b;
    }

    var l = "direction boxSizing width height overflowX overflowY borderTopWidth borderRightWidth borderBottomWidth borderLeftWidth borderStyle paddingTop paddingRight paddingBottom paddingLeft fontStyle fontVariant fontWeight fontStretch fontSize fontSizeAdjust lineHeight fontFamily textAlign textTransform textIndent textDecoration letterSpacing wordSpacing tabSize MozTabSize".split(" "),
        h = "undefined" !== typeof window,
        m = h && null != window.mozInnerScreenX;
    "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : h && (window.getCaretCoordinates = e);
})();