import{r as X,bN as $e,bU as Xo,g as Ko,j as ce,B as qo}from"./index-j7DW7U0N.js";import{T as Jo,P as Zo,a as Qo,C as $o,b as ea,c as ta,d as na}from"./PropTable-Baf4PZpP.js";import{C as ra}from"./Customize-Dq9g9yhm.js";import{D as oa}from"./Dependencies-BSh7s3YA.js";import{u as aa}from"./useForceRerender-LUtjsLCb.js";import{P as ia}from"./PreviewSelect-BhKIbQB2.js";import{P as ft}from"./PreviewSlider-D0sSZbsU.js";import{a as Xe,u as ht,g as wr,s as sa,e as So,C as la,d as fa}from"./react-three-fiber.esm-UKojRSAj.js";import{V as et,n as qe,a0 as Yt,Y as Yn,b1 as ua,b5 as St,C as it,a1 as ca,bc as da,bb as ha,bd as pa,r as ma,K as va,M as Xn,ad as ga,be as ba,a$ as ya,a_ as Mo,ax as xa,T as wa,u as Sr,ba as Sa,$ as Ma,P as Kn,_ as ka,m as Ta,x as Ca,aY as _a,J as Da,aq as Ea,bf as Ua,S as Pa}from"./three.module-Df1A5Gfx.js";import{s as ko}from"./shaderMaterial-CSBewI76.js";import{u as Aa}from"./Texture-aZraoaNg.js";import{u as Fa}from"./Gltf-CzOebZvz.js";import{u as On}from"./Fbo-CYRKjHef.js";import"./field-BmHOm1Rn.js";function Nt(l,n,u){return n in l?Object.defineProperty(l,n,{value:u,enumerable:!0,configurable:!0,writable:!0}):l[n]=u,l}function Ln(l,n){(n==null||n>l.length)&&(n=l.length);for(var u=0,f=new Array(n);u<n;u++)f[u]=l[u];return f}function Ra(l,n){if(l){if(typeof l=="string")return Ln(l,n);var u=Object.prototype.toString.call(l).slice(8,-1);if(u==="Object"&&l.constructor&&(u=l.constructor.name),u==="Map"||u==="Set")return Array.from(l);if(u==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(u))return Ln(l,n)}}function Ba(l){if(Array.isArray(l))return Ln(l)}function Ia(l){if(typeof Symbol<"u"&&l[Symbol.iterator]!=null||l["@@iterator"]!=null)return Array.from(l)}function Ga(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oa(l){return Ba(l)||Ia(l)||Ra(l)||Ga()}new et;new et;function La(l,n,u){return Math.max(n,Math.min(u,l))}function za(l,n){return La(l-Math.floor(l/n)*n,0,n)}function Wa(l,n){var u=za(n-l,Math.PI*2);return u>Math.PI&&(u-=Math.PI*2),u}function To(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}var je=function l(n,u,f){var t=this;To(this,l),Nt(this,"dot2",function(e,r){return t.x*e+t.y*r}),Nt(this,"dot3",function(e,r,a){return t.x*e+t.y*r+t.z*a}),this.x=n,this.y=u,this.z=f},ja=[new je(1,1,0),new je(-1,1,0),new je(1,-1,0),new je(-1,-1,0),new je(1,0,1),new je(-1,0,1),new je(1,0,-1),new je(-1,0,-1),new je(0,1,1),new je(0,-1,1),new je(0,1,-1),new je(0,-1,-1)],Mr=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],kr=new Array(512),Tr=new Array(512),Na=function(n){n>0&&n<1&&(n*=65536),n=Math.floor(n),n<256&&(n|=n<<8);for(var u=0;u<256;u++){var f;u&1?f=Mr[u]^n&255:f=Mr[u]^n>>8&255,kr[u]=kr[u+256]=f,Tr[u]=Tr[u+256]=ja[f%12]}};Na(0);function Va(l){if(typeof l=="number")l=Math.abs(l);else if(typeof l=="string"){var n=l;l=0;for(var u=0;u<n.length;u++)l=(l+(u+1)*(n.charCodeAt(u)%96))%2147483647}return l===0&&(l=311),l}function Cr(l){var n=Va(l);return function(){var u=n*48271%2147483647;return n=u,u/2147483647}}var Ha=function l(n){var u=this;To(this,l),Nt(this,"seed",0),Nt(this,"init",function(f){u.seed=f,u.value=Cr(f)}),Nt(this,"value",Cr(this.seed)),this.init(n)};new Ha(Math.random());var Ya=function(n){var u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,f=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return f/Math.atan(1/u)*Math.atan(Math.sin(2*Math.PI*n*t)/u)},Co=function(n){return 1/(1+n+.48*n*n+.235*n*n*n)},Xa=function(n){return n},Ka={in:function(n){return 1-Math.cos(n*Math.PI/2)},out:function(n){return Math.sin(n*Math.PI/2)},inOut:function(n){return-(Math.cos(Math.PI*n)-1)/2}},qa={in:function(n){return n*n*n},out:function(n){return 1-Math.pow(1-n,3)},inOut:function(n){return n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2}},Ja={in:function(n){return n*n*n*n*n},out:function(n){return 1-Math.pow(1-n,5)},inOut:function(n){return n<.5?16*n*n*n*n*n:1-Math.pow(-2*n+2,5)/2}},Za={in:function(n){return 1-Math.sqrt(1-Math.pow(n,2))},out:function(n){return Math.sqrt(1-Math.pow(n-1,2))},inOut:function(n){return n<.5?(1-Math.sqrt(1-Math.pow(2*n,2)))/2:(Math.sqrt(1-Math.pow(-2*n+2,2))+1)/2}},Qa={in:function(n){return n*n*n*n},out:function(n){return 1- --n*n*n*n},inOut:function(n){return n<.5?8*n*n*n*n:1-8*--n*n*n*n}},$a={in:function(n){return n===0?0:Math.pow(2,10*n-10)},out:function(n){return n===1?1:1-Math.pow(2,-10*n)},inOut:function(n){return n===0?0:n===1?1:n<.5?Math.pow(2,20*n-10)/2:(2-Math.pow(2,-20*n+10))/2}};function Fe(l,n,u){var f=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,t=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,e=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:Co,a=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,o="velocity_"+n;if(l.__damp===void 0&&(l.__damp={}),l.__damp[o]===void 0&&(l.__damp[o]=0),Math.abs(l[n]-u)<=a)return l[n]=u,!1;f=Math.max(1e-4,f);var i=2/f,s=r(i*t),c=l[n]-u,d=u,h=e*f;c=Math.min(Math.max(c,-h),h),u=l[n]-c;var p=(l.__damp[o]+i*c)*t;l.__damp[o]=(l.__damp[o]-i*p)*s;var g=u+(c+p)*s;return d-l[n]>0==g>d&&(g=d,l.__damp[o]=(g-d)/t),l[n]=g,!0}var ei=function(n){return n&&n.isCamera},ti=function(n){return n&&n.isLight},Rt=new qe,_r=new Yt,Dr=new Yt,Bt=new Yn,Rn=new qe;function ni(l,n,u,f,t,e,r){typeof n=="number"?Rt.setScalar(n):Array.isArray(n)?Rt.set(n[0],n[1],n[2]):Rt.copy(n);var a=l.parent;l.updateWorldMatrix(!0,!1),Rn.setFromMatrixPosition(l.matrixWorld),ei(l)||ti(l)?Bt.lookAt(Rn,Rt,l.up):Bt.lookAt(Rt,Rn,l.up),dn(l.quaternion,Dr.setFromRotationMatrix(Bt),u,f,t,e,r),a&&(Bt.extractRotation(a.matrixWorld),_r.setFromRotationMatrix(Bt),dn(l.quaternion,Dr.copy(l.quaternion).premultiply(_r.invert()),u,f,t,e,r))}function wt(l,n,u,f,t,e,r,a){return Fe(l,n,l[n]+Wa(l[n],u),f,t,e,r,a)}var It=new et,Er,Ur;function ri(l,n,u,f,t,e,r){return typeof n=="number"?It.setScalar(n):Array.isArray(n)?It.set(n[0],n[1]):It.copy(n),Er=Fe(l,"x",It.x,u,f,t,e,r),Ur=Fe(l,"y",It.y,u,f,t,e,r),Er||Ur}var bt=new qe,Pr,Ar,Fr;function zn(l,n,u,f,t,e,r){return typeof n=="number"?bt.setScalar(n):Array.isArray(n)?bt.set(n[0],n[1],n[2]):bt.copy(n),Pr=Fe(l,"x",bt.x,u,f,t,e,r),Ar=Fe(l,"y",bt.y,u,f,t,e,r),Fr=Fe(l,"z",bt.z,u,f,t,e,r),Pr||Ar||Fr}var ut=new St,Rr,Br,Ir,Gr;function oi(l,n,u,f,t,e,r){return typeof n=="number"?ut.setScalar(n):Array.isArray(n)?ut.set(n[0],n[1],n[2],n[3]):ut.copy(n),Rr=Fe(l,"x",ut.x,u,f,t,e,r),Br=Fe(l,"y",ut.y,u,f,t,e,r),Ir=Fe(l,"z",ut.z,u,f,t,e,r),Gr=Fe(l,"w",ut.w,u,f,t,e,r),Rr||Br||Ir||Gr}var Gt=new ca,Or,Lr,zr;function ai(l,n,u,f,t,e,r){return Array.isArray(n)?Gt.set(n[0],n[1],n[2],n[3]):Gt.copy(n),Or=wt(l,"x",Gt.x,u,f,t,e,r),Lr=wt(l,"y",Gt.y,u,f,t,e,r),zr=wt(l,"z",Gt.z,u,f,t,e,r),Or||Lr||zr}var yt=new it,Wr,jr,Nr;function ii(l,n,u,f,t,e,r){return n instanceof it?yt.copy(n):Array.isArray(n)?yt.setRGB(n[0],n[1],n[2]):yt.set(n),Wr=Fe(l,"r",yt.r,u,f,t,e,r),jr=Fe(l,"g",yt.g,u,f,t,e,r),Nr=Fe(l,"b",yt.b,u,f,t,e,r),Wr||jr||Nr}var Ye=new Yt,Qe=new St,Vr=new St,Ot=new St,Hr,Yr,Xr,Kr;function dn(l,n,u,f,t,e,r){var a=l;Array.isArray(n)?Ye.set(n[0],n[1],n[2],n[3]):Ye.copy(n);var o=l.dot(Ye)>0?1:-1;return Ye.x*=o,Ye.y*=o,Ye.z*=o,Ye.w*=o,Hr=Fe(l,"x",Ye.x,u,f,t,e,r),Yr=Fe(l,"y",Ye.y,u,f,t,e,r),Xr=Fe(l,"z",Ye.z,u,f,t,e,r),Kr=Fe(l,"w",Ye.w,u,f,t,e,r),Qe.set(l.x,l.y,l.z,l.w).normalize(),Vr.set(a.__damp.velocity_x,a.__damp.velocity_y,a.__damp.velocity_z,a.__damp.velocity_w),Ot.copy(Qe).multiplyScalar(Vr.dot(Qe)/Qe.dot(Qe)),a.__damp.velocity_x-=Ot.x,a.__damp.velocity_y-=Ot.y,a.__damp.velocity_z-=Ot.z,a.__damp.velocity_w-=Ot.w,l.set(Qe.x,Qe.y,Qe.z,Qe.w),Hr||Yr||Xr||Kr}var Lt=new ua,qr,Jr,Zr;function si(l,n,u,f,t,e,r){return Array.isArray(n)?Lt.set(n[0],n[1],n[2]):Lt.copy(n),qr=Fe(l,"radius",Lt.radius,u,f,t,e,r),Jr=wt(l,"phi",Lt.phi,u,f,t,e,r),Zr=wt(l,"theta",Lt.theta,u,f,t,e,r),qr||Jr||Zr}var sn=new Yn,Qr=new qe,$r=new Yt,eo=new qe,to,no,ro;function li(l,n,u,f,t,e,r){var a=l;return a.__damp===void 0&&(a.__damp={position:new qe,rotation:new Yt,scale:new qe},l.decompose(a.__damp.position,a.__damp.rotation,a.__damp.scale)),Array.isArray(n)?sn.set.apply(sn,Oa(n)):sn.copy(n),sn.decompose(Qr,$r,eo),to=zn(a.__damp.position,Qr,u,f,t,e,r),no=dn(a.__damp.rotation,$r,u,f,t,e,r),ro=zn(a.__damp.scale,eo,u,f,t,e,r),l.compose(a.__damp.position,a.__damp.rotation,a.__damp.scale),to||no||ro}var Wn=Object.freeze({__proto__:null,rsqw:Ya,exp:Co,linear:Xa,sine:Ka,cubic:qa,quint:Ja,circ:Za,quart:Qa,expo:$a,damp:Fe,dampLookAt:ni,dampAngle:wt,damp2:ri,damp3:zn,damp4:oi,dampE:ai,dampC:ii,dampQ:dn,dampS:si,dampM:li});const qn=X.createContext(null);function Jn(){return X.useContext(qn)}function fi({eps:l=1e-5,enabled:n=!0,infinite:u,horizontal:f,pages:t=1,distance:e=1,damping:r=.25,maxSpeed:a=1/0,prepend:o=!1,style:i={},children:s}){const{get:c,setEvents:d,gl:h,size:p,invalidate:g,events:v}=Xe(),[C]=X.useState(()=>document.createElement("div")),[M]=X.useState(()=>document.createElement("div")),[k]=X.useState(()=>document.createElement("div")),y=h.domElement.parentNode,T=X.useRef(0),_=X.useMemo(()=>({el:C,eps:l,fill:M,fixed:k,horizontal:f,damping:r,offset:0,delta:0,scroll:T,pages:t,range(R,U,N=0){const b=R-N,A=b+U+N*2;return this.offset<b?0:this.offset>A?1:(this.offset-b)/(A-b)},curve(R,U,N=0){return Math.sin(this.range(R,U,N)*Math.PI)},visible(R,U,N=0){const b=R-N,A=b+U+N*2;return this.offset>=b&&this.offset<=A}}),[l,r,f,t]);X.useEffect(()=>{C.style.position="absolute",C.style.width="100%",C.style.height="100%",C.style[f?"overflowX":"overflowY"]="auto",C.style[f?"overflowY":"overflowX"]="hidden",C.style.top="0px",C.style.left="0px";for(const U in i)C.style[U]=i[U];k.style.position="sticky",k.style.top="0px",k.style.left="0px",k.style.width="100%",k.style.height="100%",k.style.overflow="hidden",C.appendChild(k),M.style.height=f?"100%":`${t*e*100}%`,M.style.width=f?`${t*e*100}%`:"100%",M.style.pointerEvents="none",C.appendChild(M),o?y.prepend(C):y.appendChild(C),C[f?"scrollLeft":"scrollTop"]=1;const w=v.connected||h.domElement;requestAnimationFrame(()=>v.connect==null?void 0:v.connect(C));const R=c().events.compute;return d({compute(U,N){const{left:b,top:A}=y.getBoundingClientRect(),D=U.clientX-b,V=U.clientY-A;N.pointer.set(D/N.size.width*2-1,-(V/N.size.height)*2+1),N.raycaster.setFromCamera(N.pointer,N.camera)}}),()=>{y.removeChild(C),d({compute:R}),v.connect==null||v.connect(w)}},[t,e,f,C,M,k,y]),X.useEffect(()=>{if(v.connected===C){const w=p[f?"width":"height"],R=C[f?"scrollWidth":"scrollHeight"],U=R-w;let N=0,b=!0,A=!0;const D=()=>{if(!(!n||A)&&(g(),N=C[f?"scrollLeft":"scrollTop"],T.current=N/U,u)){if(!b){if(N>=U){const z=1-_.offset;C[f?"scrollLeft":"scrollTop"]=1,T.current=_.offset=-z,b=!0}else if(N<=0){const z=1+_.offset;C[f?"scrollLeft":"scrollTop"]=R,T.current=_.offset=z,b=!0}}b&&setTimeout(()=>b=!1,40)}};C.addEventListener("scroll",D,{passive:!0}),requestAnimationFrame(()=>A=!1);const V=z=>C.scrollLeft+=z.deltaY/2;return f&&C.addEventListener("wheel",V,{passive:!0}),()=>{C.removeEventListener("scroll",D),f&&C.removeEventListener("wheel",V)}}},[C,v,p,u,_,g,f,n]);let x=0;return ht((w,R)=>{x=_.offset,Wn.damp(_,"offset",T.current,r,R,a,void 0,l),Wn.damp(_,"delta",Math.abs(x-_.offset),r,R,a,void 0,l),_.delta>l&&g()}),X.createElement(qn.Provider,{value:_},s)}const ui=X.forwardRef(({children:l},n)=>{const u=X.useRef(null);X.useImperativeHandle(n,()=>u.current,[]);const f=Jn(),{width:t,height:e}=Xe(r=>r.viewport);return ht(()=>{u.current.position.x=f.horizontal?-t*(f.pages-1)*f.offset:0,u.current.position.y=f.horizontal?0:e*(f.pages-1)*f.offset}),X.createElement("group",{ref:u},l)}),ci=X.forwardRef(({children:l,style:n,...u},f)=>{const t=Jn(),e=X.useRef(null);X.useImperativeHandle(f,()=>e.current,[]);const{width:r,height:a}=Xe(s=>s.size),o=X.useContext(wr),i=X.useMemo(()=>Xo.createRoot(t.fixed),[t.fixed]);return ht(()=>{t.delta>t.eps&&(e.current.style.transform=`translate3d(${t.horizontal?-r*(t.pages-1)*t.offset:0}px,${t.horizontal?0:a*(t.pages-1)*-t.offset}px,0)`)}),i.render(X.createElement("div",$e({ref:e,style:{...n,position:"absolute",top:0,left:0,willChange:"transform"}},u),X.createElement(qn.Provider,{value:t},X.createElement(wr.Provider,{value:o},l)))),null}),oo=X.forwardRef(({html:l,...n},u)=>{const f=l?ci:ui;return X.createElement(f,$e({ref:u},n))});function di(){var l=Object.create(null);function n(t,e){var r=t.id,a=t.name,o=t.dependencies;o===void 0&&(o=[]);var i=t.init;i===void 0&&(i=function(){});var s=t.getTransferables;if(s===void 0&&(s=null),!l[r])try{o=o.map(function(d){return d&&d.isWorkerModule&&(n(d,function(h){if(h instanceof Error)throw h}),d=l[d.id].value),d}),i=f("<"+a+">.init",i),s&&(s=f("<"+a+">.getTransferables",s));var c=null;typeof i=="function"?c=i.apply(void 0,o):console.error("worker module init function failed to rehydrate"),l[r]={id:r,value:c,getTransferables:s},e(c)}catch(d){d&&d.noLog||console.error(d),e(d)}}function u(t,e){var r,a=t.id,o=t.args;(!l[a]||typeof l[a].value!="function")&&e(new Error("Worker module "+a+": not found or its 'init' did not return a function"));try{var i=(r=l[a]).value.apply(r,o);i&&typeof i.then=="function"?i.then(s,function(c){return e(c instanceof Error?c:new Error(""+c))}):s(i)}catch(c){e(c)}function s(c){try{var d=l[a].getTransferables&&l[a].getTransferables(c);(!d||!Array.isArray(d)||!d.length)&&(d=void 0),e(c,d)}catch(h){console.error(h),e(h)}}}function f(t,e){var r=void 0;self.troikaDefine=function(o){return r=o};var a=URL.createObjectURL(new Blob(["/** "+t.replace(/\*/g,"")+` **/

troikaDefine(
`+e+`
)`],{type:"application/javascript"}));try{importScripts(a)}catch(o){console.error(o)}return URL.revokeObjectURL(a),delete self.troikaDefine,r}self.addEventListener("message",function(t){var e=t.data,r=e.messageId,a=e.action,o=e.data;try{a==="registerModule"&&n(o,function(i){i instanceof Error?postMessage({messageId:r,success:!1,error:i.message}):postMessage({messageId:r,success:!0,result:{isCallable:typeof i=="function"}})}),a==="callModule"&&u(o,function(i,s){i instanceof Error?postMessage({messageId:r,success:!1,error:i.message}):postMessage({messageId:r,success:!0,result:i},s||void 0)})}catch(i){postMessage({messageId:r,success:!1,error:i.stack})}})}function hi(l){var n=function(){for(var u=[],f=arguments.length;f--;)u[f]=arguments[f];return n._getInitResult().then(function(t){if(typeof t=="function")return t.apply(void 0,u);throw new Error("Worker module function was called but `init` did not return a callable function")})};return n._getInitResult=function(){var u=l.dependencies,f=l.init;u=Array.isArray(u)?u.map(function(e){return e&&(e=e.onMainThread||e,e._getInitResult&&(e=e._getInitResult())),e}):[];var t=Promise.all(u).then(function(e){return f.apply(null,e)});return n._getInitResult=function(){return t},t},n}var _o=function(){var l=!1;if(typeof window<"u"&&typeof window.document<"u")try{var n=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));n.terminate(),l=!0}catch(u){console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+u.message+"]")}return _o=function(){return l},l},pi=0,mi=0,Bn=!1,Vt=Object.create(null),Ht=Object.create(null),jn=Object.create(null);function Mt(l){if((!l||typeof l.init!="function")&&!Bn)throw new Error("requires `options.init` function");var n=l.dependencies,u=l.init,f=l.getTransferables,t=l.workerId,e=hi(l);t==null&&(t="#default");var r="workerModule"+ ++pi,a=l.name||r,o=null;n=n&&n.map(function(s){return typeof s=="function"&&!s.workerModuleData&&(Bn=!0,s=Mt({workerId:t,name:"<"+a+"> function dependency: "+s.name,init:`function(){return (
`+un(s)+`
)}`}),Bn=!1),s&&s.workerModuleData&&(s=s.workerModuleData),s});function i(){for(var s=[],c=arguments.length;c--;)s[c]=arguments[c];if(!_o())return e.apply(void 0,s);if(!o){o=ao(t,"registerModule",i.workerModuleData);var d=function(){o=null,Ht[t].delete(d)};(Ht[t]||(Ht[t]=new Set)).add(d)}return o.then(function(h){var p=h.isCallable;if(p)return ao(t,"callModule",{id:r,args:s});throw new Error("Worker module function was called but `init` did not return a callable function")})}return i.workerModuleData={isWorkerModule:!0,id:r,name:a,dependencies:n,init:un(u),getTransferables:f&&un(f)},i.onMainThread=e,i}function vi(l){Ht[l]&&Ht[l].forEach(function(n){n()}),Vt[l]&&(Vt[l].terminate(),delete Vt[l])}function un(l){var n=l.toString();return!/^function/.test(n)&&/^\w+\s*\(/.test(n)&&(n="function "+n),n}function gi(l){var n=Vt[l];if(!n){var u=un(di);n=Vt[l]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+l.replace(/\*/g,"")+` **/

;(`+u+")()"],{type:"application/javascript"}))),n.onmessage=function(f){var t=f.data,e=t.messageId,r=jn[e];if(!r)throw new Error("WorkerModule response with empty or unknown messageId");delete jn[e],r(t)}}return n}function ao(l,n,u){return new Promise(function(f,t){var e=++mi;jn[e]=function(r){r.success?f(r.result):t(new Error("Error in worker "+n+" call: "+r.error))},gi(l).postMessage({messageId:e,action:n,data:u})})}function Do(){var l=function(n){function u(O,I,m,S,P,F,E,W){var B=1-E;W.x=B*B*O+2*B*E*m+E*E*P,W.y=B*B*I+2*B*E*S+E*E*F}function f(O,I,m,S,P,F,E,W,B,L){var K=1-B;L.x=K*K*K*O+3*K*K*B*m+3*K*B*B*P+B*B*B*E,L.y=K*K*K*I+3*K*K*B*S+3*K*B*B*F+B*B*B*W}function t(O,I){for(var m=/([MLQCZ])([^MLQCZ]*)/g,S,P,F,E,W;S=m.exec(O);){var B=S[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(L){return parseFloat(L)});switch(S[1]){case"M":E=P=B[0],W=F=B[1];break;case"L":(B[0]!==E||B[1]!==W)&&I("L",E,W,E=B[0],W=B[1]);break;case"Q":{I("Q",E,W,E=B[2],W=B[3],B[0],B[1]);break}case"C":{I("C",E,W,E=B[4],W=B[5],B[0],B[1],B[2],B[3]);break}case"Z":(E!==P||W!==F)&&I("L",E,W,P,F);break}}}function e(O,I,m){m===void 0&&(m=16);var S={x:0,y:0};t(O,function(P,F,E,W,B,L,K,ee,Y){switch(P){case"L":I(F,E,W,B);break;case"Q":{for(var j=F,ge=E,de=1;de<m;de++)u(F,E,L,K,W,B,de/(m-1),S),I(j,ge,S.x,S.y),j=S.x,ge=S.y;break}case"C":{for(var Z=F,te=E,le=1;le<m;le++)f(F,E,L,K,ee,Y,W,B,le/(m-1),S),I(Z,te,S.x,S.y),Z=S.x,te=S.y;break}}})}var r="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",a="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",o=new WeakMap,i={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function s(O,I){var m=O.getContext?O.getContext("webgl",i):O,S=o.get(m);if(!S){let K=function(Z){var te=F[Z];if(!te&&(te=F[Z]=m.getExtension(Z),!te))throw new Error(Z+" not supported");return te},ee=function(Z,te){var le=m.createShader(te);return m.shaderSource(le,Z),m.compileShader(le),le},Y=function(Z,te,le,H){if(!E[Z]){var ne={},$={},G=m.createProgram();m.attachShader(G,ee(te,m.VERTEX_SHADER)),m.attachShader(G,ee(le,m.FRAGMENT_SHADER)),m.linkProgram(G),E[Z]={program:G,transaction:function(J){m.useProgram(G),J({setUniform:function(q,we){for(var oe=[],ie=arguments.length-2;ie-- >0;)oe[ie]=arguments[ie+2];var ue=$[we]||($[we]=m.getUniformLocation(G,we));m["uniform"+q].apply(m,[ue].concat(oe))},setAttribute:function(q,we,oe,ie,ue){var me=ne[q];me||(me=ne[q]={buf:m.createBuffer(),loc:m.getAttribLocation(G,q),data:null}),m.bindBuffer(m.ARRAY_BUFFER,me.buf),m.vertexAttribPointer(me.loc,we,m.FLOAT,!1,0,0),m.enableVertexAttribArray(me.loc),P?m.vertexAttribDivisor(me.loc,ie):K("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(me.loc,ie),ue!==me.data&&(m.bufferData(m.ARRAY_BUFFER,ue,oe),me.data=ue)}})}}}E[Z].transaction(H)},j=function(Z,te){B++;try{m.activeTexture(m.TEXTURE0+B);var le=W[Z];le||(le=W[Z]=m.createTexture(),m.bindTexture(m.TEXTURE_2D,le),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MIN_FILTER,m.NEAREST),m.texParameteri(m.TEXTURE_2D,m.TEXTURE_MAG_FILTER,m.NEAREST)),m.bindTexture(m.TEXTURE_2D,le),te(le,B)}finally{B--}},ge=function(Z,te,le){var H=m.createFramebuffer();L.push(H),m.bindFramebuffer(m.FRAMEBUFFER,H),m.activeTexture(m.TEXTURE0+te),m.bindTexture(m.TEXTURE_2D,Z),m.framebufferTexture2D(m.FRAMEBUFFER,m.COLOR_ATTACHMENT0,m.TEXTURE_2D,Z,0);try{le(H)}finally{m.deleteFramebuffer(H),m.bindFramebuffer(m.FRAMEBUFFER,L[--L.length-1]||null)}},de=function(){F={},E={},W={},B=-1,L.length=0};var P=typeof WebGL2RenderingContext<"u"&&m instanceof WebGL2RenderingContext,F={},E={},W={},B=-1,L=[];m.canvas.addEventListener("webglcontextlost",function(Z){de(),Z.preventDefault()},!1),o.set(m,S={gl:m,isWebGL2:P,getExtension:K,withProgram:Y,withTexture:j,withTextureFramebuffer:ge,handleContextLoss:de})}I(S)}function c(O,I,m,S,P,F,E,W){E===void 0&&(E=15),W===void 0&&(W=null),s(O,function(B){var L=B.gl,K=B.withProgram,ee=B.withTexture;ee("copy",function(Y,j){L.texImage2D(L.TEXTURE_2D,0,L.RGBA,P,F,0,L.RGBA,L.UNSIGNED_BYTE,I),K("copy",r,a,function(ge){var de=ge.setUniform,Z=ge.setAttribute;Z("aUV",2,L.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),de("1i","image",j),L.bindFramebuffer(L.FRAMEBUFFER,W||null),L.disable(L.BLEND),L.colorMask(E&8,E&4,E&2,E&1),L.viewport(m,S,P,F),L.scissor(m,S,P,F),L.drawArrays(L.TRIANGLES,0,3)})})})}function d(O,I,m){var S=O.width,P=O.height;s(O,function(F){var E=F.gl,W=new Uint8Array(S*P*4);E.readPixels(0,0,S,P,E.RGBA,E.UNSIGNED_BYTE,W),O.width=I,O.height=m,c(E,W,0,0,S,P)})}var h=Object.freeze({__proto__:null,withWebGLContext:s,renderImageData:c,resizeWebGLCanvasWithoutClearing:d});function p(O,I,m,S,P,F){F===void 0&&(F=1);var E=new Uint8Array(O*I),W=S[2]-S[0],B=S[3]-S[1],L=[];e(m,function(Z,te,le,H){L.push({x1:Z,y1:te,x2:le,y2:H,minX:Math.min(Z,le),minY:Math.min(te,H),maxX:Math.max(Z,le),maxY:Math.max(te,H)})}),L.sort(function(Z,te){return Z.maxX-te.maxX});for(var K=0;K<O;K++)for(var ee=0;ee<I;ee++){var Y=ge(S[0]+W*(K+.5)/O,S[1]+B*(ee+.5)/I),j=Math.pow(1-Math.abs(Y)/P,F)/2;Y<0&&(j=1-j),j=Math.max(0,Math.min(255,Math.round(j*255))),E[ee*O+K]=j}return E;function ge(Z,te){for(var le=1/0,H=1/0,ne=L.length;ne--;){var $=L[ne];if($.maxX+H<=Z)break;if(Z+H>$.minX&&te-H<$.maxY&&te+H>$.minY){var G=C(Z,te,$.x1,$.y1,$.x2,$.y2);G<le&&(le=G,H=Math.sqrt(le))}}return de(Z,te)&&(H=-H),H}function de(Z,te){for(var le=0,H=L.length;H--;){var ne=L[H];if(ne.maxX<=Z)break;var $=ne.y1>te!=ne.y2>te&&Z<(ne.x2-ne.x1)*(te-ne.y1)/(ne.y2-ne.y1)+ne.x1;$&&(le+=ne.y1<ne.y2?1:-1)}return le!==0}}function g(O,I,m,S,P,F,E,W,B,L){F===void 0&&(F=1),W===void 0&&(W=0),B===void 0&&(B=0),L===void 0&&(L=0),v(O,I,m,S,P,F,E,null,W,B,L)}function v(O,I,m,S,P,F,E,W,B,L,K){F===void 0&&(F=1),B===void 0&&(B=0),L===void 0&&(L=0),K===void 0&&(K=0);for(var ee=p(O,I,m,S,P,F),Y=new Uint8Array(ee.length*4),j=0;j<ee.length;j++)Y[j*4+K]=ee[j];c(E,Y,B,L,O,I,1<<3-K,W)}function C(O,I,m,S,P,F){var E=P-m,W=F-S,B=E*E+W*W,L=B?Math.max(0,Math.min(1,((O-m)*E+(I-S)*W)/B)):0,K=O-(m+L*E),ee=I-(S+L*W);return K*K+ee*ee}var M=Object.freeze({__proto__:null,generate:p,generateIntoCanvas:g,generateIntoFramebuffer:v}),k="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",T="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",_=new Float32Array([0,0,2,0,0,2]),x=null,w=!1,R={},U=new WeakMap;function N(O){if(!w&&!V(O))throw new Error("WebGL generation not supported")}function b(O,I,m,S,P,F,E){if(F===void 0&&(F=1),E===void 0&&(E=null),!E&&(E=x,!E)){var W=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!W)throw new Error("OffscreenCanvas or DOM canvas not supported");E=x=W.getContext("webgl",{depth:!1})}N(E);var B=new Uint8Array(O*I*4);s(E,function(Y){var j=Y.gl,ge=Y.withTexture,de=Y.withTextureFramebuffer;ge("readable",function(Z,te){j.texImage2D(j.TEXTURE_2D,0,j.RGBA,O,I,0,j.RGBA,j.UNSIGNED_BYTE,null),de(Z,te,function(le){D(O,I,m,S,P,F,j,le,0,0,0),j.readPixels(0,0,O,I,j.RGBA,j.UNSIGNED_BYTE,B)})})});for(var L=new Uint8Array(O*I),K=0,ee=0;K<B.length;K+=4)L[ee++]=B[K];return L}function A(O,I,m,S,P,F,E,W,B,L){F===void 0&&(F=1),W===void 0&&(W=0),B===void 0&&(B=0),L===void 0&&(L=0),D(O,I,m,S,P,F,E,null,W,B,L)}function D(O,I,m,S,P,F,E,W,B,L,K){F===void 0&&(F=1),B===void 0&&(B=0),L===void 0&&(L=0),K===void 0&&(K=0),N(E);var ee=[];e(m,function(Y,j,ge,de){ee.push(Y,j,ge,de)}),ee=new Float32Array(ee),s(E,function(Y){var j=Y.gl,ge=Y.isWebGL2,de=Y.getExtension,Z=Y.withProgram,te=Y.withTexture,le=Y.withTextureFramebuffer,H=Y.handleContextLoss;if(te("rawDistances",function(ne,$){(O!==ne._lastWidth||I!==ne._lastHeight)&&j.texImage2D(j.TEXTURE_2D,0,j.RGBA,ne._lastWidth=O,ne._lastHeight=I,0,j.RGBA,j.UNSIGNED_BYTE,null),Z("main",k,y,function(G){var pe=G.setAttribute,J=G.setUniform,ae=!ge&&de("ANGLE_instanced_arrays"),q=!ge&&de("EXT_blend_minmax");pe("aUV",2,j.STATIC_DRAW,0,_),pe("aLineSegment",4,j.DYNAMIC_DRAW,1,ee),J.apply(void 0,["4f","uGlyphBounds"].concat(S)),J("1f","uMaxDistance",P),J("1f","uExponent",F),le(ne,$,function(we){j.enable(j.BLEND),j.colorMask(!0,!0,!0,!0),j.viewport(0,0,O,I),j.scissor(0,0,O,I),j.blendFunc(j.ONE,j.ONE),j.blendEquationSeparate(j.FUNC_ADD,ge?j.MAX:q.MAX_EXT),j.clear(j.COLOR_BUFFER_BIT),ge?j.drawArraysInstanced(j.TRIANGLES,0,3,ee.length/4):ae.drawArraysInstancedANGLE(j.TRIANGLES,0,3,ee.length/4)})}),Z("post",r,T,function(G){G.setAttribute("aUV",2,j.STATIC_DRAW,0,_),G.setUniform("1i","tex",$),j.bindFramebuffer(j.FRAMEBUFFER,W),j.disable(j.BLEND),j.colorMask(K===0,K===1,K===2,K===3),j.viewport(B,L,O,I),j.scissor(B,L,O,I),j.drawArrays(j.TRIANGLES,0,3)})}),j.isContextLost())throw H(),new Error("webgl context lost")})}function V(O){var I=!O||O===x?R:O.canvas||O,m=U.get(I);if(m===void 0){w=!0;var S=null;try{var P=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],F=b(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,O);m=F&&P.length===F.length&&F.every(function(E,W){return E===P[W]}),m||(S="bad trial run results",console.info(P,F))}catch(E){m=!1,S=E.message}S&&console.warn("WebGL SDF generation not supported:",S),w=!1,U.set(I,m)}return m}var z=Object.freeze({__proto__:null,generate:b,generateIntoCanvas:A,generateIntoFramebuffer:D,isSupported:V});function Q(O,I,m,S,P,F){P===void 0&&(P=Math.max(S[2]-S[0],S[3]-S[1])/2),F===void 0&&(F=1);try{return b.apply(z,arguments)}catch(E){return console.info("WebGL SDF generation failed, falling back to JS",E),p.apply(M,arguments)}}function re(O,I,m,S,P,F,E,W,B,L){P===void 0&&(P=Math.max(S[2]-S[0],S[3]-S[1])/2),F===void 0&&(F=1),W===void 0&&(W=0),B===void 0&&(B=0),L===void 0&&(L=0);try{return A.apply(z,arguments)}catch(K){return console.info("WebGL SDF generation failed, falling back to JS",K),g.apply(M,arguments)}}return n.forEachPathCommand=t,n.generate=Q,n.generateIntoCanvas=re,n.javascript=M,n.pathToLineSegments=e,n.webgl=z,n.webglUtils=h,Object.defineProperty(n,"__esModule",{value:!0}),n}({});return l}function bi(){var l=function(n){var u={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},f={},t={};f.L=1,t[1]="L",Object.keys(u).forEach(function(H,ne){f[H]=1<<ne+1,t[f[H]]=H}),Object.freeze(f);var e=f.LRI|f.RLI|f.FSI,r=f.L|f.R|f.AL,a=f.B|f.S|f.WS|f.ON|f.FSI|f.LRI|f.RLI|f.PDI,o=f.BN|f.RLE|f.LRE|f.RLO|f.LRO|f.PDF,i=f.S|f.WS|f.B|e|f.PDI|o,s=null;function c(){if(!s){s=new Map;var H=function($){if(u.hasOwnProperty($)){var G=0;u[$].split(",").forEach(function(pe){var J=pe.split("+"),ae=J[0],q=J[1];ae=parseInt(ae,36),q=q?parseInt(q,36):0,s.set(G+=ae,f[$]);for(var we=0;we<q;we++)s.set(++G,f[$])})}};for(var ne in u)H(ne)}}function d(H){return c(),s.get(H.codePointAt(0))||f.L}function h(H){return t[d(H)]}var p={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function g(H,ne){var $=36,G=0,pe=new Map,J=ne&&new Map,ae;return H.split(",").forEach(function q(we){if(we.indexOf("+")!==-1)for(var oe=+we;oe--;)q(ae);else{ae=we;var ie=we.split(">"),ue=ie[0],me=ie[1];ue=String.fromCodePoint(G+=parseInt(ue,$)),me=String.fromCodePoint(G+=parseInt(me,$)),pe.set(ue,me),ne&&J.set(me,ue)}}),{map:pe,reverseMap:J}}var v,C,M;function k(){if(!v){var H=g(p.pairs,!0),ne=H.map,$=H.reverseMap;v=ne,C=$,M=g(p.canonical,!1).map}}function y(H){return k(),v.get(H)||null}function T(H){return k(),C.get(H)||null}function _(H){return k(),M.get(H)||null}var x=f.L,w=f.R,R=f.EN,U=f.ES,N=f.ET,b=f.AN,A=f.CS,D=f.B,V=f.S,z=f.ON,Q=f.BN,re=f.NSM,O=f.AL,I=f.LRO,m=f.RLO,S=f.LRE,P=f.RLE,F=f.PDF,E=f.LRI,W=f.RLI,B=f.FSI,L=f.PDI;function K(H,ne){for(var $=125,G=new Uint32Array(H.length),pe=0;pe<H.length;pe++)G[pe]=d(H[pe]);var J=new Map;function ae(Le,He){var ze=G[Le];G[Le]=He,J.set(ze,J.get(ze)-1),ze&a&&J.set(a,J.get(a)-1),J.set(He,(J.get(He)||0)+1),He&a&&J.set(a,(J.get(a)||0)+1)}for(var q=new Uint8Array(H.length),we=new Map,oe=[],ie=null,ue=0;ue<H.length;ue++)ie||oe.push(ie={start:ue,end:H.length-1,level:ne==="rtl"?1:ne==="ltr"?0:yr(ue,!1)}),G[ue]&D&&(ie.end=ue,ie=null);for(var me=P|S|m|I|e|L|F|D,ke=function(Le){return Le+(Le&1?1:2)},Ee=function(Le){return Le+(Le&1?2:1)},be=0;be<oe.length;be++){ie=oe[be];var ye=[{_level:ie.level,_override:0,_isolate:0}],fe=void 0,Ue=0,Ce=0,Oe=0;J.clear();for(var Te=ie.start;Te<=ie.end;Te++){var he=G[Te];if(fe=ye[ye.length-1],J.set(he,(J.get(he)||0)+1),he&a&&J.set(a,(J.get(a)||0)+1),he&me)if(he&(P|S)){q[Te]=fe._level;var Se=(he===P?Ee:ke)(fe._level);Se<=$&&!Ue&&!Ce?ye.push({_level:Se,_override:0,_isolate:0}):Ue||Ce++}else if(he&(m|I)){q[Te]=fe._level;var tt=(he===m?Ee:ke)(fe._level);tt<=$&&!Ue&&!Ce?ye.push({_level:tt,_override:he&m?w:x,_isolate:0}):Ue||Ce++}else if(he&e){he&B&&(he=yr(Te+1,!0)===1?W:E),q[Te]=fe._level,fe._override&&ae(Te,fe._override);var Me=(he===W?Ee:ke)(fe._level);Me<=$&&Ue===0&&Ce===0?(Oe++,ye.push({_level:Me,_override:0,_isolate:1,_isolInitIndex:Te})):Ue++}else if(he&L){if(Ue>0)Ue--;else if(Oe>0){for(Ce=0;!ye[ye.length-1]._isolate;)ye.pop();var xe=ye[ye.length-1]._isolInitIndex;xe!=null&&(we.set(xe,Te),we.set(Te,xe)),ye.pop(),Oe--}fe=ye[ye.length-1],q[Te]=fe._level,fe._override&&ae(Te,fe._override)}else he&F?(Ue===0&&(Ce>0?Ce--:!fe._isolate&&ye.length>1&&(ye.pop(),fe=ye[ye.length-1])),q[Te]=fe._level):he&D&&(q[Te]=ie.level);else q[Te]=fe._level,fe._override&&he!==Q&&ae(Te,fe._override)}for(var Pe=[],_e=null,ve=ie.start;ve<=ie.end;ve++){var De=G[ve];if(!(De&o)){var Ie=q[ve],Be=De&e,Ae=De===L;_e&&Ie===_e._level?(_e._end=ve,_e._endsWithIsolInit=Be):Pe.push(_e={_start:ve,_end:ve,_level:Ie,_startsWithPDI:Ae,_endsWithIsolInit:Be})}}for(var Ne=[],nt=0;nt<Pe.length;nt++){var Je=Pe[nt];if(!Je._startsWithPDI||Je._startsWithPDI&&!we.has(Je._start)){for(var rt=[_e=Je],st=void 0;_e&&_e._endsWithIsolInit&&(st=we.get(_e._end))!=null;)for(var Ze=nt+1;Ze<Pe.length;Ze++)if(Pe[Ze]._start===st){rt.push(_e=Pe[Ze]);break}for(var Ge=[],lt=0;lt<rt.length;lt++)for(var $n=rt[lt],pn=$n._start;pn<=$n._end;pn++)Ge.push(pn);for(var Wo=q[Ge[0]],er=ie.level,Xt=Ge[0]-1;Xt>=0;Xt--)if(!(G[Xt]&o)){er=q[Xt];break}var mn=Ge[Ge.length-1],jo=q[mn],tr=ie.level;if(!(G[mn]&e)){for(var Kt=mn+1;Kt<=ie.end;Kt++)if(!(G[Kt]&o)){tr=q[Kt];break}}Ne.push({_seqIndices:Ge,_sosType:Math.max(er,Wo)%2?w:x,_eosType:Math.max(tr,jo)%2?w:x})}}for(var vn=0;vn<Ne.length;vn++){var gn=Ne[vn],se=gn._seqIndices,kt=gn._sosType,No=gn._eosType,pt=q[se[0]]&1?w:x;if(J.get(re))for(var qt=0;qt<se.length;qt++){var nr=se[qt];if(G[nr]&re){for(var bn=kt,Jt=qt-1;Jt>=0;Jt--)if(!(G[se[Jt]]&o)){bn=G[se[Jt]];break}ae(nr,bn&(e|L)?z:bn)}}if(J.get(R))for(var Zt=0;Zt<se.length;Zt++){var rr=se[Zt];if(G[rr]&R)for(var Qt=Zt-1;Qt>=-1;Qt--){var or=Qt===-1?kt:G[se[Qt]];if(or&r){or===O&&ae(rr,b);break}}}if(J.get(O))for(var yn=0;yn<se.length;yn++){var ar=se[yn];G[ar]&O&&ae(ar,w)}if(J.get(U)||J.get(A))for(var Tt=1;Tt<se.length-1;Tt++){var xn=se[Tt];if(G[xn]&(U|A)){for(var mt=0,wn=0,Sn=Tt-1;Sn>=0&&(mt=G[se[Sn]],!!(mt&o));Sn--);for(var Mn=Tt+1;Mn<se.length&&(wn=G[se[Mn]],!!(wn&o));Mn++);mt===wn&&(G[xn]===U?mt===R:mt&(R|b))&&ae(xn,mt)}}if(J.get(R))for(var Ke=0;Ke<se.length;Ke++){var Vo=se[Ke];if(G[Vo]&R){for(var $t=Ke-1;$t>=0&&G[se[$t]]&(N|o);$t--)ae(se[$t],R);for(Ke++;Ke<se.length&&G[se[Ke]]&(N|o|R);Ke++)G[se[Ke]]!==R&&ae(se[Ke],R)}}if(J.get(N)||J.get(U)||J.get(A))for(var Ct=0;Ct<se.length;Ct++){var ir=se[Ct];if(G[ir]&(N|U|A)){ae(ir,z);for(var en=Ct-1;en>=0&&G[se[en]]&o;en--)ae(se[en],z);for(var tn=Ct+1;tn<se.length&&G[se[tn]]&o;tn++)ae(se[tn],z)}}if(J.get(R))for(var kn=0,sr=kt;kn<se.length;kn++){var lr=se[kn],Tn=G[lr];Tn&R?sr===x&&ae(lr,x):Tn&r&&(sr=Tn)}if(J.get(a)){var _t=w|R|b,fr=_t|x,nn=[];{for(var vt=[],gt=0;gt<se.length;gt++)if(G[se[gt]]&a){var Dt=H[se[gt]],ur=void 0;if(y(Dt)!==null)if(vt.length<63)vt.push({char:Dt,seqIndex:gt});else break;else if((ur=T(Dt))!==null)for(var Et=vt.length-1;Et>=0;Et--){var Cn=vt[Et].char;if(Cn===ur||Cn===T(_(Dt))||y(_(Cn))===Dt){nn.push([vt[Et].seqIndex,gt]),vt.length=Et;break}}}nn.sort(function(Le,He){return Le[0]-He[0]})}for(var _n=0;_n<nn.length;_n++){for(var cr=nn[_n],rn=cr[0],Dn=cr[1],dr=!1,Ve=0,En=rn+1;En<Dn;En++){var hr=se[En];if(G[hr]&fr){dr=!0;var pr=G[hr]&_t?w:x;if(pr===pt){Ve=pr;break}}}if(dr&&!Ve){Ve=kt;for(var Un=rn-1;Un>=0;Un--){var mr=se[Un];if(G[mr]&fr){var vr=G[mr]&_t?w:x;vr!==pt?Ve=vr:Ve=pt;break}}}if(Ve){if(G[se[rn]]=G[se[Dn]]=Ve,Ve!==pt){for(var Ut=rn+1;Ut<se.length;Ut++)if(!(G[se[Ut]]&o)){d(H[se[Ut]])&re&&(G[se[Ut]]=Ve);break}}if(Ve!==pt){for(var Pt=Dn+1;Pt<se.length;Pt++)if(!(G[se[Pt]]&o)){d(H[se[Pt]])&re&&(G[se[Pt]]=Ve);break}}}}for(var ot=0;ot<se.length;ot++)if(G[se[ot]]&a){for(var gr=ot,Pn=ot,An=kt,At=ot-1;At>=0;At--)if(G[se[At]]&o)gr=At;else{An=G[se[At]]&_t?w:x;break}for(var br=No,Ft=ot+1;Ft<se.length;Ft++)if(G[se[Ft]]&(a|o))Pn=Ft;else{br=G[se[Ft]]&_t?w:x;break}for(var Fn=gr;Fn<=Pn;Fn++)G[se[Fn]]=An===br?An:pt;ot=Pn}}}for(var We=ie.start;We<=ie.end;We++){var Ho=q[We],on=G[We];if(Ho&1?on&(x|R|b)&&q[We]++:on&w?q[We]++:on&(b|R)&&(q[We]+=2),on&o&&(q[We]=We===0?ie.level:q[We-1]),We===ie.end||d(H[We])&(V|D))for(var an=We;an>=0&&d(H[an])&i;an--)q[an]=ie.level}}return{levels:q,paragraphs:oe};function yr(Le,He){for(var ze=Le;ze<H.length;ze++){var at=G[ze];if(at&(w|O))return 1;if(at&(D|x)||He&&at===L)return 0;if(at&e){var xr=Yo(ze);ze=xr===-1?H.length:xr}}return 0}function Yo(Le){for(var He=1,ze=Le+1;ze<H.length;ze++){var at=G[ze];if(at&D)break;if(at&L){if(--He===0)return ze}else at&e&&He++}return-1}}var ee="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",Y;function j(){if(!Y){var H=g(ee,!0),ne=H.map,$=H.reverseMap;$.forEach(function(G,pe){ne.set(pe,G)}),Y=ne}}function ge(H){return j(),Y.get(H)||null}function de(H,ne,$,G){var pe=H.length;$=Math.max(0,$==null?0:+$),G=Math.min(pe-1,G==null?pe-1:+G);for(var J=new Map,ae=$;ae<=G;ae++)if(ne[ae]&1){var q=ge(H[ae]);q!==null&&J.set(ae,q)}return J}function Z(H,ne,$,G){var pe=H.length;$=Math.max(0,$==null?0:+$),G=Math.min(pe-1,G==null?pe-1:+G);var J=[];return ne.paragraphs.forEach(function(ae){var q=Math.max($,ae.start),we=Math.min(G,ae.end);if(q<we){for(var oe=ne.levels.slice(q,we+1),ie=we;ie>=q&&d(H[ie])&i;ie--)oe[ie]=ae.level;for(var ue=ae.level,me=1/0,ke=0;ke<oe.length;ke++){var Ee=oe[ke];Ee>ue&&(ue=Ee),Ee<me&&(me=Ee|1)}for(var be=ue;be>=me;be--)for(var ye=0;ye<oe.length;ye++)if(oe[ye]>=be){for(var fe=ye;ye+1<oe.length&&oe[ye+1]>=be;)ye++;ye>fe&&J.push([fe+q,ye+q])}}}),J}function te(H,ne,$,G){var pe=le(H,ne,$,G),J=[].concat(H);return pe.forEach(function(ae,q){J[q]=(ne.levels[ae]&1?ge(H[ae]):null)||H[ae]}),J.join("")}function le(H,ne,$,G){for(var pe=Z(H,ne,$,G),J=[],ae=0;ae<H.length;ae++)J[ae]=ae;return pe.forEach(function(q){for(var we=q[0],oe=q[1],ie=J.slice(we,oe+1),ue=ie.length;ue--;)J[oe-ue]=ie[ue]}),J}return n.closingToOpeningBracket=T,n.getBidiCharType=d,n.getBidiCharTypeName=h,n.getCanonicalBracket=_,n.getEmbeddingLevels=K,n.getMirroredCharacter=ge,n.getMirroredCharactersMap=de,n.getReorderSegments=Z,n.getReorderedIndices=le,n.getReorderedString=te,n.openingToClosingBracket=y,Object.defineProperty(n,"__esModule",{value:!0}),n}({});return l}const Eo=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Nn(l){const n=/^[ \t]*#include +<([\w\d./]+)>/gm;function u(f,t){let e=va[t];return e?Nn(e):f}return l.replace(n,u)}const Re=[];for(let l=0;l<256;l++)Re[l]=(l<16?"0":"")+l.toString(16);function yi(){const l=Math.random()*4294967295|0,n=Math.random()*4294967295|0,u=Math.random()*4294967295|0,f=Math.random()*4294967295|0;return(Re[l&255]+Re[l>>8&255]+Re[l>>16&255]+Re[l>>24&255]+"-"+Re[n&255]+Re[n>>8&255]+"-"+Re[n>>16&15|64]+Re[n>>24&255]+"-"+Re[u&63|128]+Re[u>>8&255]+"-"+Re[u>>16&255]+Re[u>>24&255]+Re[f&255]+Re[f>>8&255]+Re[f>>16&255]+Re[f>>24&255]).toUpperCase()}const ct=Object.assign||function(){let l=arguments[0];for(let n=1,u=arguments.length;n<u;n++){let f=arguments[n];if(f)for(let t in f)Object.prototype.hasOwnProperty.call(f,t)&&(l[t]=f[t])}return l},xi=Date.now(),io=new WeakMap,so=new Map;let wi=1e10;function Vn(l,n){const u=Ti(n);let f=io.get(l);if(f||io.set(l,f=Object.create(null)),f[u])return new f[u];const t=`_onBeforeCompile${u}`,e=function(i,s){l.onBeforeCompile.call(this,i,s);const c=this.customProgramCacheKey()+"|"+i.vertexShader+"|"+i.fragmentShader;let d=so[c];if(!d){const h=Si(this,i,n,u);d=so[c]=h}i.vertexShader=d.vertexShader,i.fragmentShader=d.fragmentShader,ct(i.uniforms,this.uniforms),n.timeUniform&&(i.uniforms[n.timeUniform]={get value(){return Date.now()-xi}}),this[t]&&this[t](i)},r=function(){return a(n.chained?l:l.clone())},a=function(i){const s=Object.create(i,o);return Object.defineProperty(s,"baseMaterial",{value:l}),Object.defineProperty(s,"id",{value:wi++}),s.uuid=yi(),s.uniforms=ct({},i.uniforms,n.uniforms),s.defines=ct({},i.defines,n.defines),s.defines[`TROIKA_DERIVED_MATERIAL_${u}`]="",s.extensions=ct({},i.extensions,n.extensions),s._listeners=void 0,s},o={constructor:{value:r},isDerivedMaterial:{value:!0},type:{get:()=>l.type,set:i=>{l.type=i}},isDerivedFrom:{writable:!0,configurable:!0,value:function(i){const s=this.baseMaterial;return i===s||s.isDerivedMaterial&&s.isDerivedFrom(i)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return l.customProgramCacheKey()+"|"+u}},onBeforeCompile:{get(){return e},set(i){this[t]=i}},copy:{writable:!0,configurable:!0,value:function(i){return l.copy.call(this,i),!l.isShaderMaterial&&!l.isDerivedMaterial&&(ct(this.extensions,i.extensions),ct(this.defines,i.defines),ct(this.uniforms,ma.clone(i.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){const i=new l.constructor;return a(i).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let i=this._depthMaterial;return i||(i=this._depthMaterial=Vn(l.isDerivedMaterial?l.getDepthMaterial():new ha({depthPacking:pa}),n),i.defines.IS_DEPTH_MATERIAL="",i.uniforms=this.uniforms),i}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let i=this._distanceMaterial;return i||(i=this._distanceMaterial=Vn(l.isDerivedMaterial?l.getDistanceMaterial():new da,n),i.defines.IS_DISTANCE_MATERIAL="",i.uniforms=this.uniforms),i}},dispose:{writable:!0,configurable:!0,value(){const{_depthMaterial:i,_distanceMaterial:s}=this;i&&i.dispose(),s&&s.dispose(),l.dispose.call(this)}}};return f[u]=r,new r}function Si(l,{vertexShader:n,fragmentShader:u},f,t){let{vertexDefs:e,vertexMainIntro:r,vertexMainOutro:a,vertexTransform:o,fragmentDefs:i,fragmentMainIntro:s,fragmentMainOutro:c,fragmentColorTransform:d,customRewriter:h,timeUniform:p}=f;if(e=e||"",r=r||"",a=a||"",i=i||"",s=s||"",c=c||"",(o||h)&&(n=Nn(n)),(d||h)&&(u=u.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),u=Nn(u)),h){let g=h({vertexShader:n,fragmentShader:u});n=g.vertexShader,u=g.fragmentShader}if(d){let g=[];u=u.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,v=>(g.push(v),"")),c=`${d}
${g.join(`
`)}
${c}`}if(p){const g=`
uniform float ${p};
`;e=g+e,i=g+i}return o&&(n=`vec3 troika_position_${t};
vec3 troika_normal_${t};
vec2 troika_uv_${t};
${n}
`,e=`${e}
void troikaVertexTransform${t}(inout vec3 position, inout vec3 normal, inout vec2 uv) {
  ${o}
}
`,r=`
troika_position_${t} = vec3(position);
troika_normal_${t} = vec3(normal);
troika_uv_${t} = vec2(uv);
troikaVertexTransform${t}(troika_position_${t}, troika_normal_${t}, troika_uv_${t});
${r}
`,n=n.replace(/\b(position|normal|uv)\b/g,(g,v,C,M)=>/\battribute\s+vec[23]\s+$/.test(M.substr(0,C))?v:`troika_${v}_${t}`),l.map&&l.map.channel>0||(n=n.replace(/\bMAP_UV\b/g,`troika_uv_${t}`))),n=lo(n,t,e,r,a),u=lo(u,t,i,s,c),{vertexShader:n,fragmentShader:u}}function lo(l,n,u,f,t){return(f||t||u)&&(l=l.replace(Eo,`
${u}
void troikaOrigMain${n}() {`),l+=`
void main() {
  ${f}
  troikaOrigMain${n}();
  ${t}
}`),l}function Mi(l,n){return l==="uniforms"?void 0:typeof n=="function"?n.toString():n}let ki=0;const fo=new Map;function Ti(l){const n=JSON.stringify(l,Mi);let u=fo.get(n);return u==null&&fo.set(n,u=++ki),u}/*!
Custom build of Typr.ts (https://github.com/fredli74/Typr.ts) for use in Troika text rendering.
Original MIT license applies: https://github.com/fredli74/Typr.ts/blob/master/LICENSE
*/function Ci(){return typeof window>"u"&&(self.window=self),function(l){var n={parse:function(t){var e=n._bin,r=new Uint8Array(t);if(e.readASCII(r,0,4)=="ttcf"){var a=4;e.readUshort(r,a),a+=2,e.readUshort(r,a),a+=2;var o=e.readUint(r,a);a+=4;for(var i=[],s=0;s<o;s++){var c=e.readUint(r,a);a+=4,i.push(n._readFont(r,c))}return i}return[n._readFont(r,0)]},_readFont:function(t,e){var r=n._bin,a=e;r.readFixed(t,e),e+=4;var o=r.readUshort(t,e);e+=2,r.readUshort(t,e),e+=2,r.readUshort(t,e),e+=2,r.readUshort(t,e),e+=2;for(var i=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],s={_data:t,_offset:a},c={},d=0;d<o;d++){var h=r.readASCII(t,e,4);e+=4,r.readUint(t,e),e+=4;var p=r.readUint(t,e);e+=4;var g=r.readUint(t,e);e+=4,c[h]={offset:p,length:g}}for(d=0;d<i.length;d++){var v=i[d];c[v]&&(s[v.trim()]=n[v.trim()].parse(t,c[v].offset,c[v].length,s))}return s},_tabOffset:function(t,e,r){for(var a=n._bin,o=a.readUshort(t,r+4),i=r+12,s=0;s<o;s++){var c=a.readASCII(t,i,4);i+=4,a.readUint(t,i),i+=4;var d=a.readUint(t,i);if(i+=4,a.readUint(t,i),i+=4,c==e)return d}return 0}};n._bin={readFixed:function(t,e){return(t[e]<<8|t[e+1])+(t[e+2]<<8|t[e+3])/65540},readF2dot14:function(t,e){return n._bin.readShort(t,e)/16384},readInt:function(t,e){return n._bin._view(t).getInt32(e)},readInt8:function(t,e){return n._bin._view(t).getInt8(e)},readShort:function(t,e){return n._bin._view(t).getInt16(e)},readUshort:function(t,e){return n._bin._view(t).getUint16(e)},readUshorts:function(t,e,r){for(var a=[],o=0;o<r;o++)a.push(n._bin.readUshort(t,e+2*o));return a},readUint:function(t,e){return n._bin._view(t).getUint32(e)},readUint64:function(t,e){return 4294967296*n._bin.readUint(t,e)+n._bin.readUint(t,e+4)},readASCII:function(t,e,r){for(var a="",o=0;o<r;o++)a+=String.fromCharCode(t[e+o]);return a},readUnicode:function(t,e,r){for(var a="",o=0;o<r;o++){var i=t[e++]<<8|t[e++];a+=String.fromCharCode(i)}return a},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(t,e,r){var a=n._bin._tdec;return a&&e==0&&r==t.length?a.decode(t):n._bin.readASCII(t,e,r)},readBytes:function(t,e,r){for(var a=[],o=0;o<r;o++)a.push(t[e+o]);return a},readASCIIArray:function(t,e,r){for(var a=[],o=0;o<r;o++)a.push(String.fromCharCode(t[e+o]));return a},_view:function(t){return t._dataView||(t._dataView=t.buffer?new DataView(t.buffer,t.byteOffset,t.byteLength):new DataView(new Uint8Array(t).buffer))}},n._lctf={},n._lctf.parse=function(t,e,r,a,o){var i=n._bin,s={},c=e;i.readFixed(t,e),e+=4;var d=i.readUshort(t,e);e+=2;var h=i.readUshort(t,e);e+=2;var p=i.readUshort(t,e);return e+=2,s.scriptList=n._lctf.readScriptList(t,c+d),s.featureList=n._lctf.readFeatureList(t,c+h),s.lookupList=n._lctf.readLookupList(t,c+p,o),s},n._lctf.readLookupList=function(t,e,r){var a=n._bin,o=e,i=[],s=a.readUshort(t,e);e+=2;for(var c=0;c<s;c++){var d=a.readUshort(t,e);e+=2;var h=n._lctf.readLookupTable(t,o+d,r);i.push(h)}return i},n._lctf.readLookupTable=function(t,e,r){var a=n._bin,o=e,i={tabs:[]};i.ltype=a.readUshort(t,e),e+=2,i.flag=a.readUshort(t,e),e+=2;var s=a.readUshort(t,e);e+=2;for(var c=i.ltype,d=0;d<s;d++){var h=a.readUshort(t,e);e+=2;var p=r(t,c,o+h,i);i.tabs.push(p)}return i},n._lctf.numOfOnes=function(t){for(var e=0,r=0;r<32;r++)t>>>r&1&&e++;return e},n._lctf.readClassDef=function(t,e){var r=n._bin,a=[],o=r.readUshort(t,e);if(e+=2,o==1){var i=r.readUshort(t,e);e+=2;var s=r.readUshort(t,e);e+=2;for(var c=0;c<s;c++)a.push(i+c),a.push(i+c),a.push(r.readUshort(t,e)),e+=2}if(o==2){var d=r.readUshort(t,e);for(e+=2,c=0;c<d;c++)a.push(r.readUshort(t,e)),e+=2,a.push(r.readUshort(t,e)),e+=2,a.push(r.readUshort(t,e)),e+=2}return a},n._lctf.getInterval=function(t,e){for(var r=0;r<t.length;r+=3){var a=t[r],o=t[r+1];if(t[r+2],a<=e&&e<=o)return r}return-1},n._lctf.readCoverage=function(t,e){var r=n._bin,a={};a.fmt=r.readUshort(t,e),e+=2;var o=r.readUshort(t,e);return e+=2,a.fmt==1&&(a.tab=r.readUshorts(t,e,o)),a.fmt==2&&(a.tab=r.readUshorts(t,e,3*o)),a},n._lctf.coverageIndex=function(t,e){var r=t.tab;if(t.fmt==1)return r.indexOf(e);if(t.fmt==2){var a=n._lctf.getInterval(r,e);if(a!=-1)return r[a+2]+(e-r[a])}return-1},n._lctf.readFeatureList=function(t,e){var r=n._bin,a=e,o=[],i=r.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var c=r.readASCII(t,e,4);e+=4;var d=r.readUshort(t,e);e+=2;var h=n._lctf.readFeatureTable(t,a+d);h.tag=c.trim(),o.push(h)}return o},n._lctf.readFeatureTable=function(t,e){var r=n._bin,a=e,o={},i=r.readUshort(t,e);e+=2,i>0&&(o.featureParams=a+i);var s=r.readUshort(t,e);e+=2,o.tab=[];for(var c=0;c<s;c++)o.tab.push(r.readUshort(t,e+2*c));return o},n._lctf.readScriptList=function(t,e){var r=n._bin,a=e,o={},i=r.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var c=r.readASCII(t,e,4);e+=4;var d=r.readUshort(t,e);e+=2,o[c.trim()]=n._lctf.readScriptTable(t,a+d)}return o},n._lctf.readScriptTable=function(t,e){var r=n._bin,a=e,o={},i=r.readUshort(t,e);e+=2,i>0&&(o.default=n._lctf.readLangSysTable(t,a+i));var s=r.readUshort(t,e);e+=2;for(var c=0;c<s;c++){var d=r.readASCII(t,e,4);e+=4;var h=r.readUshort(t,e);e+=2,o[d.trim()]=n._lctf.readLangSysTable(t,a+h)}return o},n._lctf.readLangSysTable=function(t,e){var r=n._bin,a={};r.readUshort(t,e),e+=2,a.reqFeature=r.readUshort(t,e),e+=2;var o=r.readUshort(t,e);return e+=2,a.features=r.readUshorts(t,e,o),a},n.CFF={},n.CFF.parse=function(t,e,r){var a=n._bin;(t=new Uint8Array(t.buffer,e,r))[e=0],t[++e],t[++e],t[++e],e++;var o=[];e=n.CFF.readIndex(t,e,o);for(var i=[],s=0;s<o.length-1;s++)i.push(a.readASCII(t,e+o[s],o[s+1]-o[s]));e+=o[o.length-1];var c=[];e=n.CFF.readIndex(t,e,c);var d=[];for(s=0;s<c.length-1;s++)d.push(n.CFF.readDict(t,e+c[s],e+c[s+1]));e+=c[c.length-1];var h=d[0],p=[];e=n.CFF.readIndex(t,e,p);var g=[];for(s=0;s<p.length-1;s++)g.push(a.readASCII(t,e+p[s],p[s+1]-p[s]));if(e+=p[p.length-1],n.CFF.readSubrs(t,e,h),h.CharStrings){e=h.CharStrings,p=[],e=n.CFF.readIndex(t,e,p);var v=[];for(s=0;s<p.length-1;s++)v.push(a.readBytes(t,e+p[s],p[s+1]-p[s]));h.CharStrings=v}if(h.ROS){e=h.FDArray;var C=[];for(e=n.CFF.readIndex(t,e,C),h.FDArray=[],s=0;s<C.length-1;s++){var M=n.CFF.readDict(t,e+C[s],e+C[s+1]);n.CFF._readFDict(t,M,g),h.FDArray.push(M)}e+=C[C.length-1],e=h.FDSelect,h.FDSelect=[];var k=t[e];if(e++,k!=3)throw k;var y=a.readUshort(t,e);for(e+=2,s=0;s<y+1;s++)h.FDSelect.push(a.readUshort(t,e),t[e+2]),e+=3}return h.Encoding&&(h.Encoding=n.CFF.readEncoding(t,h.Encoding,h.CharStrings.length)),h.charset&&(h.charset=n.CFF.readCharset(t,h.charset,h.CharStrings.length)),n.CFF._readFDict(t,h,g),h},n.CFF._readFDict=function(t,e,r){var a;for(var o in e.Private&&(a=e.Private[1],e.Private=n.CFF.readDict(t,a,a+e.Private[0]),e.Private.Subrs&&n.CFF.readSubrs(t,a+e.Private.Subrs,e.Private)),e)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(o)!=-1&&(e[o]=r[e[o]-426+35])},n.CFF.readSubrs=function(t,e,r){var a=n._bin,o=[];e=n.CFF.readIndex(t,e,o);var i,s=o.length;i=s<1240?107:s<33900?1131:32768,r.Bias=i,r.Subrs=[];for(var c=0;c<o.length-1;c++)r.Subrs.push(a.readBytes(t,e+o[c],o[c+1]-o[c]))},n.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],n.CFF.glyphByUnicode=function(t,e){for(var r=0;r<t.charset.length;r++)if(t.charset[r]==e)return r;return-1},n.CFF.glyphBySE=function(t,e){return e<0||e>255?-1:n.CFF.glyphByUnicode(t,n.CFF.tableSE[e])},n.CFF.readEncoding=function(t,e,r){n._bin;var a=[".notdef"],o=t[e];if(e++,o!=0)throw"error: unknown encoding format: "+o;var i=t[e];e++;for(var s=0;s<i;s++)a.push(t[e+s]);return a},n.CFF.readCharset=function(t,e,r){var a=n._bin,o=[".notdef"],i=t[e];if(e++,i==0)for(var s=0;s<r;s++){var c=a.readUshort(t,e);e+=2,o.push(c)}else{if(i!=1&&i!=2)throw"error: format: "+i;for(;o.length<r;){c=a.readUshort(t,e),e+=2;var d=0;for(i==1?(d=t[e],e++):(d=a.readUshort(t,e),e+=2),s=0;s<=d;s++)o.push(c),c++}}return o},n.CFF.readIndex=function(t,e,r){var a=n._bin,o=a.readUshort(t,e)+1,i=t[e+=2];if(e++,i==1)for(var s=0;s<o;s++)r.push(t[e+s]);else if(i==2)for(s=0;s<o;s++)r.push(a.readUshort(t,e+2*s));else if(i==3)for(s=0;s<o;s++)r.push(16777215&a.readUint(t,e+3*s-1));else if(o!=1)throw"unsupported offset size: "+i+", count: "+o;return(e+=o*i)-1},n.CFF.getCharString=function(t,e,r){var a=n._bin,o=t[e],i=t[e+1];t[e+2],t[e+3],t[e+4];var s=1,c=null,d=null;o<=20&&(c=o,s=1),o==12&&(c=100*o+i,s=2),21<=o&&o<=27&&(c=o,s=1),o==28&&(d=a.readShort(t,e+1),s=3),29<=o&&o<=31&&(c=o,s=1),32<=o&&o<=246&&(d=o-139,s=1),247<=o&&o<=250&&(d=256*(o-247)+i+108,s=2),251<=o&&o<=254&&(d=256*-(o-251)-i-108,s=2),o==255&&(d=a.readInt(t,e+1)/65535,s=5),r.val=d??"o"+c,r.size=s},n.CFF.readCharString=function(t,e,r){for(var a=e+r,o=n._bin,i=[];e<a;){var s=t[e],c=t[e+1];t[e+2],t[e+3],t[e+4];var d=1,h=null,p=null;s<=20&&(h=s,d=1),s==12&&(h=100*s+c,d=2),s!=19&&s!=20||(h=s,d=2),21<=s&&s<=27&&(h=s,d=1),s==28&&(p=o.readShort(t,e+1),d=3),29<=s&&s<=31&&(h=s,d=1),32<=s&&s<=246&&(p=s-139,d=1),247<=s&&s<=250&&(p=256*(s-247)+c+108,d=2),251<=s&&s<=254&&(p=256*-(s-251)-c-108,d=2),s==255&&(p=o.readInt(t,e+1)/65535,d=5),i.push(p??"o"+h),e+=d}return i},n.CFF.readDict=function(t,e,r){for(var a=n._bin,o={},i=[];e<r;){var s=t[e],c=t[e+1];t[e+2],t[e+3],t[e+4];var d=1,h=null,p=null;if(s==28&&(p=a.readShort(t,e+1),d=3),s==29&&(p=a.readInt(t,e+1),d=5),32<=s&&s<=246&&(p=s-139,d=1),247<=s&&s<=250&&(p=256*(s-247)+c+108,d=2),251<=s&&s<=254&&(p=256*-(s-251)-c-108,d=2),s==255)throw p=a.readInt(t,e+1)/65535,d=5,"unknown number";if(s==30){var g=[];for(d=1;;){var v=t[e+d];d++;var C=v>>4,M=15&v;if(C!=15&&g.push(C),M!=15&&g.push(M),M==15)break}for(var k="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],T=0;T<g.length;T++)k+=y[g[T]];p=parseFloat(k)}s<=21&&(h=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][s],d=1,s==12&&(h=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][c],d=2)),h!=null?(o[h]=i.length==1?i[0]:i,i=[]):i.push(p),e+=d}return o},n.cmap={},n.cmap.parse=function(t,e,r){t=new Uint8Array(t.buffer,e,r),e=0;var a=n._bin,o={};a.readUshort(t,e),e+=2;var i=a.readUshort(t,e);e+=2;var s=[];o.tables=[];for(var c=0;c<i;c++){var d=a.readUshort(t,e);e+=2;var h=a.readUshort(t,e);e+=2;var p=a.readUint(t,e);e+=4;var g="p"+d+"e"+h,v=s.indexOf(p);if(v==-1){var C;v=o.tables.length,s.push(p);var M=a.readUshort(t,p);M==0?C=n.cmap.parse0(t,p):M==4?C=n.cmap.parse4(t,p):M==6?C=n.cmap.parse6(t,p):M==12?C=n.cmap.parse12(t,p):console.debug("unknown format: "+M,d,h,p),o.tables.push(C)}if(o[g]!=null)throw"multiple tables for one platform+encoding";o[g]=v}return o},n.cmap.parse0=function(t,e){var r=n._bin,a={};a.format=r.readUshort(t,e),e+=2;var o=r.readUshort(t,e);e+=2,r.readUshort(t,e),e+=2,a.map=[];for(var i=0;i<o-6;i++)a.map.push(t[e+i]);return a},n.cmap.parse4=function(t,e){var r=n._bin,a=e,o={};o.format=r.readUshort(t,e),e+=2;var i=r.readUshort(t,e);e+=2,r.readUshort(t,e),e+=2;var s=r.readUshort(t,e);e+=2;var c=s/2;o.searchRange=r.readUshort(t,e),e+=2,o.entrySelector=r.readUshort(t,e),e+=2,o.rangeShift=r.readUshort(t,e),e+=2,o.endCount=r.readUshorts(t,e,c),e+=2*c,e+=2,o.startCount=r.readUshorts(t,e,c),e+=2*c,o.idDelta=[];for(var d=0;d<c;d++)o.idDelta.push(r.readShort(t,e)),e+=2;for(o.idRangeOffset=r.readUshorts(t,e,c),e+=2*c,o.glyphIdArray=[];e<a+i;)o.glyphIdArray.push(r.readUshort(t,e)),e+=2;return o},n.cmap.parse6=function(t,e){var r=n._bin,a={};a.format=r.readUshort(t,e),e+=2,r.readUshort(t,e),e+=2,r.readUshort(t,e),e+=2,a.firstCode=r.readUshort(t,e),e+=2;var o=r.readUshort(t,e);e+=2,a.glyphIdArray=[];for(var i=0;i<o;i++)a.glyphIdArray.push(r.readUshort(t,e)),e+=2;return a},n.cmap.parse12=function(t,e){var r=n._bin,a={};a.format=r.readUshort(t,e),e+=2,e+=2,r.readUint(t,e),e+=4,r.readUint(t,e),e+=4;var o=r.readUint(t,e);e+=4,a.groups=[];for(var i=0;i<o;i++){var s=e+12*i,c=r.readUint(t,s+0),d=r.readUint(t,s+4),h=r.readUint(t,s+8);a.groups.push([c,d,h])}return a},n.glyf={},n.glyf.parse=function(t,e,r,a){for(var o=[],i=0;i<a.maxp.numGlyphs;i++)o.push(null);return o},n.glyf._parseGlyf=function(t,e){var r=n._bin,a=t._data,o=n._tabOffset(a,"glyf",t._offset)+t.loca[e];if(t.loca[e]==t.loca[e+1])return null;var i={};if(i.noc=r.readShort(a,o),o+=2,i.xMin=r.readShort(a,o),o+=2,i.yMin=r.readShort(a,o),o+=2,i.xMax=r.readShort(a,o),o+=2,i.yMax=r.readShort(a,o),o+=2,i.xMin>=i.xMax||i.yMin>=i.yMax)return null;if(i.noc>0){i.endPts=[];for(var s=0;s<i.noc;s++)i.endPts.push(r.readUshort(a,o)),o+=2;var c=r.readUshort(a,o);if(o+=2,a.length-o<c)return null;i.instructions=r.readBytes(a,o,c),o+=c;var d=i.endPts[i.noc-1]+1;for(i.flags=[],s=0;s<d;s++){var h=a[o];if(o++,i.flags.push(h),(8&h)!=0){var p=a[o];o++;for(var g=0;g<p;g++)i.flags.push(h),s++}}for(i.xs=[],s=0;s<d;s++){var v=(2&i.flags[s])!=0,C=(16&i.flags[s])!=0;v?(i.xs.push(C?a[o]:-a[o]),o++):C?i.xs.push(0):(i.xs.push(r.readShort(a,o)),o+=2)}for(i.ys=[],s=0;s<d;s++)v=(4&i.flags[s])!=0,C=(32&i.flags[s])!=0,v?(i.ys.push(C?a[o]:-a[o]),o++):C?i.ys.push(0):(i.ys.push(r.readShort(a,o)),o+=2);var M=0,k=0;for(s=0;s<d;s++)M+=i.xs[s],k+=i.ys[s],i.xs[s]=M,i.ys[s]=k}else{var y;i.parts=[];do{y=r.readUshort(a,o),o+=2;var T={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(i.parts.push(T),T.glyphIndex=r.readUshort(a,o),o+=2,1&y){var _=r.readShort(a,o);o+=2;var x=r.readShort(a,o);o+=2}else _=r.readInt8(a,o),o++,x=r.readInt8(a,o),o++;2&y?(T.m.tx=_,T.m.ty=x):(T.p1=_,T.p2=x),8&y?(T.m.a=T.m.d=r.readF2dot14(a,o),o+=2):64&y?(T.m.a=r.readF2dot14(a,o),o+=2,T.m.d=r.readF2dot14(a,o),o+=2):128&y&&(T.m.a=r.readF2dot14(a,o),o+=2,T.m.b=r.readF2dot14(a,o),o+=2,T.m.c=r.readF2dot14(a,o),o+=2,T.m.d=r.readF2dot14(a,o),o+=2)}while(32&y);if(256&y){var w=r.readUshort(a,o);for(o+=2,i.instr=[],s=0;s<w;s++)i.instr.push(a[o]),o++}}return i},n.GDEF={},n.GDEF.parse=function(t,e,r,a){var o=e;e+=4;var i=n._bin.readUshort(t,e);return{glyphClassDef:i===0?null:n._lctf.readClassDef(t,o+i)}},n.GPOS={},n.GPOS.parse=function(t,e,r,a){return n._lctf.parse(t,e,r,a,n.GPOS.subt)},n.GPOS.subt=function(t,e,r,a){var o=n._bin,i=r,s={};if(s.fmt=o.readUshort(t,r),r+=2,e==1||e==2||e==3||e==7||e==8&&s.fmt<=2){var c=o.readUshort(t,r);r+=2,s.coverage=n._lctf.readCoverage(t,c+i)}if(e==1&&s.fmt==1){var d=o.readUshort(t,r);r+=2,d!=0&&(s.pos=n.GPOS.readValueRecord(t,r,d))}else if(e==2&&s.fmt>=1&&s.fmt<=2){d=o.readUshort(t,r),r+=2;var h=o.readUshort(t,r);r+=2;var p=n._lctf.numOfOnes(d),g=n._lctf.numOfOnes(h);if(s.fmt==1){s.pairsets=[];var v=o.readUshort(t,r);r+=2;for(var C=0;C<v;C++){var M=i+o.readUshort(t,r);r+=2;var k=o.readUshort(t,M);M+=2;for(var y=[],T=0;T<k;T++){var _=o.readUshort(t,M);M+=2,d!=0&&(b=n.GPOS.readValueRecord(t,M,d),M+=2*p),h!=0&&(A=n.GPOS.readValueRecord(t,M,h),M+=2*g),y.push({gid2:_,val1:b,val2:A})}s.pairsets.push(y)}}if(s.fmt==2){var x=o.readUshort(t,r);r+=2;var w=o.readUshort(t,r);r+=2;var R=o.readUshort(t,r);r+=2;var U=o.readUshort(t,r);for(r+=2,s.classDef1=n._lctf.readClassDef(t,i+x),s.classDef2=n._lctf.readClassDef(t,i+w),s.matrix=[],C=0;C<R;C++){var N=[];for(T=0;T<U;T++){var b=null,A=null;d!=0&&(b=n.GPOS.readValueRecord(t,r,d),r+=2*p),h!=0&&(A=n.GPOS.readValueRecord(t,r,h),r+=2*g),N.push({val1:b,val2:A})}s.matrix.push(N)}}}else if(e==4&&s.fmt==1)s.markCoverage=n._lctf.readCoverage(t,o.readUshort(t,r)+i),s.baseCoverage=n._lctf.readCoverage(t,o.readUshort(t,r+2)+i),s.markClassCount=o.readUshort(t,r+4),s.markArray=n.GPOS.readMarkArray(t,o.readUshort(t,r+6)+i),s.baseArray=n.GPOS.readBaseArray(t,o.readUshort(t,r+8)+i,s.markClassCount);else if(e==6&&s.fmt==1)s.mark1Coverage=n._lctf.readCoverage(t,o.readUshort(t,r)+i),s.mark2Coverage=n._lctf.readCoverage(t,o.readUshort(t,r+2)+i),s.markClassCount=o.readUshort(t,r+4),s.mark1Array=n.GPOS.readMarkArray(t,o.readUshort(t,r+6)+i),s.mark2Array=n.GPOS.readBaseArray(t,o.readUshort(t,r+8)+i,s.markClassCount);else{if(e==9&&s.fmt==1){var D=o.readUshort(t,r);r+=2;var V=o.readUint(t,r);if(r+=4,a.ltype==9)a.ltype=D;else if(a.ltype!=D)throw"invalid extension substitution";return n.GPOS.subt(t,a.ltype,i+V)}console.debug("unsupported GPOS table LookupType",e,"format",s.fmt)}return s},n.GPOS.readValueRecord=function(t,e,r){var a=n._bin,o=[];return o.push(1&r?a.readShort(t,e):0),e+=1&r?2:0,o.push(2&r?a.readShort(t,e):0),e+=2&r?2:0,o.push(4&r?a.readShort(t,e):0),e+=4&r?2:0,o.push(8&r?a.readShort(t,e):0),e+=8&r?2:0,o},n.GPOS.readBaseArray=function(t,e,r){var a=n._bin,o=[],i=e,s=a.readUshort(t,e);e+=2;for(var c=0;c<s;c++){for(var d=[],h=0;h<r;h++)d.push(n.GPOS.readAnchorRecord(t,i+a.readUshort(t,e))),e+=2;o.push(d)}return o},n.GPOS.readMarkArray=function(t,e){var r=n._bin,a=[],o=e,i=r.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var c=n.GPOS.readAnchorRecord(t,r.readUshort(t,e+2)+o);c.markClass=r.readUshort(t,e),a.push(c),e+=4}return a},n.GPOS.readAnchorRecord=function(t,e){var r=n._bin,a={};return a.fmt=r.readUshort(t,e),a.x=r.readShort(t,e+2),a.y=r.readShort(t,e+4),a},n.GSUB={},n.GSUB.parse=function(t,e,r,a){return n._lctf.parse(t,e,r,a,n.GSUB.subt)},n.GSUB.subt=function(t,e,r,a){var o=n._bin,i=r,s={};if(s.fmt=o.readUshort(t,r),r+=2,e!=1&&e!=2&&e!=4&&e!=5&&e!=6)return null;if(e==1||e==2||e==4||e==5&&s.fmt<=2||e==6&&s.fmt<=2){var c=o.readUshort(t,r);r+=2,s.coverage=n._lctf.readCoverage(t,i+c)}if(e==1&&s.fmt>=1&&s.fmt<=2){if(s.fmt==1)s.delta=o.readShort(t,r),r+=2;else if(s.fmt==2){var d=o.readUshort(t,r);r+=2,s.newg=o.readUshorts(t,r,d),r+=2*s.newg.length}}else if(e==2&&s.fmt==1){d=o.readUshort(t,r),r+=2,s.seqs=[];for(var h=0;h<d;h++){var p=o.readUshort(t,r)+i;r+=2;var g=o.readUshort(t,p);s.seqs.push(o.readUshorts(t,p+2,g))}}else if(e==4)for(s.vals=[],d=o.readUshort(t,r),r+=2,h=0;h<d;h++){var v=o.readUshort(t,r);r+=2,s.vals.push(n.GSUB.readLigatureSet(t,i+v))}else if(e==5&&s.fmt==2){if(s.fmt==2){var C=o.readUshort(t,r);r+=2,s.cDef=n._lctf.readClassDef(t,i+C),s.scset=[];var M=o.readUshort(t,r);for(r+=2,h=0;h<M;h++){var k=o.readUshort(t,r);r+=2,s.scset.push(k==0?null:n.GSUB.readSubClassSet(t,i+k))}}}else if(e==6&&s.fmt==3){if(s.fmt==3){for(h=0;h<3;h++){d=o.readUshort(t,r),r+=2;for(var y=[],T=0;T<d;T++)y.push(n._lctf.readCoverage(t,i+o.readUshort(t,r+2*T)));r+=2*d,h==0&&(s.backCvg=y),h==1&&(s.inptCvg=y),h==2&&(s.ahedCvg=y)}d=o.readUshort(t,r),r+=2,s.lookupRec=n.GSUB.readSubstLookupRecords(t,r,d)}}else{if(e==7&&s.fmt==1){var _=o.readUshort(t,r);r+=2;var x=o.readUint(t,r);if(r+=4,a.ltype==9)a.ltype=_;else if(a.ltype!=_)throw"invalid extension substitution";return n.GSUB.subt(t,a.ltype,i+x)}console.debug("unsupported GSUB table LookupType",e,"format",s.fmt)}return s},n.GSUB.readSubClassSet=function(t,e){var r=n._bin.readUshort,a=e,o=[],i=r(t,e);e+=2;for(var s=0;s<i;s++){var c=r(t,e);e+=2,o.push(n.GSUB.readSubClassRule(t,a+c))}return o},n.GSUB.readSubClassRule=function(t,e){var r=n._bin.readUshort,a={},o=r(t,e),i=r(t,e+=2);e+=2,a.input=[];for(var s=0;s<o-1;s++)a.input.push(r(t,e)),e+=2;return a.substLookupRecords=n.GSUB.readSubstLookupRecords(t,e,i),a},n.GSUB.readSubstLookupRecords=function(t,e,r){for(var a=n._bin.readUshort,o=[],i=0;i<r;i++)o.push(a(t,e),a(t,e+2)),e+=4;return o},n.GSUB.readChainSubClassSet=function(t,e){var r=n._bin,a=e,o=[],i=r.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var c=r.readUshort(t,e);e+=2,o.push(n.GSUB.readChainSubClassRule(t,a+c))}return o},n.GSUB.readChainSubClassRule=function(t,e){for(var r=n._bin,a={},o=["backtrack","input","lookahead"],i=0;i<o.length;i++){var s=r.readUshort(t,e);e+=2,i==1&&s--,a[o[i]]=r.readUshorts(t,e,s),e+=2*a[o[i]].length}return s=r.readUshort(t,e),e+=2,a.subst=r.readUshorts(t,e,2*s),e+=2*a.subst.length,a},n.GSUB.readLigatureSet=function(t,e){var r=n._bin,a=e,o=[],i=r.readUshort(t,e);e+=2;for(var s=0;s<i;s++){var c=r.readUshort(t,e);e+=2,o.push(n.GSUB.readLigature(t,a+c))}return o},n.GSUB.readLigature=function(t,e){var r=n._bin,a={chain:[]};a.nglyph=r.readUshort(t,e),e+=2;var o=r.readUshort(t,e);e+=2;for(var i=0;i<o-1;i++)a.chain.push(r.readUshort(t,e)),e+=2;return a},n.head={},n.head.parse=function(t,e,r){var a=n._bin,o={};return a.readFixed(t,e),e+=4,o.fontRevision=a.readFixed(t,e),e+=4,a.readUint(t,e),e+=4,a.readUint(t,e),e+=4,o.flags=a.readUshort(t,e),e+=2,o.unitsPerEm=a.readUshort(t,e),e+=2,o.created=a.readUint64(t,e),e+=8,o.modified=a.readUint64(t,e),e+=8,o.xMin=a.readShort(t,e),e+=2,o.yMin=a.readShort(t,e),e+=2,o.xMax=a.readShort(t,e),e+=2,o.yMax=a.readShort(t,e),e+=2,o.macStyle=a.readUshort(t,e),e+=2,o.lowestRecPPEM=a.readUshort(t,e),e+=2,o.fontDirectionHint=a.readShort(t,e),e+=2,o.indexToLocFormat=a.readShort(t,e),e+=2,o.glyphDataFormat=a.readShort(t,e),e+=2,o},n.hhea={},n.hhea.parse=function(t,e,r){var a=n._bin,o={};return a.readFixed(t,e),e+=4,o.ascender=a.readShort(t,e),e+=2,o.descender=a.readShort(t,e),e+=2,o.lineGap=a.readShort(t,e),e+=2,o.advanceWidthMax=a.readUshort(t,e),e+=2,o.minLeftSideBearing=a.readShort(t,e),e+=2,o.minRightSideBearing=a.readShort(t,e),e+=2,o.xMaxExtent=a.readShort(t,e),e+=2,o.caretSlopeRise=a.readShort(t,e),e+=2,o.caretSlopeRun=a.readShort(t,e),e+=2,o.caretOffset=a.readShort(t,e),e+=2,e+=8,o.metricDataFormat=a.readShort(t,e),e+=2,o.numberOfHMetrics=a.readUshort(t,e),e+=2,o},n.hmtx={},n.hmtx.parse=function(t,e,r,a){for(var o=n._bin,i={aWidth:[],lsBearing:[]},s=0,c=0,d=0;d<a.maxp.numGlyphs;d++)d<a.hhea.numberOfHMetrics&&(s=o.readUshort(t,e),e+=2,c=o.readShort(t,e),e+=2),i.aWidth.push(s),i.lsBearing.push(c);return i},n.kern={},n.kern.parse=function(t,e,r,a){var o=n._bin,i=o.readUshort(t,e);if(e+=2,i==1)return n.kern.parseV1(t,e-2,r,a);var s=o.readUshort(t,e);e+=2;for(var c={glyph1:[],rval:[]},d=0;d<s;d++){e+=2,r=o.readUshort(t,e),e+=2;var h=o.readUshort(t,e);e+=2;var p=h>>>8;if((p&=15)!=0)throw"unknown kern table format: "+p;e=n.kern.readFormat0(t,e,c)}return c},n.kern.parseV1=function(t,e,r,a){var o=n._bin;o.readFixed(t,e),e+=4;var i=o.readUint(t,e);e+=4;for(var s={glyph1:[],rval:[]},c=0;c<i;c++){o.readUint(t,e),e+=4;var d=o.readUshort(t,e);e+=2,o.readUshort(t,e),e+=2;var h=d>>>8;if((h&=15)!=0)throw"unknown kern table format: "+h;e=n.kern.readFormat0(t,e,s)}return s},n.kern.readFormat0=function(t,e,r){var a=n._bin,o=-1,i=a.readUshort(t,e);e+=2,a.readUshort(t,e),e+=2,a.readUshort(t,e),e+=2,a.readUshort(t,e),e+=2;for(var s=0;s<i;s++){var c=a.readUshort(t,e);e+=2;var d=a.readUshort(t,e);e+=2;var h=a.readShort(t,e);e+=2,c!=o&&(r.glyph1.push(c),r.rval.push({glyph2:[],vals:[]}));var p=r.rval[r.rval.length-1];p.glyph2.push(d),p.vals.push(h),o=c}return e},n.loca={},n.loca.parse=function(t,e,r,a){var o=n._bin,i=[],s=a.head.indexToLocFormat,c=a.maxp.numGlyphs+1;if(s==0)for(var d=0;d<c;d++)i.push(o.readUshort(t,e+(d<<1))<<1);if(s==1)for(d=0;d<c;d++)i.push(o.readUint(t,e+(d<<2)));return i},n.maxp={},n.maxp.parse=function(t,e,r){var a=n._bin,o={},i=a.readUint(t,e);return e+=4,o.numGlyphs=a.readUshort(t,e),e+=2,i==65536&&(o.maxPoints=a.readUshort(t,e),e+=2,o.maxContours=a.readUshort(t,e),e+=2,o.maxCompositePoints=a.readUshort(t,e),e+=2,o.maxCompositeContours=a.readUshort(t,e),e+=2,o.maxZones=a.readUshort(t,e),e+=2,o.maxTwilightPoints=a.readUshort(t,e),e+=2,o.maxStorage=a.readUshort(t,e),e+=2,o.maxFunctionDefs=a.readUshort(t,e),e+=2,o.maxInstructionDefs=a.readUshort(t,e),e+=2,o.maxStackElements=a.readUshort(t,e),e+=2,o.maxSizeOfInstructions=a.readUshort(t,e),e+=2,o.maxComponentElements=a.readUshort(t,e),e+=2,o.maxComponentDepth=a.readUshort(t,e),e+=2),o},n.name={},n.name.parse=function(t,e,r){var a=n._bin,o={};a.readUshort(t,e),e+=2;var i=a.readUshort(t,e);e+=2,a.readUshort(t,e);for(var s,c=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],d=e+=2,h=0;h<i;h++){var p=a.readUshort(t,e);e+=2;var g=a.readUshort(t,e);e+=2;var v=a.readUshort(t,e);e+=2;var C=a.readUshort(t,e);e+=2;var M=a.readUshort(t,e);e+=2;var k=a.readUshort(t,e);e+=2;var y,T=c[C],_=d+12*i+k;if(p==0)y=a.readUnicode(t,_,M/2);else if(p==3&&g==0)y=a.readUnicode(t,_,M/2);else if(g==0)y=a.readASCII(t,_,M);else if(g==1)y=a.readUnicode(t,_,M/2);else if(g==3)y=a.readUnicode(t,_,M/2);else{if(p!=1)throw"unknown encoding "+g+", platformID: "+p;y=a.readASCII(t,_,M),console.debug("reading unknown MAC encoding "+g+" as ASCII")}var x="p"+p+","+v.toString(16);o[x]==null&&(o[x]={}),o[x][T!==void 0?T:C]=y,o[x]._lang=v}for(var w in o)if(o[w].postScriptName!=null&&o[w]._lang==1033)return o[w];for(var w in o)if(o[w].postScriptName!=null&&o[w]._lang==0)return o[w];for(var w in o)if(o[w].postScriptName!=null&&o[w]._lang==3084)return o[w];for(var w in o)if(o[w].postScriptName!=null)return o[w];for(var w in o){s=w;break}return console.debug("returning name table with languageID "+o[s]._lang),o[s]},n["OS/2"]={},n["OS/2"].parse=function(t,e,r){var a=n._bin.readUshort(t,e);e+=2;var o={};if(a==0)n["OS/2"].version0(t,e,o);else if(a==1)n["OS/2"].version1(t,e,o);else if(a==2||a==3||a==4)n["OS/2"].version2(t,e,o);else{if(a!=5)throw"unknown OS/2 table version: "+a;n["OS/2"].version5(t,e,o)}return o},n["OS/2"].version0=function(t,e,r){var a=n._bin;return r.xAvgCharWidth=a.readShort(t,e),e+=2,r.usWeightClass=a.readUshort(t,e),e+=2,r.usWidthClass=a.readUshort(t,e),e+=2,r.fsType=a.readUshort(t,e),e+=2,r.ySubscriptXSize=a.readShort(t,e),e+=2,r.ySubscriptYSize=a.readShort(t,e),e+=2,r.ySubscriptXOffset=a.readShort(t,e),e+=2,r.ySubscriptYOffset=a.readShort(t,e),e+=2,r.ySuperscriptXSize=a.readShort(t,e),e+=2,r.ySuperscriptYSize=a.readShort(t,e),e+=2,r.ySuperscriptXOffset=a.readShort(t,e),e+=2,r.ySuperscriptYOffset=a.readShort(t,e),e+=2,r.yStrikeoutSize=a.readShort(t,e),e+=2,r.yStrikeoutPosition=a.readShort(t,e),e+=2,r.sFamilyClass=a.readShort(t,e),e+=2,r.panose=a.readBytes(t,e,10),e+=10,r.ulUnicodeRange1=a.readUint(t,e),e+=4,r.ulUnicodeRange2=a.readUint(t,e),e+=4,r.ulUnicodeRange3=a.readUint(t,e),e+=4,r.ulUnicodeRange4=a.readUint(t,e),e+=4,r.achVendID=[a.readInt8(t,e),a.readInt8(t,e+1),a.readInt8(t,e+2),a.readInt8(t,e+3)],e+=4,r.fsSelection=a.readUshort(t,e),e+=2,r.usFirstCharIndex=a.readUshort(t,e),e+=2,r.usLastCharIndex=a.readUshort(t,e),e+=2,r.sTypoAscender=a.readShort(t,e),e+=2,r.sTypoDescender=a.readShort(t,e),e+=2,r.sTypoLineGap=a.readShort(t,e),e+=2,r.usWinAscent=a.readUshort(t,e),e+=2,r.usWinDescent=a.readUshort(t,e),e+=2},n["OS/2"].version1=function(t,e,r){var a=n._bin;return e=n["OS/2"].version0(t,e,r),r.ulCodePageRange1=a.readUint(t,e),e+=4,r.ulCodePageRange2=a.readUint(t,e),e+=4},n["OS/2"].version2=function(t,e,r){var a=n._bin;return e=n["OS/2"].version1(t,e,r),r.sxHeight=a.readShort(t,e),e+=2,r.sCapHeight=a.readShort(t,e),e+=2,r.usDefault=a.readUshort(t,e),e+=2,r.usBreak=a.readUshort(t,e),e+=2,r.usMaxContext=a.readUshort(t,e),e+=2},n["OS/2"].version5=function(t,e,r){var a=n._bin;return e=n["OS/2"].version2(t,e,r),r.usLowerOpticalPointSize=a.readUshort(t,e),e+=2,r.usUpperOpticalPointSize=a.readUshort(t,e),e+=2},n.post={},n.post.parse=function(t,e,r){var a=n._bin,o={};return o.version=a.readFixed(t,e),e+=4,o.italicAngle=a.readFixed(t,e),e+=4,o.underlinePosition=a.readShort(t,e),e+=2,o.underlineThickness=a.readShort(t,e),e+=2,o},n==null&&(n={}),n.U==null&&(n.U={}),n.U.codeToGlyph=function(t,e){var r=t.cmap,a=-1;if(r.p0e4!=null?a=r.p0e4:r.p3e1!=null?a=r.p3e1:r.p1e0!=null?a=r.p1e0:r.p0e3!=null&&(a=r.p0e3),a==-1)throw"no familiar platform and encoding!";var o=r.tables[a];if(o.format==0)return e>=o.map.length?0:o.map[e];if(o.format==4){for(var i=-1,s=0;s<o.endCount.length;s++)if(e<=o.endCount[s]){i=s;break}return i==-1||o.startCount[i]>e?0:65535&(o.idRangeOffset[i]!=0?o.glyphIdArray[e-o.startCount[i]+(o.idRangeOffset[i]>>1)-(o.idRangeOffset.length-i)]:e+o.idDelta[i])}if(o.format==12){if(e>o.groups[o.groups.length-1][1])return 0;for(s=0;s<o.groups.length;s++){var c=o.groups[s];if(c[0]<=e&&e<=c[1])return c[2]+(e-c[0])}return 0}throw"unknown cmap table format "+o.format},n.U.glyphToPath=function(t,e){var r={cmds:[],crds:[]};if(t.SVG&&t.SVG.entries[e]){var a=t.SVG.entries[e];return a==null?r:(typeof a=="string"&&(a=n.SVG.toPath(a),t.SVG.entries[e]=a),a)}if(t.CFF){var o={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:t.CFF.Private?t.CFF.Private.defaultWidthX:0,open:!1},i=t.CFF,s=t.CFF.Private;if(i.ROS){for(var c=0;i.FDSelect[c+2]<=e;)c+=2;s=i.FDArray[i.FDSelect[c+1]].Private}n.U._drawCFF(t.CFF.CharStrings[e],o,i,s,r)}else t.glyf&&n.U._drawGlyf(e,t,r);return r},n.U._drawGlyf=function(t,e,r){var a=e.glyf[t];a==null&&(a=e.glyf[t]=n.glyf._parseGlyf(e,t)),a!=null&&(a.noc>-1?n.U._simpleGlyph(a,r):n.U._compoGlyph(a,e,r))},n.U._simpleGlyph=function(t,e){for(var r=0;r<t.noc;r++){for(var a=r==0?0:t.endPts[r-1]+1,o=t.endPts[r],i=a;i<=o;i++){var s=i==a?o:i-1,c=i==o?a:i+1,d=1&t.flags[i],h=1&t.flags[s],p=1&t.flags[c],g=t.xs[i],v=t.ys[i];if(i==a)if(d){if(!h){n.U.P.moveTo(e,g,v);continue}n.U.P.moveTo(e,t.xs[s],t.ys[s])}else h?n.U.P.moveTo(e,t.xs[s],t.ys[s]):n.U.P.moveTo(e,(t.xs[s]+g)/2,(t.ys[s]+v)/2);d?h&&n.U.P.lineTo(e,g,v):p?n.U.P.qcurveTo(e,g,v,t.xs[c],t.ys[c]):n.U.P.qcurveTo(e,g,v,(g+t.xs[c])/2,(v+t.ys[c])/2)}n.U.P.closePath(e)}},n.U._compoGlyph=function(t,e,r){for(var a=0;a<t.parts.length;a++){var o={cmds:[],crds:[]},i=t.parts[a];n.U._drawGlyf(i.glyphIndex,e,o);for(var s=i.m,c=0;c<o.crds.length;c+=2){var d=o.crds[c],h=o.crds[c+1];r.crds.push(d*s.a+h*s.b+s.tx),r.crds.push(d*s.c+h*s.d+s.ty)}for(c=0;c<o.cmds.length;c++)r.cmds.push(o.cmds[c])}},n.U._getGlyphClass=function(t,e){var r=n._lctf.getInterval(e,t);return r==-1?0:e[r+2]},n.U._applySubs=function(t,e,r,a){for(var o=t.length-e-1,i=0;i<r.tabs.length;i++)if(r.tabs[i]!=null){var s,c=r.tabs[i];if(!c.coverage||(s=n._lctf.coverageIndex(c.coverage,t[e]))!=-1){if(r.ltype==1)t[e],c.fmt==1?t[e]=t[e]+c.delta:t[e]=c.newg[s];else if(r.ltype==4)for(var d=c.vals[s],h=0;h<d.length;h++){var p=d[h],g=p.chain.length;if(!(g>o)){for(var v=!0,C=0,M=0;M<g;M++){for(;t[e+C+(1+M)]==-1;)C++;p.chain[M]!=t[e+C+(1+M)]&&(v=!1)}if(v){for(t[e]=p.nglyph,M=0;M<g+C;M++)t[e+M+1]=-1;break}}}else if(r.ltype==5&&c.fmt==2)for(var k=n._lctf.getInterval(c.cDef,t[e]),y=c.cDef[k+2],T=c.scset[y],_=0;_<T.length;_++){var x=T[_],w=x.input;if(!(w.length>o)){for(v=!0,M=0;M<w.length;M++){var R=n._lctf.getInterval(c.cDef,t[e+1+M]);if(k==-1&&c.cDef[R+2]!=w[M]){v=!1;break}}if(v){var U=x.substLookupRecords;for(h=0;h<U.length;h+=2)U[h],U[h+1]}}}else if(r.ltype==6&&c.fmt==3){if(!n.U._glsCovered(t,c.backCvg,e-c.backCvg.length)||!n.U._glsCovered(t,c.inptCvg,e)||!n.U._glsCovered(t,c.ahedCvg,e+c.inptCvg.length))continue;var N=c.lookupRec;for(_=0;_<N.length;_+=2){k=N[_];var b=a[N[_+1]];n.U._applySubs(t,e+k,b,a)}}}}},n.U._glsCovered=function(t,e,r){for(var a=0;a<e.length;a++)if(n._lctf.coverageIndex(e[a],t[r+a])==-1)return!1;return!0},n.U.glyphsToPath=function(t,e,r){for(var a={cmds:[],crds:[]},o=0,i=0;i<e.length;i++){var s=e[i];if(s!=-1){for(var c=i<e.length-1&&e[i+1]!=-1?e[i+1]:0,d=n.U.glyphToPath(t,s),h=0;h<d.crds.length;h+=2)a.crds.push(d.crds[h]+o),a.crds.push(d.crds[h+1]);for(r&&a.cmds.push(r),h=0;h<d.cmds.length;h++)a.cmds.push(d.cmds[h]);r&&a.cmds.push("X"),o+=t.hmtx.aWidth[s],i<e.length-1&&(o+=n.U.getPairAdjustment(t,s,c))}}return a},n.U.P={},n.U.P.moveTo=function(t,e,r){t.cmds.push("M"),t.crds.push(e,r)},n.U.P.lineTo=function(t,e,r){t.cmds.push("L"),t.crds.push(e,r)},n.U.P.curveTo=function(t,e,r,a,o,i,s){t.cmds.push("C"),t.crds.push(e,r,a,o,i,s)},n.U.P.qcurveTo=function(t,e,r,a,o){t.cmds.push("Q"),t.crds.push(e,r,a,o)},n.U.P.closePath=function(t){t.cmds.push("Z")},n.U._drawCFF=function(t,e,r,a,o){for(var i=e.stack,s=e.nStems,c=e.haveWidth,d=e.width,h=e.open,p=0,g=e.x,v=e.y,C=0,M=0,k=0,y=0,T=0,_=0,x=0,w=0,R=0,U=0,N={val:0,size:0};p<t.length;){n.CFF.getCharString(t,p,N);var b=N.val;if(p+=N.size,b=="o1"||b=="o18")i.length%2!=0&&!c&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,c=!0;else if(b=="o3"||b=="o23")i.length%2!=0&&!c&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,c=!0;else if(b=="o4")i.length>1&&!c&&(d=i.shift()+a.nominalWidthX,c=!0),h&&n.U.P.closePath(o),v+=i.pop(),n.U.P.moveTo(o,g,v),h=!0;else if(b=="o5")for(;i.length>0;)g+=i.shift(),v+=i.shift(),n.U.P.lineTo(o,g,v);else if(b=="o6"||b=="o7")for(var A=i.length,D=b=="o6",V=0;V<A;V++){var z=i.shift();D?g+=z:v+=z,D=!D,n.U.P.lineTo(o,g,v)}else if(b=="o8"||b=="o24"){A=i.length;for(var Q=0;Q+6<=A;)C=g+i.shift(),M=v+i.shift(),k=C+i.shift(),y=M+i.shift(),g=k+i.shift(),v=y+i.shift(),n.U.P.curveTo(o,C,M,k,y,g,v),Q+=6;b=="o24"&&(g+=i.shift(),v+=i.shift(),n.U.P.lineTo(o,g,v))}else{if(b=="o11")break;if(b=="o1234"||b=="o1235"||b=="o1236"||b=="o1237")b=="o1234"&&(M=v,k=(C=g+i.shift())+i.shift(),U=y=M+i.shift(),_=y,w=v,g=(x=(T=(R=k+i.shift())+i.shift())+i.shift())+i.shift(),n.U.P.curveTo(o,C,M,k,y,R,U),n.U.P.curveTo(o,T,_,x,w,g,v)),b=="o1235"&&(C=g+i.shift(),M=v+i.shift(),k=C+i.shift(),y=M+i.shift(),R=k+i.shift(),U=y+i.shift(),T=R+i.shift(),_=U+i.shift(),x=T+i.shift(),w=_+i.shift(),g=x+i.shift(),v=w+i.shift(),i.shift(),n.U.P.curveTo(o,C,M,k,y,R,U),n.U.P.curveTo(o,T,_,x,w,g,v)),b=="o1236"&&(C=g+i.shift(),M=v+i.shift(),k=C+i.shift(),U=y=M+i.shift(),_=y,x=(T=(R=k+i.shift())+i.shift())+i.shift(),w=_+i.shift(),g=x+i.shift(),n.U.P.curveTo(o,C,M,k,y,R,U),n.U.P.curveTo(o,T,_,x,w,g,v)),b=="o1237"&&(C=g+i.shift(),M=v+i.shift(),k=C+i.shift(),y=M+i.shift(),R=k+i.shift(),U=y+i.shift(),T=R+i.shift(),_=U+i.shift(),x=T+i.shift(),w=_+i.shift(),Math.abs(x-g)>Math.abs(w-v)?g=x+i.shift():v=w+i.shift(),n.U.P.curveTo(o,C,M,k,y,R,U),n.U.P.curveTo(o,T,_,x,w,g,v));else if(b=="o14"){if(i.length>0&&!c&&(d=i.shift()+r.nominalWidthX,c=!0),i.length==4){var re=i.shift(),O=i.shift(),I=i.shift(),m=i.shift(),S=n.CFF.glyphBySE(r,I),P=n.CFF.glyphBySE(r,m);n.U._drawCFF(r.CharStrings[S],e,r,a,o),e.x=re,e.y=O,n.U._drawCFF(r.CharStrings[P],e,r,a,o)}h&&(n.U.P.closePath(o),h=!1)}else if(b=="o19"||b=="o20")i.length%2!=0&&!c&&(d=i.shift()+a.nominalWidthX),s+=i.length>>1,i.length=0,c=!0,p+=s+7>>3;else if(b=="o21")i.length>2&&!c&&(d=i.shift()+a.nominalWidthX,c=!0),v+=i.pop(),g+=i.pop(),h&&n.U.P.closePath(o),n.U.P.moveTo(o,g,v),h=!0;else if(b=="o22")i.length>1&&!c&&(d=i.shift()+a.nominalWidthX,c=!0),g+=i.pop(),h&&n.U.P.closePath(o),n.U.P.moveTo(o,g,v),h=!0;else if(b=="o25"){for(;i.length>6;)g+=i.shift(),v+=i.shift(),n.U.P.lineTo(o,g,v);C=g+i.shift(),M=v+i.shift(),k=C+i.shift(),y=M+i.shift(),g=k+i.shift(),v=y+i.shift(),n.U.P.curveTo(o,C,M,k,y,g,v)}else if(b=="o26")for(i.length%2&&(g+=i.shift());i.length>0;)C=g,M=v+i.shift(),g=k=C+i.shift(),v=(y=M+i.shift())+i.shift(),n.U.P.curveTo(o,C,M,k,y,g,v);else if(b=="o27")for(i.length%2&&(v+=i.shift());i.length>0;)M=v,k=(C=g+i.shift())+i.shift(),y=M+i.shift(),g=k+i.shift(),v=y,n.U.P.curveTo(o,C,M,k,y,g,v);else if(b=="o10"||b=="o29"){var F=b=="o10"?a:r;if(i.length==0)console.debug("error: empty stack");else{var E=i.pop(),W=F.Subrs[E+F.Bias];e.x=g,e.y=v,e.nStems=s,e.haveWidth=c,e.width=d,e.open=h,n.U._drawCFF(W,e,r,a,o),g=e.x,v=e.y,s=e.nStems,c=e.haveWidth,d=e.width,h=e.open}}else if(b=="o30"||b=="o31"){var B=i.length,L=(Q=0,b=="o31");for(Q+=B-(A=-3&B);Q<A;)L?(M=v,k=(C=g+i.shift())+i.shift(),v=(y=M+i.shift())+i.shift(),A-Q==5?(g=k+i.shift(),Q++):g=k,L=!1):(C=g,M=v+i.shift(),k=C+i.shift(),y=M+i.shift(),g=k+i.shift(),A-Q==5?(v=y+i.shift(),Q++):v=y,L=!0),n.U.P.curveTo(o,C,M,k,y,g,v),Q+=4}else{if((b+"").charAt(0)=="o")throw console.debug("Unknown operation: "+b,t),b;i.push(b)}}}e.x=g,e.y=v,e.nStems=s,e.haveWidth=c,e.width=d,e.open=h};var u=n,f={Typr:u};return l.Typr=u,l.default=f,Object.defineProperty(l,"__esModule",{value:!0}),l}({}).Typr}/*!
Custom bundle of woff2otf (https://github.com/arty-name/woff2otf) with fflate
(https://github.com/101arrowz/fflate) for use in Troika text rendering. 
Original licenses apply: 
- fflate: https://github.com/101arrowz/fflate/blob/master/LICENSE (MIT)
- woff2otf.js: https://github.com/arty-name/woff2otf/blob/master/woff2otf.js (Apache2)
*/function _i(){return function(l){var n=Uint8Array,u=Uint16Array,f=Uint32Array,t=new n([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),e=new n([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),r=new n([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),a=function(b,A){for(var D=new u(31),V=0;V<31;++V)D[V]=A+=1<<b[V-1];var z=new f(D[30]);for(V=1;V<30;++V)for(var Q=D[V];Q<D[V+1];++Q)z[Q]=Q-D[V]<<5|V;return[D,z]},o=a(t,2),i=o[0],s=o[1];i[28]=258,s[258]=28;for(var c=a(e,0)[0],d=new u(32768),h=0;h<32768;++h){var p=(43690&h)>>>1|(21845&h)<<1;p=(61680&(p=(52428&p)>>>2|(13107&p)<<2))>>>4|(3855&p)<<4,d[h]=((65280&p)>>>8|(255&p)<<8)>>>1}var g=function(b,A,D){for(var V=b.length,z=0,Q=new u(A);z<V;++z)++Q[b[z]-1];var re,O=new u(A);for(z=0;z<A;++z)O[z]=O[z-1]+Q[z-1]<<1;{re=new u(1<<A);var I=15-A;for(z=0;z<V;++z)if(b[z])for(var m=z<<4|b[z],S=A-b[z],P=O[b[z]-1]++<<S,F=P|(1<<S)-1;P<=F;++P)re[d[P]>>>I]=m}return re},v=new n(288);for(h=0;h<144;++h)v[h]=8;for(h=144;h<256;++h)v[h]=9;for(h=256;h<280;++h)v[h]=7;for(h=280;h<288;++h)v[h]=8;var C=new n(32);for(h=0;h<32;++h)C[h]=5;var M=g(v,9),k=g(C,5),y=function(b){for(var A=b[0],D=1;D<b.length;++D)b[D]>A&&(A=b[D]);return A},T=function(b,A,D){var V=A/8|0;return(b[V]|b[V+1]<<8)>>(7&A)&D},_=function(b,A){var D=A/8|0;return(b[D]|b[D+1]<<8|b[D+2]<<16)>>(7&A)},x=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],w=function(b,A,D){var V=new Error(A||x[b]);if(V.code=b,Error.captureStackTrace&&Error.captureStackTrace(V,w),!D)throw V;return V},R=function(b,A,D){var V=b.length;if(!V||D&&!D.l&&V<5)return A||new n(0);var z=!A||D,Q=!D||D.i;D||(D={}),A||(A=new n(3*V));var re,O=function(fe){var Ue=A.length;if(fe>Ue){var Ce=new n(Math.max(2*Ue,fe));Ce.set(A),A=Ce}},I=D.f||0,m=D.p||0,S=D.b||0,P=D.l,F=D.d,E=D.m,W=D.n,B=8*V;do{if(!P){D.f=I=T(b,m,1);var L=T(b,m+1,3);if(m+=3,!L){var K=b[($=((re=m)/8|0)+(7&re&&1)+4)-4]|b[$-3]<<8,ee=$+K;if(ee>V){Q&&w(0);break}z&&O(S+K),A.set(b.subarray($,ee),S),D.b=S+=K,D.p=m=8*ee;continue}if(L==1)P=M,F=k,E=9,W=5;else if(L==2){var Y=T(b,m,31)+257,j=T(b,m+10,15)+4,ge=Y+T(b,m+5,31)+1;m+=14;for(var de=new n(ge),Z=new n(19),te=0;te<j;++te)Z[r[te]]=T(b,m+3*te,7);m+=3*j;var le=y(Z),H=(1<<le)-1,ne=g(Z,le);for(te=0;te<ge;){var $,G=ne[T(b,m,H)];if(m+=15&G,($=G>>>4)<16)de[te++]=$;else{var pe=0,J=0;for($==16?(J=3+T(b,m,3),m+=2,pe=de[te-1]):$==17?(J=3+T(b,m,7),m+=3):$==18&&(J=11+T(b,m,127),m+=7);J--;)de[te++]=pe}}var ae=de.subarray(0,Y),q=de.subarray(Y);E=y(ae),W=y(q),P=g(ae,E),F=g(q,W)}else w(1);if(m>B){Q&&w(0);break}}z&&O(S+131072);for(var we=(1<<E)-1,oe=(1<<W)-1,ie=m;;ie=m){var ue=(pe=P[_(b,m)&we])>>>4;if((m+=15&pe)>B){Q&&w(0);break}if(pe||w(2),ue<256)A[S++]=ue;else{if(ue==256){ie=m,P=null;break}var me=ue-254;if(ue>264){var ke=t[te=ue-257];me=T(b,m,(1<<ke)-1)+i[te],m+=ke}var Ee=F[_(b,m)&oe],be=Ee>>>4;if(Ee||w(3),m+=15&Ee,q=c[be],be>3&&(ke=e[be],q+=_(b,m)&(1<<ke)-1,m+=ke),m>B){Q&&w(0);break}z&&O(S+131072);for(var ye=S+me;S<ye;S+=4)A[S]=A[S-q],A[S+1]=A[S+1-q],A[S+2]=A[S+2-q],A[S+3]=A[S+3-q];S=ye}}D.l=P,D.p=ie,D.b=S,P&&(I=1,D.m=E,D.d=F,D.n=W)}while(!I);return S==A.length?A:function(fe,Ue,Ce){(Ce==null||Ce>fe.length)&&(Ce=fe.length);var Oe=new(fe instanceof u?u:fe instanceof f?f:n)(Ce-Ue);return Oe.set(fe.subarray(Ue,Ce)),Oe}(A,0,S)},U=new n(0),N=typeof TextDecoder<"u"&&new TextDecoder;try{N.decode(U,{stream:!0})}catch{}return l.convert_streams=function(b){var A=new DataView(b),D=0;function V(){var Y=A.getUint16(D);return D+=2,Y}function z(){var Y=A.getUint32(D);return D+=4,Y}function Q(Y){K.setUint16(ee,Y),ee+=2}function re(Y){K.setUint32(ee,Y),ee+=4}for(var O={signature:z(),flavor:z(),length:z(),numTables:V(),reserved:V(),totalSfntSize:z(),majorVersion:V(),minorVersion:V(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},I=0;Math.pow(2,I)<=O.numTables;)I++;I--;for(var m=16*Math.pow(2,I),S=16*O.numTables-m,P=12,F=[],E=0;E<O.numTables;E++)F.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),P+=16;var W,B=new Uint8Array(12+16*F.length+F.reduce(function(Y,j){return Y+j.origLength+4},0)),L=B.buffer,K=new DataView(L),ee=0;return re(O.flavor),Q(O.numTables),Q(m),Q(I),Q(S),F.forEach(function(Y){re(Y.tag),re(Y.origChecksum),re(P),re(Y.origLength),Y.outOffset=P,(P+=Y.origLength)%4!=0&&(P+=4-P%4)}),F.forEach(function(Y){var j,ge=b.slice(Y.offset,Y.offset+Y.compLength);if(Y.compLength!=Y.origLength){var de=new Uint8Array(Y.origLength);j=new Uint8Array(ge,2),R(j,de)}else de=new Uint8Array(ge);B.set(de,Y.outOffset);var Z=0;(P=Y.outOffset+Y.origLength)%4!=0&&(Z=4-P%4),B.set(new Uint8Array(Z).buffer,Y.outOffset+Y.origLength),W=P+Z}),L.slice(0,W)},Object.defineProperty(l,"__esModule",{value:!0}),l}({}).convert_streams}function Di(l,n){const u={M:2,L:2,Q:4,C:6,Z:0},f={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},t=1,e=2,r=4,a=8,o=16,i=32;let s;function c(x){if(!s){const w={R:e,L:t,D:r,C:o,U:i,T:a};s=new Map;for(let R in f){let U=0;f[R].split(",").forEach(N=>{let[b,A]=N.split("+");b=parseInt(b,36),A=A?parseInt(A,36):0,s.set(U+=b,w[R]);for(let D=A;D--;)s.set(++U,w[R])})}}return s.get(x)||i}const d=1,h=2,p=3,g=4,v=[null,"isol","init","fina","medi"];function C(x){const w=new Uint8Array(x.length);let R=i,U=d,N=-1;for(let b=0;b<x.length;b++){const A=x.codePointAt(b);let D=c(A)|0,V=d;D&a||(R&(t|r|o)?D&(e|r|o)?(V=p,(U===d||U===p)&&w[N]++):D&(t|i)&&(U===h||U===g)&&w[N]--:R&(e|i)&&(U===h||U===g)&&w[N]--,U=w[b]=V,R=D,N=b,A>65535&&b++)}return w}function M(x,w){const R=[];for(let N=0;N<w.length;N++){const b=w.codePointAt(N);b>65535&&N++,R.push(l.U.codeToGlyph(x,b))}const U=x.GSUB;if(U){const{lookupList:N,featureList:b}=U;let A;const D=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,V=[];b.forEach(z=>{if(D.test(z.tag))for(let Q=0;Q<z.tab.length;Q++){if(V[z.tab[Q]])continue;V[z.tab[Q]]=!0;const re=N[z.tab[Q]],O=/^(isol|init|fina|medi)$/.test(z.tag);O&&!A&&(A=C(w));for(let I=0;I<R.length;I++)(!A||!O||v[A[I]]===z.tag)&&l.U._applySubs(R,I,re,N)}})}return R}function k(x,w){const R=new Int16Array(w.length*3);let U=0;for(;U<w.length;U++){const D=w[U];if(D===-1)continue;R[U*3+2]=x.hmtx.aWidth[D];const V=x.GPOS;if(V){const z=V.lookupList;for(let Q=0;Q<z.length;Q++){const re=z[Q];for(let O=0;O<re.tabs.length;O++){const I=re.tabs[O];if(re.ltype===1){if(l._lctf.coverageIndex(I.coverage,D)!==-1&&I.pos){A(I.pos,U);break}}else if(re.ltype===2){let m=null,S=N();if(S!==-1){const P=l._lctf.coverageIndex(I.coverage,w[S]);if(P!==-1){if(I.fmt===1){const F=I.pairsets[P];for(let E=0;E<F.length;E++)F[E].gid2===D&&(m=F[E])}else if(I.fmt===2){const F=l.U._getGlyphClass(w[S],I.classDef1),E=l.U._getGlyphClass(D,I.classDef2);m=I.matrix[F][E]}if(m){m.val1&&A(m.val1,S),m.val2&&A(m.val2,U);break}}}}else if(re.ltype===4){const m=l._lctf.coverageIndex(I.markCoverage,D);if(m!==-1){const S=N(b),P=S===-1?-1:l._lctf.coverageIndex(I.baseCoverage,w[S]);if(P!==-1){const F=I.markArray[m],E=I.baseArray[P][F.markClass];R[U*3]=E.x-F.x+R[S*3]-R[S*3+2],R[U*3+1]=E.y-F.y+R[S*3+1];break}}}else if(re.ltype===6){const m=l._lctf.coverageIndex(I.mark1Coverage,D);if(m!==-1){const S=N();if(S!==-1){const P=w[S];if(y(x,P)===3){const F=l._lctf.coverageIndex(I.mark2Coverage,P);if(F!==-1){const E=I.mark1Array[m],W=I.mark2Array[F][E.markClass];R[U*3]=W.x-E.x+R[S*3]-R[S*3+2],R[U*3+1]=W.y-E.y+R[S*3+1];break}}}}}}}}else if(x.kern&&!x.cff){const z=N();if(z!==-1){const Q=x.kern.glyph1.indexOf(w[z]);if(Q!==-1){const re=x.kern.rval[Q].glyph2.indexOf(D);re!==-1&&(R[z*3+2]+=x.kern.rval[Q].vals[re])}}}}return R;function N(D){for(let V=U-1;V>=0;V--)if(w[V]!==-1&&(!D||D(w[V])))return V;return-1}function b(D){return y(x,D)===1}function A(D,V){for(let z=0;z<3;z++)R[V*3+z]+=D[z]||0}}function y(x,w){const R=x.GDEF&&x.GDEF.glyphClassDef;return R?l.U._getGlyphClass(w,R):0}function T(...x){for(let w=0;w<x.length;w++)if(typeof x[w]=="number")return x[w]}function _(x){const w=Object.create(null),R=x["OS/2"],U=x.hhea,N=x.head.unitsPerEm,b=T(R&&R.sTypoAscender,U&&U.ascender,N),A={unitsPerEm:N,ascender:b,descender:T(R&&R.sTypoDescender,U&&U.descender,0),capHeight:T(R&&R.sCapHeight,b),xHeight:T(R&&R.sxHeight,b),lineGap:T(R&&R.sTypoLineGap,U&&U.lineGap),supportsCodePoint(D){return l.U.codeToGlyph(x,D)>0},forEachGlyph(D,V,z,Q){let re=0;const O=1/A.unitsPerEm*V,I=M(x,D);let m=0;const S=k(x,I);return I.forEach((P,F)=>{if(P!==-1){let E=w[P];if(!E){const{cmds:W,crds:B}=l.U.glyphToPath(x,P);let L="",K=0;for(let de=0,Z=W.length;de<Z;de++){const te=u[W[de]];L+=W[de];for(let le=1;le<=te;le++)L+=(le>1?",":"")+B[K++]}let ee,Y,j,ge;if(B.length){ee=Y=1/0,j=ge=-1/0;for(let de=0,Z=B.length;de<Z;de+=2){let te=B[de],le=B[de+1];te<ee&&(ee=te),le<Y&&(Y=le),te>j&&(j=te),le>ge&&(ge=le)}}else ee=j=Y=ge=0;E=w[P]={index:P,advanceWidth:x.hmtx.aWidth[P],xMin:ee,yMin:Y,xMax:j,yMax:ge,path:L}}Q.call(null,E,re+S[F*3]*O,S[F*3+1]*O,m),re+=S[F*3+2]*O,z&&(re+=z*V)}m+=D.codePointAt(m)>65535?2:1}),re}};return A}return function(w){const R=new Uint8Array(w,0,4),U=l._bin.readASCII(R,0,4);if(U==="wOFF")w=n(w);else if(U==="wOF2")throw new Error("woff2 fonts not supported");return _(l.parse(w)[0])}}const Ei=Mt({name:"Typr Font Parser",dependencies:[Ci,_i,Di],init(l,n,u){const f=l(),t=n();return u(f,t)}});/*!
Custom bundle of @unicode-font-resolver/client v1.0.2 (https://github.com/lojjic/unicode-font-resolver)
for use in Troika text rendering. 
Original MIT license applies
*/function Ui(){return function(l){var n=function(){this.buckets=new Map};n.prototype.add=function(k){var y=k>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&k))},n.prototype.has=function(k){var y=this.buckets.get(k>>5);return y!==void 0&&(y&1<<(31&k))!=0},n.prototype.serialize=function(){var k=[];return this.buckets.forEach(function(y,T){k.push((+T).toString(36)+":"+y.toString(36))}),k.join(",")},n.prototype.deserialize=function(k){var y=this;this.buckets.clear(),k.split(",").forEach(function(T){var _=T.split(":");y.buckets.set(parseInt(_[0],36),parseInt(_[1],36))})};var u=Math.pow(2,8),f=u-1,t=~f;function e(k){var y=function(_){return _&t}(k).toString(16),T=function(_){return(_&t)+u-1}(k).toString(16);return"codepoint-index/plane"+(k>>16)+"/"+y+"-"+T+".json"}function r(k,y){var T=k&f,_=y.codePointAt(T/6|0);return((_=(_||48)-48)&1<<T%6)!=0}function a(k,y){var T;(T=k,T.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map(function(_){return _.split("-").map(function(x){return parseInt(x.trim(),16)})})).forEach(function(_){var x=_[0],w=_[1];w===void 0&&(w=x),y(x,w)})}function o(k,y){a(k,function(T,_){for(var x=T;x<=_;x++)y(x)})}var i={},s={},c=new WeakMap,d="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function h(k){var y=c.get(k);return y||(y=new n,o(k.ranges,function(T){return y.add(T)}),c.set(k,y)),y}var p,g=new Map;function v(k,y,T){return k[y]?y:k[T]?T:function(_){for(var x in _)return x}(k)}function C(k,y){var T=y;if(!k.includes(T)){T=1/0;for(var _=0;_<k.length;_++)Math.abs(k[_]-y)<Math.abs(T-y)&&(T=k[_])}return T}function M(k){return p||(p=new Set,o("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",function(y){p.add(y)})),p.has(k)}return l.CodePointSet=n,l.clearCache=function(){i={},s={}},l.getFontsForString=function(k,y){y===void 0&&(y={});var T,_=y.lang;_===void 0&&(_=new RegExp("\\p{Script=Hangul}","u").test(T=k)?"ko":new RegExp("\\p{Script=Hiragana}|\\p{Script=Katakana}","u").test(T)?"ja":"en");var x=y.category;x===void 0&&(x="sans-serif");var w=y.style;w===void 0&&(w="normal");var R=y.weight;R===void 0&&(R=400);var U=(y.dataUrl||d).replace(/\/$/g,""),N=new Map,b=new Uint8Array(k.length),A={},D={},V=new Array(k.length),z=new Map,Q=!1;function re(m){var S=g.get(m);return S||(S=fetch(U+"/"+m).then(function(P){if(!P.ok)throw new Error(P.statusText);return P.json().then(function(F){if(!Array.isArray(F)||F[0]!==1)throw new Error("Incorrect schema version; need 1, got "+F[0]);return F[1]})}).catch(function(P){if(U!==d)return Q||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+U+'", trying default CDN. '+P.message),Q=!0),U=d,g.delete(m),re(m);throw P}),g.set(m,S)),S}for(var O=function(m){var S=k.codePointAt(m),P=e(S);V[m]=P,i[P]||z.has(P)||z.set(P,re(P).then(function(F){i[P]=F})),S>65535&&(m++,I=m)},I=0;I<k.length;I++)O(I);return Promise.all(z.values()).then(function(){z.clear();for(var m=function(P){var F=k.codePointAt(P),E=null,W=i[V[P]],B=void 0;for(var L in W){var K=D[L];if(K===void 0&&(K=D[L]=new RegExp(L).test(_||"en")),K){for(var ee in B=L,W[L])if(r(F,W[L][ee])){E=ee;break}break}}if(!E){e:for(var Y in W)if(Y!==B){for(var j in W[Y])if(r(F,W[Y][j])){E=j;break e}}}E||(console.debug("No font coverage for U+"+F.toString(16)),E="latin"),V[P]=E,s[E]||z.has(E)||z.set(E,re("font-meta/"+E+".json").then(function(ge){s[E]=ge})),F>65535&&(P++,S=P)},S=0;S<k.length;S++)m(S);return Promise.all(z.values())}).then(function(){for(var m,S=null,P=0;P<k.length;P++){var F=k.codePointAt(P);if(S&&(M(F)||h(S).has(F)))b[P]=b[P-1];else{S=s[V[P]];var E=A[S.id];if(!E){var W=S.typeforms,B=v(W,x,"sans-serif"),L=v(W[B],w,"normal"),K=C((m=W[B])===null||m===void 0?void 0:m[L],R);E=A[S.id]=U+"/font-files/"+S.id+"/"+B+"."+L+"."+K+".woff"}var ee=N.get(E);ee==null&&(ee=N.size,N.set(E,ee)),b[P]=ee}F>65535&&(P++,b[P]=b[P-1])}return{fontUrls:Array.from(N.keys()),chars:b}})},Object.defineProperty(l,"__esModule",{value:!0}),l}({})}function Pi(l,n){const u=Object.create(null),f=Object.create(null);function t(r,a){const o=i=>{console.error(`Failure loading font ${r}`,i)};try{const i=new XMLHttpRequest;i.open("get",r,!0),i.responseType="arraybuffer",i.onload=function(){if(i.status>=400)o(new Error(i.statusText));else if(i.status>0)try{const s=l(i.response);s.src=r,a(s)}catch(s){o(s)}},i.onerror=o,i.send()}catch(i){o(i)}}function e(r,a){let o=u[r];o?a(o):f[r]?f[r].push(a):(f[r]=[a],t(r,i=>{i.src=r,u[r]=i,f[r].forEach(s=>s(i)),delete f[r]}))}return function(r,a,{lang:o,fonts:i=[],style:s="normal",weight:c="normal",unicodeFontsURL:d}={}){const h=new Uint8Array(r.length),p=[];r.length||M();const g=new Map,v=[];if(s!=="italic"&&(s="normal"),typeof c!="number"&&(c=c==="bold"?700:400),i&&!Array.isArray(i)&&(i=[i]),i=i.slice().filter(y=>!y.lang||y.lang.test(o)).reverse(),i.length){let x=0;(function w(R=0){for(let U=R,N=r.length;U<N;U++){const b=r.codePointAt(U);if(x===1&&p[h[U-1]].supportsCodePoint(b)||U>0&&/\s/.test(r[U]))h[U]=h[U-1],x===2&&(v[v.length-1][1]=U);else for(let A=h[U],D=i.length;A<=D;A++)if(A===D){const V=x===2?v[v.length-1]:v[v.length]=[U,U];V[1]=U,x=2}else{h[U]=A;const{src:V,unicodeRange:z}=i[A];if(!z||k(b,z)){const Q=u[V];if(!Q){e(V,()=>{w(U)});return}if(Q.supportsCodePoint(b)){let re=g.get(Q);typeof re!="number"&&(re=p.length,p.push(Q),g.set(Q,re)),h[U]=re,x=1;break}}}b>65535&&U+1<N&&(h[U+1]=h[U],U++,x===2&&(v[v.length-1][1]=U))}C()})()}else v.push([0,r.length-1]),C();function C(){if(v.length){const y=v.map(T=>r.substring(T[0],T[1]+1)).join(`
`);n.getFontsForString(y,{lang:o||void 0,style:s,weight:c,dataUrl:d}).then(({fontUrls:T,chars:_})=>{const x=p.length;let w=0;v.forEach(U=>{for(let N=0,b=U[1]-U[0];N<=b;N++)h[U[0]+N]=_[w++]+x;w++});let R=0;T.forEach((U,N)=>{e(U,b=>{p[N+x]=b,++R===T.length&&M()})})})}else M()}function M(){a({chars:h,fonts:p})}function k(y,T){for(let _=0;_<T.length;_++){const[x,w=x]=T[_];if(x<=y&&y<=w)return!0}return!1}}}const Ai=Mt({name:"FontResolver",dependencies:[Pi,Ei,Ui],init(l,n,u){return l(n,u())}});function Fi(l,n){const f=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,t="[^\\S\\u00A0]",e=new RegExp(`${t}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function r({text:p,lang:g,fonts:v,style:C,weight:M,preResolvedFonts:k,unicodeFontsURL:y},T){const _=({chars:x,fonts:w})=>{let R,U;const N=[];for(let b=0;b<x.length;b++)x[b]!==U?(U=x[b],N.push(R={start:b,end:b,fontObj:w[x[b]]})):R.end=b;T(N)};k?_(k):l(p,_,{lang:g,fonts:v,style:C,weight:M,unicodeFontsURL:y})}function a({text:p="",font:g,lang:v,sdfGlyphSize:C=64,fontSize:M=400,fontWeight:k=1,fontStyle:y="normal",letterSpacing:T=0,lineHeight:_="normal",maxWidth:x=1/0,direction:w,textAlign:R="left",textIndent:U=0,whiteSpace:N="normal",overflowWrap:b="normal",anchorX:A=0,anchorY:D=0,metricsOnly:V=!1,unicodeFontsURL:z,preResolvedFonts:Q=null,includeCaretPositions:re=!1,chunkedBoundsSize:O=8192,colorRanges:I=null},m){const S=c(),P={fontLoad:0,typesetting:0};p.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),p=p.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),M=+M,T=+T,x=+x,_=_||"normal",U=+U,r({text:p,lang:v,style:y,weight:k,fonts:typeof g=="string"?[{src:g}]:g,unicodeFontsURL:z,preResolvedFonts:Q},F=>{P.fontLoad=c()-S;const E=isFinite(x);let W=null,B=null,L=null,K=null,ee=null,Y=null,j=null,ge=null,de=0,Z=0,te=N!=="nowrap";const le=new Map,H=c();let ne=U,$=0,G=new d;const pe=[G];F.forEach(oe=>{const{fontObj:ie}=oe,{ascender:ue,descender:me,unitsPerEm:ke,lineGap:Ee,capHeight:be,xHeight:ye}=ie;let fe=le.get(ie);if(!fe){const he=M/ke,Se=_==="normal"?(ue-me+Ee)*he:_*M,tt=(Se-(ue-me)*he)/2,Me=Math.min(Se,(ue-me)*he),xe=(ue+me)/2*he+Me/2;fe={index:le.size,src:ie.src,fontObj:ie,fontSizeMult:he,unitsPerEm:ke,ascender:ue*he,descender:me*he,capHeight:be*he,xHeight:ye*he,lineHeight:Se,baseline:-tt-ue*he,caretTop:xe,caretBottom:xe-Me},le.set(ie,fe)}const{fontSizeMult:Ue}=fe,Ce=p.slice(oe.start,oe.end+1);let Oe,Te;ie.forEachGlyph(Ce,M,T,(he,Se,tt,Me)=>{Se+=$,Me+=oe.start,Oe=Se,Te=he;const xe=p.charAt(Me),Pe=he.advanceWidth*Ue,_e=G.count;let ve;if("isEmpty"in he||(he.isWhitespace=!!xe&&new RegExp(t).test(xe),he.canBreakAfter=!!xe&&e.test(xe),he.isEmpty=he.xMin===he.xMax||he.yMin===he.yMax||f.test(xe)),!he.isWhitespace&&!he.isEmpty&&Z++,te&&E&&!he.isWhitespace&&Se+Pe+ne>x&&_e){if(G.glyphAt(_e-1).glyphObj.canBreakAfter)ve=new d,ne=-Se;else for(let Ie=_e;Ie--;)if(Ie===0&&b==="break-word"){ve=new d,ne=-Se;break}else if(G.glyphAt(Ie).glyphObj.canBreakAfter){ve=G.splitAt(Ie+1);const Be=ve.glyphAt(0).x;ne-=Be;for(let Ae=ve.count;Ae--;)ve.glyphAt(Ae).x-=Be;break}ve&&(G.isSoftWrapped=!0,G=ve,pe.push(G),de=x)}let De=G.glyphAt(G.count);De.glyphObj=he,De.x=Se+ne,De.y=tt,De.width=Pe,De.charIndex=Me,De.fontData=fe,xe===`
`&&(G=new d,pe.push(G),ne=-(Se+Pe+T*M)+U)}),$=Oe+Te.advanceWidth*Ue+T*M});let J=0;pe.forEach(oe=>{let ie=!0;for(let ue=oe.count;ue--;){const me=oe.glyphAt(ue);ie&&!me.glyphObj.isWhitespace&&(oe.width=me.x+me.width,oe.width>de&&(de=oe.width),ie=!1);let{lineHeight:ke,capHeight:Ee,xHeight:be,baseline:ye}=me.fontData;ke>oe.lineHeight&&(oe.lineHeight=ke);const fe=ye-oe.baseline;fe<0&&(oe.baseline+=fe,oe.cap+=fe,oe.ex+=fe),oe.cap=Math.max(oe.cap,oe.baseline+Ee),oe.ex=Math.max(oe.ex,oe.baseline+be)}oe.baseline-=J,oe.cap-=J,oe.ex-=J,J+=oe.lineHeight});let ae=0,q=0;if(A&&(typeof A=="number"?ae=-A:typeof A=="string"&&(ae=-de*(A==="left"?0:A==="center"?.5:A==="right"?1:i(A)))),D&&(typeof D=="number"?q=-D:typeof D=="string"&&(q=D==="top"?0:D==="top-baseline"?-pe[0].baseline:D==="top-cap"?-pe[0].cap:D==="top-ex"?-pe[0].ex:D==="middle"?J/2:D==="bottom"?J:D==="bottom-baseline"?-pe[pe.length-1].baseline:i(D)*J)),!V){const oe=n.getEmbeddingLevels(p,w);W=new Uint16Array(Z),B=new Uint8Array(Z),L=new Float32Array(Z*2),K={},j=[1/0,1/0,-1/0,-1/0],ge=[],re&&(Y=new Float32Array(p.length*4)),I&&(ee=new Uint8Array(Z*3));let ie=0,ue=-1,me=-1,ke,Ee;if(pe.forEach((be,ye)=>{let{count:fe,width:Ue}=be;if(fe>0){let Ce=0;for(let Me=fe;Me--&&be.glyphAt(Me).glyphObj.isWhitespace;)Ce++;let Oe=0,Te=0;if(R==="center")Oe=(de-Ue)/2;else if(R==="right")Oe=de-Ue;else if(R==="justify"&&be.isSoftWrapped){let Me=0;for(let xe=fe-Ce;xe--;)be.glyphAt(xe).glyphObj.isWhitespace&&Me++;Te=(de-Ue)/Me}if(Te||Oe){let Me=0;for(let xe=0;xe<fe;xe++){let Pe=be.glyphAt(xe);const _e=Pe.glyphObj;Pe.x+=Oe+Me,Te!==0&&_e.isWhitespace&&xe<fe-Ce&&(Me+=Te,Pe.width+=Te)}}const he=n.getReorderSegments(p,oe,be.glyphAt(0).charIndex,be.glyphAt(be.count-1).charIndex);for(let Me=0;Me<he.length;Me++){const[xe,Pe]=he[Me];let _e=1/0,ve=-1/0;for(let De=0;De<fe;De++)if(be.glyphAt(De).charIndex>=xe){let Ie=De,Be=De;for(;Be<fe;Be++){let Ae=be.glyphAt(Be);if(Ae.charIndex>Pe)break;Be<fe-Ce&&(_e=Math.min(_e,Ae.x),ve=Math.max(ve,Ae.x+Ae.width))}for(let Ae=Ie;Ae<Be;Ae++){const Ne=be.glyphAt(Ae);Ne.x=ve-(Ne.x+Ne.width-_e)}break}}let Se;const tt=Me=>Se=Me;for(let Me=0;Me<fe;Me++){const xe=be.glyphAt(Me);Se=xe.glyphObj;const Pe=Se.index,_e=oe.levels[xe.charIndex]&1;if(_e){const ve=n.getMirroredCharacter(p[xe.charIndex]);ve&&xe.fontData.fontObj.forEachGlyph(ve,0,0,tt)}if(re){const{charIndex:ve,fontData:De}=xe,Ie=xe.x+ae,Be=xe.x+xe.width+ae;Y[ve*4]=_e?Be:Ie,Y[ve*4+1]=_e?Ie:Be,Y[ve*4+2]=be.baseline+De.caretBottom+q,Y[ve*4+3]=be.baseline+De.caretTop+q;const Ae=ve-ue;Ae>1&&s(Y,ue,Ae),ue=ve}if(I){const{charIndex:ve}=xe;for(;ve>me;)me++,I.hasOwnProperty(me)&&(Ee=I[me])}if(!Se.isWhitespace&&!Se.isEmpty){const ve=ie++,{fontSizeMult:De,src:Ie,index:Be}=xe.fontData,Ae=K[Ie]||(K[Ie]={});Ae[Pe]||(Ae[Pe]={path:Se.path,pathBounds:[Se.xMin,Se.yMin,Se.xMax,Se.yMax]});const Ne=xe.x+ae,nt=xe.y+be.baseline+q;L[ve*2]=Ne,L[ve*2+1]=nt;const Je=Ne+Se.xMin*De,rt=nt+Se.yMin*De,st=Ne+Se.xMax*De,Ze=nt+Se.yMax*De;Je<j[0]&&(j[0]=Je),rt<j[1]&&(j[1]=rt),st>j[2]&&(j[2]=st),Ze>j[3]&&(j[3]=Ze),ve%O===0&&(ke={start:ve,end:ve,rect:[1/0,1/0,-1/0,-1/0]},ge.push(ke)),ke.end++;const Ge=ke.rect;if(Je<Ge[0]&&(Ge[0]=Je),rt<Ge[1]&&(Ge[1]=rt),st>Ge[2]&&(Ge[2]=st),Ze>Ge[3]&&(Ge[3]=Ze),W[ve]=Pe,B[ve]=Be,I){const lt=ve*3;ee[lt]=Ee>>16&255,ee[lt+1]=Ee>>8&255,ee[lt+2]=Ee&255}}}}}),Y){const be=p.length-ue;be>1&&s(Y,ue,be)}}const we=[];le.forEach(({index:oe,src:ie,unitsPerEm:ue,ascender:me,descender:ke,lineHeight:Ee,capHeight:be,xHeight:ye})=>{we[oe]={src:ie,unitsPerEm:ue,ascender:me,descender:ke,lineHeight:Ee,capHeight:be,xHeight:ye}}),P.typesetting=c()-H,m({glyphIds:W,glyphFontIndices:B,glyphPositions:L,glyphData:K,fontData:we,caretPositions:Y,glyphColors:ee,chunkedBounds:ge,fontSize:M,topBaseline:q+pe[0].baseline,blockBounds:[ae,q-J,ae+de,q],visibleBounds:j,timings:P})})}function o(p,g){a({...p,metricsOnly:!0},v=>{const[C,M,k,y]=v.blockBounds;g({width:k-C,height:y-M})})}function i(p){let g=p.match(/^([\d.]+)%$/),v=g?parseFloat(g[1]):NaN;return isNaN(v)?0:v/100}function s(p,g,v){const C=p[g*4],M=p[g*4+1],k=p[g*4+2],y=p[g*4+3],T=(M-C)/v;for(let _=0;_<v;_++){const x=(g+_)*4;p[x]=C+T*_,p[x+1]=C+T*(_+1),p[x+2]=k,p[x+3]=y}}function c(){return(self.performance||Date).now()}function d(){this.data=[]}const h=["glyphObj","x","y","width","charIndex","fontData"];return d.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/h.length)},glyphAt(p){let g=d.flyweight;return g.data=this.data,g.index=p,g},splitAt(p){let g=new d;return g.data=this.data.splice(p*h.length),g}},d.flyweight=h.reduce((p,g,v,C)=>(Object.defineProperty(p,g,{get(){return this.data[this.index*h.length+v]},set(M){this.data[this.index*h.length+v]=M}}),p),{data:null,index:0}),{typeset:a,measure:o}}const dt=()=>(self.performance||Date).now(),hn=Do();let uo;function Ri(l,n,u,f,t,e,r,a,o,i,s=!0){return s?Ii(l,n,u,f,t,e,r,a,o,i).then(null,c=>(uo||(console.warn("WebGL SDF generation failed, falling back to JS",c),uo=!0),ho(l,n,u,f,t,e,r,a,o,i))):ho(l,n,u,f,t,e,r,a,o,i)}const cn=[],Bi=5;let Hn=0;function Uo(){const l=dt();for(;cn.length&&dt()-l<Bi;)cn.shift()();Hn=cn.length?setTimeout(Uo,0):0}const Ii=(...l)=>new Promise((n,u)=>{cn.push(()=>{const f=dt();try{hn.webgl.generateIntoCanvas(...l),n({timing:dt()-f})}catch(t){u(t)}}),Hn||(Hn=setTimeout(Uo,0))}),Gi=4,Oi=2e3,co={};let Li=0;function ho(l,n,u,f,t,e,r,a,o,i){const s="TroikaTextSDFGenerator_JS_"+Li++%Gi;let c=co[s];return c||(c=co[s]={workerModule:Mt({name:s,workerId:s,dependencies:[Do,dt],init(d,h){const p=d().javascript.generate;return function(...g){const v=h();return{textureData:p(...g),timing:h()-v}}},getTransferables(d){return[d.textureData.buffer]}}),requests:0,idleTimer:null}),c.requests++,clearTimeout(c.idleTimer),c.workerModule(l,n,u,f,t,e).then(({textureData:d,timing:h})=>{const p=dt(),g=new Uint8Array(d.length*4);for(let v=0;v<d.length;v++)g[v*4+i]=d[v];return hn.webglUtils.renderImageData(r,g,a,o,l,n,1<<3-i),h+=dt()-p,--c.requests===0&&(c.idleTimer=setTimeout(()=>{vi(s)},Oi)),{timing:h}})}function zi(l){l._warm||(hn.webgl.isSupported(l),l._warm=!0)}const Wi=hn.webglUtils.resizeWebGLCanvasWithoutClearing,jt={unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048},ji=new it;function xt(){return(self.performance||Date).now()}const po=Object.create(null);function Po(l,n){l=Hi({},l);const u=xt(),f=[];if(l.font&&f.push({label:"user",src:Yi(l.font)}),l.font=f,l.text=""+l.text,l.sdfGlyphSize=l.sdfGlyphSize||jt.sdfGlyphSize,l.unicodeFontsURL=l.unicodeFontsURL||jt.unicodeFontsURL,l.colorRanges!=null){let d={};for(let h in l.colorRanges)if(l.colorRanges.hasOwnProperty(h)){let p=l.colorRanges[h];typeof p!="number"&&(p=ji.set(p).getHex()),d[h]=p}l.colorRanges=d}Object.freeze(l);const{textureWidth:t,sdfExponent:e}=jt,{sdfGlyphSize:r}=l,a=t/r*4;let o=po[r];if(!o){const d=document.createElement("canvas");d.width=t,d.height=r*256/a,o=po[r]={glyphCount:0,sdfGlyphSize:r,sdfCanvas:d,sdfTexture:new wa(d,void 0,void 0,void 0,Sr,Sr),contextLost:!1,glyphsByFont:new Map},o.sdfTexture.generateMipmaps=!1,Ni(o)}const{sdfTexture:i,sdfCanvas:s}=o;Ro(l).then(d=>{const{glyphIds:h,glyphFontIndices:p,fontData:g,glyphPositions:v,fontSize:C,timings:M}=d,k=[],y=new Float32Array(h.length*4);let T=0,_=0;const x=xt(),w=g.map(A=>{let D=o.glyphsByFont.get(A.src);return D||o.glyphsByFont.set(A.src,D=new Map),D});h.forEach((A,D)=>{const V=p[D],{src:z,unitsPerEm:Q}=g[V];let re=w[V].get(A);if(!re){const{path:P,pathBounds:F}=d.glyphData[z][A],E=Math.max(F[2]-F[0],F[3]-F[1])/r*(jt.sdfMargin*r+.5),W=o.glyphCount++,B=[F[0]-E,F[1]-E,F[2]+E,F[3]+E];w[V].set(A,re={path:P,atlasIndex:W,sdfViewBox:B}),k.push(re)}const{sdfViewBox:O}=re,I=v[_++],m=v[_++],S=C/Q;y[T++]=I+O[0]*S,y[T++]=m+O[1]*S,y[T++]=I+O[2]*S,y[T++]=m+O[3]*S,h[D]=re.atlasIndex}),M.quads=(M.quads||0)+(xt()-x);const R=xt();M.sdf={};const U=s.height,N=Math.ceil(o.glyphCount/a),b=Math.pow(2,Math.ceil(Math.log2(N*r)));b>U&&(console.info(`Increasing SDF texture size ${U}->${b}`),Wi(s,t,b),i.dispose()),Promise.all(k.map(A=>Ao(A,o,l.gpuAccelerateSDF).then(({timing:D})=>{M.sdf[A.atlasIndex]=D}))).then(()=>{k.length&&!o.contextLost&&(Fo(o),i.needsUpdate=!0),M.sdfTotal=xt()-R,M.total=xt()-u,n(Object.freeze({parameters:l,sdfTexture:i,sdfGlyphSize:r,sdfExponent:e,glyphBounds:y,glyphAtlasIndices:h,glyphColors:d.glyphColors,caretPositions:d.caretPositions,chunkedBounds:d.chunkedBounds,ascender:d.ascender,descender:d.descender,lineHeight:d.lineHeight,capHeight:d.capHeight,xHeight:d.xHeight,topBaseline:d.topBaseline,blockBounds:d.blockBounds,visibleBounds:d.visibleBounds,timings:d.timings}))})}),Promise.resolve().then(()=>{o.contextLost||zi(s)})}function Ao({path:l,atlasIndex:n,sdfViewBox:u},{sdfGlyphSize:f,sdfCanvas:t,contextLost:e},r){if(e)return Promise.resolve({timing:-1});const{textureWidth:a,sdfExponent:o}=jt,i=Math.max(u[2]-u[0],u[3]-u[1]),s=Math.floor(n/4),c=s%(a/f)*f,d=Math.floor(s/(a/f))*f,h=n%4;return Ri(f,f,l,u,i,o,t,c,d,h,r)}function Ni(l){const n=l.sdfCanvas;n.addEventListener("webglcontextlost",u=>{console.log("Context Lost",u),u.preventDefault(),l.contextLost=!0}),n.addEventListener("webglcontextrestored",u=>{console.log("Context Restored",u),l.contextLost=!1;const f=[];l.glyphsByFont.forEach(t=>{t.forEach(e=>{f.push(Ao(e,l,!0))})}),Promise.all(f).then(()=>{Fo(l),l.sdfTexture.needsUpdate=!0})})}function Vi({font:l,characters:n,sdfGlyphSize:u},f){let t=Array.isArray(n)?n.join(`
`):""+n;Po({font:l,sdfGlyphSize:u,text:t},f)}function Hi(l,n){for(let u in n)n.hasOwnProperty(u)&&(l[u]=n[u]);return l}let ln;function Yi(l){return ln||(ln=typeof document>"u"?{}:document.createElement("a")),ln.href=l,ln.href}function Fo(l){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");const{sdfCanvas:n,sdfTexture:u}=l,{width:f,height:t}=n,e=l.sdfCanvas.getContext("webgl");let r=u.image.data;(!r||r.length!==f*t*4)&&(r=new Uint8Array(f*t*4),u.image={width:f,height:t,data:r},u.flipY=!1,u.isDataTexture=!0),e.readPixels(0,0,f,t,e.RGBA,e.UNSIGNED_BYTE,r)}}const Xi=Mt({name:"Typesetter",dependencies:[Fi,Ai,bi],init(l,n,u){return l(n,u())}}),Ro=Mt({name:"Typesetter",dependencies:[Xi],init(l){return function(n){return new Promise(u=>{l.typeset(n,u)})}},getTransferables(l){const n=[];for(let u in l)l[u]&&l[u].buffer&&n.push(l[u].buffer);return n}});Ro.onMainThread;const mo={};function Ki(l){let n=mo[l];return n||(n=mo[l]=new Kn(1,1,l,l).translate(.5,.5,0)),n}const qi="aTroikaGlyphBounds",vo="aTroikaGlyphIndex",Ji="aTroikaGlyphColor";class Zi extends ba{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new ya,this.boundingBox=new Mo}computeBoundingSphere(){}computeBoundingBox(){}set detail(n){if(n!==this._detail){this._detail=n,(typeof n!="number"||n<1)&&(n=1);let u=Ki(n);["position","normal","uv"].forEach(f=>{this.attributes[f]=u.attributes[f].clone()}),this.setIndex(u.getIndex().clone())}}get detail(){return this._detail}set curveRadius(n){n!==this._curveRadius&&(this._curveRadius=n,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(n,u,f,t,e){this.updateAttributeData(qi,n,4),this.updateAttributeData(vo,u,1),this.updateAttributeData(Ji,e,3),this._blockBounds=f,this._chunkedBounds=t,this.instanceCount=u.length,this._updateBounds()}_updateBounds(){const n=this._blockBounds;if(n){const{curveRadius:u,boundingBox:f}=this;if(u){const{PI:t,floor:e,min:r,max:a,sin:o,cos:i}=Math,s=t/2,c=t*2,d=Math.abs(u),h=n[0]/d,p=n[2]/d,g=e((h+s)/c)!==e((p+s)/c)?-d:r(o(h)*d,o(p)*d),v=e((h-s)/c)!==e((p-s)/c)?d:a(o(h)*d,o(p)*d),C=e((h+t)/c)!==e((p+t)/c)?d*2:a(d-i(h)*d,d-i(p)*d);f.min.set(g,n[1],u<0?-C:0),f.max.set(v,n[3],u<0?0:C)}else f.min.set(n[0],n[1],0),f.max.set(n[2],n[3],0);f.getBoundingSphere(this.boundingSphere)}}applyClipRect(n){let u=this.getAttribute(vo).count,f=this._chunkedBounds;if(f)for(let t=f.length;t--;){u=f[t].end;let e=f[t].rect;if(e[1]<n.w&&e[3]>n.y&&e[0]<n.z&&e[2]>n.x)break}this.instanceCount=u}updateAttributeData(n,u,f){const t=this.getAttribute(n);u?t&&t.array.length===u.length?(t.array.set(u),t.needsUpdate=!0):(this.setAttribute(n,new xa(u,f)),delete this._maxInstanceCount,this.dispose()):t&&this.deleteAttribute(n)}}const Qi=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,$i=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,es=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,ts=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function ns(l){const n=Vn(l,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new et},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new St(0,0,0,0)},uTroikaClipRect:{value:new St(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new et},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new it},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new Sa},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Qi,vertexTransform:$i,fragmentDefs:es,fragmentColorTransform:ts,customRewriter({vertexShader:u,fragmentShader:f}){let t=/\buniform\s+vec3\s+diffuse\b/;return t.test(f)&&(f=f.replace(t,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),t.test(u)||(u=u.replace(Eo,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:u,fragmentShader:f}}});return n.transparent=!0,n.forceSinglePass=!0,Object.defineProperties(n,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),n}const Zn=new ga({color:16777215,side:Ma,transparent:!0}),go=8421504,bo=new Yn,fn=new qe,In=new qe,zt=[],rs=new qe,Gn="+x+y";function yo(l){return Array.isArray(l)?l[0]:l}let Bo=()=>{const l=new Xn(new Kn(1,1),Zn);return Bo=()=>l,l},Io=()=>{const l=new Xn(new Kn(1,1,32,1),Zn);return Io=()=>l,l};const os={type:"syncstart"},as={type:"synccomplete"},Go=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],is=Go.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail");let Oo=class extends Xn{constructor(){const n=new Zi;super(n,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=go,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=Gn,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(n){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(n):(this._isSyncing=!0,this.dispatchEvent(os),Po({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},u=>{this._isSyncing=!1,this._textRenderInfo=u,this.geometry.updateGlyphs(u.glyphBounds,u.glyphAtlasIndices,u.blockBounds,u.chunkedBounds,u.glyphColors);const f=this._queuedSyncs;f&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{f.forEach(t=>t&&t())})),this.dispatchEvent(as),n&&n()})))}onBeforeRender(n,u,f,t,e,r){this.sync(),e.isTroikaTextMaterial&&this._prepareForRender(e)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(n){return ns(n)}get material(){let n=this._derivedMaterial;const u=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=Zn.clone());if((!n||!n.isDerivedFrom(u))&&(n=this._derivedMaterial=this.createDerivedMaterial(u),u.addEventListener("dispose",function f(){u.removeEventListener("dispose",f),n.dispose()})),this.hasOutline()){let f=n._outlineMtl;return f||(f=n._outlineMtl=Object.create(n,{id:{value:n.id+.1}}),f.isTextOutlineMaterial=!0,f.depthWrite=!1,f.map=null,n.addEventListener("dispose",function t(){n.removeEventListener("dispose",t),f.dispose()})),[f,n]}else return n}set material(n){n&&n.isTroikaTextMaterial?(this._derivedMaterial=n,this._baseMaterial=n.baseMaterial):this._baseMaterial=n}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(n){this.geometry.detail=n}get curveRadius(){return this.geometry.curveRadius}set curveRadius(n){this.geometry.curveRadius=n}get customDepthMaterial(){return yo(this.material).getDepthMaterial()}set customDepthMaterial(n){}get customDistanceMaterial(){return yo(this.material).getDistanceMaterial()}set customDistanceMaterial(n){}_prepareForRender(n){const u=n.isTextOutlineMaterial,f=n.uniforms,t=this.textRenderInfo;if(t){const{sdfTexture:a,blockBounds:o}=t;f.uTroikaSDFTexture.value=a,f.uTroikaSDFTextureSize.value.set(a.image.width,a.image.height),f.uTroikaSDFGlyphSize.value=t.sdfGlyphSize,f.uTroikaSDFExponent.value=t.sdfExponent,f.uTroikaTotalBounds.value.fromArray(o),f.uTroikaUseGlyphColors.value=!u&&!!t.glyphColors;let i=0,s=0,c=0,d,h,p,g=0,v=0;if(u){let{outlineWidth:M,outlineOffsetX:k,outlineOffsetY:y,outlineBlur:T,outlineOpacity:_}=this;i=this._parsePercent(M)||0,s=Math.max(0,this._parsePercent(T)||0),d=_,g=this._parsePercent(k)||0,v=this._parsePercent(y)||0}else c=Math.max(0,this._parsePercent(this.strokeWidth)||0),c&&(p=this.strokeColor,f.uTroikaStrokeColor.value.set(p??go),h=this.strokeOpacity,h==null&&(h=1)),d=this.fillOpacity;f.uTroikaEdgeOffset.value=i,f.uTroikaPositionOffset.value.set(g,v),f.uTroikaBlurRadius.value=s,f.uTroikaStrokeWidth.value=c,f.uTroikaStrokeOpacity.value=h,f.uTroikaFillOpacity.value=d??1,f.uTroikaCurveRadius.value=this.curveRadius||0;let C=this.clipRect;if(C&&Array.isArray(C)&&C.length===4)f.uTroikaClipRect.value.fromArray(C);else{const M=(this.fontSize||.1)*100;f.uTroikaClipRect.value.set(o[0]-M,o[1]-M,o[2]+M,o[3]+M)}this.geometry.applyClipRect(f.uTroikaClipRect.value)}f.uTroikaSDFDebug.value=!!this.debugSDF,n.polygonOffset=!!this.depthOffset,n.polygonOffsetFactor=n.polygonOffsetUnits=this.depthOffset||0;const e=u?this.outlineColor||0:this.color;if(e==null)delete n.color;else{const a=n.hasOwnProperty("color")?n.color:n.color=new it;(e!==a._input||typeof e=="object")&&a.set(a._input=e)}let r=this.orientation||Gn;if(r!==n._orientation){let a=f.uTroikaOrient.value;r=r.replace(/[^-+xyz]/g,"");let o=r!==Gn&&r.match(/^([-+])([xyz])([-+])([xyz])$/);if(o){let[,i,s,c,d]=o;fn.set(0,0,0)[s]=i==="-"?1:-1,In.set(0,0,0)[d]=c==="-"?-1:1,bo.lookAt(rs,fn.cross(In),In),a.setFromMatrix4(bo)}else a.identity();n._orientation=r}}_parsePercent(n){if(typeof n=="string"){let u=n.match(/^(-?[\d.]+)%$/),f=u?parseFloat(u[1]):NaN;n=(isNaN(f)?0:f/100)*this.fontSize}return n}localPositionToTextCoords(n,u=new et){u.copy(n);const f=this.curveRadius;return f&&(u.x=Math.atan2(n.x,Math.abs(f)-Math.abs(n.z))*Math.abs(f)),u}worldPositionToTextCoords(n,u=new et){return fn.copy(n),this.localPositionToTextCoords(this.worldToLocal(fn),u)}raycast(n,u){const{textRenderInfo:f,curveRadius:t}=this;if(f){const e=f.blockBounds,r=t?Io():Bo(),a=r.geometry,{position:o,uv:i}=a.attributes;for(let s=0;s<i.count;s++){let c=e[0]+i.getX(s)*(e[2]-e[0]);const d=e[1]+i.getY(s)*(e[3]-e[1]);let h=0;t&&(h=t-Math.cos(c/t)*t,c=Math.sin(c/t)*t),o.setXYZ(s,c,d,h)}a.boundingSphere=this.geometry.boundingSphere,a.boundingBox=this.geometry.boundingBox,r.matrixWorld=this.matrixWorld,r.material.side=this.material.side,zt.length=0,r.raycast(n,zt);for(let s=0;s<zt.length;s++)zt[s].object=this,u.push(zt[s])}}copy(n){const u=this.geometry;return super.copy(n),this.geometry=u,is.forEach(f=>{this[f]=n[f]}),this}clone(){return new this.constructor().copy(this)}};Go.forEach(l=>{const n="_private_"+l;Object.defineProperty(Oo.prototype,l,{get(){return this[n]},set(u){u!==this[n]&&(this[n]=u,this._needsSync=!0)}})});new Mo;new it;const Lo=X.forwardRef(({sdfGlyphSize:l=64,anchorX:n="center",anchorY:u="middle",font:f,fontSize:t=1,children:e,characters:r,onSync:a,...o},i)=>{const s=Xe(({invalidate:p})=>p),[c]=X.useState(()=>new Oo),[d,h]=X.useMemo(()=>{const p=[];let g="";return X.Children.forEach(e,v=>{typeof v=="string"||typeof v=="number"?g+=v:p.push(v)}),[p,g]},[e]);return sa(()=>new Promise(p=>Vi({font:f,characters:r},p)),["troika-text",f,r]),X.useLayoutEffect(()=>void c.sync(()=>{s(),a&&a(c)})),X.useEffect(()=>()=>c.dispose(),[c]),X.createElement("primitive",$e({object:c,ref:i,font:f,text:h,anchorX:n,anchorY:u,fontSize:t,sdfGlyphSize:l},o),d)}),ss=()=>parseInt(ka.replace(/\D+/g,"")),ls=ss(),xo=ko({color:new it("white"),scale:new et(1,1),imageBounds:new et(1,1),resolution:1024,map:null,zoom:1,radius:0,grayscale:0,opacity:1},`
  varying vec2 vUv;
  varying vec2 vPos;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
    vPos = position.xy;
  }
`,`
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  varying vec2 vPos;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform float resolution;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float radius;
  uniform float zoom;
  uniform float grayscale;
  uniform float opacity;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  
  const float PI = 3.14159265;
    
  // from https://iquilezles.org/articles/distfunctions
  float udRoundBox( vec2 p, vec2 b, float r ) {
    return length(max(abs(p)-b+r,0.0))-r;
  }

  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);

    vec2 res = vec2(scale * resolution);
    vec2 halfRes = 0.5 * res;
    float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
	  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
    
    #include <tonemapping_fragment>
    #include <${ls>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`),zo=X.forwardRef(({children:l,color:n,segments:u=1,scale:f=1,zoom:t=1,grayscale:e=0,opacity:r=1,radius:a=0,texture:o,toneMapped:i,transparent:s,side:c,...d},h)=>{So({ImageMaterial:xo});const p=X.useRef(null),g=Xe(k=>k.size),v=Array.isArray(f)?[f[0],f[1]]:[f,f],C=[o.image.width,o.image.height],M=Math.max(g.width,g.height);return X.useImperativeHandle(h,()=>p.current,[]),X.useLayoutEffect(()=>{p.current.geometry.parameters&&p.current.material.scale.set(v[0]*p.current.geometry.parameters.width,v[1]*p.current.geometry.parameters.height)},[v[0],v[1]]),X.createElement("mesh",$e({ref:p,scale:Array.isArray(f)?[...f,1]:f},d),X.createElement("planeGeometry",{args:[1,1,u,u]}),X.createElement("imageMaterial",{color:n,map:o,zoom:t,grayscale:e,opacity:r,scale:v,imageBounds:C,resolution:M,radius:a,toneMapped:i,transparent:s,side:c,key:xo.key}),l)}),fs=X.forwardRef(({url:l,...n},u)=>{const f=Aa(l);return X.createElement(zo,$e({},n,{texture:f,ref:u}))}),us=X.forwardRef(({url:l,...n},u)=>X.createElement(zo,$e({},n,{ref:u}))),Wt=X.forwardRef((l,n)=>{if(l.url)return X.createElement(fs,$e({},l,{ref:n}));if(l.texture)return X.createElement(us,$e({},l,{ref:n}));throw new Error("<Image /> requires a url or texture")}),cs=ko({},"void main() { }","void main() { gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0); discard;  }");class ds extends Da{constructor(n=6,u=!1){super(),this.uniforms={chromaticAberration:{value:.05},transmission:{value:0},_transmission:{value:1},transmissionMap:{value:null},roughness:{value:0},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:1/0},attenuationColor:{value:new it("white")},anisotropicBlur:{value:.1},time:{value:0},distortion:{value:0},distortionScale:{value:.5},temporalDistortion:{value:0},buffer:{value:null}},this.onBeforeCompile=f=>{f.uniforms={...f.uniforms,...this.uniforms},this.anisotropy>0&&(f.defines.USE_ANISOTROPY=""),u?f.defines.USE_SAMPLER="":f.defines.USE_TRANSMISSION="",f.fragmentShader=`
      uniform float chromaticAberration;         
      uniform float anisotropicBlur;      
      uniform float time;
      uniform float distortion;
      uniform float distortionScale;
      uniform float temporalDistortion;
      uniform sampler2D buffer;

      vec3 random3(vec3 c) {
        float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
        vec3 r;
        r.z = fract(512.0*j);
        j *= .125;
        r.x = fract(512.0*j);
        j *= .125;
        r.y = fract(512.0*j);
        return r-0.5;
      }

      uint hash( uint x ) {
        x += ( x << 10u );
        x ^= ( x >>  6u );
        x += ( x <<  3u );
        x ^= ( x >> 11u );
        x += ( x << 15u );
        return x;
      }

      // Compound versions of the hashing algorithm I whipped together.
      uint hash( uvec2 v ) { return hash( v.x ^ hash(v.y)                         ); }
      uint hash( uvec3 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z)             ); }
      uint hash( uvec4 v ) { return hash( v.x ^ hash(v.y) ^ hash(v.z) ^ hash(v.w) ); }

      // Construct a float with half-open range [0:1] using low 23 bits.
      // All zeroes yields 0.0, all ones yields the next smallest representable value below 1.0.
      float floatConstruct( uint m ) {
        const uint ieeeMantissa = 0x007FFFFFu; // binary32 mantissa bitmask
        const uint ieeeOne      = 0x3F800000u; // 1.0 in IEEE binary32
        m &= ieeeMantissa;                     // Keep only mantissa bits (fractional part)
        m |= ieeeOne;                          // Add fractional part to 1.0
        float  f = uintBitsToFloat( m );       // Range [1:2]
        return f - 1.0;                        // Range [0:1]
      }

      // Pseudo-random value in half-open range [0:1].
      float randomBase( float x ) { return floatConstruct(hash(floatBitsToUint(x))); }
      float randomBase( vec2  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec3  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float randomBase( vec4  v ) { return floatConstruct(hash(floatBitsToUint(v))); }
      float rand(float seed) {
        float result = randomBase(vec3(gl_FragCoord.xy, seed));
        return result;
      }

      const float F3 =  0.3333333;
      const float G3 =  0.1666667;

      float snoise(vec3 p) {
        vec3 s = floor(p + dot(p, vec3(F3)));
        vec3 x = p - s + dot(s, vec3(G3));
        vec3 e = step(vec3(0.0), x - x.yzx);
        vec3 i1 = e*(1.0 - e.zxy);
        vec3 i2 = 1.0 - e.zxy*(1.0 - e);
        vec3 x1 = x - i1 + G3;
        vec3 x2 = x - i2 + 2.0*G3;
        vec3 x3 = x - 1.0 + 3.0*G3;
        vec4 w, d;
        w.x = dot(x, x);
        w.y = dot(x1, x1);
        w.z = dot(x2, x2);
        w.w = dot(x3, x3);
        w = max(0.6 - w, 0.0);
        d.x = dot(random3(s), x);
        d.y = dot(random3(s + i1), x1);
        d.z = dot(random3(s + i2), x2);
        d.w = dot(random3(s + 1.0), x3);
        w *= w;
        w *= w;
        d *= w;
        return dot(d, vec4(52.0));
      }

      float snoiseFractal(vec3 m) {
        return 0.5333333* snoise(m)
              +0.2666667* snoise(2.0*m)
              +0.1333333* snoise(4.0*m)
              +0.0666667* snoise(8.0*m);
      }
`+f.fragmentShader,f.fragmentShader=f.fragmentShader.replace("#include <transmission_pars_fragment>",`
        #ifdef USE_TRANSMISSION
          // Transmission code is based on glTF-Sampler-Viewer
          // https://github.com/KhronosGroup/glTF-Sample-Viewer
          uniform float _transmission;
          uniform float thickness;
          uniform float attenuationDistance;
          uniform vec3 attenuationColor;
          #ifdef USE_TRANSMISSIONMAP
            uniform sampler2D transmissionMap;
          #endif
          #ifdef USE_THICKNESSMAP
            uniform sampler2D thicknessMap;
          #endif
          uniform vec2 transmissionSamplerSize;
          uniform sampler2D transmissionSamplerMap;
          uniform mat4 modelMatrix;
          uniform mat4 projectionMatrix;
          varying vec3 vWorldPosition;
          vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
            // Direction of refracted light.
            vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
            // Compute rotation-independant scaling of the model matrix.
            vec3 modelScale;
            modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
            modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
            modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
            // The thickness is specified in local space.
            return normalize( refractionVector ) * thickness * modelScale;
          }
          float applyIorToRoughness( const in float roughness, const in float ior ) {
            // Scale roughness with IOR so that an IOR of 1.0 results in no microfacet refraction and
            // an IOR of 1.5 results in the default amount of microfacet refraction.
            return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
          }
          vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
            float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );            
            #ifdef USE_SAMPLER
              #ifdef texture2DLodEXT
                return texture2DLodEXT(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #else
                return texture2D(transmissionSamplerMap, fragCoord.xy, framebufferLod);
              #endif
            #else
              return texture2D(buffer, fragCoord.xy);
            #endif
          }
          vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
            if ( isinf( attenuationDistance ) ) {
              // Attenuation distance is +∞, i.e. the transmitted color is not attenuated at all.
              return radiance;
            } else {
              // Compute light attenuation using Beer's law.
              vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
              vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance ); // Beer's law
              return transmittance * radiance;
            }
          }
          vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
            const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
            const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
            const in vec3 attenuationColor, const in float attenuationDistance ) {
            vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
            vec3 refractedRayExit = position + transmissionRay;
            // Project refracted vector on the framebuffer, while mapping to normalized device coordinates.
            vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
            vec2 refractionCoords = ndcPos.xy / ndcPos.w;
            refractionCoords += 1.0;
            refractionCoords /= 2.0;
            // Sample framebuffer to get pixel the refracted ray hits.
            vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
            vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
            // Get the specular component.
            vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
            return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
          }
        #endif
`),f.fragmentShader=f.fragmentShader.replace("#include <transmission_fragment>",`  
        // Improve the refraction to use the world pos
        material.transmission = _transmission;
        material.transmissionAlpha = 1.0;
        material.thickness = thickness;
        material.attenuationDistance = attenuationDistance;
        material.attenuationColor = attenuationColor;
        #ifdef USE_TRANSMISSIONMAP
          material.transmission *= texture2D( transmissionMap, vUv ).r;
        #endif
        #ifdef USE_THICKNESSMAP
          material.thickness *= texture2D( thicknessMap, vUv ).g;
        #endif
        
        vec3 pos = vWorldPosition;
        float runningSeed = 0.0;
        vec3 v = normalize( cameraPosition - pos );
        vec3 n = inverseTransformDirection( normal, viewMatrix );
        vec3 transmission = vec3(0.0);
        float transmissionR, transmissionB, transmissionG;
        float randomCoords = rand(runningSeed++);
        float thickness_smear = thickness * max(pow(roughnessFactor, 0.33), anisotropicBlur);
        vec3 distortionNormal = vec3(0.0);
        vec3 temporalOffset = vec3(time, -time, -time) * temporalDistortion;
        if (distortion > 0.0) {
          distortionNormal = distortion * vec3(snoiseFractal(vec3((pos * distortionScale + temporalOffset))), snoiseFractal(vec3(pos.zxy * distortionScale - temporalOffset)), snoiseFractal(vec3(pos.yxz * distortionScale + temporalOffset)));
        }
        for (float i = 0.0; i < ${n}.0; i ++) {
          vec3 sampleNorm = normalize(n + roughnessFactor * roughnessFactor * 2.0 * normalize(vec3(rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5, rand(runningSeed++) - 0.5)) * pow(rand(runningSeed++), 0.33) + distortionNormal);
          transmissionR = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness  + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).r;
          transmissionG = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior  * (1.0 + chromaticAberration * (i + randomCoords) / float(${n})) , material.thickness + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).g;
          transmissionB = getIBLVolumeRefraction(
            sampleNorm, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
            pos, modelMatrix, viewMatrix, projectionMatrix, material.ior * (1.0 + 2.0 * chromaticAberration * (i + randomCoords) / float(${n})), material.thickness + thickness_smear * (i + randomCoords) / float(${n}),
            material.attenuationColor, material.attenuationDistance
          ).b;
          transmission.r += transmissionR;
          transmission.g += transmissionG;
          transmission.b += transmissionB;
        }
        transmission /= ${n}.0;
        totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
`)},Object.keys(this.uniforms).forEach(f=>Object.defineProperty(this,f,{get:()=>this.uniforms[f].value,set:t=>this.uniforms[f].value=t}))}}const hs=X.forwardRef(({buffer:l,transmissionSampler:n=!1,backside:u=!1,side:f=_a,transmission:t=1,thickness:e=0,backsideThickness:r=0,backsideEnvMapIntensity:a=1,samples:o=10,resolution:i,backsideResolution:s,background:c,anisotropy:d,anisotropicBlur:h,...p},g)=>{So({MeshTransmissionMaterial:ds});const v=X.useRef(null),[C]=X.useState(()=>new cs),M=On(s||i),k=On(i);let y,T,_,x;return ht(w=>{if(v.current.time=w.clock.elapsedTime,v.current.buffer===k.texture&&!n){var R;x=(R=v.current.__r3f.parent)==null?void 0:R.object,x&&(_=w.gl.toneMapping,y=w.scene.background,T=v.current.envMapIntensity,w.gl.toneMapping=Ta,c&&(w.scene.background=c),x.material=C,u&&(w.gl.setRenderTarget(M),w.gl.render(w.scene,w.camera),x.material=v.current,x.material.buffer=M.texture,x.material.thickness=r,x.material.side=Ca,x.material.envMapIntensity=a),w.gl.setRenderTarget(k),w.gl.render(w.scene,w.camera),x.material=v.current,x.material.thickness=e,x.material.side=f,x.material.buffer=k.texture,x.material.envMapIntensity=T,w.scene.background=y,w.gl.setRenderTarget(null),w.gl.toneMapping=_)}}),X.useImperativeHandle(g,()=>v.current,[]),X.createElement("meshTransmissionMaterial",$e({args:[o,n],ref:v},p,{buffer:l||k.texture,_transmission:t,anisotropicBlur:h??d,transmission:n?t:0,thickness:e,side:f}))});function ps({all:l,scene:n,camera:u}){const f=Xe(({gl:r})=>r),t=Xe(({camera:r})=>r),e=Xe(({scene:r})=>r);return X.useLayoutEffect(()=>{const r=[];l&&(n||e).traverse(i=>{i.visible===!1&&(r.push(i),i.visible=!0)}),f.compile(n||e,u||t);const a=new Ea(128);new Ua(.01,1e5,a).update(f,n||e),a.dispose(),r.forEach(i=>i.visible=!1)},[]),null}const ms=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect, memo } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
} from '@react-three/drei'
import { easing } from 'maath'

export default function FluidGlass({
  mode = 'lens',
  lensProps = {},
  barProps = {},
  cubeProps = {},
}) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens
  const rawOverrides =
    mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' },
    ],
    ...modeProps
  } = rawOverrides

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
    >
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  )
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef()
  const { nodes } = useGLTF(glb)
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())
  const geoWidthRef = useRef(1)

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry
    geo.computeBoundingBox()
    geoWidthRef.current =
      geo.boundingBox.max.x - geo.boundingBox.min.x || 1
  }, [nodes, geometryKey])

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0
    const destY = lockToBottom
      ? -v.height / 2 + 0.2
      : followPointer
        ? (pointer.y * v.height) / 2
        : 0
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta)

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9
      const desired = maxWorld / geoWidthRef.current
      ref.current.scale.setScalar(Math.min(0.15, desired))
    }

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)
  
    // Background Color
    gl.setClearColor(0x5227ff, 1)
  })

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={nodes[geometryKey]?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
})

