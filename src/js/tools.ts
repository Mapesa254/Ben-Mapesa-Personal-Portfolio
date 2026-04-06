import { createIcons, Sparkles } from 'lucide';

const tools = [
  // Game Dev
  { name: "Unity", emoji: "⚙️", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },
  { name: "Unreal", emoji: "🎮", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },
  { name: "C#", emoji: "💻", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },
  { name: "C++", emoji: "⚡", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },
  { name: "Blender", emoji: "🎨", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },
  { name: "GLSL", emoji: "✨", category: "Game Dev", color: "#a855f7", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(168,85,247,0.12)" },

  // Design
  { name: "Figma", emoji: "🖌️", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },
  { name: "Photoshop", emoji: "🖼️", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },
  { name: "Illustrator", emoji: "✏️", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },
  { name: "After Effects", emoji: "🎬", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },
  { name: "Spline", emoji: "🔮", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },
  { name: "ProtoPie", emoji: "📱", category: "Design", color: "#ec4899", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(236,72,153,0.12)" },

  // Data
  { name: "Python", emoji: "🐍", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },
  { name: "TensorFlow", emoji: "🧠", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },
  { name: "PyTorch", emoji: "🔥", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },
  { name: "Pandas", emoji: "🐼", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },
  { name: "Jupyter", emoji: "📓", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },
  { name: "D3.js", emoji: "📊", category: "Data", color: "#06b6d4", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(6,182,212,0.12)" },

  // General
  { name: "Vanilla JS", emoji: "⚡", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
  { name: "TypeScript", emoji: "🔷", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
  { name: "Tailwind CSS", emoji: "🎨", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
  { name: "Node.js", emoji: "🟢", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
  { name: "Git", emoji: "📦", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
  { name: "Vite", emoji: "⚡", category: "General", color: "#6366f1", bgColorLight: "rgba(255,255,255,0.8)", bgColorDark: "rgba(99,102,241,0.12)" },
];

const categoryConfig = [
  {
    key: "Game Dev",
    label: "Game Development",
    color: "#a855f7",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
  },
  {
    key: "Design",
    label: "Design & Visual",
    color: "#ec4899",
    gradient: "linear-gradient(135deg, #db2777, #ec4899)",
  },
  {
    key: "Data",
    label: "Data & ML",
    color: "#06b6d4",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4)",
  },
  {
    key: "General",
    label: "Development",
    color: "#6366f1",
    gradient: "linear-gradient(135deg, #4f46e5, #6366f1)",
  },
];

export function initTools() {
  const container = document.getElementById('tools-wrapper');
  if (!container) return;

  let html = '';
  categoryConfig.forEach((cat) => {
    const catTools = tools.filter(t => t.category === cat.key);

    html += `
        <div class="reveal-on-scroll">
            <div class="flex items-center gap-3 mb-5">
                <div class="w-6 h-6 rounded-lg" style="background: ${cat.gradient}; box-shadow: 0 4px 12px ${cat.color}40;"></div>
                <span class="text-sm font-bold" style="font-family: var(--pf-font-heading); font-size: 0.75rem; letter-spacing: 0.12em; color: ${cat.color};">${cat.label.toUpperCase()}</span>
                <div class="flex-1 h-px bg-gradient-to-r from-[${cat.color}30] to-transparent"></div>
            </div>
            <div class="flex flex-wrap gap-2.5 mb-10">
                ${catTools.map(tool => `
                    <div class="tool-badge flex items-center gap-2 px-4 py-2.5 rounded-xl cursor-default transition-all duration-300 transform hover:scale-[1.08] hover:-translate-y-1 shadow-[0_2px_8px_${tool.color}10] dark:shadow-none"
                         style="border: 1px solid ${tool.color}20; backdrop-filter: blur(10px);"
                         data-bg-light="${tool.bgColorLight}" data-bg-dark="${tool.bgColorDark}">
                         <style>
                              .tool-badge { background: ${tool.bgColorLight}; }
                              .dark .tool-badge { background: ${tool.bgColorDark} !important; border-color: ${tool.color}25; }
                         </style>
                         <span style="font-size: 1.1rem; line-height: 1;">${tool.emoji}</span>
                         <span class="text-sm whitespace-nowrap text-slate-800/80 dark:text-white/80" style="font-family: var(--pf-font-body)">
                              ${tool.name}
                         </span>
                    </div>
                `).join('')}
            </div>
        </div>
        `;
  });

  html += `
    <div class="reveal-on-scroll mt-14 p-6 rounded-2xl text-center bg-indigo-500/5 border border-indigo-500/10 dark:bg-indigo-500/10 dark:border-indigo-500/20">
         <p class="text-sm text-slate-800/55 dark:text-white/55 leading-relaxed" style="font-family: var(--pf-font-body)">
              Always learning. Currently exploring 
              <span class="text-[#6366f1] dark:text-[#a5b4fc]">WebGPU</span>, 
              <span class="text-[#a855f7] dark:text-[#f0abfc]">Stable Diffusion fine-tuning</span>, and 
              <span class="text-[#0891b2] dark:text-[#67e8f9]">LLM agent frameworks</span>.
         </p>
    </div>
    `;

  (container as HTMLElement).innerHTML = html;
  createIcons({
    icons: { Sparkles }
  });
  if ((window as any).observeElements) (window as any).observeElements();
}
