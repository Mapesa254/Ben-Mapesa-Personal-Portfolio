import { createIcons, Award, Code2, Calendar, MapPin, Download, ChevronDown } from 'lucide';

/**
 * About Section — Interactivity only.
 *
 * Static structure (photo, highlights, bio text, career timeline)
 * is written directly in index.html.
 *
 * This module handles:
 *  - Bio expand / collapse toggle (#bio-toggle / #bio-expanded)
 *  - Lucide icon replacement for any icons in the About section
 */
export function initAbout() {
    const bioToggle = document.getElementById('bio-toggle');
    const bioExpanded = document.getElementById('bio-expanded');
    const toggleLabel = bioToggle?.querySelector('span');
    const toggleIcon = bioToggle?.querySelector('i[data-lucide="chevron-down"]');

    if (!bioToggle || !bioExpanded) return;

    let expanded = false;

    // Render Lucide icons that are already present in the HTML
    createIcons({
        icons: { Award, Code2, Calendar, MapPin, Download, ChevronDown }
    });

    // Trigger scroll-reveal for any about content that needs it
    if ((window as any).observeElements) (window as any).observeElements();

    bioToggle.addEventListener('click', () => {
        expanded = !expanded;

        if (expanded) {
            bioExpanded.style.height = bioExpanded.scrollHeight + 'px';
            bioExpanded.style.opacity = '1';
            if (toggleLabel) toggleLabel.textContent = 'READ LESS';
            toggleIcon?.classList.add('rotate-180');
        } else {
            bioExpanded.style.height = '0px';
            bioExpanded.style.opacity = '0';
            if (toggleLabel) toggleLabel.textContent = 'READ MORE';
            toggleIcon?.classList.remove('rotate-180');
        }
    });
}
