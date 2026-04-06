import { createIcons, Plus, ChevronRight, Gamepad2, Palette, BarChart3, Sparkles, X } from 'lucide';

const defaultSkills = [
  {
    id: "game",
    title: "Game Developer",
    description: "Building immersive 3D worlds and interactive experiences with deep focus on gameplay mechanics, physics simulation, and real-time rendering.",
    tags: ["Unity", "Unreal Engine", "C#", "GLSL", "Blender"],
    iconName: "gamepad-2",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
    glowColor: "rgba(168,85,247,0.35)",
    cardClass: "skill-card-game",
    accentColor: "#a855f7",
    bgGradientLight: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
    bgGradientDark: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.08))",
  },
  {
    id: "design",
    title: "Graphic Designer",
    description: "Creating visually striking brand identities, motion graphics, and UI/UX systems that blend aesthetics with intuitive user experiences.",
    tags: ["Figma", "Photoshop", "Illustrator", "After Effects", "Spline"],
    iconName: "palette",
    gradient: "linear-gradient(135deg, #db2777, #ec4899, #f472b6)",
    glowColor: "rgba(236,72,153,0.35)",
    cardClass: "skill-card-design",
    accentColor: "#ec4899",
    bgGradientLight: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
    bgGradientDark: "linear-gradient(135deg, rgba(219,39,119,0.15), rgba(236,72,153,0.08))",
  },
  {
    id: "data",
    title: "Data Scientist",
    description: "Transforming complex datasets into actionable insights through machine learning models, statistical analysis, and interactive visualizations.",
    tags: ["Python", "TensorFlow", "PyTorch", "Pandas", "Jupyter"],
    iconName: "bar-chart-3",
    gradient: "linear-gradient(135deg, #0891b2, #06b6d4, #22d3ee)",
    glowColor: "rgba(6,182,212,0.35)",
    cardClass: "skill-card-data",
    accentColor: "#06b6d4",
    bgGradientLight: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
    bgGradientDark: "linear-gradient(135deg, rgba(8,145,178,0.15), rgba(6,182,212,0.08))",
  }
];

let skills = [...defaultSkills];

export function initSkills() {
    const grid = document.getElementById('skills-grid');
    if (!grid) return;

    function renderSkills() {
        let html = '';
        skills.forEach(skill => {
            const tagHTML = skill.tags.map(tag => 
                `<span class="px-3 py-1 rounded-full text-xs" style="
                    font-family: var(--pf-font-body);
                    color: ${skill.accentColor};
                    background: ${skill.accentColor}18;
                    border: 1px solid ${skill.accentColor}35;
                ">${tag}</span>`
            ).join('');

            html += `
            <div class="relative rounded-2xl p-6 transition-all duration-400 overflow-hidden ${skill.cardClass} group transform hover:-translate-y-2 hover:scale-[1.01]"
                 style="
                    background: var(--bg-grad, ${skill.bgGradientLight});
                    backdrop-filter: blur(20px);
                    border: 1px solid ${skill.accentColor}25;
                    box-shadow: 0 4px 24px rgba(0,0,0,0.1);
                 ">
                <style>
                    .dark .${skill.cardClass} { --bg-grad: ${skill.bgGradientDark} !important; }
                </style>
                <div class="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl" style="background: ${skill.gradient};"></div>
                <div class="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl pointer-events-none" style="background: radial-gradient(circle, ${skill.glowColor} 0%, transparent 70%); opacity: 0.5;"></div>
                
                <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative" style="background: ${skill.gradient}; box-shadow: 0 8px 24px ${skill.glowColor};">
                    <i data-lucide="${skill.iconName}" class="text-white"></i>
                </div>
                
                <h3 class="mb-3 text-[#0f0a2e] dark:text-[#f0f0ff]" style="font-family: var(--pf-font-heading); font-size: 1rem; font-weight: 600; letter-spacing: 0.05em;">${skill.title}</h3>
                <p class="mb-5 text-sm leading-relaxed text-[#1e1b4b]/60 dark:text-[#f0f0ff]/55" style="font-family: var(--pf-font-body);">${skill.description}</p>
                
                <div class="flex flex-wrap gap-2">${tagHTML}</div>
                
                <div class="flex items-center gap-1 mt-5 text-xs" style="font-family: var(--pf-font-heading); color: ${skill.accentColor}; letter-spacing: 0.1em;">
                    <span>VIEW WORK</span>
                    <i data-lucide="chevron-right" class="w-3 h-3"></i>
                </div>
            </div>
            `;
        });

        // Add Skill Card Button
        /* html += `
        <div id="add-skill-btn" class="rounded-2xl p-6 cursor-pointer transition-all duration-400 flex flex-col items-center justify-center gap-4 min-h-[16rem] group skill-card-add bg-white/50 dark:bg-white/5 border-[1.5px] border-dashed border-indigo-500/20 dark:border-indigo-500/25 backdrop-blur-xl transform hover:-translate-y-2 hover:scale-[1.01]">
            <div class="w-14 h-14 rounded-xl flex items-center justify-center group-hover:shadow-lg transition-all bg-indigo-500/10 dark:bg-indigo-500/15 border border-indigo-500/25 dark:border-indigo-500/30 transform group-hover:rotate-90 group-hover:scale-110 duration-300">
                <i data-lucide="plus" class="w-6 h-6 text-[#6366f1] dark:text-[#a5b4fc]"></i>
            </div>
            <div class="text-center">
                <p class="text-sm mb-1 text-[#6366f1] dark:text-indigo-300/80" style="font-family: var(--pf-font-heading); font-size: 0.85rem; letter-spacing: 0.08em;">ADD SKILL</p>
                <p class="text-xs text-[#1e1b4b]/40 dark:text-white/35" style="font-family: var(--pf-font-body);">Expand your expertise</p>
            </div>
        </div>
        `; */

        (grid as HTMLElement).innerHTML = html;
        createIcons({
            icons: { Plus, ChevronRight, Gamepad2, Palette, BarChart3, Sparkles, X }
        });

        document.getElementById('add-skill-btn')?.addEventListener('click', () => {
             document.getElementById('add-skill-modal')?.classList.remove('hidden');
        });
    }

    renderSkills();

    // Modal close
    document.getElementById('close-modal-btn')?.addEventListener('click', () => {
        document.getElementById('add-skill-modal')?.classList.add('hidden');
    });

    document.getElementById('add-new-skill-form')?.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(e.target as HTMLFormElement);
        const title = fd.get('title') as string;
        const desc = fd.get('description') as string;
        const tags = fd.get('tags') as string;

        skills.push({
            ...defaultSkills[0], // Copy GameDev style as generic
            id: Date.now().toString(),
            title: title,
            description: desc || "A new skill area.",
            tags: tags.split(',').map(t => t.trim()),
            iconName: "sparkles", // Default generic icon
            cardClass: "skill-card-add",
            gradient: "linear-gradient(135deg, #c2410c, #ea580c, #fb923c)",
            glowColor: "rgba(234,88,12,0.35)",
            accentColor: "#ea580c",
            bgGradientLight: "linear-gradient(135deg, rgba(255,255,255,0.85), rgba(255,255,255,0.65))",
            bgGradientDark: "linear-gradient(135deg, rgba(194,65,12,0.15), rgba(234,88,12,0.08))"
        });

        renderSkills();
        document.getElementById('add-skill-modal')?.classList.add('hidden');
        (e.target as HTMLFormElement).reset();
    });
}
