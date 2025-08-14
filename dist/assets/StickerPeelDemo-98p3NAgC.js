import{r as ne,a as me,j as E,g as Xn,B as Yn,T as Bn}from"./index-j7DW7U0N.js";import{T as An,P as Fn,a as Hn,C as On,b as zn,c as $n,d as jn}from"./PropTable-Baf4PZpP.js";import{C as Gn}from"./Customize-Dq9g9yhm.js";import{P as ze}from"./PreviewSlider-D0sSZbsU.js";import{D as Wn}from"./Dependencies-BSh7s3YA.js";const Vn="/assets/react-bits-sticker-DuQtTs-F.png";/*!
 * matrix 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Ce,We,Qt,Tt,lt,Et,Lt,ft,ye="transform",$t=ye+"Origin",yn,wn=function(t){var i=t.ownerDocument||t;for(!(ye in t.style)&&("msTransform"in t.style)&&(ye="msTransform",$t=ye+"Origin");i.parentNode&&(i=i.parentNode););if(We=window,Lt=new Ue,i){Ce=i,Qt=i.documentElement,Tt=i.body,ft=Ce.createElementNS("http://www.w3.org/2000/svg","g"),ft.style.transform="none";var n=i.createElement("div"),o=i.createElement("div"),s=i&&(i.body||i.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(o),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),yn=o.offsetParent!==n,s.removeChild(n))}return i},Un=function(t){for(var i,n;t&&t!==Tt;)n=t._gsap,n&&n.uncache&&n.get(t,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),i?i.push(n):i=[n]),t=t.parentNode;return i},bn=[],En=[],Qn=function(){return We.pageYOffset||Ce.scrollTop||Qt.scrollTop||Tt.scrollTop||0},Kn=function(){return We.pageXOffset||Ce.scrollLeft||Qt.scrollLeft||Tt.scrollLeft||0},Kt=function(t){return t.ownerSVGElement||((t.tagName+"").toLowerCase()==="svg"?t:null)},qn=function f(t){if(We.getComputedStyle(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return f(t)},Yt=function f(t,i){if(t.parentNode&&(Ce||wn(t))){var n=Kt(t),o=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?i?"rect":"g":"div",d=i!==2?0:100,l=i===3?100:0,m="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",u=Ce.createElementNS?Ce.createElementNS(o.replace(/^https/,"http"),s):Ce.createElement(s);return i&&(n?(Et||(Et=f(t)),u.setAttribute("width",.01),u.setAttribute("height",.01),u.setAttribute("transform","translate("+d+","+l+")"),Et.appendChild(u)):(lt||(lt=f(t),lt.style.cssText=m),u.style.cssText=m+"width:0.1px;height:0.1px;top:"+l+"px;left:"+d+"px",lt.appendChild(u))),u}throw"Need document and parent."},Zn=function(t){for(var i=new Ue,n=0;n<t.numberOfItems;n++)i.multiply(t.getItem(n).matrix);return i},Jn=function(t){var i=t.getCTM(),n;return i||(n=t.style[ye],t.style[ye]="none",t.appendChild(ft),i=ft.getCTM(),t.removeChild(ft),n?t.style[ye]=n:t.style.removeProperty(ye.replace(/([A-Z])/g,"-$1").toLowerCase())),i||Lt.clone()},ei=function(t,i){var n=Kt(t),o=t===n,s=n?bn:En,d=t.parentNode,l=d&&!n&&d.shadowRoot&&d.shadowRoot.appendChild?d.shadowRoot:d,m,u,g,w,k,e;if(t===We)return t;if(s.length||s.push(Yt(t,1),Yt(t,2),Yt(t,3)),m=n?Et:lt,n)o?(g=Jn(t),w=-g.e/g.a,k=-g.f/g.d,u=Lt):t.getBBox?(g=t.getBBox(),u=t.transform?t.transform.baseVal:{},u=u.numberOfItems?u.numberOfItems>1?Zn(u):u.getItem(0).matrix:Lt,w=u.a*g.x+u.c*g.y,k=u.b*g.x+u.d*g.y):(u=new Ue,w=k=0),(o?n:d).appendChild(m),m.setAttribute("transform","matrix("+u.a+","+u.b+","+u.c+","+u.d+","+(u.e+w)+","+(u.f+k)+")");else{if(w=k=0,yn)for(u=t.offsetParent,g=t;g&&(g=g.parentNode)&&g!==u&&g.parentNode;)(We.getComputedStyle(g)[ye]+"").length>4&&(w=g.offsetLeft,k=g.offsetTop,g=0);if(e=We.getComputedStyle(t),e.position!=="absolute"&&e.position!=="fixed")for(u=t.offsetParent;d&&d!==u;)w+=d.scrollLeft||0,k+=d.scrollTop||0,d=d.parentNode;g=m.style,g.top=t.offsetTop-k+"px",g.left=t.offsetLeft-w+"px",g[ye]=e[ye],g[$t]=e[$t],g.position=e.position==="fixed"?"fixed":"absolute",l.appendChild(m)}return m},Bt=function(t,i,n,o,s,d,l){return t.a=i,t.b=n,t.c=o,t.d=s,t.e=d,t.f=l,t},Ue=function(){function f(i,n,o,s,d,l){i===void 0&&(i=1),n===void 0&&(n=0),o===void 0&&(o=0),s===void 0&&(s=1),d===void 0&&(d=0),l===void 0&&(l=0),Bt(this,i,n,o,s,d,l)}var t=f.prototype;return t.inverse=function(){var n=this.a,o=this.b,s=this.c,d=this.d,l=this.e,m=this.f,u=n*d-o*s||1e-10;return Bt(this,d/u,-o/u,-s/u,n/u,(s*m-d*l)/u,-(n*m-o*l)/u)},t.multiply=function(n){var o=this.a,s=this.b,d=this.c,l=this.d,m=this.e,u=this.f,g=n.a,w=n.c,k=n.b,e=n.d,b=n.e,_=n.f;return Bt(this,g*o+k*d,g*s+k*l,w*o+e*d,w*s+e*l,m+b*o+_*d,u+b*s+_*l)},t.clone=function(){return new f(this.a,this.b,this.c,this.d,this.e,this.f)},t.equals=function(n){var o=this.a,s=this.b,d=this.c,l=this.d,m=this.e,u=this.f;return o===n.a&&s===n.b&&d===n.c&&l===n.d&&m===n.e&&u===n.f},t.apply=function(n,o){o===void 0&&(o={});var s=n.x,d=n.y,l=this.a,m=this.b,u=this.c,g=this.d,w=this.e,k=this.f;return o.x=s*l+d*u+w||0,o.y=s*m+d*g+k||0,o},f}();function Ge(f,t,i,n){if(!f||!f.parentNode||(Ce||wn(f)).documentElement===f)return new Ue;var o=Un(f),s=Kt(f),d=s?bn:En,l=ei(f),m=d[0].getBoundingClientRect(),u=d[1].getBoundingClientRect(),g=d[2].getBoundingClientRect(),w=l.parentNode,k=qn(f),e=new Ue((u.left-m.left)/100,(u.top-m.top)/100,(g.left-m.left)/100,(g.top-m.top)/100,m.left+(k?0:Kn()),m.top+(k?0:Qn()));if(w.removeChild(l),o)for(m=o.length;m--;)u=o[m],u.scaleX=u.scaleY=0,u.renderTransform(1,u);return t?e.inverse():e}function ln(f){if(f===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return f}function ti(f,t){f.prototype=Object.create(t.prototype),f.prototype.constructor=f,f.__proto__=t}var C,B,ae,we,De,At,Te,jt,ct,Be,Sn,Gt,ht,qt,dt,xe,ut,St,Pn,Wt,Rt=0,Ln=function(){return typeof window<"u"},Rn=function(){return C||Ln()&&(C=window.gsap)&&C.registerPlugin&&C},Ye=function(t){return typeof t=="function"},pt=function(t){return typeof t=="object"},ke=function(t){return typeof t>"u"},Pt=function(){return!1},gt="transform",Vt="transformOrigin",Ne=function(t){return Math.round(t*1e4)/1e4},st=Array.isArray,wt=function(t,i){var n=ae.createElementNS?ae.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),t):ae.createElement(t);return n.style?n:ae.createElement(t)},cn=180/Math.PI,$e=1e20,ni=new Ue,Xe=Date.now||function(){return new Date().getTime()},Ve=[],qe={},ii=0,ri=/^(?:a|input|textarea|button|select)$/i,dn=0,Qe={},Re={},Tn=function(t,i){var n={},o;for(o in t)n[o]=i?t[o]*i:t[o];return n},oi=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},un=function f(t,i){for(var n=t.length,o;n--;)i?t[n].style.touchAction=i:t[n].style.removeProperty("touch-action"),o=t[n].children,o&&o.length&&f(o,i)},Cn=function(){return Ve.forEach(function(t){return t()})},ai=function(t){Ve.push(t),Ve.length===1&&C.ticker.add(Cn)},fn=function(){return!Ve.length&&C.ticker.remove(Cn)},pn=function(t){for(var i=Ve.length;i--;)Ve[i]===t&&Ve.splice(i,1);C.to(fn,{overwrite:!0,delay:15,duration:0,onComplete:fn,data:"_draggable"})},si=function(t,i){for(var n in i)n in t||(t[n]=i[n]);return t},q=function(t,i,n,o){if(t.addEventListener){var s=ht[i];o=o||(Sn?{passive:!1}:null),t.addEventListener(s||i,n,o),s&&i!==s&&t.addEventListener(i,n,o)}},U=function(t,i,n,o){if(t.removeEventListener){var s=ht[i];t.removeEventListener(s||i,n,o),s&&i!==s&&t.removeEventListener(i,n,o)}},ue=function(t){t.preventDefault&&t.preventDefault(),t.preventManipulation&&t.preventManipulation()},li=function(t,i){for(var n=t.length;n--;)if(t[n].identifier===i)return!0},ci=function f(t){qt=t.touches&&Rt<t.touches.length,U(t.target,"touchend",f)},gn=function(t){qt=t.touches&&Rt<t.touches.length,q(t.target,"touchend",ci)},Ze=function(t){return B.pageYOffset||t.scrollTop||t.documentElement.scrollTop||t.body.scrollTop||0},Je=function(t){return B.pageXOffset||t.scrollLeft||t.documentElement.scrollLeft||t.body.scrollLeft||0},hn=function f(t,i){q(t,"scroll",i),et(t.parentNode)||f(t.parentNode,i)},vn=function f(t,i){U(t,"scroll",i),et(t.parentNode)||f(t.parentNode,i)},et=function(t){return!t||t===we||t.nodeType===9||t===ae.body||t===B||!t.nodeType||!t.parentNode},mn=function(t,i){var n=i==="x"?"Width":"Height",o="scroll"+n,s="client"+n;return Math.max(0,et(t)?Math.max(we[o],De[o])-(B["inner"+n]||we[s]||De[s]):t[o]-t[s])},Ft=function f(t,i){var n=mn(t,"x"),o=mn(t,"y");et(t)?t=Re:f(t.parentNode,i),t._gsMaxScrollX=n,t._gsMaxScrollY=o,i||(t._gsScrollX=t.scrollLeft||0,t._gsScrollY=t.scrollTop||0)},Ht=function(t,i,n){var o=t.style;o&&(ke(o[i])&&(i=ct(i,t)||i),n==null?o.removeProperty&&o.removeProperty(i.replace(/([A-Z])/g,"-$1").toLowerCase()):o[i]=n)},vt=function(t){return B.getComputedStyle(t instanceof Element?t:t.host||(t.parentNode||{}).host||t)},je={},Ke=function(t){if(t===B)return je.left=je.top=0,je.width=je.right=we.clientWidth||t.innerWidth||De.clientWidth||0,je.height=je.bottom=(t.innerHeight||0)-20<we.clientHeight?we.clientHeight:t.innerHeight||De.clientHeight||0,je;var i=t.ownerDocument||ae,n=ke(t.pageX)?!t.nodeType&&!ke(t.left)&&!ke(t.top)?t:Be(t)[0].getBoundingClientRect():{left:t.pageX-Je(i),top:t.pageY-Ze(i),right:t.pageX-Je(i)+1,bottom:t.pageY-Ze(i)+1};return ke(n.right)&&!ke(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):ke(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},j=function(t,i,n){var o=t.vars,s=o[n],d=t._listeners[i],l;return Ye(s)&&(l=s.apply(o.callbackScope||t,o[n+"Params"]||[t.pointerEvent])),d&&t.dispatchEvent(i)===!1&&(l=!1),l},xn=function(t,i){var n=Be(t)[0],o,s,d;return!n.nodeType&&n!==B?ke(t.left)?(s=t.min||t.minX||t.minRotation||0,o=t.min||t.minY||0,{left:s,top:o,width:(t.max||t.maxX||t.maxRotation||0)-s,height:(t.max||t.maxY||0)-o}):(d={x:0,y:0},{left:t.left-d.x,top:t.top-d.y,width:t.width,height:t.height}):di(n,i)},fe={},di=function(t,i){i=Be(i)[0];var n=t.getBBox&&t.ownerSVGElement,o=t.ownerDocument||ae,s,d,l,m,u,g,w,k,e,b,_,O,A;if(t===B)l=Ze(o),s=Je(o),d=s+(o.documentElement.clientWidth||t.innerWidth||o.body.clientWidth||0),m=l+((t.innerHeight||0)-20<o.documentElement.clientHeight?o.documentElement.clientHeight:t.innerHeight||o.body.clientHeight||0);else{if(i===B||ke(i))return t.getBoundingClientRect();s=l=0,n?(b=t.getBBox(),_=b.width,O=b.height):(t.viewBox&&(b=t.viewBox.baseVal)&&(s=b.x||0,l=b.y||0,_=b.width,O=b.height),_||(A=vt(t),b=A.boxSizing==="border-box",_=(parseFloat(A.width)||t.clientWidth||0)+(b?0:parseFloat(A.borderLeftWidth)+parseFloat(A.borderRightWidth)),O=(parseFloat(A.height)||t.clientHeight||0)+(b?0:parseFloat(A.borderTopWidth)+parseFloat(A.borderBottomWidth)))),d=_,m=O}return t===i?{left:s,top:l,width:d-s,height:m-l}:(u=Ge(i,!0).multiply(Ge(t)),g=u.apply({x:s,y:l}),w=u.apply({x:d,y:l}),k=u.apply({x:d,y:m}),e=u.apply({x:s,y:m}),s=Math.min(g.x,w.x,k.x,e.x),l=Math.min(g.y,w.y,k.y,e.y),{left:s,top:l,width:Math.max(g.x,w.x,k.x,e.x)-s,height:Math.max(g.y,w.y,k.y,e.y)-l})},Ot=function(t,i,n,o,s,d){var l={},m,u,g;if(i)if(s!==1&&i instanceof Array){if(l.end=m=[],g=i.length,pt(i[0]))for(u=0;u<g;u++)m[u]=Tn(i[u],s);else for(u=0;u<g;u++)m[u]=i[u]*s;n+=1.1,o-=1.1}else Ye(i)?l.end=function(w){var k=i.call(t,w),e,b;if(s!==1)if(pt(k)){e={};for(b in k)e[b]=k[b]*s;k=e}else k*=s;return k}:l.end=i;return(n||n===0)&&(l.max=n),(o||o===0)&&(l.min=o),d&&(l.velocity=0),l},ui=function f(t){var i;return!t||!t.getAttribute||t===De?!1:(i=t.getAttribute("data-clickable"))==="true"||i!=="false"&&(ri.test(t.nodeName+"")||t.getAttribute("contentEditable")==="true")?!0:f(t.parentNode)},bt=function(t,i){for(var n=t.length,o;n--;)o=t[n],o.ondragstart=o.onselectstart=i?null:Pt,C.set(o,{lazy:!0,userSelect:i?"text":"none"})},fi=function f(t){if(vt(t).position==="fixed")return!0;if(t=t.parentNode,t&&t.nodeType===1)return f(t)},Dn,Ut,pi=function(t,i){t=C.utils.toArray(t)[0],i=i||{};var n=document.createElement("div"),o=n.style,s=t.firstChild,d=0,l=0,m=t.scrollTop,u=t.scrollLeft,g=t.scrollWidth,w=t.scrollHeight,k=0,e=0,b=0,_,O,A,Pe,R,G;Dn&&i.force3D!==!1?(R="translate3d(",G="px,0px)"):gt&&(R="translate(",G="px)"),this.scrollTop=function(S,F){if(!arguments.length)return-this.top();this.top(-S,F)},this.scrollLeft=function(S,F){if(!arguments.length)return-this.left();this.left(-S,F)},this.left=function(S,F){if(!arguments.length)return-(t.scrollLeft+l);var N=t.scrollLeft-u,T=l;if((N>2||N<-2)&&!F){u=t.scrollLeft,C.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-u),i.onKill&&i.onKill();return}S=-S,S<0?(l=S-.5|0,S=0):S>e?(l=S-e|0,S=e):l=0,(l||T)&&(this._skip||(o[gt]=R+-l+"px,"+-d+G),l+k>=0&&(o.paddingRight=l+k+"px")),t.scrollLeft=S|0,u=t.scrollLeft},this.top=function(S,F){if(!arguments.length)return-(t.scrollTop+d);var N=t.scrollTop-m,T=d;if((N>2||N<-2)&&!F){m=t.scrollTop,C.killTweensOf(this,{top:1,scrollTop:1}),this.top(-m),i.onKill&&i.onKill();return}S=-S,S<0?(d=S-.5|0,S=0):S>b?(d=S-b|0,S=b):d=0,(d||T)&&(this._skip||(o[gt]=R+-l+"px,"+-d+G)),t.scrollTop=S|0,m=t.scrollTop},this.maxScrollTop=function(){return b},this.maxScrollLeft=function(){return e},this.disable=function(){for(s=n.firstChild;s;)Pe=s.nextSibling,t.appendChild(s),s=Pe;t===n.parentNode&&t.removeChild(n)},this.enable=function(){if(s=t.firstChild,s!==n){for(;s;)Pe=s.nextSibling,n.appendChild(s),s=Pe;t.appendChild(n),this.calibrate()}},this.calibrate=function(S){var F=t.clientWidth===_,N,T,re;m=t.scrollTop,u=t.scrollLeft,!(F&&t.clientHeight===O&&n.offsetHeight===A&&g===t.scrollWidth&&w===t.scrollHeight&&!S)&&((d||l)&&(T=this.left(),re=this.top(),this.left(-t.scrollLeft),this.top(-t.scrollTop)),N=vt(t),(!F||S)&&(o.display="block",o.width="auto",o.paddingRight="0px",k=Math.max(0,t.scrollWidth-t.clientWidth),k&&(k+=parseFloat(N.paddingLeft)+(Ut?parseFloat(N.paddingRight):0))),o.display="inline-block",o.position="relative",o.overflow="visible",o.verticalAlign="top",o.boxSizing="content-box",o.width="100%",o.paddingRight=k+"px",Ut&&(o.paddingBottom=N.paddingBottom),_=t.clientWidth,O=t.clientHeight,g=t.scrollWidth,w=t.scrollHeight,e=t.scrollWidth-_,b=t.scrollHeight-O,A=n.offsetHeight,o.display="block",(T||re)&&(this.left(T),this.top(re)))},this.content=n,this.element=t,this._skip=!1,this.enable()},zt=function(t){if(Ln()&&document.body){var i=window&&window.navigator;B=window,ae=document,we=ae.documentElement,De=ae.body,At=wt("div"),St=!!window.PointerEvent,Te=wt("div"),Te.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",ut=Te.style.cursor==="grab"?"grab":"move",dt=i&&i.userAgent.toLowerCase().indexOf("android")!==-1,Gt="ontouchstart"in we&&"orientation"in B||i&&(i.MaxTouchPoints>0||i.msMaxTouchPoints>0),Ut=function(){var n=wt("div"),o=wt("div"),s=o.style,d=De,l;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(o),d.appendChild(n),l=o.offsetHeight+18>n.scrollHeight,d.removeChild(n),l}(),ht=function(n){for(var o=n.split(","),s=("onpointerdown"in At?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in At?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),d={},l=4;--l>-1;)d[o[l]]=s[l],d[s[l]]=o[l];try{we.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Sn=1}}))}catch{}return d}("touchstart,touchmove,touchend,touchcancel"),q(ae,"touchcancel",Pt),q(B,"touchmove",Pt),De&&De.addEventListener("touchstart",Pt),q(ae,"contextmenu",function(){for(var n in qe)qe[n].isPressed&&qe[n].endDrag()}),C=jt=Rn()}C?(xe=C.plugins.inertia,Pn=C.core.context||function(){},ct=C.utils.checkPrefix,gt=ct(gt),Vt=ct(Vt),Be=C.utils.toArray,Wt=C.core.getStyleSaver,Dn=!!ct("perspective")):t&&console.warn("Please gsap.registerPlugin(Draggable)")},gi=function(){function f(i){this._listeners={},this.target=i||this}var t=f.prototype;return t.addEventListener=function(n,o){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(o)||s.push(o)},t.removeEventListener=function(n,o){var s=this._listeners[n],d=s&&s.indexOf(o);d>=0&&s.splice(d,1)},t.dispatchEvent=function(n){var o=this,s;return(this._listeners[n]||[]).forEach(function(d){return d.call(o,{type:n,target:o.target})===!1&&(s=!1)}),s},f}(),tt=function(f){ti(t,f);function t(i,n){var o;o=f.call(this)||this,jt||zt(1),i=Be(i)[0],o.styles=Wt&&Wt(i,"transform,left,top"),xe||(xe=C.plugins.inertia),o.vars=n=Tn(n||{}),o.target=i,o.x=o.y=o.rotation=0,o.dragResistance=parseFloat(n.dragResistance)||0,o.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,o.lockAxis=n.lockAxis,o.autoScroll=n.autoScroll||0,o.lockedAxis=null,o.allowEventDefault=!!n.allowEventDefault,C.getProperty(i,"x");var s=(n.type||"x,y").toLowerCase(),d=~s.indexOf("x")||~s.indexOf("y"),l=s.indexOf("rotation")!==-1,m=l?"rotation":d?"x":"left",u=d?"y":"top",g=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),w=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),k=n.minimumMovement||2,e=ln(o),b=Be(n.trigger||n.handle||i),_={},O=0,A=!1,Pe=n.autoScrollMarginTop||40,R=n.autoScrollMarginRight||40,G=n.autoScrollMarginBottom||40,S=n.autoScrollMarginLeft||40,F=n.clickableTest||ui,N=0,T=i._gsap||C.core.getCache(i),re=fi(i),pe=function(r,c){return parseFloat(T.get(i,r,c))},M=i.ownerDocument||ae,se,P,be,Ee,J,Q,Ae,Zt,Jt,z,H,K,W,mt,le,nt,Z,Ct,_e,Me,Fe,it,ee,I,en,ce,ge,Dt,_t,tn,oe,nn,xt,rn=function(r){return ue(r),r.stopImmediatePropagation&&r.stopImmediatePropagation(),!1},Se=function y(r){if(e.autoScroll&&e.isDragging&&(A||Z)){var c=i,a=e.autoScroll*15,p,h,v,L,x,X,D,Y;for(A=!1,Re.scrollTop=B.pageYOffset!=null?B.pageYOffset:M.documentElement.scrollTop!=null?M.documentElement.scrollTop:M.body.scrollTop,Re.scrollLeft=B.pageXOffset!=null?B.pageXOffset:M.documentElement.scrollLeft!=null?M.documentElement.scrollLeft:M.body.scrollLeft,L=e.pointerX-Re.scrollLeft,x=e.pointerY-Re.scrollTop;c&&!h;)h=et(c.parentNode),p=h?Re:c.parentNode,v=h?{bottom:Math.max(we.clientHeight,B.innerHeight||0),right:Math.max(we.clientWidth,B.innerWidth||0),left:0,top:0}:p.getBoundingClientRect(),X=D=0,w&&(Y=p._gsMaxScrollY-p.scrollTop,Y<0?D=Y:x>v.bottom-G&&Y?(A=!0,D=Math.min(Y,a*(1-Math.max(0,v.bottom-x)/G)|0)):x<v.top+Pe&&p.scrollTop&&(A=!0,D=-Math.min(p.scrollTop,a*(1-Math.max(0,x-v.top)/Pe)|0)),D&&(p.scrollTop+=D)),g&&(Y=p._gsMaxScrollX-p.scrollLeft,Y<0?X=Y:L>v.right-R&&Y?(A=!0,X=Math.min(Y,a*(1-Math.max(0,v.right-L)/R)|0)):L<v.left+S&&p.scrollLeft&&(A=!0,X=-Math.min(p.scrollLeft,a*(1-Math.max(0,L-v.left)/S)|0)),X&&(p.scrollLeft+=X)),h&&(X||D)&&(B.scrollTo(p.scrollLeft,p.scrollTop),at(e.pointerX+X,e.pointerY+D)),c=p}if(Z){var $=e.x,ie=e.y;l?(e.deltaX=$-parseFloat(T.rotation),e.rotation=$,T.rotation=$+"deg",T.renderTransform(1,T)):P?(w&&(e.deltaY=ie-P.top(),P.top(ie)),g&&(e.deltaX=$-P.left(),P.left($))):d?(w&&(e.deltaY=ie-parseFloat(T.y),T.y=ie+"px"),g&&(e.deltaX=$-parseFloat(T.x),T.x=$+"px"),T.renderTransform(1,T)):(w&&(e.deltaY=ie-parseFloat(i.style.top||0),i.style.top=ie+"px"),g&&(e.deltaX=$-parseFloat(i.style.left||0),i.style.left=$+"px")),Zt&&!r&&!Dt&&(Dt=!0,j(e,"drag","onDrag")===!1&&(g&&(e.x-=e.deltaX),w&&(e.y-=e.deltaY),y(!0)),Dt=!1)}Z=!1},He=function(r,c){var a=e.x,p=e.y,h,v;i._gsap||(T=C.core.getCache(i)),T.uncache&&C.getProperty(i,"x"),d?(e.x=parseFloat(T.x),e.y=parseFloat(T.y)):l?e.x=e.rotation=parseFloat(T.rotation):P?(e.y=P.top(),e.x=P.left()):(e.y=parseFloat(i.style.top||(v=vt(i))&&v.top)||0,e.x=parseFloat(i.style.left||(v||{}).left)||0),(_e||Me||Fe)&&!c&&(e.isDragging||e.isThrowing)&&(Fe&&(Qe.x=e.x,Qe.y=e.y,h=Fe(Qe),h.x!==e.x&&(e.x=h.x,Z=!0),h.y!==e.y&&(e.y=h.y,Z=!0)),_e&&(h=_e(e.x),h!==e.x&&(e.x=h,l&&(e.rotation=h),Z=!0)),Me&&(h=Me(e.y),h!==e.y&&(e.y=h),Z=!0)),Z&&Se(!0),r||(e.deltaX=e.x-a,e.deltaY=e.y-p,j(e,"throwupdate","onThrowUpdate"))},Mt=function(r,c,a,p){return c==null&&(c=-$e),a==null&&(a=$e),Ye(r)?function(h){var v=e.isPressed?1-e.edgeResistance:1;return r.call(e,(h>a?a+(h-a)*v:h<c?c+(h-c)*v:h)*p)*p}:st(r)?function(h){for(var v=r.length,L=0,x=$e,X,D;--v>-1;)X=r[v],D=X-h,D<0&&(D=-D),D<x&&X>=c&&X<=a&&(L=v,x=D);return r[L]}:isNaN(r)?function(h){return h}:function(){return r*p}},_n=function(r,c,a,p,h,v,L){return v=v&&v<$e?v*v:$e,Ye(r)?function(x){var X=e.isPressed?1-e.edgeResistance:1,D=x.x,Y=x.y,$,ie,Le;return x.x=D=D>a?a+(D-a)*X:D<c?c+(D-c)*X:D,x.y=Y=Y>h?h+(Y-h)*X:Y<p?p+(Y-p)*X:Y,$=r.call(e,x),$!==x&&(x.x=$.x,x.y=$.y),L!==1&&(x.x*=L,x.y*=L),v<$e&&(ie=x.x-D,Le=x.y-Y,ie*ie+Le*Le>v&&(x.x=D,x.y=Y)),x}:st(r)?function(x){for(var X=r.length,D=0,Y=$e,$,ie,Le,de;--X>-1;)Le=r[X],$=Le.x-x.x,ie=Le.y-x.y,de=$*$+ie*ie,de<Y&&(D=X,Y=de);return Y<=v?r[D]:x}:function(x){return x}},It=function(){var r,c,a,p;Ae=!1,P?(P.calibrate(),e.minX=H=-P.maxScrollLeft(),e.minY=W=-P.maxScrollTop(),e.maxX=z=e.maxY=K=0,Ae=!0):n.bounds&&(r=xn(n.bounds,i.parentNode),l?(e.minX=H=r.left,e.maxX=z=r.left+r.width,e.minY=W=e.maxY=K=0):!ke(n.bounds.maxX)||!ke(n.bounds.maxY)?(r=n.bounds,e.minX=H=r.minX,e.minY=W=r.minY,e.maxX=z=r.maxX,e.maxY=K=r.maxY):(c=xn(i,i.parentNode),e.minX=H=Math.round(pe(m,"px")+r.left-c.left),e.minY=W=Math.round(pe(u,"px")+r.top-c.top),e.maxX=z=Math.round(H+(r.width-c.width)),e.maxY=K=Math.round(W+(r.height-c.height))),H>z&&(e.minX=z,e.maxX=z=H,H=e.minX),W>K&&(e.minY=K,e.maxY=K=W,W=e.minY),l&&(e.minRotation=H,e.maxRotation=z),Ae=!0),n.liveSnap&&(a=n.liveSnap===!0?n.snap||{}:n.liveSnap,p=st(a)||Ye(a),l?(_e=Mt(p?a:a.rotation,H,z,1),Me=null):a.points?Fe=_n(p?a:a.points,H,z,W,K,a.radius,P?-1:1):(g&&(_e=Mt(p?a:a.x||a.left||a.scrollLeft,H,z,P?-1:1)),w&&(Me=Mt(p?a:a.y||a.top||a.scrollTop,W,K,P?-1:1))))},Mn=function(){e.isThrowing=!1,j(e,"throwcomplete","onThrowComplete")},In=function(){e.isThrowing=!1},Nt=function(r,c){var a,p,h,v;r&&xe?(r===!0&&(a=n.snap||n.liveSnap||{},p=st(a)||Ye(a),r={resistance:(n.throwResistance||n.resistance||1e3)/(l?10:1)},l?r.rotation=Ot(e,p?a:a.rotation,z,H,1,c):(g&&(r[m]=Ot(e,p?a:a.points||a.x||a.left,z,H,P?-1:1,c||e.lockedAxis==="x")),w&&(r[u]=Ot(e,p?a:a.points||a.y||a.top,K,W,P?-1:1,c||e.lockedAxis==="y")),(a.points||st(a)&&pt(a[0]))&&(r.linkedProps=m+","+u,r.radius=a.radius))),e.isThrowing=!0,v=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-e.edgeResistance+.2:n.overshootTolerance,r.duration||(r.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?v===0||pt(r)&&r.resistance>1e3?0:.5:n.minDuration,overshoot:v}),e.tween=h=C.to(P||i,{inertia:r,data:"_draggable",inherit:!1,onComplete:Mn,onInterrupt:In,onUpdate:n.fastMode?j:He,onUpdateParams:n.fastMode?[e,"onthrowupdate","onThrowUpdate"]:a&&a.radius?[!1,!0]:[]}),n.fastMode||(P&&(P._skip=!0),h.render(1e9,!0,!0),He(!0,!0),e.endX=e.x,e.endY=e.y,l&&(e.endRotation=e.x),h.play(0),He(!0,!0),P&&(P._skip=!1))):Ae&&e.applyBounds()},on=function(r){var c=I,a;I=Ge(i.parentNode,!0),r&&e.isPressed&&!I.equals(c||new Ue)&&(a=c.inverse().apply({x:be,y:Ee}),I.apply(a,a),be=a.x,Ee=a.y),I.equals(ni)&&(I=null)},kt=function(){var r=1-e.edgeResistance,c=re?Je(M):0,a=re?Ze(M):0,p,h,v;d&&(T.x=pe(m,"px")+"px",T.y=pe(u,"px")+"px",T.renderTransform()),on(!1),fe.x=e.pointerX-c,fe.y=e.pointerY-a,I&&I.apply(fe,fe),be=fe.x,Ee=fe.y,Z&&(at(e.pointerX,e.pointerY),Se(!0)),nn=Ge(i),P?(It(),Q=P.top(),J=P.left()):(rt()?(He(!0,!0),It()):e.applyBounds(),l?(p=i.ownerSVGElement?[T.xOrigin-i.getBBox().x,T.yOrigin-i.getBBox().y]:(vt(i)[Vt]||"0 0").split(" "),nt=e.rotationOrigin=Ge(i).apply({x:parseFloat(p[0])||0,y:parseFloat(p[1])||0}),He(!0,!0),h=e.pointerX-nt.x-c,v=nt.y-e.pointerY+a,J=e.x,Q=e.y=Math.atan2(v,h)*cn):(Q=pe(u,"px"),J=pe(m,"px"))),Ae&&r&&(J>z?J=z+(J-z)/r:J<H&&(J=H-(H-J)/r),l||(Q>K?Q=K+(Q-K)/r:Q<W&&(Q=W-(W-Q)/r))),e.startX=J=Ne(J),e.startY=Q=Ne(Q)},rt=function(){return e.tween&&e.tween.isActive()},Nn=function(){Te.parentNode&&!rt()&&!e.isDragging&&Te.parentNode.removeChild(Te)},ot=function(r,c){var a;if(!se||e.isPressed||!r||(r.type==="mousedown"||r.type==="pointerdown")&&!c&&Xe()-N<30&&ht[e.pointerEvent.type]){oe&&r&&se&&ue(r);return}if(en=rt(),xt=!1,e.pointerEvent=r,ht[r.type]?(ee=~r.type.indexOf("touch")?r.currentTarget||r.target:M,q(ee,"touchend",he),q(ee,"touchmove",Oe),q(ee,"touchcancel",he),q(M,"touchstart",gn)):(ee=null,q(M,"mousemove",Oe)),ge=null,(!St||!ee)&&(q(M,"mouseup",he),r&&r.target&&q(r.target,"mouseup",he)),it=F.call(e,r.target)&&n.dragClickables===!1&&!c,it){q(r.target,"change",he),j(e,"pressInit","onPressInit"),j(e,"press","onPress"),bt(b,!0),oe=!1;return}if(ce=!ee||g===w||e.vars.allowNativeTouchScrolling===!1||e.vars.allowContextMenu&&r&&(r.ctrlKey||r.which>2)?!1:g?"y":"x",oe=!ce&&!e.allowEventDefault,oe&&(ue(r),q(B,"touchforcechange",ue)),r.changedTouches?(r=mt=r.changedTouches[0],le=r.identifier):r.pointerId?le=r.pointerId:mt=le=null,Rt++,ai(Se),Ee=e.pointerY=r.pageY,be=e.pointerX=r.pageX,j(e,"pressInit","onPressInit"),(ce||e.autoScroll)&&Ft(i.parentNode),i.parentNode&&e.autoScroll&&!P&&!l&&i.parentNode._gsMaxScrollX&&!Te.parentNode&&!i.getBBox&&(Te.style.width=i.parentNode.scrollWidth+"px",i.parentNode.appendChild(Te)),kt(),e.tween&&e.tween.kill(),e.isThrowing=!1,C.killTweensOf(P||i,_,!0),P&&C.killTweensOf(i,{scrollTo:1},!0),e.tween=e.lockedAxis=null,(n.zIndexBoost||!l&&!P&&n.zIndexBoost!==!1)&&(i.style.zIndex=t.zIndex++),e.isPressed=!0,Zt=!!(n.onDrag||e._listeners.drag),Jt=!!(n.onMove||e._listeners.move),n.cursor!==!1||n.activeCursor)for(a=b.length;--a>-1;)C.set(b[a],{cursor:n.activeCursor||n.cursor||(ut==="grab"?"grabbing":ut)});j(e,"press","onPress")},Oe=function(r){var c=r,a,p,h,v,L,x;if(!se||qt||!e.isPressed||!r){oe&&r&&se&&ue(r);return}if(e.pointerEvent=r,a=r.changedTouches,a){if(r=a[0],r!==mt&&r.identifier!==le){for(v=a.length;--v>-1&&(r=a[v]).identifier!==le&&r.target!==i;);if(v<0)return}}else if(r.pointerId&&le&&r.pointerId!==le)return;if(ee&&ce&&!ge&&(fe.x=r.pageX-(re?Je(M):0),fe.y=r.pageY-(re?Ze(M):0),I&&I.apply(fe,fe),p=fe.x,h=fe.y,L=Math.abs(p-be),x=Math.abs(h-Ee),(L!==x&&(L>k||x>k)||dt&&ce===ge)&&(ge=L>x&&g?"x":"y",ce&&ge!==ce&&q(B,"touchforcechange",ue),e.vars.lockAxisOnTouchScroll!==!1&&g&&w&&(e.lockedAxis=ge==="x"?"y":"x",Ye(e.vars.onLockAxis)&&e.vars.onLockAxis.call(e,c)),dt&&ce===ge))){he(c);return}!e.allowEventDefault&&(!ce||ge&&ce!==ge)&&c.cancelable!==!1?(ue(c),oe=!0):oe&&(oe=!1),e.autoScroll&&(A=!0),at(r.pageX,r.pageY,Jt)},at=function(r,c,a){var p=1-e.dragResistance,h=1-e.edgeResistance,v=e.pointerX,L=e.pointerY,x=Q,X=e.x,D=e.y,Y=e.endX,$=e.endY,ie=e.endRotation,Le=Z,de,Ie,te,V,Xt,ve;e.pointerX=r,e.pointerY=c,re&&(r-=Je(M),c-=Ze(M)),l?(V=Math.atan2(nt.y-c,r-nt.x)*cn,Xt=e.y-V,Xt>180?(Q-=360,e.y=V):Xt<-180&&(Q+=360,e.y=V),e.x!==J||Math.max(Math.abs(be-r),Math.abs(Ee-c))>k?(e.y=V,te=J+(Q-V)*p):te=J):(I&&(ve=r*I.a+c*I.c+I.e,c=r*I.b+c*I.d+I.f,r=ve),Ie=c-Ee,de=r-be,Ie<k&&Ie>-k&&(Ie=0),de<k&&de>-k&&(de=0),(e.lockAxis||e.lockedAxis)&&(de||Ie)&&(ve=e.lockedAxis,ve||(e.lockedAxis=ve=g&&Math.abs(de)>Math.abs(Ie)?"y":w?"x":null,ve&&Ye(e.vars.onLockAxis)&&e.vars.onLockAxis.call(e,e.pointerEvent)),ve==="y"?Ie=0:ve==="x"&&(de=0)),te=Ne(J+de*p),V=Ne(Q+Ie*p)),(_e||Me||Fe)&&(e.x!==te||e.y!==V&&!l)&&(Fe&&(Qe.x=te,Qe.y=V,ve=Fe(Qe),te=Ne(ve.x),V=Ne(ve.y)),_e&&(te=Ne(_e(te))),Me&&(V=Ne(Me(V)))),Ae&&(te>z?te=z+Math.round((te-z)*h):te<H&&(te=H+Math.round((te-H)*h)),l||(V>K?V=Math.round(K+(V-K)*h):V<W&&(V=Math.round(W+(V-W)*h)))),(e.x!==te||e.y!==V&&!l)&&(l?(e.endRotation=e.x=e.endX=te,Z=!0):(w&&(e.y=e.endY=V,Z=!0),g&&(e.x=e.endX=te,Z=!0)),!a||j(e,"move","onMove")!==!1?!e.isDragging&&e.isPressed&&(e.isDragging=xt=!0,j(e,"dragstart","onDragStart")):(e.pointerX=v,e.pointerY=L,Q=x,e.x=X,e.y=D,e.endX=Y,e.endY=$,e.endRotation=ie,Z=Le))},he=function y(r,c){if(!se||!e.isPressed||r&&le!=null&&!c&&(r.pointerId&&r.pointerId!==le&&r.target!==i||r.changedTouches&&!li(r.changedTouches,le))){oe&&r&&se&&ue(r);return}e.isPressed=!1;var a=r,p=e.isDragging,h=e.vars.allowContextMenu&&r&&(r.ctrlKey||r.which>2),v=C.delayedCall(.001,Nn),L,x,X,D,Y;if(ee?(U(ee,"touchend",y),U(ee,"touchmove",Oe),U(ee,"touchcancel",y),U(M,"touchstart",gn)):U(M,"mousemove",Oe),U(B,"touchforcechange",ue),(!St||!ee)&&(U(M,"mouseup",y),r&&r.target&&U(r.target,"mouseup",y)),Z=!1,p&&(O=dn=Xe(),e.isDragging=!1),pn(Se),it&&!h){r&&(U(r.target,"change",y),e.pointerEvent=a),bt(b,!1),j(e,"release","onRelease"),j(e,"click","onClick"),it=!1;return}for(x=b.length;--x>-1;)Ht(b[x],"cursor",n.cursor||(n.cursor!==!1?ut:null));if(Rt--,r){if(L=r.changedTouches,L&&(r=L[0],r!==mt&&r.identifier!==le)){for(x=L.length;--x>-1&&(r=L[x]).identifier!==le&&r.target!==i;);if(x<0&&!c)return}e.pointerEvent=a,e.pointerX=r.pageX,e.pointerY=r.pageY}return h&&a?(ue(a),oe=!0,j(e,"release","onRelease")):a&&!p?(oe=!1,en&&(n.snap||n.bounds)&&Nt(n.inertia||n.throwProps),j(e,"release","onRelease"),(!dt||a.type!=="touchmove")&&a.type.indexOf("cancel")===-1&&(j(e,"click","onClick"),Xe()-N<300&&j(e,"doubleclick","onDoubleClick"),D=a.target||i,N=Xe(),Y=function(){N!==_t&&e.enabled()&&!e.isPressed&&!a.defaultPrevented&&(D.click?D.click():M.createEvent&&(X=M.createEvent("MouseEvents"),X.initMouseEvent("click",!0,!0,B,1,e.pointerEvent.screenX,e.pointerEvent.screenY,e.pointerX,e.pointerY,!1,!1,!1,!1,0,null),D.dispatchEvent(X)))},!dt&&!a.defaultPrevented&&C.delayedCall(.05,Y))):(Nt(n.inertia||n.throwProps),!e.allowEventDefault&&a&&(n.dragClickables!==!1||!F.call(e,a.target))&&p&&(!ce||ge&&ce===ge)&&a.cancelable!==!1?(oe=!0,ue(a)):oe=!1,j(e,"release","onRelease")),rt()&&v.duration(e.tween.duration()),p&&j(e,"dragend","onDragEnd"),!0},yt=function(r){if(r&&e.isDragging&&!P){var c=r.target||i.parentNode,a=c.scrollLeft-c._gsScrollX,p=c.scrollTop-c._gsScrollY;(a||p)&&(I?(be-=a*I.a+p*I.c,Ee-=p*I.d+a*I.b):(be-=a,Ee-=p),c._gsScrollX+=a,c._gsScrollY+=p,at(e.pointerX,e.pointerY))}},an=function(r){var c=Xe(),a=c-N<100,p=c-O<50,h=a&&_t===N,v=e.pointerEvent&&e.pointerEvent.defaultPrevented,L=a&&tn===N,x=r.isTrusted||r.isTrusted==null&&a&&h;if((h||p&&e.vars.suppressClickOnDrag!==!1)&&r.stopImmediatePropagation&&r.stopImmediatePropagation(),a&&!(e.pointerEvent&&e.pointerEvent.defaultPrevented)&&(!h||x&&!L)){x&&h&&(tn=N),_t=N;return}(e.isPressed||p||a)&&(!x||!r.detail||!a||v)&&ue(r),!a&&!p&&!xt&&(r&&r.target&&(e.pointerEvent=r),j(e,"click","onClick"))},sn=function(r){return I?{x:r.x*I.a+r.y*I.c+I.e,y:r.x*I.b+r.y*I.d+I.f}:{x:r.x,y:r.y}};return Ct=t.get(i),Ct&&Ct.kill(),o.startDrag=function(y,r){var c,a,p,h;ot(y||e.pointerEvent,!0),r&&!e.hitTest(y||e.pointerEvent)&&(c=Ke(y||e.pointerEvent),a=Ke(i),p=sn({x:c.left+c.width/2,y:c.top+c.height/2}),h=sn({x:a.left+a.width/2,y:a.top+a.height/2}),be-=p.x-h.x,Ee-=p.y-h.y),e.isDragging||(e.isDragging=xt=!0,j(e,"dragstart","onDragStart"))},o.drag=Oe,o.endDrag=function(y){return he(y||e.pointerEvent,!0)},o.timeSinceDrag=function(){return e.isDragging?0:(Xe()-O)/1e3},o.timeSinceClick=function(){return(Xe()-N)/1e3},o.hitTest=function(y,r){return t.hitTest(e.target,y,r)},o.getDirection=function(y,r){var c=y==="velocity"&&xe?y:pt(y)&&!l?"element":"start",a,p,h,v,L,x;return c==="element"&&(L=Ke(e.target),x=Ke(y)),a=c==="start"?e.x-J:c==="velocity"?xe.getVelocity(i,m):L.left+L.width/2-(x.left+x.width/2),l?a<0?"counter-clockwise":"clockwise":(r=r||2,p=c==="start"?e.y-Q:c==="velocity"?xe.getVelocity(i,u):L.top+L.height/2-(x.top+x.height/2),h=Math.abs(a/p),v=h<1/r?"":a<0?"left":"right",h<r&&(v!==""&&(v+="-"),v+=p<0?"up":"down"),v)},o.applyBounds=function(y,r){var c,a,p,h,v,L;if(y&&n.bounds!==y)return n.bounds=y,e.update(!0,r);if(He(!0),It(),Ae&&!rt()){if(c=e.x,a=e.y,c>z?c=z:c<H&&(c=H),a>K?a=K:a<W&&(a=W),(e.x!==c||e.y!==a)&&(p=!0,e.x=e.endX=c,l?e.endRotation=c:e.y=e.endY=a,Z=!0,Se(!0),e.autoScroll&&!e.isDragging))for(Ft(i.parentNode),h=i,Re.scrollTop=B.pageYOffset!=null?B.pageYOffset:M.documentElement.scrollTop!=null?M.documentElement.scrollTop:M.body.scrollTop,Re.scrollLeft=B.pageXOffset!=null?B.pageXOffset:M.documentElement.scrollLeft!=null?M.documentElement.scrollLeft:M.body.scrollLeft;h&&!L;)L=et(h.parentNode),v=L?Re:h.parentNode,w&&v.scrollTop>v._gsMaxScrollY&&(v.scrollTop=v._gsMaxScrollY),g&&v.scrollLeft>v._gsMaxScrollX&&(v.scrollLeft=v._gsMaxScrollX),h=v;e.isThrowing&&(p||e.endX>z||e.endX<H||e.endY>K||e.endY<W)&&Nt(n.inertia||n.throwProps,p)}return e},o.update=function(y,r,c){if(r&&e.isPressed){var a=Ge(i),p=nn.apply({x:e.x-J,y:e.y-Q}),h=Ge(i.parentNode,!0);h.apply({x:a.e-p.x,y:a.f-p.y},p),e.x-=p.x-h.e,e.y-=p.y-h.f,Se(!0),kt()}var v=e.x,L=e.y;return on(!r),y?e.applyBounds():(Z&&c&&Se(!0),He(!0)),r&&(at(e.pointerX,e.pointerY),Z&&Se(!0)),e.isPressed&&!r&&(g&&Math.abs(v-e.x)>.01||w&&Math.abs(L-e.y)>.01&&!l)&&kt(),e.autoScroll&&(Ft(i.parentNode,e.isDragging),A=e.isDragging,Se(!0),vn(i,yt),hn(i,yt)),e},o.enable=function(y){var r={lazy:!0},c,a,p;if(n.cursor!==!1&&(r.cursor=n.cursor||ut),C.utils.checkPrefix("touchCallout")&&(r.touchCallout="none"),y!=="soft"){for(un(b,g===w?"none":n.allowNativeTouchScrolling&&i.scrollHeight===i.clientHeight==(i.scrollWidth===i.clientHeight)||n.allowEventDefault?"manipulation":g?"pan-y":"pan-x"),a=b.length;--a>-1;)p=b[a],St||q(p,"mousedown",ot),q(p,"touchstart",ot),q(p,"click",an,!0),C.set(p,r),p.getBBox&&p.ownerSVGElement&&g!==w&&C.set(p.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":g?"pan-y":"pan-x"}),n.allowContextMenu||q(p,"contextmenu",rn);bt(b,!1)}return hn(i,yt),se=!0,xe&&y!=="soft"&&xe.track(P||i,d?"x,y":l?"rotation":"top,left"),i._gsDragID=c=i._gsDragID||"d"+ii++,qe[c]=e,P&&(P.enable(),P.element._gsDragID=c),(n.bounds||l)&&kt(),n.bounds&&e.applyBounds(),e},o.disable=function(y){for(var r=e.isDragging,c=b.length,a;--c>-1;)Ht(b[c],"cursor",null);if(y!=="soft"){for(un(b,null),c=b.length;--c>-1;)a=b[c],Ht(a,"touchCallout",null),U(a,"mousedown",ot),U(a,"touchstart",ot),U(a,"click",an,!0),U(a,"contextmenu",rn);bt(b,!0),ee&&(U(ee,"touchcancel",he),U(ee,"touchend",he),U(ee,"touchmove",Oe)),U(M,"mouseup",he),U(M,"mousemove",Oe)}return vn(i,yt),se=!1,xe&&y!=="soft"&&(xe.untrack(P||i,d?"x,y":l?"rotation":"top,left"),e.tween&&e.tween.kill()),P&&P.disable(),pn(Se),e.isDragging=e.isPressed=it=!1,r&&j(e,"dragend","onDragEnd"),e},o.enabled=function(y,r){return arguments.length?y?e.enable(r):e.disable(r):se},o.kill=function(){return e.isThrowing=!1,e.tween&&e.tween.kill(),e.disable(),C.set(b,{clearProps:"userSelect"}),delete qe[i._gsDragID],e},o.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(P=o.scrollProxy=new pi(i,oi({onKill:function(){e.isPressed&&he(null)}},n)),i.style.overflowY=w&&!Gt?"auto":"hidden",i.style.overflowX=g&&!Gt?"auto":"hidden",i=P.content),l?_.rotation=1:(g&&(_[m]=1),w&&(_[u]=1)),T.force3D="force3D"in n?n.force3D:!0,Pn(ln(o)),o.enable(),o}return t.register=function(n){C=n,zt()},t.create=function(n,o){return jt||zt(!0),Be(n).map(function(s){return new t(s,o)})},t.get=function(n){return qe[(Be(n)[0]||{})._gsDragID]},t.timeSinceDrag=function(){return(Xe()-dn)/1e3},t.hitTest=function(n,o,s){if(n===o)return!1;var d=Ke(n),l=Ke(o),m=d.top,u=d.left,g=d.right,w=d.bottom,k=d.width,e=d.height,b=l.left>g||l.right<u||l.top>w||l.bottom<m,_,O,A;return b||!s?!b:(A=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(u,l.left),top:Math.max(m,l.top)},_.width=Math.min(g,l.right)-_.left,_.height=Math.min(w,l.bottom)-_.top,_.width<0||_.height<0?!1:A?(s*=.01,O=_.width*_.height,O>=k*e*s||O>=l.width*l.height*s):_.width>s&&_.height>s)},t}(gi);si(tt.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});tt.zIndex=1e3;tt.version="3.13.0";Rn()&&C.registerPlugin(tt);me.registerPlugin(tt);const hi=({imageSrc:f,rotate:t=30,peelBackHoverPct:i=30,peelBackActivePct:n=40,peelEasing:o="power3.out",peelHoverEasing:s="power2.out",width:d=200,shadowIntensity:l=.6,lightingIntensity:m=.1,initialPosition:u="center",peelDirection:g=0,className:w=""})=>{const k=ne.useRef(null),e=ne.useRef(null),b=ne.useRef(null),_=ne.useRef(null),O=ne.useRef(null),A=10;ne.useEffect(()=>{const R=e.current;if(!R)return;let G=0,S=0;u!=="center"&&(typeof u=="object"&&u.x!==void 0&&u.y!==void 0&&(G=u.x,S=u.y),me.set(R,{x:G,y:S}))},[u]),ne.useEffect(()=>{const R=e.current,G=R.parentNode;O.current=tt.create(R,{type:"x,y",bounds:G,inertia:!0,onDrag(){const F=me.utils.clamp(-24,24,this.deltaX*.4);me.to(R,{rotation:F,duration:.15,ease:"power1.out"})},onDragEnd(){me.to(R,{rotation:0,duration:.8,ease:"power2.out"})}})[0];const S=()=>{if(O.current){O.current.update();const F=me.getProperty(R,"x"),N=me.getProperty(R,"y"),T=G.getBoundingClientRect(),re=R.getBoundingClientRect(),pe=T.width-re.width,M=T.height-re.height,se=Math.max(0,Math.min(F,pe)),P=Math.max(0,Math.min(N,M));(se!==F||P!==N)&&me.to(R,{x:se,y:P,duration:.3,ease:"power2.out"})}};return window.addEventListener("resize",S),window.addEventListener("orientationchange",S),()=>{window.removeEventListener("resize",S),window.removeEventListener("orientationchange",S),O.current&&O.current.kill()}},[]),ne.useEffect(()=>{const R=S=>{var pe;const F=(pe=k.current)==null?void 0:pe.getBoundingClientRect();if(!F)return;const N=S.clientX-F.left,T=S.clientY-F.top;me.set(b.current,{attr:{x:N,y:T}}),Math.abs(g%360)!==180?me.set(_.current,{attr:{x:N,y:F.height-T}}):me.set(_.current,{attr:{x:-1e3,y:-1e3}})},G=k.current;if(G)return G.addEventListener("mousemove",R),()=>G.removeEventListener("mousemove",R)},[g]),ne.useEffect(()=>{const R=k.current;if(!R)return;const G=()=>{R.classList.add("touch-active")},S=()=>{R.classList.remove("touch-active")};return R.addEventListener("touchstart",G),R.addEventListener("touchend",S),R.addEventListener("touchcancel",S),()=>{R.removeEventListener("touchstart",G),R.removeEventListener("touchend",S),R.removeEventListener("touchcancel",S)}},[]);const Pe=ne.useMemo(()=>({"--sticker-rotate":`${t}deg`,"--sticker-p":`${A}px`,"--sticker-peelback-hover":`${i}%`,"--sticker-peelback-active":`${n}%`,"--sticker-peel-easing":o,"--sticker-peel-hover-easing":s,"--sticker-width":`${d}px`,"--sticker-shadow-opacity":l,"--sticker-lighting-constant":m,"--peel-direction":`${g}deg`}),[t,i,n,o,s,d,l,m,g]);return E.jsxs("div",{className:`draggable ${w}`,ref:e,style:Pe,children:[E.jsx("svg",{width:"0",height:"0",children:E.jsxs("defs",{children:[E.jsxs("filter",{id:"pointLight",children:[E.jsx("feGaussianBlur",{stdDeviation:"1",result:"blur"}),E.jsx("feSpecularLighting",{result:"spec",in:"blur",specularExponent:"100",specularConstant:m,lightingColor:"white",children:E.jsx("fePointLight",{ref:b,x:"100",y:"100",z:"300"})}),E.jsx("feComposite",{in:"spec",in2:"SourceGraphic",result:"lit"}),E.jsx("feComposite",{in:"lit",in2:"SourceAlpha",operator:"in"})]}),E.jsxs("filter",{id:"pointLightFlipped",children:[E.jsx("feGaussianBlur",{stdDeviation:"10",result:"blur"}),E.jsx("feSpecularLighting",{result:"spec",in:"blur",specularExponent:"100",specularConstant:m*7,lightingColor:"white",children:E.jsx("fePointLight",{ref:_,x:"100",y:"100",z:"300"})}),E.jsx("feComposite",{in:"spec",in2:"SourceGraphic",result:"lit"}),E.jsx("feComposite",{in:"lit",in2:"SourceAlpha",operator:"in"})]}),E.jsx("filter",{id:"dropShadow",children:E.jsx("feDropShadow",{dx:"2",dy:"4",stdDeviation:3*l,floodColor:"black",floodOpacity:l})}),E.jsxs("filter",{id:"expandAndFill",children:[E.jsx("feOffset",{dx:"0",dy:"0",in:"SourceAlpha",result:"shape"}),E.jsx("feFlood",{floodColor:"rgb(179,179,179)",result:"flood"}),E.jsx("feComposite",{operator:"in",in:"flood",in2:"shape"})]})]})}),E.jsxs("div",{className:"sticker-container",ref:k,children:[E.jsx("div",{className:"sticker-main",children:E.jsx("div",{className:"sticker-lighting",children:E.jsx("img",{src:f,alt:"",className:"sticker-image",draggable:"false",onContextMenu:R=>R.preventDefault()})})}),E.jsx("div",{className:"flap",children:E.jsx("div",{className:"flap-lighting",children:E.jsx("img",{src:f,alt:"",className:"flap-image",draggable:"false",onContextMenu:R=>R.preventDefault()})})})]})]})},vi=`import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';
import './StickerPeel.css';

gsap.registerPlugin(Draggable);

const StickerPeel = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const dragTargetRef = useRef(null);
  const pointLightRef = useRef(null);
  const pointLightFlippedRef = useRef(null);
  const draggableInstanceRef = useRef(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0, startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    const boundsEl = target.parentNode;

    draggableInstanceRef.current = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    })[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();
        
        const currentX = gsap.getProperty(target, "x");
        const currentY = gsap.getProperty(target, "y");
        
        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;
        
        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));
        
        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, { 
            x: newX, 
            y: newY, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(pointLightRef.current, { attr: { x, y } });

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (normalizedAngle !== 180) {
        gsap.set(pointLightFlippedRef.current, { attr: { x, y: rect.height - y } });
      } else {
        gsap.set(pointLightFlippedRef.current, { attr: { x: -1000, y: -1000 } });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', updateLight);
      return () => container.removeEventListener('mousemove', updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection
    ]
  );

  return (
    <div className={\`draggable \${className}\`} ref={dragTargetRef} style={cssVars}>
      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container"
        ref={containerRef}
      >
        <div className="sticker-main">
          <div className="sticker-lighting">
            <img
              src={imageSrc}
              alt=""
              className="sticker-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flap">
          <div className="flap-lighting">
            <img
              src={imageSrc}
              alt=""
              className="flap-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,mi=`:root {
  --sticker-rotate: 30deg;
  --sticker-p: 10px;
  --sticker-peelback-hover: 30%;
  --sticker-peelback-active: 40%;
  --sticker-peel-easing: power3.out;
  --sticker-peel-hover-easing: power2.out;
  --sticker-start: calc(-1 * var(--sticker-p));
  --sticker-end: calc(100% + var(--sticker-p));
  --sticker-shadow-opacity: 0.6;
  --sticker-lighting-constant: 0.1;
  --peel-direction: 0deg;
}

.sticker-container {
  position: relative;
  transform: rotate(var(--peel-direction));
  transform-origin: center;
}

.sticker-container * {
  -webkit-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
  -webkit-tap-highlight-color: transparent;
}

.sticker-main {
  clip-path: polygon(var(--sticker-start) var(--sticker-start),
      var(--sticker-end) var(--sticker-start),
      var(--sticker-end) var(--sticker-end),
      var(--sticker-start) var(--sticker-end));
  transition: clip-path 0.6s ease-out;
  filter: url(#dropShadow);
}

.sticker-main > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-lighting {
  filter: url(#pointLight);
}

.sticker-container:hover .sticker-main,
.sticker-container.touch-active .sticker-main {
  clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover),
      var(--sticker-end) var(--sticker-peelback-hover),
      var(--sticker-end) var(--sticker-end),
      var(--sticker-start) var(--sticker-end));
}

.sticker-container:active .sticker-main {
  clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active),
      var(--sticker-end) var(--sticker-peelback-active),
      var(--sticker-end) var(--sticker-end),
      var(--sticker-start) var(--sticker-end));
}

.sticker-image {
  transform: rotate(var(--sticker-rotate));
}

.flap {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: calc(-100% - var(--sticker-p) - var(--sticker-p));
  clip-path: polygon(var(--sticker-start) var(--sticker-start),
      var(--sticker-end) var(--sticker-start),
      var(--sticker-end) var(--sticker-start),
      var(--sticker-start) var(--sticker-start));
  transform: scaleY(-1);
  transition: all 0.6s ease-out;
}

.flap > * {
  transform: rotate(calc(-1 * var(--peel-direction)));
}

.sticker-container:hover .flap,
.sticker-container.touch-active .flap {
  clip-path: polygon(var(--sticker-start) var(--sticker-start),
      var(--sticker-end) var(--sticker-start),
      var(--sticker-end) var(--sticker-peelback-hover),
      var(--sticker-start) var(--sticker-peelback-hover));
  top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px);
}

.sticker-container:active .flap {
  clip-path: polygon(var(--sticker-start) var(--sticker-start),
      var(--sticker-end) var(--sticker-start),
      var(--sticker-end) var(--sticker-peelback-active),
      var(--sticker-start) var(--sticker-peelback-active));
  top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px);
}

.flap-lighting {
  filter: url(#pointLightFlipped);
}

.flap-image {
  transform: rotate(var(--sticker-rotate));
  filter: url(#expandAndFill);
}

.draggable {
  position: absolute;
  cursor: grab;
  -webkit-transform: translateZ(0);
  transform: translateZ(0);
}

.draggable:active {
  cursor: grabbing;
}

/* Mobile-specific optimizations */
@media (hover: none) and (pointer: coarse) {
  .draggable {
    cursor: default;
  }
  
  .sticker-container {
    touch-action: none;
  }
}