function Lens({ modeProps, ...p }) {
  return (
    <ModeWrapper
      glb="/assets/3d/lens.glb"
      geometryKey="Cylinder"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  )
}

function Cube({ modeProps, ...p }) {
  return (
    <ModeWrapper
      glb="/assets/3d/cube.glb"
      geometryKey="Cube"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  )
}

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
  }

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  )
}

function NavItems({ items }) {
  const group = useRef()
  const { viewport, camera } = useThree()

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= DEVICE.mobile.max
      ? 'mobile'
      : w <= DEVICE.tablet.max
        ? 'tablet'
        : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { spacing, fontSize } = DEVICE[device]

  useFrame(() => {
    if (!group.current) return
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1)

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing
    })
  })

  const handleNavigate = (link) => {
    if (!link) return
    link.startsWith('#')
      ? (window.location.hash = link)
      : (window.location.href = link)
  }

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/assets/fonts/figtreeblack.ttf"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation()
            handleNavigate(link)
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { height } = useThree((s) => s.viewport)

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
  })

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[3, height / 1.1, 1]}
        url="https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[2, 0, 3]}
        scale={3}
        url="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3, 1]}
        url="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-0.6, -height, 9]}
        scale={[1, 2, 1]}
        url="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[0.75, -height, 10.5]}
        scale={1.5}
        url="https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </group>
  )
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.40 },
    desktop: { fontSize: 0.7 },
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= 639
      ? 'mobile'
      : w <= 1023
        ? 'tablet'
        : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { fontSize } = DEVICE[device]

  return (
    <Text
      position={[0, 0, 12]}
      font="/assets/fonts/figtreeblack.ttf"
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  )
}
`,vs=`/* eslint-disable react/no-unknown-property */
import * as THREE from 'three'
import { useRef, useState, useEffect, memo } from 'react'
import { Canvas, createPortal, useFrame, useThree } from '@react-three/fiber'
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
} from '@react-three/drei'
import { easing } from 'maath'

