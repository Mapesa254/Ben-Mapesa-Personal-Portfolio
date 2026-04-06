(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(e){if(e.ep)return;e.ep=!0;const i=r(e);fetch(e.href,i)}})();/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=([t,o,r])=>{const n=document.createElementNS("http://www.w3.org/2000/svg",t);return Object.keys(o).forEach(e=>{n.setAttribute(e,String(o[e]))}),r!=null&&r.length&&r.forEach(e=>{const i=S(e);n.appendChild(i)}),n},K=(t,o={})=>{const n={...A,...o};return S(["svg",n,t])};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q=t=>Array.from(t.attributes).reduce((o,r)=>(o[r.name]=r.value,o),{}),ee=t=>typeof t=="string"?t:!t||!t.class?"":t.class&&typeof t.class=="string"?t.class.split(" "):t.class&&Array.isArray(t.class)?t.class:"",te=t=>t.flatMap(ee).map(r=>r.trim()).filter(Boolean).filter((r,n,e)=>e.indexOf(r)===n).join(" "),ae=t=>t.replace(/(\w)(\w*)(_|-|\s*)/g,(o,r,n)=>r.toUpperCase()+n.toLowerCase()),C=(t,{nameAttr:o,icons:r,attrs:n})=>{var k;const e=t.getAttribute(o);if(e==null)return;const i=ae(e),a=r[i];if(!a)return console.warn(`${t.outerHTML} icon name was not found in the provided icons object.`);const l=Q(t),d={...A,"data-lucide":e,...n,...l},s=te(["lucide",`lucide-${e}`,l,n]);s&&Object.assign(d,{class:s});const h=K(a,d);return(k=t.parentNode)==null?void 0:k.replaceChild(h,t)};/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oe=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"}],["circle",{cx:"12",cy:"8",r:"6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16"}],["path",{d:"M18 17V9"}],["path",{d:"M13 17V5"}],["path",{d:"M8 17v-3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G=[["path",{d:"m6 9 6 6 6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N=[["path",{d:"m9 18 6-6-6-6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335"}],["path",{d:"m9 11 3 3L22 4"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=[["path",{d:"m18 16 4-4-4-4"}],["path",{d:"m6 8-4 4 4 4"}],["path",{d:"m14.5 4-5 16"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const le=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"}],["polyline",{points:"7 10 12 15 17 10"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"}],["circle",{cx:"12",cy:"12",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["line",{x1:"6",x2:"10",y1:"11",y2:"11"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"}],["rect",{width:"4",height:"12",x:"2",y:"9"}],["circle",{cx:"4",cy:"4",r:"2"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O=[["line",{x1:"4",x2:"20",y1:"12",y2:"12"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _=[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X=[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F=[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=[["polygon",{points:"6 3 20 12 6 21 6 3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J=[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W=[["circle",{cx:"12",cy:"12",r:"4"}],["path",{d:"M12 2v2"}],["path",{d:"M12 20v2"}],["path",{d:"m4.93 4.93 1.41 1.41"}],["path",{d:"m17.66 17.66 1.41 1.41"}],["path",{d:"M2 12h2"}],["path",{d:"M20 12h2"}],["path",{d:"m6.34 17.66-1.41 1.41"}],["path",{d:"m19.07 4.93-1.41 1.41"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w=[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const se=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];/**
 * @license lucide v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c=({icons:t={},nameAttr:o="data-lucide",attrs:r={}}={})=>{if(!Object.values(t).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const n=document.querySelectorAll(`[${o}]`);if(Array.from(n).forEach(e=>C(e,{nameAttr:o,icons:t,attrs:r})),o==="data-lucide"){const e=document.querySelectorAll("[icon-name]");e.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(e).forEach(i=>C(i,{nameAttr:"icon-name",icons:t,attrs:r})))}},Z=[{id:"game",title:"Game Developer",description:"Building immersive 3D worlds and interactive experiences with deep focus on gameplay mechanics, physics simulation, and real-time rendering.",tags:["Unity","Unreal Engine","C#","GLSL","Blender"],iconName:"gamepad-2",gradient:"linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",glowColor:"rgba(168,85,247,0.35)",cardClass:"skill-card-game",accentColor:"#a855f7",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))"},{id:"design",title:"Graphic Designer",description:"Creating visually striking brand identities, motion graphics, and UI/UX systems that blend aesthetics with intuitive user experiences.",tags:["Figma","Photoshop","Illustrator","After Effects","Spline"],iconName:"palette",gradient:"linear-gradient(135deg, #db2777, #ec4899, #f472b6)",glowColor:"rgba(236,72,153,0.35)",cardClass:"skill-card-design",accentColor:"#ec4899",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(219,39,119,0.15), rgba(236,72,153,0.08))"},{id:"data",title:"Data Scientist",description:"Transforming complex datasets into actionable insights through machine learning models, statistical analysis, and interactive visualizations.",tags:["Python","TensorFlow","PyTorch","Pandas","Jupyter"],iconName:"bar-chart-3",gradient:"linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)",glowColor:"rgba(6,182,212,0.35)",cardClass:"skill-card-data",accentColor:"#06b6d4",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(8,145,178,0.15), rgba(6,182,212,0.08))"}];let L=[...Z];function ce(){var r,n;const t=document.getElementById("skills-grid");if(!t)return;function o(){var i;let e="";L.forEach(a=>{const l=a.tags.map(d=>`<span class="px-3 py-1 rounded-full text-xs" style="
                    font-family: var(--pf-font-body);
                    color: ${a.accentColor};
                    background: ${a.accentColor}18;
                    border: 1px solid ${a.accentColor}35;
                ">${d}</span>`).join("");e+=`
            <div class="relative rounded-2xl p-6 transition-all duration-400 overflow-hidden ${a.cardClass} group transform hover:-translate-y-2 hover:scale-[1.01]"
                 style="
                    background: var(--bg-grad, ${a.bgGradientLight});
                    backdrop-filter: blur(20px);
                    border: 1px solid ${a.accentColor}25;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
                 ">
                <style>
                    .dark .${a.cardClass} { --bg-grad: ${a.bgGradientDark} !important; }
                </style>
                <div class="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style="background: ${a.gradient};"></div>
                <div class="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style="background: radial-gradient(circle, ${a.glowColor} 0%, transparent 70%); opacity: 0.5;"></div>
                
                <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative" style="background: ${a.gradient}; box-shadow: 0 8px 24px ${a.glowColor};">
                    <i data-lucide="${a.iconName}" class="text-white"></i>
                </div>
                
                <h3 class="mb-3 text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">${a.title}</h3>
                <p class="mb-5 text-sm leading-relaxed text-[#1e1b4b]/60 dark:text-[#f0f0ff]/55" style="font-family: var(--pf-font-body);">${a.description}</p>
                
                <div class="flex flex-wrap gap-2">${l}</div>
                
                <div class="flex items-center gap-1 mt-5 text-xs" style="font-family: var(--pf-font-heading); color: ${a.accentColor}; letter-spacing: 0.1em;">
                    <span>VIEW WORK</span>
                    <i data-lucide="chevron-right" class="w-3 h-3"></i>
                </div>
            </div>
            `}),e+=`
        <div id="add-skill-btn" class="rounded-2xl p-6 cursor-pointer transition-all duration-400 flex flex-col items-center justify-center gap-4 min-h-[16rem] group skill-card-add bg-white/50 dark:bg-white/5 border-[1.5px] border-dashed border-indigo-500/20 dark:border-indigo-500/25 backdrop-blur-xl transform hover:-translate-y-2 hover:scale-[1.01]">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/25 dark:border-indigo-500/30 transform group-hover:rotate-90 group-hover:scale-110 duration-300">
                <i data-lucide="plus" class="w-6 h-6 text-[#6366f1] dark:text-[#a5b4fc]"></i>
            </div>
            <div class="text-center">
                <p class="text-sm mb-1 text-[#6366f1] dark:text-indigo-300/80" style="font-family: var(--pf-font-heading); font-size: 0.85rem; letter-spacing: 0.08em;">ADD SKILL</p>
                <p class="text-xs text-[#1e1b4b]/40 dark:text-white/35" style="font-family: var(--pf-font-body);">Expand your expertise</p>
            </div>
        </div>
        `,t.innerHTML=e,c({icons:{Plus:J,ChevronRight:N,Gamepad2:B,Palette:F,BarChart3:I,Sparkles:v,X:w}}),(i=document.getElementById("add-skill-btn"))==null||i.addEventListener("click",()=>{var a;(a=document.getElementById("add-skill-modal"))==null||a.classList.remove("hidden")})}o(),(r=document.getElementById("close-modal-btn"))==null||r.addEventListener("click",()=>{var e;(e=document.getElementById("add-skill-modal"))==null||e.classList.add("hidden")}),(n=document.getElementById("add-new-skill-form"))==null||n.addEventListener("submit",e=>{var s;e.preventDefault();const i=new FormData(e.target),a=i.get("title"),l=i.get("description"),d=i.get("tags");L.push({...Z[0],id:Date.now().toString(),title:a,description:l||"A new skill area.",tags:d.split(",").map(h=>h.trim()),iconName:"sparkles",cardClass:"skill-card-add",gradient:"linear-gradient(135deg, #c2410c, #ea580c, #fb923c)",glowColor:"rgba(234,88,12,0.35)",accentColor:"#ea580c",bgGradientLight:"linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",bgGradientDark:"linear-gradient(135deg, rgba(194,65,12,0.15), rgba(234,88,12,0.08))"}),o(),(s=document.getElementById("add-skill-modal"))==null||s.classList.add("hidden"),e.target.reset()})}const D=[{id:1,title:"Eclipse: Rise of Shadows",subtitle:"3D Action RPG",description:"A fully immersive open-world RPG built in Unity with custom GLSL shaders, dynamic lighting, and procedural terrain generation.",image:"https://images.unsplash.com/photo-1656848922730-d29aad606524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjAzRCUyMHJlbmRlciUyMGRhcmt8ZW58MXx8fHwxNzc1NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Unity","C#","GLSL","Blender"],category:"Game Dev",categoryColor:"#a855f7"},{id:2,title:"Neural Forecast Dashboard",subtitle:"ML Analytics Platform",description:"Real-time stock prediction dashboard powered by LSTM networks. Features interactive charts, backtesting engine, and portfolio optimizer.",image:"https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzUzNTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Python","TensorFlow","Vanilla JS","D3.js"],category:"Data Science",categoryColor:"#06b6d4"},{id:3,title:"PixelFlow UI Kit",subtitle:"Design System",description:"A comprehensive, dark-mode-first design system with 200+ components, built for modern SaaS applications and creative portfolios.",image:"https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NDE0NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",tags:["Figma","Tailwind","TypeScript"],category:"Design",categoryColor:"#ec4899"}];function ge(){const t=document.getElementById("projects-grid"),o=document.querySelectorAll(".project-filter-btn");if(!t)return;function r(n="All"){const e=n==="All"?D:D.filter(a=>a.category===n);let i="";e.forEach(a=>{const l=a.tags.map(d=>`<span class="px-2.5 py-1 rounded-md text-xs tag-pill-light dark:tag-pill-dark" style="font-family: var(--pf-font-body)">
                    ${d}
                </span>`).join("");i+=`
            <div class="project-card rounded-2xl overflow-hidden cursor-pointer group bg-white/80 dark:bg-white/5 border border-white/90 dark:border-white/5 shadow-[0_4px_24px_rgba(79,70,229,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2">
                
                <div class="relative h-52 overflow-hidden">
                    <img src="${a.image}" alt="${a.title}" class="w-full h-full object-cover project-card-img" />
                    <!-- Gradient overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-white/95 from-[10%] via-white/0 to-transparent dark:from-[#050510]/95 dark:via-black/0 dark:to-transparent"></div>
                    
                    <!-- Category badge -->
                    <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/85 dark:bg-[#050510]/70" style="font-family: var(--pf-font-heading); color: ${a.categoryColor}; border: 1px solid ${a.categoryColor}40;">
                        ${a.category.toUpperCase()}
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
                            <h3 class="mb-0.5 text-[#0f0a2e] dark:text-[#f0f0ff] font-semibold" style="font-family: var(--pf-font-heading); font-size: 0.9rem;">${a.title}</h3>
                            <p class="text-xs" style="font-family: var(--pf-font-body); color: ${a.categoryColor};">${a.subtitle}</p>
                        </div>
                        <div class="mt-1 transform group-hover:rotate-45 transition-transform duration-200">
                             <i data-lucide="arrow-up-right" class="w-4 h-4 text-[#1e1b4b]/30 dark:text-[#f0f0ff]/30"></i>
                        </div>
                    </div>
                    
                    <p class="text-sm mb-4 leading-relaxed text-[#1e1b4b]/55 dark:text-[#f0f0ff]/50 line-clamp-2" style="font-family: var(--pf-font-body);">
                        ${a.description}
                    </p>
                    
                    <div class="flex flex-wrap gap-1.5">
                        ${l}
                    </div>
                </div>
            </div>
            `}),t.innerHTML=i,c({icons:{ExternalLink:z,Github:u,Eye:H,ArrowUpRight:$}})}r(),o.forEach(n=>{n.addEventListener("click",e=>{const i=e.currentTarget,a=i.dataset.filter||"All";o.forEach(d=>{d.classList.remove("text-white"),d.classList.add("text-slate-800/50","dark:text-white/45");const s=d.querySelector(".active-indicator");s&&s.classList.add("hidden")}),i.classList.add("text-white"),i.classList.remove("text-slate-800/50","dark:text-white/45");const l=i.querySelector(".active-indicator");l&&l.classList.remove("hidden"),r(a)})})}const be=[{icon:"award",text:"3x Indie Game Award Winner"},{icon:"code-2",text:"Open Source Contributor"},{icon:"calendar",text:"5+ Years in Creative Tech"},{icon:"map-pin",text:"San Francisco, CA"}],fe=[{year:"2024",role:"Senior Creative Technologist",company:"Nexus Interactive",desc:"Lead multi-disciplinary projects bridging game development and data-driven experiences."},{year:"2022",role:"Lead UI/UX Designer",company:"Prism Studio",desc:"Designed and shipped design systems for 12+ enterprise products used by 2M+ users."},{year:"2020",role:"Data Scientist",company:"Quantum Analytics",desc:"Built ML models for predictive analytics, improving forecast accuracy by 38%."},{year:"2019",role:"Indie Game Developer",company:"Solo / Freelance",desc:"Released 4 commercially successful indie games on Steam with 500K+ combined downloads."}];function pe(){const t=document.getElementById("about-wrapper");if(!t)return;let o=!1;function r(){var a;const n=be.map(l=>`<div class="flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 reveal-on-scroll">
                 <i data-lucide="${l.icon}" class="text-[#6366f1] dark:text-[#a5b4fc] w-4 h-4"></i>
                 <span class="text-xs text-[#1e1b4b]/70 dark:text-[#f0f0ff]/65" style="font-family: var(--pf-font-body)">
                     ${l.text}
                 </span>
            </div>`).join(""),e=fe.map(l=>`<div class="flex gap-4 px-5 py-4 border-b border-indigo-500/10 dark:border-white/10 transition-colors reveal-on-scroll">
                <div class="shrink-0 text-xs pt-0.5 text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); min-width: 2.5rem; letter-spacing: 0.05em;">
                    ${l.year}
                </div>
                <div class="min-w-0">
                    <p class="text-sm text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading); font-size: 0.8rem; letter-spacing: 0.03em;">
                        ${l.role}
                    </p>
                    <p class="text-xs mb-1 text-[#6366f1] dark:text-indigo-300/70" style="font-family: var(--pf-font-body);">
                        ${l.company}
                    </p>
                    <p class="text-xs leading-relaxed text-[#1e1b4b]/50 dark:text-white/45" style="font-family: var(--pf-font-body);">
                        ${l.desc}
                    </p>
                </div>
            </div>`).join("");let i=`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div class="reveal-on-scroll">
                <div class="relative mb-8 inline-block">
                    <div class="relative w-64 h-64 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(79,70,229,0.1)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-indigo-500/20">
                        <img src="https://images.unsplash.com/photo-1752859951149-7d3fc700a7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdCUyMHRlY2h8ZW58MXx8fHwxNzc1NDE0NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080" class="w-full h-full object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-[#f0f4ff]/40 dark:from-[#050510]/60 to-transparent"></div>
                    </div>
                    
                    <div class="absolute -bottom-4 -right-4 px-4 py-2.5 rounded-xl bg-white/95 dark:bg-[#0c0c1c]/90 border border-indigo-500/20 shadow-xl backdrop-blur-md animate-bounce" style="animation-duration: 3s">
                         <div class="flex items-center gap-2">
                             <span class="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_#4ade80]"></span>
                             <span class="text-xs text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); font-size: 0.65rem; letter-spacing: 0.1em;">OPEN TO WORK</span>
                         </div>
                    </div>
                </div>

                <div class="grid grid-cols-2 gap-3 mb-6">
                    ${n}
                </div>

                <button class="flex items-center gap-2 px-6 py-3 rounded-xl text-sm text-white transition-all transform hover:scale-105" style="font-family: var(--pf-font-body); background: linear-gradient(135deg, #6366f1, #a855f7); box-shadow: 0 4px 20px rgba(99,102,241,0.3);">
                    <i data-lucide="download" class="w-4 h-4"></i> Download Resume
                </button>
            </div>

            <div class="reveal-on-scroll delay-100">
                <p class="mb-5 leading-relaxed text-[1rem] text-[#1e1b4b]/75 dark:text-white/70" style="font-family: var(--pf-font-body)">
                    I'm <strong class="text-[#0f0a2e] dark:text-[#f0f0ff]">Alex Chen</strong>, a multi-disciplinary creative technologist who lives at the intersection of code, design, and data. I believe great products are born when these disciplines deeply inform each other.
                </p>
                
                <div id="bio-expanded" class="overflow-hidden transition-all duration-500" style="height: ${o?"auto":"0px"}; opacity: ${o?"1":"0"}">
                    <p class="mb-5 leading-relaxed text-[1rem] text-[#1e1b4b]/75 dark:text-white/70" style="font-family: var(--pf-font-body);">
                        My journey started with a childhood obsession with video games that evolved into a career crafting them. Along the way, I discovered a love for visual storytelling through design, and an addiction to uncovering hidden patterns through data science.
                    </p>
                    <p class="leading-relaxed text-[1rem] text-[#1e1b4b]/75 dark:text-white/70" style="font-family: var(--pf-font-body);">
                        Today, I channel all three disciplines into building experiences that are beautiful, intelligent, and deeply engaging — whether that's a game world, a brand system, or a predictive dashboard.
                    </p>
                </div>

                <button id="bio-toggle" class="flex items-center gap-1.5 text-sm mb-8 transition-all text-[#6366f1] dark:text-[#a5b4fc] p-0" style="font-family: var(--pf-font-heading); font-size: 0.75rem; letter-spacing: 0.1em; background:none;">
                    <span>${o?"READ LESS":"READ MORE"}</span>
                    <i data-lucide="chevron-down" class="w-4 h-4 transform transition-transform ${o?"rotate-180":""}"></i>
                </button>

                <!-- Timeline -->
                <div class="rounded-2xl overflow-hidden bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 mt-8">
                     <div class="px-5 py-3 border-b border-indigo-500/10 dark:border-white/10">
                          <span class="text-xs section-label text-[#6366f1] dark:text-[#a5b4fc]">CAREER TIMELINE</span>
                     </div>
                     <div>
                     ${e}
                     </div>
                </div>
            </div>
        </div>
        `;t.innerHTML=i,c({icons:{Award:oe,Code2:ne,Calendar:ie,MapPin:y,Download:le,ChevronDown:G}}),(a=document.getElementById("bio-toggle"))==null||a.addEventListener("click",()=>{o=!o,r()})}r()}const he=[{name:"Unity",emoji:"⚙️",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Unreal",emoji:"🎮",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"C#",emoji:"💻",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"C++",emoji:"⚡",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Blender",emoji:"🎨",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"GLSL",emoji:"✨",category:"Game Dev",color:"#a855f7",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(168,85,247,0.12)"},{name:"Figma",emoji:"🖌️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Photoshop",emoji:"🖼️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Illustrator",emoji:"✏️",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"After Effects",emoji:"🎬",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Spline",emoji:"🔮",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"ProtoPie",emoji:"📱",category:"Design",color:"#ec4899",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(236,72,153,0.12)"},{name:"Python",emoji:"🐍",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"TensorFlow",emoji:"🧠",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"PyTorch",emoji:"🔥",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Pandas",emoji:"🐼",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Jupyter",emoji:"📓",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"D3.js",emoji:"📊",category:"Data",color:"#06b6d4",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(6,182,212,0.12)"},{name:"Vanilla JS",emoji:"⚡",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"TypeScript",emoji:"🔷",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Tailwind CSS",emoji:"🎨",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Node.js",emoji:"🟢",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Git",emoji:"📦",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"},{name:"Vite",emoji:"⚡",category:"General",color:"#6366f1",bgColorLight:"rgba(255,255,255,0.8)",bgColorDark:"rgba(99,102,241,0.12)"}],me=[{key:"Game Dev",label:"Game Development",color:"#a855f7",gradient:"linear-gradient(135deg, #7c3aed, #a855f7)"},{key:"Design",label:"Design & Visual",color:"#ec4899",gradient:"linear-gradient(135deg, #db2777, #ec4899)"},{key:"Data",label:"Data & ML",color:"#06b6d4",gradient:"linear-gradient(135deg, #0891b2, #06b6d4)"},{key:"General",label:"Development",color:"#6366f1",gradient:"linear-gradient(135deg, #4f46e5, #6366f1)"}];function xe(){const t=document.getElementById("tools-wrapper");if(!t)return;let o="";me.forEach(r=>{const n=he.filter(e=>e.category===r.key);o+=`
        <div class="reveal-on-scroll">
            <div class="flex items-center gap-3 mb-5">
                <div class="w-6 h-6 rounded-lg" style="background: ${r.gradient}; box-shadow: 0 4px 12px ${r.color}40;"></div>
                <span class="text-sm font-bold" style="font-family: var(--pf-font-heading); font-size: 0.75rem; letter-spacing: 0.12em; color: ${r.color};">${r.label.toUpperCase()}</span>
                <div class="flex-1 h-px bg-gradient-to-r from-[${r.color}30] to-transparent"></div>
            </div>
            <div class="flex flex-wrap gap-2.5 mb-10">
                ${n.map(e=>`
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
    `,t.innerHTML=o,c({icons:{Sparkles:v}})}function ue(){const t=document.getElementById("contact-wrapper");if(!t)return;let o=!1,r=!1;function n(){var a,l;let i=`
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <!-- Left side -->
          <div class="reveal-on-scroll">
            <h3 class="text-2xl font-bold mb-4 text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading);">
              Let's <span class="gradient-text text-transparent bg-clip-text">Collaborate</span>
            </h3>
            <p class="mb-10 text-sm leading-relaxed text-[#1e1b4b]/60 dark:text-white/50" style="font-family: var(--pf-font-body);">
              Currently available for freelance projects and open to new opportunities. Let's create something extraordinary together.
            </p>

            <div class="space-y-6 mb-12">
              <div class="flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
                  <i data-lucide="mail" class="w-5 h-5 text-indigo-500 dark:text-indigo-400"></i>
                </div>
                <div>
                  <p class="text-xs tracking-widest text-[#1e1b4b]/50 dark:text-white/40 mb-1" style="font-family: var(--pf-font-heading);">EMAIL</p>
                  <a href="mailto:hello@alexchen.dev" class="text-sm font-medium transition-colors text-[#0f0a2e] hover:text-indigo-600 dark:text-white/90 dark:hover:text-indigo-400" style="font-family: var(--pf-font-body);">hello@alexchen.dev</a>
                </div>
              </div>

              <div class="flex items-center gap-4 group">
                <div class="w-12 h-12 rounded-xl flex items-center justify-center transition-all bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-500/10 group-hover:border-indigo-500/30">
                  <i data-lucide="map-pin" class="w-5 h-5 text-indigo-500 dark:text-indigo-400"></i>
                </div>
                <div>
                  <p class="text-xs tracking-widest text-[#1e1b4b]/50 dark:text-white/40 mb-1" style="font-family: var(--pf-font-heading);">LOCATION</p>
                  <p class="text-sm font-medium text-[#0f0a2e] dark:text-white/90" style="font-family: var(--pf-font-body);">San Francisco, CA</p>
                </div>
              </div>
            </div>

            <!-- Socials -->
            <div>
              <p class="text-xs tracking-widest mb-4 text-[#1e1b4b]/50 dark:text-white/40" style="font-family: var(--pf-font-heading);">CONNECT</p>
              <div class="flex gap-3">
                <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 text-[#1e1b4b]/70 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
                  <i data-lucide="github" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 text-[#1e1b4b]/70 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
                  <i data-lucide="twitter" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 text-[#1e1b4b]/70 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
                  <i data-lucide="linkedin" class="w-4 h-4"></i>
                </a>
                <a href="#" class="w-10 h-10 rounded-lg flex items-center justify-center transition-all hover:-translate-y-1 bg-white/70 dark:bg-white/5 border border-indigo-500/10 dark:border-white/10 text-[#1e1b4b]/70 dark:text-white/60 hover:text-indigo-600 dark:hover:text-indigo-400 hover:border-indigo-500/30 dark:hover:border-indigo-400/30">
                  <i data-lucide="globe" class="w-4 h-4"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Right side Form -->
          <div class="reveal-on-scroll delay-100 relative">
            <!-- decorative elements -->
            <div class="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl pointer-events-none opacity-50 dark:opacity-20 bg-indigo-500/30 dark:bg-indigo-500/40"></div>
            
            <div class="p-8 rounded-3xl relative backdrop-blur-xl bg-white/60 border border-white/50 shadow-2xl dark:bg-[#12122a]/60 dark:border-white/5 dark:shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
               
               ${r?`
                 <div class="absolute inset-0 z-10 flex flex-col items-center justify-center rounded-3xl backdrop-blur-md bg-white/90 dark:bg-[#0c0c1c]/90">
                    <div class="rounded-full flex items-center justify-center mb-4 bg-green-50 dark:bg-green-500/20 text-green-500">
                        <i data-lucide="check-circle" class="w-12 h-12"></i>
                    </div>
                    <h3 class="text-xl font-bold mb-2 text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading);">Message Sent!</h3>
                    <p class="text-sm text-center max-w-[250px] mb-6 text-[#1e1b4b]/60 dark:text-white/50" style="font-family: var(--pf-font-body);">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                    <button id="send-another-btn" class="px-6 py-2.5 rounded-xl text-sm transition-all bg-indigo-50 dark:bg-white/5 hover:bg-indigo-100 dark:hover:bg-white/10 text-indigo-600 dark:text-white/80" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em;">
                        SEND ANOTHER
                    </button>
                 </div>
               `:""}
            
               <form id="contact-form" class="space-y-5 relative z-0">
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                          <label class="block text-xs mb-2 text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em;">YOUR NAME</label>
                          <input type="text" required class="w-full px-4 py-3.5 rounded-xl text-sm transition-all focus:ring-2 focus:ring-indigo-500/50 bg-white/50 border border-indigo-100 text-[#0f0a2e] focus:bg-white dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:bg-black/40" style="font-family: var(--pf-font-body);" placeholder="John Doe">
                      </div>
                      <div>
                          <label class="block text-xs mb-2 text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em;">EMAIL ADDRESS</label>
                          <input type="email" required class="w-full px-4 py-3.5 rounded-xl text-sm transition-all focus:ring-2 focus:ring-indigo-500/50 bg-white/50 border border-indigo-100 text-[#0f0a2e] focus:bg-white dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:bg-black/40" style="font-family: var(--pf-font-body);" placeholder="john@example.com">
                      </div>
                  </div>
                  <div>
                      <label class="block text-xs mb-2 mt-4 text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em;">PROJECT TYPE</label>
                      <select class="w-full px-4 py-3.5 rounded-xl text-sm transition-all focus:ring-2 focus:ring-indigo-500/50 outline-none appearance-none bg-white/50 border border-indigo-100 text-[#0f0a2e] focus:bg-white dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:bg-black/40 cursor-pointer" style="font-family: var(--pf-font-body);">
                          <option value="Game Development" class="text-black">Game Development</option>
                          <option value="UI/UX Design" class="text-black">UI/UX Design</option>
                          <option value="Data Science" class="text-black">Data Science</option>
                          <option value="Other" class="text-black">Other Inquiry</option>
                      </select>
                  </div>
                  <div>
                      <label class="block text-xs mb-2 mt-4 text-[#6366f1] dark:text-[#a5b4fc]" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em;">MESSAGE</label>
                      <textarea required rows="4" class="w-full px-4 py-3.5 rounded-xl text-sm resize-none transition-all focus:ring-2 focus:ring-indigo-500/50 bg-white/50 border border-indigo-100 text-[#0f0a2e] focus:bg-white dark:bg-black/20 dark:border-white/10 dark:text-white dark:focus:bg-black/40" style="font-family: var(--pf-font-body);" placeholder="Tell me about your project..."></textarea>
                  </div>
                  <button type="submit" ${o?"disabled":""} class="w-full py-4 mt-6 rounded-xl text-sm text-white flex items-center justify-center gap-2 group transition-all transform hover:scale-[1.02]" style="font-family: var(--pf-font-heading); letter-spacing: 0.1em; background: linear-gradient(135deg, #6366f1, #a855f7); box-shadow: 0 4px 20px rgba(99,102,241,0.3);">
                      ${o?`
            <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
            <span>Sending Message...</span>
        `:r?`
            <i data-lucide="check-circle" class="w-4 h-4"></i>
            <span>Message Sent!</span>
        `:`
            <span>Send Message</span>
            <i data-lucide="send" class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
        `}
                  </button>
               </form>
            </div>
          </div>
        </div>
        `;t.innerHTML=i,c({icons:{Mail:U,MapPin:y,Send:q,CheckCircle:T,Github:u,Twitter:V,Linkedin:R,Globe:P,MessageSquare:_}}),(a=document.getElementById("contact-form"))==null||a.addEventListener("submit",d=>{d.preventDefault(),o=!0,n(),setTimeout(()=>{o=!1,r=!0,n()},1500)}),(l=document.getElementById("send-another-btn"))==null||l.addEventListener("click",()=>{o=!1,r=!1,n()})}n()}c({icons:{Sun:W,Moon:X,Menu:O,X:w,Zap:se,Github:u,Twitter:V,Linkedin:R,Globe:P,Mail:U,MapPin:y,MessageSquare:_,CheckCircle:T,Send:q,Plus:J,Gamepad2:B,Palette:F,BarChart3:I,ChevronRight:N,ArrowRight:re,ExternalLink:z,ChevronDown:G,Sparkles:v,Play:de,Eye:H,ArrowUpRight:$}});const m=document.getElementById("theme-toggle"),M=document.documentElement;let p=!0;function Y(){p?M.classList.add("dark"):M.classList.remove("dark");const t=document.getElementById("theme-icon");t&&(t.innerHTML=p?'<i data-lucide="sun" class="w-4 h-4"></i>':'<i data-lucide="moon" class="w-4 h-4"></i>',c({icons:{Sun:W,Moon:X}}))}document.addEventListener("DOMContentLoaded",()=>{ce(),ge(),pe(),xe(),ue()});Y();m==null||m.addEventListener("click",()=>{p=!p,Y()});const g=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.scrollY>20?g==null||g.classList.add("scrolled"):g==null||g.classList.remove("scrolled")});const f=document.getElementById("mobile-menu-btn"),b=document.getElementById("mobile-menu");f==null||f.addEventListener("click",()=>{b==null||b.classList.toggle("hidden");const t=b==null?void 0:b.classList.contains("hidden");f.innerHTML=t?'<i data-lucide="menu" class="w-4 h-4"></i>':'<i data-lucide="x" class="w-4 h-4"></i>',c({icons:{Menu:O,X:w}})});const ye={rootMargin:"0px",threshold:.15},ve=new IntersectionObserver((t,o)=>{t.forEach(r=>{r.isIntersecting&&(r.target.classList.add("animate-in"),o.unobserve(r.target))})},ye);document.querySelectorAll(".reveal-on-scroll").forEach(t=>{ve.observe(t)});const E=["Game Developer","Graphic Designer","Data Scientist"];let x=0;const j=document.getElementById("hero-role");j&&setInterval(()=>{x=(x+1)%E.length,j.textContent=E[x]},2800);
