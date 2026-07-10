import React from 'react';
import { Mail, Link, GitBranch, Award, Send } from 'lucide-react';

const ContactSection = ({ formData, formErrors, isSubmitting, submitSuccess, handleFormChange, handleFormSubmit }) => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <div className="uppercase text-xs tracking-[3px] font-semibold text-cyan-700 dark:text-cyan-300 mb-4">LET'S CONNECT</div>
          <h2 className="text-6xl tracking-[-2.4px] font-semibold leading-none">Get in touch.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mt-7 pr-4">I'm currently looking for my first full-time opportunity as a Java Backend Developer. I'd love to hear from you!</p>
          
          <div className="mt-12 space-y-5">
            <a href="mailto:akshayakumarbth106@gmail.com" className="flex items-center gap-4 group hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30"><Mail size={20} /></div>
              <div>akshayakumarbth106@gmail.com</div>
            </a>
            <a href="https://linkedin.com/in/akshayakumar2020" target="_blank" rel="noreferrer" className="flex items-center gap-4 group hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30"><Link size={20} /></div>
              <div>linkedin.com/in/akshayakumar2020</div>
            </a>
            <a href="https://github.com/akshayakumar2020" target="_blank" rel="noreferrer" className="flex items-center gap-4 group hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors">
              <div className="p-3 rounded-2xl bg-cyan-50 dark:bg-cyan-950/30"><GitBranch size={20} /></div>
              <div>github.com/akshayakumar2020</div>
            </a>
          </div>
        </div>

        {/* Contact Form with Validation */}
        <div>
          <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl rounded-3xl p-10">
            {submitSuccess ? (
              <div className="text-center py-10">
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-5">
                  <Award className="text-emerald-600" size={32} />
                </div>
                <div className="font-semibold text-3xl">Thank you!</div>
                <p className="text-slate-500 mt-3 text-lg">Your email app should open with the message ready to send.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleFormChange}
                    placeholder="Your Name" 
                    aria-label="Your name"
                    aria-invalid={Boolean(formErrors.name)}
                    className="form-input w-full px-7 py-4 bg-zinc-50 dark:bg-[#080b12] border border-zinc-200 dark:border-zinc-700 rounded-2xl text-lg placeholder:text-slate-400" 
                  />
                  {formErrors.name && <p className="text-red-500 text-sm mt-1.5 ml-1">{formErrors.name}</p>}
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleFormChange}
                    placeholder="Your Email" 
                    aria-label="Your email"
                    aria-invalid={Boolean(formErrors.email)}
                    className="form-input w-full px-7 py-4 bg-zinc-50 dark:bg-[#080b12] border border-zinc-200 dark:border-zinc-700 rounded-2xl text-lg placeholder:text-slate-400" 
                  />
                  {formErrors.email && <p className="text-red-500 text-sm mt-1.5 ml-1">{formErrors.email}</p>}
                </div>
                <div>
                  <textarea 
                    name="message" 
                    value={formData.message} 
                    onChange={handleFormChange}
                    rows={6} 
                    placeholder="Tell me about your project or opportunity..." 
                    aria-label="Message"
                    aria-invalid={Boolean(formErrors.message)}
                    className="form-input w-full px-7 py-5 bg-zinc-50 dark:bg-[#080b12] border border-zinc-200 dark:border-zinc-700 rounded-3xl text-lg placeholder:text-slate-400 resize-y" 
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1.5 ml-1">{formErrors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-cyan-700 disabled:bg-cyan-400 hover:bg-cyan-800 active:scale-[0.985] rounded-2xl text-white font-semibold flex items-center justify-center gap-3 text-sm tracking-widest transition-all"
                >
                  {isSubmitting ? "SENDING MESSAGE..." : "SEND MESSAGE"} 
                  {!isSubmitting && <Send size={17} />}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