export default function FluidGlass({
  mode = 'lens',
  lensProps = {},
  barProps = {},
  cubeProps = {},
}) {
  const Wrapper = mode === 'bar' ? Bar : mode === 'cube' ? Cube : Lens
  const rawOverrides =
    mode === 'bar' ? barProps : mode === 'cube' ? cubeProps : lensProps

  const {
    navItems = [
      { label: 'Home', link: '' },
      { label: 'About', link: '' },
      { label: 'Contact', link: '' },
    ],
    ...modeProps
  } = rawOverrides

  return (
    <Canvas
      camera={{ position: [0, 0, 20], fov: 15 }}
      gl={{ alpha: true }}
    >
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === 'bar' && <NavItems items={navItems} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  )
}

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}) {
  const ref = useRef()
  const { nodes } = useGLTF(glb)
  const buffer = useFBO()
  const { viewport: vp } = useThree()
  const [scene] = useState(() => new THREE.Scene())
  const geoWidthRef = useRef(1)

  useEffect(() => {
    const geo = nodes[geometryKey]?.geometry
    geo.computeBoundingBox()
    geoWidthRef.current =
      geo.boundingBox.max.x - geo.boundingBox.min.x || 1
  }, [nodes, geometryKey])

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0
    const destY = lockToBottom
      ? -v.height / 2 + 0.2
      : followPointer
        ? (pointer.y * v.height) / 2
        : 0
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta)

    if (modeProps.scale == null) {
      const maxWorld = v.width * 0.9
      const desired = maxWorld / geoWidthRef.current
      ref.current.scale.setScalar(Math.min(0.15, desired))
    }

    gl.setRenderTarget(buffer)
    gl.render(scene, camera)
    gl.setRenderTarget(null)

    // Background Color
    gl.setClearColor(0x5227ff, 1)
  })

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={nodes[geometryKey]?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...extraMat}
        />
      </mesh>
    </>
  )
})

