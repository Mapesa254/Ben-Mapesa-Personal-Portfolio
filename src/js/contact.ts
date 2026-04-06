import { createIcons, Mail, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, Globe } from 'lucide';

/**
 * Contact Section — Interactivity only.
 *
 * Static structure (heading, info cards, social links, form fields)
 * is written directly in index.html.
 *
 * This module handles:
 *  - Contact form submission (#contact-form)
 *  - Showing / hiding the success overlay (#contact-success)
 *  - "Send Another" button (#send-another-btn)
 *  - Lucide icon replacement for any icons in the Contact section
 */
export function initContact() {
    const form = document.getElementById('contact-form') as HTMLFormElement | null;
    const successOverlay = document.getElementById('contact-success');
    const submitBtn = document.getElementById('contact-submit-btn');

    if (!form) return;

    // Render Lucide icons already present in the HTML
    createIcons({
        icons: { Mail, MapPin, Send, CheckCircle, Github, Twitter, Linkedin, Globe }
    });

    // Trigger scroll-reveal
    if ((window as any).observeElements) (window as any).observeElements();

    // --- Form submit ---
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Show sending state
        if (submitBtn) {
            submitBtn.setAttribute('disabled', 'true');
            submitBtn.innerHTML = `
                <div class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                <span>Sending Message...</span>
            `;
        }

        // Simulate async send
        setTimeout(() => {
            form.reset();

            // Show success overlay
            if (successOverlay) successOverlay.classList.remove('hidden');

            // Re-enable button (hidden behind overlay, but clean state)
            if (submitBtn) {
                submitBtn.removeAttribute('disabled');
                submitBtn.innerHTML = `
                    <span>Send Message</span>
                    <i data-lucide="send" class="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></i>
                `;
                createIcons({ icons: { Send } });
            }
        }, 1500);
    });

    // --- "Send Another" button inside success overlay ---
    document.getElementById('send-another-btn')?.addEventListener('click', () => {
        if (successOverlay) successOverlay.classList.add('hidden');
    });
}
