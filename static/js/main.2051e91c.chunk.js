(this["webpackJsonppeer-demo"]=this["webpackJsonppeer-demo"]||[]).push([[0],{22:function(e,n,t){e.exports=t(37)},27:function(e,n,t){},28:function(e,n,t){e.exports=t.p+"static/media/logo.25bf045c.svg"},30:function(e,n){function t(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}t.keys=function(){return[]},t.resolve=t,e.exports=t,t.id=30},31:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var o,a=t(0),r=t.n(a),c=t(15),i=t.n(c),l=(t(27),t(28),t(8)),u=t(5),s=t(21),m=t(10),f=t.n(m),p=t(16),d=t(17),h=t(18),v=t.n(h),E=function e(n){var t=this;Object(d.a)(this,e),this.remoteStreams={},this.connectWithPeer=function(e){var n=t.peer.connect(e);n.on("open",(function(){n.send("hi!")}))},this.callToPeer=function(){var e=Object(p.a)(f.a.mark((function e(n){var o;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("jijij"),e.next=3,navigator.mediaDevices.getUserMedia({video:!0,audio:!0});case 3:o=e.sent,console.log(o),t.peer.call(n,o).on("stream",(function(e){console.log("remote stream",e)}));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),console.log(n),this.peer=new v.a(n),this.peer.on("open",(function(e){console.log("My peer ID is: "+e)})),this.peer.on("connection",(function(e){e.on("data",(function(e){console.log(e)}))})),this.peer.on("call",(function(e){e.answer(),e.on("stream",(function(e){if(!t.remoteStreams[e.id]){t.remoteStreams[e.id]=e;var n=document.createElement("video");n.autoplay=!0,n.srcObject=e,document.body.appendChild(n)}}))}))};var g=function(){var e=Object(a.useState)("pacoRampasVazquez"),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(a.useEffect)((function(){o=new E("xxxx-sender")}),[]),r.a.createElement("div",null,r.a.createElement("h1",null,"I am a sender"),r.a.createElement("input",{onChange:function(e){c(e.target.value)},value:t}),r.a.createElement("button",{onClick:function(){o.connectWithPeer(t),o.callToPeer(t)}},"Connect"))};var w=function(){return Object(a.useEffect)((function(){new E("pacoRampasVazquez")}),[]),r.a.createElement("h1",null,"I am a receiver")};t(31);var b=function(){return r.a.createElement("div",null,r.a.createElement(l.a,null,r.a.createElement(l.b,{to:"/"},"Sender")," -",r.a.createElement(l.b,{to:"/receiver"},"receiver"),r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(g,null)),r.a.createElement(u.a,{exact:!0,path:"/receiver"},r.a.createElement(w,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[22,1,2]]]);
//# sourceMappingURL=main.2051e91c.chunk.js.map