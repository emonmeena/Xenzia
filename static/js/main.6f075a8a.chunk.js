(this["webpackJsonpreact-advanced"]=this["webpackJsonpreact-advanced"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),c=a.n(o),r=(a(13),a(1)),i=a(4),l=a(5),h=a(7),d=a(6),u=function(e){return s.a.createElement("div",null,e.snakeDots.map((function(e,t){var a={left:"".concat(e[0],"%"),top:"".concat(e[1],"%")};return s.a.createElement("div",{className:"snake-dot",key:t,style:a})})))},k=function(e){var t={left:"".concat(e.dot[0],"%"),top:"".concat(e.dot[1],"%")};return s.a.createElement("div",{className:"snake-food",style:t})},f=function(){return[2*Math.floor((98*Math.random()+1)/2),2*Math.floor((98*Math.random()+1)/2)]},v={speed:80,food:f(),direction:"RIGHT",snakeDots:[[0,0],[2,0]]},p=function(e){Object(h.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state=v,e.onkeydown=function(t){switch((t=t||window.event).keyCode){case 38:console.log("Made By Mk"),e.setState({direction:"UP"});break;case 40:e.setState({direction:"DOWN"});break;case 37:e.setState({direction:"LEFT"});break;case 39:e.setState({direction:"RIGHT"})}},e.moveSnake=function(){var t=Object(r.a)(e.state.snakeDots),a=t[t.length-1];switch(e.state.direction){case"RIGHT":a=[a[0]+2,a[1]];break;case"LEFT":a=[a[0]-2,a[1]];break;case"UP":a=[a[0],a[1]-2];break;case"DOWN":a=[a[0],a[1]+2]}t.push(a),t.shift(),e.setState({snakeDots:t})},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){setInterval(this.moveSnake,this.state.speed),document.onkeydown=this.onkeydown}},{key:"componentDidUpdate",value:function(){this.checkIfEat(),this.checkIfCollapsed(),this.checkIfOutBorders()}},{key:"checkIfOutBorders",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1];(e[0]>=100||e[1]>=100||e[0]<0||e[1]<0)&&this.onGameOver()}},{key:"checkIfEat",value:function(){var e=this.state.snakeDots[this.state.snakeDots.length-1],t=this.state.food;e[0]===t[0]&&e[1]===t[1]&&(this.setState({food:f()}),console.log(this.state.speed),this.increaseSpeed(),this.enlargeSnake())}},{key:"enlargeSnake",value:function(){var e=Object(r.a)(this.state.snakeDots);e.unshift([]),this.setState({snakeDots:e})}},{key:"increaseSpeed",value:function(){this.state.speed>5&&this.setState({speed:this.state.speed-5})}},{key:"onGameOver",value:function(){alert("OOfs...don't try to go outside, Stay Home Stay Safe..your Score: ".concat(this.state.snakeDots.length)),this.setState(v)}},{key:"onGameOverCollapsed",value:function(){alert("You have Eaten yourself...DAMN...your score is :".concat(this.state.snakeDots.length)),this.setState(v)}},{key:"checkIfCollapsed",value:function(){var e=this,t=Object(r.a)(this.state.snakeDots),a=t[t.length-1];t.pop(),t.forEach((function(t){a[0]===t[0]&&a[1]===t[1]&&e.onGameOverCollapsed()}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"game-area"},s.a.createElement(u,{snakeDots:this.state.snakeDots}),s.a.createElement(k,{dot:this.state.food}))}}]),a}(n.Component);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.6f075a8a.chunk.js.map