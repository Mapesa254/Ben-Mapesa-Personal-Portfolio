(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const n of i.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&t(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function t(e){if(e.ep)return;e.ep=!0;const i=a(e);fetch(e.href,i)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const i of e.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const G=([r,o,a])=>{const t=document.createElementNS("http://www.w3.org/2000/svg",r);return Object.keys(o).forEach(e=>{t.setAttribute(e,String(o[e]))}),a!=null&&a.length&&a.forEach(e=>{const i=G(e);t.appendChild(i)}),t},te=(r,o={})=>{const a={...A,...o};return G(["svg",a,r])};/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const re=r=>Array.from(r.attributes).reduce((o,a)=>(o[a.name]=a.value,o),{}),ae=r=>typeof r=="string"?r:!r||!r.class?"":r.class&&typeof r.class=="string"?r.class.split(" "):r.class&&Array.isArray(r.class)?r.class:"",oe=r=>r.flatMap(ae).map(o=>o.trim()).filter(Boolean).filter((o,a,t)=>t.indexOf(o)===a).join(" "),ne=r=>r.replace(/(\w)(\w*)(_|-|\s*)/g,(o,a,t)=>a.toUpperCase()+t.toLowerCase()),k=(r,{nameAttr:o,icons:a,attrs:t})=>{var e;const i=r.getAttribute(o);if(i==null)return;const n=ne(i),s=a[n];if(!s)return console.warn(`${r.outerHTML} icon name was not found in the provided icons object.`);const l=re(r),d={...A,"data-lucide":i,...t,...l},g=oe(["lucide",`lucide-${i}`,l,t]);g&&Object.assign(d,{class:g});const ee=te(s,d);return(e=r.parentNode)==null?void 0:e.replaceChild(ee,r)};/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ie=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const S=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const le=[["path",{d:"m5 12 7-7 7 7"}],["path",{d:"M12 19V5"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const $=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const I=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const N=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const P=[["path",{d:"m6 9 6 6 6-6"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const B=[["path",{d:"m9 18 6-6-6-6"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const H=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const z=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const T=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const U=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const R=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const O=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const y=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const q=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const se=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const V=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const J=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const v=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const F=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ce=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const X=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const W=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const de=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Z=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const u=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const w=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const _=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const Y=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const x=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const ge=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
* @license lucide v0.487.0 - ISC
*
* This source code is licensed under the ISC license.
* See the LICENSE file in the root directory of this source tree.
*/const c=({icons:r={},nameAttr:o="data-lucide",attrs:a={}}={})=>{if(!Object.values(r).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const t=document.querySelectorAll(`[${o}]`);if(Array.from(t).forEach(e=>k(e,{nameAttr:o,icons:r,attrs:a})),o==="data-lucide"){const e=document.querySelectorAll("[icon-name]");e.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(e).forEach(i=>k(i,{nameAttr:"icon-name",icons:r,attrs:a})))}},K=[{id:"game",title:"Game Developer",description:"Building immersive 3D worlds and interactive experiences with deep focus on gameplay mechanics, physics simulation, and real-time rendering.",tags:["Unity","Unreal Engine","C#","GLSL","Blender"],iconName:"gamepad-2",gradient:"linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",glowColor:"rgba(168,85,247,0.35)",cardClass:"skill-card-game",accentColor:"#a855f7",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))"},{id:"design",title:"Graphic Designer",description:"Creating visually striking brand identities, motion graphics, and UI/UX systems that blend aesthetics with intuitive user experiences.",tags:["Figma","Photoshop","Illustrator","After Effects","Spline"],iconName:"palette",gradient:"linear-gradient(135deg, #db2777, #ec4899, #f472b6)",glowColor:"rgba(236,72,153,0.35)",cardClass:"skill-card-design",accentColor:"#ec4899",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(219,39,119,0.15), rgba(236,72,153,0.08))"},{id:"data",title:"Data Scientist",description:"Transforming complex datasets into actionable insights through machine learning models, statistical analysis, and interactive visualizations.",tags:["Python","TensorFlow","PyTorch","Pandas","Jupyter"],iconName:"bar-chart-3",gradient:"linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)",glowColor:"rgba(6,182,212,0.35)",cardClass:"skill-card-data",accentColor:"#06b6d4",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(8,145,178,0.15), rgba(6,182,212,0.08))"}];let C=[...K];function me(){var r,o;const a=document.getElementById("skills-grid");if(!a)return;function t(){var e;let i="";C.forEach(n=>{const s=n.tags.map(l=>`<span class="px-3 py-1 rounded-full text-xs" style="
                    font-family: var(--pf-font-body);
                    color: ${n.accentColor};
                    background: ${n.accentColor}18;
                    border: 1px solid ${n.accentColor}35;
                ">${l}</span>`).join("");i+=`
            <div class="relative rounded-2xl p-6 transition-all duration-400 overflow-hidden ${n.cardClass} group transform hover:-translate-y-2 hover:scale-[1.01]"
                 style="
                    background: var(--bg-grad, ${n.bgGradientLight});
                    backdrop-filter: blur(20px);
                    border: 1px solid ${n.accentColor}25;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
                 ">
                <style>
                    .dark .${n.cardClass} { --bg-grad: ${n.bgGradientDark} !important; }
                </style>
                <div class="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style="background: ${n.gradient};"></div>
                <div class="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style="background: radial-gradient(circle, ${n.glowColor} 0%, transparent 70%); opacity: 0.5;"></div>
                
                <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative" style="background: ${n.gradient}; box-shadow: 0 8px 24px ${n.glowColor};">
                    <i data-lucide="${n.iconName}" class="text-white"></i>
                </div>
                
                <h3 class="mb-3 text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">${n.title}</h3>
                <p class="mb-5 text-sm leading-relaxed text-[#1e1b4b]/60 dark:text-[#f0f0ff]/55" style="font-family: var(--pf-font-body);">${n.description}</p>
                
                <div class="flex flex-wrap gap-2">${s}</div>
                
                <div class="flex items-center gap-1 mt-5 text-xs" style="font-family: var(--pf-font-heading); color: ${n.accentColor}; letter-spacing: 0.1em;">
                    <span>VIEW WORK</span>
                    <i data-lucide="chevron-right" class="w-3 h-3"></i>
                </div>
            </div>
            `}),a.innerHTML=i,c({icons:{Plus:Z,ChevronRight:B,Gamepad2:O,Palette:W,BarChart3:N,Sparkles:w,X:x}}),(e=document.getElementById("add-skill-btn"))==null||e.addEventListener("click",()=>{var n;(n=document.getElementById("add-skill-modal"))==null||n.classList.remove("hidden")})}t(),(r=document.getElementById("close-modal-btn"))==null||r.addEventListener("click",()=>{var e;(e=document.getElementById("add-skill-modal"))==null||e.classList.add("hidden")}),(o=document.getElementById("add-new-skill-form"))==null||o.addEventListener("submit",e=>{var i;e.preventDefault();const n=new FormData(e.target),s=n.get("title"),l=n.get("description"),d=n.get("tags");C.push({...K[0],id:Date.now().toString(),title:s,description:l||"A new skill area.",tags:d.split(",").map(g=>g.trim()),iconName:"sparkles",cardClass:"skill-card-add",gradient:"linear-gradient(135deg, #c2410c, #ea580c, #fb923c)",glowColor:"rgba(234,88,12,0.35)",accentColor:"#ea580c",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(194,65,12,0.15), rgba(234,88,12,0.08))"}),t(),(i=document.getElementById("add-skill-modal"))==null||i.classList.add("hidden"),e.target.reset()})}const L=[{id:1,title:"Eclipse: Rise of Shadows",subtitle:"3D Action RPG",description:"A fully immersive open-world RPG built in Unity with custom GLSL shaders, dynamic lighting, and procedural terrain generation.",image:"https://images.unsplash.com/photo-1656848922730-d29aad606524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjAzRCUyMHJlbmRlciUyMGRhcmt8ZW58MXx8fHwxNzc1NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Unity","C#","GLSL","Blender"],category:"Game Dev",categoryColor:"#a855f7"},{id:2,title:"Neural Forecast Dashboard",subtitle:"ML Analytics Platform",description:"Real-time stock prediction dashboard powered by LSTM networks. Features interactive charts, backtesting engine, and portfolio optimizer.",image:"https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzUzNTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Python","TensorFlow","Vanilla JS","D3.js"],category:"Data Science",categoryColor:"#06b6d4"},{id:3,title:"PixelFlow UI Kit",subtitle:"Design System",description:"A comprehensive, dark-mode-first design system with 200+ components, built for modern SaaS applications and creative portfolios.",image:"https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NDE0NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Figma","Tailwind","TypeScript"],category:"Design",categoryColor:"#ec4899"}];function be(){const r=document.getElementById("projects-grid"),o=document.querySelectorAll(".project-filter-btn");if(!r)return;function a(t="All"){const e=t==="All"?L:L.filter(n=>n.category===t);let i="";e.forEach(n=>{const s=n.tags.map(l=>`<span class="px-2.5 py-1 rounded-md text-xs tag-pill-light dark:tag-pill-dark" style="font-family: var(--pf-font-body)">
                    ${l}
                </span>`).join("");i+=`
            <div class="project-card rounded-2xl overflow-hidden cursor-pointer group bg-white/80 dark:bg-white/5 border border-white/90 dark:border-white/5 shadow-[0_4px_24px_rgba(79,70,229,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2">
                
                <div class="relative h-52 overflow-hidden">
                    <img src="${n.image}" alt="${n.title}" class="w-full h-full object-cover project-card-img" />
                    <!-- Gradient overlay -->
                    <!-- <div class="absolute inset-0 bg-gradient-to-t from-white/95 from-[10%] via-white/0 to-transparent dark:from-[#050510]/95 dark:via-black/0 dark:to-transparent"></div> -->
                    
                    <!-- Category badge -->
                    <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/85 dark:bg-[#050510]/70" style="font-family: var(--pf-font-heading); color: ${n.categoryColor}; border: 1px solid ${n.categoryColor}40;">
                        ${n.category.toUpperCase()}
                    </div>

                    <!-- Hover Actions -->
                    <div class="absolute inset-0 flex items-center justify-center gap-3 bg-[#f0f4ff]/60 dark:bg-[#050510]/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button class="w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg transform hover:scale-105 transition-transform" style="background: linear-gradient(135deg, #6366f1, #a855f7);">
                            <i data-lucide="eye" class="w-4 h-4"></i>
                        </button>
                        <button class="w-12 h-12 rounded-xl flex items-center justify-center bg-white/90 dark:bg-white/10 text-indigo-500 dark:text-white border border-indigo-500/20 dark:border-white/20 shadow-lg transform hover:scale-105 transition-transform">
                            <i data-lucide="github" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>

                <div class="p-5 relative z-10 bg-white/0 dark:bg-transparent">
                    <div class="flex items-start justify-between mb-2">
                        <div>
                            <h3 class="mb-0.5 text-[#0f0a2e] dark:text-[#f0f0ff] font-semibold" style="font-family: var(--pf-font-heading); font-size: 0.9rem;">${n.title}</h3>
                            <p class="text-xs" style="font-family: var(--pf-font-body); color: ${n.categoryColor};">${n.subtitle}</p>
                        </div>
                        <div class="mt-1 transform group-hover:rotate-45 transition-transform duration-200">
                             <i data-lucide="arrow-up-right" class="w-4 h-4 text-[#1e1b4b]/30 dark:text-[#f0f0ff]/30"></i>
                        </div>
                    </div>
                    
                    <p class="text-sm mb-4 leading-relaxed text-[#1e1b4b]/55 dark:text-[#f0f0ff]/50 line-clamp-2" style="font-family: var(--pf-font-body);">
                        ${n.description}
                    </p>
                    
                    <div class="flex flex-wrap gap-1.5">
                        ${s}
                    </div>
                </div>
            </div>
            `}),r.innerHTML=i,c({icons:{ExternalLink:U,Github:y,Eye:R,ArrowUpRight:S}})}a(),o.forEach(t=>{t.addEventListener("click",e=>{const i=e.currentTarget,n=i.dataset.filter||"All";o.forEach(l=>{l.classList.remove("text-white"),l.classList.add("text-slate-800/50","dark:text-white/45");const d=l.querySelector(".active-indicator");d&&d.classList.add("hidden")}),i.classList.add("text-white"),i.classList.remove("text-slate-800/50","dark:text-white/45");const s=i.querySelector(".active-indicator");s&&s.classList.remove("hidden"),a(n)})})}function pe(){const r=document.getElementById("bio-toggle"),o=document.getElementById("bio-expanded"),a=r==null?void 0:r.querySelector("span"),t=r==null?void 0:r.querySelector('i[data-lucide="chevron-down"]');if(!r||!o)return;let e=!1;c({icons:{Award:$,Code2:z,Calendar:I,MapPin:v,Download:T,ChevronDown:P}}),window.observeElements&&window.observeElements(),r.addEventListener("click",()=>{e=!e,e?(o.style.height=o.scrollHeight+"px",o.style.opacity="1",a&&(a.textContent="READ LESS"),t==null||t.classList.add("rotate-180")):(o.style.height="0px",o.style.opacity="0",a&&(a.textContent="READ MORE"),t==null||t.classList.remove("rotate-180"))})}const he=[{name:"Unity",emoji:"⚙️",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Unreal",emoji:"🎮",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"C#",emoji:"💻",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"C++",emoji:"⚡",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Blender",emoji:"🎨",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"GLSL",emoji:"✨",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Figma",emoji:"🖌️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Photoshop",emoji:"🖼️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Illustrator",emoji:"✏️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"After Effects",emoji:"🎬",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Spline",emoji:"🔮",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"ProtoPie",emoji:"📱",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Python",emoji:"🐍",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"TensorFlow",emoji:"🧠",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"PyTorch",emoji:"🔥",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Pandas",emoji:"🐼",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Jupyter",emoji:"📓",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"D3.js",emoji:"📊",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Vanilla JS",emoji:"⚡",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"TypeScript",emoji:"🔷",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Tailwind CSS",emoji:"🎨",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Node.js",emoji:"🟢",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Git",emoji:"📦",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Vite",emoji:"⚡",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"}],fe=[{key:"Game Dev",label:"Game Development",color:"#a855f7",gradient:"linear-gradient(135deg, #7c3aed, #a855f7)"},{key:"Design",label:"Design & Visual",color:"#ec4899",gradient:"linear-gradient(135deg, #db2777, #ec4899)"},{key:"Data",label:"Data & ML",color:"#06b6d4",gradient:"linear-gradient(135deg, #0891b2, #06b6d4)"},{key:"General",label:"Development",color:"#6366f1",gradient:"linear-gradient(135deg, #4f46e5, #6366f1)"}];function ue(){const r=document.getElementById("tools-wrapper");if(!r)return;let o="";fe.forEach(a=>{const t=he.filter(e=>e.category===a.key);o+=`
        <div class="reveal-on-scroll">
            <div class="flex items-center gap-3 mb-5">
                <div class="w-6 h-6 rounded-lg" style="background: ${a.gradient}; box-shadow: 0 4px 12px ${a.color}40;"></div>
                <span class="text-sm font-bold" style="font-family: var(--pf-font-heading); font-size: 0.75rem; letter-spacing: 0.12em; color: ${a.color};">${a.label.toUpperCase()}</span>
                <div class="flex-1 h-px bg-gradient-to-r from-[${a.color}30] to-transparent"></div>
            </div>
            <div class="flex flex-wrap gap-2.5 mb-10">
                ${t.map(e=>`
                    <div class="tool-badge flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default transition-all duration-300 transform hover:scale-[1.08] hover:-translate-y-1 shadow-[0_2px_8px_${e.color}10] dark:shadow-none"
                         style="border: 1px solid ${e.color}20; backdrop-filter: blur(10px);"
                         data-bg-light="${e.bgColorLight}" data-bg-dark="${e.bgColorDark}">
                         <style>
                              .tool-badge { background: ${e.bgColorLight}; }
                              .dark .tool-badge { background: ${e.bgColorDark} !important; border-color: ${e.color}25; }
                         </style>
                         <span style="font-size: 1.1rem; line-height: 1;">${e.emoji}</span>
                         <span class="text-sm whitespace-nowrap text-slate-800/80 dark:text-white/80" style="font-family: var(--pf-font-body)">
                              ${e.name}
                         </span>
                    </div>
                `).join("")}
            </div>
        </div>
        `}),o+=`
    <div class="reveal-on-scroll mt-14 p-6 rounded-2xl text-center bg-indigo-500/5 border border-indigo-500/10 dark:bg-indigo-500/10 dark:border-indigo-500/20">
         <p class="text-sm text-slate-800/55 dark:text-white/55 leading-relaxed" style="font-family: var(--pf-font-body)">
              Always learning. Currently exploring 
              <span class="text-[#6366f1] dark:text-[#a5b4fc]">WebGPU</span>, 
              <span class="text-[#a855f7] dark:text-[#f0abfc]">Stable Diffusion fine-tuning</span>, and 
              <span class="text-[#0891b2] dark:text-[#67e8f9]">LLM agent frameworks</span>.
         </p>
    </div>
    `,r.innerHTML=o,c({icons:{Sparkles:w}}),window.observeElements&&window.observeElements()}function ye(){var r;const o=document.getElementById("contact-form"),a=document.getElementById("contact-success"),t=document.getElementById("contact-submit-btn");o&&(c({icons:{Mail:J,MapPin:v,Send:u,CheckCircle:H,Github:y,Twitter:Y,Linkedin:V,Globe:q}}),window.observeElements&&window.observeElements(),o.addEventListener("submit",e=>{e.preventDefault(),t&&(t.setAttribute("disabled","true"),t.innerHTML=`
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending Message...</span>
            `),setTimeout(()=>{o.reset(),a&&a.classList.remove("hidden"),t&&(t.removeAttribute("disabled"),t.innerHTML=`
                    <span>Send Message</span>
                    <i data-lucide="send" class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                `,c({icons:{Send:u}}))},1500)}),(r=document.getElementById("send-another-btn"))==null||r.addEventListener("click",()=>{a&&a.classList.add("hidden")}))}c({icons:{Sun:_,Moon:X,Menu:F,X:x,Zap:ge,Github:y,Twitter:Y,Linkedin:V,Globe:q,Mail:J,MapPin:v,MessageSquare:ce,CheckCircle:H,Send:u,Plus:Z,Gamepad2:O,Palette:W,BarChart3:N,ChevronRight:B,ArrowRight:ie,ExternalLink:U,ChevronDown:P,Sparkles:w,Play:de,Eye:R,ArrowUpRight:S,Heart:se,ArrowUp:le,Award:$,Code2:z,Calendar:I,Download:T}});const M=document.getElementById("theme-toggle"),D=document.documentElement;let p=!0;function Q(){p?D.classList.add("dark"):D.classList.remove("dark");const r=document.getElementById("theme-icon");r&&(r.innerHTML=p?'<i data-lucide="sun" class="w-4 h-4"></i>':'<i data-lucide="moon" class="w-4 h-4"></i>',c({icons:{Sun:_,Moon:X}}))}const ve=[{name:"Skills",fn:me},{name:"Projects",fn:be},{name:"About",fn:pe},{name:"Tools",fn:ue},{name:"Contact",fn:ye}];ve.forEach(({name:r,fn:o})=>{try{o()}catch(a){console.error(`Error initializing ${r}:`,a);const t=document.createElement("div");t.style.color="red",t.textContent=`Error in ${r}: `+a.toString(),document.body.prepend(t)}});Q();M==null||M.addEventListener("click",()=>{p=!p,Q()});const m=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>20?m==null||m.classList.add("scrolled"):m==null||m.classList.remove("scrolled")});const h=document.getElementById("mobile-menu-btn"),b=document.getElementById("mobile-menu");h==null||h.addEventListener("click",()=>{b==null||b.classList.toggle("hidden");const r=b==null?void 0:b.classList.contains("hidden");h.innerHTML=r?'<i data-lucide="menu" class="w-4 h-4"></i>':'<i data-lucide="x" class="w-4 h-4"></i>',c({icons:{Menu:F,X:x}})});const we={rootMargin:"0px",threshold:.15},xe=new IntersectionObserver((r,o)=>{r.forEach(a=>{a.isIntersecting&&(a.target.classList.add("animate-in"),o.unobserve(a.target))})},we);window.observeElements=()=>{document.querySelectorAll(".reveal-on-scroll:not(.animate-in)").forEach(r=>{xe.observe(r)})};window.observeElements();const E=["Game Developer","Graphic Designer","Data Scientist"];let f=0;const j=document.getElementById("hero-role");j&&setInterval(()=>{f=(f+1)%E.length,j.textContent=E[f]},2800);
