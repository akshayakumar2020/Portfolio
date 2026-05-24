import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 py-9 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-y-4 text-sm text-slate-500">
        <div>© {new Date().getFullYear()} Akshaya Kumar. Built with React & Tailwind.</div>
        <div className="flex gap-6">
          <a href="https://github.com/akshayakumar" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/akshayakumar" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">LinkedIn</a>
          <a href="mailto:akshaya.kumar@email.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">Email</a>
        </div>
        <div className="text-xs">Crafted with ❤️ in Kanpur</div>
      </div>
    </footer>
  );
};

export default Footer;