.sticker-image,
.flap-image {
  width: var(--sticker-width, 200px);
}

.sticker-main,
.flap {
  will-change: clip-path, transform;
}

.sticker-ripple {
  position: absolute;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  pointer-events: none;
  z-index: 10;
}`,xi=`import { useRef, useEffect, useMemo } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/Draggable';

gsap.registerPlugin(Draggable);

const StickerPeel = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = 'power3.out',
  peelHoverEasing = 'power2.out',
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = 'center',
  peelDirection = 0,
  className = ''
}) => {
  const containerRef = useRef(null);
  const dragTargetRef = useRef(null);
  const pointLightRef = useRef(null);
  const pointLightFlippedRef = useRef(null);
  const draggableInstanceRef = useRef(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0, startY = 0;

    if (initialPosition === 'center') {
      return;
    }

    if (typeof initialPosition === 'object' && initialPosition.x !== undefined && initialPosition.y !== undefined) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    const boundsEl = target.parentNode;

    draggableInstanceRef.current = Draggable.create(target, {
      type: 'x,y',
      bounds: boundsEl,
      inertia: true,
      onDrag() {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: 'power1.out' });
      },
      onDragEnd() {
        const rotationEase = 'power2.out';
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      }
    })[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();
        
        const currentX = gsap.getProperty(target, "x");
        const currentY = gsap.getProperty(target, "y");
        
        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;
        
        // Clamp position within new bounds
        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));
        
        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, { 
            x: newX, 
            y: newY, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.set(pointLightRef.current, { attr: { x, y } });

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (normalizedAngle !== 180) {
        gsap.set(pointLightFlippedRef.current, { attr: { x, y: rect.height - y } });
      } else {
        gsap.set(pointLightFlippedRef.current, { attr: { x: -1000, y: -1000 } });
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', updateLight);
      return () => container.removeEventListener('mousemove', updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars = useMemo(
    () => ({
      '--sticker-rotate': \`\${rotate}deg\`,
      '--sticker-p': \`\${defaultPadding}px\`,
      '--sticker-peelback-hover': \`\${peelBackHoverPct}%\`,
      '--sticker-peelback-active': \`\${peelBackActivePct}%\`,
      '--sticker-peel-easing': peelEasing,
      '--sticker-peel-hover-easing': peelHoverEasing,
      '--sticker-width': \`\${width}px\`,
      '--sticker-shadow-opacity': shadowIntensity,
      '--sticker-lighting-constant': lightingIntensity,
      '--peel-direction': \`\${peelDirection}deg\`,
      '--sticker-start': \`calc(-1 * \${defaultPadding}px)\`,
      '--sticker-end': \`calc(100% + \${defaultPadding}px)\`
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      defaultPadding
    ]
  );

  const stickerMainStyle = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end))\`,
    transition: 'clip-path 0.6s ease-out',
    filter: 'url(#dropShadow)',
    willChange: 'clip-path, transform'
  };

  const flapStyle = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-start) var(--sticker-start))\`,
    top: \`calc(-100% - var(--sticker-p) - var(--sticker-p))\`,
    transform: 'scaleY(-1)',
    transition: 'all 0.6s ease-out',
    willChange: 'clip-path, transform'
  };

  const imageStyle = {
    transform: \`rotate(calc(\${rotate}deg - \${peelDirection}deg))\`,
    width: \`\${width}px\`
  };

  const shadowImageStyle = {
    ...imageStyle,
    filter: 'url(#expandAndFill)'
  };

  return (
    <div
      className={\`absolute cursor-grab active:cursor-grabbing transform-gpu \${className}\`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <style dangerouslySetInnerHTML={{
        __html: \`
          .sticker-container:hover .sticker-main,
          .sticker-container.touch-active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:hover .sticker-flap,
          .sticker-container.touch-active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-start) var(--sticker-peelback-hover)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px) !important;
          }
          .sticker-container:active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-start) var(--sticker-peelback-active)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px) !important;
          }
        \`
      }} />

      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight ref={pointLightFlippedRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite in="spec" in2="SourceGraphic" result="lit" />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container relative select-none touch-none sm:touch-auto"
        ref={containerRef}
        style={{
          WebkitUserSelect: 'none',
          userSelect: 'none',
          WebkitTouchCallout: 'none',
          WebkitTapHighlightColor: 'transparent',
          transform: \`rotate(\${peelDirection}deg)\`,
          transformOrigin: 'center'
        }}
      >
        <div className="sticker-main" style={stickerMainStyle}>
          <div style={{ filter: 'url(#pointLight)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={imageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="absolute top-4 left-2 w-full h-full opacity-40"
          style={{ filter: 'brightness(0) blur(8px)' }}
        >
          <div className="sticker-flap" style={flapStyle}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="sticker-flap absolute w-full h-full left-0" style={flapStyle}>
          <div style={{ filter: 'url(#pointLightFlipped)' }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,ki=`import { useRef, useEffect, useMemo, CSSProperties } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import "./StickerPeel.css";

gsap.registerPlugin(Draggable);

interface StickerPeelProps {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: "center" | "random" | { x: number; y: number };
  peelDirection?: number;
  className?: string;
}

interface CSSVars extends CSSProperties {
  "--sticker-rotate"?: string;
  "--sticker-p"?: string;
  "--sticker-peelback-hover"?: string;
  "--sticker-peelback-active"?: string;
  "--sticker-peel-easing"?: string;
  "--sticker-peel-hover-easing"?: string;
  "--sticker-width"?: string;
  "--sticker-shadow-opacity"?: number;
  "--sticker-lighting-constant"?: number;
  "--peel-direction"?: string;
}

const StickerPeel: React.FC<StickerPeelProps> = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = "power3.out",
  peelHoverEasing = "power2.out",
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = "center",
  peelDirection = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const defaultPadding = 10;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === "center") {
      return;
    }

    if (
      typeof initialPosition === "object" &&
      initialPosition.x !== undefined &&
      initialPosition.y !== undefined
    ) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    const boundsEl = target.parentNode as HTMLElement;

    const draggable = Draggable.create(target, {
      type: "x,y",
      bounds: boundsEl,
      inertia: true,
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
      },
      onDragEnd() {
        const rotationEase = "power2.out";
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      },
    });

    draggableInstanceRef.current = draggable[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();
        
        const currentX = gsap.getProperty(target, "x") as number;
        const currentY = gsap.getProperty(target, "y") as number;
        
        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;
        
        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));
        
        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, { 
            x: newX, 
            y: newY, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      if (pointLightRef.current) {
        gsap.set(pointLightRef.current, { attr: { x, y } });
      }

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x, y: rect.height - y },
          });
        } else {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x: -1000, y: -1000 },
          });
        }
      }
    };

    const container = containerRef.current;
    const eventType = "mousemove";

    if (container) {
      container.addEventListener(eventType, updateLight);
      return () => container.removeEventListener(eventType, updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars: CSSVars = useMemo(
    () => ({
      "--sticker-rotate": \`\${rotate}deg\`,
      "--sticker-p": \`\${defaultPadding}px\`,
      "--sticker-peelback-hover": \`\${peelBackHoverPct}%\`,
      "--sticker-peelback-active": \`\${peelBackActivePct}%\`,
      "--sticker-peel-easing": peelEasing,
      "--sticker-peel-hover-easing": peelHoverEasing,
      "--sticker-width": \`\${width}px\`,
      "--sticker-shadow-opacity": shadowIntensity,
      "--sticker-lighting-constant": lightingIntensity,
      "--peel-direction": \`\${peelDirection}deg\`,
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
    ]
  );

  return (
    <div
      className={\`draggable \${className}\`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite
              in="spec"
              in2="SourceGraphic"
              result="lit"
            />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight
                ref={pointLightFlippedRef}
                x="100"
                y="100"
                z="300"
              />
            </feSpecularLighting>
            <feComposite
              in="spec"
              in2="SourceGraphic"
              result="lit"
            />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div className="sticker-container" ref={containerRef}>
        <div className="sticker-main">
          <div className="sticker-lighting">
            <img
              src={imageSrc}
              alt=""
              className="sticker-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div className="flap">
          <div className="flap-lighting">
            <img
              src={imageSrc}
              alt=""
              className="flap-image"
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,yi=`import { useRef, useEffect, useMemo, CSSProperties } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

interface StickerPeelProps {
  imageSrc: string;
  rotate?: number;
  peelBackHoverPct?: number;
  peelBackActivePct?: number;
  peelEasing?: string;
  peelHoverEasing?: string;
  width?: number;
  shadowIntensity?: number;
  lightingIntensity?: number;
  initialPosition?: "center" | "random" | { x: number; y: number };
  peelDirection?: number;
  className?: string;
}

interface CSSVars extends CSSProperties {
  "--sticker-rotate"?: string;
  "--sticker-p"?: string;
  "--sticker-peelback-hover"?: string;
  "--sticker-peelback-active"?: string;
  "--sticker-peel-easing"?: string;
  "--sticker-peel-hover-easing"?: string;
  "--sticker-width"?: string;
  "--sticker-shadow-opacity"?: number;
  "--sticker-lighting-constant"?: number;
  "--peel-direction"?: string;
  "--sticker-start"?: string;
  "--sticker-end"?: string;
}

const StickerPeel: React.FC<StickerPeelProps> = ({
  imageSrc,
  rotate = 30,
  peelBackHoverPct = 30,
  peelBackActivePct = 40,
  peelEasing = "power3.out",
  peelHoverEasing = "power2.out",
  width = 200,
  shadowIntensity = 0.6,
  lightingIntensity = 0.1,
  initialPosition = "center",
  peelDirection = 0,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const dragTargetRef = useRef<HTMLDivElement>(null);
  const pointLightRef = useRef<SVGFEPointLightElement>(null);
  const pointLightFlippedRef = useRef<SVGFEPointLightElement>(null);
  const draggableInstanceRef = useRef<Draggable | null>(null);

  const defaultPadding = 12;

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    let startX = 0,
      startY = 0;

    if (initialPosition === "center") {
      return;
    }

    if (
      typeof initialPosition === "object" &&
      initialPosition.x !== undefined &&
      initialPosition.y !== undefined
    ) {
      startX = initialPosition.x;
      startY = initialPosition.y;
    }

    gsap.set(target, { x: startX, y: startY });
  }, [initialPosition]);

  useEffect(() => {
    const target = dragTargetRef.current;
    if (!target) return;

    const boundsEl = target.parentNode as HTMLElement;

    const draggable = Draggable.create(target, {
      type: "x,y",
      bounds: boundsEl,
      inertia: true,
      onDrag(this: Draggable) {
        const rot = gsap.utils.clamp(-24, 24, this.deltaX * 0.4);
        gsap.to(target, { rotation: rot, duration: 0.15, ease: "power1.out" });
      },
      onDragEnd() {
        const rotationEase = "power2.out";
        const duration = 0.8;
        gsap.to(target, { rotation: 0, duration, ease: rotationEase });
      },
    });

    draggableInstanceRef.current = draggable[0];

    const handleResize = () => {
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.update();
        
        const currentX = gsap.getProperty(target, "x") as number;
        const currentY = gsap.getProperty(target, "y") as number;
        
        const boundsRect = boundsEl.getBoundingClientRect();
        const targetRect = target.getBoundingClientRect();
        
        const maxX = boundsRect.width - targetRect.width;
        const maxY = boundsRect.height - targetRect.height;
        
        const newX = Math.max(0, Math.min(currentX, maxX));
        const newY = Math.max(0, Math.min(currentY, maxY));
        
        if (newX !== currentX || newY !== currentY) {
          gsap.to(target, { 
            x: newX, 
            y: newY, 
            duration: 0.3, 
            ease: "power2.out" 
          });
        }
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
      if (draggableInstanceRef.current) {
        draggableInstanceRef.current.kill();
      }
    };
  }, []);

  useEffect(() => {
    const updateLight = (e: Event) => {
      const mouseEvent = e as MouseEvent;
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = mouseEvent.clientX - rect.left;
      const y = mouseEvent.clientY - rect.top;

      if (pointLightRef.current) {
        gsap.set(pointLightRef.current, { attr: { x, y } });
      }

      const normalizedAngle = Math.abs(peelDirection % 360);
      if (pointLightFlippedRef.current) {
        if (normalizedAngle !== 180) {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x, y: rect.height - y },
          });
        } else {
          gsap.set(pointLightFlippedRef.current, {
            attr: { x: -1000, y: -1000 },
          });
        }
      }
    };

    const container = containerRef.current;
    const eventType = "mousemove";

    if (container) {
      container.addEventListener(eventType, updateLight);
      return () => container.removeEventListener(eventType, updateLight);
    }
  }, [peelDirection]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = () => {
      container.classList.add('touch-active');
    };

    const handleTouchEnd = () => {
      container.classList.remove('touch-active');
    };

    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('touchcancel', handleTouchEnd);

    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('touchcancel', handleTouchEnd);
    };
  }, []);

  const cssVars: CSSVars = useMemo(
    () => ({
      "--sticker-rotate": \`\${rotate}deg\`,
      "--sticker-p": \`\${defaultPadding}px\`,
      "--sticker-peelback-hover": \`\${peelBackHoverPct}%\`,
      "--sticker-peelback-active": \`\${peelBackActivePct}%\`,
      "--sticker-peel-easing": peelEasing,
      "--sticker-peel-hover-easing": peelHoverEasing,
      "--sticker-width": \`\${width}px\`,
      "--sticker-shadow-opacity": shadowIntensity,
      "--sticker-lighting-constant": lightingIntensity,
      "--peel-direction": \`\${peelDirection}deg\`,
      "--sticker-start": \`calc(-1 * \${defaultPadding}px)\`,
      "--sticker-end": \`calc(100% + \${defaultPadding}px)\`,
    }),
    [
      rotate,
      peelBackHoverPct,
      peelBackActivePct,
      peelEasing,
      peelHoverEasing,
      width,
      shadowIntensity,
      lightingIntensity,
      peelDirection,
      defaultPadding,
    ]
  );

  const stickerMainStyle: CSSProperties = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end))\`,
    transition: "clip-path 0.6s ease-out",
    filter: "url(#dropShadow)",
    willChange: "clip-path, transform",
  };

  const flapStyle: CSSProperties = {
    clipPath: \`polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-start) var(--sticker-start))\`,
    top: \`calc(-100% - var(--sticker-p) - var(--sticker-p))\`,
    transform: "scaleY(-1)",
    transition: "all 0.6s ease-out",
    willChange: "clip-path, transform",
  };

  const imageStyle: CSSProperties = {
    transform: \`rotate(calc(\${rotate}deg - \${peelDirection}deg))\`,
    width: \`\${width}px\`,
  };

  const shadowImageStyle: CSSProperties = {
    ...imageStyle,
    filter: "url(#expandAndFill)",
  };

  return (
    <div
      className={\`absolute cursor-grab active:cursor-grabbing transform-gpu \${className}\`}
      ref={dragTargetRef}
      style={cssVars}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: \`
          .sticker-container:hover .sticker-main,
          .sticker-container.touch-active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:hover .sticker-flap,
          .sticker-container.touch-active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-hover), var(--sticker-start) var(--sticker-peelback-hover)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-hover) - 1px) !important;
          }
          .sticker-container:active .sticker-main {
            clip-path: polygon(var(--sticker-start) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-end) var(--sticker-end), var(--sticker-start) var(--sticker-end)) !important;
          }
          .sticker-container:active .sticker-flap {
            clip-path: polygon(var(--sticker-start) var(--sticker-start), var(--sticker-end) var(--sticker-start), var(--sticker-end) var(--sticker-peelback-active), var(--sticker-start) var(--sticker-peelback-active)) !important;
            top: calc(-100% + 2 * var(--sticker-peelback-active) - 1px) !important;
          }
        \`,
        }}
      />

      <svg width="0" height="0">
        <defs>
          <filter id="pointLight">
            <feGaussianBlur stdDeviation="1" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity}
              lightingColor="white"
            >
              <fePointLight ref={pointLightRef} x="100" y="100" z="300" />
            </feSpecularLighting>
            <feComposite
              in="spec"
              in2="SourceGraphic"
              result="lit"
            />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="pointLightFlipped">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feSpecularLighting
              result="spec"
              in="blur"
              specularExponent="100"
              specularConstant={lightingIntensity * 7}
              lightingColor="white"
            >
              <fePointLight
                ref={pointLightFlippedRef}
                x="100"
                y="100"
                z="300"
              />
            </feSpecularLighting>
            <feComposite
              in="spec"
              in2="SourceGraphic"
              result="lit"
            />
            <feComposite in="lit" in2="SourceAlpha" operator="in" />
          </filter>

          <filter id="dropShadow">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation={3 * shadowIntensity}
              floodColor="black"
              floodOpacity={shadowIntensity}
            />
          </filter>

          <filter id="expandAndFill">
            <feOffset dx="0" dy="0" in="SourceAlpha" result="shape" />
            <feFlood floodColor="rgb(179,179,179)" result="flood" />
            <feComposite operator="in" in="flood" in2="shape" />
          </filter>
        </defs>
      </svg>

      <div
        className="sticker-container relative select-none touch-none sm:touch-auto"
        ref={containerRef}
        style={{
          WebkitUserSelect: "none",
          userSelect: "none",
          WebkitTouchCallout: "none",
          WebkitTapHighlightColor: "transparent",
          transform: \`rotate(\${peelDirection}deg)\`,
          transformOrigin: "center",
        }}
      >
        <div className="sticker-main" style={stickerMainStyle}>
          <div style={{ filter: "url(#pointLight)" }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={imageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="absolute top-4 left-2 w-full h-full opacity-40"
          style={{ filter: "brightness(0) blur(8px)" }}
        >
          <div className="sticker-flap" style={flapStyle}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>

        <div
          className="sticker-flap absolute w-full h-full left-0"
          style={flapStyle}
        >
          <div style={{ filter: "url(#pointLightFlipped)" }}>
            <img
              src={imageSrc}
              alt=""
              className="block"
              style={shadowImageStyle}
              draggable="false"
              onContextMenu={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickerPeel;
`,kn={...Xn("Animations/StickerPeel"),installation:"npm install gsap",usage:`import StickerPeel from './StickerPeel'
import logo from './assets/sticker.png'
  
<StickerPeel
  imageSrc={logo}
  width={200}
  rotate={30}
  peelBackHoverPct={20}
  peelBackActivePct={40}
  shadowIntensity={0.6}
  lightingIntensity={0.1}
  initialPosition={{ x: -100, y: 100 }}
/>`,code:vi,css:mi,tailwind:xi,tsCode:ki,tsTailwind:yi},Li=()=>{const[f,t]=ne.useState(0),[i,n]=ne.useState(200),[o,s]=ne.useState(30),[d,l]=ne.useState(40),[m,u]=ne.useState(.1),[g,w]=ne.useState(.5),[k,e]=ne.useState(0),b=[{name:"imageSrc",type:"string",default:"required",description:"The source URL for the sticker image"},{name:"rotate",type:"number",default:"30",description:"The rotation angle in degrees when dragging"},{name:"peelBackHoverPct",type:"number",default:"30",description:"Percentage of peel effect on hover (0-100)"},{name:"peelBackActivePct",type:"number",default:"40",description:"Percentage of peel effect when active/clicked (0-100)"},{name:"peelDirection",type:"number",default:"0",description:"Direction of the peel effect in degrees (0-360)"},{name:"peelEasing",type:"string",default:"power3.out",description:"GSAP easing function for peel animations"},{name:"peelHoverEasing",type:"string",default:"power2.out",description:"GSAP easing function for hover transitions"},{name:"width",type:"number",default:"200",description:"Width of the sticker in pixels"},{name:"shadowIntensity",type:"number",default:"0.6",description:"Intensity of the shadow effect (0-1)"},{name:"lightingIntensity",type:"number",default:"0.1",description:"Intensity of the lighting effect (0-1)"},{name:"initialPosition",type:"string",default:"center",description:"Initial position of the sticker ('center', 'top-left', 'top-right', 'bottom-left', 'bottom-right')"},{name:"className",type:"string",default:"",description:"Custom class name for additional styling"}];return E.jsxs(An,{children:[E.jsxs(Fn,{children:[E.jsxs(Yn,{position:"relative",className:"demo-container",h:500,overflow:"hidden",bg:"linear-gradient(to bottom, #060010, #0D0716, #0D0716 , #060010)",children:[E.jsx(hi,{imageSrc:Vn,rotate:f,width:i,peelBackHoverPct:o,peelBackActivePct:d,lightingIntensity:m,shadowIntensity:g,peelDirection:k,className:"sticker-peel-demo"}),E.jsx(Bn,{position:"absolute",zIndex:0,left:"50%",top:"1em",transform:"translateX(-50%)",fontSize:"clamp(1.5rem, 4vw, 3rem)",fontWeight:900,color:"#271E37",children:"Try dragging it!"})]}),E.jsxs(Gn,{children:[E.jsx(ze,{title:"Peel Direction",min:0,max:360,step:1,value:k,valueUnit:"°",width:200,onChange:e}),E.jsx(ze,{title:"Rotate",min:0,max:60,step:1,value:f,valueUnit:"°",width:200,onChange:t}),E.jsx(ze,{title:"Width",min:100,max:300,step:10,value:i,valueUnit:"px",width:200,onChange:n}),E.jsx(ze,{title:"Peel Hover %",min:0,max:50,step:1,value:o,valueUnit:"%",width:200,onChange:s}),E.jsx(ze,{title:"Peel Active %",min:0,max:70,step:1,value:d,valueUnit:"%",width:200,onChange:l}),E.jsx(ze,{title:"Lighting Intensity",min:0,max:.5,step:.01,value:m,valueUnit:"",width:200,onChange:u}),E.jsx(ze,{title:"Shadow Intensity",min:0,max:1,step:.01,value:g,valueUnit:"",width:200,onChange:w})]}),E.jsx(Hn,{data:b}),E.jsx(Wn,{dependencyList:["gsap"]})]}),E.jsx(On,{children:E.jsx(zn,{codeObject:kn})}),E.jsx($n,{children:E.jsx(jn,{...kn})})]})};export{Li as default};
