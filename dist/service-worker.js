if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const c=e=>i(e,t),l={module:{uri:t},exports:o,require:c};s[t]=Promise.all(n.map((e=>l[e]||c(e)))).then((e=>(r(...e),o)))}}define(["./workbox-377f676e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/337.bundle.js",revision:"72c587c3dc5912fff25d84c595e56a70"},{url:"/8634de4eafd9d6c7a3343802530223b7.png",revision:null},{url:"/bundle.js",revision:"b8072e49a129f6a2d27a511e6c4f9352"},{url:"/bundle.js.LICENSE.txt",revision:"258beef46b8c7e204fc126992814d671"},{url:"/index.html",revision:"321f839f3e312706d7ba27a42090f2cb"}],{}),e.registerRoute(/https:\/\/(res.cloudinary.com|images.unsplash.com|petgram-server-24iykciv5.now.sh)/,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/petgram-server-24iykciv5.now.sh/,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));