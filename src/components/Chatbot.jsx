import React from 'react';
import { Bot, X, Send } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

const Chatbot = ({ isChatOpen, setIsChatOpen, chatMessages, chatInput, setChatInput, isTyping, handleChatSubmit, handleChatQuickPrompt }) => {
  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-8 right-8 z-[60]">
        <button 
          type="button"
          onClick={() => setIsChatOpen(!isChatOpen)}
          aria-label={isChatOpen ? "Close chat assistant" : "Open chat assistant"}
          className="floating-chat w-16 h-16 bg-gradient-to-tr from-cyan-700 via-teal-600 to-emerald-500 flex items-center justify-center rounded-full shadow-[0_0_20px_rgba(8,145,178,0.35)] text-white hover:scale-110 transition-transform duration-300"
        >
          <Bot size={29} />
        </button>
      </div>

      {/* Chatbot Window */}
      <AnimatePresence>
        {isChatOpen && (
          <div className="fixed bottom-28 right-8 z-[70] w-[380px] max-w-[92vw] shadow-2xl rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-700">
            <div className="chat-window bg-white dark:bg-zinc-900 flex flex-col h-[480px]">
              {/* Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-zinc-950 to-teal-950 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot size={19} />
                  </div>
                  <div>
                    <div className="font-semibold tracking-tight">Akshaya's AI Assistant</div>
                    <div className="text-xs text-white/60">Ask me anything!</div>
                  </div>
                </div>
                <button type="button" onClick={() => setIsChatOpen(false)} aria-label="Close chat assistant" className="p-2 hover:bg-white/10 rounded-full"><X size={18} /></button>
              </div>

              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto px-5 py-6 space-y-4 bg-zinc-50 dark:bg-[#080b12] text-sm">
                {chatMessages.map((msg, idx) => (
                  <div key={`${msg.type}-${idx}-${msg.text.slice(0, 20)}`} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] px-5 py-3.5 rounded-3xl text-[14.5px] leading-snug ${msg.type === 'user' ? 'message-user rounded-br-none' : 'message-bot rounded-bl-none'}`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex items-center gap-2 px-5 py-2 text-slate-400 text-xs">
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '100ms' }}></div>
                      <div className="w-1.5 h-1.5 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '200ms' }}></div>
                    </div>
                    <span>Thinking...</span>
                  </div>
                )}
              </div>

              {/* Quick Suggestions */}
              <div className="px-5 pt-3 pb-1 bg-zinc-100 dark:bg-zinc-900">
                <div className="text-[10px] uppercase tracking-widest mb-2 px-1 text-slate-400">Quick Questions</div>
                <div className="flex flex-wrap gap-2">
                  {["Tell me about Akshaya", "Show projects", "Skills", "Resume", "Contact"].map(q => (
                    <button 
                      type="button"
                      key={q} 
                      onClick={() => handleChatQuickPrompt(q)} 
                      className="px-4 py-1.5 text-xs bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-cyan-50 dark:hover:bg-cyan-950/35 rounded-2xl transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Input */}
              <form onSubmit={handleChatSubmit} className="border-t border-zinc-200 dark:border-zinc-800 p-3 flex bg-white dark:bg-zinc-900">
                <input 
                  type="text" 
                  value={chatInput} 
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Ask me anything about Akshaya..."
                  aria-label="Chat message"
                  className="flex-1 px-5 py-3 text-sm bg-transparent focus:outline-none placeholder:text-slate-400"
                />
                <button type="submit" disabled={!chatInput.trim()} aria-label="Send chat message" className="px-4 text-cyan-700 dark:text-cyan-300 disabled:text-slate-400 transition-colors">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
