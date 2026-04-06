import { createIcons, ExternalLink, Github, Eye, ArrowUpRight } from 'lucide';

const projects = [
  {
    id: 1,
    title: "Eclipse: Rise of Shadows",
    subtitle: "3D Action RPG",
    description: "A fully immersive open-world RPG built in Unity with custom GLSL shaders, dynamic lighting, and procedural terrain generation.",
    image: "https://images.unsplash.com/photo-1656848922730-d29aad606524?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYW1lJTIwZGV2ZWxvcG1lbnQlMjAzRCUyMHJlbmRlciUyMGRhcmt8ZW58MXx8fHwxNzc1NDE0NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Unity", "C#", "GLSL", "Blender"],
    category: "Game Dev",
    categoryColor: "#a855f7"
  },
  {
    id: 2,
    title: "Neural Forecast Dashboard",
    subtitle: "ML Analytics Platform",
    description: "Real-time stock prediction dashboard powered by LSTM networks. Features interactive charts, backtesting engine, and portfolio optimizer.",
    image: "https://images.unsplash.com/photo-1678845530864-18a666ca9762?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NzUzNTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Python", "TensorFlow", "Vanilla JS", "D3.js"],
    category: "Data Science",
    categoryColor: "#06b6d4"
  },
  {
    id: 3,
    title: "PixelFlow UI Kit",
    subtitle: "Design System",
    description: "A comprehensive, dark-mode-first design system with 200+ components, built for modern SaaS applications and creative portfolios.",
    image: "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBVSSUyMGRlc2lnbiUyMGRhcmslMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzc1NDE0NzEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Figma", "Tailwind", "TypeScript"],
    category: "Design",
    categoryColor: "#ec4899"
  }
];

export function initProjects() {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.project-filter-btn');
    if (!grid) return;

    function renderProjects(filter = "All") {
        const filtered = filter === "All" ? projects : projects.filter(p => p.category === filter);
        
        let html = '';
        filtered.forEach(project => {
            const tagHTML = project.tags.map(tag => 
                `<span class="px-2.5 py-1 rounded-md text-xs tag-pill-light dark:tag-pill-dark" style="font-family: var(--pf-font-body)">
                    ${tag}
                </span>`
            ).join('');

            html += `
            <div class="project-card rounded-2xl overflow-hidden cursor-pointer group bg-white/80 dark:bg-white/5 border border-white/90 dark:border-white/5 shadow-[0_4px_24px_rgba(79,70,229,0.07)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-2">
                
                <div class="relative h-52 overflow-hidden">
                    <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover project-card-img" />
                    <!-- Gradient overlay -->
                    <!-- <div class="absolute inset-0 bg-gradient-to-t from-white/95 from-[10%] via-white/0 to-transparent dark:from-[#050510]/95 dark:via-black/0 dark:to-transparent"></div> -->
                    
                    <!-- Category badge -->
                    <div class="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md bg-white/85 dark:bg-[#050510]/70" style="font-family: var(--pf-font-heading); color: ${project.categoryColor}; border: 1px solid ${project.categoryColor}40;">
                        ${project.category.toUpperCase()}
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
                            <h3 class="mb-0.5 text-[#0f0a2e] dark:text-[#f0f0ff] font-semibold" style="font-family: var(--pf-font-heading); font-size: 0.9rem;">${project.title}</h3>
                            <p class="text-xs" style="font-family: var(--pf-font-body); color: ${project.categoryColor};">${project.subtitle}</p>
                        </div>
                        <div class="mt-1 transform group-hover:rotate-45 transition-transform duration-200">
                             <i data-lucide="arrow-up-right" class="w-4 h-4 text-[#1e1b4b]/30 dark:text-[#f0f0ff]/30"></i>
                        </div>
                    </div>
                    
                    <p class="text-sm mb-4 leading-relaxed text-[#1e1b4b]/55 dark:text-[#f0f0ff]/50 line-clamp-2" style="font-family: var(--pf-font-body);">
                        ${project.description}
                    </p>
                    
                    <div class="flex flex-wrap gap-1.5">
                        ${tagHTML}
                    </div>
                </div>
            </div>
            `;
        });

        (grid as HTMLElement).innerHTML = html;
        createIcons({
            icons: { ExternalLink, Github, Eye, ArrowUpRight }
        });
    }

    renderProjects();

    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const target = e.currentTarget as HTMLButtonElement;
            const filter = target.dataset.filter || "All";
            
            // Update active state visual
            filterBtns.forEach(b => {
                b.classList.remove('text-white');
                b.classList.add('text-slate-800/50', 'dark:text-white/45');
                const indicator = b.querySelector('.active-indicator');
                if(indicator) indicator.classList.add('hidden');
            });

            target.classList.add('text-white');
            target.classList.remove('text-slate-800/50', 'dark:text-white/45');
            const indicator = target.querySelector('.active-indicator');
            if(indicator) indicator.classList.remove('hidden');

            renderProjects(filter);
        });
    });
}
