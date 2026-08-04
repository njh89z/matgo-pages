(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=e(n);fetch(n.href,a)}})();const U=["","송학","매조","벚꽃","흑싸리","난초","모란","홍싸리","공산","국화","단풍","오동","비"];function p(s,t,e,i,n={}){return{month:s,type:t,variant:e,name:i,piValue:0,...n}}const J=[p(1,"gwang","gwang","송학 광"),p(1,"tti","tti","홍단",{tti:"hong"}),p(1,"pi","pi-a","송학 피",{piValue:1}),p(1,"pi","pi-b","송학 피",{piValue:1}),p(2,"yeol","bird","매조 새",{bird:!0}),p(2,"tti","tti","홍단",{tti:"hong"}),p(2,"pi","pi-a","매조 피",{piValue:1}),p(2,"pi","pi-b","매조 피",{piValue:1}),p(3,"gwang","gwang","벚꽃 광"),p(3,"tti","tti","홍단",{tti:"hong"}),p(3,"pi","pi-a","벚꽃 피",{piValue:1}),p(3,"pi","pi-b","벚꽃 피",{piValue:1}),p(4,"yeol","bird","흑싸리 새",{bird:!0}),p(4,"tti","tti","초단",{tti:"cho"}),p(4,"pi","pi-a","흑싸리 피",{piValue:1}),p(4,"pi","pi-b","흑싸리 피",{piValue:1}),p(5,"yeol","yeol","난초 열끗"),p(5,"tti","tti","초단",{tti:"cho"}),p(5,"pi","pi-a","난초 피",{piValue:1}),p(5,"pi","pi-b","난초 피",{piValue:1}),p(6,"yeol","yeol","모란 나비"),p(6,"tti","tti","청단",{tti:"chung"}),p(6,"pi","pi-a","모란 피",{piValue:1}),p(6,"pi","pi-b","모란 피",{piValue:1}),p(7,"yeol","yeol","홍싸리 멧돼지"),p(7,"tti","tti","초단",{tti:"cho"}),p(7,"pi","pi-a","홍싸리 피",{piValue:1}),p(7,"pi","pi-b","홍싸리 피",{piValue:1}),p(8,"gwang","gwang","공산 광"),p(8,"yeol","bird","공산 기러기",{bird:!0}),p(8,"pi","pi-a","공산 피",{piValue:1}),p(8,"pi","pi-b","공산 피",{piValue:1}),p(9,"yeol","yeol","국진"),p(9,"tti","tti","청단",{tti:"chung"}),p(9,"pi","pi-a","국화 피",{piValue:1}),p(9,"pi","pi-b","국화 피",{piValue:1}),p(10,"yeol","yeol","단풍 사슴"),p(10,"tti","tti","청단",{tti:"chung"}),p(10,"pi","pi-a","단풍 피",{piValue:1}),p(10,"pi","pi-b","단풍 피",{piValue:1}),p(11,"gwang","gwang","똥광"),p(11,"pi","ssang","오동 쌍피",{piValue:2}),p(11,"pi","pi-a","오동 피",{piValue:1}),p(11,"pi","pi-b","오동 피",{piValue:1}),p(12,"gwang","gwang","비광",{biGwang:!0}),p(12,"yeol","yeol","비 제비"),p(12,"tti","tti","비띠",{tti:"bi"}),p(12,"pi","ssang","비 쌍피",{piValue:2})],G=J.map((s,t)=>({...s,id:t}));function F(s,t){return t&&s.month===9&&s.type==="yeol"?{...s,type:"pi",piValue:2,name:"국진(쌍피)"}:s}function W(s,t=Math.random){const e=s.slice();for(let i=e.length-1;i>0;i--){const n=Math.floor(t()*(i+1));[e[i],e[n]]=[e[n],e[i]]}return e}function I(s){return`${s.month}월 ${s.name}`}const X={minStopScore:7,kookjinAsDouble:!1};function B(s,t){const e=s.map(h=>F(h,t.kookjinAsDouble)),i=e.filter(h=>h.type==="gwang"),n=e.filter(h=>h.type==="yeol"),a=e.filter(h=>h.type==="tti"),l=e.reduce((h,g)=>h+g.piValue,0);new Set(a.map(h=>h.tti));const c=a.filter(h=>h.tti==="hong").length===3,r=a.filter(h=>h.tti==="cho").length===3,d=a.filter(h=>h.tti==="chung").length===3;return{cards:e,gwangCount:i.length,biGwang:i.some(h=>h.biGwang),yeolCount:n.length,ttiCount:a.length,piValue:l,godori:n.filter(h=>h.bird).length===3,hongdan:c,chodan:r,chungdan:d}}function v(s,t){const e=B(s,t),i=[];let n=0;if(e.gwangCount>=5?n=15:e.gwangCount===4?n=4:e.gwangCount===3&&(n=e.biGwang?2:3),n>0){const g=e.gwangCount>=5?"오광":e.gwangCount===4?"사광":e.biGwang?"비삼광":"삼광";i.push({label:g,points:n})}const a=Math.max(0,e.yeolCount-4);a>0&&i.push({label:`열끗 ${e.yeolCount}장`,points:a});const l=e.godori?5:0;l&&i.push({label:"고도리",points:5});const c=Math.max(0,e.ttiCount-4);c>0&&i.push({label:`띠 ${e.ttiCount}장`,points:c});let r=0;e.hongdan&&(r+=3,i.push({label:"홍단",points:3})),e.chodan&&(r+=3,i.push({label:"초단",points:3})),e.chungdan&&(r+=3,i.push({label:"청단",points:3}));const d=Math.max(0,e.piValue-9);d>0&&i.push({label:`피 ${e.piValue}장`,points:d});const h=n+a+l+c+r+d;return{...e,lines:i,base:h,gwangScore:n,yeolScore:a+l,ttiScore:c+r,piScore:d}}function Y(s,t,e,i){const n=v(s,i),a=B(t,i),l=e.go,c=n.base+l,r=[];let d=1;if(e.go>=3){const h=2**(e.go-2);d*=h,r.push(`${e.go}고 ×${h}`)}n.piScore>0&&a.piValue<=5&&(d*=2,r.push("피박 ×2")),n.gwangCount>=3&&a.gwangCount===0&&(d*=2,r.push("광박 ×2")),n.yeolCount>=7&&a.yeolCount===0&&(d*=2,r.push("멍박 ×2"));for(let h=0;h<e.shake;h++)d*=2,r.push("흔들기 ×2");for(let h=0;h<e.loserShake;h++)d*=2,r.push("상대 흔들기 ×2");for(let h=0;h<e.bomb;h++)d*=2,r.push("폭탄 ×2");return e.gobak&&(d*=2,r.push("고박 ×2")),{base:n.base,goBonus:l,subtotal:c,multiplier:d,multipliers:r,total:c*d,evaluation:n}}function S(s){switch(s.type){case"gwang":return s.biGwang?15:20;case"yeol":return s.bird?13:7;case"tti":return s.tti==="bi"?6:8;case"pi":return s.piValue>=2?7:3}}function P(s,t){const e=B(t,{kookjinAsDouble:!1});let i=0;if(s.type==="gwang"&&(e.gwangCount===2?i+=14:e.gwangCount>=3&&(i+=8)),s.type==="tti"&&s.tti&&s.tti!=="bi"){const n=t.filter(a=>a.type==="tti"&&a.tti===s.tti).length;n===2?i+=12:n===1&&(i+=4),e.ttiCount>=4&&(i+=4)}if(s.type==="yeol"){if(s.bird){const n=t.filter(a=>a.type==="yeol"&&a.bird).length;n===2?i+=14:n===1&&(i+=5)}e.yeolCount>=4&&(i+=4),e.yeolCount>=6&&(i+=2)}return s.piValue>0&&(e.piValue>=8?i+=4*s.piValue:e.piValue>=5&&(i+=s.piValue)),i}function tt(s,t){return P(s,t)*.8}function et(s){const t=new Set;for(const e of s.hand)t.add(e.id);for(const e of s.field)t.add(e.id);for(const e of s.myCaptured)t.add(e.id);for(const e of s.oppCaptured)t.add(e.id);return t}function it(s,t){let e=0;for(const i of G)i.month===s&&!t.has(i.id)&&e++;return e}class R{difficulty;rand;constructor(t="normal",e=Math.random){this.difficulty=t,this.rand=e}noise(t){const e=this.difficulty==="easy"?1.6:this.difficulty==="normal"?.5:.06;return(this.rand()-.5)*2*t*e}get denyFactor(){return this.difficulty==="easy"?0:this.difficulty==="normal"?.55:1}deny(t,e){return tt(t,e)*this.denyFactor}async selectMove(t,e){const i=et(t),n=48-i.size;let a=e[0],l=-1/0;for(const c of e){let r;if(c.kind==="bomb")r=this.scoreBomb(t,c.month);else{const d=t.hand.find(h=>h.id===c.cardId);r=this.scorePlay(t,d,i,n)}r+=this.noise(14),r>l&&(l=r,a=c)}return a}scorePlay(t,e,i,n){const a=t.field.filter(y=>y.month===e.month),l=t.myCaptured,c=y=>S(y)+P(y,l),r=it(e.month,i),d=n>0?r/n:0;if(a.length===0){let y=-c(e)*.45;return y-=r*2.2,y-=this.deny(e,t.oppCaptured)*.5,y+=d*(c(e)*.8+4),y}const h=y=>c(y)+this.deny(y,t.oppCaptured),g=a.slice().sort((y,x)=>h(x)-h(y))[0];let b=c(e)+c(g)+this.deny(g,t.oppCaptured);if(a.length===1)b-=d*(c(e)+c(g))*1.1;else if(a.length===2){b+=d*10;const y=a.find(x=>x.id!==g.id);b-=this.deny(y,t.oppCaptured)*.4}else a.length>=3&&(b+=10);return t.ppeokMonths.includes(e.month)&&(b+=8),t.field.length===a.length&&(b+=6),b}scoreBomb(t,e){const i=t.field.find(r=>r.month===e),n=t.myCaptured,a=S(i)+P(i,n),l=v(n,t.settings).base;let c=a+6+l*1.5;return t.hand.length<=4&&(c-=10),this.difficulty==="easy"&&(c-=8),c}async chooseMatch(t,e,i){const n=t.myCaptured,a=e.map(l=>({c:l,v:S(l)+P(l,n)+this.deny(l,t.oppCaptured)}));return a.sort((l,c)=>c.v-l.v),a[0].c}async askGo(t){const e=v(t.myCaptured,t.settings),i=v(t.oppCaptured,t.settings),n=t.hand.length;if(n<=1)return!1;if(this.difficulty==="easy")return n>=4&&e.base<=8&&this.rand()<.5;const a=i.base+(i.gwangCount>=2?2:0)+Math.max(0,i.piValue-6)*.5;if(a>=t.settings.minStopScore-2)return!1;const l=(e.gwangCount===2?3:0)+(e.ttiCount===4?2:0)+(e.yeolCount===4?2:0)+(e.piValue>=8?2:0)+n*.7,c=e.base*.55+t.myGo*1.6+a*.9,r=this.difficulty==="hard"?1:.4;return l-c>r}async askShake(t,e){if(this.difficulty==="easy")return!1;const i=t.hand.reduce((c,r)=>c+S(r),0)/Math.max(1,t.hand.length),n=v(t.myCaptured,t.settings).base,l=t.hand.filter(c=>c.month===e).reduce((c,r)=>c+S(r),0);return i>=8.5&&(l>=20||n>=3)}}function C(){return{hand:[],captured:[],go:0,goScore:0,shake:0,bomb:0}}class st{deck=[];field=[];players=[C(),C()];ppeok=new Map;turn=0;turnNo=0;finished=!1;result=null;settings;agents;sink;rand;constructor(t,e,i=()=>{},n=Math.random){this.agents=t,this.settings=e,this.sink=i,this.rand=n}async run(t=0){this.deal(),this.turn=t,await this.emit({t:"deal"});for(const e of[0,1]){const i=j(this.players[e].hand);if(i!==null)return await this.emit({t:"special",player:e,kind:"chongtong",month:i}),await this.end({winner:e,reason:"chongtong",flatScore:10})}for(;!this.finished;){const e=this.players[this.turn],i=this.players[1-this.turn];if(e.hand.length===0&&i.hand.length===0||this.deck.length===0&&e.hand.length===0||(e.hand.length>0&&(this.turnNo++,await this.emit({t:"turn",player:this.turn}),await this.takeTurn(this.turn)),this.finished))break;this.turn=1-this.turn}return this.finished?this.result:await this.end({winner:null,reason:"nagari"})}deal(){for(let t=0;t<50;t++){const e=W(G,this.rand),i=e.slice(0,10),n=e.slice(10,20),a=e.slice(20,28);if(j(a)===null){this.players=[C(),C()],this.players[0].hand=i,this.players[1].hand=n,this.field=a,this.deck=e.slice(28);return}}throw new Error("deal failed")}async takeTurn(t){let e=!0;for(;e&&!this.finished;){e=!1;const i=this.players[t];if(i.hand.length===0)return;const n=this.legalMoves(t),a=await this.agents[t].selectMove(this.view(t),n);if(a.kind==="bomb"){if(await this.doBomb(t,a.month),await this.checkGoStop(t))return;e=i.hand.length>0;continue}const l=i.hand.findIndex(h=>h.id===a.cardId);if(l<0)throw new Error("illegal move: card not in hand");const c=i.hand.filter(h=>h.month===i.hand[l].month).length,r=this.field.some(h=>h.month===i.hand[l].month),d=i.hand.splice(l,1)[0];if(c>=3&&!r&&await this.agents[t].askShake(this.view(t),d.month)&&(i.shake++,await this.emit({t:"special",player:t,kind:"shake",month:d.month})),await this.playSequence(t,d),await this.checkGoStop(t))return}}legalMoves(t){const e=this.players[t].hand,i=e.map(a=>({kind:"play",cardId:a.id})),n=new Map;for(const a of e)n.set(a.month,(n.get(a.month)??0)+1);for(const[a,l]of n)l>=3&&this.field.filter(c=>c.month===a).length===1&&i.push({kind:"bomb",month:a});return i}async playSequence(t,e){await this.emit({t:"play",player:t,card:e});const i=e.month,n=this.field.filter(d=>d.month===i),a=[];let l=!1,c=0;if(n.length===0)this.field.push(e),l=!0;else if(n.length===1)a.push(e,n[0]),this.removeField(n[0]);else if(n.length===2){const d=await this.agents[t].chooseMatch(this.view(t),n,e),h=n.find(g=>g.id===d.id)??n[0];a.push(e,h),this.removeField(h)}else{a.push(e,...n);for(const d of n)this.removeField(d);c++,this.ppeok.delete(i)&&await this.emit({t:"special",player:t,kind:"ppeok-eat",month:i})}const r=this.deck.shift();if(r){await this.emit({t:"flip",player:t,card:r});const d=r.month;if(d===i)if(l)this.removeField(e),a.push(e,r),l=!1,c++,await this.emit({t:"special",player:t,kind:"jjok",month:i});else if(n.length===1)this.field.push(...a,r),a.length=0,this.ppeok.set(i,t),await this.emit({t:"special",player:t,kind:"ppeok",month:i});else if(n.length===2){const h=this.field.filter(g=>g.month===i);for(const g of h)this.removeField(g);a.push(...h,r),c++,await this.emit({t:"special",player:t,kind:"ttadak",month:i})}else this.field.push(r);else{const h=this.field.filter(g=>g.month===d);if(h.length===0)this.field.push(r);else if(h.length===1)a.push(r,h[0]),this.removeField(h[0]);else if(h.length===2){const g=await this.agents[t].chooseMatch(this.view(t),h,r),b=h.find(y=>y.id===g.id)??h[0];a.push(r,b),this.removeField(b)}else{a.push(r,...h);for(const g of h)this.removeField(g);c++,this.ppeok.delete(d)&&await this.emit({t:"special",player:t,kind:"ppeok-eat",month:d})}}}a.length>0&&(this.players[t].captured.push(...a),await this.emit({t:"capture",player:t,cards:a}),this.field.length===0&&(c++,await this.emit({t:"special",player:t,kind:"ssul"})));for(let d=0;d<c;d++)await this.stealPi(t)}async doBomb(t,e){const i=this.players[t],n=[];for(let r=i.hand.length-1;r>=0;r--)i.hand[r].month===e&&n.unshift(i.hand.splice(r,1)[0]);const a=this.field.filter(r=>r.month===e);for(const r of a)this.removeField(r);i.bomb++,await this.emit({t:"special",player:t,kind:"bomb",month:e});for(const r of n)await this.emit({t:"play",player:t,card:r});const l=[...n,...a];i.captured.push(...l),await this.emit({t:"capture",player:t,cards:l}),await this.stealPi(t),this.field.length===0&&(await this.emit({t:"special",player:t,kind:"ssul"}),await this.stealPi(t));const c=Math.max(0,n.length-1);for(let r=0;r<c&&this.deck.length>0;r++)i.hand.push(this.deck.shift())}async stealPi(t){const e=this.players[1-t],i=e.captured.map((a,l)=>({c:a,i:l,eff:F(a,this.settings.kookjinAsDouble)})).filter(a=>a.eff.piValue>0);if(i.length===0)return await this.emit({t:"steal",player:t,card:null}),null;i.sort((a,l)=>a.eff.piValue-l.eff.piValue||a.c.id-l.c.id);const n=i[0];return e.captured.splice(n.i,1),this.players[t].captured.push(n.c),await this.emit({t:"steal",player:t,card:n.c}),n.c}async checkGoStop(t){const e=this.players[t],i=v(e.captured,this.settings);if(i.base<this.settings.minStopScore)return!1;if(e.hand.length>0&&this.deck.length>0){if(e.go>0&&i.base<=e.goScore)return!1;if(await this.agents[t].askGo(this.view(t),i))return e.go++,e.goScore=i.base,await this.emit({t:"go",player:t,count:e.go}),!1}await this.emit({t:"stop",player:t});const a=this.players[1-t],l=Y(e.captured,a.captured,{go:e.go,shake:e.shake,bomb:e.bomb,loserShake:a.shake,gobak:a.go>0},this.settings);return await this.end({winner:t,reason:"stop",settlement:l}),!0}removeField(t){const e=this.field.findIndex(i=>i.id===t.id);e>=0&&this.field.splice(e,1)}async end(t){return this.finished=!0,this.result=t,await this.emit({t:"end",result:t}),t}async emit(t){await this.sink(t)}view(t){return{me:t,hand:this.players[t].hand.slice(),field:this.field.slice(),deckCount:this.deck.length,myCaptured:this.players[t].captured.slice(),oppCaptured:this.players[1-t].captured.slice(),oppHandCount:this.players[1-t].hand.length,myGo:this.players[t].go,oppGo:this.players[1-t].go,ppeokMonths:[...this.ppeok.keys()],settings:this.settings,turnNo:this.turnNo}}}function j(s){const t=new Map;for(const e of s)t.set(e.month,(t.get(e.month)??0)+1);for(const[e,i]of t)if(i>=4)return e;return null}const o={ink:"#2a2118",pine:"#1f6f3c",pineDk:"#12492a",branch:"#6b4423",branchDk:"#432a14",red:"#d23b30",redDk:"#9d221a",pink:"#f4aec4",pinkDk:"#e07a9e",gold:"#e9b433",goldDk:"#bb8412",purple:"#6d4fa6",blueDk:"#1d3f75",green:"#3f9450",greenDk:"#256335",white:"#fdfaf1",grass:"#a8a26a"},nt={1:"#f9f1d9",2:"#fbeee2",3:"#fdeef1",4:"#eef3ea",5:"#f4f0f8",6:"#fdeee9",7:"#fbf0e2",8:"#eef1f6",9:"#fbf6df",10:"#fdeee6",11:"#f0f3e6",12:"#e7eaf0"};function $(s,t,e,i,n,a,l,c=2.2,r=0){let d="";for(let h=0;h<n;h++){const g=n===1?.5:h/(n-1),b=(a+(l-a)*g)*Math.PI/180,y=s+Math.cos(b)*r,x=t+Math.sin(b)*r,q=s+Math.cos(b)*e,z=t+Math.sin(b)*e;d+=`<line x1="${f(y)}" y1="${f(x)}" x2="${f(q)}" y2="${f(z)}" stroke="${i}" stroke-width="${c}" stroke-linecap="round"/>`}return d}function k(s,t,e,i,n,a,l=0){let c="";for(let r=0;r<i;r++){const d=l+360/i*r;c+=`<ellipse cx="${f(s)}" cy="${f(t-e*.62)}" rx="${f(e*.42)}" ry="${f(e*.62)}" fill="${n}" transform="rotate(${f(d)} ${f(s)} ${f(t)})"/>`}return c+=`<circle cx="${f(s)}" cy="${f(t)}" r="${f(e*.3)}" fill="${a}"/>`,c}function u(s,t,e,i,n,a,l){return`<ellipse cx="${f(s)}" cy="${f(t)}" rx="${f(e)}" ry="${f(i)}" fill="${n}"  transform="rotate(${f(a)} ${f(s)} ${f(t)})"/>`}function f(s){return(Math.round(s*10)/10).toString()}function L(s,t,e,i,n,a=o.gold){return`<g transform="translate(${f(s)} ${f(t)}) scale(${f(e)})">
    <ellipse cx="0" cy="0" rx="13" ry="9" fill="${i}"/>
    <path d="M-10 -3 Q-2 -14 10 -6 Q2 -1 -10 -3Z" fill="${n}"/>
    <circle cx="11" cy="-6" r="6" fill="${i}"/>
    <circle cx="13" cy="-7.5" r="1.4" fill="#1a1a1a"/>
    <path d="M16 -6 L23 -4 L16 -2Z" fill="${a}"/>
    <path d="M-12 1 L-26 -3 L-24 3 L-12 5Z" fill="${n}"/>
  </g>`}function M(s){const t=s==="chung"?"#3f6fbf":"#d8483c",e=s==="chung"?o.blueDk:o.redDk;let i="";if(s==="hong")for(let n=0;n<3;n++){const a=30+n*18,l=64-n*2.6;i+=`<rect x="${f(a)}" y="${f(l)}" width="9" height="1.8" rx="0.9" fill="#3a1410"/>
        <rect x="${f(a+1.6)}" y="${f(l+4)}" width="5.8" height="1.8" rx="0.9" fill="#3a1410"/>`}else s==="bi"&&(i='<path d="M46 60 L54 58 L49 67 L57 65 L44 79 L48 68 L41 70Z" fill="#f7e08a"/>');return`<g>
    <path d="M8 66 L92 54 L92 76 L8 88 Z" fill="${t}"/>
    <path d="M8 66 L92 54 L92 58 L8 70 Z" fill="${e}" opacity="0.55"/>
    <path d="M8 84 L92 72 L92 76 L8 88 Z" fill="${e}" opacity="0.45"/>
    ${i}
  </g>`}function Q(){return`<g>
    <rect x="60" y="8" width="30" height="30" rx="4" fill="${o.redDk}"/>
    <rect x="62" y="10" width="26" height="26" rx="3" fill="none" stroke="#f7e6b0" stroke-width="1.2"/>
    <text x="75" y="30" text-anchor="middle" font-size="19" font-family="'Noto Serif KR','Nanum Myeongjo',serif" font-weight="700" fill="#f7e6b0">光</text>
  </g>`}function at(){return`<g>
    <path d="M-4 150 L-4 96 Q16 100 30 118 Q40 132 44 150Z" fill="${o.branchDk}" opacity="0.25"/>
    <path d="M2 150 Q6 120 18 104 Q26 94 40 90" stroke="${o.branch}" stroke-width="6" fill="none" stroke-linecap="round"/>
    ${$(16,106,17,o.pine,9,190,350,2.4,3)}
    ${$(40,92,15,o.pineDk,9,200,350,2.2,3)}
    ${$(6,132,16,o.pine,8,250,360,2.4,3)}
  </g>`}function ot(s){const t=at();if(s.type==="gwang")return`<g>
      <circle cx="70" cy="42" r="19" fill="${o.red}"/>
      <circle cx="70" cy="42" r="19" fill="none" stroke="${o.redDk}" stroke-width="1.5"/>
      ${t}
      <g transform="translate(58 108)">
        <path d="M-22 8 Q-8 -6 8 -2 Q22 2 26 -6" stroke="${o.white}" stroke-width="9" fill="none" stroke-linecap="round"/>
        <ellipse cx="-4" cy="4" rx="18" ry="10" fill="${o.white}" stroke="#cfc7b4" stroke-width="0.8"/>
        <path d="M12 0 Q22 -10 20 -22" stroke="${o.white}" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <circle cx="20" cy="-25" r="4.6" fill="${o.white}"/>
        <circle cx="20" cy="-28" r="2.6" fill="${o.red}"/>
        <circle cx="22" cy="-25.5" r="1.1" fill="#1a1a1a"/>
        <path d="M24 -24 L30 -23 L24 -21Z" fill="${o.gold}"/>
        <path d="M-18 8 L-30 14 L-16 12Z" fill="${o.ink}" opacity="0.7"/>
        <path d="M-2 12 L-4 22 M6 12 L8 22" stroke="${o.ink}" stroke-width="1.6"/>
      </g>
      ${Q()}
    </g>`;if(s.type==="tti")return`<g>${t}${M("hong")}</g>`;const e=s.variant==="pi-b"?1:0;return`<g>${t}
    ${$(66,52+e*8,18,o.pine,10,30,200,2.4,3)}
    ${$(78,92,15,o.pineDk,9,60,230,2.2,3)}
    <path d="M96 40 Q80 60 74 96" stroke="${o.branch}" stroke-width="4" fill="none"/>
  </g>`}function lt(){return`<g>
    <path d="M4 148 Q14 110 34 84 Q50 62 46 30" stroke="${o.branchDk}" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M34 84 Q56 76 78 88" stroke="${o.branchDk}" stroke-width="3.4" fill="none" stroke-linecap="round"/>
    <path d="M42 50 Q64 44 84 52" stroke="${o.branchDk}" stroke-width="3" fill="none" stroke-linecap="round"/>
    ${k(80,50,9,5,o.pink,o.gold)}
    ${k(28,108,10,5,o.pink,o.gold,20)}
    ${k(58,30,8,5,o.white,o.gold,40)}
    ${k(84,92,9,5,o.pinkDk,o.gold,10)}
    ${k(12,128,7.5,5,o.pink,o.gold,30)}
  </g>`}function rt(s){const t=lt();if(s.type==="yeol")return`<g>${t}
      ${L(52,104,1.15,"#7a5a2a","#4c3618")}
      <path d="M30 120 Q52 128 74 118" stroke="${o.branchDk}" stroke-width="3" fill="none"/>
    </g>`;if(s.type==="tti")return`<g>${t}${M("hong")}</g>`;const e=s.variant==="pi-b"?18:0;return`<g>${t}
    <g transform="rotate(${e} 50 100)">
      ${k(46,104,11,5,o.pinkDk,o.gold,15)}
      ${k(70,122,9,5,o.pink,o.gold,45)}
    </g>
  </g>`}function ct(){let s="";const t=[[22,30,11,0],[56,24,9,25],[82,40,10,50],[18,66,9,15],[48,58,11,35],[80,78,9.5,5],[26,100,10,40],[60,96,8.5,20],[86,116,9,30],[16,128,8,10],[50,130,9.5,55]];for(const[e,i,n,a]of t)s+=k(e,i,n,5,e%3===0?o.pink:o.white,o.gold,a);return`<g>
    <path d="M-2 140 Q26 116 40 84 Q54 52 44 12" stroke="${o.branchDk}" stroke-width="4.5" fill="none"/>
    <path d="M40 84 Q66 74 92 84" stroke="${o.branchDk}" stroke-width="3" fill="none"/>
    ${s}
  </g>`}function ht(s){const t=ct();if(s.type==="gwang")return`<g>${t}
      <g>
        <path d="M18 96 L82 96 L82 126 L18 126Z" fill="${o.red}"/>
        <path d="M18 96 L82 96 L82 104 L18 104Z" fill="${o.redDk}"/>
        <path d="M18 126 L30 138 L42 126 L54 138 L66 126 L78 138 L82 126Z" fill="${o.red}"/>
        <path d="M34 96 L34 126 M50 96 L50 126 M66 96 L66 126" stroke="${o.white}" stroke-width="1.6" opacity="0.7"/>
        <circle cx="26" cy="112" r="3" fill="${o.white}" opacity="0.85"/>
        <circle cx="74" cy="112" r="3" fill="${o.white}" opacity="0.85"/>
      </g>
      ${Q()}
    </g>`;if(s.type==="tti")return`<g>${t}${M("hong")}</g>`;const e=s.variant==="pi-b"?30:0;return`<g>${t}${k(52,108,12,5,o.pinkDk,o.gold,e)}</g>`}function dt(){let s="";for(let t=0;t<5;t++){const e=20+t*15,i=34+t*13%26;s+=`<path d="M${f(e)} 26 Q${f(e-4)} ${f(26+i/2)} ${f(e)} ${f(26+i)}" stroke="${o.ink}" stroke-width="2" fill="none"/>`;for(let n=0;n<4;n++)s+=u(e+(n%2?4:-4),34+n*(i/4),5.4,3.4,n%2?"#3b3f2e":"#2b2f22",n%2?20:-20)}return`<g>
    <path d="M0 24 L100 18" stroke="${o.branchDk}" stroke-width="5" fill="none"/>
    ${s}
  </g>`}function pt(s){const t=dt();if(s.type==="yeol")return`<g>${t}
      ${L(54,116,1.2,"#2f3a4a","#1b222d","#c8552f")}
      <path d="M10 132 Q50 142 92 130" stroke="${o.greenDk}" stroke-width="3" fill="none"/>
    </g>`;if(s.type==="tti")return`<g>${t}${M("cho")}</g>`;const e=s.variant==="pi-b"?10:-8;return`<g>${t}
    <g transform="translate(${e} 0)">
      ${u(46,112,13,7,"#33392a",-25)}
      ${u(62,124,12,6.5,"#262b1e",20)}
      ${u(34,128,11,6,"#3b4230",8)}
    </g>
  </g>`}function ft(){return`<g>
    ${$(50,150,96,o.greenDk,7,250,290,3.2,10)}
    <path d="M20 150 Q26 96 16 56" stroke="${o.green}" stroke-width="4" fill="none"/>
    <path d="M80 150 Q76 100 88 62" stroke="${o.green}" stroke-width="4" fill="none"/>
  </g>`}function ut(s){const t=ft();if(s.type==="yeol")return`<g>${t}
      <g>
        <path d="M12 96 Q50 78 88 96" stroke="${o.redDk}" stroke-width="6" fill="none"/>
        <path d="M12 96 Q50 78 88 96" stroke="${o.red}" stroke-width="3" fill="none"/>
        <path d="M22 92 L22 122 M50 84 L50 118 M78 92 L78 122" stroke="${o.redDk}" stroke-width="3.4"/>
      </g>
      ${k(66,44,12,6,o.purple,o.gold,12)}
    </g>`;if(s.type==="tti")return`<g>${t}${M("cho")}</g>`;const e=s.variant==="pi-b"?25:-10;return`<g>${t}
    ${k(52,62,14,6,o.purple,o.gold,e)}
    ${k(26,100,9,6,"#8367c4",o.gold,e+30)}
  </g>`}function gt(){return`<g>
    ${u(20,120,16,9,o.greenDk,-25)}
    ${u(78,124,15,8.5,o.green,22)}
    ${u(48,136,17,8,o.greenDk,5)}
    ${k(50,74,22,7,o.red,o.gold,8)}
    ${k(50,74,12,6,o.redDk,o.gold,30)}
  </g>`}function yt(s){const t=gt();if(s.type==="yeol")return`<g>${t}
      <g transform="translate(70 34) rotate(-15)">
        <path d="M0 0 Q-16 -14 -20 2 Q-16 12 0 4Z" fill="${o.purple}"/>
        <path d="M0 0 Q16 -14 20 2 Q16 12 0 4Z" fill="#8367c4"/>
        <ellipse cx="0" cy="2" rx="2.6" ry="8" fill="${o.ink}"/>
        <path d="M-1 -6 Q-5 -14 -9 -16 M1 -6 Q5 -14 9 -16" stroke="${o.ink}" stroke-width="1.2" fill="none"/>
      </g>
      <g transform="translate(26 34) rotate(12) scale(0.8)">
        <path d="M0 0 Q-16 -14 -20 2 Q-16 12 0 4Z" fill="#8367c4"/>
        <path d="M0 0 Q16 -14 20 2 Q16 12 0 4Z" fill="${o.purple}"/>
        <ellipse cx="0" cy="2" rx="2.6" ry="8" fill="${o.ink}"/>
      </g>
    </g>`;if(s.type==="tti")return`<g>${t}${M("chung")}</g>`;const e=s.variant==="pi-b"?24:0;return`<g>
    ${u(24,118,16,9,o.greenDk,-25)}
    ${u(76,122,15,8.5,o.green,22)}
    ${k(50,66,20,7,o.red,o.gold,e)}
    ${k(50,66,11,6,o.redDk,o.gold,e+25)}
  </g>`}function mt(){let s=`<path d="M50 150 Q46 100 50 44" stroke="${o.redDk}" stroke-width="3" fill="none"/>`;for(let t=0;t<7;t++){const e=44+t*15,i=t%2?1:-1;s+=u(50+i*20,e,15,7,t%3===0?"#c8503f":"#9e3427",i*22)}return`<g>${s}</g>`}function kt(s){const t=mt();if(s.type==="yeol")return`<g>${t}
      <g transform="translate(50 110)">
        <ellipse cx="0" cy="0" rx="26" ry="15" fill="#4a3a2c"/>
        <ellipse cx="-4" cy="-3" rx="20" ry="10" fill="#6a533e"/>
        <path d="M20 -4 Q34 -8 34 4 Q30 12 18 10Z" fill="#4a3a2c"/>
        <circle cx="28" cy="-1" r="1.6" fill="#1a1a1a"/>
        <path d="M32 6 L38 8 L32 10Z" fill="#e9d7b8"/>
        <path d="M20 -10 L24 -18 L28 -9Z" fill="#3a2c20"/>
        <path d="M-18 12 L-20 22 M-6 13 L-8 23 M8 12 L6 22 M18 10 L18 20" stroke="#3a2c20" stroke-width="3" stroke-linecap="round"/>
        <path d="M-24 -2 Q-34 -6 -32 4" stroke="#3a2c20" stroke-width="3" fill="none"/>
      </g>
    </g>`;if(s.type==="tti")return`<g>${t}${M("cho")}</g>`;const e=s.variant==="pi-b"?8:-8;return`<g>${t}
    <g transform="translate(${e} 0)">
      ${u(50,106,17,8,"#c8503f",10)}
      ${u(38,128,14,7,"#9e3427",-18)}
    </g>
  </g>`}function Z(){return`<g>
    <path d="M-4 150 L-4 118 Q20 92 46 110 Q70 126 104 104 L104 150Z" fill="#2f3a4e"/>
    <path d="M-4 150 L-4 128 Q24 108 48 122 Q72 136 104 118 L104 150Z" fill="#1f2838"/>
    ${$(18,150,40,o.grass,6,250,290,1.8,4)}
    ${$(84,150,36,o.grass,6,252,292,1.8,4)}
  </g>`}function bt(s){if(s.type==="gwang")return`<g>
      <circle cx="52" cy="52" r="24" fill="#f2d968"/>
      <circle cx="52" cy="52" r="24" fill="none" stroke="${o.goldDk}" stroke-width="1.4"/>
      ${Z()}
      ${Q()}
    </g>`;if(s.type==="yeol")return`<g>${Z()}
      ${L(50,44,.85,"#333c4c","#20283a","#d0d5dd")}
      ${L(24,68,.6,"#333c4c","#20283a","#d0d5dd")}
      ${L(76,74,.6,"#333c4c","#20283a","#d0d5dd")}
    </g>`;const t=s.variant==="pi-b"?12:-12;return`<g>${Z()}
    ${$(50+t,120,46,o.grass,9,235,305,2,6)}
    ${$(50-t,138,36,"#8d8757",7,240,300,2,5)}
  </g>`}function $t(){return`<g>
    ${u(20,118,15,8,o.greenDk,-28)}
    ${u(80,122,14,7.5,o.green,25)}
    ${u(50,138,16,7,o.greenDk,4)}
    <path d="M50 138 Q48 108 50 84" stroke="${o.greenDk}" stroke-width="3" fill="none"/>
    ${$(50,68,24,"#f0c53d",22,0,350,3,6)}
    <circle cx="50" cy="68" r="9" fill="#e0a51f"/>
  </g>`}function wt(s){const t=$t();if(s.type==="yeol")return`<g>${t}
      <g transform="translate(50 108)">
        <path d="M-20 -12 L20 -12 L14 8 L-14 8Z" fill="${o.red}"/>
        <path d="M-20 -12 L20 -12 L18 -6 L-18 -6Z" fill="${o.redDk}"/>
        <rect x="-4" y="8" width="8" height="8" fill="${o.redDk}"/>
        <ellipse cx="0" cy="18" rx="14" ry="4.5" fill="${o.red}"/>
        <text x="0" y="4" text-anchor="middle" font-size="14" font-family="'Noto Serif KR','Nanum Myeongjo',serif" font-weight="700" fill="#f7e6b0">壽</text>
      </g>
    </g>`;if(s.type==="tti")return`<g>${t}${M("chung")}</g>`;const e=s.variant==="pi-b"?12:0;return`<g>
    ${u(22,124,15,8,o.greenDk,-28)}
    ${u(78,128,14,7.5,o.green,25)}
    ${$(50,76+e,26,"#f0c53d",22,0,350,3,6)}
    <circle cx="50" cy="${f(76+e)}" r="10" fill="#e0a51f"/>
    ${$(22,50,14,"#f6d868",16,0,350,2.2,4)}
  </g>`}function vt(){function s(t,e,i,n,a){return`<g transform="translate(${f(t)} ${f(e)}) rotate(${f(a)}) scale(${f(i)})">
      <path d="M0 -12 L4 -4 L12 -7 L8 1 L15 5 L6 6 L8 14 L0 9 L-8 14 L-6 6 L-15 5 L-8 1 L-12 -7 L-4 -4Z" fill="${n}"/>
      <path d="M0 9 L0 16" stroke="${o.branchDk}" stroke-width="1.4"/>
    </g>`}return`<g>
    <path d="M-2 148 Q22 116 34 78 Q44 46 38 14" stroke="${o.branchDk}" stroke-width="4" fill="none"/>
    ${s(24,36,1.1,"#d3452f",15)}
    ${s(66,26,1,"#e8792f",-20)}
    ${s(84,58,.95,"#c33a26",30)}
    ${s(16,78,1,"#e8792f",-10)}
    ${s(52,60,.85,"#f0a63a",40)}
  </g>`}function Mt(s){const t=vt();if(s.type==="yeol")return`<g>${t}
      <g transform="translate(52 110)">
        <ellipse cx="0" cy="0" rx="24" ry="13" fill="#a06a34"/>
        <ellipse cx="-2" cy="-2" rx="18" ry="9" fill="#bd8348"/>
        <circle cx="-6" cy="-4" r="2.2" fill="#f4e6cc"/>
        <circle cx="4" cy="2" r="2.2" fill="#f4e6cc"/>
        <path d="M18 -4 Q30 -10 30 0 Q28 8 16 8Z" fill="#a06a34"/>
        <circle cx="25" cy="-2" r="1.5" fill="#1a1a1a"/>
        <path d="M22 -10 Q22 -22 14 -26 M28 -10 Q30 -22 38 -24" stroke="#7a4f24" stroke-width="2.4" fill="none" stroke-linecap="round"/>
        <path d="M-16 10 L-18 22 M-4 12 L-6 24 M8 11 L8 23 M18 8 L20 20" stroke="#7a4f24" stroke-width="3" stroke-linecap="round"/>
      </g>
    </g>`;if(s.type==="tti")return`<g>${t}${M("chung")}</g>`;const e=s.variant==="pi-b"?35:-15;return`<g>${t}
    <g transform="translate(50 108) rotate(${e}) scale(1.5)">
      <path d="M0 -12 L4 -4 L12 -7 L8 1 L15 5 L6 6 L8 14 L0 9 L-8 14 L-6 6 L-15 5 L-8 1 L-12 -7 L-4 -4Z" fill="#c33a26"/>
    </g>
  </g>`}function T(){return`<g>
    <path d="M50 150 Q48 110 50 72" stroke="${o.branchDk}" stroke-width="4" fill="none"/>
    ${u(26,96,22,15,"#4f7a3a",-30)}
    ${u(74,100,21,14,"#3d6b2e",28)}
    ${u(50,122,20,13,"#5b8a42",0)}
  </g>`}function Lt(s){if(s.type==="gwang")return`<g>${T()}
      <g transform="translate(50 46)">
        <ellipse cx="0" cy="4" rx="17" ry="11" fill="#e8b63a"/>
        <path d="M-14 -2 Q0 -18 16 -4 Q4 2 -14 -2Z" fill="#f2d264"/>
        <circle cx="14" cy="-6" r="7" fill="#e8b63a"/>
        <circle cx="16.5" cy="-8" r="1.6" fill="#1a1a1a"/>
        <path d="M20 -6 L28 -4 L20 -2Z" fill="${o.red}"/>
        <path d="M-14 6 Q-34 12 -40 30 M-14 8 Q-30 20 -30 38 M-12 10 Q-22 26 -18 42" stroke="#d9a12c" stroke-width="3" fill="none" stroke-linecap="round"/>
        <path d="M12 -14 Q14 -22 20 -24" stroke="${o.red}" stroke-width="2" fill="none"/>
      </g>
      ${Q()}
    </g>`;if(s.variant==="ssang")return`<g>${T()}
      ${u(30,54,18,12,"#3d6b2e",-22)}
      ${u(70,50,17,11,"#4f7a3a",20)}
    </g>`;const t=s.variant==="pi-b"?10:-10;return`<g>
    <path d="M50 150 Q48 110 52 60" stroke="${o.branchDk}" stroke-width="4" fill="none"/>
    ${u(30+t,62,20,13,"#4f7a3a",-28)}
    ${u(66+t,96,21,14,"#3d6b2e",24)}
    ${u(38-t,122,18,12,"#5b8a42",-6)}
  </g>`}function E(){let s="";for(let t=0;t<11;t++){const e=4+t*9;s+=`<path d="M${f(e)} ${f(6+t%3*8)} L${f(e-5)} ${f(38+t%3*8)}" stroke="#8fa2bd" stroke-width="1.6" stroke-linecap="round"/>`}return`<g>
    <rect x="0" y="0" width="100" height="150" fill="#c9d2de"/>
    ${s}
    <path d="M100 8 Q78 22 74 52 Q70 84 84 112" stroke="${o.greenDk}" stroke-width="4" fill="none"/>
    <path d="M78 34 Q64 44 60 62 M80 58 Q68 68 66 86" stroke="#4f7a3a" stroke-width="2.4" fill="none"/>
  </g>`}function xt(s){return s.type==="gwang"?`<g>${E()}
      <g transform="translate(38 92)">
        <path d="M-26 -18 Q0 -44 26 -18Z" fill="${o.ink}"/>
        <path d="M-26 -18 Q-13 -24 0 -18 Q13 -24 26 -18" fill="none" stroke="#5a5a52" stroke-width="1.4"/>
        <path d="M0 -18 L0 12" stroke="#4a3a2a" stroke-width="2.4"/>
        <path d="M-10 6 Q0 -2 10 6 L12 34 L-12 34Z" fill="#6b5a44"/>
        <circle cx="0" cy="-2" r="8" fill="#f0e2c8"/>
        <path d="M-8 -4 Q0 -12 8 -4Z" fill="${o.ink}"/>
        <path d="M-12 34 L-14 44 M12 34 L14 44" stroke="#4a3a2a" stroke-width="3" stroke-linecap="round"/>
      </g>
      <path d="M-2 128 Q30 118 62 130 Q80 136 100 130 L100 150 L-2 150Z" fill="#5f6f86"/>
      ${Q()}
    </g>`:s.type==="yeol"?`<g>${E()}
      ${L(46,92,1.2,"#2b3242","#171d29","#d8b64a")}
      <path d="M-2 126 Q34 116 68 128 Q86 134 100 128 L100 150 L-2 150Z" fill="#5f6f86"/>
    </g>`:s.type==="tti"?`<g>${E()}${M("bi")}</g>`:`<g>
    <rect x="0" y="0" width="100" height="150" fill="#c9d2de"/>
    <path d="M12 10 Q34 44 20 66 Q52 58 60 30 Q72 62 56 86 Q86 74 92 40" stroke="#4a5568" stroke-width="5" fill="none" stroke-linecap="round"/>
    <path d="M8 96 Q34 84 58 96 Q80 106 96 96 L100 150 L0 150Z" fill="#5f6f86"/>
    <path d="M16 118 Q40 108 64 118" stroke="#8fa2bd" stroke-width="2.4" fill="none"/>
  </g>`}const St={1:ot,2:rt,3:ht,4:pt,5:ut,6:yt,7:kt,8:bt,9:wt,10:Mt,11:Lt,12:xt};function Qt(s){const t=s.type==="gwang"?"광":s.type==="yeol"?s.bird?"고":"열":s.type==="tti"?s.tti==="hong"?"홍":s.tti==="cho"?"초":s.tti==="chung"?"청":"띠":s.piValue>=2?"쌍":"피",e=s.type==="gwang"?"#c9971f":s.type==="yeol"?s.bird?"#b5482c":"#2e7d4f":s.type==="tti"?s.tti==="chung"?"#2f5fa8":"#c0392b":s.piValue>=2?"#7a5aa8":"#6b6255";return`<g class="cs-badge">
    <rect x="5.5" y="5.5" width="21" height="17" rx="5" fill="#ffffff" fill-opacity="0.88" stroke="${o.ink}" stroke-width="1"/>
    <text x="16" y="18.2" text-anchor="middle" font-size="12" font-weight="800" font-family="system-ui,'Malgun Gothic',sans-serif" fill="${o.ink}">${s.month}</text>
    <rect x="5.5" y="127" width="21.5" height="17.5" rx="5" fill="${e}" stroke="${o.ink}" stroke-width="1"/>
    <text x="16.3" y="140.5" text-anchor="middle" font-size="11.5" font-weight="800" font-family="system-ui,'Malgun Gothic',sans-serif" fill="#fff">${t}</text>
  </g>`}const H=new Map;function A(s){const t=H.get(s.id);if(t)return t;const e=`hwclip${s.id}`,i=St[s.month](s),n=`<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="card-svg" role="img" aria-label="${I(s)}">
  <defs><clipPath id="${e}"><rect x="3" y="3" width="94" height="144" rx="9"/></clipPath></defs>
  <rect x="1" y="1" width="98" height="148" rx="11" fill="${o.ink}"/>
  <rect x="3" y="3" width="94" height="144" rx="9" fill="${nt[s.month]}"/>
  <g clip-path="url(#${e})">${i}</g>
  <rect x="3" y="3" width="94" height="144" rx="9" fill="none" stroke="${o.ink}" stroke-width="1.4"/>
  ${Qt(s)}
</svg>`;return H.set(s.id,n),n}function O(){return`<svg viewBox="0 0 100 150" xmlns="http://www.w3.org/2000/svg" class="card-svg" role="img" aria-label="뒷면">
  <rect x="1" y="1" width="98" height="148" rx="11" fill="#2a2118"/>
  <rect x="3" y="3" width="94" height="144" rx="9" fill="#a5231b"/>
  <rect x="9" y="9" width="82" height="132" rx="6" fill="none" stroke="#e8c66a" stroke-width="1.6" opacity="0.75"/>
  <g opacity="0.5">
    <circle cx="50" cy="75" r="26" fill="none" stroke="#f2dca0" stroke-width="2"/>
    <circle cx="50" cy="75" r="17" fill="none" stroke="#f2dca0" stroke-width="1.4"/>
    <path d="M50 49 L58 75 L50 101 L42 75Z" fill="#f2dca0" opacity="0.7"/>
    <path d="M24 75 L50 67 L76 75 L50 83Z" fill="#f2dca0" opacity="0.7"/>
  </g>
</svg>`}const w=0,D=1,Ct={ppeok:"뻑!","ppeok-eat":"뻑 먹기!",jjok:"쪽!",ttadak:"따닥!",ssul:"싹쓸이!",bomb:"폭탄!",shake:"흔들기!",chongtong:"총통!"},_="matgo.prefs.v1";function Dt(){const s={difficulty:"normal",speed:"normal",kookjinAsDouble:!1,minStopScore:7};try{const t=localStorage.getItem(_);return t?{...s,...JSON.parse(t)}:s}catch{return s}}function N(s){try{localStorage.setItem(_,JSON.stringify(s))}catch{}}const Vt=s=>new Promise(t=>setTimeout(t,s));function m(s,t=document){const e=t.querySelector(s);if(!e)throw new Error(`missing element: ${s}`);return e}function Pt(s,t){if(t<=1){s.style.removeProperty("--hand-ol");return}const e=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--cw-hand"))||54,i=(s.clientWidth||s.parentElement?.clientWidth||360)-6;let n=8;(l=>t*e-(t-1)*l)(n)>i&&(n=Math.ceil((t*e-i)/(t-1))),n=Math.min(n,e*.7),s.style.setProperty("--hand-ol",`${-n}px`)}function V(s,t=""){return`<div class="card ${t}" data-id="${s.id}" title="${I(s)}">${A(s)}</div>`}class Zt{root;prefs=Dt();game=null;totals=[0,0];round=0;nagariStack=0;firstPlayer=w;moveResolve=null;legal=[];chooseResolve=null;chooseOptions=[];stageCards={played:null,flipped:null};highlight=new Set;busy=!1;constructor(t){this.root=t,this.root.innerHTML=Et,this.bind(),new URLSearchParams(location.search).get("auto")==="1"?this.startRound():this.showTitle()}get settings(){return{...X,kookjinAsDouble:this.prefs.kookjinAsDouble,minStopScore:this.prefs.minStopScore}}pace(t){const e=this.prefs.speed==="fast"?.45:this.prefs.speed==="slow"?1.6:1;return Vt(Math.round(t*e))}showTitle(){this.modal(`<h2 class="ttl">맞고 한판</h2>
       <p class="sub">화투 48장, 컴퓨터와 1:1 대결</p>
       <div class="opts">
         <label>난이도
           <select data-k="difficulty">
             <option value="easy">쉬움</option>
             <option value="normal">보통</option>
             <option value="hard">어려움</option>
           </select>
         </label>
         <label>진행 속도
           <select data-k="speed">
             <option value="slow">느리게</option>
             <option value="normal">보통</option>
             <option value="fast">빠르게</option>
           </select>
         </label>
         <label>스톱 최소 점수
           <select data-k="minStopScore">
             <option value="7">7점 (맞고 기본)</option>
             <option value="3">3점</option>
             <option value="5">5점</option>
           </select>
         </label>
         <label class="chk"><input type="checkbox" data-k="kookjinAsDouble"> 국진을 쌍피로 사용</label>
       </div>`,[{id:"start",label:"게임 시작",primary:!0},{id:"rules",label:"규칙 보기"}],!0).then(t=>{if(t==="rules"){this.showRules().then(()=>this.showTitle());return}this.totals=[0,0],this.round=0,this.nagariStack=0,this.startRound()})}showRules(){return this.modal(`<h2 class="ttl">맞고 규칙 요약</h2>
       <div class="rules">
         <p><b>기본</b> — 각자 10장, 바닥 8장. 손패를 내고 더미 한 장을 뒤집어 같은 월끼리 가져옵니다.</p>
         <p><b>점수</b> — 오광 15 / 사광 4 / 삼광 3 (비광 포함 2) · 고도리 5 · 홍단·초단·청단 각 3 · 열끗·띠는 5장부터 1점씩 · 피는 10장부터 1점씩</p>
         <p><b>고/스톱</b> — ${this.prefs.minStopScore}점 이상이면 선택. 고 1회당 +1점, 3고부터 2배씩. 고를 부르고 상대가 스톱하면 <b>고박</b>(2배).</p>
         <p><b>박</b> — 피박(상대 피 5장 이하) · 광박(상대 광 0장) · 멍박(내 열끗 7장 & 상대 0장) 각 2배</p>
         <p><b>특수</b> — 뻑 / 쪽 / 따닥 / 싹쓸이 시 상대 피 1장을 뺏어옵니다. 흔들기·폭탄은 2배, 총통은 즉시 승리.</p>
       </div>`,[{id:"close",label:"닫기",primary:!0}])}async startRound(){this.round++,this.stageCards={played:null,flipped:null},this.highlight.clear();const t={selectMove:(c,r)=>this.humanSelectMove(c,r),chooseMatch:(c,r)=>this.humanChooseMatch(r),askGo:(c,r)=>this.modal(`<h2 class="ttl">${r.base}점!</h2>
           <p class="sub">고를 외치면 점수가 오르지만, 상대가 나면 두 배로 물어냅니다.</p>
           <div class="score-lines">${r.lines.map(d=>`<span>${d.label} <b>${d.points}</b></span>`).join("")}</div>`,[{id:"go",label:"고!",primary:!0},{id:"stop",label:"스톱"}]).then(d=>d==="go"),askShake:(c,r)=>this.modal(`<h2 class="ttl">흔들기</h2>
           <p class="sub">${r}월 ${U[r]} 3장을 들고 있습니다. 흔들면 점수가 2배가 되지만, 지면 두 배로 물어냅니다.</p>`,[{id:"yes",label:"흔든다",primary:!0},{id:"no",label:"그냥 낸다"}]).then(d=>d==="yes")},e=new R(this.prefs.difficulty),n=new URLSearchParams(location.search).get("demo")==="1"?new R("normal"):t,a=new st([n,e],this.settings,c=>this.onEvent(c));this.game=a,this.render();const l=await a.run(this.firstPlayer);await this.finishRound(l)}async finishRound(t){let e,i,n=0;if(t.winner===null)this.nagariStack++,e="나가리",i=`<p class="sub">아무도 나지 못했습니다. 다음 판은 <b>×${2**this.nagariStack}</b>.</p>`;else{const l=2**this.nagariStack,c=t.settlement;n=(c?c.total:t.flatScore??0)*l,this.nagariStack=0,this.firstPlayer=t.winner,this.totals[t.winner]+=n,e=t.winner===w?"내가 이겼다!":"컴퓨터 승리",t.reason==="chongtong"?i=`<p class="sub">총통! 같은 월 4장으로 즉시 승리.</p><div class="total">${n}점</div>`:c?i=`
          <div class="score-lines">${c.evaluation.lines.map(r=>`<span>${r.label} <b>${r.points}</b></span>`).join("")}</div>
          <div class="calc">
            <span>기본 ${c.base}점</span>
            ${c.goBonus?`<span>고 +${c.goBonus}</span>`:""}
            ${c.multipliers.map(r=>`<span class="mul">${r}</span>`).join("")}
          </div>
          ${l>1?`<div class="calc"><span class="mul">나가리 ×${l}</span></div>`:""}
          <div class="total">${n}점</div>`:i=`<div class="total">${n}점</div>`}this.render(),await this.pace(400),await this.modal(`<h2 class="ttl">${e}</h2>${i}
       <div class="standings">
         <span>나 <b>${this.totals[w]}</b></span>
         <span>컴퓨터 <b>${this.totals[D]}</b></span>
       </div>`,[{id:"next",label:"다음 판",primary:!0},{id:"menu",label:"처음으로"}])==="next"?this.startRound():this.showTitle()}async onEvent(t){switch(t.t){case"deal":this.render(),await this.pace(320);break;case"turn":this.stageCards={played:null,flipped:null},this.setBanner(t.player===w?"내 차례":"컴퓨터 차례"),this.render(),await this.pace(t.player===w?120:420);break;case"play":this.stageCards.played=t.card,this.render(),await this.pace(430);break;case"flip":this.stageCards.flipped=t.card,this.render(),await this.pace(480);break;case"capture":this.highlight=new Set(t.cards.map(e=>e.id)),this.render(),await this.pace(360),this.highlight.clear();break;case"special":this.toast(Ct[t.kind]??t.kind,t.kind),await this.pace(520);break;case"steal":t.card&&(this.render(),await this.pace(220));break;case"go":this.toast(`${t.count}고!`,"go"),this.render(),await this.pace(560);break;case"stop":this.toast("스톱!","go"),await this.pace(480);break;case"end":this.render();break}}humanSelectMove(t,e){return this.legal=e,this.setBanner("낼 카드를 고르세요"),this.render(),new Promise(i=>{this.moveResolve=n=>{this.moveResolve=null,this.legal=[],i(n)}})}humanChooseMatch(t){return this.chooseOptions=t,this.setBanner("가져올 카드를 고르세요"),this.render(),new Promise(e=>{this.chooseResolve=i=>{this.chooseResolve=null,this.chooseOptions=[],this.setBanner(""),this.render(),e(i)}})}render(){const t=this.game;if(!t)return;const e=t.players[w],i=t.players[D],n=v(e.captured,this.settings),a=v(i.captured,this.settings);m("#ai-score").textContent=String(a.base),m("#my-score").textContent=String(n.base),m("#ai-go").textContent=i.go>0?`${i.go}고`:"",m("#my-go").textContent=e.go>0?`${e.go}고`:"",m("#deck-count").textContent=String(t.deck.length),m("#round-no").textContent=`${this.round}판`,m("#totals").textContent=`${this.totals[w]} : ${this.totals[D]}`,m("#ai-hand").innerHTML=i.hand.map(()=>`<div class="card back">${O()}</div>`).join(""),m("#ai-captured").innerHTML=this.capturedHtml(i.captured),m("#my-captured").innerHTML=this.capturedHtml(e.captured),m("#field").innerHTML=this.fieldHtml(t);const l=m("#my-hand");l.innerHTML=this.handHtml(t),Pt(l,t.players[w].hand.length),m("#stage").innerHTML=this.stageHtml();const c=this.legal.filter(d=>d.kind==="bomb"),r=m("#bomb-bar");r.innerHTML=c.map(d=>`<button class="bomb-btn" data-month="${d.month}">💣 ${d.month}월 폭탄</button>`).join(""),r.classList.toggle("on",c.length>0),m("#nagari").textContent=this.nagariStack>0?`나가리 ×${2**this.nagariStack}`:""}capturedHtml(t){return[{key:"gwang",label:"광",list:t.filter(i=>i.type==="gwang")},{key:"yeol",label:"열",list:t.filter(i=>i.type==="yeol")},{key:"tti",label:"띠",list:t.filter(i=>i.type==="tti")},{key:"pi",label:"피",list:t.filter(i=>i.type==="pi")}].map(i=>{if(i.list.length===0)return'<div class="cap-group empty"></div>';const n=i.key==="pi"?i.list.reduce((l,c)=>l+c.piValue,0):i.list.length,a=i.list.map((l,c)=>`<div class="card mini" style="--i:${c}">${A(l)}</div>`).join("");return`<div class="cap-group"><span class="cap-n">${i.label}${n}</span><div class="stack">${a}</div></div>`}).join("")}fieldHtml(t){const e=new Map;for(const n of t.field){const a=e.get(n.month)??[];a.push(n),e.set(n.month,a)}return[...e.keys()].sort((n,a)=>n-a).map(n=>{const a=e.get(n),l=t.ppeok.has(n),c=a.map(r=>{const d=this.chooseOptions.some(g=>g.id===r.id),h=this.highlight.has(r.id);return V(r,`${d?"selectable":""} ${h?"hl":""}`)}).join("");return`<div class="pile ${l?"ppeok":""} n${a.length}">${c}${l?'<span class="pile-tag">뻑</span>':""}</div>`}).join("")}handHtml(t){const e=new Set(this.legal.filter(n=>n.kind==="play").map(n=>n.cardId));return t.players[w].hand.slice().sort((n,a)=>n.month-a.month||n.id-a.id).map(n=>{const a=e.has(n.id),l=t.field.some(c=>c.month===n.month);return V(n,`${a?"playable":""} ${l&&a?"match":""}`)}).join("")}stageHtml(){const{played:t,flipped:e}=this.stageCards;return!t&&!e?"":`
      ${t?`<div class="stage-slot"><span>낸 패</span>${V(t,"pop")}</div>`:""}
      ${e?`<div class="stage-slot"><span>뒤집기</span>${V(e,"pop")}</div>`:""}`}setBanner(t){m("#banner").textContent=t}toast(t,e){const i=m("#toast");i.textContent=t,i.className=`toast show ${e}`,window.setTimeout(()=>{i.className="toast"},900)}bind(){this.root.addEventListener("click",t=>{const e=t.target,i=e.closest(".bomb-btn");if(i&&this.moveResolve){this.moveResolve({kind:"bomb",month:Number(i.dataset.month)});return}const n=e.closest(".card");if(n){const a=Number(n.dataset.id);if(this.chooseResolve&&n.classList.contains("selectable")){this.chooseResolve(this.chooseOptions.find(l=>l.id===a));return}if(this.moveResolve&&n.classList.contains("playable")){this.moveResolve({kind:"play",cardId:a});return}}e.closest("#btn-info")&&this.showScoreSheet(),e.closest("#btn-menu")&&this.modal('<h2 class="ttl">메뉴</h2>',[{id:"resume",label:"계속하기",primary:!0},{id:"rules",label:"규칙 보기"},{id:"restart",label:"처음으로"}]).then(a=>{a==="rules"&&this.showRules(),a==="restart"&&(this.game=null,this.showTitle())})})}async showScoreSheet(){const t=this.game;if(!t)return;const e=v(t.players[w].captured,this.settings),i=v(t.players[D].captured,this.settings),n=(a,l)=>`
      <div class="sheet-col">
        <h3>${a} <b>${l.base}점</b></h3>
        <ul>
          <li>광 ${l.gwangCount}</li>
          <li>열끗 ${l.yeolCount}${l.godori?" · 고도리":""}</li>
          <li>띠 ${l.ttiCount}${l.hongdan?" · 홍단":""}${l.chodan?" · 초단":""}${l.chungdan?" · 청단":""}</li>
          <li>피 ${l.piValue}</li>
        </ul>
      </div>`;await this.modal(`<h2 class="ttl">현재 점수</h2><div class="sheet">${n("나",e)}${n("컴퓨터",i)}</div>`,[{id:"close",label:"닫기",primary:!0}])}modal(t,e,i=!1){if(this.busy)return Promise.resolve("");this.busy=!0;const n=m("#modal");return n.innerHTML=`<div class="sheet-box">${t}
      <div class="acts">${e.map(a=>`<button data-act="${a.id}" class="${a.primary?"primary":""}">${a.label}</button>`).join("")}</div></div>`,n.classList.add("on"),i&&n.querySelectorAll("[data-k]").forEach(a=>{const l=a.dataset.k;a instanceof HTMLInputElement&&a.type==="checkbox"?(a.checked=!!this.prefs[l],a.addEventListener("change",()=>{this.prefs[l]=a.checked,N(this.prefs)})):(a.value=String(this.prefs[l]),a.addEventListener("change",()=>{const c=l==="minStopScore"?Number(a.value):a.value;this.prefs[l]=c,N(this.prefs)}))}),new Promise(a=>{const l=c=>{const r=c.target.closest("[data-act]");r&&(n.removeEventListener("click",l),n.classList.remove("on"),n.innerHTML="",this.busy=!1,a(r.dataset.act))};n.addEventListener("click",l)})}}const Et=`
<div class="table">
  <div class="hud">
    <button id="btn-menu" class="ghost">≡</button>
    <span id="round-no">1판</span>
    <span id="totals" class="totals">0 : 0</span>
    <span id="nagari" class="nagari"></span>
    <button id="btn-info" class="ghost">점수</button>
  </div>

  <section class="side ai-side">
    <div class="who">
      <span class="avatar">🤖</span>
      <span class="name">컴퓨터</span>
      <span class="pts"><b id="ai-score">0</b>점</span>
      <span id="ai-go" class="go"></span>
    </div>
    <div id="ai-hand" class="hand-row opp"></div>
    <div id="ai-captured" class="captured"></div>
  </section>

  <section class="board">
    <div class="deck-wrap">
      <div class="deck">${O()}</div>
      <span class="deck-n"><b id="deck-count">0</b></span>
    </div>
    <div id="field" class="field"></div>
    <div id="stage" class="stage"></div>
    <div id="banner" class="banner"></div>
  </section>

  <section class="side my-side">
    <div id="my-captured" class="captured"></div>
    <div class="who">
      <span class="avatar">🙂</span>
      <span class="name">나</span>
      <span class="pts"><b id="my-score">0</b>점</span>
      <span id="my-go" class="go"></span>
    </div>
    <div id="bomb-bar" class="bomb-bar"></div>
    <div id="my-hand" class="hand-row mine"></div>
  </section>

  <div id="toast" class="toast"></div>
  <div id="modal" class="modal"></div>
</div>`,K=document.getElementById("app");if(!K)throw new Error("#app not found");new Zt(K);
