// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,n;r=this,n=function(){"use strict";function r(r){return r!=r}var n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function e(r){return r===n||r===t}var o,u="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),i=Object.prototype.toString,f=Object.prototype.hasOwnProperty,a="function"==typeof Symbol?Symbol.toStringTag:"",c=u&&"symbol"==typeof Symbol.toStringTag?function(r){var n,t,e,o,u;if(null==r)return i.call(r);t=r[a],u=a,n=null!=(o=r)&&f.call(o,u);try{r[a]=void 0}catch(n){return i.call(r)}return e=i.call(r),n?r[a]=t:delete r[a],e}:function(r){return i.call(r)},l="function"==typeof Uint32Array,y="function"==typeof Uint32Array?Uint32Array:null,p="function"==typeof Uint32Array?Uint32Array:void 0;o=function(){var r,n,t;if("function"!=typeof y)return!1;try{n=new y(n=[1,3.14,-3.14,4294967296,4294967297]),t=n,r=(l&&t instanceof Uint32Array||"[object Uint32Array]"===c(t))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?p:function(){throw new Error("not implemented")};var v,s=o,b="function"==typeof Float64Array,d="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;v=function(){var r,n,t;if("function"!=typeof d)return!1;try{n=new d([1,3.14,-3.14,NaN]),t=n,r=(b&&t instanceof Float64Array||"[object Float64Array]"===c(t))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r}()?w:function(){throw new Error("not implemented")};var A,_=v,m="function"==typeof Uint8Array,h="function"==typeof Uint8Array?Uint8Array:null,N="function"==typeof Uint8Array?Uint8Array:void 0;A=function(){var r,n,t;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,256,257]),t=n,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===c(t))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?N:function(){throw new Error("not implemented")};var U,g=A,j="function"==typeof Uint16Array,I="function"==typeof Uint16Array?Uint16Array:null,O="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,n,t;if("function"!=typeof I)return!1;try{n=new I(n=[1,3.14,-3.14,65536,65537]),t=n,r=(j&&t instanceof Uint16Array||"[object Uint16Array]"===c(t))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r}()?O:function(){throw new Error("not implemented")};var S,E={uint16:U,uint8:g};(S=new E.uint16(1))[0]=4660;var F=52===new E.uint8(S.buffer)[0],T=!0===F?1:0,H=new _(1),G=new s(H.buffer);function P(r){return H[0]=r,G[T]}function L(r,n){var t,e,o,u;return o=(u=r*r)*u,e=u*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(u),e+=o*o*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(u),(o=1-(t=.5*u))+(1-o-t+(u*e-r*n))}var V=-.16666666666666632;function W(r,n){var t,e,o;return t=.00833333333332249+(o=r*r)*(27557313707070068e-22*o-.0001984126982985795)+o*(o*o)*(1.58969099521155e-10*o-2.5050760253406863e-8),e=o*r,0===n?r+e*(V+o*t):r-(o*(.5*n-e*t)-n-e*V)}var k,x,M=!0===F?0:1,Y=new _(1),C=new s(Y.buffer);!0===F?(k=1,x=0):(k=0,x=1);var q={HIGH:k,LOW:x},z=new _(1),B=new s(z.buffer),D=q.HIGH,J=q.LOW;function K(r,n){return B[D]=r,B[J]=n,z[0]}var Q,R,X=Math.floor,Z="function"==typeof Object.defineProperty?Object.defineProperty:null,$=Object.defineProperty,rr=Object.prototype,nr=rr.toString,tr=rr.__defineGetter__,er=rr.__defineSetter__,or=rr.__lookupGetter__,ur=rr.__lookupSetter__,ir=function(){try{return Z({},"x",{}),!0}catch(r){return!1}}()?$:function(r,n,t){var e,o,u,i;if("object"!=typeof r||null===r||"[object Array]"===nr.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===nr.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((o="value"in t)&&(or.call(r,n)||ur.call(r,n)?(e=r.__proto__,r.__proto__=rr,delete r[n],r[n]=t.value,r.__proto__=e):r[n]=t.value),u="get"in t,i="set"in t,o&&(u||i))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return u&&tr&&tr.call(r,n,t.get),i&&er&&er.call(r,n,t.set),r};function fr(r,n,t){ir(r,n,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===F?(Q=1,R=0):(Q=0,R=1);var ar={HIGH:Q,LOW:R},cr=new _(1),lr=new s(cr.buffer),yr=ar.HIGH,pr=ar.LOW;function vr(r,n,t,e){return cr[0]=r,n[e]=lr[yr],n[e+t]=lr[pr],n}function sr(r){return vr(r,[0,0],1,0)}fr(sr,"assign",vr);var br=[0,0];function dr(r,n){var t,e;return sr.assign(r,br,1,0),t=br[0],t&=2147483647,e=P(n),K(t|=e&=2147483648,br[1])}function wr(r){return Math.abs(r)}function Ar(n,t,o,u){return r(n)||e(n)?(t[u]=n,t[u+o]=0,t):0!==n&&wr(n)<22250738585072014e-324?(t[u]=4503599627370496*n,t[u+o]=-52,t):(t[u]=n,t[u+o]=0,t)}fr((function(r){return Ar(r,[0,0],1,0)}),"assign",Ar);var _r=[0,0],mr=[0,0];function hr(o,u){var i,f;return 0===u||0===o||r(o)||e(o)?o:(Ar(o,_r,1,0),u+=_r[1],u+=function(r){var n=P(r);return(n=(2146435072&n)>>>20)-1023|0}(o=_r[0]),u<-1074?dr(0,o):u>1023?o<0?t:n:(u<=-1023?(u+=52,f=2220446049250313e-31):f=1,sr.assign(o,mr,1,0),i=mr[0],i&=2148532223,f*K(i|=u+1023<<20,mr[1])))}function Nr(r){return function(r,n){var t,e;for(t=[],e=0;e<n;e++)t.push(r);return t}(0,r)}var Ur=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],gr=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],jr=16777216,Ir=5.960464477539063e-8,Or=Nr(20),Sr=Nr(20),Er=Nr(20),Fr=Nr(20);function Tr(r,n,t,e,o,u,i,f,a){var c,l,y,p,v,s,b,d,w;for(p=u,w=e[t],d=t,v=0;d>0;v++)l=Ir*w|0,Fr[v]=w-jr*l|0,w=e[d-1]+l,d-=1;if(w=hr(w,o),w-=8*X(.125*w),w-=b=0|w,y=0,o>0?(b+=v=Fr[t-1]>>24-o,Fr[t-1]-=v<<24-o,y=Fr[t-1]>>23-o):0===o?y=Fr[t-1]>>23:w>=.5&&(y=2),y>0){for(b+=1,c=0,v=0;v<t;v++)d=Fr[v],0===c?0!==d&&(c=1,Fr[v]=16777216-d):Fr[v]=16777215-d;if(o>0)switch(o){case 1:Fr[t-1]&=8388607;break;case 2:Fr[t-1]&=4194303}2===y&&(w=1-w,0!==c&&(w-=hr(1,o)))}if(0===w){for(d=0,v=t-1;v>=u;v--)d|=Fr[v];if(0===d){for(s=1;0===Fr[u-s];s++);for(v=t+1;v<=t+s;v++){for(a[f+v]=Ur[i+v],l=0,d=0;d<=f;d++)l+=r[d]*a[f+(v-d)];e[v]=l}return Tr(r,n,t+=s,e,o,u,i,f,a)}}if(0===w)for(t-=1,o-=24;0===Fr[t];)t-=1,o-=24;else(w=hr(w,-o))>=jr?(l=Ir*w|0,Fr[t]=w-jr*l|0,o+=24,Fr[t+=1]=l):Fr[t]=0|w;for(l=hr(1,o),v=t;v>=0;v--)e[v]=l*Fr[v],l*=Ir;for(v=t;v>=0;v--){for(l=0,s=0;s<=p&&s<=t-v;s++)l+=gr[s]*e[v+s];Er[t-v]=l}for(l=0,v=t;v>=0;v--)l+=Er[v];for(n[0]=0===y?l:-l,l=Er[0]-l,v=1;v<=t;v++)l+=Er[v];return n[1]=0===y?l:-l,7&b}function Hr(r,n,t,e){var o,u,i,f,a,c,l;for((u=(t-3)/24|0)<0&&(u=0),f=t-24*(u+1),c=u-(i=e-1),l=i+4,a=0;a<=l;a++)Or[a]=c<0?0:Ur[c],c+=1;for(a=0;a<=4;a++){for(o=0,c=0;c<=i;c++)o+=r[c]*Or[i+(a-c)];Sr[a]=o}return Tr(r,n,4,Sr,f,4,u,i,Or)}var Gr=Math.round;function Pr(r,n,t){var e,o,u,i,f;return u=r-1.5707963267341256*(e=Gr(.6366197723675814*r)),i=6077100506506192e-26*e,f=n>>20|0,t[0]=u-i,f-(P(t[0])>>20&2047)>16&&(i=20222662487959506e-37*e-((o=u)-(u=o-(i=6077100506303966e-26*e))-i),t[0]=u-i,f-(P(t[0])>>20&2047)>49&&(i=84784276603689e-45*e-((o=u)-(u=o-(i=20222662487111665e-37*e))-i),t[0]=u-i)),t[1]=u-t[0]-i,e}var Lr=1.5707963267341256,Vr=6077100506506192e-26,Wr=2*Vr,kr=3*Vr,xr=4*Vr,Mr=[0,0,0],Yr=[0,0];function Cr(r,n){var t,e,o,u,i,f,a;if((o=2147483647&P(r)|0)<=1072243195)return n[0]=r,n[1]=0,0;if(o<=1074752122)return 598523==(1048575&o)?Pr(r,o,n):o<=1073928572?r>0?(a=r-Lr,n[0]=a-Vr,n[1]=a-n[0]-Vr,1):(a=r+Lr,n[0]=a+Vr,n[1]=a-n[0]+Vr,-1):r>0?(a=r-2*Lr,n[0]=a-Wr,n[1]=a-n[0]-Wr,2):(a=r+2*Lr,n[0]=a+Wr,n[1]=a-n[0]+Wr,-2);if(o<=1075594811)return o<=1075183036?1074977148===o?Pr(r,o,n):r>0?(a=r-3*Lr,n[0]=a-kr,n[1]=a-n[0]-kr,3):(a=r+3*Lr,n[0]=a+kr,n[1]=a-n[0]+kr,-3):1075388923===o?Pr(r,o,n):r>0?(a=r-4*Lr,n[0]=a-xr,n[1]=a-n[0]-xr,4):(a=r+4*Lr,n[0]=a+xr,n[1]=a-n[0]+xr,-4);if(o<1094263291)return Pr(r,o,n);if(o>=2146435072)return n[0]=NaN,n[1]=NaN,0;for(t=function(r){return Y[0]=r,C[M]}(r),a=K(o-((e=(o>>20)-1046)<<20|0),t),i=0;i<2;i++)Mr[i]=0|a,a=16777216*(a-Mr[i]);for(Mr[2]=a,u=3;0===Mr[u-1];)u-=1;return f=Hr(Mr,Yr,e,u),r<0?(n[0]=-Yr[0],n[1]=-Yr[1],-f):(n[0]=Yr[0],n[1]=Yr[1],f)}var qr=[0,0];function zr(r){var n;if(n=P(r),(n&=2147483647)<=1072243195)return n<1044381696?1:L(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,qr)){case 0:return L(qr[0],qr[1]);case 1:return-W(qr[0],qr[1]);case 2:return-L(qr[0],qr[1]);default:return W(qr[0],qr[1])}}var Br=[0,0];function Dr(r){var n;if(n=P(r),(n&=2147483647)<=1072243195)return n<1045430272?r:W(r,0);if(n>=2146435072)return NaN;switch(3&Cr(r,Br)){case 0:return W(Br[0],Br[1]);case 1:return L(Br[0],Br[1]);case 2:return-W(Br[0],Br[1]);default:return-L(Br[0],Br[1])}}var Jr=3.141592653589793;return function(n){return r(n)?NaN:e(n)?0:0===n?1:function(n){var t,o;return r(n)||e(n)?NaN:0===(t=wr(o=n%2))||1===t?dr(0,o):t<.25?Dr(Jr*o):t<.75?dr(zr(Jr*(t=.5-t)),o):t<1.25?(o=dr(1,o)-o,Dr(Jr*o)):t<1.75?-dr(zr(Jr*(t-=1.5)),o):(o-=dr(2,o),Dr(Jr*o))}(n)/(Jr*n)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).sinc=n();
//# sourceMappingURL=browser.js.map
