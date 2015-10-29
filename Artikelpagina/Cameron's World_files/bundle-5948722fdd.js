!function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var l=n[s]={exports:{}};t[s][0].call(l.exports,function(e){var n=t[s][1][e];return i(n?n:e)},l,l.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t,n){!function(){"use strict";e("domready")(function(){var t=e("./modules/blazy.js"),n=e("./modules/sound.js"),r=e("./modules/browsertabcontrol.js"),i=e("./modules/keyboardmute.js"),o=e("./modules/catscape.js");e("./modules/cameronsconsole.js"),e("./modules/linksshuffle.js")(".js-links"),e("./modules/calculator.js")(document.getElementById("js-answer")),n.init("./sound/","cameronsworld",!i.isMuted()),i.init(),r(n),o.init(641),o.on("sound",function(){n.stop()}),o.on("close",function(){i.isMuted()||n.start()}),new t({offset:200,selector:".section",errorClass:"ld",unloadOutOfViewport:!1})})}()},{"./modules/blazy.js":2,"./modules/browsertabcontrol.js":3,"./modules/calculator.js":4,"./modules/cameronsconsole.js":5,"./modules/catscape.js":6,"./modules/keyboardmute.js":8,"./modules/linksshuffle.js":9,"./modules/sound.js":10,domready:13}],2:[function(e,t,n){!function(e,r){"use strict";"function"==typeof define&&define.amd?define(r):"object"==typeof n?t.exports=r():e.Blazy=r()}(this,function(){"use strict";function e(e){y=!0,v=[],p={},m=e||{},m.error=m.error||!1,m.offset=m.offset||100,m.success=m.success||!1,m.selector=m.selector||".b-lazy",m.separator=m.separator||"|",m.container=m.container?document.querySelectorAll(m.container):!1,m.errorClass=m.errorClass||"b-error",m.breakpoints=m.breakpoints||!1,m.successClass=m.successClass||"b-loaded",m.unloadOutOfViewport=m.unloadOutOfViewport||!1,m.src=f=m.src||"data-src",h=window.devicePixelRatio>1,p.top=0-m.offset,p.left=0-m.offset,g=d(n,25),b=d(a,50),a(),l(m.breakpoints,function(e){return e.width>=window.screen.width?(f=e.src,!1):void 0}),t()}function t(){s(m.selector),y&&(y=!1,m.container&&l(m.container,function(e){c(e,"scroll",g)}),c(window,"resize",b),c(window,"resize",g),c(window,"scroll",g)),n()}function n(){for(var t=0;_>t;t++){var n=v[t];i(n)||o(n)?(e.prototype.load(n),m.unloadOutOfViewport===!1&&(v.splice(t,1),_--,t--)):n.className=n.className.replace(" "+m.errorClass,"")}0===_&&e.prototype.destroy()}function r(e,t){if(t||e.offsetWidth>0&&e.offsetHeight>0)if(m.unloadOutOfViewport===!1){var n=e.getAttribute(f)||e.getAttribute(m.src);if(n){var r=n.split(m.separator),i=r[h&&r.length>1?1:0],o=new Image;l(m.breakpoints,function(t){e.removeAttribute(t.src)}),e.removeAttribute(m.src),o.onerror=function(){m.error&&m.error(e,"invalid"),e.className=e.className+" "+m.errorClass},o.onload=function(){"img"===e.nodeName.toLowerCase()?e.src=i:e.style.backgroundImage='url("'+i+'")',e.className=e.className+" "+m.successClass,m.success&&m.success(e)},o.src=i}else m.error&&m.error(e,"missing"),e.className=e.className+" "+m.errorClass}else e.className=e.className.replace(" "+m.errorClass,""),e.className=e.className+" "+m.errorClass}function i(e){var t=e.getBoundingClientRect();return t.right>=p.left&&t.bottom>=p.top&&t.left<=p.right&&t.top<=p.bottom}function o(e){return-1!==(" "+e.className+" ").indexOf(" "+m.successClass+" ")}function s(e){var t=document.querySelectorAll(e);_=t.length;for(var n=_;n--;v.unshift(t[n]));}function a(){p.bottom=(window.innerHeight||document.documentElement.clientHeight)+m.offset,p.right=(window.innerWidth||document.documentElement.clientWidth)+m.offset}function c(e,t,n){e.attachEvent?e.attachEvent("on"+t,n):e.addEventListener(t,n,!1)}function u(e,t,n){e.detachEvent?e.detachEvent("on"+t,n):e.removeEventListener(t,n,!1)}function l(e,t){if(e&&t)for(var n=e.length,r=0;n>r&&t(e[r],r)!==!1;r++);}function d(e,t){var n=0;return function(){var r=+new Date;t>r-n||(n=r,e.apply(v,arguments))}}var f,m,p,v,_,h,y,g,b;return e.prototype.revalidate=function(){t()},e.prototype.load=function(e,t){o(e)||r(e,t)},e.prototype.destroy=function(){m.container&&l(m.container,function(e){u(e,"scroll",g)}),u(window,"scroll",g),u(window,"resize",g),u(window,"resize",b),_=0,v.length=0,y=!0},e})},{}],3:[function(e,t,n){!function(){"use strict";var n=e("./keyboardmute.js"),r=e("visibilityjs"),i=function(e){r.change(function(){r.hidden()?e.stop():n.isMuted()||e.start()})};t.exports=i}()},{"./keyboardmute.js":8,visibilityjs:14}],4:[function(e,t,n){!function(){"use strict";function e(){_="",h=[]}function n(e){p.value=e}function r(e){_=e,n(_)}function i(e,t){h.push([e,t]),r("")}function o(){n("58008")}function s(e,t){return e+t}function a(e,t){return e-t}function c(e,t){return e/t}function u(e,t){return e*t}function l(e){var t=e.charCode||e.keyCode;8===t&&_.length>0&&r(_.substr(0,_.length-1))}function d(t,l){var d=parseInt(_,10);if(clearTimeout(v),isNaN(t)||r(_+parseInt(t,10)),13===l||"="===t){for(var f,m,p=d,y=0;y<h.length;y++)f=h[y][0],m=h[y][1],p=f(m,p);r(""+p),h=[],v=setTimeout(o,1500)}else"C"===t?(e(),n("")):"-"===t?i(a,d):"+"===t?i(s,d):"/"===t?i(c,d):"*"===t&&i(u,d)}function f(e){var t=e.charCode||e.keyCode,n=String.fromCharCode(t);d(n,t)}function m(t){var r=t.target.textContent;"π"===r?(e(),n("DELICIOUS")):"sin"===r?(e(),n("NAUGHTY!")):"cos"===r?(e(),n("JUST COS")):"tan"===r?(e(),n("IN THE SUN")):d(r,null)}var p,v,_="",h=[],y=function(e){var t=document.getElementsByClassName("keypad")[0];p=e,document.addEventListener("keypress",f),document.addEventListener("keyup",l),t.addEventListener("click",m),n("5318008")};t.exports=y}()},{}],5:[function(e,t,n){!function(){"use strict";var e="   ______                                     _      \n  / ____/___ _____ ___  ___  _________  ____ ( )_____\n / /   / __ `/ __ `__ \\/ _ \\/ ___/ __ \\/ __ \\|// ___/\n/ /___/ /_/ / / / / / /  __/ /  / /_/ / / / / (__  ) \n\\____/\\__,_/_/ /_/ /_/\\___/_/   \\____/_/ /_/ /____/  \n _       __      __         __                       \n| |     / /___  / /________/ /                       \n| | /| / / __ \\/ / ___/ __  /                        \n| |/ |/ / /_/ / / /  / /_/ /                         \n|__/|__/\\____/_/_/   \\__,_/                          \n                                                     \n";console.log(e),t.exports=e}()},{}],6:[function(e,t,n){!function(){"use strict";var n=e("events").EventEmitter,r=new n,i=null,o=0,s=["http://www.oocities.org/meowser18/imeowcity.html","http://web.archive.org/web/20091026213650/http://geocities.com/gretlbug5/","http://www.oocities.org/erinsplace/shadow.html","http://www.oocities.org/cat5999/page2.html","http://www.oocities.org/heartland/estates/3879/","http://www.oocities.org/texaspepper46/page4.html","http://www.oocities.org/petsburgh/7233/","http://web.archive.org/web/20091027070408/http://geocities.com/Paris/Cafe/1809/"],a=function(){var e=Math.floor(Math.random()*s.length);return s[e]},c=function(e,t){var n=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,r=n>o;if(r){if(i.getAttribute("src")!==e){document.querySelectorAll(".js-catscape-loading")[0].classList.add("animation"),i.setAttribute("src",e),t?i.setAttribute("sandbox","allow-same-origin allow-scripts allow-forms"):i.removeAttribute("sandbox");var s=e,a=e.lastIndexOf("http");a>0&&(s=s.substring(a));var c=new RegExp("http://(.+?)/","gi");s=s.replace(c,"http://www.geocities.com/"),document.querySelectorAll(".js-iframe-navbar")[0].innerHTML=s;var u="Wayback Machine";-1!==e.indexOf("oocities")?u="OoCities":-1!==e.indexOf("reocities")&&(u="ReoCities"),document.querySelectorAll(".js-iframe-source")[0].innerHTML="Archived by "+u,document.querySelectorAll(".js-iframe-source")[0].setAttribute("href",e)}document.getElementsByTagName("body")[0].classList.add("modal-open"),document.querySelectorAll(".l-iframe-browser")[0].classList.remove("hidden")}return r},u=function(e){"undefined"!=typeof e&&(o=e);var t=document.querySelectorAll("a"),n=/(oocities|reocities|archive)/;i=document.querySelectorAll(".js-iframe")[0],i.onload=function(){document.querySelectorAll(".js-catscape-loading")[0].classList.remove("animation")};for(var s=function(e){var t=null!==e.target.getAttribute("data-has-sound"),n=c(e.target.getAttribute("href"),!t,!0);n&&(t&&r.emit("sound"),e.preventDefault())},u=0;u<t.length;u++){var l=t[u].getAttribute("href");l&&l.match(n)&&t[u].addEventListener("click",s)}for(var d=function(e){var t=e.target.getAttribute("data-close");document.querySelectorAll("."+t)[0].classList.add("hidden")},f=function(e){var t=e.target.getAttribute("data-close");document.querySelectorAll("."+t)[0].classList.add("hidden"),document.getElementsByTagName("body")[0].classList.remove("modal-open"),i.setAttribute("src",""),r.emit("close")},m=function(e){var t=e.target.getAttribute("data-open");document.querySelectorAll("."+t)[0].classList.remove("hidden")},p=document.querySelectorAll(".js-close-dialogue"),v=0;v<p.length;v++)p[v].addEventListener("click",d);for(var _=document.querySelectorAll(".js-close-modal"),h=0;h<_.length;h++)_[h].addEventListener("click",f);for(var y=document.querySelectorAll(".js-open-dialogue"),g=0;g<y.length;g++)y[g].addEventListener("click",m);var b=document.querySelectorAll(".js-open-cat")[0];b.addEventListener("click",function(){c(a())})};t.exports={init:u,on:function(e,t){r.on(e,t)}}}()},{events:12}],7:[function(e,t,n){!function(){"use strict";var e={getItem:function(e){return e?decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=\\s*([^;]*).*$)|^.*$"),"$1"))||null:null},setItem:function(e,t,n,r,i,o){if(!e||/^(?:expires|max\-age|path|domain|secure)$/i.test(e))return!1;var s="";if(n)switch(n.constructor){case Number:s=n===1/0?"; expires=Fri, 31 Dec 9999 23:59:59 GMT":"; max-age="+n;break;case String:s="; expires="+n;break;case Date:s="; expires="+n.toUTCString()}return document.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+s+(i?"; domain="+i:"")+(r?"; path="+r:"")+(o?"; secure":""),!0},removeItem:function(e,t,n){return this.hasItem(e)?(document.cookie=encodeURIComponent(e)+"=; expires=Thu, 01 Jan 1970 00:00:00 GMT"+(n?"; domain="+n:"")+(t?"; path="+t:""),!0):!1},hasItem:function(e){return e?new RegExp("(?:^|;\\s*)"+encodeURIComponent(e).replace(/[\-\.\+\*]/g,"\\$&")+"\\s*\\=").test(document.cookie):!1},keys:function(){for(var e=document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g,"").split(/\s*(?:\=[^;]*)?;\s*/),t=e.length,n=0;t>n;n++)e[n]=decodeURIComponent(e[n]);return e}};t.exports=e}()},{}],8:[function(e,t,n){!function(){"use strict";function n(){return a?(o.start(),a=!1):(o.stop(),a=!0),s.setItem("muted",a),a}function r(){a?(i.className=i.className.replace(/ is-on/g,""),i.className=i.className+" is-off"):(i.className=i.className.replace(/ is-off/g,""),i.className=i.className+" is-on")}var i,o=e("./sound.js"),s=e("./cookies.js"),a=!1;s.hasItem("muted")&&(a="true"===s.getItem("muted")),t.exports={init:function(){o.on("playing",function(e){e===!1?(a=!0,r()):e===!0&&(a=!1,r())}),i=document.getElementsByClassName("btn-audio")[0],i.addEventListener("click",function(){n(),r()},!1)},isMuted:function(){return a}}}()},{"./cookies.js":7,"./sound.js":10}],9:[function(e,t,n){!function(){"use strict";function e(e){var t=document.querySelector(e);if(null!==t){for(var n=t.cloneNode(!0),r=n.children.length+1;r--;)n.appendChild(n.children[Math.random()*r|0]);t.parentNode.replaceChild(n,t)}}t.exports=e}()},{}],10:[function(e,t,n){!function(){"use strict";function n(e,t){for(var n=["mp3","m4a","ac3","ogg"],r=[],i=0;i<n.length;i++)r.push(e+t+"."+n[i]);return r}function r(e,t,r,i){var o=n(e,t);a.play(o,r,i)}function i(e){for(var t,i=e.currentTarget,u=i.getAttribute("data-audio"),l=n(s,u),d="false"!==i.getAttribute("data-loop"),f=0;f<o.length;f++)t=o[f].parentElement,t.className=t.className.replace("is-active","");a.playing(l)?a.pause():d===!1?c.play(l,!0,!1):(r(s,u,!0,d),i.parentElement.className+=" is-active")}var o,s,a=e("./soundplayer.js")(),c=e("./soundplayer.js")(),u=e("events").EventEmitter,l=new u,d={init:function(e,t,n){s=e,o=document.querySelectorAll("a[data-audio]");for(var u=0;u<o.length;u++)o[u].addEventListener("click",i);c.init(),a.init(),a.on("playing",function(){l.emit("playing",!0)}),r(e,t,n,!0)},stop:function(){a.pause()},start:function(){a.resume()},on:function(e,t){l.on(e,t)}};t.exports=d}()},{"./soundplayer.js":11,events:12}],11:[function(e,t,n){!function(){"use strict";function n(){function t(e){return u[e]}function n(){c=!0,m.emit("playing")}function r(){null!==l&&(l.src="",l.removeEventListener("play",n,!1),l=null)}function i(e){for(var n,r=0;r<e.length;r++){var i=e[r],o=/\.([^.]+)$/.exec(i.split("?",1)[0]);if(o&&(o=o[1].toLowerCase()),t(o)){n=i;break}}return n}function o(e,t){l=new Audio,l.src=e,l.preload="auto",l.loop=t,l.load()}function s(){l.addEventListener("play",n,!1),setTimeout(function(){l.play()},0)}function a(){var e=new Audio,t=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n={mp3:!(!t&&!e.canPlayType("audio/mp3;").replace(/^no$/,"")),mpeg:!!t,opus:!!e.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/,""),ogg:!!e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),wav:!!e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),aac:!!e.canPlayType("audio/aac;").replace(/^no$/,""),m4a:!!(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),mp4:!!(e.canPlayType("audio/x-mp4;")||e.canPlayType("audio/mp4;")||e.canPlayType("audio/aac;")).replace(/^no$/,""),weba:!!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,""),webm:!!e.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/,"")};return n}var c=!1,u={},l=null,d="",f=e("events").EventEmitter,m=new f;return{init:function(){u=a()},play:function(e,t,n){var a=i(e);a!==d&&(r(),d=a,o(d,n)),t&&s()},playing:function(e){var t=!1;if(e&&c){var n=i(e);t=n===d}else t=t;return t},resume:function(){c=!0,l.play()},pause:function(){c=!1,l.pause()},unload:function(){r()},on:function(e,t){m.on(e,t)}}}t.exports=n}()},{events:12}],12:[function(e,t,n){function r(){this._events=this._events||{},this._maxListeners=this._maxListeners||void 0}function i(e){return"function"==typeof e}function o(e){return"number"==typeof e}function s(e){return"object"==typeof e&&null!==e}function a(e){return void 0===e}t.exports=r,r.EventEmitter=r,r.prototype._events=void 0,r.prototype._maxListeners=void 0,r.defaultMaxListeners=10,r.prototype.setMaxListeners=function(e){if(!o(e)||0>e||isNaN(e))throw TypeError("n must be a positive number");return this._maxListeners=e,this},r.prototype.emit=function(e){var t,n,r,o,c,u;if(this._events||(this._events={}),"error"===e&&(!this._events.error||s(this._events.error)&&!this._events.error.length)){if(t=arguments[1],t instanceof Error)throw t;throw TypeError('Uncaught, unspecified "error" event.')}if(n=this._events[e],a(n))return!1;if(i(n))switch(arguments.length){case 1:n.call(this);break;case 2:n.call(this,arguments[1]);break;case 3:n.call(this,arguments[1],arguments[2]);break;default:for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];n.apply(this,o)}else if(s(n)){for(r=arguments.length,o=new Array(r-1),c=1;r>c;c++)o[c-1]=arguments[c];for(u=n.slice(),r=u.length,c=0;r>c;c++)u[c].apply(this,o)}return!0},r.prototype.addListener=function(e,t){var n;if(!i(t))throw TypeError("listener must be a function");if(this._events||(this._events={}),this._events.newListener&&this.emit("newListener",e,i(t.listener)?t.listener:t),this._events[e]?s(this._events[e])?this._events[e].push(t):this._events[e]=[this._events[e],t]:this._events[e]=t,s(this._events[e])&&!this._events[e].warned){var n;n=a(this._maxListeners)?r.defaultMaxListeners:this._maxListeners,n&&n>0&&this._events[e].length>n&&(this._events[e].warned=!0,console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.",this._events[e].length),"function"==typeof console.trace&&console.trace())}return this},r.prototype.on=r.prototype.addListener,r.prototype.once=function(e,t){function n(){this.removeListener(e,n),r||(r=!0,t.apply(this,arguments))}if(!i(t))throw TypeError("listener must be a function");var r=!1;return n.listener=t,this.on(e,n),this},r.prototype.removeListener=function(e,t){var n,r,o,a;if(!i(t))throw TypeError("listener must be a function");if(!this._events||!this._events[e])return this;if(n=this._events[e],o=n.length,r=-1,n===t||i(n.listener)&&n.listener===t)delete this._events[e],this._events.removeListener&&this.emit("removeListener",e,t);else if(s(n)){for(a=o;a-->0;)if(n[a]===t||n[a].listener&&n[a].listener===t){r=a;break}if(0>r)return this;1===n.length?(n.length=0,delete this._events[e]):n.splice(r,1),this._events.removeListener&&this.emit("removeListener",e,t)}return this},r.prototype.removeAllListeners=function(e){var t,n;if(!this._events)return this;if(!this._events.removeListener)return 0===arguments.length?this._events={}:this._events[e]&&delete this._events[e],this;if(0===arguments.length){for(t in this._events)"removeListener"!==t&&this.removeAllListeners(t);return this.removeAllListeners("removeListener"),this._events={},this}if(n=this._events[e],i(n))this.removeListener(e,n);else for(;n.length;)this.removeListener(e,n[n.length-1]);return delete this._events[e],this},r.prototype.listeners=function(e){var t;return t=this._events&&this._events[e]?i(this._events[e])?[this._events[e]]:this._events[e].slice():[]},r.listenerCount=function(e,t){var n;return n=e._events&&e._events[t]?i(e._events[t])?1:e._events[t].length:0}},{}],13:[function(e,t,n){!function(e,n){"undefined"!=typeof t?t.exports=n():"function"==typeof define&&"object"==typeof define.amd?define(n):this[e]=n()}("domready",function(){var e,t=[],n=document,r=n.documentElement.doScroll,i="DOMContentLoaded",o=(r?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return o||n.addEventListener(i,e=function(){for(n.removeEventListener(i,e),o=1;e=t.shift();)e()}),function(e){o?setTimeout(e,0):t.push(e)}})},{}],14:[function(e,t,n){t.exports=e("./lib/visibility.timers.js")},{"./lib/visibility.timers.js":16}],15:[function(e,t,n){!function(e){"use strict";var n=-1,r={onVisible:function(e){var t=r.isSupported();if(!t||!r.hidden())return e(),t;var n=r.change(function(t,i){r.hidden()||(r.unbind(n),e())});return n},change:function(e){if(!r.isSupported())return!1;n+=1;var t=n;return r._callbacks[t]=e,r._listen(),t},unbind:function(e){delete r._callbacks[e]},afterPrerendering:function(e){var t=r.isSupported(),n="prerender";if(!t||n!=r.state())return e(),t;var i=r.change(function(t,o){n!=o&&(r.unbind(i),e())});return i},hidden:function(){return!(!r._doc.hidden&&!r._doc.webkitHidden)},state:function(){return r._doc.visibilityState||r._doc.webkitVisibilityState||"visible"},isSupported:function(){return!(!r._doc.visibilityState&&!r._doc.webkitVisibilityState)},_doc:document||{},_callbacks:{},_change:function(e){var t=r.state();for(var n in r._callbacks)r._callbacks[n].call(r._doc,e,t)},_listen:function(){if(!r._init){var e="visibilitychange";r._doc.webkitVisibilityState&&(e="webkit"+e);var t=function(){r._change.apply(r,arguments)};r._doc.addEventListener?r._doc.addEventListener(e,t):r._doc.attachEvent(e,t),r._init=!0}}};"undefined"!=typeof t&&t.exports?t.exports=r:e.Visibility=r}(this)},{}],16:[function(e,t,n){!function(n){"use strict";var r=-1,i=function(e){return e.every=function(t,n,i){e._time(),i||(i=n,n=null),r+=1;var o=r;return e._timers[o]={visible:t,hidden:n,callback:i},e._run(o,!1),e.isSupported()&&e._listen(),o},e.stop=function(t){return e._timers[t]?(e._stop(t),delete e._timers[t],!0):!1},e._timers={},e._time=function(){e._timed||(e._timed=!0,e._wasHidden=e.hidden(),e.change(function(){e._stopRun(),e._wasHidden=e.hidden()}))},e._run=function(t,r){var i,o=e._timers[t];if(e.hidden()){if(null===o.hidden)return;i=o.hidden}else i=o.visible;var s=function(){o.last=new Date,o.callback.call(n)};if(r){var a=new Date,c=a-o.last;i>c?o.delay=setTimeout(function(){s(),o.id=setInterval(s,i)},i-c):(s(),o.id=setInterval(s,i))}else o.id=setInterval(s,i)},e._stop=function(t){var n=e._timers[t];clearInterval(n.id),clearTimeout(n.delay),delete n.id,delete n.delay},e._stopRun=function(t){var n=e.hidden(),r=e._wasHidden;if(n&&!r||!n&&r)for(var i in e._timers)e._stop(i),e._run(i,!n)},e};"undefined"!=typeof t&&t.exports?t.exports=i(e("./visibility.core")):i(n.Visibility)}(window)},{"./visibility.core":15}]},{},[1]);
//# sourceMappingURL=../scripts/bundle-5948722fdd.js.map