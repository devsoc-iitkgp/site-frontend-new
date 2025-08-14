import{r as x,bU as bt,bN as wn,ao as We,j as O,g as Et,B as wt,T as Rt}from"./index-j7DW7U0N.js";import{T as Mt,P as Pt,a as Tt,C as Lt,b as St,c as At,d as It}from"./PropTable-Baf4PZpP.js";import{C as Dt}from"./Customize-Dq9g9yhm.js";import{P as An}from"./PreviewSelect-BhKIbQB2.js";import{P as ze}from"./PreviewSwitch-_xo3rdWG.js";import{P as fn}from"./PreviewSlider-D0sSZbsU.js";import{D as Ct}from"./Dependencies-BSh7s3YA.js";import{u as Ot}from"./useForceRerender-LUtjsLCb.js";import{a as le,u as Ze,f as Ht,c as rn,C as jt,i as we}from"./react-three-fiber.esm-UKojRSAj.js";import{n as G,$ as Ft,V as ce,d as Ce,O as Oe,b0 as Ne,b1 as In,a0 as Ie,b2 as Le,b3 as Se,b4 as kt,E as _t,b5 as an,b6 as zt,aj as at,au as Bt,ai as it,ay as Xt,a4 as Dn,c as Cn,T as On,b7 as Qe,D as Zt,C as he,ao as Vt,Y as K,aO as xn,aR as Hn,aI as tn,z as mn,y as jn,b as pe,av as Yt,aw as Ut,aJ as Gt,M as on,aH as en,aL as Wt,aP as Nt,H as Kt,X as De,b8 as ue,b9 as $t,ba as qt,a1 as Xe,aQ as Jt,aV as Qt,aX as eo,aW as no,s as Fn,P as to,bb as oo,a as kn,f as st,aG as _n,aF as Ke,aK as zn,aN as hn,A as ro,a_ as ao,a$ as io}from"./three.module-Df1A5Gfx.js";import{v as so,d as ct,u as lt}from"./Gltf-CzOebZvz.js";import{u as co,E as lo}from"./Environment-BYmCVng5.js";import"./field-BmHOm1Rn.js";const Ve=new G,Rn=new G,uo=new G,Bn=new ce;function po(l,n,t){const e=Ve.setFromMatrixPosition(l.matrixWorld);e.project(n);const o=t.width/2,r=t.height/2;return[e.x*o+o,-(e.y*r)+r]}function fo(l,n){const t=Ve.setFromMatrixPosition(l.matrixWorld),e=Rn.setFromMatrixPosition(n.matrixWorld),o=t.sub(e),r=n.getWorldDirection(uo);return o.angleTo(r)>Math.PI/2}function mo(l,n,t,e){const o=Ve.setFromMatrixPosition(l.matrixWorld),r=o.clone();r.project(n),Bn.set(r.x,r.y),t.setFromCamera(Bn,n);const a=t.intersectObjects(e,!0);if(a.length){const i=a[0].distance;return o.distanceTo(t.ray.origin)<i}return!0}function ho(l,n){if(n instanceof Oe)return n.zoom;if(n instanceof Ce){const t=Ve.setFromMatrixPosition(l.matrixWorld),e=Rn.setFromMatrixPosition(n.matrixWorld),o=n.fov*Math.PI/180,r=t.distanceTo(e);return 1/(2*Math.tan(o/2)*r)}else return 1}function vo(l,n,t){if(n instanceof Ce||n instanceof Oe){const e=Ve.setFromMatrixPosition(l.matrixWorld),o=Rn.setFromMatrixPosition(n.matrixWorld),r=e.distanceTo(o),a=(t[1]-t[0])/(n.far-n.near),i=t[1]-a*n.far;return Math.round(a*r+i)}}const bn=l=>Math.abs(l)<1e-10?0:l;function ut(l,n,t=""){let e="matrix3d(";for(let o=0;o!==16;o++)e+=bn(n[o]*l.elements[o])+(o!==15?",":")");return t+e}const yo=(l=>n=>ut(n,l))([1,-1,1,1,1,-1,1,1,1,-1,1,1,1,-1,1,1]),go=(l=>(n,t)=>ut(n,l(t),"translate(-50%,-50%)"))(l=>[1/l,1/l,1/l,1,-1/l,-1/l,-1/l,-1,1/l,1/l,1/l,1,1,1,1,1]);function xo(l){return l&&typeof l=="object"&&"current"in l}const bo=x.forwardRef(({children:l,eps:n=.001,style:t,className:e,prepend:o,center:r,fullscreen:a,portal:i,distanceFactor:c,sprite:d=!1,transform:u=!1,occlude:s,onOcclude:f,castShadow:m,receiveShadow:v,material:y,geometry:E,zIndexRange:b=[16777271,0],calculatePosition:w=po,as:M="div",wrapperClass:L,pointerEvents:P="auto",...h},C)=>{const{gl:X,camera:A,scene:R,size:j,raycaster:H,events:z,viewport:I}=le(),[S]=x.useState(()=>document.createElement(M)),F=x.useRef(null),V=x.useRef(null),B=x.useRef(0),Y=x.useRef([0,0]),Z=x.useRef(null),N=x.useRef(null),q=(i==null?void 0:i.current)||z.connected||X.domElement.parentNode,Q=x.useRef(null),te=x.useRef(!1),k=x.useMemo(()=>s&&s!=="blending"||Array.isArray(s)&&s.length&&xo(s[0]),[s]);x.useLayoutEffect(()=>{const ne=X.domElement;s&&s==="blending"?(ne.style.zIndex=`${Math.floor(b[0]/2)}`,ne.style.position="absolute",ne.style.pointerEvents="none"):(ne.style.zIndex=null,ne.style.position=null,ne.style.pointerEvents=null)},[s]),x.useLayoutEffect(()=>{if(V.current){const ne=F.current=bt.createRoot(S);if(R.updateMatrixWorld(),u)S.style.cssText="position:absolute;top:0;left:0;pointer-events:none;overflow:hidden;";else{const W=w(V.current,A,j);S.style.cssText=`position:absolute;top:0;left:0;transform:translate3d(${W[0]}px,${W[1]}px,0);transform-origin:0 0;`}return q&&(o?q.prepend(S):q.appendChild(S)),()=>{q&&q.removeChild(S),ne.unmount()}}},[q,u]),x.useLayoutEffect(()=>{L&&(S.className=L)},[L]);const re=x.useMemo(()=>u?{position:"absolute",top:0,left:0,width:j.width,height:j.height,transformStyle:"preserve-3d",pointerEvents:"none"}:{position:"absolute",transform:r?"translate3d(-50%,-50%,0)":"none",...a&&{top:-j.height/2,left:-j.width/2,width:j.width,height:j.height},...t},[t,r,a,j,u]),oe=x.useMemo(()=>({position:"absolute",pointerEvents:P}),[P]);x.useLayoutEffect(()=>{if(te.current=!1,u){var ne;(ne=F.current)==null||ne.render(x.createElement("div",{ref:Z,style:re},x.createElement("div",{ref:N,style:oe},x.createElement("div",{ref:C,className:e,style:t,children:l}))))}else{var W;(W=F.current)==null||W.render(x.createElement("div",{ref:C,style:re,className:e,children:l}))}});const ee=x.useRef(!0);Ze(ne=>{if(V.current){A.updateMatrixWorld(),V.current.updateWorldMatrix(!0,!1);const W=u?Y.current:w(V.current,A,j);if(u||Math.abs(B.current-A.zoom)>n||Math.abs(Y.current[0]-W[0])>n||Math.abs(Y.current[1]-W[1])>n){const de=fo(V.current,A);let ie=!1;k&&(Array.isArray(s)?ie=s.map(fe=>fe.current):s!=="blending"&&(ie=[R]));const xe=ee.current;if(ie){const fe=mo(V.current,A,H,ie);ee.current=fe&&!de}else ee.current=!de;xe!==ee.current&&(f?f(!ee.current):S.style.display=ee.current?"block":"none");const Pe=Math.floor(b[0]/2),sn=s?k?[b[0],Pe]:[Pe-1,0]:b;if(S.style.zIndex=`${vo(V.current,A,sn)}`,u){const[fe,He]=[j.width/2,j.height/2],Te=A.projectionMatrix.elements[5]*He,{isOrthographicCamera:Ye,top:cn,left:Ue,bottom:je,right:Re}=A,ln=yo(A.matrixWorldInverse),un=Ye?`scale(${Te})translate(${bn(-(Re+Ue)/2)}px,${bn((cn+je)/2)}px)`:`translateZ(${Te}px)`;let me=V.current.matrixWorld;d&&(me=A.matrixWorldInverse.clone().transpose().copyPosition(me).scale(V.current.scale),me.elements[3]=me.elements[7]=me.elements[11]=0,me.elements[15]=1),S.style.width=j.width+"px",S.style.height=j.height+"px",S.style.perspective=Ye?"":`${Te}px`,Z.current&&N.current&&(Z.current.style.transform=`${un}${ln}translate(${fe}px,${He}px)`,N.current.style.transform=go(me,1/((c||10)/400)))}else{const fe=c===void 0?1:ho(V.current,A)*c;S.style.transform=`translate3d(${W[0]}px,${W[1]}px,0) scale(${fe})`}Y.current=W,B.current=A.zoom}}if(!k&&Q.current&&!te.current)if(u){if(Z.current){const W=Z.current.children[0];if(W!=null&&W.clientWidth&&W!=null&&W.clientHeight){const{isOrthographicCamera:de}=A;if(de||E)h.scale&&(Array.isArray(h.scale)?h.scale instanceof G?Q.current.scale.copy(h.scale.clone().divideScalar(1)):Q.current.scale.set(1/h.scale[0],1/h.scale[1],1/h.scale[2]):Q.current.scale.setScalar(1/h.scale));else{const ie=(c||10)/400,xe=W.clientWidth*ie,Pe=W.clientHeight*ie;Q.current.scale.set(xe,Pe,1)}te.current=!0}}}else{const W=S.children[0];if(W!=null&&W.clientWidth&&W!=null&&W.clientHeight){const de=1/I.factor,ie=W.clientWidth*de,xe=W.clientHeight*de;Q.current.scale.set(ie,xe,1),te.current=!0}Q.current.lookAt(ne.camera.position)}});const Me=x.useMemo(()=>({vertexShader:u?void 0:`
          /*
            This shader is from the THREE's SpriteMaterial.
            We need to turn the backing plane into a Sprite
            (make it always face the camera) if "transfrom"
            is false.
          */
          #include <common>

          void main() {
            vec2 center = vec2(0., 1.);
            float rotation = 0.0;

            // This is somewhat arbitrary, but it seems to work well
            // Need to figure out how to derive this dynamically if it even matters
            float size = 0.03;

            vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
            vec2 scale;
            scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
            scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );

            bool isPerspective = isPerspectiveMatrix( projectionMatrix );
            if ( isPerspective ) scale *= - mvPosition.z;

            vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale * size;
            vec2 rotatedPosition;
            rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
            rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
            mvPosition.xy += rotatedPosition;

            gl_Position = projectionMatrix * mvPosition;
          }
      `,fragmentShader:`
        void main() {
          gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
        }
      `}),[u]);return x.createElement("group",wn({},h,{ref:V}),s&&!k&&x.createElement("mesh",{castShadow:m,receiveShadow:v,ref:Q},E||x.createElement("planeGeometry",null),y||x.createElement("shaderMaterial",{side:Ft,vertexShader:Me.vertexShader,fragmentShader:Me.fragmentShader})))}),Eo=l=>l;function wo(l,n=Eo){const t=We.useSyncExternalStore(l.subscribe,We.useCallback(()=>n(l.getState()),[l,n]),We.useCallback(()=>n(l.getInitialState()),[l,n]));return We.useDebugValue(t),t}const Xn=l=>{const n=Ht(l),t=e=>wo(n,e);return Object.assign(t,n),t},Ro=l=>l?Xn(l):Xn;let Be=0;const Mo=Ro(l=>(Ne.onStart=(n,t,e)=>{l({active:!0,item:n,loaded:t,total:e,progress:(t-Be)/(e-Be)*100})},Ne.onLoad=()=>{l({active:!1})},Ne.onError=n=>l(t=>({errors:[...t.errors,n]})),Ne.onProgress=(n,t,e)=>{t===e&&(Be=e),l({active:!0,item:n,loaded:t,total:e,progress:(t-Be)/(e-Be)*100||100})},{errors:[],active:!1,progress:0,item:"",loaded:0,total:0})),Po=so>=125?"uv1":"uv2";var To=Object.defineProperty,Lo=(l,n,t)=>n in l?To(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,So=(l,n,t)=>(Lo(l,n+"",t),t);class Ao{constructor(){So(this,"_listeners")}addEventListener(n,t){this._listeners===void 0&&(this._listeners={});const e=this._listeners;e[n]===void 0&&(e[n]=[]),e[n].indexOf(t)===-1&&e[n].push(t)}hasEventListener(n,t){if(this._listeners===void 0)return!1;const e=this._listeners;return e[n]!==void 0&&e[n].indexOf(t)!==-1}removeEventListener(n,t){if(this._listeners===void 0)return;const o=this._listeners[n];if(o!==void 0){const r=o.indexOf(t);r!==-1&&o.splice(r,1)}}dispatchEvent(n){if(this._listeners===void 0)return;const e=this._listeners[n.type];if(e!==void 0){n.target=this;const o=e.slice(0);for(let r=0,a=o.length;r<a;r++)o[r].call(this,n);n.target=null}}}var Io=Object.defineProperty,Do=(l,n,t)=>n in l?Io(l,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):l[n]=t,T=(l,n,t)=>(Do(l,typeof n!="symbol"?n+"":n,t),t);const $e=new kt,Zn=new _t,Co=Math.cos(70*(Math.PI/180)),Vn=(l,n)=>(l%n+n)%n;let Oo=class extends Ao{constructor(n,t){super(),T(this,"object"),T(this,"domElement"),T(this,"enabled",!0),T(this,"target",new G),T(this,"minDistance",0),T(this,"maxDistance",1/0),T(this,"minZoom",0),T(this,"maxZoom",1/0),T(this,"minPolarAngle",0),T(this,"maxPolarAngle",Math.PI),T(this,"minAzimuthAngle",-1/0),T(this,"maxAzimuthAngle",1/0),T(this,"enableDamping",!1),T(this,"dampingFactor",.05),T(this,"enableZoom",!0),T(this,"zoomSpeed",1),T(this,"enableRotate",!0),T(this,"rotateSpeed",1),T(this,"enablePan",!0),T(this,"panSpeed",1),T(this,"screenSpacePanning",!0),T(this,"keyPanSpeed",7),T(this,"zoomToCursor",!1),T(this,"autoRotate",!1),T(this,"autoRotateSpeed",2),T(this,"reverseOrbit",!1),T(this,"reverseHorizontalOrbit",!1),T(this,"reverseVerticalOrbit",!1),T(this,"keys",{LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"}),T(this,"mouseButtons",{LEFT:Le.ROTATE,MIDDLE:Le.DOLLY,RIGHT:Le.PAN}),T(this,"touches",{ONE:Se.ROTATE,TWO:Se.DOLLY_PAN}),T(this,"target0"),T(this,"position0"),T(this,"zoom0"),T(this,"_domElementKeyEvents",null),T(this,"getPolarAngle"),T(this,"getAzimuthalAngle"),T(this,"setPolarAngle"),T(this,"setAzimuthalAngle"),T(this,"getDistance"),T(this,"getZoomScale"),T(this,"listenToKeyEvents"),T(this,"stopListenToKeyEvents"),T(this,"saveState"),T(this,"reset"),T(this,"update"),T(this,"connect"),T(this,"dispose"),T(this,"dollyIn"),T(this,"dollyOut"),T(this,"getScale"),T(this,"setScale"),this.object=n,this.domElement=t,this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=()=>u.phi,this.getAzimuthalAngle=()=>u.theta,this.setPolarAngle=p=>{let g=Vn(p,2*Math.PI),D=u.phi;D<0&&(D+=2*Math.PI),g<0&&(g+=2*Math.PI);let U=Math.abs(g-D);2*Math.PI-U<U&&(g<D?g+=2*Math.PI:D+=2*Math.PI),s.phi=g-D,e.update()},this.setAzimuthalAngle=p=>{let g=Vn(p,2*Math.PI),D=u.theta;D<0&&(D+=2*Math.PI),g<0&&(g+=2*Math.PI);let U=Math.abs(g-D);2*Math.PI-U<U&&(g<D?g+=2*Math.PI:D+=2*Math.PI),s.theta=g-D,e.update()},this.getDistance=()=>e.object.position.distanceTo(e.target),this.listenToKeyEvents=p=>{p.addEventListener("keydown",pn),this._domElementKeyEvents=p},this.stopListenToKeyEvents=()=>{this._domElementKeyEvents.removeEventListener("keydown",pn),this._domElementKeyEvents=null},this.saveState=()=>{e.target0.copy(e.target),e.position0.copy(e.object.position),e.zoom0=e.object.zoom},this.reset=()=>{e.target.copy(e.target0),e.object.position.copy(e.position0),e.object.zoom=e.zoom0,e.object.updateProjectionMatrix(),e.dispatchEvent(o),e.update(),c=i.NONE},this.update=(()=>{const p=new G,g=new G(0,1,0),D=new Ie().setFromUnitVectors(n.up,g),U=D.clone().invert(),J=new G,ve=new Ie,be=2*Math.PI;return function(){const Sn=e.object.position;D.setFromUnitVectors(n.up,g),U.copy(D).invert(),p.copy(Sn).sub(e.target),p.applyQuaternion(D),u.setFromVector3(p),e.autoRotate&&c===i.NONE&&I(H()),e.enableDamping?(u.theta+=s.theta*e.dampingFactor,u.phi+=s.phi*e.dampingFactor):(u.theta+=s.theta,u.phi+=s.phi);let ye=e.minAzimuthAngle,ge=e.maxAzimuthAngle;isFinite(ye)&&isFinite(ge)&&(ye<-Math.PI?ye+=be:ye>Math.PI&&(ye-=be),ge<-Math.PI?ge+=be:ge>Math.PI&&(ge-=be),ye<=ge?u.theta=Math.max(ye,Math.min(ge,u.theta)):u.theta=u.theta>(ye+ge)/2?Math.max(ye,u.theta):Math.min(ge,u.theta)),u.phi=Math.max(e.minPolarAngle,Math.min(e.maxPolarAngle,u.phi)),u.makeSafe(),e.enableDamping===!0?e.target.addScaledVector(m,e.dampingFactor):e.target.add(m),e.zoomToCursor&&A||e.object.isOrthographicCamera?u.radius=Q(u.radius):u.radius=Q(u.radius*f),p.setFromSpherical(u),p.applyQuaternion(U),Sn.copy(e.target).add(p),e.object.matrixAutoUpdate||e.object.updateMatrix(),e.object.lookAt(e.target),e.enableDamping===!0?(s.theta*=1-e.dampingFactor,s.phi*=1-e.dampingFactor,m.multiplyScalar(1-e.dampingFactor)):(s.set(0,0,0),m.set(0,0,0));let Fe=!1;if(e.zoomToCursor&&A){let ke=null;if(e.object instanceof Ce&&e.object.isPerspectiveCamera){const _e=p.length();ke=Q(_e*f);const Ge=_e-ke;e.object.position.addScaledVector(C,Ge),e.object.updateMatrixWorld()}else if(e.object.isOrthographicCamera){const _e=new G(X.x,X.y,0);_e.unproject(e.object),e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix(),Fe=!0;const Ge=new G(X.x,X.y,0);Ge.unproject(e.object),e.object.position.sub(Ge).add(_e),e.object.updateMatrixWorld(),ke=p.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),e.zoomToCursor=!1;ke!==null&&(e.screenSpacePanning?e.target.set(0,0,-1).transformDirection(e.object.matrix).multiplyScalar(ke).add(e.object.position):($e.origin.copy(e.object.position),$e.direction.set(0,0,-1).transformDirection(e.object.matrix),Math.abs(e.object.up.dot($e.direction))<Co?n.lookAt(e.target):(Zn.setFromNormalAndCoplanarPoint(e.object.up,e.target),$e.intersectPlane(Zn,e.target))))}else e.object instanceof Oe&&e.object.isOrthographicCamera&&(Fe=f!==1,Fe&&(e.object.zoom=Math.max(e.minZoom,Math.min(e.maxZoom,e.object.zoom/f)),e.object.updateProjectionMatrix()));return f=1,A=!1,Fe||J.distanceToSquared(e.object.position)>d||8*(1-ve.dot(e.object.quaternion))>d?(e.dispatchEvent(o),J.copy(e.object.position),ve.copy(e.object.quaternion),Fe=!1,!0):!1}})(),this.connect=p=>{e.domElement=p,e.domElement.style.touchAction="none",e.domElement.addEventListener("contextmenu",Tn),e.domElement.addEventListener("pointerdown",Ue),e.domElement.addEventListener("pointercancel",Re),e.domElement.addEventListener("wheel",me)},this.dispose=()=>{var p,g,D,U,J,ve;e.domElement&&(e.domElement.style.touchAction="auto"),(p=e.domElement)==null||p.removeEventListener("contextmenu",Tn),(g=e.domElement)==null||g.removeEventListener("pointerdown",Ue),(D=e.domElement)==null||D.removeEventListener("pointercancel",Re),(U=e.domElement)==null||U.removeEventListener("wheel",me),(J=e.domElement)==null||J.ownerDocument.removeEventListener("pointermove",je),(ve=e.domElement)==null||ve.ownerDocument.removeEventListener("pointerup",Re),e._domElementKeyEvents!==null&&e._domElementKeyEvents.removeEventListener("keydown",pn)};const e=this,o={type:"change"},r={type:"start"},a={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let c=i.NONE;const d=1e-6,u=new In,s=new In;let f=1;const m=new G,v=new ce,y=new ce,E=new ce,b=new ce,w=new ce,M=new ce,L=new ce,P=new ce,h=new ce,C=new G,X=new ce;let A=!1;const R=[],j={};function H(){return 2*Math.PI/60/60*e.autoRotateSpeed}function z(){return Math.pow(.95,e.zoomSpeed)}function I(p){e.reverseOrbit||e.reverseHorizontalOrbit?s.theta+=p:s.theta-=p}function S(p){e.reverseOrbit||e.reverseVerticalOrbit?s.phi+=p:s.phi-=p}const F=(()=>{const p=new G;return function(D,U){p.setFromMatrixColumn(U,0),p.multiplyScalar(-D),m.add(p)}})(),V=(()=>{const p=new G;return function(D,U){e.screenSpacePanning===!0?p.setFromMatrixColumn(U,1):(p.setFromMatrixColumn(U,0),p.crossVectors(e.object.up,p)),p.multiplyScalar(D),m.add(p)}})(),B=(()=>{const p=new G;return function(D,U){const J=e.domElement;if(J&&e.object instanceof Ce&&e.object.isPerspectiveCamera){const ve=e.object.position;p.copy(ve).sub(e.target);let be=p.length();be*=Math.tan(e.object.fov/2*Math.PI/180),F(2*D*be/J.clientHeight,e.object.matrix),V(2*U*be/J.clientHeight,e.object.matrix)}else J&&e.object instanceof Oe&&e.object.isOrthographicCamera?(F(D*(e.object.right-e.object.left)/e.object.zoom/J.clientWidth,e.object.matrix),V(U*(e.object.top-e.object.bottom)/e.object.zoom/J.clientHeight,e.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),e.enablePan=!1)}})();function Y(p){e.object instanceof Ce&&e.object.isPerspectiveCamera||e.object instanceof Oe&&e.object.isOrthographicCamera?f=p:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),e.enableZoom=!1)}function Z(p){Y(f/p)}function N(p){Y(f*p)}function q(p){if(!e.zoomToCursor||!e.domElement)return;A=!0;const g=e.domElement.getBoundingClientRect(),D=p.clientX-g.left,U=p.clientY-g.top,J=g.width,ve=g.height;X.x=D/J*2-1,X.y=-(U/ve)*2+1,C.set(X.x,X.y,1).unproject(e.object).sub(e.object.position).normalize()}function Q(p){return Math.max(e.minDistance,Math.min(e.maxDistance,p))}function te(p){v.set(p.clientX,p.clientY)}function k(p){q(p),L.set(p.clientX,p.clientY)}function re(p){b.set(p.clientX,p.clientY)}function oe(p){y.set(p.clientX,p.clientY),E.subVectors(y,v).multiplyScalar(e.rotateSpeed);const g=e.domElement;g&&(I(2*Math.PI*E.x/g.clientHeight),S(2*Math.PI*E.y/g.clientHeight)),v.copy(y),e.update()}function ee(p){P.set(p.clientX,p.clientY),h.subVectors(P,L),h.y>0?Z(z()):h.y<0&&N(z()),L.copy(P),e.update()}function Me(p){w.set(p.clientX,p.clientY),M.subVectors(w,b).multiplyScalar(e.panSpeed),B(M.x,M.y),b.copy(w),e.update()}function ne(p){q(p),p.deltaY<0?N(z()):p.deltaY>0&&Z(z()),e.update()}function W(p){let g=!1;switch(p.code){case e.keys.UP:B(0,e.keyPanSpeed),g=!0;break;case e.keys.BOTTOM:B(0,-e.keyPanSpeed),g=!0;break;case e.keys.LEFT:B(e.keyPanSpeed,0),g=!0;break;case e.keys.RIGHT:B(-e.keyPanSpeed,0),g=!0;break}g&&(p.preventDefault(),e.update())}function de(){if(R.length==1)v.set(R[0].pageX,R[0].pageY);else{const p=.5*(R[0].pageX+R[1].pageX),g=.5*(R[0].pageY+R[1].pageY);v.set(p,g)}}function ie(){if(R.length==1)b.set(R[0].pageX,R[0].pageY);else{const p=.5*(R[0].pageX+R[1].pageX),g=.5*(R[0].pageY+R[1].pageY);b.set(p,g)}}function xe(){const p=R[0].pageX-R[1].pageX,g=R[0].pageY-R[1].pageY,D=Math.sqrt(p*p+g*g);L.set(0,D)}function Pe(){e.enableZoom&&xe(),e.enablePan&&ie()}function sn(){e.enableZoom&&xe(),e.enableRotate&&de()}function fe(p){if(R.length==1)y.set(p.pageX,p.pageY);else{const D=dn(p),U=.5*(p.pageX+D.x),J=.5*(p.pageY+D.y);y.set(U,J)}E.subVectors(y,v).multiplyScalar(e.rotateSpeed);const g=e.domElement;g&&(I(2*Math.PI*E.x/g.clientHeight),S(2*Math.PI*E.y/g.clientHeight)),v.copy(y)}function He(p){if(R.length==1)w.set(p.pageX,p.pageY);else{const g=dn(p),D=.5*(p.pageX+g.x),U=.5*(p.pageY+g.y);w.set(D,U)}M.subVectors(w,b).multiplyScalar(e.panSpeed),B(M.x,M.y),b.copy(w)}function Te(p){const g=dn(p),D=p.pageX-g.x,U=p.pageY-g.y,J=Math.sqrt(D*D+U*U);P.set(0,J),h.set(0,Math.pow(P.y/L.y,e.zoomSpeed)),Z(h.y),L.copy(P)}function Ye(p){e.enableZoom&&Te(p),e.enablePan&&He(p)}function cn(p){e.enableZoom&&Te(p),e.enableRotate&&fe(p)}function Ue(p){var g,D;e.enabled!==!1&&(R.length===0&&((g=e.domElement)==null||g.ownerDocument.addEventListener("pointermove",je),(D=e.domElement)==null||D.ownerDocument.addEventListener("pointerup",Re)),gt(p),p.pointerType==="touch"?vt(p):ln(p))}function je(p){e.enabled!==!1&&(p.pointerType==="touch"?yt(p):un(p))}function Re(p){var g,D,U;xt(p),R.length===0&&((g=e.domElement)==null||g.releasePointerCapture(p.pointerId),(D=e.domElement)==null||D.ownerDocument.removeEventListener("pointermove",je),(U=e.domElement)==null||U.ownerDocument.removeEventListener("pointerup",Re)),e.dispatchEvent(a),c=i.NONE}function ln(p){let g;switch(p.button){case 0:g=e.mouseButtons.LEFT;break;case 1:g=e.mouseButtons.MIDDLE;break;case 2:g=e.mouseButtons.RIGHT;break;default:g=-1}switch(g){case Le.DOLLY:if(e.enableZoom===!1)return;k(p),c=i.DOLLY;break;case Le.ROTATE:if(p.ctrlKey||p.metaKey||p.shiftKey){if(e.enablePan===!1)return;re(p),c=i.PAN}else{if(e.enableRotate===!1)return;te(p),c=i.ROTATE}break;case Le.PAN:if(p.ctrlKey||p.metaKey||p.shiftKey){if(e.enableRotate===!1)return;te(p),c=i.ROTATE}else{if(e.enablePan===!1)return;re(p),c=i.PAN}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(r)}function un(p){if(e.enabled!==!1)switch(c){case i.ROTATE:if(e.enableRotate===!1)return;oe(p);break;case i.DOLLY:if(e.enableZoom===!1)return;ee(p);break;case i.PAN:if(e.enablePan===!1)return;Me(p);break}}function me(p){e.enabled===!1||e.enableZoom===!1||c!==i.NONE&&c!==i.ROTATE||(p.preventDefault(),e.dispatchEvent(r),ne(p),e.dispatchEvent(a))}function pn(p){e.enabled===!1||e.enablePan===!1||W(p)}function vt(p){switch(Ln(p),R.length){case 1:switch(e.touches.ONE){case Se.ROTATE:if(e.enableRotate===!1)return;de(),c=i.TOUCH_ROTATE;break;case Se.PAN:if(e.enablePan===!1)return;ie(),c=i.TOUCH_PAN;break;default:c=i.NONE}break;case 2:switch(e.touches.TWO){case Se.DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Pe(),c=i.TOUCH_DOLLY_PAN;break;case Se.DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;sn(),c=i.TOUCH_DOLLY_ROTATE;break;default:c=i.NONE}break;default:c=i.NONE}c!==i.NONE&&e.dispatchEvent(r)}function yt(p){switch(Ln(p),c){case i.TOUCH_ROTATE:if(e.enableRotate===!1)return;fe(p),e.update();break;case i.TOUCH_PAN:if(e.enablePan===!1)return;He(p),e.update();break;case i.TOUCH_DOLLY_PAN:if(e.enableZoom===!1&&e.enablePan===!1)return;Ye(p),e.update();break;case i.TOUCH_DOLLY_ROTATE:if(e.enableZoom===!1&&e.enableRotate===!1)return;cn(p),e.update();break;default:c=i.NONE}}function Tn(p){e.enabled!==!1&&p.preventDefault()}function gt(p){R.push(p)}function xt(p){delete j[p.pointerId];for(let g=0;g<R.length;g++)if(R[g].pointerId==p.pointerId){R.splice(g,1);return}}function Ln(p){let g=j[p.pointerId];g===void 0&&(g=new ce,j[p.pointerId]=g),g.set(p.pageX,p.pageY)}function dn(p){const g=p.pointerId===R[0].pointerId?R[1]:R[0];return j[g.pointerId]}this.dollyIn=(p=z())=>{N(p),e.update()},this.dollyOut=(p=z())=>{Z(p),e.update()},this.getScale=()=>f,this.setScale=p=>{Y(p),e.update()},this.getZoomScale=()=>z(),t!==void 0&&this.connect(t),this.update()}};const Ho={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},jo={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `};function pt(l,n,t){const e=t.length-l-1;if(n>=t[e])return e-1;if(n<=t[l])return l;let o=l,r=e,a=Math.floor((o+r)/2);for(;n<t[a]||n>=t[a+1];)n<t[a]?r=a:o=a,a=Math.floor((o+r)/2);return a}function Fo(l,n,t,e){const o=[],r=[],a=[];o[0]=1;for(let i=1;i<=t;++i){r[i]=n-e[l+1-i],a[i]=e[l+i]-n;let c=0;for(let d=0;d<i;++d){const u=a[d+1],s=r[i-d],f=o[d]/(u+s);o[d]=c+u*f,c=s*f}o[i]=c}return o}function ko(l,n,t,e){const o=pt(l,e,n),r=Fo(o,e,l,n),a=new an(0,0,0,0);for(let i=0;i<=l;++i){const c=t[o-l+i],d=r[i],u=c.w*d;a.x+=c.x*u,a.y+=c.y*u,a.z+=c.z*u,a.w+=c.w*d}return a}function _o(l,n,t,e,o){const r=[];for(let s=0;s<=t;++s)r[s]=0;const a=[];for(let s=0;s<=e;++s)a[s]=r.slice(0);const i=[];for(let s=0;s<=t;++s)i[s]=r.slice(0);i[0][0]=1;const c=r.slice(0),d=r.slice(0);for(let s=1;s<=t;++s){c[s]=n-o[l+1-s],d[s]=o[l+s]-n;let f=0;for(let m=0;m<s;++m){const v=d[m+1],y=c[s-m];i[s][m]=v+y;const E=i[m][s-1]/i[s][m];i[m][s]=f+v*E,f=y*E}i[s][s]=f}for(let s=0;s<=t;++s)a[0][s]=i[s][t];for(let s=0;s<=t;++s){let f=0,m=1;const v=[];for(let y=0;y<=t;++y)v[y]=r.slice(0);v[0][0]=1;for(let y=1;y<=e;++y){let E=0;const b=s-y,w=t-y;s>=y&&(v[m][0]=v[f][0]/i[w+1][b],E=v[m][0]*i[b][w]);const M=b>=-1?1:-b,L=s-1<=w?y-1:t-s;for(let h=M;h<=L;++h)v[m][h]=(v[f][h]-v[f][h-1])/i[w+1][b+h],E+=v[m][h]*i[b+h][w];s<=w&&(v[m][y]=-v[f][y-1]/i[w+1][s],E+=v[m][y]*i[s][w]),a[y][s]=E;const P=f;f=m,m=P}}let u=t;for(let s=1;s<=e;++s){for(let f=0;f<=t;++f)a[s][f]*=u;u*=t-s}return a}function zo(l,n,t,e,o){const r=o<l?o:l,a=[],i=pt(l,e,n),c=_o(i,e,l,r,n),d=[];for(let u=0;u<t.length;++u){const s=t[u].clone(),f=s.w;s.x*=f,s.y*=f,s.z*=f,d[u]=s}for(let u=0;u<=r;++u){const s=d[i-l].clone().multiplyScalar(c[u][0]);for(let f=1;f<=l;++f)s.add(d[i-l+f].clone().multiplyScalar(c[u][f]));a[u]=s}for(let u=r+1;u<=o+1;++u)a[u]=new an(0,0,0);return a}function Bo(l,n){let t=1;for(let o=2;o<=l;++o)t*=o;let e=1;for(let o=2;o<=n;++o)e*=o;for(let o=2;o<=l-n;++o)e*=o;return t/e}function Xo(l){const n=l.length,t=[],e=[];for(let r=0;r<n;++r){const a=l[r];t[r]=new G(a.x,a.y,a.z),e[r]=a.w}const o=[];for(let r=0;r<n;++r){const a=t[r].clone();for(let i=1;i<=r;++i)a.sub(o[r-i].clone().multiplyScalar(Bo(r,i)*e[i]));o[r]=a.divideScalar(e[0])}return o}function Zo(l,n,t,e,o){const r=zo(l,n,t,e,o);return Xo(r)}class Yn extends zt{constructor(n,t,e,o,r){super(),this.degree=n,this.knots=t,this.controlPoints=[],this.startKnot=o||0,this.endKnot=r||this.knots.length-1;for(let a=0;a<e.length;++a){const i=e[a];this.controlPoints[a]=new an(i.x,i.y,i.z,i.w)}}getPoint(n,t){const e=t||new G,o=this.knots[this.startKnot]+n*(this.knots[this.endKnot]-this.knots[this.startKnot]),r=ko(this.degree,this.knots,this.controlPoints,o);return r.w!=1&&r.divideScalar(r.w),e.set(r.x,r.y,r.z)}getTangent(n,t){const e=t||new G,o=this.knots[0]+n*(this.knots[this.knots.length-1]-this.knots[0]),r=Zo(this.degree,this.knots,this.controlPoints,o,1);return e.copy(r[1]).normalize(),e}}let _,$,ae;class Mn extends at{constructor(n){super(n)}load(n,t,e,o){const r=this,a=r.path===""?Bt.extractUrlBase(n):r.path,i=new it(this.manager);i.setPath(r.path),i.setResponseType("arraybuffer"),i.setRequestHeader(r.requestHeader),i.setWithCredentials(r.withCredentials),i.load(n,function(c){try{t(r.parse(c,a))}catch(d){o?o(d):console.error(d),r.manager.itemError(n)}},e,o)}parse(n,t){if(No(n))_=new Wo().parse(n);else{const o=ht(n);if(!Ko(o))throw new Error("THREE.FBXLoader: Unknown format.");if(Gn(o)<7e3)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+Gn(o));_=new Go().parse(o)}const e=new Xt(this.manager).setPath(this.resourcePath||t).setCrossOrigin(this.crossOrigin);return new Vo(e,this.manager).parse(_)}}class Vo{constructor(n,t){this.textureLoader=n,this.manager=t}parse(){$=this.parseConnections();const n=this.parseImages(),t=this.parseTextures(n),e=this.parseMaterials(t),o=this.parseDeformers(),r=new Yo().parse(o);return this.parseScene(o,r,e),ae}parseConnections(){const n=new Map;return"Connections"in _&&_.Connections.connections.forEach(function(e){const o=e[0],r=e[1],a=e[2];n.has(o)||n.set(o,{parents:[],children:[]});const i={ID:r,relationship:a};n.get(o).parents.push(i),n.has(r)||n.set(r,{parents:[],children:[]});const c={ID:o,relationship:a};n.get(r).children.push(c)}),n}parseImages(){const n={},t={};if("Video"in _.Objects){const e=_.Objects.Video;for(const o in e){const r=e[o],a=parseInt(o);if(n[a]=r.RelativeFilename||r.Filename,"Content"in r){const i=r.Content instanceof ArrayBuffer&&r.Content.byteLength>0,c=typeof r.Content=="string"&&r.Content!=="";if(i||c){const d=this.parseImage(e[o]);t[r.RelativeFilename||r.Filename]=d}}}}for(const e in n){const o=n[e];t[o]!==void 0?n[e]=t[o]:n[e]=n[e].split("\\").pop()}return n}parseImage(n){const t=n.Content,e=n.RelativeFilename||n.Filename,o=e.slice(e.lastIndexOf(".")+1).toLowerCase();let r;switch(o){case"bmp":r="image/bmp";break;case"jpg":case"jpeg":r="image/jpeg";break;case"png":r="image/png";break;case"tif":r="image/tiff";break;case"tga":this.manager.getHandler(".tga")===null&&console.warn("FBXLoader: TGA loader not found, skipping ",e),r="image/tga";break;default:console.warn('FBXLoader: Image type "'+o+'" is not supported.');return}if(typeof t=="string")return"data:"+r+";base64,"+t;{const a=new Uint8Array(t);return window.URL.createObjectURL(new Blob([a],{type:r}))}}parseTextures(n){const t=new Map;if("Texture"in _.Objects){const e=_.Objects.Texture;for(const o in e){const r=this.parseTexture(e[o],n);t.set(parseInt(o),r)}}return t}parseTexture(n,t){const e=this.loadTexture(n,t);e.ID=n.id,e.name=n.attrName;const o=n.WrapModeU,r=n.WrapModeV,a=o!==void 0?o.value:0,i=r!==void 0?r.value:0;if(e.wrapS=a===0?Dn:Cn,e.wrapT=i===0?Dn:Cn,"Scaling"in n){const c=n.Scaling.value;e.repeat.x=c[0],e.repeat.y=c[1]}return e}loadTexture(n,t){let e;const o=this.textureLoader.path,r=$.get(n.id).children;r!==void 0&&r.length>0&&t[r[0].ID]!==void 0&&(e=t[r[0].ID],(e.indexOf("blob:")===0||e.indexOf("data:")===0)&&this.textureLoader.setPath(void 0));let a;const i=n.FileName.slice(-3).toLowerCase();if(i==="tga"){const c=this.manager.getHandler(".tga");c===null?(console.warn("FBXLoader: TGA loader not found, creating placeholder texture for",n.RelativeFilename),a=new On):(c.setPath(this.textureLoader.path),a=c.load(e))}else i==="psd"?(console.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for",n.RelativeFilename),a=new On):a=this.textureLoader.load(e);return this.textureLoader.setPath(o),a}parseMaterials(n){const t=new Map;if("Material"in _.Objects){const e=_.Objects.Material;for(const o in e){const r=this.parseMaterial(e[o],n);r!==null&&t.set(parseInt(o),r)}}return t}parseMaterial(n,t){const e=n.id,o=n.attrName;let r=n.ShadingModel;if(typeof r=="object"&&(r=r.value),!$.has(e))return null;const a=this.parseParameters(n,t,e);let i;switch(r.toLowerCase()){case"phong":i=new Qe;break;case"lambert":i=new Zt;break;default:console.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.',r),i=new Qe;break}return i.setValues(a),i.name=o,i}parseParameters(n,t,e){const o={};n.BumpFactor&&(o.bumpScale=n.BumpFactor.value),n.Diffuse?o.color=new he().fromArray(n.Diffuse.value):n.DiffuseColor&&(n.DiffuseColor.type==="Color"||n.DiffuseColor.type==="ColorRGB")&&(o.color=new he().fromArray(n.DiffuseColor.value)),n.DisplacementFactor&&(o.displacementScale=n.DisplacementFactor.value),n.Emissive?o.emissive=new he().fromArray(n.Emissive.value):n.EmissiveColor&&(n.EmissiveColor.type==="Color"||n.EmissiveColor.type==="ColorRGB")&&(o.emissive=new he().fromArray(n.EmissiveColor.value)),n.EmissiveFactor&&(o.emissiveIntensity=parseFloat(n.EmissiveFactor.value)),n.Opacity&&(o.opacity=parseFloat(n.Opacity.value)),o.opacity<1&&(o.transparent=!0),n.ReflectionFactor&&(o.reflectivity=n.ReflectionFactor.value),n.Shininess&&(o.shininess=n.Shininess.value),n.Specular?o.specular=new he().fromArray(n.Specular.value):n.SpecularColor&&n.SpecularColor.type==="Color"&&(o.specular=new he().fromArray(n.SpecularColor.value));const r=this;return $.get(e).children.forEach(function(a){const i=a.relationship;switch(i){case"Bump":o.bumpMap=r.getTexture(t,a.ID);break;case"Maya|TEX_ao_map":o.aoMap=r.getTexture(t,a.ID);break;case"DiffuseColor":case"Maya|TEX_color_map":o.map=r.getTexture(t,a.ID),o.map!==void 0&&("colorSpace"in o.map?o.map.colorSpace="srgb":o.map.encoding=3001);break;case"DisplacementColor":o.displacementMap=r.getTexture(t,a.ID);break;case"EmissiveColor":o.emissiveMap=r.getTexture(t,a.ID),o.emissiveMap!==void 0&&("colorSpace"in o.emissiveMap?o.emissiveMap.colorSpace="srgb":o.emissiveMap.encoding=3001);break;case"NormalMap":case"Maya|TEX_normal_map":o.normalMap=r.getTexture(t,a.ID);break;case"ReflectionColor":o.envMap=r.getTexture(t,a.ID),o.envMap!==void 0&&(o.envMap.mapping=Vt,"colorSpace"in o.envMap?o.envMap.colorSpace="srgb":o.envMap.encoding=3001);break;case"SpecularColor":o.specularMap=r.getTexture(t,a.ID),o.specularMap!==void 0&&("colorSpace"in o.specularMap?o.specularMap.colorSpace="srgb":o.specularMap.encoding=3001);break;case"TransparentColor":case"TransparencyFactor":o.alphaMap=r.getTexture(t,a.ID),o.transparent=!0;break;case"AmbientColor":case"ShininessExponent":case"SpecularFactor":case"VectorDisplacementColor":default:console.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.",i);break}}),o}getTexture(n,t){return"LayeredTexture"in _.Objects&&t in _.Objects.LayeredTexture&&(console.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."),t=$.get(t).children[0].ID),n.get(t)}parseDeformers(){const n={},t={};if("Deformer"in _.Objects){const e=_.Objects.Deformer;for(const o in e){const r=e[o],a=$.get(parseInt(o));if(r.attrType==="Skin"){const i=this.parseSkeleton(a,e);i.ID=o,a.parents.length>1&&console.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."),i.geometryID=a.parents[0].ID,n[o]=i}else if(r.attrType==="BlendShape"){const i={id:o};i.rawTargets=this.parseMorphTargets(a,e),i.id=o,a.parents.length>1&&console.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."),t[o]=i}}}return{skeletons:n,morphTargets:t}}parseSkeleton(n,t){const e=[];return n.children.forEach(function(o){const r=t[o.ID];if(r.attrType!=="Cluster")return;const a={ID:o.ID,indices:[],weights:[],transformLink:new K().fromArray(r.TransformLink.a)};"Indexes"in r&&(a.indices=r.Indexes.a,a.weights=r.Weights.a),e.push(a)}),{rawBones:e,bones:[]}}parseMorphTargets(n,t){const e=[];for(let o=0;o<n.children.length;o++){const r=n.children[o],a=t[r.ID],i={name:a.attrName,initialWeight:a.DeformPercent,id:a.id,fullWeights:a.FullWeights.a};if(a.attrType!=="BlendShapeChannel")return;i.geoID=$.get(parseInt(r.ID)).children.filter(function(c){return c.relationship===void 0})[0].ID,e.push(i)}return e}parseScene(n,t,e){ae=new xn;const o=this.parseModels(n.skeletons,t,e),r=_.Objects.Model,a=this;o.forEach(function(c){const d=r[c.ID];a.setLookAtProperties(c,d),$.get(c.ID).parents.forEach(function(s){const f=o.get(s.ID);f!==void 0&&f.add(c)}),c.parent===null&&ae.add(c)}),this.bindSkeleton(n.skeletons,t,o),this.createAmbientLight(),ae.traverse(function(c){if(c.userData.transformData){c.parent&&(c.userData.transformData.parentMatrix=c.parent.matrix,c.userData.transformData.parentMatrixWorld=c.parent.matrixWorld);const d=ft(c.userData.transformData);c.applyMatrix4(d),c.updateWorldMatrix()}});const i=new Uo().parse();ae.children.length===1&&ae.children[0].isGroup&&(ae.children[0].animations=i,ae=ae.children[0]),ae.animations=i}parseModels(n,t,e){const o=new Map,r=_.Objects.Model;for(const a in r){const i=parseInt(a),c=r[a],d=$.get(i);let u=this.buildSkeleton(d,n,i,c.attrName);if(!u){switch(c.attrType){case"Camera":u=this.createCamera(d);break;case"Light":u=this.createLight(d);break;case"Mesh":u=this.createMesh(d,t,e);break;case"NurbsCurve":u=this.createCurve(d,t);break;case"LimbNode":case"Root":u=new Hn;break;case"Null":default:u=new xn;break}u.name=c.attrName?tn.sanitizeNodeName(c.attrName):"",u.ID=i}this.getTransformData(u,c),o.set(i,u)}return o}buildSkeleton(n,t,e,o){let r=null;return n.parents.forEach(function(a){for(const i in t){const c=t[i];c.rawBones.forEach(function(d,u){if(d.ID===a.ID){const s=r;r=new Hn,r.matrixWorld.copy(d.transformLink),r.name=o?tn.sanitizeNodeName(o):"",r.ID=e,c.bones[u]=r,s!==null&&r.add(s)}})}}),r}createCamera(n){let t,e;if(n.children.forEach(function(o){const r=_.Objects.NodeAttribute[o.ID];r!==void 0&&(e=r)}),e===void 0)t=new mn;else{let o=0;e.CameraProjectionType!==void 0&&e.CameraProjectionType.value===1&&(o=1);let r=1;e.NearPlane!==void 0&&(r=e.NearPlane.value/1e3);let a=1e3;e.FarPlane!==void 0&&(a=e.FarPlane.value/1e3);let i=window.innerWidth,c=window.innerHeight;e.AspectWidth!==void 0&&e.AspectHeight!==void 0&&(i=e.AspectWidth.value,c=e.AspectHeight.value);const d=i/c;let u=45;e.FieldOfView!==void 0&&(u=e.FieldOfView.value);const s=e.FocalLength?e.FocalLength.value:null;switch(o){case 0:t=new Ce(u,d,r,a),s!==null&&t.setFocalLength(s);break;case 1:t=new Oe(-i/2,i/2,c/2,-c/2,r,a);break;default:console.warn("THREE.FBXLoader: Unknown camera type "+o+"."),t=new mn;break}}return t}createLight(n){let t,e;if(n.children.forEach(function(o){const r=_.Objects.NodeAttribute[o.ID];r!==void 0&&(e=r)}),e===void 0)t=new mn;else{let o;e.LightType===void 0?o=0:o=e.LightType.value;let r=16777215;e.Color!==void 0&&(r=new he().fromArray(e.Color.value));let a=e.Intensity===void 0?1:e.Intensity.value/100;e.CastLightOnObject!==void 0&&e.CastLightOnObject.value===0&&(a=0);let i=0;e.FarAttenuationEnd!==void 0&&(e.EnableFarAttenuation!==void 0&&e.EnableFarAttenuation.value===0?i=0:i=e.FarAttenuationEnd.value);const c=1;switch(o){case 0:t=new jn(r,a,i,c);break;case 1:t=new Ut(r,a);break;case 2:let d=Math.PI/3;e.InnerAngle!==void 0&&(d=pe.degToRad(e.InnerAngle.value));let u=0;e.OuterAngle!==void 0&&(u=pe.degToRad(e.OuterAngle.value),u=Math.max(u,1)),t=new Yt(r,a,i,d,u,c);break;default:console.warn("THREE.FBXLoader: Unknown light type "+e.LightType.value+", defaulting to a PointLight."),t=new jn(r,a);break}e.CastShadows!==void 0&&e.CastShadows.value===1&&(t.castShadow=!0)}return t}createMesh(n,t,e){let o,r=null,a=null;const i=[];return n.children.forEach(function(c){t.has(c.ID)&&(r=t.get(c.ID)),e.has(c.ID)&&i.push(e.get(c.ID))}),i.length>1?a=i:i.length>0?a=i[0]:(a=new Qe({color:13421772}),i.push(a)),"color"in r.attributes&&i.forEach(function(c){c.vertexColors=!0}),r.FBX_Deformer?(o=new Gt(r,a),o.normalizeSkinWeights()):o=new on(r,a),o}createCurve(n,t){const e=n.children.reduce(function(r,a){return t.has(a.ID)&&(r=t.get(a.ID)),r},null),o=new en({color:3342591,linewidth:1});return new Wt(e,o)}getTransformData(n,t){const e={};"InheritType"in t&&(e.inheritType=parseInt(t.InheritType.value)),"RotationOrder"in t?e.eulerOrder=mt(t.RotationOrder.value):e.eulerOrder="ZYX","Lcl_Translation"in t&&(e.translation=t.Lcl_Translation.value),"PreRotation"in t&&(e.preRotation=t.PreRotation.value),"Lcl_Rotation"in t&&(e.rotation=t.Lcl_Rotation.value),"PostRotation"in t&&(e.postRotation=t.PostRotation.value),"Lcl_Scaling"in t&&(e.scale=t.Lcl_Scaling.value),"ScalingOffset"in t&&(e.scalingOffset=t.ScalingOffset.value),"ScalingPivot"in t&&(e.scalingPivot=t.ScalingPivot.value),"RotationOffset"in t&&(e.rotationOffset=t.RotationOffset.value),"RotationPivot"in t&&(e.rotationPivot=t.RotationPivot.value),n.userData.transformData=e}setLookAtProperties(n,t){"LookAtProperty"in t&&$.get(n.ID).children.forEach(function(o){if(o.relationship==="LookAtProperty"){const r=_.Objects.Model[o.ID];if("Lcl_Translation"in r){const a=r.Lcl_Translation.value;n.target!==void 0?(n.target.position.fromArray(a),ae.add(n.target)):n.lookAt(new G().fromArray(a))}}})}bindSkeleton(n,t,e){const o=this.parsePoseNodes();for(const r in n){const a=n[r];$.get(parseInt(a.ID)).parents.forEach(function(c){if(t.has(c.ID)){const d=c.ID;$.get(d).parents.forEach(function(s){e.has(s.ID)&&e.get(s.ID).bind(new Nt(a.bones),o[s.ID])})}})}}parsePoseNodes(){const n={};if("Pose"in _.Objects){const t=_.Objects.Pose;for(const e in t)if(t[e].attrType==="BindPose"&&t[e].NbPoseNodes>0){const o=t[e].PoseNode;Array.isArray(o)?o.forEach(function(r){n[r.Node]=new K().fromArray(r.Matrix.a)}):n[o.Node]=new K().fromArray(o.Matrix.a)}}return n}createAmbientLight(){if("GlobalSettings"in _&&"AmbientColor"in _.GlobalSettings){const n=_.GlobalSettings.AmbientColor.value,t=n[0],e=n[1],o=n[2];if(t!==0||e!==0||o!==0){const r=new he(t,e,o);ae.add(new Kt(r,1))}}}}class Yo{parse(n){const t=new Map;if("Geometry"in _.Objects){const e=_.Objects.Geometry;for(const o in e){const r=$.get(parseInt(o)),a=this.parseGeometry(r,e[o],n);t.set(parseInt(o),a)}}return t}parseGeometry(n,t,e){switch(t.attrType){case"Mesh":return this.parseMeshGeometry(n,t,e);case"NurbsCurve":return this.parseNurbsGeometry(t)}}parseMeshGeometry(n,t,e){const o=e.skeletons,r=[],a=n.parents.map(function(s){return _.Objects.Model[s.ID]});if(a.length===0)return;const i=n.children.reduce(function(s,f){return o[f.ID]!==void 0&&(s=o[f.ID]),s},null);n.children.forEach(function(s){e.morphTargets[s.ID]!==void 0&&r.push(e.morphTargets[s.ID])});const c=a[0],d={};"RotationOrder"in c&&(d.eulerOrder=mt(c.RotationOrder.value)),"InheritType"in c&&(d.inheritType=parseInt(c.InheritType.value)),"GeometricTranslation"in c&&(d.translation=c.GeometricTranslation.value),"GeometricRotation"in c&&(d.rotation=c.GeometricRotation.value),"GeometricScaling"in c&&(d.scale=c.GeometricScaling.value);const u=ft(d);return this.genGeometry(t,i,r,u)}genGeometry(n,t,e,o){const r=new De;n.attrName&&(r.name=n.attrName);const a=this.parseGeoNode(n,t),i=this.genBuffers(a),c=new ue(i.vertex,3);if(c.applyMatrix4(o),r.setAttribute("position",c),i.colors.length>0&&r.setAttribute("color",new ue(i.colors,3)),t&&(r.setAttribute("skinIndex",new $t(i.weightsIndices,4)),r.setAttribute("skinWeight",new ue(i.vertexWeights,4)),r.FBX_Deformer=t),i.normal.length>0){const d=new qt().getNormalMatrix(o),u=new ue(i.normal,3);u.applyNormalMatrix(d),r.setAttribute("normal",u)}if(i.uvs.forEach(function(d,u){Po==="uv2"&&u++;const s=u===0?"uv":`uv${u}`;r.setAttribute(s,new ue(i.uvs[u],2))}),a.material&&a.material.mappingType!=="AllSame"){let d=i.materialIndex[0],u=0;if(i.materialIndex.forEach(function(s,f){s!==d&&(r.addGroup(u,f-u,d),d=s,u=f)}),r.groups.length>0){const s=r.groups[r.groups.length-1],f=s.start+s.count;f!==i.materialIndex.length&&r.addGroup(f,i.materialIndex.length-f,d)}r.groups.length===0&&r.addGroup(0,i.materialIndex.length,i.materialIndex[0])}return this.addMorphTargets(r,n,e,o),r}parseGeoNode(n,t){const e={};if(e.vertexPositions=n.Vertices!==void 0?n.Vertices.a:[],e.vertexIndices=n.PolygonVertexIndex!==void 0?n.PolygonVertexIndex.a:[],n.LayerElementColor&&(e.color=this.parseVertexColors(n.LayerElementColor[0])),n.LayerElementMaterial&&(e.material=this.parseMaterialIndices(n.LayerElementMaterial[0])),n.LayerElementNormal&&(e.normal=this.parseNormals(n.LayerElementNormal[0])),n.LayerElementUV){e.uv=[];let o=0;for(;n.LayerElementUV[o];)n.LayerElementUV[o].UV&&e.uv.push(this.parseUVs(n.LayerElementUV[o])),o++}return e.weightTable={},t!==null&&(e.skeleton=t,t.rawBones.forEach(function(o,r){o.indices.forEach(function(a,i){e.weightTable[a]===void 0&&(e.weightTable[a]=[]),e.weightTable[a].push({id:r,weight:o.weights[i]})})})),e}genBuffers(n){const t={vertex:[],normal:[],colors:[],uvs:[],materialIndex:[],vertexWeights:[],weightsIndices:[]};let e=0,o=0,r=!1,a=[],i=[],c=[],d=[],u=[],s=[];const f=this;return n.vertexIndices.forEach(function(m,v){let y,E=!1;m<0&&(m=m^-1,E=!0);let b=[],w=[];if(a.push(m*3,m*3+1,m*3+2),n.color){const M=qe(v,e,m,n.color);c.push(M[0],M[1],M[2])}if(n.skeleton){if(n.weightTable[m]!==void 0&&n.weightTable[m].forEach(function(M){w.push(M.weight),b.push(M.id)}),w.length>4){r||(console.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."),r=!0);const M=[0,0,0,0],L=[0,0,0,0];w.forEach(function(P,h){let C=P,X=b[h];L.forEach(function(A,R,j){if(C>A){j[R]=C,C=A;const H=M[R];M[R]=X,X=H}})}),b=M,w=L}for(;w.length<4;)w.push(0),b.push(0);for(let M=0;M<4;++M)u.push(w[M]),s.push(b[M])}if(n.normal){const M=qe(v,e,m,n.normal);i.push(M[0],M[1],M[2])}n.material&&n.material.mappingType!=="AllSame"&&(y=qe(v,e,m,n.material)[0]),n.uv&&n.uv.forEach(function(M,L){const P=qe(v,e,m,M);d[L]===void 0&&(d[L]=[]),d[L].push(P[0]),d[L].push(P[1])}),o++,E&&(f.genFace(t,n,a,y,i,c,d,u,s,o),e++,o=0,a=[],i=[],c=[],d=[],u=[],s=[])}),t}genFace(n,t,e,o,r,a,i,c,d,u){for(let s=2;s<u;s++)n.vertex.push(t.vertexPositions[e[0]]),n.vertex.push(t.vertexPositions[e[1]]),n.vertex.push(t.vertexPositions[e[2]]),n.vertex.push(t.vertexPositions[e[(s-1)*3]]),n.vertex.push(t.vertexPositions[e[(s-1)*3+1]]),n.vertex.push(t.vertexPositions[e[(s-1)*3+2]]),n.vertex.push(t.vertexPositions[e[s*3]]),n.vertex.push(t.vertexPositions[e[s*3+1]]),n.vertex.push(t.vertexPositions[e[s*3+2]]),t.skeleton&&(n.vertexWeights.push(c[0]),n.vertexWeights.push(c[1]),n.vertexWeights.push(c[2]),n.vertexWeights.push(c[3]),n.vertexWeights.push(c[(s-1)*4]),n.vertexWeights.push(c[(s-1)*4+1]),n.vertexWeights.push(c[(s-1)*4+2]),n.vertexWeights.push(c[(s-1)*4+3]),n.vertexWeights.push(c[s*4]),n.vertexWeights.push(c[s*4+1]),n.vertexWeights.push(c[s*4+2]),n.vertexWeights.push(c[s*4+3]),n.weightsIndices.push(d[0]),n.weightsIndices.push(d[1]),n.weightsIndices.push(d[2]),n.weightsIndices.push(d[3]),n.weightsIndices.push(d[(s-1)*4]),n.weightsIndices.push(d[(s-1)*4+1]),n.weightsIndices.push(d[(s-1)*4+2]),n.weightsIndices.push(d[(s-1)*4+3]),n.weightsIndices.push(d[s*4]),n.weightsIndices.push(d[s*4+1]),n.weightsIndices.push(d[s*4+2]),n.weightsIndices.push(d[s*4+3])),t.color&&(n.colors.push(a[0]),n.colors.push(a[1]),n.colors.push(a[2]),n.colors.push(a[(s-1)*3]),n.colors.push(a[(s-1)*3+1]),n.colors.push(a[(s-1)*3+2]),n.colors.push(a[s*3]),n.colors.push(a[s*3+1]),n.colors.push(a[s*3+2])),t.material&&t.material.mappingType!=="AllSame"&&(n.materialIndex.push(o),n.materialIndex.push(o),n.materialIndex.push(o)),t.normal&&(n.normal.push(r[0]),n.normal.push(r[1]),n.normal.push(r[2]),n.normal.push(r[(s-1)*3]),n.normal.push(r[(s-1)*3+1]),n.normal.push(r[(s-1)*3+2]),n.normal.push(r[s*3]),n.normal.push(r[s*3+1]),n.normal.push(r[s*3+2])),t.uv&&t.uv.forEach(function(f,m){n.uvs[m]===void 0&&(n.uvs[m]=[]),n.uvs[m].push(i[m][0]),n.uvs[m].push(i[m][1]),n.uvs[m].push(i[m][(s-1)*2]),n.uvs[m].push(i[m][(s-1)*2+1]),n.uvs[m].push(i[m][s*2]),n.uvs[m].push(i[m][s*2+1])})}addMorphTargets(n,t,e,o){if(e.length===0)return;n.morphTargetsRelative=!0,n.morphAttributes.position=[];const r=this;e.forEach(function(a){a.rawTargets.forEach(function(i){const c=_.Objects.Geometry[i.geoID];c!==void 0&&r.genMorphGeometry(n,t,c,o,i.name)})})}genMorphGeometry(n,t,e,o,r){const a=t.PolygonVertexIndex!==void 0?t.PolygonVertexIndex.a:[],i=e.Vertices!==void 0?e.Vertices.a:[],c=e.Indexes!==void 0?e.Indexes.a:[],d=n.attributes.position.count*3,u=new Float32Array(d);for(let v=0;v<c.length;v++){const y=c[v]*3;u[y]=i[v*3],u[y+1]=i[v*3+1],u[y+2]=i[v*3+2]}const s={vertexIndices:a,vertexPositions:u},f=this.genBuffers(s),m=new ue(f.vertex,3);m.name=r||e.attrName,m.applyMatrix4(o),n.morphAttributes.position.push(m)}parseNormals(n){const t=n.MappingInformationType,e=n.ReferenceInformationType,o=n.Normals.a;let r=[];return e==="IndexToDirect"&&("NormalIndex"in n?r=n.NormalIndex.a:"NormalsIndex"in n&&(r=n.NormalsIndex.a)),{dataSize:3,buffer:o,indices:r,mappingType:t,referenceType:e}}parseUVs(n){const t=n.MappingInformationType,e=n.ReferenceInformationType,o=n.UV.a;let r=[];return e==="IndexToDirect"&&(r=n.UVIndex.a),{dataSize:2,buffer:o,indices:r,mappingType:t,referenceType:e}}parseVertexColors(n){const t=n.MappingInformationType,e=n.ReferenceInformationType,o=n.Colors.a;let r=[];return e==="IndexToDirect"&&(r=n.ColorIndex.a),{dataSize:4,buffer:o,indices:r,mappingType:t,referenceType:e}}parseMaterialIndices(n){const t=n.MappingInformationType,e=n.ReferenceInformationType;if(t==="NoMappingInformation")return{dataSize:1,buffer:[0],indices:[0],mappingType:"AllSame",referenceType:e};const o=n.Materials.a,r=[];for(let a=0;a<o.length;++a)r.push(a);return{dataSize:1,buffer:o,indices:r,mappingType:t,referenceType:e}}parseNurbsGeometry(n){if(Yn===void 0)return console.error("THREE.FBXLoader: The loader relies on NURBSCurve for any nurbs present in the model. Nurbs will show up as empty geometry."),new De;const t=parseInt(n.Order);if(isNaN(t))return console.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s",n.Order,n.id),new De;const e=t-1,o=n.KnotVector.a,r=[],a=n.Points.a;for(let s=0,f=a.length;s<f;s+=4)r.push(new an().fromArray(a,s));let i,c;if(n.Form==="Closed")r.push(r[0]);else if(n.Form==="Periodic"){i=e,c=o.length-1-i;for(let s=0;s<e;++s)r.push(r[s])}const u=new Yn(e,o,r,i,c).getPoints(r.length*12);return new De().setFromPoints(u)}}class Uo{parse(){const n=[],t=this.parseClips();if(t!==void 0)for(const e in t){const o=t[e],r=this.addClip(o);n.push(r)}return n}parseClips(){if(_.Objects.AnimationCurve===void 0)return;const n=this.parseAnimationCurveNodes();this.parseAnimationCurves(n);const t=this.parseAnimationLayers(n);return this.parseAnimStacks(t)}parseAnimationCurveNodes(){const n=_.Objects.AnimationCurveNode,t=new Map;for(const e in n){const o=n[e];if(o.attrName.match(/S|R|T|DeformPercent/)!==null){const r={id:o.id,attr:o.attrName,curves:{}};t.set(r.id,r)}}return t}parseAnimationCurves(n){const t=_.Objects.AnimationCurve;for(const e in t){const o={id:t[e].id,times:t[e].KeyTime.a.map($o),values:t[e].KeyValueFloat.a},r=$.get(o.id);if(r!==void 0){const a=r.parents[0].ID,i=r.parents[0].relationship;i.match(/X/)?n.get(a).curves.x=o:i.match(/Y/)?n.get(a).curves.y=o:i.match(/Z/)?n.get(a).curves.z=o:i.match(/d|DeformPercent/)&&n.has(a)&&(n.get(a).curves.morph=o)}}}parseAnimationLayers(n){const t=_.Objects.AnimationLayer,e=new Map;for(const o in t){const r=[],a=$.get(parseInt(o));a!==void 0&&(a.children.forEach(function(c,d){if(n.has(c.ID)){const u=n.get(c.ID);if(u.curves.x!==void 0||u.curves.y!==void 0||u.curves.z!==void 0){if(r[d]===void 0){const s=$.get(c.ID).parents.filter(function(f){return f.relationship!==void 0})[0].ID;if(s!==void 0){const f=_.Objects.Model[s.toString()];if(f===void 0){console.warn("THREE.FBXLoader: Encountered a unused curve.",c);return}const m={modelName:f.attrName?tn.sanitizeNodeName(f.attrName):"",ID:f.id,initialPosition:[0,0,0],initialRotation:[0,0,0],initialScale:[1,1,1]};ae.traverse(function(v){v.ID===f.id&&(m.transform=v.matrix,v.userData.transformData&&(m.eulerOrder=v.userData.transformData.eulerOrder))}),m.transform||(m.transform=new K),"PreRotation"in f&&(m.preRotation=f.PreRotation.value),"PostRotation"in f&&(m.postRotation=f.PostRotation.value),r[d]=m}}r[d]&&(r[d][u.attr]=u)}else if(u.curves.morph!==void 0){if(r[d]===void 0){const s=$.get(c.ID).parents.filter(function(b){return b.relationship!==void 0})[0].ID,f=$.get(s).parents[0].ID,m=$.get(f).parents[0].ID,v=$.get(m).parents[0].ID,y=_.Objects.Model[v],E={modelName:y.attrName?tn.sanitizeNodeName(y.attrName):"",morphName:_.Objects.Deformer[s].attrName};r[d]=E}r[d][u.attr]=u}}}),e.set(parseInt(o),r))}return e}parseAnimStacks(n){const t=_.Objects.AnimationStack,e={};for(const o in t){const r=$.get(parseInt(o)).children;r.length>1&&console.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");const a=n.get(r[0].ID);e[o]={name:t[o].attrName,layer:a}}return e}addClip(n){let t=[];const e=this;return n.layer.forEach(function(o){t=t.concat(e.generateTracks(o))}),new Jt(n.name,-1,t)}generateTracks(n){const t=[];let e=new G,o=new Ie,r=new G;if(n.transform&&n.transform.decompose(e,o,r),e=e.toArray(),o=new Xe().setFromQuaternion(o,n.eulerOrder).toArray(),r=r.toArray(),n.T!==void 0&&Object.keys(n.T.curves).length>0){const a=this.generateVectorTrack(n.modelName,n.T.curves,e,"position");a!==void 0&&t.push(a)}if(n.R!==void 0&&Object.keys(n.R.curves).length>0){const a=this.generateRotationTrack(n.modelName,n.R.curves,o,n.preRotation,n.postRotation,n.eulerOrder);a!==void 0&&t.push(a)}if(n.S!==void 0&&Object.keys(n.S.curves).length>0){const a=this.generateVectorTrack(n.modelName,n.S.curves,r,"scale");a!==void 0&&t.push(a)}if(n.DeformPercent!==void 0){const a=this.generateMorphTrack(n);a!==void 0&&t.push(a)}return t}generateVectorTrack(n,t,e,o){const r=this.getTimesForAllAxes(t),a=this.getKeyframeTrackValues(r,t,e);return new Qt(n+"."+o,r,a)}generateRotationTrack(n,t,e,o,r,a){t.x!==void 0&&(this.interpolateRotations(t.x),t.x.values=t.x.values.map(pe.degToRad)),t.y!==void 0&&(this.interpolateRotations(t.y),t.y.values=t.y.values.map(pe.degToRad)),t.z!==void 0&&(this.interpolateRotations(t.z),t.z.values=t.z.values.map(pe.degToRad));const i=this.getTimesForAllAxes(t),c=this.getKeyframeTrackValues(i,t,e);o!==void 0&&(o=o.map(pe.degToRad),o.push(a),o=new Xe().fromArray(o),o=new Ie().setFromEuler(o)),r!==void 0&&(r=r.map(pe.degToRad),r.push(a),r=new Xe().fromArray(r),r=new Ie().setFromEuler(r).invert());const d=new Ie,u=new Xe,s=[];for(let f=0;f<c.length;f+=3)u.set(c[f],c[f+1],c[f+2],a),d.setFromEuler(u),o!==void 0&&d.premultiply(o),r!==void 0&&d.multiply(r),d.toArray(s,f/3*4);return new eo(n+".quaternion",i,s)}generateMorphTrack(n){const t=n.DeformPercent.curves.morph,e=t.values.map(function(r){return r/100}),o=ae.getObjectByName(n.modelName).morphTargetDictionary[n.morphName];return new no(n.modelName+".morphTargetInfluences["+o+"]",t.times,e)}getTimesForAllAxes(n){let t=[];if(n.x!==void 0&&(t=t.concat(n.x.times)),n.y!==void 0&&(t=t.concat(n.y.times)),n.z!==void 0&&(t=t.concat(n.z.times)),t=t.sort(function(e,o){return e-o}),t.length>1){let e=1,o=t[0];for(let r=1;r<t.length;r++){const a=t[r];a!==o&&(t[e]=a,o=a,e++)}t=t.slice(0,e)}return t}getKeyframeTrackValues(n,t,e){const o=e,r=[];let a=-1,i=-1,c=-1;return n.forEach(function(d){if(t.x&&(a=t.x.times.indexOf(d)),t.y&&(i=t.y.times.indexOf(d)),t.z&&(c=t.z.times.indexOf(d)),a!==-1){const u=t.x.values[a];r.push(u),o[0]=u}else r.push(o[0]);if(i!==-1){const u=t.y.values[i];r.push(u),o[1]=u}else r.push(o[1]);if(c!==-1){const u=t.z.values[c];r.push(u),o[2]=u}else r.push(o[2])}),r}interpolateRotations(n){for(let t=1;t<n.values.length;t++){const e=n.values[t-1],o=n.values[t]-e,r=Math.abs(o);if(r>=180){const a=r/180,i=o/a;let c=e+i;const d=n.times[t-1],s=(n.times[t]-d)/a;let f=d+s;const m=[],v=[];for(;f<n.times[t];)m.push(f),f+=s,v.push(c),c+=i;n.times=Wn(n.times,t,m),n.values=Wn(n.values,t,v)}}}}class Go{getPrevNode(){return this.nodeStack[this.currentIndent-2]}getCurrentNode(){return this.nodeStack[this.currentIndent-1]}getCurrentProp(){return this.currentProp}pushStack(n){this.nodeStack.push(n),this.currentIndent+=1}popStack(){this.nodeStack.pop(),this.currentIndent-=1}setCurrentProp(n,t){this.currentProp=n,this.currentPropName=t}parse(n){this.currentIndent=0,this.allNodes=new dt,this.nodeStack=[],this.currentProp=[],this.currentPropName="";const t=this,e=n.split(/[\r\n]+/);return e.forEach(function(o,r){const a=o.match(/^[\s\t]*;/),i=o.match(/^[\s\t]*$/);if(a||i)return;const c=o.match("^\\t{"+t.currentIndent+"}(\\w+):(.*){",""),d=o.match("^\\t{"+t.currentIndent+"}(\\w+):[\\s\\t\\r\\n](.*)"),u=o.match("^\\t{"+(t.currentIndent-1)+"}}");c?t.parseNodeBegin(o,c):d?t.parseNodeProperty(o,d,e[++r]):u?t.popStack():o.match(/^[^\s\t}]/)&&t.parseNodePropertyContinued(o)}),this.allNodes}parseNodeBegin(n,t){const e=t[1].trim().replace(/^"/,"").replace(/"$/,""),o=t[2].split(",").map(function(c){return c.trim().replace(/^"/,"").replace(/"$/,"")}),r={name:e},a=this.parseNodeAttr(o),i=this.getCurrentNode();this.currentIndent===0?this.allNodes.add(e,r):e in i?(e==="PoseNode"?i.PoseNode.push(r):i[e].id!==void 0&&(i[e]={},i[e][i[e].id]=i[e]),a.id!==""&&(i[e][a.id]=r)):typeof a.id=="number"?(i[e]={},i[e][a.id]=r):e!=="Properties70"&&(e==="PoseNode"?i[e]=[r]:i[e]=r),typeof a.id=="number"&&(r.id=a.id),a.name!==""&&(r.attrName=a.name),a.type!==""&&(r.attrType=a.type),this.pushStack(r)}parseNodeAttr(n){let t=n[0];n[0]!==""&&(t=parseInt(n[0]),isNaN(t)&&(t=n[0]));let e="",o="";return n.length>1&&(e=n[1].replace(/^(\w+)::/,""),o=n[2]),{id:t,name:e,type:o}}parseNodeProperty(n,t,e){let o=t[1].replace(/^"/,"").replace(/"$/,"").trim(),r=t[2].replace(/^"/,"").replace(/"$/,"").trim();o==="Content"&&r===","&&(r=e.replace(/"/g,"").replace(/,$/,"").trim());const a=this.getCurrentNode();if(a.name==="Properties70"){this.parseNodeSpecialProperty(n,o,r);return}if(o==="C"){const c=r.split(",").slice(1),d=parseInt(c[0]),u=parseInt(c[1]);let s=r.split(",").slice(3);s=s.map(function(f){return f.trim().replace(/^"/,"")}),o="connections",r=[d,u],Jo(r,s),a[o]===void 0&&(a[o]=[])}o==="Node"&&(a.id=r),o in a&&Array.isArray(a[o])?a[o].push(r):o!=="a"?a[o]=r:a.a=r,this.setCurrentProp(a,o),o==="a"&&r.slice(-1)!==","&&(a.a=yn(r))}parseNodePropertyContinued(n){const t=this.getCurrentNode();t.a+=n,n.slice(-1)!==","&&(t.a=yn(t.a))}parseNodeSpecialProperty(n,t,e){const o=e.split('",').map(function(u){return u.trim().replace(/^\"/,"").replace(/\s/,"_")}),r=o[0],a=o[1],i=o[2],c=o[3];let d=o[4];switch(a){case"int":case"enum":case"bool":case"ULongLong":case"double":case"Number":case"FieldOfView":d=parseFloat(d);break;case"Color":case"ColorRGB":case"Vector3D":case"Lcl_Translation":case"Lcl_Rotation":case"Lcl_Scaling":d=yn(d);break}this.getPrevNode()[r]={type:a,type2:i,flag:c,value:d},this.setCurrentProp(this.getPrevNode(),r)}}class Wo{parse(n){const t=new Un(n);t.skip(23);const e=t.getUint32();if(e<6400)throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: "+e);const o=new dt;for(;!this.endOfContent(t);){const r=this.parseNode(t,e);r!==null&&o.add(r.name,r)}return o}endOfContent(n){return n.size()%16===0?(n.getOffset()+160+16&-16)>=n.size():n.getOffset()+160+16>=n.size()}parseNode(n,t){const e={},o=t>=7500?n.getUint64():n.getUint32(),r=t>=7500?n.getUint64():n.getUint32();t>=7500?n.getUint64():n.getUint32();const a=n.getUint8(),i=n.getString(a);if(o===0)return null;const c=[];for(let f=0;f<r;f++)c.push(this.parseProperty(n));const d=c.length>0?c[0]:"",u=c.length>1?c[1]:"",s=c.length>2?c[2]:"";for(e.singleProperty=r===1&&n.getOffset()===o;o>n.getOffset();){const f=this.parseNode(n,t);f!==null&&this.parseSubNode(i,e,f)}return e.propertyList=c,typeof d=="number"&&(e.id=d),u!==""&&(e.attrName=u),s!==""&&(e.attrType=s),i!==""&&(e.name=i),e}parseSubNode(n,t,e){if(e.singleProperty===!0){const o=e.propertyList[0];Array.isArray(o)?(t[e.name]=e,e.a=o):t[e.name]=o}else if(n==="Connections"&&e.name==="C"){const o=[];e.propertyList.forEach(function(r,a){a!==0&&o.push(r)}),t.connections===void 0&&(t.connections=[]),t.connections.push(o)}else if(e.name==="Properties70")Object.keys(e).forEach(function(r){t[r]=e[r]});else if(n==="Properties70"&&e.name==="P"){let o=e.propertyList[0],r=e.propertyList[1];const a=e.propertyList[2],i=e.propertyList[3];let c;o.indexOf("Lcl ")===0&&(o=o.replace("Lcl ","Lcl_")),r.indexOf("Lcl ")===0&&(r=r.replace("Lcl ","Lcl_")),r==="Color"||r==="ColorRGB"||r==="Vector"||r==="Vector3D"||r.indexOf("Lcl_")===0?c=[e.propertyList[4],e.propertyList[5],e.propertyList[6]]:c=e.propertyList[4],t[o]={type:r,type2:a,flag:i,value:c}}else t[e.name]===void 0?typeof e.id=="number"?(t[e.name]={},t[e.name][e.id]=e):t[e.name]=e:e.name==="PoseNode"?(Array.isArray(t[e.name])||(t[e.name]=[t[e.name]]),t[e.name].push(e)):t[e.name][e.id]===void 0&&(t[e.name][e.id]=e)}parseProperty(n){const t=n.getString(1);let e;switch(t){case"C":return n.getBoolean();case"D":return n.getFloat64();case"F":return n.getFloat32();case"I":return n.getInt32();case"L":return n.getInt64();case"R":return e=n.getUint32(),n.getArrayBuffer(e);case"S":return e=n.getUint32(),n.getString(e);case"Y":return n.getInt16();case"b":case"c":case"d":case"f":case"i":case"l":const o=n.getUint32(),r=n.getUint32(),a=n.getUint32();if(r===0)switch(t){case"b":case"c":return n.getBooleanArray(o);case"d":return n.getFloat64Array(o);case"f":return n.getFloat32Array(o);case"i":return n.getInt32Array(o);case"l":return n.getInt64Array(o)}const i=co(new Uint8Array(n.getArrayBuffer(a))),c=new Un(i.buffer);switch(t){case"b":case"c":return c.getBooleanArray(o);case"d":return c.getFloat64Array(o);case"f":return c.getFloat32Array(o);case"i":return c.getInt32Array(o);case"l":return c.getInt64Array(o)}default:throw new Error("THREE.FBXLoader: Unknown property type "+t)}}}class Un{constructor(n,t){this.dv=new DataView(n),this.offset=0,this.littleEndian=t!==void 0?t:!0}getOffset(){return this.offset}size(){return this.dv.buffer.byteLength}skip(n){this.offset+=n}getBoolean(){return(this.getUint8()&1)===1}getBooleanArray(n){const t=[];for(let e=0;e<n;e++)t.push(this.getBoolean());return t}getUint8(){const n=this.dv.getUint8(this.offset);return this.offset+=1,n}getInt16(){const n=this.dv.getInt16(this.offset,this.littleEndian);return this.offset+=2,n}getInt32(){const n=this.dv.getInt32(this.offset,this.littleEndian);return this.offset+=4,n}getInt32Array(n){const t=[];for(let e=0;e<n;e++)t.push(this.getInt32());return t}getUint32(){const n=this.dv.getUint32(this.offset,this.littleEndian);return this.offset+=4,n}getInt64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t&2147483648?(t=~t&4294967295,n=~n&4294967295,n===4294967295&&(t=t+1&4294967295),n=n+1&4294967295,-(t*4294967296+n)):t*4294967296+n}getInt64Array(n){const t=[];for(let e=0;e<n;e++)t.push(this.getInt64());return t}getUint64(){let n,t;return this.littleEndian?(n=this.getUint32(),t=this.getUint32()):(t=this.getUint32(),n=this.getUint32()),t*4294967296+n}getFloat32(){const n=this.dv.getFloat32(this.offset,this.littleEndian);return this.offset+=4,n}getFloat32Array(n){const t=[];for(let e=0;e<n;e++)t.push(this.getFloat32());return t}getFloat64(){const n=this.dv.getFloat64(this.offset,this.littleEndian);return this.offset+=8,n}getFloat64Array(n){const t=[];for(let e=0;e<n;e++)t.push(this.getFloat64());return t}getArrayBuffer(n){const t=this.dv.buffer.slice(this.offset,this.offset+n);return this.offset+=n,t}getString(n){let t=[];for(let o=0;o<n;o++)t[o]=this.getUint8();const e=t.indexOf(0);return e>=0&&(t=t.slice(0,e)),ct(new Uint8Array(t))}}class dt{add(n,t){this[n]=t}}function No(l){const n="Kaydara FBX Binary  \0";return l.byteLength>=n.length&&n===ht(l,0,n.length)}function Ko(l){const n=["K","a","y","d","a","r","a","\\","F","B","X","\\","B","i","n","a","r","y","\\","\\"];let t=0;function e(o){const r=l[o-1];return l=l.slice(t+o),t++,r}for(let o=0;o<n.length;++o)if(e(1)===n[o])return!1;return!0}function Gn(l){const n=/FBXVersion: (\d+)/,t=l.match(n);if(t)return parseInt(t[1]);throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")}function $o(l){return l/46186158e3}const qo=[];function qe(l,n,t,e){let o;switch(e.mappingType){case"ByPolygonVertex":o=l;break;case"ByPolygon":o=n;break;case"ByVertice":o=t;break;case"AllSame":o=e.indices[0];break;default:console.warn("THREE.FBXLoader: unknown attribute mapping type "+e.mappingType)}e.referenceType==="IndexToDirect"&&(o=e.indices[o]);const r=o*e.dataSize,a=r+e.dataSize;return Qo(qo,e.buffer,r,a)}const vn=new Xe,Ae=new G;function ft(l){const n=new K,t=new K,e=new K,o=new K,r=new K,a=new K,i=new K,c=new K,d=new K,u=new K,s=new K,f=new K,m=l.inheritType?l.inheritType:0;if(l.translation&&n.setPosition(Ae.fromArray(l.translation)),l.preRotation){const R=l.preRotation.map(pe.degToRad);R.push(l.eulerOrder),t.makeRotationFromEuler(vn.fromArray(R))}if(l.rotation){const R=l.rotation.map(pe.degToRad);R.push(l.eulerOrder),e.makeRotationFromEuler(vn.fromArray(R))}if(l.postRotation){const R=l.postRotation.map(pe.degToRad);R.push(l.eulerOrder),o.makeRotationFromEuler(vn.fromArray(R)),o.invert()}l.scale&&r.scale(Ae.fromArray(l.scale)),l.scalingOffset&&i.setPosition(Ae.fromArray(l.scalingOffset)),l.scalingPivot&&a.setPosition(Ae.fromArray(l.scalingPivot)),l.rotationOffset&&c.setPosition(Ae.fromArray(l.rotationOffset)),l.rotationPivot&&d.setPosition(Ae.fromArray(l.rotationPivot)),l.parentMatrixWorld&&(s.copy(l.parentMatrix),u.copy(l.parentMatrixWorld));const v=t.clone().multiply(e).multiply(o),y=new K;y.extractRotation(u);const E=new K;E.copyPosition(u);const b=E.clone().invert().multiply(u),w=y.clone().invert().multiply(b),M=r,L=new K;if(m===0)L.copy(y).multiply(v).multiply(w).multiply(M);else if(m===1)L.copy(y).multiply(w).multiply(v).multiply(M);else{const j=new K().scale(new G().setFromMatrixScale(s)).clone().invert(),H=w.clone().multiply(j);L.copy(y).multiply(v).multiply(H).multiply(M)}const P=d.clone().invert(),h=a.clone().invert();let C=n.clone().multiply(c).multiply(d).multiply(t).multiply(e).multiply(o).multiply(P).multiply(i).multiply(a).multiply(r).multiply(h);const X=new K().copyPosition(C),A=u.clone().multiply(X);return f.copyPosition(A),C=f.clone().multiply(L),C.premultiply(u.invert()),C}function mt(l){l=l||0;const n=["ZYX","YZX","XZY","ZXY","YXZ","XYZ"];return l===6?(console.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."),n[0]):n[l]}function yn(l){return l.split(",").map(function(t){return parseFloat(t)})}function ht(l,n,t){return n===void 0&&(n=0),t===void 0&&(t=l.byteLength),ct(new Uint8Array(l,n,t))}function Jo(l,n){for(let t=0,e=l.length,o=n.length;t<o;t++,e++)l[e]=n[t]}function Qo(l,n,t,e){for(let o=t,r=0;o<e;o++,r++)l[r]=n[o];return l}function Wn(l,n,t){return l.slice(0,n).concat(t).concat(l.slice(n))}const er=x.forwardRef(({makeDefault:l,camera:n,regress:t,domElement:e,enableDamping:o=!0,keyEvents:r=!1,onChange:a,onStart:i,onEnd:c,...d},u)=>{const s=le(h=>h.invalidate),f=le(h=>h.camera),m=le(h=>h.gl),v=le(h=>h.events),y=le(h=>h.setEvents),E=le(h=>h.set),b=le(h=>h.get),w=le(h=>h.performance),M=n||f,L=e||v.connected||m.domElement,P=x.useMemo(()=>new Oo(M),[M]);return Ze(()=>{P.enabled&&P.update()},-1),x.useEffect(()=>(r&&P.connect(r===!0?L:r),P.connect(L),()=>void P.dispose()),[r,L,t,P,s]),x.useEffect(()=>{const h=A=>{s(),t&&w.regress(),a&&a(A)},C=A=>{i&&i(A)},X=A=>{c&&c(A)};return P.addEventListener("change",h),P.addEventListener("start",C),P.addEventListener("end",X),()=>{P.removeEventListener("start",C),P.removeEventListener("end",X),P.removeEventListener("change",h)}},[a,i,c,P,s,y]),x.useEffect(()=>{if(l){const h=b().controls;return E({controls:P}),()=>E({controls:h})}},[l,P]),x.createElement("primitive",wn({ref:u,object:P,enableDamping:o},d))});function Pn(l){return rn(Mn,l)}Pn.preload=l=>rn.preload(Mn,l);Pn.clear=l=>rn.clear(Mn,l);const nr=x.forwardRef(({scale:l=10,frames:n=1/0,opacity:t=1,width:e=1,height:o=1,blur:r=1,near:a=0,far:i=10,resolution:c=512,smooth:d=!0,color:u="#000000",depthWrite:s=!1,renderOrder:f,...m},v)=>{const y=x.useRef(null),E=le(I=>I.scene),b=le(I=>I.gl),w=x.useRef(null);e=e*(Array.isArray(l)?l[0]:l||1),o=o*(Array.isArray(l)?l[1]:l||1);const[M,L,P,h,C,X,A]=x.useMemo(()=>{const I=new Fn(c,c),S=new Fn(c,c);S.texture.generateMipmaps=I.texture.generateMipmaps=!1;const F=new to(e,o).rotateX(Math.PI/2),V=new on(F),B=new oo;B.depthTest=B.depthWrite=!1,B.onBeforeCompile=N=>{N.uniforms={...N.uniforms,ucolor:{value:new he(u)}},N.fragmentShader=N.fragmentShader.replace("void main() {",`uniform vec3 ucolor;
           void main() {
          `),N.fragmentShader=N.fragmentShader.replace("vec4( vec3( 1.0 - fragCoordZ ), opacity );","vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );")};const Y=new kn(Ho),Z=new kn(jo);return Z.depthTest=Y.depthTest=!1,[I,F,B,V,Y,Z,S]},[c,e,o,l,u]),R=I=>{h.visible=!0,h.material=C,C.uniforms.tDiffuse.value=M.texture,C.uniforms.h.value=I*1/256,b.setRenderTarget(A),b.render(h,w.current),h.material=X,X.uniforms.tDiffuse.value=A.texture,X.uniforms.v.value=I*1/256,b.setRenderTarget(M),b.render(h,w.current),h.visible=!1};let j=0,H,z;return Ze(()=>{w.current&&(n===1/0||j<n)&&(j++,H=E.background,z=E.overrideMaterial,y.current.visible=!1,E.background=null,E.overrideMaterial=P,b.setRenderTarget(M),b.render(E,w.current),R(r),d&&R(r*.4),b.setRenderTarget(null),y.current.visible=!0,E.overrideMaterial=z,E.background=H)}),x.useImperativeHandle(v,()=>y.current,[]),x.createElement("group",wn({"rotation-x":Math.PI/2},m,{ref:y}),x.createElement("mesh",{renderOrder:f,geometry:L,scale:[1,-1,1],rotation:[-Math.PI/2,0,0]},x.createElement("meshBasicMaterial",{transparent:!0,map:M.texture,opacity:t,depthWrite:s})),x.createElement("orthographicCamera",{ref:w,args:[-e/2,e/2,o/2,-o/2,a,i]}))}),tr=/^[og]\s*(.+)?/,or=/^mtllib /,rr=/^usemtl /,ar=/^usemap /,Nn=/\s+/,Kn=new G,gn=new G,$n=new G,qn=new G,se=new G,Je=new he;function ir(){const l={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(n,t){if(this.object&&this.object.fromDeclaration===!1){this.object.name=n,this.object.fromDeclaration=t!==!1;return}const e=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:n||"",fromDeclaration:t!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(o,r){const a=this._finalize(!1);a&&(a.inherited||a.groupCount<=0)&&this.materials.splice(a.index,1);const i={index:this.materials.length,name:o||"",mtllib:Array.isArray(r)&&r.length>0?r[r.length-1]:"",smooth:a!==void 0?a.smooth:this.smooth,groupStart:a!==void 0?a.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(c){const d={index:typeof c=="number"?c:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return d.clone=this.clone.bind(d),d}};return this.materials.push(i),i},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(o){const r=this.currentMaterial();if(r&&r.groupEnd===-1&&(r.groupEnd=this.geometry.vertices.length/3,r.groupCount=r.groupEnd-r.groupStart,r.inherited=!1),o&&this.materials.length>1)for(let a=this.materials.length-1;a>=0;a--)this.materials[a].groupCount<=0&&this.materials.splice(a,1);return o&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),r}},e&&e.name&&typeof e.clone=="function"){const o=e.clone(0);o.inherited=!0,this.object.materials.push(o)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(n,t){const e=parseInt(n,10);return(e>=0?e-1:e+t/3)*3},parseNormalIndex:function(n,t){const e=parseInt(n,10);return(e>=0?e-1:e+t/3)*3},parseUVIndex:function(n,t){const e=parseInt(n,10);return(e>=0?e-1:e+t/2)*2},addVertex:function(n,t,e){const o=this.vertices,r=this.object.geometry.vertices;r.push(o[n+0],o[n+1],o[n+2]),r.push(o[t+0],o[t+1],o[t+2]),r.push(o[e+0],o[e+1],o[e+2])},addVertexPoint:function(n){const t=this.vertices;this.object.geometry.vertices.push(t[n+0],t[n+1],t[n+2])},addVertexLine:function(n){const t=this.vertices;this.object.geometry.vertices.push(t[n+0],t[n+1],t[n+2])},addNormal:function(n,t,e){const o=this.normals,r=this.object.geometry.normals;r.push(o[n+0],o[n+1],o[n+2]),r.push(o[t+0],o[t+1],o[t+2]),r.push(o[e+0],o[e+1],o[e+2])},addFaceNormal:function(n,t,e){const o=this.vertices,r=this.object.geometry.normals;Kn.fromArray(o,n),gn.fromArray(o,t),$n.fromArray(o,e),se.subVectors($n,gn),qn.subVectors(Kn,gn),se.cross(qn),se.normalize(),r.push(se.x,se.y,se.z),r.push(se.x,se.y,se.z),r.push(se.x,se.y,se.z)},addColor:function(n,t,e){const o=this.colors,r=this.object.geometry.colors;o[n]!==void 0&&r.push(o[n+0],o[n+1],o[n+2]),o[t]!==void 0&&r.push(o[t+0],o[t+1],o[t+2]),o[e]!==void 0&&r.push(o[e+0],o[e+1],o[e+2])},addUV:function(n,t,e){const o=this.uvs,r=this.object.geometry.uvs;r.push(o[n+0],o[n+1]),r.push(o[t+0],o[t+1]),r.push(o[e+0],o[e+1])},addDefaultUV:function(){const n=this.object.geometry.uvs;n.push(0,0),n.push(0,0),n.push(0,0)},addUVLine:function(n){const t=this.uvs;this.object.geometry.uvs.push(t[n+0],t[n+1])},addFace:function(n,t,e,o,r,a,i,c,d){const u=this.vertices.length;let s=this.parseVertexIndex(n,u),f=this.parseVertexIndex(t,u),m=this.parseVertexIndex(e,u);if(this.addVertex(s,f,m),this.addColor(s,f,m),i!==void 0&&i!==""){const v=this.normals.length;s=this.parseNormalIndex(i,v),f=this.parseNormalIndex(c,v),m=this.parseNormalIndex(d,v),this.addNormal(s,f,m)}else this.addFaceNormal(s,f,m);if(o!==void 0&&o!==""){const v=this.uvs.length;s=this.parseUVIndex(o,v),f=this.parseUVIndex(r,v),m=this.parseUVIndex(a,v),this.addUV(s,f,m),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(n){this.object.geometry.type="Points";const t=this.vertices.length;for(let e=0,o=n.length;e<o;e++){const r=this.parseVertexIndex(n[e],t);this.addVertexPoint(r),this.addColor(r)}},addLineGeometry:function(n,t){this.object.geometry.type="Line";const e=this.vertices.length,o=this.uvs.length;for(let r=0,a=n.length;r<a;r++)this.addVertexLine(this.parseVertexIndex(n[r],e));for(let r=0,a=t.length;r<a;r++)this.addUVLine(this.parseUVIndex(t[r],o))}};return l.startObject("",!1),l}class sr extends at{constructor(n){super(n),this.materials=null}load(n,t,e,o){const r=this,a=new it(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(n,function(i){try{t(r.parse(i))}catch(c){o?o(c):console.error(c),r.manager.itemError(n)}},e,o)}setMaterials(n){return this.materials=n,this}parse(n){const t=new ir;n.indexOf(`\r
`)!==-1&&(n=n.replace(/\r\n/g,`
`)),n.indexOf(`\\
`)!==-1&&(n=n.replace(/\\\n/g,""));const e=n.split(`
`);let o=[];for(let i=0,c=e.length;i<c;i++){const d=e[i].trimStart();if(d.length===0)continue;const u=d.charAt(0);if(u!=="#")if(u==="v"){const s=d.split(Nn);switch(s[0]){case"v":t.vertices.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3])),s.length>=7?(Je.setRGB(parseFloat(s[4]),parseFloat(s[5]),parseFloat(s[6]),st),t.colors.push(Je.r,Je.g,Je.b)):t.colors.push(void 0,void 0,void 0);break;case"vn":t.normals.push(parseFloat(s[1]),parseFloat(s[2]),parseFloat(s[3]));break;case"vt":t.uvs.push(parseFloat(s[1]),parseFloat(s[2]));break}}else if(u==="f"){const f=d.slice(1).trim().split(Nn),m=[];for(let y=0,E=f.length;y<E;y++){const b=f[y];if(b.length>0){const w=b.split("/");m.push(w)}}const v=m[0];for(let y=1,E=m.length-1;y<E;y++){const b=m[y],w=m[y+1];t.addFace(v[0],b[0],w[0],v[1],b[1],w[1],v[2],b[2],w[2])}}else if(u==="l"){const s=d.substring(1).trim().split(" ");let f=[];const m=[];if(d.indexOf("/")===-1)f=s;else for(let v=0,y=s.length;v<y;v++){const E=s[v].split("/");E[0]!==""&&f.push(E[0]),E[1]!==""&&m.push(E[1])}t.addLineGeometry(f,m)}else if(u==="p"){const f=d.slice(1).trim().split(" ");t.addPointGeometry(f)}else if((o=tr.exec(d))!==null){const s=(" "+o[0].slice(1).trim()).slice(1);t.startObject(s)}else if(rr.test(d))t.object.startMaterial(d.substring(7).trim(),t.materialLibraries);else if(or.test(d))t.materialLibraries.push(d.substring(7).trim());else if(ar.test(d))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(u==="s"){if(o=d.split(" "),o.length>1){const f=o[1].trim().toLowerCase();t.object.smooth=f!=="0"&&f!=="off"}else t.object.smooth=!0;const s=t.object.currentMaterial();s&&(s.smooth=t.object.smooth)}else{if(d==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+d+'"')}}t.finalize();const r=new xn;if(r.materialLibraries=[].concat(t.materialLibraries),!(t.objects.length===1&&t.objects[0].geometry.vertices.length===0)===!0)for(let i=0,c=t.objects.length;i<c;i++){const d=t.objects[i],u=d.geometry,s=d.materials,f=u.type==="Line",m=u.type==="Points";let v=!1;if(u.vertices.length===0)continue;const y=new De;y.setAttribute("position",new ue(u.vertices,3)),u.normals.length>0&&y.setAttribute("normal",new ue(u.normals,3)),u.colors.length>0&&(v=!0,y.setAttribute("color",new ue(u.colors,3))),u.hasUVIndices===!0&&y.setAttribute("uv",new ue(u.uvs,2));const E=[];for(let w=0,M=s.length;w<M;w++){const L=s[w],P=L.name+"_"+L.smooth+"_"+v;let h=t.materials[P];if(this.materials!==null){if(h=this.materials.create(L.name),f&&h&&!(h instanceof en)){const C=new en;_n.prototype.copy.call(C,h),C.color.copy(h.color),h=C}else if(m&&h&&!(h instanceof Ke)){const C=new Ke({size:10,sizeAttenuation:!1});_n.prototype.copy.call(C,h),C.color.copy(h.color),C.map=h.map,h=C}}h===void 0&&(f?h=new en:m?h=new Ke({size:1,sizeAttenuation:!1}):h=new Qe,h.name=L.name,h.flatShading=!L.smooth,h.vertexColors=v,t.materials[P]=h),E.push(h)}let b;if(E.length>1){for(let w=0,M=s.length;w<M;w++){const L=s[w];y.addGroup(L.groupStart,L.groupCount,w)}f?b=new zn(y,E):m?b=new hn(y,E):b=new on(y,E)}else f?b=new zn(y,E[0]):m?b=new hn(y,E[0]):b=new on(y,E[0]);b.name=d.name,r.add(b)}else if(t.vertices.length>0){const i=new Ke({size:1,sizeAttenuation:!1}),c=new De;c.setAttribute("position",new ue(t.vertices,3)),t.colors.length>0&&t.colors[0]!==void 0&&(c.setAttribute("color",new ue(t.colors,3)),i.vertexColors=!0);const d=new hn(c,i);r.add(d)}return r}}const nn=typeof window<"u"&&("ontouchstart"in window||navigator.maxTouchPoints>0),En=l=>l*Math.PI/180,Jn=8,Ee=.005,Qn=.925,et=.05,nt=.12,tt=En(6),ot=.15,cr=({placeholderSrc:l})=>{const{progress:n,active:t}=Mo();return!t&&l?null:O.jsx(bo,{center:!0,children:l?O.jsx("img",{src:l,width:128,height:128,style:{filter:"blur(8px)",borderRadius:8}}):`${Math.round(n)} %`})},lr=({pivot:l,min:n,max:t,zoomEnabled:e})=>{const o=x.useRef(null);return Ze(()=>{var r;return(r=o.current)==null?void 0:r.target.copy(l)}),O.jsx(er,{ref:o,makeDefault:!0,enablePan:!1,enableRotate:!1,enableZoom:e,minDistance:n,maxDistance:t})},ur=({url:l,xOff:n,yOff:t,pivot:e,initYaw:o,initPitch:r,minZoom:a,maxZoom:i,enableMouseParallax:c,enableManualRotation:d,enableHoverRotation:u,enableManualZoom:s,autoFrame:f,fadeIn:m,autoRotate:v,autoRotateSpeed:y,onLoaded:E})=>{const b=x.useRef(null),w=x.useRef(null),{camera:M,gl:L}=le(),P=x.useRef({x:0,y:0}),h=x.useRef({x:0,y:0}),C=x.useRef({x:0,y:0}),X=x.useRef({x:0,y:0}),A=x.useRef({x:0,y:0}),R=x.useMemo(()=>l.split(".").pop().toLowerCase(),[l]),j=x.useMemo(()=>R==="glb"||R==="gltf"?lt(l).scene.clone():R==="fbx"?Pn(l).clone():R==="obj"?rn(sr,l).clone():(console.error("Unsupported format:",R),null),[l,R]),H=x.useRef(new G);return x.useLayoutEffect(()=>{if(!j)return;const z=w.current;z.updateWorldMatrix(!0,!0);const I=new ao().setFromObject(z).getBoundingSphere(new io),S=1/(I.radius*2);if(z.position.set(-I.center.x,-I.center.y,-I.center.z),z.scale.setScalar(S),z.traverse(F=>{F.isMesh&&(F.castShadow=!0,F.receiveShadow=!0,m&&(F.material.transparent=!0,F.material.opacity=0))}),z.getWorldPosition(H.current),e.copy(H.current),b.current.rotation.set(r,o,0),f&&M.isPerspectiveCamera){const F=M,B=I.radius*S*1.2/Math.sin(F.fov*Math.PI/180/2);F.position.set(H.current.x,H.current.y,H.current.z+B),F.near=B/10,F.far=B*10,F.updateProjectionMatrix()}if(m){let F=0;const V=setInterval(()=>{F+=.05;const B=Math.min(F,1);z.traverse(Y=>{Y.isMesh&&(Y.material.opacity=B)}),we(),B===1&&(clearInterval(V),E==null||E())},16);return()=>clearInterval(V)}else E==null||E()},[j]),x.useEffect(()=>{if(!d||nn)return;const z=L.domElement;let I=!1,S=0,F=0;const V=Z=>{Z.pointerType!=="mouse"&&Z.pointerType!=="pen"||(I=!0,S=Z.clientX,F=Z.clientY,window.addEventListener("pointerup",Y))},B=Z=>{if(!I)return;const N=Z.clientX-S,q=Z.clientY-F;S=Z.clientX,F=Z.clientY,b.current.rotation.y+=N*Ee,b.current.rotation.x+=q*Ee,P.current={x:N*Ee,y:q*Ee},we()},Y=()=>I=!1;return z.addEventListener("pointerdown",V),z.addEventListener("pointermove",B),()=>{z.removeEventListener("pointerdown",V),z.removeEventListener("pointermove",B),window.removeEventListener("pointerup",Y)}},[L,d]),x.useEffect(()=>{if(!nn)return;const z=L.domElement,I=new Map;let S="idle",F=0,V=0,B=0,Y=0,Z=0,N=0;const q=k=>{if(k.pointerType==="touch"){if(I.set(k.pointerId,{x:k.clientX,y:k.clientY}),I.size===1)S="decide",F=B=k.clientX,V=Y=k.clientY;else if(I.size===2&&s){S="pinch";const[re,oe]=[...I.values()];Z=Math.hypot(re.x-oe.x,re.y-oe.y),N=M.position.z,k.preventDefault()}we()}},Q=k=>{const re=I.get(k.pointerId);if(re){if(re.x=k.clientX,re.y=k.clientY,S==="decide"){const oe=k.clientX-F,ee=k.clientY-V;(Math.abs(oe)>Jn||Math.abs(ee)>Jn)&&(d&&Math.abs(oe)>Math.abs(ee)?(S="rotate",z.setPointerCapture(k.pointerId)):(S="idle",I.clear()))}if(S==="rotate"){k.preventDefault();const oe=k.clientX-B,ee=k.clientY-Y;B=k.clientX,Y=k.clientY,b.current.rotation.y+=oe*Ee,b.current.rotation.x+=ee*Ee,P.current={x:oe*Ee,y:ee*Ee},we()}else if(S==="pinch"&&I.size===2){k.preventDefault();const[oe,ee]=[...I.values()],Me=Math.hypot(oe.x-ee.x,oe.y-ee.y),ne=Z/Me;M.position.z=pe.clamp(N*ne,a,i),we()}}},te=k=>{I.delete(k.pointerId),S==="rotate"&&I.size===0&&(S="idle"),S==="pinch"&&I.size<2&&(S="idle")};return z.addEventListener("pointerdown",q,{passive:!0}),window.addEventListener("pointermove",Q,{passive:!1}),window.addEventListener("pointerup",te,{passive:!0}),window.addEventListener("pointercancel",te,{passive:!0}),()=>{z.removeEventListener("pointerdown",q),window.removeEventListener("pointermove",Q),window.removeEventListener("pointerup",te),window.removeEventListener("pointercancel",te)}},[L,d,s,a,i]),x.useEffect(()=>{if(nn)return;const z=I=>{if(I.pointerType!=="mouse")return;const S=I.clientX/window.innerWidth*2-1,F=I.clientY/window.innerHeight*2-1;c&&(h.current={x:-S*et,y:-F*et}),u&&(X.current={x:F*tt,y:S*tt}),we()};return window.addEventListener("pointermove",z),()=>window.removeEventListener("pointermove",z)},[c,u]),Ze((z,I)=>{let S=!1;C.current.x+=(h.current.x-C.current.x)*nt,C.current.y+=(h.current.y-C.current.y)*nt;const F=A.current.x,V=A.current.y;A.current.x+=(X.current.x-A.current.x)*ot,A.current.y+=(X.current.y-A.current.y)*ot;const B=H.current.clone().project(M);B.x+=n+C.current.x,B.y+=t+C.current.y,b.current.position.copy(B.unproject(M)),b.current.rotation.x+=A.current.x-F,b.current.rotation.y+=A.current.y-V,v&&(b.current.rotation.y+=y*I,S=!0),b.current.rotation.y+=P.current.x,b.current.rotation.x+=P.current.y,P.current.x*=Qn,P.current.y*=Qn,(Math.abs(P.current.x)>1e-4||Math.abs(P.current.y)>1e-4)&&(S=!0),(Math.abs(C.current.x-h.current.x)>1e-4||Math.abs(C.current.y-h.current.y)>1e-4||Math.abs(A.current.x-X.current.x)>1e-4||Math.abs(A.current.y-X.current.y)>1e-4)&&(S=!0),S&&we()}),j?O.jsx("group",{ref:b,children:O.jsx("group",{ref:w,children:O.jsx("primitive",{object:j})})}):null},pr=({url:l,width:n=400,height:t=400,modelXOffset:e=0,modelYOffset:o=0,defaultRotationX:r=-50,defaultRotationY:a=20,defaultZoom:i=.5,minZoomDistance:c=.5,maxZoomDistance:d=10,enableMouseParallax:u=!0,enableManualRotation:s=!0,enableHoverRotation:f=!0,enableManualZoom:m=!0,ambientIntensity:v=.3,keyLightIntensity:y=1,fillLightIntensity:E=.5,rimLightIntensity:b=.8,environmentPreset:w="forest",autoFrame:M=!1,placeholderSrc:L,showScreenshotButton:P=!0,fadeIn:h=!1,autoRotate:C=!1,autoRotateSpeed:X=.35,onModelLoaded:A})=>{x.useEffect(()=>void lt.preload(l),[l]);const R=x.useRef(new G).current,j=x.useRef(null),H=x.useRef(null),z=x.useRef(null),I=x.useRef(null),S=En(r),F=En(a),V=Math.min(Math.max(i,c),d),B=()=>{const Y=H.current,Z=z.current,N=I.current;if(!Y||!Z||!N)return;Y.shadowMap.enabled=!1;const q=[];Z.traverse(k=>{k.isLight&&"castShadow"in k&&(q.push({l:k,cast:k.castShadow}),k.castShadow=!1)}),j.current&&(j.current.visible=!1),Y.render(Z,N);const Q=Y.domElement.toDataURL("image/png"),te=document.createElement("a");te.download="model.png",te.href=Q,te.click(),Y.shadowMap.enabled=!0,q.forEach(({l:k,cast:re})=>k.castShadow=re),j.current&&(j.current.visible=!0),we()};return O.jsxs("div",{style:{width:n,height:t,touchAction:"pan-y pinch-zoom",position:"relative"},children:[P&&O.jsx("button",{onClick:B,style:{position:"absolute",border:"1px solid #fff",right:16,top:16,zIndex:10,cursor:"pointer",padding:"8px 16px",borderRadius:10},children:"Take Screenshot"}),O.jsxs(jt,{shadows:!0,frameloop:"demand",gl:{preserveDrawingBuffer:!0},onCreated:({gl:Y,scene:Z,camera:N})=>{H.current=Y,z.current=Z,I.current=N,Y.toneMapping=ro,Y.outputColorSpace=st},camera:{fov:50,position:[0,0,V],near:.01,far:100},style:{touchAction:"pan-y pinch-zoom"},children:[w!=="none"&&O.jsx(lo,{preset:w,background:!1}),O.jsx("ambientLight",{intensity:v}),O.jsx("directionalLight",{position:[5,5,5],intensity:y,castShadow:!0}),O.jsx("directionalLight",{position:[-5,2,5],intensity:E}),O.jsx("directionalLight",{position:[0,4,-5],intensity:b}),O.jsx(nr,{ref:j,position:[0,-.5,0],opacity:.35,scale:10,blur:2}),O.jsx(x.Suspense,{fallback:O.jsx(cr,{placeholderSrc:L}),children:O.jsx(ur,{url:l,xOff:e,yOff:o,pivot:R,initYaw:S,initPitch:F,minZoom:c,maxZoom:d,enableMouseParallax:u,enableManualRotation:s,enableHoverRotation:f,enableManualZoom:m,autoFrame:M,fadeIn:h,autoRotate:C,autoRotateSpeed:X,onLoaded:A})}),!nn&&O.jsx(lr,{pivot:R,min:c,max:d,zoomEnabled:m})]})]})},dr=`/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import {
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d) => (d * Math.PI) / 180;
const DECIDE = 8;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          style={
            { filter: "blur(8px)", borderRadius: 8 }
          }
        />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop().toLowerCase(), [url]);
  const content = useMemo(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && camera.isPerspectiveCamera) {
      const persp = camera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(
        pivotW.current.x,
        pivotW.current.y,
        pivotW.current.z + d
      );
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };
    const move = (e) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map();

    let mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "pinch";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === "pinch" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom
        );
        invalidate();
      }
    };

    const up = (e) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "pinch" && pts.size < 2) mode = "idle";
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
      need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp = [];
    s.traverse((o) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
        position: "relative",
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: "absolute",
            border: "1px solid #fff",
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 10,
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,fr=`/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
import {
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d) => (d * Math.PI) / 180;
const DECIDE = 8;
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          className="blur-lg rounded-lg"
        />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

