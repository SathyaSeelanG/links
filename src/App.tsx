import React, { useEffect } from 'react';
import { Github, Twitter, Linkedin, Mail, Globe, MessageSquare, ArrowUpRight } from 'lucide-react';
import { SiSpacemacs } from 'react-icons/si';

interface LinkItemProps {
  href: string;
  icon: React.ReactNode;
  text: string;
  delay: number;
}

const LinkItem = ({ href, icon, text, delay }: LinkItemProps) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex items-center w-full p-3.5 bg-white/5 rounded-lg border border-white/10 
               hover:bg-white/10 hover:border-white/20 hover:translate-x-1 transition-all duration-300 
               ease-out animate-fade-in backdrop-blur-sm relative overflow-hidden"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Hover gradient effect */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 opacity-0 
                    group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="flex items-center justify-between w-full relative">
      <div className="flex items-center space-x-4">
        <div className="p-2.5 bg-white/10 rounded-lg group-hover:bg-white/15 transition-all duration-300 
                      shadow-[0_2px_8px_rgba(255,255,255,0.05)] group-hover:shadow-[0_2px_12px_rgba(255,255,255,0.1)]">
          <span className="text-white/80 group-hover:text-white/90">{icon}</span>
        </div>
        <span className="text-white/80 font-medium text-lg group-hover:text-white/90 transition-all duration-300">
          {text}
        </span>
      </div>
      
      {/* Link arrow icon */}
      <div className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 
                    transition-all duration-300 text-white/70 group-hover:text-white/90">
        <ArrowUpRight size={20} className="group-hover:rotate-12 transition-transform duration-300" />
      </div>
    </div>
    
    {/* Bottom border gradient animation */}
    <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 
                    group-hover:w-full transition-all duration-500" />
  </a>
);

function App() {
  useEffect(() => {
    // Update the document title
    document.title = "Sathya Seelan | Full-Stack Developer & Blockchain Analyst";
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-gradient-to-br from-zinc-900 via-purple-950/30 to-zinc-900 p-4">
      <div className="max-w-2xl mx-auto pt-16 pb-8 px-4">
        {/* Background decorative elements */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse [animation-delay:1s]" />
        </div>

        <div className="flex flex-col items-center mb-12">
          <div className="relative mb-8 group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/50 to-indigo-500/50 rounded-full blur-xl opacity-50 
                          group-hover:opacity-70 transition-opacity duration-500" />
            <img
              src="/sathya_seelan.jpg"
              alt="Sathya Seelan"
              className="relative w-28 h-28 rounded-full border-2 border-white/20 shadow-xl object-cover 
                       group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-purple-200 to-white mb-3 
                         hover:scale-105 transition-transform duration-300 cursor-default">
            Sathya Seelan
          </h1>
          
          <div className="mb-8 hover:scale-105 transition-transform duration-300">
            <div className="px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
              <div className="flex items-center space-x-3 text-sm">
                <span className="text-white/70">Full-Stack Developer</span>
                <span className="text-purple-400/70 animate-pulse">•</span>
                <span className="text-white/70"> Chia Blockchain Analyst</span>
              </div>
            </div>
          </div>

          <div className="w-full space-y-2.5">
            <LinkItem
              href="https://sathyaseelan.in/"
              icon={<Globe strokeWidth={1.5} size={22} />}
              text="Portfolio Website"
              delay={300}
            />
            <LinkItem
              href="https://github.com/SathyaSeelanG"
              icon={<Github strokeWidth={1.5} size={22} />}
              text="GitHub"
              delay={400}
            />
            <LinkItem
              href="https://www.linkedin.com/in/sathya--seelan/"
              icon={<Linkedin strokeWidth={1.5} size={22} />}
              text="LinkedIn"
              delay={500}
            />
            <LinkItem
              href="https://x.com/SATHYA_SEELAN_G"
              icon={<Twitter strokeWidth={1.5} size={22} />}
              text="Twitter"
              delay={600}
            />
            <LinkItem
              href="http://discordapp.com/users/1131445465032970403"
              icon={<MessageSquare strokeWidth={1.5} size={22} />}
              text="Discord"
              delay={700}
            />
            <LinkItem
              href="mailto:sathyaseelangunasekar@gmail.com"
              icon={<Mail strokeWidth={1.5} size={22} />}
              text="Email"
              delay={800}
            />
            <LinkItem
              href="https://www.spacescan.io/address/xch1juyekxjd36feyhgztk7ynfgyh4yg2a3tac59mqddflqkcd20u2xsx5np7a"
              icon={<SiSpacemacs size={22} />}
              text="Chia Address"
              delay={900}
            />
          </div>
        </div>

        <footer className="mt-12 text-center text-white/40 text-sm hover:text-white/60 transition-colors duration-300">
          © 2025 Sathya Seelan. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;