// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY;function n(r){return r===e||r===t}var i="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var a=Object.prototype.toString;var o=Object.prototype.hasOwnProperty;var c="function"==typeof Symbol?Symbol:void 0,u="function"==typeof c?c.toStringTag:"";var f=i&&"symbol"==typeof Symbol.toStringTag?function(r){var e,t,n,i,c;if(null==r)return a.call(r);t=r[u],c=u,e=null!=(i=r)&&o.call(i,c);try{r[u]=void 0}catch(e){return a.call(r)}return n=a.call(r),e?r[u]=t:delete r[u],n}:function(r){return a.call(r)},s="function"==typeof Uint32Array;var l="function"==typeof Uint32Array?Uint32Array:null;var p,y="function"==typeof Uint32Array?Uint32Array:void 0;p=function(){var r,e,t;if("function"!=typeof l)return!1;try{e=new l(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(s&&t instanceof Uint32Array||"[object Uint32Array]"===f(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var v=p,g="function"==typeof Float64Array;var d="function"==typeof Float64Array?Float64Array:null;var h,w="function"==typeof Float64Array?Float64Array:void 0;h=function(){var r,e,t;if("function"!=typeof d)return!1;try{e=new d([1,3.14,-3.14,NaN]),t=e,r=(g&&t instanceof Float64Array||"[object Float64Array]"===f(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b=h,m="function"==typeof Uint8Array;var A="function"==typeof Uint8Array?Uint8Array:null;var _,E="function"==typeof Uint8Array?Uint8Array:void 0;_=function(){var r,e,t;if("function"!=typeof A)return!1;try{e=new A(e=[1,3.14,-3.14,256,257]),t=e,r=(m&&t instanceof Uint8Array||"[object Uint8Array]"===f(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?E:function(){throw new Error("not implemented")};var N=_,U="function"==typeof Uint16Array;var I="function"==typeof Uint16Array?Uint16Array:null;var S,k="function"==typeof Uint16Array?Uint16Array:void 0;S=function(){var r,e,t;if("function"!=typeof I)return!1;try{e=new I(e=[1,3.14,-3.14,65536,65537]),t=e,r=(U&&t instanceof Uint16Array||"[object Uint16Array]"===f(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,F={uint16:S,uint8:N};(x=new F.uint16(1))[0]=4660;var j=52===new F.uint8(x.buffer)[0],T=!0===j?1:0,O=new b(1),V=new v(O.buffer);function $(r){return O[0]=r,V[T]}function G(r,e){var t,n,i,a;return i=(a=r*r)*a,n=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),n+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(t=.5*a))+(1-i-t+(a*n-r*e))}var H=-.16666666666666632;function W(r,e){var t,n,i;return t=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),n=i*r,0===e?r+n*(H+i*t):r-(i*(.5*e-n*t)-e-n*H)}var C,L,P=!0===j?0:1,R=new b(1),Z=new v(R.buffer);!0===j?(C=1,L=0):(C=0,L=1);var M={HIGH:C,LOW:L},X=new b(1),Y=new v(X.buffer),z=M.HIGH,q=M.LOW;function B(r,e){return Y[z]=r,Y[q]=e,X[0]}var D=Math.floor,J="function"==typeof Object.defineProperty?Object.defineProperty:null;var K=Object.defineProperty;function Q(r){return"number"==typeof r}function rr(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function er(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+rr(i):rr(i)+r,n&&(r="-"+r)),r}var tr=String.prototype.toLowerCase,nr=String.prototype.toUpperCase;function ir(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!Q(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=er(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=er(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===nr.call(r.specifier)?nr.call(t):tr.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function ar(r){return"string"==typeof r}var or=Math.abs,cr=String.prototype.toLowerCase,ur=String.prototype.toUpperCase,fr=String.prototype.replace,sr=/e\+(\d)$/,lr=/e-(\d)$/,pr=/^(\d+)$/,yr=/^(\d+)e/,vr=/\.0$/,gr=/\.0*e/,dr=/(\..*[^0])0*e/;function hr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!Q(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":or(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=fr.call(t,dr,"$1e"),t=fr.call(t,gr,"e"),t=fr.call(t,vr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=fr.call(t,sr,"e+0$1"),t=fr.call(t,lr,"e-0$1"),r.alternate&&(t=fr.call(t,pr,"$1."),t=fr.call(t,yr,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===ur.call(r.specifier)?ur.call(t):cr.call(t)}function wr(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function br(r,e,t){var n=e-r.length;return n<0?r:r=t?r+wr(n):wr(n)+r}var mr=String.fromCharCode,Ar=isNaN,_r=Array.isArray;function Er(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Nr(r){var e,t,n,i,a,o,c,u,f;if(!_r(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(ar(n=r[u]))o+=n;else{if(e=void 0!==n.precision,!(n=Er(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,Ar(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,Ar(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=ir(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!Ar(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=Ar(a)?String(n.arg):mr(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=hr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=er(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=br(n.arg,n.width,n.padRight)),o+=n.arg||"",c+=1}return o}var Ur=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Ir(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function Sr(r){var e,t,n,i;for(t=[],i=0,n=Ur.exec(r);n;)(e=r.slice(i,Ur.lastIndex-n[0].length)).length&&t.push(e),t.push(Ir(n)),i=Ur.lastIndex,n=Ur.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function kr(r){return"string"==typeof r}function xr(r){var e,t;if(!kr(r))throw new TypeError(xr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[Sr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return Nr.apply(null,e)}var Fr=Object.prototype,jr=Fr.toString,Tr=Fr.__defineGetter__,Or=Fr.__defineSetter__,Vr=Fr.__lookupGetter__,$r=Fr.__lookupSetter__;var Gr,Hr,Wr=function(){try{return J({},"x",{}),!0}catch(r){return!1}}()?K:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===jr.call(r))throw new TypeError(xr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===jr.call(t))throw new TypeError(xr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(Vr.call(r,e)||$r.call(r,e)?(n=r.__proto__,r.__proto__=Fr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Tr&&Tr.call(r,e,t.get),o&&Or&&Or.call(r,e,t.set),r};function Cr(r,e,t){Wr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}!0===j?(Gr=1,Hr=0):(Gr=0,Hr=1);var Lr={HIGH:Gr,LOW:Hr},Pr=new b(1),Rr=new v(Pr.buffer),Zr=Lr.HIGH,Mr=Lr.LOW;function Xr(r,e,t,n){return Pr[0]=r,e[n]=Rr[Zr],e[n+t]=Rr[Mr],e}function Yr(r){return Xr(r,[0,0],1,0)}Cr(Yr,"assign",Xr);var zr=[0,0];function qr(r,e){var t,n;return Yr.assign(r,zr,1,0),t=zr[0],t&=2147483647,n=$(e),B(t|=n&=2147483648,zr[1])}function Br(r){return Math.abs(r)}function Dr(e,t,i,a){return r(e)||n(e)?(t[a]=e,t[a+i]=0,t):0!==e&&Br(e)<22250738585072014e-324?(t[a]=4503599627370496*e,t[a+i]=-52,t):(t[a]=e,t[a+i]=0,t)}Cr((function(r){return Dr(r,[0,0],1,0)}),"assign",Dr);var Jr=[0,0],Kr=[0,0];function Qr(i,a){var o,c;return 0===a||0===i||r(i)||n(i)?i:(Dr(i,Jr,1,0),a+=Jr[1],a+=function(r){var e=$(r);return(e=(2146435072&e)>>>20)-1023|0}(i=Jr[0]),a<-1074?qr(0,i):a>1023?i<0?t:e:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,Yr.assign(i,Kr,1,0),o=Kr[0],o&=2148532223,c*B(o|=a+1023<<20,Kr[1])))}function re(r){return function(r,e){var t,n;for(t=[],n=0;n<e;n++)t.push(r);return t}(0,r)}var ee=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],te=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ne=5.960464477539063e-8,ie=re(20),ae=re(20),oe=re(20),ce=re(20);function ue(r,e,t,n,i,a,o,c,u){var f,s,l,p,y,v,g,d,h;for(p=a,h=n[t],d=t,y=0;d>0;y++)s=ne*h|0,ce[y]=h-16777216*s|0,h=n[d-1]+s,d-=1;if(h=Qr(h,i),h-=8*D(.125*h),h-=g=0|h,l=0,i>0?(g+=y=ce[t-1]>>24-i,ce[t-1]-=y<<24-i,l=ce[t-1]>>23-i):0===i?l=ce[t-1]>>23:h>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<t;y++)d=ce[y],0===f?0!==d&&(f=1,ce[y]=16777216-d):ce[y]=16777215-d;if(i>0)switch(i){case 1:ce[t-1]&=8388607;break;case 2:ce[t-1]&=4194303}2===l&&(h=1-h,0!==f&&(h-=Qr(1,i)))}if(0===h){for(d=0,y=t-1;y>=a;y--)d|=ce[y];if(0===d){for(v=1;0===ce[a-v];v++);for(y=t+1;y<=t+v;y++){for(u[c+y]=ee[o+y],s=0,d=0;d<=c;d++)s+=r[d]*u[c+(y-d)];n[y]=s}return ue(r,e,t+=v,n,i,a,o,c,u)}}if(0===h)for(t-=1,i-=24;0===ce[t];)t-=1,i-=24;else(h=Qr(h,-i))>=16777216?(s=ne*h|0,ce[t]=h-16777216*s|0,i+=24,ce[t+=1]=s):ce[t]=0|h;for(s=Qr(1,i),y=t;y>=0;y--)n[y]=s*ce[y],s*=ne;for(y=t;y>=0;y--){for(s=0,v=0;v<=p&&v<=t-y;v++)s+=te[v]*n[y+v];oe[t-y]=s}for(s=0,y=t;y>=0;y--)s+=oe[y];for(e[0]=0===l?s:-s,s=oe[0]-s,y=1;y<=t;y++)s+=oe[y];return e[1]=0===l?s:-s,7&g}function fe(r,e,t,n){var i,a,o,c,u,f,s;for(4,(a=(t-3)/24|0)<0&&(a=0),c=t-24*(a+1),f=a-(o=n-1),s=o+4,u=0;u<=s;u++)ie[u]=f<0?0:ee[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*ie[o+(u-f)];ae[u]=i}return 4,ue(r,e,4,ae,c,4,a,o,ie)}var se=Math.round;function le(r,e,t){var n,i,a,o,c;return a=r-1.5707963267341256*(n=se(.6366197723675814*r)),o=6077100506506192e-26*n,c=e>>20|0,t[0]=a-o,c-($(t[0])>>20&2047)>16&&(o=20222662487959506e-37*n-((i=a)-(a=i-(o=6077100506303966e-26*n))-o),t[0]=a-o,c-($(t[0])>>20&2047)>49&&(o=84784276603689e-45*n-((i=a)-(a=i-(o=20222662487111665e-37*n))-o),t[0]=a-o)),t[1]=a-t[0]-o,n}var pe=1.5707963267341256,ye=6077100506506192e-26,ve=2*ye,ge=4*ye,de=[0,0,0],he=[0,0];function we(r,e){var t,n,i,a,o,c,u;if((i=2147483647&$(r)|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?le(r,i,e):i<=1073928572?r>0?(u=r-pe,e[0]=u-ye,e[1]=u-e[0]-ye,1):(u=r+pe,e[0]=u+ye,e[1]=u-e[0]+ye,-1):r>0?(u=r-2*pe,e[0]=u-ve,e[1]=u-e[0]-ve,2):(u=r+2*pe,e[0]=u+ve,e[1]=u-e[0]+ve,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?le(r,i,e):r>0?(u=r-3*pe,e[0]=u-1.8231301519518578e-10,e[1]=u-e[0]-1.8231301519518578e-10,3):(u=r+3*pe,e[0]=u+1.8231301519518578e-10,e[1]=u-e[0]+1.8231301519518578e-10,-3):1075388923===i?le(r,i,e):r>0?(u=r-4*pe,e[0]=u-ge,e[1]=u-e[0]-ge,4):(u=r+4*pe,e[0]=u+ge,e[1]=u-e[0]+ge,-4);if(i<1094263291)return le(r,i,e);if(i>=2146435072)return e[0]=NaN,e[1]=NaN,0;for(t=function(r){return R[0]=r,Z[P]}(r),u=B(i-((n=(i>>20)-1046)<<20|0),t),o=0;o<2;o++)de[o]=0|u,u=16777216*(u-de[o]);for(de[2]=u,a=3;0===de[a-1];)a-=1;return c=fe(de,he,n,a),r<0?(e[0]=-he[0],e[1]=-he[1],-c):(e[0]=he[0],e[1]=he[1],c)}var be=[0,0];function me(r){var e;if(e=$(r),(e&=2147483647)<=1072243195)return e<1044381696?1:G(r,0);if(e>=2146435072)return NaN;switch(3&we(r,be)){case 0:return G(be[0],be[1]);case 1:return-W(be[0],be[1]);case 2:return-G(be[0],be[1]);default:return W(be[0],be[1])}}var Ae=[0,0];function _e(r){var e;if(e=$(r),(e&=2147483647)<=1072243195)return e<1045430272?r:W(r,0);if(e>=2146435072)return NaN;switch(3&we(r,Ae)){case 0:return W(Ae[0],Ae[1]);case 1:return G(Ae[0],Ae[1]);case 2:return-W(Ae[0],Ae[1]);default:return-G(Ae[0],Ae[1])}}var Ee=3.141592653589793;function Ne(e){return r(e)?NaN:n(e)?0:0===e?1:function(e){var t,i;return r(e)||n(e)?NaN:0===(t=Br(i=e%2))||1===t?qr(0,i):t<.25?_e(Ee*i):t<.75?qr(me(Ee*(t=.5-t)),i):t<1.25?(i=qr(1,i)-i,_e(Ee*i)):t<1.75?-qr(me(Ee*(t-=1.5)),i):(i-=qr(2,i),_e(Ee*i))}(e)/(Ee*e)}export{Ne as default};
//# sourceMappingURL=mod.js.map