const ModelInner = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef(null);
  const inner = useRef(null);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop().toLowerCase(), [url]);
  const content = useMemo(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && camera.isPerspectiveCamera) {
      const persp = camera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(
        pivotW.current.x,
        pivotW.current.y,
        pivotW.current.z + d
      );
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };
    const move = (e) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map();

    let mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "pinch";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === "pinch" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom
        );
        invalidate();
      }
    };

    const up = (e) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "pinch" && pts.size < 2) mode = "idle";
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
      need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp = [];
    s.traverse((o) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
      }}
      className="relative"
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          className="absolute top-4 right-4 z-10 cursor-pointer px-4 py-2 border border-white rounded-xl bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,mr=`import {
  FC,
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          style={{ filter: "blur(8px)", borderRadius: 8 }}
        />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);
  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(pivotW.current.x, pivotW.current.y, pivotW.current.z + d);
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    /* optional fade-in */
    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = "idle" | "decide" | "rotate" | "pinch";
    let mode: Mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "pinch";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (
            enableManualRotation &&
            Math.abs(dx) > Math.abs(dy)
          ) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === "pinch" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom
        );
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "pinch" && pts.size < 2) mode = "idle";
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
      need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: any) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        position: "relative",
        touchAction: "pan-y pinch-zoom",
      }}
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          style={{
            position: "absolute",
            border: "1px solid #fff",
            right: 16,
            top: 16,
            zIndex: 10,
            cursor: "pointer",
            padding: "8px 16px",
            borderRadius: 10,
          }}
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight position={[-5, 2, 5]} intensity={fillLightIntensity} />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef as any}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,hr=`import {
  FC,
  Suspense,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  invalidate,
} from "@react-three/fiber";
import {
  OrbitControls,
  useGLTF,
  useFBX,
  useProgress,
  Html,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import * as THREE from "three";

export interface ViewerProps {
  url: string;
  width?: number | string;
  height?: number | string;
  modelXOffset?: number;
  modelYOffset?: number;
  defaultRotationX?: number;
  defaultRotationY?: number;
  defaultZoom?: number;
  minZoomDistance?: number;
  maxZoomDistance?: number;
  enableMouseParallax?: boolean;
  enableManualRotation?: boolean;
  enableHoverRotation?: boolean;
  enableManualZoom?: boolean;
  ambientIntensity?: number;
  keyLightIntensity?: number;
  fillLightIntensity?: number;
  rimLightIntensity?: number;
  environmentPreset?:
    | "city"
    | "sunset"
    | "night"
    | "dawn"
    | "studio"
    | "apartment"
    | "forest"
    | "park"
    | "none";
  autoFrame?: boolean;
  placeholderSrc?: string;
  showScreenshotButton?: boolean;
  fadeIn?: boolean;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  onModelLoaded?: () => void;
}

const isTouch =
  typeof window !== "undefined" &&
  ("ontouchstart" in window || navigator.maxTouchPoints > 0);
const deg2rad = (d: number) => (d * Math.PI) / 180;
const DECIDE = 8; // px before we decide horizontal vs vertical
const ROTATE_SPEED = 0.005;
const INERTIA = 0.925;
const PARALLAX_MAG = 0.05;
const PARALLAX_EASE = 0.12;
const HOVER_MAG = deg2rad(6);
const HOVER_EASE = 0.15;

const Loader: FC<{ placeholderSrc?: string }> = ({ placeholderSrc }) => {
  const { progress, active } = useProgress();
  if (!active && placeholderSrc) return null;
  return (
    <Html center>
      {placeholderSrc ? (
        <img
          src={placeholderSrc}
          width={128}
          height={128}
          className="blur-lg rounded-lg"
        />
      ) : (
        \`\${Math.round(progress)} %\`
      )}
    </Html>
  );
};

const DesktopControls: FC<{
  pivot: THREE.Vector3;
  min: number;
  max: number;
  zoomEnabled: boolean;
}> = ({ pivot, min, max, zoomEnabled }) => {
  const ref = useRef<any>(null);
  useFrame(() => ref.current?.target.copy(pivot));
  return (
    <OrbitControls
      ref={ref}
      makeDefault
      enablePan={false}
      enableRotate={false}
      enableZoom={zoomEnabled}
      minDistance={min}
      maxDistance={max}
    />
  );
};

interface ModelInnerProps {
  url: string;
  xOff: number;
  yOff: number;
  pivot: THREE.Vector3;
  initYaw: number;
  initPitch: number;
  minZoom: number;
  maxZoom: number;
  enableMouseParallax: boolean;
  enableManualRotation: boolean;
  enableHoverRotation: boolean;
  enableManualZoom: boolean;
  autoFrame: boolean;
  fadeIn: boolean;
  autoRotate: boolean;
  autoRotateSpeed: number;
  onLoaded?: () => void;
}

const ModelInner: FC<ModelInnerProps> = ({
  url,
  xOff,
  yOff,
  pivot,
  initYaw,
  initPitch,
  minZoom,
  maxZoom,
  enableMouseParallax,
  enableManualRotation,
  enableHoverRotation,
  enableManualZoom,
  autoFrame,
  fadeIn,
  autoRotate,
  autoRotateSpeed,
  onLoaded,
}) => {
  const outer = useRef<THREE.Group>(null!);
  const inner = useRef<THREE.Group>(null!);
  const { camera, gl } = useThree();

  const vel = useRef({ x: 0, y: 0 });
  const tPar = useRef({ x: 0, y: 0 });
  const cPar = useRef({ x: 0, y: 0 });
  const tHov = useRef({ x: 0, y: 0 });
  const cHov = useRef({ x: 0, y: 0 });

  const ext = useMemo(() => url.split(".").pop()!.toLowerCase(), [url]);
  const content = useMemo<THREE.Object3D | null>(() => {
    if (ext === "glb" || ext === "gltf") return useGLTF(url).scene.clone();
    if (ext === "fbx") return useFBX(url).clone();
    if (ext === "obj") return useLoader(OBJLoader, url).clone();
    console.error("Unsupported format:", ext);
    return null;
  }, [url, ext]);

  const pivotW = useRef(new THREE.Vector3());
  useLayoutEffect(() => {
    if (!content) return;
    const g = inner.current;
    g.updateWorldMatrix(true, true);

    const sphere = new THREE.Box3()
      .setFromObject(g)
      .getBoundingSphere(new THREE.Sphere());
    const s = 1 / (sphere.radius * 2);
    g.position.set(-sphere.center.x, -sphere.center.y, -sphere.center.z);
    g.scale.setScalar(s);

    g.traverse((o: any) => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
        if (fadeIn) {
          o.material.transparent = true;
          o.material.opacity = 0;
        }
      }
    });

    g.getWorldPosition(pivotW.current);
    pivot.copy(pivotW.current);
    outer.current.rotation.set(initPitch, initYaw, 0);

    if (autoFrame && (camera as THREE.PerspectiveCamera).isPerspectiveCamera) {
      const persp = camera as THREE.PerspectiveCamera;
      const fitR = sphere.radius * s;
      const d = (fitR * 1.2) / Math.sin((persp.fov * Math.PI) / 180 / 2);
      persp.position.set(
        pivotW.current.x,
        pivotW.current.y,
        pivotW.current.z + d
      );
      persp.near = d / 10;
      persp.far = d * 10;
      persp.updateProjectionMatrix();
    }

    /* optional fade-in */
    if (fadeIn) {
      let t = 0;
      const id = setInterval(() => {
        t += 0.05;
        const v = Math.min(t, 1);
        g.traverse((o: any) => {
          if (o.isMesh) o.material.opacity = v;
        });
        invalidate();
        if (v === 1) {
          clearInterval(id);
          onLoaded?.();
        }
      }, 16);
      return () => clearInterval(id);
    } else onLoaded?.();
  }, [content]);

  useEffect(() => {
    if (!enableManualRotation || isTouch) return;
    const el = gl.domElement;
    let drag = false;
    let lx = 0,
      ly = 0;
    const down = (e: PointerEvent) => {
      if (e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      drag = true;
      lx = e.clientX;
      ly = e.clientY;
      window.addEventListener("pointerup", up);
    };
    const move = (e: PointerEvent) => {
      if (!drag) return;
      const dx = e.clientX - lx;
      const dy = e.clientY - ly;
      lx = e.clientX;
      ly = e.clientY;
      outer.current.rotation.y += dx * ROTATE_SPEED;
      outer.current.rotation.x += dy * ROTATE_SPEED;
      vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
      invalidate();
    };
    const up = () => (drag = false);
    el.addEventListener("pointerdown", down);
    el.addEventListener("pointermove", move);
    return () => {
      el.removeEventListener("pointerdown", down);
      el.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [gl, enableManualRotation]);

  useEffect(() => {
    if (!isTouch) return;
    const el = gl.domElement;
    const pts = new Map<number, { x: number; y: number }>();
    type Mode = "idle" | "decide" | "rotate" | "pinch";
    let mode: Mode = "idle";
    let sx = 0,
      sy = 0,
      lx = 0,
      ly = 0,
      startDist = 0,
      startZ = 0;

    const down = (e: PointerEvent) => {
      if (e.pointerType !== "touch") return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) {
        mode = "decide";
        sx = lx = e.clientX;
        sy = ly = e.clientY;
      } else if (pts.size === 2 && enableManualZoom) {
        mode = "pinch";
        const [p1, p2] = [...pts.values()];
        startDist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        startZ = camera.position.z;
        e.preventDefault();
      }
      invalidate();
    };

    const move = (e: PointerEvent) => {
      const p = pts.get(e.pointerId);
      if (!p) return;
      p.x = e.clientX;
      p.y = e.clientY;

      if (mode === "decide") {
        const dx = e.clientX - sx;
        const dy = e.clientY - sy;
        if (Math.abs(dx) > DECIDE || Math.abs(dy) > DECIDE) {
          if (enableManualRotation && Math.abs(dx) > Math.abs(dy)) {
            mode = "rotate";
            el.setPointerCapture(e.pointerId);
          } else {
            mode = "idle";
            pts.clear();
          }
        }
      }

      if (mode === "rotate") {
        e.preventDefault();
        const dx = e.clientX - lx;
        const dy = e.clientY - ly;
        lx = e.clientX;
        ly = e.clientY;
        outer.current.rotation.y += dx * ROTATE_SPEED;
        outer.current.rotation.x += dy * ROTATE_SPEED;
        vel.current = { x: dx * ROTATE_SPEED, y: dy * ROTATE_SPEED };
        invalidate();
      } else if (mode === "pinch" && pts.size === 2) {
        e.preventDefault();
        const [p1, p2] = [...pts.values()];
        const d = Math.hypot(p1.x - p2.x, p1.y - p2.y);
        const ratio = startDist / d;
        camera.position.z = THREE.MathUtils.clamp(
          startZ * ratio,
          minZoom,
          maxZoom
        );
        invalidate();
      }
    };

    const up = (e: PointerEvent) => {
      pts.delete(e.pointerId);
      if (mode === "rotate" && pts.size === 0) mode = "idle";
      if (mode === "pinch" && pts.size < 2) mode = "idle";
    };

    el.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointermove", move, { passive: false });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointercancel", up, { passive: true });
    return () => {
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [gl, enableManualRotation, enableManualZoom, minZoom, maxZoom]);

  useEffect(() => {
    if (isTouch) return;
    const mm = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      if (enableMouseParallax)
        tPar.current = { x: -nx * PARALLAX_MAG, y: -ny * PARALLAX_MAG };
      if (enableHoverRotation)
        tHov.current = { x: ny * HOVER_MAG, y: nx * HOVER_MAG };
      invalidate();
    };
    window.addEventListener("pointermove", mm);
    return () => window.removeEventListener("pointermove", mm);
  }, [enableMouseParallax, enableHoverRotation]);

  useFrame((_, dt) => {
    let need = false;
    cPar.current.x += (tPar.current.x - cPar.current.x) * PARALLAX_EASE;
    cPar.current.y += (tPar.current.y - cPar.current.y) * PARALLAX_EASE;
    const phx = cHov.current.x,
      phy = cHov.current.y;
    cHov.current.x += (tHov.current.x - cHov.current.x) * HOVER_EASE;
    cHov.current.y += (tHov.current.y - cHov.current.y) * HOVER_EASE;

    const ndc = pivotW.current.clone().project(camera);
    ndc.x += xOff + cPar.current.x;
    ndc.y += yOff + cPar.current.y;
    outer.current.position.copy(ndc.unproject(camera));

    outer.current.rotation.x += cHov.current.x - phx;
    outer.current.rotation.y += cHov.current.y - phy;

    if (autoRotate) {
      outer.current.rotation.y += autoRotateSpeed * dt;
      need = true;
    }

    outer.current.rotation.y += vel.current.x;
    outer.current.rotation.x += vel.current.y;
    vel.current.x *= INERTIA;
    vel.current.y *= INERTIA;
    if (Math.abs(vel.current.x) > 1e-4 || Math.abs(vel.current.y) > 1e-4)
      need = true;

    if (
      Math.abs(cPar.current.x - tPar.current.x) > 1e-4 ||
      Math.abs(cPar.current.y - tPar.current.y) > 1e-4 ||
      Math.abs(cHov.current.x - tHov.current.x) > 1e-4 ||
      Math.abs(cHov.current.y - tHov.current.y) > 1e-4
    )
      need = true;

    if (need) invalidate();
  });

  if (!content) return null;
  return (
    <group ref={outer}>
      <group ref={inner}>
        <primitive object={content} />
      </group>
    </group>
  );
};

const ModelViewer: FC<ViewerProps> = ({
  url,
  width = 400,
  height = 400,
  modelXOffset = 0,
  modelYOffset = 0,
  defaultRotationX = -50,
  defaultRotationY = 20,
  defaultZoom = 0.5,
  minZoomDistance = 0.5,
  maxZoomDistance = 10,
  enableMouseParallax = true,
  enableManualRotation = true,
  enableHoverRotation = true,
  enableManualZoom = true,
  ambientIntensity = 0.3,
  keyLightIntensity = 1,
  fillLightIntensity = 0.5,
  rimLightIntensity = 0.8,
  environmentPreset = "forest",
  autoFrame = false,
  placeholderSrc,
  showScreenshotButton = true,
  fadeIn = false,
  autoRotate = false,
  autoRotateSpeed = 0.35,
  onModelLoaded,
}) => {
  useEffect(() => void useGLTF.preload(url), [url]);
  const pivot = useRef(new THREE.Vector3()).current;
  const contactRef = useRef<THREE.Mesh>(null);
  const rendererRef = useRef<THREE.WebGLRenderer>(null);
  const sceneRef = useRef<THREE.Scene>(null);
  const cameraRef = useRef<THREE.Camera>(null);

  const initYaw = deg2rad(defaultRotationX);
  const initPitch = deg2rad(defaultRotationY);
  const camZ = Math.min(
    Math.max(defaultZoom, minZoomDistance),
    maxZoomDistance
  );

  const capture = () => {
    const g = rendererRef.current,
      s = sceneRef.current,
      c = cameraRef.current;
    if (!g || !s || !c) return;
    g.shadowMap.enabled = false;
    const tmp: { l: THREE.Light; cast: boolean }[] = [];
    s.traverse((o: any) => {
      if (o.isLight && "castShadow" in o) {
        tmp.push({ l: o, cast: o.castShadow });
        o.castShadow = false;
      }
    });
    if (contactRef.current) contactRef.current.visible = false;
    g.render(s, c);
    const urlPNG = g.domElement.toDataURL("image/png");
    const a = document.createElement("a");
    a.download = "model.png";
    a.href = urlPNG;
    a.click();
    g.shadowMap.enabled = true;
    tmp.forEach(({ l, cast }) => (l.castShadow = cast));
    if (contactRef.current) contactRef.current.visible = true;
    invalidate();
  };

  return (
    <div
      style={{
        width,
        height,
        touchAction: "pan-y pinch-zoom",
      }}
      className="relative"
    >
      {showScreenshotButton && (
        <button
          onClick={capture}
          className="absolute top-4 right-4 z-10 cursor-pointer px-4 py-2 border border-white rounded-xl bg-transparent text-white hover:bg-white hover:text-black transition-colors"
        >
          Take Screenshot
        </button>
      )}

      <Canvas
        shadows
        frameloop="demand"
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl, scene, camera }) => {
          rendererRef.current = gl;
          sceneRef.current = scene;
          cameraRef.current = camera;
          gl.toneMapping = THREE.ACESFilmicToneMapping;
          gl.outputColorSpace = THREE.SRGBColorSpace;
        }}
        camera={{ fov: 50, position: [0, 0, camZ], near: 0.01, far: 100 }}
        style={{ touchAction: "pan-y pinch-zoom" }}
      >
        {environmentPreset !== "none" && (
          <Environment preset={environmentPreset as any} background={false} />
        )}

        <ambientLight intensity={ambientIntensity} />
        <directionalLight
          position={[5, 5, 5]}
          intensity={keyLightIntensity}
          castShadow
        />
        <directionalLight
          position={[-5, 2, 5]}
          intensity={fillLightIntensity}
        />
        <directionalLight position={[0, 4, -5]} intensity={rimLightIntensity} />

        <ContactShadows
          ref={contactRef as any}
          position={[0, -0.5, 0]}
          opacity={0.35}
          scale={10}
          blur={2}
        />

        <Suspense fallback={<Loader placeholderSrc={placeholderSrc} />}>
          <ModelInner
            url={url}
            xOff={modelXOffset}
            yOff={modelYOffset}
            pivot={pivot}
            initYaw={initYaw}
            initPitch={initPitch}
            minZoom={minZoomDistance}
            maxZoom={maxZoomDistance}
            enableMouseParallax={enableMouseParallax}
            enableManualRotation={enableManualRotation}
            enableHoverRotation={enableHoverRotation}
            enableManualZoom={enableManualZoom}
            autoFrame={autoFrame}
            fadeIn={fadeIn}
            autoRotate={autoRotate}
            autoRotateSpeed={autoRotateSpeed}
            onLoaded={onModelLoaded}
          />
        </Suspense>

        {!isTouch && (
          <DesktopControls
            pivot={pivot}
            min={minZoomDistance}
            max={maxZoomDistance}
            zoomEnabled={enableManualZoom}
          />
        )}
      </Canvas>
    </div>
  );
};

export default ModelViewer;
`,rt={...Et("Components/ModelViewer"),installation:"npm install three @react-three/fiber @react-three/drei",usage:`import ModelViewer from './ModelViewer';

<ModelViewer
  url="https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb"
  width={400}
  height={400}
/>
`,code:dr,tailwind:fr,tsCode:mr,tsTailwind:hr},Dr=()=>{const[l,n]=x.useState(!1),[t,e]=Ot(),[o,r]=x.useState("toyCar"),[a,i]=x.useState(.5),[c,d]=x.useState(0),[u,s]=x.useState(!0),[f,m]=x.useState(!0),[v,y]=x.useState("forest"),[E,b]=x.useState(!1),[w,M]=x.useState(!1),[L,P]=x.useState(.35),[h,C]=x.useState(!0),X={toyCar:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/ToyCar/glTF-Binary/ToyCar.glb",sheenChair:"https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Models/main/2.0/SheenChair/glTF-Binary/SheenChair.glb"},A={toyCar:"Fast as lightning.",sheenChair:"Ultra comfortable."},R=H=>{n(!1),r(H),e()},j=[{name:"url",type:"string",default:"-",description:"URL of the 3D model file (glb/gltf/fbx/obj)"},{name:"width",type:"number | string",default:"400",description:"Width of the canvas container"},{name:"height",type:"number | string",default:"400",description:"Height of the canvas container"},{name:"modelXOffset",type:"number",default:"0",description:"Horizontal offset of the model"},{name:"modelYOffset",type:"number",default:"0",description:"Vertical offset of the model"},{name:"defaultRotationX",type:"number",default:"-50",description:"Initial rotation on the X axis in degrees"},{name:"defaultRotationY",type:"number",default:"20",description:"Initial rotation on the Y axis in degrees"},{name:"defaultZoom",type:"number",default:"0.5",description:"Initial zoom distance factor"},{name:"minZoomDistance",type:"number",default:"0.5",description:"Minimum zoom distance"},{name:"maxZoomDistance",type:"number",default:"10",description:"Maximum zoom distance"},{name:"enableMouseParallax",type:"boolean",default:"true",description:"Enable mouse-based parallax effect"},{name:"enableManualRotation",type:"boolean",default:"true",description:"Enable manual rotation via drag"},{name:"enableHoverRotation",type:"boolean",default:"true",description:"Enable rotation on hover based on cursor"},{name:"enableManualZoom",type:"boolean",default:"true",description:"Enable manual zoom via mouse wheel or gestures"},{name:"ambientIntensity",type:"number",default:"0.3",description:"Intensity of ambient light"},{name:"keyLightIntensity",type:"number",default:"1",description:"Intensity of key light"},{name:"fillLightIntensity",type:"number",default:"0.5",description:"Intensity of fill light"},{name:"rimLightIntensity",type:"number",default:"0.8",description:"Intensity of rim light"},{name:"environmentPreset",type:"string",default:'"forest"',description:"Environment preset for scene lighting"},{name:"autoFrame",type:"boolean",default:"false",description:"Automatically frame the model in view"},{name:"fadeIn",type:"boolean",default:"false",description:"Enable fade-in transition on load"},{name:"autoRotate",type:"boolean",default:"false",description:"Enable automatic rotation animation"},{name:"autoRotateSpeed",type:"number",default:"0.35",description:"Speed of automatic rotation"},{name:"showScreenshotButton",type:"boolean",default:"true",description:"Show the screenshot button overlay"},{name:"placeholderSrc",type:"string",default:"-",description:"Placeholder image source while loading"},{name:"onModelLoaded",type:"function",default:"-",description:"Callback when model finishes loading"}];return O.jsxs(Mt,{children:[O.jsxs(Pt,{children:[O.jsxs(wt,{position:"relative",className:"demo-container",h:500,overflow:"hidden",p:0,display:"flex",justifyContent:"center",alignItems:"center",children:[l&&O.jsx(Rt,{userSelect:"none",position:"absolute",top:"50%",left:"6em",transform:"translate(-50%, -50%)",fontSize:"3rem",whiteSpace:"nowrap",fontWeight:"900",color:"white",textAlign:"center",textShadow:"0 0 10px rgba(255, 255, 255, 0.8)",zIndex:1,display:{base:"none",md:"block"},children:A[o]}),O.jsx(pr,{url:X[o],width:"100%",height:"100%",modelXOffset:a,modelYOffset:c,maxZoomDistance:.7,enableMouseParallax:u,enableHoverRotation:f,environmentPreset:v,fadeIn:E,autoRotate:w,autoRotateSpeed:L,showScreenshotButton:h,onModelLoaded:()=>n(!0)},t)]}),O.jsxs(Dt,{children:[O.jsx(An,{title:"Model",width:150,options:[{label:"Car",value:"toyCar"},{label:"Chair",value:"sheenChair"}],value:o,onChange:R}),O.jsx(An,{title:"Environment",width:150,options:[{label:"City",value:"city"},{label:"Sunset",value:"sunset"},{label:"Night",value:"night"},{label:"Dawn",value:"dawn"},{label:"Studio",value:"studio"},{label:"Apartment",value:"apartment"},{label:"Forest",value:"forest"},{label:"Park",value:"park"},{label:"None",value:"none"}],value:v,onChange:H=>{y(H),e()}}),O.jsx(fn,{title:"Horizontal Offset",min:-1,max:1,step:.1,value:a,onChange:H=>{i(H),e()}}),O.jsx(fn,{title:"Vertical Offset",min:-1,max:1,step:.1,value:c,onChange:H=>{d(H),e()}}),O.jsx(ze,{title:"Mouse Parallax",isChecked:u,onChange:H=>{s(H),e()}}),O.jsx(ze,{title:"Hover Rotation",isChecked:f,onChange:H=>{m(H),e()}}),O.jsx(ze,{title:"Screenshot Button",isChecked:h,onChange:H=>{C(H),e()}}),O.jsx(ze,{title:"Fade In On Load",isChecked:E,onChange:H=>{b(H),e()}}),O.jsx(ze,{title:"Auto Rotate",isChecked:w,onChange:H=>{M(H),e()}}),O.jsx(fn,{title:"Rotate Speed",min:.1,max:2,step:.1,value:L,isDisabled:!w,onChange:H=>{P(H),e()}})]}),O.jsx(Tt,{data:j}),O.jsx(Ct,{dependencyList:["three","@react-three/fiber","@react-three/drei"]})]}),O.jsx(Lt,{children:O.jsx(St,{codeObject:rt})}),O.jsx(At,{children:O.jsx(It,{...rt})})]})};export{Dr as default};