function Lens({ modeProps, ...p }) {
  return (
    <ModeWrapper
      glb="/assets/3d/lens.glb"
      geometryKey="Cylinder"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  )
}

function Cube({ modeProps, ...p }) {
  return (
    <ModeWrapper
      glb="/assets/3d/cube.glb"
      geometryKey="Cube"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  )
}

function Bar({ modeProps = {}, ...p }) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: '#ffffff',
    attenuationColor: '#ffffff',
    attenuationDistance: 0.25,
  }

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  )
}

function NavItems({ items }) {
  const group = useRef()
  const { viewport, camera } = useThree()

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= DEVICE.mobile.max
      ? 'mobile'
      : w <= DEVICE.tablet.max
        ? 'tablet'
        : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { spacing, fontSize } = DEVICE[device]

  useFrame(() => {
    if (!group.current) return
    const v = viewport.getCurrentViewport(camera, [0, 0, 15])
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1)

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing
    })
  })

  const handleNavigate = (link) => {
    if (!link) return
    link.startsWith('#')
      ? (window.location.hash = link)
      : (window.location.href = link)
  }

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/assets/fonts/figtreeblack.ttf"
          depthWrite={false}
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          depthTest={false}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation()
            handleNavigate(link)
          }}
          onPointerOver={() => (document.body.style.cursor = 'pointer')}
          onPointerOut={() => (document.body.style.cursor = 'auto')}
        >
          {label}
        </Text>
      ))}
    </group>
  )
}

