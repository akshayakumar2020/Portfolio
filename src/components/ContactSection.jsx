import React from 'react';
import { Mail, Link, GitBranch, Award, Send } from 'lucide-react';

const ContactSection = ({ formData, formErrors, isSubmitting, submitSuccess, handleFormChange, handleFormSubmit }) => {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <div className="uppercase text-xs tracking-[3px] font-semibold text-blue-600 mb-4">LET'S CONNECT</div>
          <h2 className="text-6xl tracking-[-2.4px] font-semibold leading-none">Get in touch.</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mt-7 pr-4">I'm currently looking for my first full-time opportunity as a Java Backend Developer. I'd love to hear from you!</p>
          
          <div className="mt-12 space-y-5">
            <a href="mailto:akshaya.kumar@email.com" className="flex items-center gap-4 group hover:text-blue-600 transition-colors">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800"><Mail size={20} /></div>
              <div>akshaya.kumar@email.com</div>
            </a>
            <a href="https://linkedin.com/in/akshayakumar" target="_blank" className="flex items-center gap-4 group hover:text-blue-600 transition-colors">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800"><Link size={20} /></div>
              <div>linkedin.com/in/akshayakumar</div>
            </a>
            <a href="https://github.com/akshayakumar" target="_blank" className="flex items-center gap-4 group hover:text-blue-600 transition-colors">
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800"><GitBranch size={20} /></div>
              <div>github.com/akshayakumar</div>
            </a>
          </div>
        </div>

        {/* Contact Form with Validation */}
        <div>
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rounded-3xl p-10">
            {submitSuccess ? (
              <div className="text-center py-10">
                <div className="mx-auto w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center mb-5">
                  <Award className="text-emerald-600" size={32} />
                </div>
                <div className="font-semibold text-3xl">Thank you!</div>
                <p className="text-slate-500 mt-3 text-lg">Your message has been received. I'll get back to you soon.</p>
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
                    className="form-input w-full px-7 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl text-lg placeholder:text-slate-400" 
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
                    className="form-input w-full px-7 py-4 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-2xl text-lg placeholder:text-slate-400" 
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
                    className="form-input w-full px-7 py-5 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-3xl text-lg placeholder:text-slate-400 resize-y" 
                  />
                  {formErrors.message && <p className="text-red-500 text-sm mt-1.5 ml-1">{formErrors.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-blue-600 disabled:bg-blue-400 hover:bg-blue-700 active:scale-[0.985] rounded-2xl text-white font-semibold flex items-center justify-center gap-3 text-sm tracking-widest transition-all"
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
