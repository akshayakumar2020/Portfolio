import React from 'react';
import { Mail } from 'lucide-react';

const GithubIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.35 1.11 2.92.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.04 1.03-2.76-.1-.26-.45-1.31.1-2.72 0 0 .84-.28 2.75 1.05.8-.23 1.65-.34 2.5-.34.85 0 1.7.11 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.76 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.48-.01 2.82 0 .27.18.59.69.49A10.08 10.08 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden="true">
    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.28 8.02h4.44V23H.28V8.02Zm7.33 0h4.26v2.05h.06c.59-1.12 2.04-2.3 4.2-2.3 4.49 0 5.32 2.96 5.32 6.8V23h-4.44v-7.47c0-1.78-.03-4.07-2.48-4.07-2.49 0-2.87 1.94-2.87 3.94V23H7.61V8.02Z" transform="translate(1 0)" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const Footer = () => {
  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 py-9 bg-white dark:bg-[#080b12]">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-4 text-base text-zinc-500">
        <div>(c) {new Date().getFullYear()} Akshaya Kumar. Built with React & Tailwind.</div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/akshayakumar2020" target="_blank" rel="noreferrer" aria-label="GitHub" title="GitHub" className="p-2 rounded-full hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950/35 dark:hover:text-cyan-300 transition-colors">
            <GithubIcon />
          </a>
          <a href="https://linkedin.com/in/akshayakumar2020" target="_blank" rel="noreferrer" aria-label="LinkedIn" title="LinkedIn" className="p-2 rounded-full hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950/35 dark:hover:text-cyan-300 transition-colors">
            <LinkedinIcon />
          </a>
          <a href="https://www.instagram.com/akshayakumar2020?igsh=MXZmeHNicnluanB0cA==" target="_blank" rel="noreferrer" aria-label="Instagram" title="Instagram" className="p-2 rounded-full hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950/35 dark:hover:text-cyan-300 transition-colors">
            <InstagramIcon />
          </a>
          <a href="mailto:akshayakumarbth106@gmail.com" aria-label="Email" title="Email" className="p-2 rounded-full hover:bg-cyan-50 hover:text-cyan-700 dark:hover:bg-cyan-950/35 dark:hover:text-cyan-300 transition-colors">
            <Mail size={24} />
          </a>
        </div>
        <div className="text-sm">Crafted with ❤️ in Kanpur</div>
      </div>
    </footer>
  );
};

export default Footer;