function Images() {
  const group = useRef()
  const data = useScroll()
  const { height } = useThree((s) => s.viewport)

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    group.current.children[4].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
  })

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[3, height / 1.1, 1]}
        url="https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[2, 0, 3]}
        scale={3}
        url="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3, 1]}
        url="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-0.6, -height, 9]}
        scale={[1, 2, 1]}
        url="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[0.75, -height, 10.5]}
        scale={1.5}
        url="https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </group>
  )
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.40 },
    desktop: { fontSize: 0.7 },
  }
  const getDevice = () => {
    const w = window.innerWidth
    return w <= 639
      ? 'mobile'
      : w <= 1023
        ? 'tablet'
        : 'desktop'
  }

  const [device, setDevice] = useState(getDevice())

  useEffect(() => {
    const onResize = () => setDevice(getDevice())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { fontSize } = DEVICE[device]

  return (
    <Text
      position={[0, 0, 12]}
      font="/assets/fonts/figtreeblack.ttf"
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  )
}
`,gs=`/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef, useState, useEffect, memo, ReactNode } from "react";
import {
  Canvas,
  createPortal,
  useFrame,
  useThree,
  ThreeElements,
} from "@react-three/fiber";
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { easing } from "maath";

type Mode = "lens" | "bar" | "cube";

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
}

