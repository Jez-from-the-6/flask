(()=>{"use strict";const e=150,t="NONE",o={red:"#ff0000",blue:"#0066ff",green:"#33cc33",yellow:"#ffff00"};function i(e,t){const o=document.createElement("div");o.innerHTML='<div class="colorPicker">\n  <div class="pickerChoice blue" data-color="blue"></div>\n  <div class="pickerChoice red" data-color="red"></div>\n  <div class="pickerChoice green" data-color="green"></div>\n  <div class="pickerChoice yellow" data-color="yellow"></div>\n</div>\n';const i=o.childNodes[0];if(i.id=e,t){const e=i.querySelectorAll("div[data-color]");Array.prototype.forEach.call(e,(e=>{e.getAttribute("data-color")===t&&(e.className+=" picked")}))}return i}async function n(){document.addEventListener("keydown",(e=>{let{player1:t,player2:o}=this;if(e.isComposing||229===e.keyCode)return;const i=t.direction,n=o.direction;switch(clearInterval(this.intervalID),e.keyCode){case 38:"DOWN"!==i&&(t.direction="UP");break;case 40:"UP"!==i&&(t.direction="DOWN");break;case 39:"LEFT"!==i&&(t.direction="RIGHT");break;case 37:"RIGHT"!==i&&(t.direction="LEFT");break;case 87:"DOWN"!==n&&(o.direction="UP");break;case 65:"RIGHT"!==n&&(o.direction="LEFT");break;case 68:"LEFT"!==n&&(o.direction="RIGHT");break;case 83:"UP"!==n&&(o.direction="DOWN")}this.player1=t,this.player2=o;const l=this.onTimerTick.bind(this);this.intervalID=setInterval(l,33)}))}let l={intervalID:void 0,ctx:void 0,playerInfo:{},onTimerTick:function(){let{player1:e,player2:t}=this;const{ctx:i,intervalID:n}=l,c=o[e.color],d=o[t.color];e=r(e),t=r(t);const p=a(e,i,c,d),y=a(t,i,c,d);p?y?(i.fillStyle=o[e.color],i.fillRect(e.x_pos,e.y_pos,5,5),i.fillStyle=o[t.color],i.fillRect(t.x_pos,t.y_pos,5,5)):(window.alert(`${t.name} Loses`),s(this.player1,this.player2,n,i)):(window.alert(`${e.name} Loses`),s(this.player1,this.player2,n,i)),this.player1=e,this.player2=t},scores:void 0,player1:{name:void 0,x_pos:e,y_pos:e,direction:t,color:"red"},player2:{name:void 0,x_pos:e,y_pos:300,direction:t,color:"blue"}};const c=async function(){return new Promise(((e,t)=>{const n=document.createElement("div");n.innerHTML='<div class="setup">\n  <p>Enter Names and choose color:</p>\n  <div class="player" id="p1Setup">\n    <label>Player 1</label>\n    <input type="text" id="name_1"> \n  </div>\n  <br />\n  <div class="player" id="p2Setup">\n    <label>Player 2</label>\n    <input type="text" id="name_2">\n  </div>\n  <br />\n  <input id="submit" type="button" value="Done" />\n</div>\n    ';const l=n.childNodes[0];document.querySelector("body").appendChild(l);const c=function(e){const t=e.querySelectorAll(".pickerChoice");Array.prototype.forEach.call(t,(t=>{t.addEventListener("click",(t=>{const o=e.querySelector(`div[data-color="${this.color}"]`);o.className=o.className.replace("picked",""),this.color=t.target.getAttribute("data-color"),t.target.className+=" picked"}))}))},r=i("picker1","red");c.bind(this.player1)(r),document.getElementById("p1Setup").appendChild(r);const a=i("picker2","blue");c.bind(this.player2)(a),document.getElementById("p2Setup").appendChild(a),document.getElementById("submit").addEventListener("click",(()=>{const t=document.getElementById("testCanvas");this.ctx=t.getContext("2d"),this.player1.name=document.getElementById("name_1").value,this.player2.name=document.getElementById("name_2").value,document.getElementById("player1").textContent=this.player1.name,document.getElementById("player2").textContent=this.player2.name,l.parentNode.removeChild(l),this.ctx.fillStyle=o[this.player1.color],this.ctx.fillRect(this.player1.x_pos,this.player1.y_pos,5,5),this.ctx.fillStyle=o[this.player2.color],this.ctx.fillRect(this.player2.x_pos,this.player2.y_pos,5,5),e()}))}))}.bind(l);function r(e){switch(e.direction){case"UP":e.y_pos-=5;break;case"DOWN":e.y_pos+=5;break;case"LEFT":e.x_pos-=5;break;case"RIGHT":e.x_pos+=5}return e}function a(e,o,i,n){if(e.direction!==t){const t=o.getImageData(e.x_pos,e.y_pos,1,1).data,l="#"+("000000"+function(e,t,o){if(e>255||t>255||o>255)throw"Invalid color component";return(e<<16|t<<8|o).toString(16)}(t[0],t[1],t[2])).slice(-6);return!(l===i)&&!(l===n)&&e.x_pos>=0&&e.x_pos<1e3&&e.y_pos>=0&&e.y_pos<500}return!0}function s(i,n,l,c){clearInterval(l),i.direction=t,n.direction=t,c.clearRect(0,0,1e3,500),i.x_pos=e,i.y_pos=e,n.x_pos=e,n.y_pos=300,c.fillStyle=o[i.color],c.fillRect(i.x_pos,i.y_pos,5,5),c.fillStyle=o[n.color],c.fillRect(n.x_pos,n.y_pos,5,5)}!async function(){await c(),n.bind(l)()}()})();