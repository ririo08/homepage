(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{307:function(t,e,l){var content=l(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(30).default)("ae7d2712",content,!0,{sourceMap:!1})},315:function(t,e,l){"use strict";l(307)},316:function(t,e,l){var n=l(29)(!1);n.push([t.i,"[dir=ltr] .movielistContainer{margin-left:auto}[dir=ltr] .movielistContainer,[dir=rtl] .movielistContainer{margin-right:auto}[dir=rtl] .movielistContainer{margin-left:auto}.movielistContainer{max-width:1000px}.grayscreen{position:absolute;width:100%;height:100%;background-color:#000;opacity:.5;z-index:8;display:none}.grayscreen-active{display:block}.movielist-entrylist{font-weight:700;width:100%;padding-left:5px}.movielist-entrylist p{font-weight:400}.movielist-jstarget{font-weight:700;color:red}.listTable-links{display:block;padding-left:20px;margin-bottom:1.5rem}.listTable-links a{margin-left:.5rem}.youlink a:hover{color:red}",""]),t.exports=n},333:function(t,e,l){"use strict";l.r(e);l(19),l(35);var n={asyncData:function(t){return t.$axios.get("https://sheets.googleapis.com/v4/spreadsheets/1ZxI-QHaLyLTlERtTloxvnTFXO02onsMriR_UVSam6yE/values/movieList?key=AIzaSyAe5CX3okoCZT00uxT2ckdRv6oUJ3YNj9o").then((function(t){for(var e=t.data.values,l=e[0][0],n=e[0][1],o=e[0][2],r=[],i=1;i<e.length;i++){var v={};v[l]=e[i][0],v[n]=e[i][1],v[o]=e[i][2],r.push(v)}return{lockerStatus:r}}))}},o=(l(315),l(18)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[l("div",{staticClass:"globalBox"},[l("h2",{staticClass:"globalBox-title"},[t._v("動画リスト")]),t._v(" "),l("p",[t._v("\n      ここでは今までにプレイしたゲームの映像リンク等を貼っていきます。"),l("br"),t._v("\n      実況は「実況動画」リンクから（リリオが編集して見やすくしたやつです。）"),l("br"),t._v("\n      配信は「配信アーカイブ」リンクから！"),l("br"),t._v("\n      現在"),l("span",{staticClass:"movielist-jstarget",attrs:{id:"movielist-jstarget"}},[t._v(t._s(this.lockerStatus.length+1))]),t._v("シリーズを配信中！\n    ")])]),t._v(" "),l("div",{staticClass:"movielist-flex"},[l("div",{staticClass:"movielist-entrylist"},[l("p",[t._v("0-1 A-Z あ-ん シリーズ順で並べています。")]),t._v(" "),l("dt",{staticClass:"listTable-title",staticStyle:{color:"rgb(185, 89, 9)"}},[t._v("\n        一緒に見ようシリーズ\n      ")]),t._v(" "),t._m(0),t._v(" "),t._l(this.lockerStatus,(function(e){return l("div",{key:e.Title},[l("dt",{staticClass:"listTable-title"},[t._v(t._s(e.Title))]),t._v(" "),l("dd",{staticClass:"listTable-links youlink"},[e.StreamLink?l("a",{attrs:{href:e.StreamLink,target:"_blank"}},[t._v("配信アーカイブ")]):t._e(),t._v(" "),e.MovieLink?l("a",{attrs:{href:e.MovieLink,target:"_blank"}},[t._v("実況動画")]):t._e()])])}))],2)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("dd",{staticClass:"listTable-links youlink"},[l("a",{attrs:{href:"https://www.youtube.com/playlist?list=PL_KrJ2Q-UZsG_1EC0W9k71ubsCSemBZZY",target:"piframe"}},[t._v("YouTube")])])}],!1,null,null,null);e.default=component.exports}}]);