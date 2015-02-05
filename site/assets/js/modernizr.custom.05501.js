window.Modernizr=function(t,e,n){function i(t){y.cssText=t}function o(t,e){return i(C.join(t+";")+(e||""))}function r(t,e){return typeof t===e}function s(t,e){return!!~(""+t).indexOf(e)}function a(t,e){for(var i in t){var o=t[i];if(!s(o,"-")&&y[o]!==n)return"pfx"==e?o:!0}return!1}function l(t,e,i){for(var o in t){var s=e[t[o]];if(s!==n)return i===!1?t[o]:r(s,"function")?s.bind(i||e):s}return!1}function c(t,e,n){var i=t.charAt(0).toUpperCase()+t.slice(1),o=(t+" "+x.join(i+" ")+i).split(" ");return r(e,"string")||r(e,"undefined")?a(o,e):(o=(t+" "+T.join(i+" ")+i).split(" "),l(o,e,n))}function d(){f.input=function(n){for(var i=0,o=n.length;o>i;i++)_[n[i]]=n[i]in w;return _.list&&(_.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),_}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),f.inputtypes=function(t){for(var i,o,r,s=0,a=t.length;a>s;s++)w.setAttribute("type",o=t[s]),i="text"!==w.type,i&&(w.value=$,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),r=e.defaultView,i=r.getComputedStyle&&"textfield"!==r.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(i=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=$)),k[t[s]]=!!i;return k}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var u,h,p="2.8.3",f={},m=!0,g=e.documentElement,v="modernizr",b=e.createElement(v),y=b.style,w=e.createElement("input"),$=":)",C=({}.toString," -webkit- -moz- -o- -ms- ".split(" ")),S="Webkit Moz O ms",x=S.split(" "),T=S.toLowerCase().split(" "),E={},k={},_={},z=[],M=z.slice,W=function(t,n,i,o){var r,s,a,l,c=e.createElement("div"),d=e.body,u=d||e.createElement("body");if(parseInt(i,10))for(;i--;)a=e.createElement("div"),a.id=o?o[i]:v+(i+1),c.appendChild(a);return r=["&#173;",'<style id="s',v,'">',t,"</style>"].join(""),c.id=v,(d?c:u).innerHTML+=r,u.appendChild(c),d||(u.style.background="",u.style.overflow="hidden",l=g.style.overflow,g.style.overflow="hidden",g.appendChild(u)),s=n(c,t),d?c.parentNode.removeChild(c):(u.parentNode.removeChild(u),g.style.overflow=l),!!s},P=function(e){var n=t.matchMedia||t.msMatchMedia;if(n)return n(e)&&n(e).matches||!1;var i;return W("@media "+e+" { #"+v+" { position: absolute; } }",function(e){i="absolute"==(t.getComputedStyle?getComputedStyle(e,null):e.currentStyle).position}),i},j=function(){function t(t,o){o=o||e.createElement(i[t]||"div"),t="on"+t;var s=t in o;return s||(o.setAttribute||(o=e.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(t,""),s=r(o[t],"function"),r(o[t],"undefined")||(o[t]=n),o.removeAttribute(t))),o=null,s}var i={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),A={}.hasOwnProperty;h=r(A,"undefined")||r(A.call,"undefined")?function(t,e){return e in t&&r(t.constructor.prototype[e],"undefined")}:function(t,e){return A.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var n=M.call(arguments,1),i=function(){if(this instanceof i){var o=function(){};o.prototype=e.prototype;var r=new o,s=e.apply(r,n.concat(M.call(arguments)));return Object(s)===s?s:r}return e.apply(t,n.concat(M.call(arguments)))};return i}),E.flexbox=function(){return c("flexWrap")},E.flexboxlegacy=function(){return c("boxDirection")},E.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},E.canvastext=function(){return!!f.canvas&&!!r(e.createElement("canvas").getContext("2d").fillText,"function")},E.postmessage=function(){return!!t.postMessage},E.websqldatabase=function(){return!!t.openDatabase},E.indexedDB=function(){return!!c("indexedDB",t)},E.hashchange=function(){return j("hashchange",t)&&(e.documentMode===n||e.documentMode>7)},E.history=function(){return!!t.history&&!!history.pushState},E.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},E.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},E.rgba=function(){return i("background-color:rgba(150,255,150,.5)"),s(y.backgroundColor,"rgba")},E.hsla=function(){return i("background-color:hsla(120,40%,100%,.5)"),s(y.backgroundColor,"rgba")||s(y.backgroundColor,"hsla")},E.multiplebgs=function(){return i("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(y.background)},E.backgroundsize=function(){return c("backgroundSize")},E.borderimage=function(){return c("borderImage")},E.borderradius=function(){return c("borderRadius")},E.boxshadow=function(){return c("boxShadow")},E.textshadow=function(){return""===e.createElement("div").style.textShadow},E.opacity=function(){return o("opacity:.55"),/^0.55$/.test(y.opacity)},E.cssanimations=function(){return c("animationName")},E.csscolumns=function(){return c("columnCount")},E.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return i((t+"-webkit- ".split(" ").join(e+t)+C.join(n+t)).slice(0,-t.length)),s(y.backgroundImage,"gradient")},E.cssreflections=function(){return c("boxReflect")},E.csstransforms=function(){return!!c("transform")},E.csstransforms3d=function(){var t=!!c("perspective");return t&&"webkitPerspective"in g.style&&W("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},E.csstransitions=function(){return c("transition")},E.generatedcontent=function(){var t;return W(["#",v,"{font:0/0 a}#",v,':after{content:"',$,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},E.video=function(){var t=e.createElement("video"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(i){}return n},E.audio=function(){var t=e.createElement("audio"),n=!1;try{(n=!!t.canPlayType)&&(n=new Boolean(n),n.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(i){}return n},E.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(t){return!1}},E.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(t){return!1}},E.webworkers=function(){return!!t.Worker},E.applicationcache=function(){return!!t.applicationCache};for(var D in E)h(E,D)&&(u=D.toLowerCase(),f[u]=E[D](),z.push((f[u]?"":"no-")+u));return f.input||d(),f.addTest=function(t,e){if("object"==typeof t)for(var i in t)h(t,i)&&f.addTest(i,t[i]);else{if(t=t.toLowerCase(),f[t]!==n)return f;e="function"==typeof e?e():e,m!==void 0&&m&&(g.className+=" "+(e?"":"no-")+t),f[t]=e}return f},i(""),b=w=null,f._version=p,f._prefixes=C,f._domPrefixes=T,f._cssomPrefixes=x,f.mq=P,f.hasEvent=j,f.testProp=function(t){return a([t])},f.testAllProps=c,f.testStyles=W,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+z.join(" "):""),f}(this,this.document),function(t,e){function n(t,e){var n=t.createElement("p"),i=t.getElementsByTagName("head")[0]||t.documentElement;return n.innerHTML="x<style>"+e+"</style>",i.insertBefore(n.lastChild,i.firstChild)}function i(){var t=S.elements;return"string"==typeof t?t.split(" "):t}function o(t){var e=C[t[w]];return e||(e={},$++,t[w]=$,C[$]=e),e}function r(t,n,i){if(n||(n=e),m)return n.createElement(t);i||(i=o(n));var r;return r=i.cache[t]?i.cache[t].cloneNode():y.test(t)?(i.cache[t]=i.createElem(t)).cloneNode():i.createElem(t),!r.canHaveChildren||b.test(t)||r.tagUrn?r:i.frag.appendChild(r)}function s(t,n){if(t||(t=e),m)return t.createDocumentFragment();n=n||o(t);for(var r=n.frag.cloneNode(),s=0,a=i(),l=a.length;l>s;s++)r.createElement(a[s]);return r}function a(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(n){return S.shivMethods?r(n,t,e):e.createElem(n)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+i().join().replace(/\w+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(S,e.frag)}function l(t){t||(t=e);var i=o(t);return S.shivCSS&&!f&&!i.hasCSS&&(i.hasCSS=!!n(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||a(t,i),t}function c(t){for(var e,n=t.getElementsByTagName("*"),o=n.length,r=RegExp("^(?:"+i().join("|")+")$","i"),s=[];o--;)e=n[o],r.test(e.nodeName)&&s.push(e.applyElement(d(e)));return s}function d(t){for(var e,n=t.attributes,i=n.length,o=t.ownerDocument.createElement(T+":"+t.nodeName);i--;)e=n[i],e.specified&&o.setAttribute(e.nodeName,e.nodeValue);return o.style.cssText=t.style.cssText,o}function u(t){for(var e,n=t.split("{"),o=n.length,r=RegExp("(^|[\\s,>+~])("+i().join("|")+")(?=[[\\s,>+~#.:]|$)","gi"),s="$1"+T+"\\:$2";o--;)e=n[o]=n[o].split("}"),e[e.length-1]=e[e.length-1].replace(r,s),n[o]=e.join("}");return n.join("{")}function h(t){for(var e=t.length;e--;)t[e].removeNode()}function p(t){function e(){clearTimeout(s._removeSheetTimer),i&&i.removeNode(!0),i=null}var i,r,s=o(t),a=t.namespaces,l=t.parentWindow;return!E||t.printShived?t:(a[T]===void 0&&a.add(T),l.attachEvent("onbeforeprint",function(){e();for(var o,s,a,l=t.styleSheets,d=[],h=l.length,p=Array(h);h--;)p[h]=l[h];for(;a=p.pop();)if(!a.disabled&&x.test(a.media)){try{o=a.imports,s=o.length}catch(f){s=0}for(h=0;s>h;h++)p.push(o[h]);try{d.push(a.cssText)}catch(f){}}d=u(d.reverse().join("")),r=c(t),i=n(t,d)}),l.attachEvent("onafterprint",function(){h(r),clearTimeout(s._removeSheetTimer),s._removeSheetTimer=setTimeout(e,500)}),t.printShived=!0,t)}var f,m,g="3.7.0",v=t.html5||{},b=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,y=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,w="_html5shiv",$=0,C={};(function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",f="hidden"in t,m=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return t.cloneNode===void 0||t.createDocumentFragment===void 0||t.createElement===void 0}()}catch(n){f=!0,m=!0}})();var S={elements:v.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:g,shivCSS:v.shivCSS!==!1,supportsUnknownElements:m,shivMethods:v.shivMethods!==!1,type:"default",shivDocument:l,createElement:r,createDocumentFragment:s};t.html5=S,l(e);var x=/^$|\b(?:all|print)\b/,T="html5shiv",E=!m&&function(){var n=e.documentElement;return e.namespaces!==void 0&&e.parentWindow!==void 0&&n.applyElement!==void 0&&n.removeNode!==void 0&&t.attachEvent!==void 0}();S.type+=" print",S.shivPrint=p,p(e)}(this,document),function(t,e,n){function i(t){return"[object Function]"==g.call(t)}function o(t){return"string"==typeof t}function r(){}function s(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function a(){var t=v.shift();b=1,t?t.t?f(function(){("c"==t.t?h.injectCss:h.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),a()):b=0}function l(t,n,i,o,r,l,c){function d(e){if(!p&&s(u.readyState)&&(y.r=p=1,!b&&a(),u.onload=u.onreadystatechange=null,e)){"img"!=t&&f(function(){$.removeChild(u)},50);for(var i in E[n])E[n].hasOwnProperty(i)&&E[n][i].onload()}}var c=c||h.errorTimeout,u=e.createElement(t),p=0,g=0,y={t:i,s:n,e:r,a:l,x:c};1===E[n]&&(g=1,E[n]=[]),"object"==t?u.data=n:(u.src=n,u.type=t),u.width=u.height="0",u.onerror=u.onload=u.onreadystatechange=function(){d.call(this,g)},v.splice(o,0,y),"img"!=t&&(g||2===E[n]?($.insertBefore(u,w?null:m),f(d,c)):E[n].push(u))}function c(t,e,n,i,r){return b=0,e=e||"j",o(t)?l("c"==e?S:C,t,e,this.i++,n,i,r):(v.splice(this.i++,0,t),1==v.length&&a()),this}function d(){var t=h;return t.loader={load:c,i:0},t}var u,h,p=e.documentElement,f=t.setTimeout,m=e.getElementsByTagName("script")[0],g={}.toString,v=[],b=0,y="MozAppearance"in p.style,w=y&&!!e.createRange().compareNode,$=w?p:m.parentNode,p=t.opera&&"[object Opera]"==g.call(t.opera),p=!!e.attachEvent&&!p,C=y?"object":p?"script":"img",S=p?"script":C,x=Array.isArray||function(t){return"[object Array]"==g.call(t)},T=[],E={},k={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};h=function(t){function e(t){var e,n,i,t=t.split("!"),o=T.length,r=t.pop(),s=t.length,r={url:r,origUrl:r,prefixes:t};for(n=0;s>n;n++)i=t[n].split("="),(e=k[i.shift()])&&(r=e(r,i));for(n=0;o>n;n++)r=T[n](r);return r}function s(t,o,r,s,a){var l=e(t),c=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(o&&(o=i(o)?o:o[t]||o[s]||o[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,o,r,s,a):(E[l.url]?l.noexec=!0:E[l.url]=1,r.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":n,l.noexec,l.attrs,l.timeout),(i(o)||i(c))&&r.load(function(){d(),o&&o(l.origUrl,a,s),c&&c(l.origUrl,a,s),E[l.url]=2})))}function a(t,e){function n(t,n){if(t){if(o(t))n||(u=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}),s(t,u,e,0,c);else if(Object(t)===t)for(l in a=function(){var e,n=0;for(e in t)t.hasOwnProperty(e)&&n++;return n}(),t)t.hasOwnProperty(l)&&(!n&&!--a&&(i(u)?u=function(){var t=[].slice.call(arguments);h.apply(this,t),p()}:u[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(h[l])),s(t[l],u,e,l,c))}else!n&&p()}var a,l,c=!!t.test,d=t.load||t.both,u=t.callback||r,h=u,p=t.complete||r;n(c?t.yep:t.nope,!!d),d&&n(d)}var l,c,u=this.yepnope.loader;if(o(t))s(t,0,u,0);else if(x(t))for(l=0;t.length>l;l++)c=t[l],o(c)?s(c,0,u,0):x(c)?h(c):Object(c)===c&&a(c,u);else Object(t)===t&&a(t,u)},h.addPrefix=function(t,e){k[t]=e},h.addFilter=function(t){T.push(t)},h.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",u=function(){e.removeEventListener("DOMContentLoaded",u,0),e.readyState="complete"},0)),t.yepnope=d(),t.yepnope.executeStack=a,t.yepnope.injectJs=function(t,n,i,o,l,c){var d,u,p=e.createElement("script"),o=o||h.errorTimeout;p.src=t;for(u in i)p.setAttribute(u,i[u]);n=c?a:n||r,p.onreadystatechange=p.onload=function(){!d&&s(p.readyState)&&(d=1,n(),p.onload=p.onreadystatechange=null)},f(function(){d||(d=1,n(1))},o),l?p.onload():m.parentNode.insertBefore(p,m)},t.yepnope.injectCss=function(t,n,i,o,s,l){var c,o=e.createElement("link"),n=l?a:n||r;o.href=t,o.rel="stylesheet",o.type="text/css";for(c in i)o.setAttribute(c,i[c]);s||(m.parentNode.insertBefore(o,m),f(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},Modernizr.addTest("bgpositionxy",function(){return Modernizr.testStyles("#modernizr {background-position: 3px 5px;}",function(t){var e=window.getComputedStyle?getComputedStyle(t,null):t.currentStyle,n="3px"==e.backgroundPositionX||"3px"==e["background-position-x"],i="5px"==e.backgroundPositionY||"5px"==e["background-position-y"];return n&&i})}),function(){var t=document.createElement("a"),e=t.style,n="right 10px bottom 10px";Modernizr.addTest("bgpositionshorthand",function(){return e.cssText="background-position: "+n+";",e.backgroundPosition===n})}(),function(){function t(t){return window.getComputedStyle?getComputedStyle(t,null).getPropertyValue("background"):t.currentStyle.background}Modernizr.testStyles(" #modernizr { background-repeat: round; } ",function(e){Modernizr.addTest("bgrepeatround","round"==t(e))}),Modernizr.testStyles(" #modernizr { background-repeat: space; } ",function(e){Modernizr.addTest("bgrepeatspace","space"==t(e))})}(),Modernizr.testStyles("#modernizr{background-size:cover}",function(t){var e=window.getComputedStyle?window.getComputedStyle(t,null):t.currentStyle;Modernizr.addTest("bgsizecover","cover"==e.backgroundSize)}),Modernizr.addTest("csscalc",function(){var t="width:",e="calc(10px);",n=document.createElement("div");return n.style.cssText=t+Modernizr._prefixes.join(e+t),!!n.style.length}),Modernizr.addTest("mediaqueries",Modernizr.mq("only all")),Modernizr.addTest("lastchild",function(){return Modernizr.testStyles("#modernizr div {width:100px} #modernizr :last-child{width:200px;display:block}",function(t){return t.lastChild.offsetWidth>t.firstChild.offsetWidth},2)}),Modernizr.addTest("cssfilters",function(){var t=document.createElement("div");return t.style.cssText=Modernizr._prefixes.join("filter:blur(2px); "),!!t.style.length&&(void 0===document.documentMode||document.documentMode>9)}),Modernizr.addTest("overflowscrolling",function(){return Modernizr.testAllProps("overflowScrolling")}),Modernizr.addTest("placeholder",function(){return"placeholder"in(Modernizr.input||document.createElement("input"))&&"placeholder"in(Modernizr.textarea||document.createElement("textarea"))}),function(t,e){e.formvalidationapi=!1,e.formvalidationmessage=!1,e.addTest("formvalidation",function(){var n=t.createElement("form");if("checkValidity"in n&&"addEventListener"in n){if("reportValidity"in n)return!0;var i,o=!1;return e.formvalidationapi=!0,n.addEventListener("submit",function(t){window.opera||t.preventDefault(),t.stopPropagation()},!1),n.innerHTML='<input name="modTest" required><button></button>',e.testStyles("#modernizr form{position:absolute;top:-99999em}",function(t){t.appendChild(n),i=n.getElementsByTagName("input")[0],i.addEventListener("invalid",function(t){o=!0,t.preventDefault(),t.stopPropagation()},!1),e.formvalidationmessage=!!i.validationMessage,n.getElementsByTagName("button")[0].click()}),o}return!1})}(document,window.Modernizr),Modernizr.addTest("fileinput",function(){var t=document.createElement("input");return t.type="file",!t.disabled}),Modernizr.addTest("formattribute",function(){var t,e=document.createElement("form"),n=document.createElement("input"),i=document.createElement("div"),o="formtest"+(new Date).getTime(),r=!1;return e.id=o,document.createAttribute&&(t=document.createAttribute("form"),t.nodeValue=o,n.setAttributeNode(t),i.appendChild(e),i.appendChild(n),document.documentElement.appendChild(i),r=1===e.elements.length&&n.form==e,i.parentNode.removeChild(i)),r});