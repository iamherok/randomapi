(this.webpackJsonprandomanimepicker=this.webpackJsonprandomanimepicker||[]).push([[0],{15:function(e,t,n){e.exports=n.p+"static/media/loading.28d180f9.gif"},17:function(e,t,n){e.exports=n(35)},22:function(e,t,n){},23:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},35:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),l=n.n(i),c=(n(22),n(2)),s=n(3),o=n(5),u=n(4),m=n(6),h=(n(23),n(1)),d=n.n(h),p=n(7),f=(n(25),n(15)),v=n.n(f),b=(n(26),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Loading"},r.a.createElement("img",{src:v.a,alt:"loading_gif"}))}}]),t}(r.a.Component)),E=n(11),g=n(16),k=n(8),y=n.n(k),j=function(){function e(){Object(c.a)(this,e),Object.defineProperty(this,O,{writable:!0,value:["summer","spring","fall","winter"]}),this.api=y.a}return Object(s.a)(e,[{key:"getRandomInt",value:function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e}},{key:"randomSeason",value:function(){return Object(E.a)(this,O)[O][this.getRandomInt(0,Object(E.a)(this,O)[O].length-1)]}},{key:"getAnime",value:function(){var e=Object(p.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.loadAnime(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.abrupt("return",null);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},{key:"random",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n,a,r,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=new Date,n=this.getRandomInt(t.getFullYear()-10,t.getFullYear()),a=this.randomSeason(),e.next=6,y.a.loadSeason(n,a);case 6:return r=e.sent,i=r.anime[this.getRandomInt(0,r.anime.length-1)],e.next=10,this.getAnime(i.mal_id);case 10:return e.abrupt("return",e.sent);case 13:return e.prev=13,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return",null);case 17:case"end":return e.stop()}}),e,this,[[0,13]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=Object(g.a)("season"),w=j,A=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={view:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"loading",value:function(){this.setState({view:r.a.createElement(b,null)})}},{key:"parseGenres",value:function(e){return e.map((function(e){return e.name})).join(", ")}},{key:"anime",value:function(e){var t=this;return r.a.createElement("div",{className:"Anime-container"},r.a.createElement("div",{className:"Anime-fields"},r.a.createElement("div",{className:"Anime-img"},r.a.createElement("img",{src:e.image_url||"",alt:"anime-label"})),r.a.createElement("div",{className:"Anime-information"},r.a.createElement("h1",null,e.title||"?"),r.a.createElement("h2",null,e.title_japanese||""),r.a.createElement("ul",{className:"stats"},r.a.createElement("li",null,r.a.createElement("strong",null,"Episodes:")," ",e.episodes||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Duration:")," ",e.duration||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Premiered:")," ",e.premiered||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Status:")," ",e.status||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Score:")," ",e.score||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Genres:")," ",this.parseGenres(e.genres)||"?"),r.a.createElement("li",null,r.a.createElement("strong",null,"Rating:")," ",e.rating||"?")),r.a.createElement("section",{className:"synopsis-section"},r.a.createElement("h4",null,"Synopsis:"),r.a.createElement("p",null,e.synopsis||"?")))),r.a.createElement("div",{className:"buttons-container"},r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.fetchRandomAnime()}},"Choose a random anime"),r.a.createElement("a",{className:"btn btn-secondary",href:e.url,target:"_blank"},"View on MyAnimeList")))}},{key:"fetchRandomAnime",value:function(){var e=Object(p.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.loading(),t=new w,e.next=4,t.random();case 4:if(n=e.sent){e.next=8;break}return this.fetchRandomAnime(),e.abrupt("return");case 8:this.setState({view:this.anime(n)});case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.fetchRandomAnime()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Anime"},this.state.view)}}]),t}(r.a.Component),N=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(o.a)(this,Object(u.a)(t).call(this,e))).state={anime:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"start",value:function(){this.setState({anime:r.a.createElement(A,null)})}},{key:"render",value:function(){var e,t=this;return e=this.state.anime?this.state.anime:r.a.createElement("button",{className:"btn btn-primary",onClick:function(){return t.start()}},"Choose a random anime"),r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("h1",null,"Random Anime Picker")),r.a.createElement("div",{className:"App-container"},e))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.6af2cc0d.chunk.js.map