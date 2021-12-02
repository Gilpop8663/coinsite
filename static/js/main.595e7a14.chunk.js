(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var c=t(0),i=t.n(c),o=t(21),r=t.n(o),a=t(13),l=t(14),s=t(5),d=t(20),j=t(8),u=t(29),h=t(4),b="https://api.coinpaprika.com/v1";function x(){return fetch("".concat(b,"/coins")).then((function(n){return n.json()}))}function p(n){return fetch("".concat(b,"/tickers/").concat(n)).then((function(n){return n.json()}))}var O,g=t(45),f=t.n(g),m=Object(l.b)({key:"isDark",default:!0}),v=t(1),y=h.c.div(O||(O=Object(s.a)(["\n  margin-top: 30px;\n"])));var C,k,S,_,q,w,F=function(n){var e=n.coinId,t=Object(l.c)(m),c=Object(a.useQuery)(["ohlc",e],(function(){return function(n){var e=Math.floor(Date.now()/1e3),t=e-1209600;return fetch("".concat(b,"/coins/").concat(n,"/ohlcv/historical?start=").concat(t,"&end=").concat(e)).then((function(n){return n.json()}))}(e)}),{refetchInterval:1e4}),i=c.isLoading,o=c.data;return Object(v.jsx)(y,{children:i?"Loading Chart ...":Object(v.jsx)(f.a,{width:480,height:300,type:"candlestick",series:[{data:null===o||void 0===o?void 0:o.map((function(n){return{x:n.time_close.slice(5,10),y:[n.open.toFixed(2),n.high.toFixed(2),n.low.toFixed(2),n.close.toFixed(2)]}}))}],options:{chart:{type:"candlestick",width:1e3,height:500},theme:{mode:t?"dark":"light"},title:{text:"".concat(e," Chart"),align:"left"},xaxis:{type:"datetime",labels:{rotate:0}},yaxis:{tooltip:{enabled:!0}}}})})},D=Object(h.d)(C||(C=Object(s.a)(["\n 0%{\n    opacity:0;\n  }50%{\n\n    opacity:0.5;\n  }100%{\n    \n    opacity:1;\n  }\n"]))),L=h.c.div(k||(k=Object(s.a)(["\n  width: 100%;\n"]))),M=h.c.div(S||(S=Object(s.a)(["\n  width: 100%;\n"]))),P=h.c.div(_||(_=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n  background-color: ",";\n  color: ",";\n  padding: 10px 15px;\n  margin-top: 10px;\n  border-radius: 15px;\n  animation: "," 0.5s ease-in-out;\n  &:first-child {\n    margin-top: 30px;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),D),U=h.c.span(q||(q=Object(s.a)(["\n  font-size: 12px;\n"]))),I=h.c.span(w||(w=Object(s.a)(["\n  color: ",";\n  font-size: 18px;\n"])),(function(n){return n.isMinus?n.theme.plusColor:n.theme.minusColor}));var A,z,Q,E,H,Y,B,N,R,T,$,J,K=function(n){var e=n.coinId,t=Object(a.useQuery)(["price",e],(function(){return p(e)}),{refetchInterval:1e4}),c=t.isLoading,i=t.data;return Object(v.jsx)(L,{children:c?"Loading Price...":Object(v.jsxs)(M,{children:[Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Current Prices : "}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.price.toString().slice(0,1)),children:"$".concat(null===i||void 0===i?void 0:i.quotes.USD.price.toFixed(3))})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Percent Change 12 Hours : "}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.percent_change_12h.toString().slice(0,1)),children:"".concat(null===i||void 0===i?void 0:i.quotes.USD.percent_change_12h,"%")})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Percent Change 24 Hourss : "}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h.toString().slice(0,1)),children:"".concat(null===i||void 0===i?void 0:i.quotes.USD.percent_change_24h,"%")})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Percent Change 7 days : "}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d.toString().slice(0,1)),children:"".concat(null===i||void 0===i?void 0:i.quotes.USD.percent_change_7d,"%")})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Volume Change 24hours :"}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.volume_24h_change_24h.toString().slice(0,1)),children:"$".concat(null===i||void 0===i?void 0:i.quotes.USD.volume_24h_change_24h)})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Maximum Price : "}),Object(v.jsx)(I,{isMinus:"-"!==(null===i||void 0===i?void 0:i.quotes.USD.ath_price.toString().slice(0,1)),children:"$".concat(null===i||void 0===i?void 0:i.quotes.USD.ath_price.toFixed(3))})]}),Object(v.jsxs)(P,{children:[Object(v.jsx)(U,{children:"Maximum Price Date : "}),Object(v.jsx)(I,{isMinus:!0,children:"".concat(null===i||void 0===i?void 0:i.quotes.USD.ath_date.slice(0,10))})]})]})})},V=h.c.div(A||(A=Object(s.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),X=h.c.span(z||(z=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),G=h.c.header(Q||(Q=Object(s.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 15vh;\n"]))),W=h.c.div(E||(E=Object(s.a)(["\n  font-size: 48px;\n  color: ",";\n  text-align: center;\n"])),(function(n){return n.theme.accentColor})),Z=h.c.div(H||(H=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),nn=h.c.div(Y||(Y=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  padding: 20px 20px;\n  border-radius: 15px;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 30px;\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor})),en=h.c.div(B||(B=Object(s.a)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n"]))),tn=h.c.span(N||(N=Object(s.a)(["\n  font-size: 12px;\n  text-align: center;\n  margin-bottom: 5px;\n"]))),cn=h.c.span(R||(R=Object(s.a)(["\n  font-size: 16px;\n  text-align: center;\n  line-height: 20px;\n"]))),on=h.c.div(T||(T=Object(s.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n"]))),rn=h.c.span($||($=Object(s.a)(["\n  text-align: center;\n  font-size: 16px;\n  padding: 10px;\n  background-color: ",";\n  color: ",";\n  border-radius: 10px;\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.isActive?n.theme.accentColor:n.theme.bgColor})),an=h.c.div(J||(J=Object(s.a)(["\n  text-align: center;\n  color: ",";\n  background-color: ",";\n  border-radius: 5px;\n  padding: 10px;\n  right: 200px;\n  &:hover {\n    color: ",";\n    transition: color 0.2s ease-in-out;\n  }\n  a {\n    display: block;\n  }\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.accentColor}));var ln,sn,dn,jn,un,hn,bn,xn,pn=function(){var n=Object(j.g)().coinId,e=Object(j.f)().state,t=Object(j.h)("/".concat(n,"/price")),c=Object(j.h)("/".concat(n,"/chart")),i=Object(a.useQuery)(["coinInfo",n],(function(){return function(n){return fetch("".concat(b,"/coins/").concat(n)).then((function(n){return n.json()}))}(n)}),{refetchInterval:1e4}),o=i.isLoading,r=i.data,l=Object(a.useQuery)(["tickersInfo",n],(function(){return p(n)}),{refetchInterval:1e4}),s=l.isLoading,h=l.data,x=o||s;return Object(v.jsxs)(V,{children:[Object(v.jsx)(u.a,{children:Object(v.jsx)("title",{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===r||void 0===r?void 0:r.name})}),Object(v.jsxs)(G,{children:[Object(v.jsx)(an,{children:Object(v.jsx)(d.b,{to:"/",children:"Home"})}),Object(v.jsx)(W,{children:(null===e||void 0===e?void 0:e.name)?e.name:x?"Loading...":null===r||void 0===r?void 0:r.name}),Object(v.jsx)("div",{}),Object(v.jsx)("div",{})]}),x?Object(v.jsx)(X,{children:"Loading..."}):Object(v.jsxs)(Z,{children:[Object(v.jsxs)(nn,{children:[Object(v.jsxs)(en,{children:[Object(v.jsx)(tn,{children:"RANK:"}),Object(v.jsx)(cn,{children:null===r||void 0===r?void 0:r.rank})]}),Object(v.jsxs)(en,{children:[Object(v.jsx)(tn,{children:"SYMBOL:"}),Object(v.jsx)(cn,{children:null===r||void 0===r?void 0:r.symbol})]}),Object(v.jsxs)(en,{children:[Object(v.jsx)(tn,{children:"OPEN SOURCE:"}),Object(v.jsx)(cn,{children:(null===r||void 0===r?void 0:r.open_source)?"Yes":"No"})]})]}),Object(v.jsx)(nn,{children:Object(v.jsx)(cn,{children:null===r||void 0===r?void 0:r.description})}),Object(v.jsxs)(nn,{children:[Object(v.jsxs)(en,{children:[Object(v.jsx)(tn,{children:"TOTAL SUPPLY:"}),Object(v.jsx)(cn,{children:null===h||void 0===h?void 0:h.total_supply})]}),Object(v.jsxs)(en,{children:[Object(v.jsx)(tn,{children:"MAX SUPPLY:"}),Object(v.jsx)(cn,{children:null===h||void 0===h?void 0:h.max_supply})]})]}),Object(v.jsxs)(on,{children:[Object(v.jsx)(rn,{isActive:null!==c,children:Object(v.jsx)(d.b,{to:"/".concat(n,"/chart"),children:"Chart"})}),Object(v.jsx)(rn,{isActive:null!==t,children:Object(v.jsx)(d.b,{to:"/".concat(n,"/price"),children:"Price"})})]}),Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/".concat(n,"/chart"),children:Object(v.jsx)(F,{coinId:n})}),Object(v.jsx)(j.a,{path:"/".concat(n,"/price"),children:Object(v.jsx)(K,{coinId:n})})]})]})]})},On=h.c.div(ln||(ln=Object(s.a)(["\n  padding: 0px 20px;\n  max-width: 480px;\n  margin: 0 auto;\n"]))),gn=h.c.span(sn||(sn=Object(s.a)(["\n  text-align: center;\n  display: block;\n"]))),fn=h.c.header(dn||(dn=Object(s.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 15vh;\n"]))),mn=h.c.div(jn||(jn=Object(s.a)(["\n  position: absolute;\n  font-size: 48px;\n  color: ",";\n"])),(function(n){return n.theme.accentColor})),vn=h.c.img(un||(un=Object(s.a)(["\n  width: 35px;\n  height: 35px;\n  margin-right: 10px;\n"]))),yn=h.c.ul(hn||(hn=Object(s.a)([""]))),Cn=h.c.li(bn||(bn=Object(s.a)(["\n  background-color: ",";\n  color: ",";\n  margin-bottom: 10px;\n  border-radius: 15px;\n  a {\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    transition: color 0.2s ease-in-out;\n  }\n  &:hover {\n    a {\n      color: ",";\n    }\n  }\n"])),(function(n){return n.theme.textColor}),(function(n){return n.theme.bgColor}),(function(n){return n.theme.accentColor})),kn=h.c.button(xn||(xn=Object(s.a)(["\n  position: relative;\n  left: 150px;\n  border-radius: 15px;\n  padding: 5px 10px;\n  background-color: ",";\n  color: ",";\n  border: 1px solid ",";\n"])),(function(n){return n.theme.accentColor}),(function(n){return n.theme.textColor}),(function(n){return n.theme.textColor}));var Sn=function(){var n=Object(a.useQuery)("allcoins",x),e=n.isLoading,t=n.data,c=Object(l.c)(m),i=Object(l.d)(m);return Object(v.jsxs)(On,{children:[Object(v.jsx)(u.a,{children:Object(v.jsx)("title",{children:"\ucf54\uc778"})}),Object(v.jsxs)(fn,{children:[Object(v.jsx)(mn,{children:"\ucf54\uc778"}),Object(v.jsx)(kn,{onClick:function(){return i((function(n){return!n}))},children:c?"Light Mode Change":"Dark Mode Change"})]}),e?Object(v.jsx)(gn,{children:"Loading..."}):Object(v.jsx)(yn,{children:null===t||void 0===t?void 0:t.slice(0,100).map((function(n){return Object(v.jsx)(Cn,{children:Object(v.jsxs)(d.b,{to:{pathname:"/".concat(n.id),state:{name:n.name}},children:[Object(v.jsx)(vn,{src:"https://cryptoicon-api.vercel.app/api/icon/".concat(n.symbol.toLowerCase())}),n.name," \u2192"]})},n.id)}))})]})};var _n,qn=function(){return Object(v.jsx)(d.a,{children:Object(v.jsxs)(j.c,{children:[Object(v.jsx)(j.a,{path:"/:coinId",children:Object(v.jsx)(pn,{})}),Object(v.jsx)(j.a,{path:"/",children:Object(v.jsx)(Sn,{})})]})})},wn=t(50),Fn={bgColor:"#F7F7F7",textColor:"#FFBC97",accentColor:"#FF7801",plusColor:"#A4F0A4",minusColor:"#FE1F1F"},Dn={bgColor:"#7f8fa6",textColor:"#353b48",accentColor:"#e1b12c",plusColor:"#A4F0A4",minusColor:"#FE1F1F"},Ln=Object(h.b)(_n||(_n=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n*{\n  box-sizing: border-box;\n}\na{\n  text-decoration: none;\n  color:inherit;\n}\n\nbody{\n  font-family: 'Source Sans Pro', sans-serif;\n  background-color: ",";\n  color:","\n}\n"])),(function(n){return n.theme.bgColor}),(function(n){return n.theme.textColor}));var Mn=function(){var n=Object(l.c)(m);return Object(v.jsx)(v.Fragment,{children:Object(v.jsxs)(h.a,{theme:n?Dn:Fn,children:[Object(v.jsx)(Ln,{}),Object(v.jsx)(qn,{}),Object(v.jsx)(wn.ReactQueryDevtools,{initialIsOpen:!1})]})})},Pn=new a.QueryClient;r.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(l.a,{children:Object(v.jsx)(a.QueryClientProvider,{client:Pn,children:Object(v.jsx)(Mn,{})})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.595e7a14.chunk.js.map