export default function FluidGlass({
  mode = "lens",
  lensProps = {},
  barProps = {},
  cubeProps = {},
}: FluidGlassProps) {
  const Wrapper = mode === "bar" ? Bar : mode === "cube" ? Cube : Lens;
  const rawOverrides =
    mode === "bar" ? barProps : mode === "cube" ? cubeProps : lensProps;

  const {
    navItems = [
      { label: "Home", link: "" },
      { label: "About", link: "" },
      { label: "Contact", link: "" },
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === "bar" && <NavItems items={navItems as NavItem[]} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

type MeshProps = ThreeElements["mesh"];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom
      ? -v.height / 2 + 0.2
      : followPointer
        ? (pointer.y * v.height) / 2
        : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x5227ff, 1);
  });

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...(typeof extraMat === "object" && extraMat !== null
            ? extraMat
            : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/lens.glb"
      geometryKey="Cylinder"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  );
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/cube.glb"
      geometryKey="Cube"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  );
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: "#ffffff",
    attenuationColor: "#ffffff",
    attenuationDistance: 0.25,
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max
      ? "mobile"
      : w <= DEVICE.tablet.max
        ? "tablet"
        : "desktop";
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith("#")
      ? (window.location.hash = link)
      : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/assets/fonts/figtreeblack.ttf"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree((s) => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[3, height / 1.1]}
        url="https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[2, 0, 3]}
        scale={3}
        url="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3]}
        url="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-0.6, -height, 9]}
        scale={[1, 2]}
        url="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[0.75, -height, 10.5]}
        scale={1.5}
        url="https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </group>
  )
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.7 },
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? "mobile" : w <= 1023 ? "tablet" : "desktop";
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      font="/assets/fonts/figtreeblack.ttf"
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,bs=`/* eslint-disable react/no-unknown-property */
import * as THREE from "three";
import { useRef, useState, useEffect, memo, ReactNode } from "react";
import {
  Canvas,
  createPortal,
  useFrame,
  useThree,
  ThreeElements,
} from "@react-three/fiber";
import {
  useFBO,
  useGLTF,
  useScroll,
  Image,
  Scroll,
  Preload,
  ScrollControls,
  MeshTransmissionMaterial,
  Text,
} from "@react-three/drei";
import { easing } from "maath";

type Mode = "lens" | "bar" | "cube";

interface NavItem {
  label: string;
  link: string;
}

type ModeProps = Record<string, unknown>;

interface FluidGlassProps {
  mode?: Mode;
  lensProps?: ModeProps;
  barProps?: ModeProps;
  cubeProps?: ModeProps;
}

export default function FluidGlass({
  mode = "lens",
  lensProps = {},
  barProps = {},
  cubeProps = {},
}: FluidGlassProps) {
  const Wrapper = mode === "bar" ? Bar : mode === "cube" ? Cube : Lens;
  const rawOverrides =
    mode === "bar" ? barProps : mode === "cube" ? cubeProps : lensProps;

  const {
    navItems = [
      { label: "Home", link: "" },
      { label: "About", link: "" },
      { label: "Contact", link: "" },
    ],
    ...modeProps
  } = rawOverrides;

  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 15 }} gl={{ alpha: true }}>
      <ScrollControls damping={0.2} pages={3} distance={0.4}>
        {mode === "bar" && <NavItems items={navItems as NavItem[]} />}
        <Wrapper modeProps={modeProps}>
          <Scroll>
            <Typography />
            <Images />
          </Scroll>
          <Scroll html />
          <Preload />
        </Wrapper>
      </ScrollControls>
    </Canvas>
  );
}

type MeshProps = ThreeElements["mesh"];

interface ModeWrapperProps extends MeshProps {
  children?: ReactNode;
  glb: string;
  geometryKey: string;
  lockToBottom?: boolean;
  followPointer?: boolean;
  modeProps?: ModeProps;
}

interface ZoomMaterial extends THREE.Material {
  zoom: number;
}

interface ZoomMesh extends THREE.Mesh<THREE.BufferGeometry, ZoomMaterial> {}

type ZoomGroup = THREE.Group & { children: ZoomMesh[] };

const ModeWrapper = memo(function ModeWrapper({
  children,
  glb,
  geometryKey,
  lockToBottom = false,
  followPointer = true,
  modeProps = {},
  ...props
}: ModeWrapperProps) {
  const ref = useRef<THREE.Mesh>(null!);
  const { nodes } = useGLTF(glb);
  const buffer = useFBO();
  const { viewport: vp } = useThree();
  const [scene] = useState<THREE.Scene>(() => new THREE.Scene());
  const geoWidthRef = useRef<number>(1);

  useEffect(() => {
    const geo = (nodes[geometryKey] as THREE.Mesh)?.geometry;
    geo.computeBoundingBox();
    geoWidthRef.current = geo.boundingBox!.max.x - geo.boundingBox!.min.x || 1;
  }, [nodes, geometryKey]);

  useFrame((state, delta) => {
    const { gl, viewport, pointer, camera } = state;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);

    const destX = followPointer ? (pointer.x * v.width) / 2 : 0;
    const destY = lockToBottom
      ? -v.height / 2 + 0.2
      : followPointer
        ? (pointer.y * v.height) / 2
        : 0;
    easing.damp3(ref.current.position, [destX, destY, 15], 0.15, delta);

    if ((modeProps as { scale?: number }).scale == null) {
      const maxWorld = v.width * 0.9;
      const desired = maxWorld / geoWidthRef.current;
      ref.current.scale.setScalar(Math.min(0.15, desired));
    }

    gl.setRenderTarget(buffer);
    gl.render(scene, camera);
    gl.setRenderTarget(null);
    gl.setClearColor(0x5227ff, 1);
  });

  const {
    scale,
    ior,
    thickness,
    anisotropy,
    chromaticAberration,
    ...extraMat
  } = modeProps as {
    scale?: number;
    ior?: number;
    thickness?: number;
    anisotropy?: number;
    chromaticAberration?: number;
    [key: string]: unknown;
  };

  return (
    <>
      {createPortal(children, scene)}
      <mesh scale={[vp.width, vp.height, 1]}>
        <planeGeometry />
        <meshBasicMaterial map={buffer.texture} transparent />
      </mesh>
      <mesh
        ref={ref}
        scale={scale ?? 0.15}
        rotation-x={Math.PI / 2}
        geometry={(nodes[geometryKey] as THREE.Mesh)?.geometry}
        {...props}
      >
        <MeshTransmissionMaterial
          buffer={buffer.texture}
          ior={ior ?? 1.15}
          thickness={thickness ?? 5}
          anisotropy={anisotropy ?? 0.01}
          chromaticAberration={chromaticAberration ?? 0.1}
          {...(typeof extraMat === "object" && extraMat !== null
            ? extraMat
            : {})}
        />
      </mesh>
    </>
  );
});

function Lens({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/lens.glb"
      geometryKey="Cylinder"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  );
}

function Cube({ modeProps, ...p }: { modeProps?: ModeProps } & MeshProps) {
  return (
    <ModeWrapper
      glb="/assets/3d/cube.glb"
      geometryKey="Cube"
      followPointer
      modeProps={modeProps}
      {...p}
    />
  );
}

function Bar({ modeProps = {}, ...p }: { modeProps?: ModeProps } & MeshProps) {
  const defaultMat = {
    transmission: 1,
    roughness: 0,
    thickness: 10,
    ior: 1.15,
    color: "#ffffff",
    attenuationColor: "#ffffff",
    attenuationDistance: 0.25,
  };

  return (
    <ModeWrapper
      glb="/assets/3d/bar.glb"
      geometryKey="Cube"
      lockToBottom
      followPointer={false}
      modeProps={{ ...defaultMat, ...modeProps }}
      {...p}
    />
  );
}

function NavItems({ items }: { items: NavItem[] }) {
  const group = useRef<THREE.Group>(null!);
  const { viewport, camera } = useThree();

  const DEVICE = {
    mobile: { max: 639, spacing: 0.2, fontSize: 0.035 },
    tablet: { max: 1023, spacing: 0.24, fontSize: 0.045 },
    desktop: { max: Infinity, spacing: 0.3, fontSize: 0.045 },
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= DEVICE.mobile.max
      ? "mobile"
      : w <= DEVICE.tablet.max
        ? "tablet"
        : "desktop";
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { spacing, fontSize } = DEVICE[device];

  useFrame(() => {
    if (!group.current) return;
    const v = viewport.getCurrentViewport(camera, [0, 0, 15]);
    group.current.position.set(0, -v.height / 2 + 0.2, 15.1);

    group.current.children.forEach((child, i) => {
      child.position.x = (i - (items.length - 1) / 2) * spacing;
    });
  });

  const handleNavigate = (link: string) => {
    if (!link) return;
    link.startsWith("#")
      ? (window.location.hash = link)
      : (window.location.href = link);
  };

  return (
    <group ref={group} renderOrder={10}>
      {items.map(({ label, link }) => (
        <Text
          key={label}
          fontSize={fontSize}
          color="white"
          anchorX="center"
          anchorY="middle"
          font="/assets/fonts/figtreeblack.ttf"
          outlineWidth={0}
          outlineBlur="20%"
          outlineColor="#000"
          outlineOpacity={0.5}
          renderOrder={10}
          onClick={(e) => {
            e.stopPropagation();
            handleNavigate(link);
          }}
          onPointerOver={() => (document.body.style.cursor = "pointer")}
          onPointerOut={() => (document.body.style.cursor = "auto")}
        >
          {label}
        </Text>
      ))}
    </group>
  );
}

function Images() {
  const group = useRef<ZoomGroup>(null!);
  const data = useScroll();
  const { height } = useThree((s) => s.viewport);

  useFrame(() => {
    group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3;
    group.current.children[2].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[3].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
    group.current.children[4].material.zoom =
      1 + data.range(1.15 / 3, 1 / 3) / 2;
  });

  return (
    <group ref={group}>
      <Image
        position={[-2, 0, 0]}
        scale={[3, height / 1.1]}
        url="https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[2, 0, 3]}
        scale={3}
        url="https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-2.05, -height, 6]}
        scale={[1, 3]}
        url="https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[-0.6, -height, 9]}
        scale={[1, 2]}
        url="https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <Image
        position={[0.75, -height, 10.5]}
        scale={1.5}
        url="https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </group>
  );
}

function Typography() {
  const DEVICE = {
    mobile: { fontSize: 0.2 },
    tablet: { fontSize: 0.4 },
    desktop: { fontSize: 0.7 },
  };
  const getDevice = () => {
    const w = window.innerWidth;
    return w <= 639 ? "mobile" : w <= 1023 ? "tablet" : "desktop";
  };

  const [device, setDevice] = useState<keyof typeof DEVICE>(getDevice());

  useEffect(() => {
    const onResize = () => setDevice(getDevice());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const { fontSize } = DEVICE[device];

  return (
    <Text
      position={[0, 0, 12]}
      font="/assets/fonts/figtreeblack.ttf"
      fontSize={fontSize}
      letterSpacing={-0.05}
      outlineWidth={0}
      outlineBlur="20%"
      outlineColor="#000"
      outlineOpacity={0.5}
      color="white"
      anchorX="center"
      anchorY="middle"
    >
      React Bits
    </Text>
  );
}
`,wo={...Ko("Components/FluidGlass"),installation:"npm install three @react-three/fiber @react-three/drei maath",usage:`// IMPORTANT INFO BELOW
// This component requires a 3D model to function correctly.
// You can find three example models in the 'public/assets/3d' directory of the repository:
// - 'lens.glb'
// - 'bar.glb'
// - 'cube.glb'
// Make sure to place these models in the correct directory or update the paths accordingly.

import FluidGlass from './FluidGlass'

<div style={{ height: '600px', position: 'relative' }}>
  <FluidGlass 
    mode="lens" // or "bar", "cube"
    lensProps={{
      scale: 0.25,
      ior: 1.15,
      thickness: 5,
      chromaticAberration: 0.1,
      anisotropy: 0.01  
    }}
    barProps={} // add specific props if using bar mode
    cubeProps={} // add specific props if using cube mode
  />
</div>`,code:ms,tailwind:vs,tsCode:gs,tsTailwind:bs};function ys({mode:l="lens",lensProps:n={},barProps:u={},cubeProps:f={}}){const t=l==="bar"?Ss:l==="cube"?ws:xs,e=l==="bar"?u:l==="cube"?f:n,{navItems:r=[{label:"Home",link:""},{label:"About",link:""},{label:"Contact",link:""}],...a}=e;return ce.jsx(la,{camera:{position:[0,0,20],fov:15},gl:{alpha:!0},children:ce.jsxs(fi,{damping:.2,pages:3,distance:.4,children:[l==="bar"&&ce.jsx(Ms,{items:r}),ce.jsxs(t,{modeProps:a,children:[ce.jsxs(oo,{children:[ce.jsx(Ts,{}),ce.jsx(ks,{})]}),ce.jsx(oo,{html:!0}),ce.jsx(ps,{})]})]})})}const Qn=X.memo(function({children:n,glb:u,geometryKey:f,lockToBottom:t=!1,followPointer:e=!0,modeProps:r={},...a}){var y;const o=X.useRef(),{nodes:i}=Fa(u),s=On(),{viewport:c}=Xe(),[d]=X.useState(()=>new Pa),h=X.useRef(1);X.useEffect(()=>{var _;const T=(_=i[f])==null?void 0:_.geometry;T.computeBoundingBox(),h.current=T.boundingBox.max.x-T.boundingBox.min.x||1},[i,f]),ht((T,_)=>{const{gl:x,viewport:w,pointer:R,camera:U}=T,N=w.getCurrentViewport(U,[0,0,15]),b=e?R.x*N.width/2:0,A=t?-N.height/2+.2:e?R.y*N.height/2:0;if(Wn.damp3(o.current.position,[b,A,15],.15,_),r.scale==null){const V=N.width*.9/h.current;o.current.scale.setScalar(Math.min(.15,V))}x.setRenderTarget(s),x.render(d,U),x.setRenderTarget(null),x.setClearColor(5384191,1)});const{scale:p,ior:g,thickness:v,anisotropy:C,chromaticAberration:M,...k}=r;return ce.jsxs(ce.Fragment,{children:[fa(n,d),ce.jsxs("mesh",{scale:[c.width,c.height,1],children:[ce.jsx("planeGeometry",{}),ce.jsx("meshBasicMaterial",{map:s.texture,transparent:!0})]}),ce.jsx("mesh",{ref:o,scale:p??.15,"rotation-x":Math.PI/2,geometry:(y=i[f])==null?void 0:y.geometry,...a,children:ce.jsx(hs,{buffer:s.texture,ior:g??1.15,thickness:v??5,anisotropy:C??.01,chromaticAberration:M??.1,...k})})]})});function xs({modeProps:l,...n}){return ce.jsx(Qn,{glb:"/assets/3d/lens.glb",geometryKey:"Cylinder",followPointer:!0,modeProps:l,...n})}function ws({modeProps:l,...n}){return ce.jsx(Qn,{glb:"/assets/3d/cube.glb",geometryKey:"Cube",followPointer:!0,modeProps:l,...n})}function Ss({modeProps:l={},...n}){const u={transmission:1,roughness:0,thickness:10,ior:1.15,color:"#ffffff",attenuationColor:"#ffffff",attenuationDistance:.25};return ce.jsx(Qn,{glb:"/assets/3d/bar.glb",geometryKey:"Cube",lockToBottom:!0,followPointer:!1,modeProps:{...u,...l},...n})}function Ms({items:l}){const n=X.useRef(),{viewport:u,camera:f}=Xe(),t={mobile:{max:639,spacing:.2,fontSize:.035},tablet:{max:1023,spacing:.24,fontSize:.045},desktop:{max:1/0,spacing:.3,fontSize:.045}},e=()=>{const c=window.innerWidth;return c<=t.mobile.max?"mobile":c<=t.tablet.max?"tablet":"desktop"},[r,a]=X.useState(e());X.useEffect(()=>{const c=()=>a(e());return window.addEventListener("resize",c),()=>window.removeEventListener("resize",c)},[]);const{spacing:o,fontSize:i}=t[r];ht(()=>{if(!n.current)return;const c=u.getCurrentViewport(f,[0,0,15]);n.current.position.set(0,-c.height/2+.2,15.1),n.current.children.forEach((d,h)=>{d.position.x=(h-(l.length-1)/2)*o})});const s=c=>{c&&(c.startsWith("#")?window.location.hash=c:window.location.href=c)};return ce.jsx("group",{ref:n,renderOrder:10,children:l.map(({label:c,link:d})=>ce.jsx(Lo,{fontSize:i,color:"white",anchorX:"center",anchorY:"middle",font:"/assets/fonts/figtreeblack.ttf",depthWrite:!1,outlineWidth:0,outlineBlur:"20%",outlineColor:"#000",outlineOpacity:.5,depthTest:!1,renderOrder:10,onClick:h=>{h.stopPropagation(),s(d)},onPointerOver:()=>document.body.style.cursor="pointer",onPointerOut:()=>document.body.style.cursor="auto",children:c},c))})}function ks(){const l=X.useRef(),n=Jn(),{height:u}=Xe(f=>f.viewport);return ht(()=>{l.current.children[0].material.zoom=1+n.range(0,1/3)/3,l.current.children[1].material.zoom=1+n.range(0,1/3)/3,l.current.children[2].material.zoom=1+n.range(1.15/3,1/3)/2,l.current.children[3].material.zoom=1+n.range(1.15/3,1/3)/2,l.current.children[4].material.zoom=1+n.range(1.15/3,1/3)/2}),ce.jsxs("group",{ref:l,children:[ce.jsx(Wt,{position:[-2,0,0],scale:[3,u/1.1,1],url:"https://images.unsplash.com/photo-1595001354022-29103be3b73a?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),ce.jsx(Wt,{position:[2,0,3],scale:3,url:"https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),ce.jsx(Wt,{position:[-2.05,-u,6],scale:[1,3,1],url:"https://images.unsplash.com/photo-1513682121497-80211f36a7d3?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),ce.jsx(Wt,{position:[-.6,-u,9],scale:[1,2,1],url:"https://images.unsplash.com/photo-1516205651411-aef33a44f7c2?q=80&w=2843&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}),ce.jsx(Wt,{position:[.75,-u,10.5],scale:1.5,url:"https://images.unsplash.com/photo-1505069190533-da1c9af13346?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"})]})}function Ts(){const l={mobile:{fontSize:.2},tablet:{fontSize:.4},desktop:{fontSize:.7}},n=()=>{const e=window.innerWidth;return e<=639?"mobile":e<=1023?"tablet":"desktop"},[u,f]=X.useState(n());X.useEffect(()=>{const e=()=>f(n());return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]);const{fontSize:t}=l[u];return ce.jsx(Lo,{position:[0,0,12],font:"/assets/fonts/figtreeblack.ttf",fontSize:t,letterSpacing:-.05,outlineWidth:0,outlineBlur:"20%",outlineColor:"#000",outlineOpacity:.5,color:"white",anchorX:"center",anchorY:"middle",children:"React Bits"})}const Ws=()=>{const[l,n]=aa(),[u,f]=X.useState("lens"),[t,e]=X.useState(.25),[r,a]=X.useState(1.15),[o,i]=X.useState(2),[s,c]=X.useState(1),[d,h]=X.useState(0),[p,g]=X.useState(.05),[v,C]=X.useState(.01),M=[{value:"lens",label:"Lens"},{value:"bar",label:"Bar"},{value:"cube",label:"Cube"}],k=_=>{f(_),_==="bar"?(e(.15),c(1),h(0),i(10),a(1.15)):(_==="lens"||_==="cube")&&(e(.25),a(1.15),i(5),g(.1),C(.01)),n()},y=()=>{const _={scale:t,ior:r,thickness:o,chromaticAberration:p,anisotropy:v};return u==="bar"?{..._,transmission:s,roughness:d,color:"#ffffff",attenuationColor:"#ffffff",attenuationDistance:.25}:_},T=[{name:"mode",type:"string",default:"'lens'",description:"Display mode of the fluid glass effect. Options: 'lens', 'bar', 'cube'"},{name:"lensProps",type:"object",default:"{}",description:"Props specific to lens mode including material properties like ior, thickness, transmission"},{name:"barProps",type:"object",default:"{}",description:"Props specific to bar mode including navItems array and material properties"},{name:"cubeProps",type:"object",default:"{}",description:"Props specific to cube mode including material properties and interaction settings"}];return ce.jsxs(Jo,{children:[ce.jsxs(Zo,{children:[ce.jsx(qo,{position:"relative",className:"demo-container",h:600,p:0,overflow:"hidden",children:ce.jsx(ys,{mode:u,lensProps:u==="lens"?y():{},barProps:u==="bar"?y():{},cubeProps:u==="cube"?y():{}},l)}),ce.jsxs(ra,{children:[ce.jsx(ia,{title:"Mode:",options:M,value:u,onChange:k,width:120}),ce.jsx(ft,{title:"Scale:",min:.05,max:.5,step:.05,value:t,onChange:e,width:150}),ce.jsx(ft,{title:"IOR:",min:1,max:2,step:.05,value:r,onChange:a,width:150}),ce.jsx(ft,{title:"Thickness:",min:1,max:20,step:1,value:o,onChange:i,width:150}),ce.jsx(ft,{title:"Chromatic Aberration:",min:0,max:.5,step:.01,value:p,onChange:g,width:150}),ce.jsx(ft,{title:"Anisotropy:",min:0,max:.1,step:.01,value:v,onChange:C,width:150}),u==="bar"&&ce.jsxs(ce.Fragment,{children:[ce.jsx(ft,{title:"Transmission:",min:0,max:1,step:.1,value:s,onChange:c,width:150}),ce.jsx(ft,{title:"Roughness:",min:0,max:1,step:.1,value:d,onChange:h,width:150})]})]}),ce.jsx(Qo,{data:T}),ce.jsx(oa,{dependencyList:["three","@react-three/fiber","@react-three/drei","maath"]})]}),ce.jsx($o,{children:ce.jsx(ea,{codeObject:wo})}),ce.jsx(ta,{children:ce.jsx(na,{...wo})})]})};export{Ws as default};
