!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=47)}({14:function(e,t,r){"use strict";function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(f===setTimeout)return setTimeout(e,0);if((f===n||!f)&&setTimeout)return f=setTimeout,setTimeout(e,0);try{return f(e,0)}catch(t){try{return f.call(null,e,0)}catch(t){return f.call(this,e,0)}}}function u(e){if(p===clearTimeout)return clearTimeout(e);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(e);try{return p(e)}catch(t){try{return p.call(null,e)}catch(t){return p.call(this,e)}}}function a(){g&&h&&(g=!1,h.length?b=h.concat(b):d=-1,b.length&&c())}function c(){if(!g){var e=i(a);g=!0;for(var t=b.length;t;){for(h=b,b=[];++d<t;)h&&h[d].run();d=-1,t=b.length}h=null,g=!1,u(e)}}function l(e,t){this.fun=e,this.array=t}function s(){}var f,p,m=e.exports={};!function(){try{f="function"==typeof setTimeout?setTimeout:n}catch(e){f=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(e){p=o}}();var h,b=[],g=!1,d=-1;m.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];b.push(new l(e,t)),1!==b.length||g||i(c)},l.prototype.run=function(){this.fun.apply(null,this.array)},m.title="browser",m.browser=!0,m.env={},m.argv=[],m.version="",m.versions={},m.on=s,m.addListener=s,m.once=s,m.off=s,m.removeListener=s,m.removeAllListeners=s,m.emit=s,m.prependListener=s,m.prependOnceListener=s,m.listeners=function(e){return[]},m.binding=function(e){throw new Error("process.binding is not supported")},m.cwd=function(){return"/"},m.chdir=function(e){throw new Error("process.chdir is not supported")},m.umask=function(){return 0}},47:function(e,t,r){"use strict";(function(e){r(48),r(49),r(50),r(51),r(52);var t=r(53);if("production"!==e.env.NODE_ENV){var n=AFRAME.utils.debug("aframe-webpack-boilerplate:info");n("Looks like we are in development mode!"),n("Version: 0.9.2-dev"),n("report issues: https://github.com/mkungla/aframe-webpack-boilerplate/issues"),n("A-Frame Version: "+AFRAME.version),n("three.js Version: r"+THREE.REVISION),n("including TWEEN: "+TWEEN._nextId),console.log(t)}}).call(t,r(14))},48:function(e,t){},49:function(e,t){},50:function(e,t){},51:function(e,t){},52:function(e,t){},53:function(e,t){e.exports={project:{name:"aframe-webpack-boilerplate",version:"0.9.1",description:"Starter Kit for A-Frame WebXR with Webpack and SASS",author:"Marko Kungla <marko.kungla@gmail.com> (https://github.com/mkungla)",license:"MIT",repository:{type:"git",url:"https://github.com/mkungla/aframe-webpack-boilerplate.git"},bugs:{url:"https://github.com/mkungla/aframe-webpack-boilerplate/issues"},homepage:"https://github.com/mkungla/aframe-webpack-boilerplate#readme",keywords:["aframe","aframe-boilerplate","webpack2","webpack"]},app:{name:"A-Frame Webpack Boilerplate"}}}});
//# sourceMappingURL=app.js.map