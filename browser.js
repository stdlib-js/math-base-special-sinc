// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number.NEGATIVE_INFINITY;function t(r){return r===e||r===n}var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),o=Object.prototype.toString,c=Object.prototype.hasOwnProperty,u="function"==typeof Symbol?Symbol:void 0,f="function"==typeof u?u.toStringTag:"",s=a&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return o.call(r);n=r[f],a=f,e=null!=(i=r)&&c.call(i,a);try{r[f]=void 0}catch(e){return o.call(r)}return t=o.call(r),e?r[f]=n:delete r[f],t}:function(r){return o.call(r)},l="function"==typeof Uint32Array,p="function"==typeof Uint32Array?Uint32Array:null,y="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var r,e,n;if("function"!=typeof p)return!1;try{e=new p(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(l&&n instanceof Uint32Array||"[object Uint32Array]"===s(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?y:function(){throw new Error("not implemented")};var d,g=i,h="function"==typeof Float64Array,v="function"==typeof Float64Array?Float64Array:null,w="function"==typeof Float64Array?Float64Array:void 0;d=function(){var r,e,n;if("function"!=typeof v)return!1;try{e=new v([1,3.14,-3.14,NaN]),n=e,r=(h&&n instanceof Float64Array||"[object Float64Array]"===s(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?w:function(){throw new Error("not implemented")};var b,m=d,A="function"==typeof Uint8Array,_="function"==typeof Uint8Array?Uint8Array:null,E="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,e,n;if("function"!=typeof _)return!1;try{e=new _(e=[1,3.14,-3.14,256,257]),n=e,r=(A&&n instanceof Uint8Array||"[object Uint8Array]"===s(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?E:function(){throw new Error("not implemented")};var N,U=b,I="function"==typeof Uint16Array,S="function"==typeof Uint16Array?Uint16Array:null,k="function"==typeof Uint16Array?Uint16Array:void 0;N=function(){var r,e,n;if("function"!=typeof S)return!1;try{e=new S(e=[1,3.14,-3.14,65536,65537]),n=e,r=(I&&n instanceof Uint16Array||"[object Uint16Array]"===s(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?k:function(){throw new Error("not implemented")};var x,F={uint16:N,uint8:U};(x=new F.uint16(1))[0]=4660;var j=52===new F.uint8(x.buffer)[0],T=!0===j?1:0,O=new m(1),V=new g(O.buffer);function $(r){return O[0]=r,V[T]}function G(r,e){var n,t,i,a;return i=(a=r*r)*a,t=a*function(r){return 0===r?.0416666666666666:.0416666666666666+r*(2480158728947673e-20*r-.001388888888887411)}(a),t+=i*i*function(r){return 0===r?-2.7557314351390663e-7:r*(2.087572321298175e-9+-11359647557788195e-27*r)-2.7557314351390663e-7}(a),(i=1-(n=.5*a))+(1-i-n+(a*t-r*e))}var H=-.16666666666666632;function W(r,e){var n,t,i;return n=.00833333333332249+(i=r*r)*(27557313707070068e-22*i-.0001984126982985795)+i*(i*i)*(1.58969099521155e-10*i-2.5050760253406863e-8),t=i*r,0===e?r+t*(H+i*n):r-(i*(.5*e-t*n)-e-t*H)}var C,L,P=2147483647,R=2146435072,Z=!0===j?0:1,M=new m(1),X=new g(M.buffer);!0===j?(C=1,L=0):(C=0,L=1);var Y={HIGH:C,LOW:L},z=new m(1),q=new g(z.buffer),B=Y.HIGH,D=Y.LOW;function J(r,e){return q[B]=r,q[D]=e,z[0]}var K=Math.floor,Q="function"==typeof Object.defineProperty?Object.defineProperty:null,rr=Object.defineProperty;function er(r){return"number"==typeof r}function nr(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function tr(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+nr(i):nr(i)+r,t&&(r="-"+r)),r}var ir=String.prototype.toLowerCase,ar=String.prototype.toUpperCase;function or(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!er(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=tr(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=tr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===ar.call(r.specifier)?ar.call(n):ir.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function cr(r){return"string"==typeof r}var ur=Math.abs,fr=String.prototype.toLowerCase,sr=String.prototype.toUpperCase,lr=String.prototype.replace,pr=/e\+(\d)$/,yr=/e-(\d)$/,dr=/^(\d+)$/,gr=/^(\d+)e/,hr=/\.0$/,vr=/\.0*e/,wr=/(\..*[^0])0*e/;function br(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!er(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":ur(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=lr.call(n,wr,"$1e"),n=lr.call(n,vr,"e"),n=lr.call(n,hr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=lr.call(n,pr,"e+0$1"),n=lr.call(n,yr,"e-0$1"),r.alternate&&(n=lr.call(n,dr,"$1."),n=lr.call(n,gr,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===sr.call(r.specifier)?sr.call(n):fr.call(n)}function mr(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function Ar(r,e,n){var t=e-r.length;return t<0?r:r=n?r+mr(t):mr(t)+r}var _r=String.fromCharCode,Er=isNaN,Nr=Array.isArray;function Ur(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function Ir(r){var e,n,t,i,a,o,c,u,f;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,u=0;u<r.length;u++)if(cr(t=r[u]))o+=t;else{if(e=void 0!==t.precision,!(t=Ur(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(c=t.mapping),n=t.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[c],10),c+=1,Er(t.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[c],10),c+=1,Er(t.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[c],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=or(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!Er(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=Er(a)?String(t.arg):_r(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=br(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=tr(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=Ar(t.arg,t.width,t.padRight)),o+=t.arg||"",c+=1}return o}var Sr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function kr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function xr(r){var e,n,t,i;for(n=[],i=0,t=Sr.exec(r);t;)(e=r.slice(i,Sr.lastIndex-t[0].length)).length&&n.push(e),n.push(kr(t)),i=Sr.lastIndex,t=Sr.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function Fr(r){return"string"==typeof r}function jr(r){var e,n,t;if(!Fr(r))throw new TypeError(jr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=xr(r),(n=new Array(arguments.length))[0]=e,t=1;t<n.length;t++)n[t]=arguments[t];return Ir.apply(null,n)}var Tr,Or,Vr=Object.prototype,$r=Vr.toString,Gr=Vr.__defineGetter__,Hr=Vr.__defineSetter__,Wr=Vr.__lookupGetter__,Cr=Vr.__lookupSetter__,Lr=function(){try{return Q({},"x",{}),!0}catch(r){return!1}}()?rr:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===$r.call(r))throw new TypeError(jr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===$r.call(n))throw new TypeError(jr("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(Wr.call(r,e)||Cr.call(r,e)?(t=r.__proto__,r.__proto__=Vr,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&Gr&&Gr.call(r,e,n.get),o&&Hr&&Hr.call(r,e,n.set),r};function Pr(r,e,n){Lr(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}!0===j?(Tr=1,Or=0):(Tr=0,Or=1);var Rr={HIGH:Tr,LOW:Or},Zr=new m(1),Mr=new g(Zr.buffer),Xr=Rr.HIGH,Yr=Rr.LOW;function zr(r,e,n,t){return Zr[0]=r,e[t]=Mr[Xr],e[t+n]=Mr[Yr],e}function qr(r){return zr(r,[0,0],1,0)}Pr(qr,"assign",zr);var Br=[0,0];function Dr(r,e){var n,t;return qr.assign(r,Br,1,0),n=Br[0],n&=P,t=$(e),J(n|=t&=2147483648,Br[1])}function Jr(r){return Math.abs(r)}function Kr(e,n,i,a){return r(e)||t(e)?(n[a]=e,n[a+i]=0,n):0!==e&&Jr(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+i]=-52,n):(n[a]=e,n[a+i]=0,n)}Pr((function(r){return Kr(r,[0,0],1,0)}),"assign",Kr);var Qr=[0,0],re=[0,0];function ee(i,a){var o,c;return 0===a||0===i||r(i)||t(i)?i:(Kr(i,Qr,1,0),a+=Qr[1],a+=function(r){var e=$(r);return(e=(e&R)>>>20)-1023|0}(i=Qr[0]),a<-1074?Dr(0,i):a>1023?i<0?n:e:(a<=-1023?(a+=52,c=2220446049250313e-31):c=1,qr.assign(i,re,1,0),o=re[0],o&=2148532223,c*J(o|=a+1023<<20,re[1])))}function ne(r){return function(r,e){var n,t;for(n=[],t=0;t<e;t++)n.push(r);return n}(0,r)}var te=[10680707,7228996,1387004,2578385,16069853,12639074,9804092,4427841,16666979,11263675,12935607,2387514,4345298,14681673,3074569,13734428,16653803,1880361,10960616,8533493,3062596,8710556,7349940,6258241,3772886,3769171,3798172,8675211,12450088,3874808,9961438,366607,15675153,9132554,7151469,3571407,2607881,12013382,4155038,6285869,7677882,13102053,15825725,473591,9065106,15363067,6271263,9264392,5636912,4652155,7056368,13614112,10155062,1944035,9527646,15080200,6658437,6231200,6832269,16767104,5075751,3212806,1398474,7579849,6349435,12618859],ie=[1.570796251296997,7.549789415861596e-8,5390302529957765e-30,3282003415807913e-37,1270655753080676e-44,12293330898111133e-52,27337005381646456e-60,21674168387780482e-67],ae=16777216,oe=5.960464477539063e-8,ce=ne(20),ue=ne(20),fe=ne(20),se=ne(20);function le(r,e,n,t,i,a,o,c,u){var f,s,l,p,y,d,g,h,v;for(p=a,v=t[n],h=n,y=0;h>0;y++)s=oe*v|0,se[y]=v-ae*s|0,v=t[h-1]+s,h-=1;if(v=ee(v,i),v-=8*K(.125*v),v-=g=0|v,l=0,i>0?(g+=y=se[n-1]>>24-i,se[n-1]-=y<<24-i,l=se[n-1]>>23-i):0===i?l=se[n-1]>>23:v>=.5&&(l=2),l>0){for(g+=1,f=0,y=0;y<n;y++)h=se[y],0===f?0!==h&&(f=1,se[y]=16777216-h):se[y]=16777215-h;if(i>0)switch(i){case 1:se[n-1]&=8388607;break;case 2:se[n-1]&=4194303}2===l&&(v=1-v,0!==f&&(v-=ee(1,i)))}if(0===v){for(h=0,y=n-1;y>=a;y--)h|=se[y];if(0===h){for(d=1;0===se[a-d];d++);for(y=n+1;y<=n+d;y++){for(u[c+y]=te[o+y],s=0,h=0;h<=c;h++)s+=r[h]*u[c+(y-h)];t[y]=s}return le(r,e,n+=d,t,i,a,o,c,u)}}if(0===v)for(n-=1,i-=24;0===se[n];)n-=1,i-=24;else(v=ee(v,-i))>=ae?(s=oe*v|0,se[n]=v-ae*s|0,i+=24,se[n+=1]=s):se[n]=0|v;for(s=ee(1,i),y=n;y>=0;y--)t[y]=s*se[y],s*=oe;for(y=n;y>=0;y--){for(s=0,d=0;d<=p&&d<=n-y;d++)s+=ie[d]*t[y+d];fe[n-y]=s}for(s=0,y=n;y>=0;y--)s+=fe[y];for(e[0]=0===l?s:-s,s=fe[0]-s,y=1;y<=n;y++)s+=fe[y];return e[1]=0===l?s:-s,7&g}function pe(r,e,n,t){var i,a,o,c,u,f,s;for((a=(n-3)/24|0)<0&&(a=0),c=n-24*(a+1),f=a-(o=t-1),s=o+4,u=0;u<=s;u++)ce[u]=f<0?0:te[f],f+=1;for(u=0;u<=4;u++){for(i=0,f=0;f<=o;f++)i+=r[f]*ce[o+(u-f)];ue[u]=i}return le(r,e,4,ue,c,4,a,o,ce)}var ye=Math.round;function de(r,e,n){var t,i,a,o,c;return a=r-1.5707963267341256*(t=ye(.6366197723675814*r)),o=6077100506506192e-26*t,c=e>>20|0,n[0]=a-o,c-($(n[0])>>20&2047)>16&&(o=20222662487959506e-37*t-((i=a)-(a=i-(o=6077100506303966e-26*t))-o),n[0]=a-o,c-($(n[0])>>20&2047)>49&&(o=84784276603689e-45*t-((i=a)-(a=i-(o=20222662487111665e-37*t))-o),n[0]=a-o)),n[1]=a-n[0]-o,t}var ge=1.5707963267341256,he=6077100506506192e-26,ve=2*he,we=3*he,be=4*he,me=[0,0,0],Ae=[0,0];function _e(r,e){var n,t,i,a,o,c,u;if((i=$(r)&P|0)<=1072243195)return e[0]=r,e[1]=0,0;if(i<=1074752122)return 598523==(1048575&i)?de(r,i,e):i<=1073928572?r>0?(u=r-ge,e[0]=u-he,e[1]=u-e[0]-he,1):(u=r+ge,e[0]=u+he,e[1]=u-e[0]+he,-1):r>0?(u=r-2*ge,e[0]=u-ve,e[1]=u-e[0]-ve,2):(u=r+2*ge,e[0]=u+ve,e[1]=u-e[0]+ve,-2);if(i<=1075594811)return i<=1075183036?1074977148===i?de(r,i,e):r>0?(u=r-3*ge,e[0]=u-we,e[1]=u-e[0]-we,3):(u=r+3*ge,e[0]=u+we,e[1]=u-e[0]+we,-3):1075388923===i?de(r,i,e):r>0?(u=r-4*ge,e[0]=u-be,e[1]=u-e[0]-be,4):(u=r+4*ge,e[0]=u+be,e[1]=u-e[0]+be,-4);if(i<1094263291)return de(r,i,e);if(i>=R)return e[0]=NaN,e[1]=NaN,0;for(n=function(r){return M[0]=r,X[Z]}(r),u=J(i-((t=(i>>20)-1046)<<20|0),n),o=0;o<2;o++)me[o]=0|u,u=16777216*(u-me[o]);for(me[2]=u,a=3;0===me[a-1];)a-=1;return c=pe(me,Ae,t,a),r<0?(e[0]=-Ae[0],e[1]=-Ae[1],-c):(e[0]=Ae[0],e[1]=Ae[1],c)}var Ee=[0,0];function Ne(r){var e;if(e=$(r),(e&=2147483647)<=1072243195)return e<1044381696?1:G(r,0);if(e>=2146435072)return NaN;switch(3&_e(r,Ee)){case 0:return G(Ee[0],Ee[1]);case 1:return-W(Ee[0],Ee[1]);case 2:return-G(Ee[0],Ee[1]);default:return W(Ee[0],Ee[1])}}var Ue=[0,0];function Ie(r){var e;if(e=$(r),(e&=P)<=1072243195)return e<1045430272?r:W(r,0);if(e>=R)return NaN;switch(3&_e(r,Ue)){case 0:return W(Ue[0],Ue[1]);case 1:return G(Ue[0],Ue[1]);case 2:return-W(Ue[0],Ue[1]);default:return-G(Ue[0],Ue[1])}}var Se=3.141592653589793;return function(e){return r(e)?NaN:t(e)?0:0===e?1:function(e){var n,i;return r(e)||t(e)?NaN:0===(n=Jr(i=e%2))||1===n?Dr(0,i):n<.25?Ie(Se*i):n<.75?Dr(Ne(Se*(n=.5-n)),i):n<1.25?(i=Dr(1,i)-i,Ie(Se*i)):n<1.75?-Dr(Ne(Se*(n-=1.5)),i):(i-=Dr(2,i),Ie(Se*i))}(e)/(Se*e)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).sinc=e();
//# sourceMappingURL=browser.js.map
