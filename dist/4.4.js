(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1e3:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"emphasis",n(e,t))};var n=r(403)},1001:function(e,t,r){"use strict";e.exports=function(e,t){var r,i=Number(t.tagName.charAt(1))||1,o=e.wrapText;return e.wrapText=!1,r=e(t,"heading",{depth:i},n(e,t)),e.wrapText=o,r};var n=r(403)},1002:function(e,t,r){"use strict";e.exports=function(e,t){var r=t.properties.src,o=t.properties.title;if(r&&o)return{type:"link",title:null,url:n(e,r),children:[{type:"text",value:i(e,o)}]}};var n=r(437),i=r(413)},1003:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"image",{url:n(e,t.properties.src),title:t.properties.title||null,alt:t.properties.alt||""})};var n=r(437)},1004:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"inlineCode",i(e,n(t)))};var n=r(461),i=r(413)},1005:function(e,t,r){"use strict";e.exports=function(e,t){var r,n=t.properties,s=n.value||n.placeholder,p=[],f=[],h=-1;if(n.disabled||"hidden"===n.type||"file"===n.type)return;if("checkbox"===n.type||"radio"===n.type)return e(t,"text",c(e,e[n.checked?"checked":"unchecked"]));if("image"===n.type)return n.alt||s?e(t,"image",{url:a(e,n.src),title:n.title&&c(e,n.title)||null,alt:c(e,n.alt||s)}):[];s?f=[[s]]:"password"!==n.type&&"file"!==n.type&&"submit"!==n.type&&"reset"!==n.type&&"button"!==n.type&&n.list&&(r=String(n.list).toUpperCase(),u.call(e.nodeById,r)&&l(e.nodeById[r])&&(f=o(e,e.nodeById[r],n)));if(!f.length)return;"password"===n.type&&(f[0]=[i("•",f[0][0].length)]);if("url"===n.type||"email"===n.type){for(;++h<f.length;)s=a(e,f[h][0]),p.push(e(t,"link",{title:null,url:c(e,"email"===n.type?"mailto:"+s:s)},[{type:"text",value:c(e,f[h][1]||s)}])),h!==f.length-1&&p.push({type:"text",value:", "});return p}for(;++h<f.length;)p.push(f[h][1]?f[h][1]+" ("+f[h][0]+")":f[h][0]);return e(t,"text",c(e,p.join(", ")))};var n=r(123),i=r(29),o=r(565),u=r(460),a=r(437),c=r(413),l=n("datalist")},1006:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"link",{title:t.properties.title||null,url:i(e,t.properties.href)},n(e,t))};var n=r(403),i=r(437)},1007:function(e,t,r){"use strict";e.exports=function(e,t){var r,n,c,l,s=t.children[0],p=null;u(s)&&(n=s.children[0],!a(n)||"checkbox"!==n.properties.type&&"radio"!==n.properties.type||(p=Boolean(n.properties.checked),(l=i(s)).children=s.children.slice(1),(c=i(t)).children=[l].concat(t.children.slice(1))));return r=o(e,c||t),e(t,"listItem",{spread:r.length>1,checked:p},r)};var n=r(123),i=r(562),o=r(485),u=n("p"),a=n("input")},1008:function(e,t,r){"use strict";e.exports=function(e,t){var r=a(t),n=u(e,t),c=null;r&&(c=i(t,"start")?t.properties.start:1);return e(t,"list",{ordered:r,start:c,spread:o(n)},n)};var n=r(123),i=r(459),o=r(563),u=r(564),a=n("ol")},1009:function(e,t,r){"use strict";e.exports=function(e,t){var r,n=u(e,t),p=s(t)&&t.properties.poster,f=t.properties.src,h=-1;if(o({type:"root",children:n},"link",(function(){return r=!0,o.EXIT})),r||c.needed(n))return n;for(;!f&&++h<t.children.length;)l(t.children[h])&&(f=t.children[h].properties.src);p&&(n=[{type:"image",title:null,url:a(e,p),alt:i({children:n})}]);return{type:"link",title:t.properties.title||null,url:a(e,f),children:n}};var n=r(123),i=r(124),o=r(41),u=r(403),a=r(437),c=r(486),l=n("source"),s=n("video")},1010:function(e,t,r){"use strict";e.exports=function(e,t){var r=n(e,t);if(r.length)return e(t,"paragraph",r)};var n=r(403)},1011:function(e,t,r){"use strict";e.exports=function(e,t){var r,i=e.quotes[e.qNesting%e.quotes.length];return e.qNesting++,r=n(e,t),e.qNesting--,r.unshift({type:"text",value:i.charAt(0)}),r.push({type:"text",value:i.length>1?i.charAt(1):i}),r};var n=r(403)},1012:function(e,t,r){"use strict";e.exports=function(e,t){var r=n(e,t);(e.document||i.needed(r))&&(r=i(r));return e(t,"root",r)};var n=r(403),i=r(486)},1013:function(e,t,r){"use strict";e.exports=function(e,t){var r,o=n(e,t),u=-1,a=[];for(;++u<o.length;)r=o[u],a.push(r[1]?r[1]+" ("+r[0]+")":r[0]);if(a.length)return e(t,"text",i(e,a.join(", ")))};var n=r(565),i=r(413)},1014:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"strong",n(e,t))};var n=r(403)},1015:function(e,t,r){"use strict";e.exports=function(e,t){var r,i=e.wrapText;return e.wrapText=!1,r=e(t,"tableCell",n(e,t)),e.wrapText=i,r};var n=r(403)},1016:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"tableRow",n(e,t))};var n=r(403)},1017:function(e,t,r){"use strict";e.exports=function(e,t){var r=function(e){var t=!0,r=[null],n=0,o=0;return i(e,"element",(function(e){u(e)?t=!1:a(e)?(n++,o=0):c(e)&&(r[o]||(r[o]=e.properties.align||null),t&&n<2&&"th"===e.tagName&&(t=!1),o++)})),{align:r,headless:t}}(t);return e(t,"table",{align:r.align},function(e,t){var r,n,i=[],o=-1;t.headless&&i.push({type:"tableRow",children:[]});for(;++o<e.length;)"tableRow"===(r=e[o]).type?(n&&(r.children=n.concat(r.children),n=void 0),i.push(r)):(n||(n=[]),n.push(r));n&&((r=i[i.length-1]).children=r.children.concat(n));o=-1;for(;++o<i.length;)(r=i[o]).children=l(r.children,t);return i}(o(e,t),r))};var n=r(123),i=r(41),o=r(403),u=n("thead"),a=n("tr"),c=n(["th","td"]);function l(e,t){for(var r,n,i=[],o=-1;++o<e.length;)"tableCell"===(r=e[o]).type?(n&&(r.children=n.concat(r.children),n=void 0),i.push(r)):(n||(n=[]),n.push(r));for(n&&((r=i[i.length-1])||(r={type:"tableCell",children:[]},i.push(r)),r.children=r.children.concat(n)),o=i.length-1;++o<t.align.length;)i.push({type:"tableCell",children:[]});return i}},1018:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"text",n(e,t.value))};var n=r(413)},1019:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"text",i(e,n(t)))};var n=r(461),i=r(413)},1020:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"thematicBreak")}},1021:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"text","​")}},1057:function(e,t,r){"use strict";var n=r(983);e.exports=function(e,t){var r;e&&!e.process&&(r=e,e=null);void 0!==(r=r||t||{}).document&&null!==r.document||(r.document=!0);return e?function(e,t){return function(r,i,o){e.run(n(r,t),i,(function(e){o(e)}))}}(e,r):function(e){return function(t){return n(t,e)}}(r)}},403:function(e,t,r){"use strict";e.exports=function(e,t){var r,i=t.children||[],o=[],u=-1;for(;++u<i.length;)(r=n(e,i[u],t))&&(o=o.concat(r));return o};var n=r(561)},413:function(e,t,r){"use strict";e.exports=function(e,t){return e.wrapText?t:t.replace(/\r?\n|\r/g," ")}},437:function(e,t,r){"use strict";e.exports=function(e,t){if(null==t)return"";if(e.frozenBaseUrl&&"undefined"!=typeof URL)return String(new URL(t,e.frozenBaseUrl));return t}},459:function(e,t,r){"use strict";var n={}.hasOwnProperty;e.exports=function(e,t){var r,i;if(!e||!t||"object"!=typeof e||"element"!==e.type)return!1;return r=e.properties,null!=(i=r&&n.call(r,t)&&r[t])&&!1!==i}},460:function(e,t,r){"use strict";e.exports={}.hasOwnProperty},461:function(e,t,r){"use strict";var n=r(29),i=r(123),o=r(995);e.exports=function(e){var t,r,i,o,u=e.children||[],a=h(e),l=x(e,{}),s=-1;if("text"===e.type||"comment"===e.type)return g(e,{whiteSpace:l,breakBefore:!0,breakAfter:!0});t=[];for(;++s<u.length;)t=t.concat(d(u[s],s,e,{whiteSpace:l,breakBefore:s?null:a,breakAfter:s<u.length-1?c(u[s+1]):a}));s=-1,r=[];for(;++s<t.length;)"number"==typeof(i=t[s])?void 0!==o&&i>o&&(o=i):i&&(o&&r.push(n("\n",o)),o=0,r.push(i));return r.join("")};var u=/\n/g,a=/[\t ]+/g,c=i("br"),l=i("p"),s=i(["th","td"]),p=i("tr"),f=i(["datalist","head","noembed","noframes","rp","script","style","template","title","noscript",function(e){return(e.properties||{}).hidden},function(e){return"dialog"===e.tagName&&!(e.properties||{}).open}]),h=i(["caption","html","body","address","blockquote","center","dialog","div","figure","figcaption","footer","form,","header","hr","legend","listing","main","p","plaintext","pre","xmp","article","aside","h1","h2","h3","h4","h5","h6","hgroup","nav","section","dir","dd","dl","dt","menu","ol","ul"]);function d(e,t,r,n){return"element"===e.type?function(e,t,r,n){var i,u,a=x(e,n),g=e.children||[],v=-1,m=[];if(f(e))return m;c(e)||p(e)&&o(r,e,p)?u="\n":l(e)?(i=2,u=2):h(e)&&(i=1,u=1);for(;++v<g.length;)m=m.concat(d(g[v],v,e,{whiteSpace:a,breakBefore:v?null:i,breakAfter:v<g.length-1?c(g[v+1]):u}));s(e)&&o(r,e,s)&&m.push("\t");i&&m.unshift(i);u&&m.push(u);return m}(e,0,r,n):"text"===e.type?["normal"===n.whiteSpace?g(e,n):v(e)]:[]}function g(e,t){for(var r,n,i,o=String(e.value),a=[],c=[],l=0,s=-1;l<o.length;)u.lastIndex=l,n=(r=u.exec(o))?r.index:o.length,a.push(m(o.slice(l,n).replace(/[\u061c\u200e\u200f\u202a-\u202e\u2066-\u2069]/g,""),t.breakBefore,t.breakAfter)),l=n+1;for(;++s<a.length;)8203===a[s].charCodeAt(a[s].length-1)||s<a.length-1&&8203===a[s+1].charCodeAt(0)?(c.push(a[s]),i=""):a[s]&&(i&&c.push(i),c.push(a[s]),i=" ");return c.join("")}function v(e){return String(e.value)}function m(e,t,r){for(var n,i,o=[],u=0;u<e.length;)a.lastIndex=u,i=(n=a.exec(e))?n.index:e.length,u||i||!n||t||o.push(""),u!==i&&o.push(e.slice(u,i)),u=n?i+n[0].length:i;return u===i||r||o.push(""),o.join(" ")}function x(e,t){var r=e.properties||{},n=t.whiteSpace||"normal";switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return r.wrap?"pre-wrap":"pre";case"td":case"th":return r.noWrap?"nowrap":n;case"textarea":return"pre-wrap";default:return n}}},485:function(e,t,r){"use strict";e.exports=function(e,t){return i(n(e,t))};var n=r(403),i=r(486)},486:function(e,t,r){"use strict";e.exports=u,u.needed=c;var n=r(126),i=r(990),o=r(562);function u(e){return a(e,(function(e){var t=e[0];if(1===e.length&&"text"===t.type&&(" "===t.value||"\n"===t.value))return[];return{type:"paragraph",children:e}}))}function a(e,t,r){for(var n,o,u=r||s,a=function(e){var t,r=[],n=-1;for(;++n<e.length;)"delete"!==(t=e[n]).type&&"link"!==t.type||!c(t.children)?r.push(t):r=r.concat(l(t));return r}(e),p=[],f=-1;++f<a.length;)n=a[f],i(n)?(o||(o=[]),o.push(n)):(o&&(p=p.concat(t(o)),o=void 0),p=p.concat(u(n)));return o&&(p=p.concat(t(o))),p}function c(e){for(var t,r=-1;++r<e.length;)if(t=e[r],!i(t)||t.children&&c(t.children))return!0}function l(e){return a(e.children,(function(t){var r=n(!0,{},o(e));return r.children=t,r}),(function(t){var r=n(!0,{},o(e)),i=o(t);return i.children=[r],r.children=t.children,i}))}function s(e){return e}},561:function(e,t,r){"use strict";e.exports=function(e,t,r){var n;if("element"===t.type){if(t.properties&&"ignore"===t.properties.dataMdast)return;i.call(e.handlers,t.tagName)&&(n=e.handlers[t.tagName])}else i.call(e.handlers,t.type)&&(n=e.handlers[t.type]);return("function"==typeof n?n:u)(e,t,r)};var n=r(403),i=r(460),o=r(413);function u(e,t){return t.value?e(t,"text",o(e,t.value)):n(e,t)}},562:function(e,t,r){"use strict";e.exports=function(e){var t,r={};for(t in e)n.call(e,t)&&"children"!==t&&(r[t]=e[t]);return r};var n=r(460)},563:function(e,t,r){"use strict";e.exports=function(e){var t=-1;if(e.length>1)for(;++t<e.length;)if(e[t].spread)return!0;return!1}},564:function(e,t,r){"use strict";e.exports=function(e,t){var r=n(e,t),i=-1;for(;++i<r.length;)"listItem"!==r[i].type&&(r[i]={type:"listItem",spread:!1,checked:null,children:[r[i]]});return r};var n=r(403)},565:function(e,t,r){"use strict";var n=r(459),i=r(123),o=r(461),u=r(413);e.exports=function(e,t,r){var i,a,l,s,p,f=r||t.properties,h=c(t),d=Math.min(parseInt(f.size,10),0)||(f.multiple?4:1),g=-1,v=[],m=[];for(;++g<h.length;)n(h[g],"selected")&&v.push(h[g]);a=v.length?v:h,h=a.slice(0,d),g=-1;for(;++g<h.length;)i=h[g],l=u(e,o(i)),s=l||i.properties.label,p=i.properties.value||l,m.push([p,s===p?null:s]);return m};var a=i("option");function c(e){for(var t,r=e.children,i=-1,o=[];++i<r.length;)t=r[i],a(t)?n(t,"disabled")||o.push(t):t.children&&(o=o.concat(c(t)));return o}},983:function(e,t,r){"use strict";e.exports=function(e,t){var r,o=t||{},f={};return h.nodeById=f,h.baseFound=!1,h.frozenBaseUrl=null,h.wrapText=!0,h.qNesting=0,h.handlers=o.handlers?a(l,o.handlers):l,h.augment=d,h.document=o.document,h.checked=o.checked||"[x]",h.unchecked=o.unchecked||"[ ]",h.quotes=o.quotes||['"'],u(e,"element",(function(e){var t=n(e,"id")&&String(e.properties.id).toUpperCase();t&&!s.call(f,t)&&(f[t]=e)})),i({newlines:!0===o.newlines})(e),r=c(h,e,null),u(r,"text",(function(e,t,r){var n=r.children[t-1];if(n&&e.type===n.type)return n.value+=e.value,r.children.splice(t,1),n.position&&e.position&&(n.position.end=e.position.end),t-1;e.value=e.value.replace(/[\t ]*(\r?\n|\r)[\t ]*/,"$1"),p(r)&&(t||(e.value=e.value.replace(/^[\t ]+/,"")),t===r.children.length-1&&(e.value=e.value.replace(/[\t ]+$/,"")));if(!e.value)return r.children.splice(t,1),t})),r;function h(e,t,r,n){var i;return!n&&("string"==typeof r||"object"==typeof r&&"length"in r)&&(n=r,r={}),i=a({type:t},r),"string"==typeof n?i.value=n:n&&(i.children=n),d(e,i)}function d(e,t){return e.position&&(t.position=e.position),t}};var n=r(459),i=r(984),o=r(30),u=r(41),a=r(5),c=r(561),l=r(989),s=r(460),p=o(["heading","paragraph","root"])},984:function(e,t,r){"use strict";var n=r(58),i=r(985),o=r(30),u=r(62),a=r(986),c=r(987),l=r(988);e.exports=function(e){var t=(r=(e||{}).newlines?k:N,function(e){return String(e).replace(/[\t\n\v\f\r ]+/g,r)});var r;return function(e){g(e,{collapse:t,whitespace:"normal"})}};var s=o(["doctype","comment"]),p=o(["element","root"]),f=o(["root"]),h=o(["element"]),d=o(["text"]);function g(e,t){var r;if(p(e))return r=Object.assign({},t),(f(e)||b(e))&&(r.before=!0,r.after=!0),r.whitespace=function(e,t){var r=e.properties||{};switch(e.tagName){case"listing":case"plaintext":case"xmp":return"pre";case"nobr":return"nowrap";case"pre":return r.wrap?"pre-wrap":"pre";case"td":case"th":return r.noWrap?"nowrap":t.whitespace;case"textarea":return"pre-wrap";default:return t.whitespace}}(e,t),function(e,t){var r,n=t.before,i=t.after,o=e.children,u=o.length,a=-1;for(;++a<u;)(r=g(o[a],Object.assign({},t,{before:n,after:v(o,a,i)}))).remove?(o.splice(a,1),a--,u--):r.ignore||(n=r.stripAtStart),x(o[a])&&(n=!1);return{remove:!1,ignore:!1,stripAtStart:n||i}}(e,r);if(d(e)){if("normal"===t.whitespace)return function(e,t){var r=t.collapse(e.value),n=0,i=r.length,o={remove:!1,ignore:!1,stripAtStart:!1};t.before&&w(r.charAt(0))&&n++;n!==i&&w(r.charAt(i-1))&&(t.after?i--:o.stripAtStart=!0);n===i?o.remove=!0:e.value=r.slice(n,i);return o}(e,t);"nowrap"===t.whitespace&&(e.value=t.collapse(e.value))}return{remove:!1,ignore:s(e),stripAtStart:!1}}function v(e,t,r){for(var n,i,o=e.length;++t<o;)if(void 0===(i=m(n=e[t]))&&n.children&&!y(n)&&(i=v(n.children,-1)),"boolean"==typeof i)return i;return r}function m(e){if(h(e)){if(x(e))return!1;if(b(e))return!0}else if(d(e)){if(!u(e))return!1}else if(!s(e))return!1}function x(e){return i(e)||n(e,c)}function b(e){return n(e,a)}function y(e){var t=e.properties||{};return s(e)||n(e,l)||t.hidden}function w(e){return" "===e||"\n"===e}function k(e){var t=/\r?\n|\r/.exec(e);return t?t[0]:" "}function N(){return" "}},985:function(e,t,r){"use strict";var n=r(58);e.exports=function(e){return n(e,i)};var i=["audio","canvas","embed","iframe","img","math","object","picture","svg","video"]},986:function(e,t){e.exports=["br","wbr","li","table","caption","colgroup","col","thead","tbody","tfoot","tr","td","th","summary","optgroup","option","html","head","body","address","blockquote","center","dialog","div","figure","figcaption","footer","form","header","hr","legend","listing","main","p","plaintext","pre","xmp","article","aside","h1","h2","h3","h4","h5","h6","hgroup","nav","section","dir","dd","dl","dt","menu","ol","ul","li","th","td"]},987:function(e,t){e.exports=["button","input","select","textarea"]},988:function(e,t){e.exports=["area","base","basefont","dialog","datalist","head","link","meta","noembed","noframes","param","rp","script","source","style","template","track","title"]},989:function(e,t,r){"use strict";var n=r(403),i=r(485),o=r(991),u=r(992),a=r(993),c=r(994),l=r(997),s=r(998),p=r(999),f=r(1e3),h=r(1001),d=r(1002),g=r(1003),v=r(1004),m=r(1005),x=r(1006),b=r(1007),y=r(1008),w=r(1009),k=r(1010),N=r(1011),S=r(1012),A=r(1013),q=r(1014),B=r(1015),I=r(1016),j=r(1017),C=r(1018),T=r(1019),R=r(1020),U=r(1021);function z(){}t.root=S,t.text=C,t.comment=l,t.doctype=z,t.applet=z,t.area=z,t.basefont=z,t.bgsound=z,t.caption=z,t.col=z,t.colgroup=z,t.command=z,t.content=z,t.datalist=z,t.dialog=z,t.element=z,t.embed=z,t.frame=z,t.frameset=z,t.isindex=z,t.keygen=z,t.link=z,t.math=z,t.menu=z,t.menuitem=z,t.meta=z,t.nextid=z,t.noembed=z,t.noframes=z,t.optgroup=z,t.option=z,t.param=z,t.script=z,t.shadow=z,t.source=z,t.spacer=z,t.style=z,t.svg=z,t.template=z,t.title=z,t.track=z,t.abbr=n,t.acronym=n,t.bdi=n,t.bdo=n,t.big=n,t.blink=n,t.button=n,t.canvas=n,t.cite=n,t.data=n,t.details=n,t.dfn=n,t.font=n,t.ins=n,t.label=n,t.map=n,t.marquee=n,t.meter=n,t.nobr=n,t.noscript=n,t.object=n,t.output=n,t.progress=n,t.rb=n,t.rbc=n,t.rp=n,t.rt=n,t.rtc=n,t.ruby=n,t.slot=n,t.small=n,t.span=n,t.sup=n,t.sub=n,t.tbody=n,t.tfoot=n,t.thead=n,t.time=n,t.address=i,t.article=i,t.aside=i,t.body=i,t.center=i,t.div=i,t.fieldset=i,t.figcaption=i,t.figure=i,t.form=i,t.footer=i,t.header=i,t.hgroup=i,t.html=i,t.legend=i,t.main=i,t.multicol=i,t.nav=i,t.picture=i,t.section=i,t.a=x,t.audio=w,t.b=q,t.base=o,t.blockquote=u,t.br=a,t.code=v,t.dir=y,t.dl=p,t.dt=b,t.dd=b,t.del=s,t.em=f,t.h1=h,t.h2=h,t.h3=h,t.h4=h,t.h5=h,t.h6=h,t.hr=R,t.i=f,t.iframe=d,t.img=g,t.image=g,t.input=m,t.kbd=v,t.li=b,t.listing=c,t.mark=f,t.ol=y,t.p=k,t.plaintext=c,t.pre=c,t.q=N,t.s=s,t.samp=v,t.select=A,t.strike=s,t.strong=q,t.summary=k,t.table=j,t.td=B,t.textarea=T,t.th=B,t.tr=I,t.tt=v,t.u=f,t.ul=y,t.var=v,t.video=w,t.wbr=U,t.xmp=c},990:function(e,t,r){"use strict";var n=r(30)(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","link","linkReference","strong","text"]);n.displayName="isPhrasing",e.exports=n},991:function(e,t,r){"use strict";e.exports=function(e,t){e.baseFound||(e.frozenBaseUrl=t.properties.href,e.baseFound=!0)}},992:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"blockquote",n(e,t))};var n=r(485)},993:function(e,t,r){"use strict";e.exports=function(e,t){return e.wrapText?e(t,"break"):e(t,"text"," ")}},994:function(e,t,r){"use strict";e.exports=function(e,t){var r,i,s=t.children,p=-1;if(c(t))for(;++p<s.length;)if(l(s[p])&&n(s[p],"className")){r=s[p].properties.className;break}if(r)for(p=-1;++p<r.length;)if("language-"===r[p].slice(0,"language-".length)){i=r[p].slice("language-".length);break}return e(t,"code",{lang:i||null,meta:null},u(a(e,o(t))))};var n=r(459),i=r(123),o=r(461),u=r(996),a=r(413),c=i("pre"),l=i("code")},995:function(e,t,r){"use strict";var n=r(30);e.exports=function(e,t,r){var i,o,u,a=n(r);if(!e||!e.type||!e.children)throw new Error("Expected parent node");i=e.children,u=i.length,t&&t.type&&(t=i.indexOf(t));if(isNaN(t)||t<0||t===1/0)throw new Error("Expected positive finite index or child node");for(;++t<u;)if(o=i[t],a(o,t,e))return o;return null}},996:function(e,t,r){"use strict";e.exports=function(e){return String(e).replace(/\n+$/,"")}},997:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"html","\x3c!--"+n(e,t.value)+"--\x3e")};var n=r(413)},998:function(e,t,r){"use strict";e.exports=function(e,t){return e(t,"delete",n(e,t))};var n=r(403)},999:function(e,t,r){"use strict";e.exports=function(e,t){var r,n,o=t.children,s=-1,p=[],f=[],h={titles:[],definitions:[]};for(;++s<o.length;)n=o[s],p=p.concat(u(n)?n.children:n);s=-1;for(;++s<p.length;)n=p[s],a(n)?(c(p[s-1])&&(f.push(h),h={titles:[],definitions:[]}),h.titles.push(n)):h.definitions.push(n);f.push(h),s=-1,r=[];for(;++s<f.length;)(h=l(e,f[s].titles).concat(l(e,f[s].definitions))).length&&r.push({type:"listItem",spread:h.length>1,checked:null,children:h});if(r.length)return e(t,"list",{ordered:!1,start:null,spread:i(r)},r)};var n=r(123),i=r(563),o=r(564),u=n("div"),a=n("dt"),c=n("dd");function l(e,t){var r=o(e,{children:t});return r.length?1===r.length?r[0].children:[{type:"list",ordered:!1,start:null,spread:i(r),children:r}]:r}}}]);