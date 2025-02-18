import React from 'react';
import { Github, Twitter, Instagram, Linkedin, Mail, Globe } from 'lucide-react';

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
    className="group w-full p-4 backdrop-blur-md bg-white/20 rounded-xl border border-white/30 shadow-lg 
               hover:bg-white/30 hover:scale-[1.02] transition-all duration-300 ease-out animate-fade-in"
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="flex items-center space-x-3">
      <div className="p-2 bg-white/90 rounded-lg shadow-sm group-hover:scale-110 transition-transform duration-300">
        <span className="text-indigo-600">{icon}</span>
      </div>
      <span className="text-white font-medium text-lg tracking-wide group-hover:translate-x-1 transition-transform duration-300">
        {text}
      </span>
    </div>
  </a>
);

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[10%] left-[15%] w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
        <div className="absolute top-[20%] right-[15%] w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
        <div className="absolute bottom-[20%] left-[35%] w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
      </div>

      <div className="max-w-2xl mx-auto pt-16 pb-8 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&h=200&q=80"
              alt="Profile"
              className="relative w-32 h-32 rounded-full border-4 border-white/50 shadow-2xl object-cover animate-profile-load"
            />
          </div>
          <h1 className="text-4xl font-bold text-white mt-6 mb-2 animate-fade-in">John Doe</h1>
          <div className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/30 shadow-lg mb-4 animate-fade-in animation-delay-200">
            <p className="text-white/90 font-medium">Full Stack Developer | Open Source Enthusiast</p>
          </div>
          <p className="text-white/80 text-center max-w-md mb-8 animate-fade-in animation-delay-400">
            Building amazing web experiences and sharing knowledge with the community
          </p>
        </div>

        <div className="space-y-4 px-4">
          <LinkItem
            href="https://github.com"
            icon={<Github size={24} />}
            text="Follow me on GitHub"
            delay={500}
          />
          <LinkItem
            href="https://twitter.com"
            icon={<Twitter size={24} />}
            text="Connect on Twitter"
            delay={600}
          />
          <LinkItem
            href="https://instagram.com"
            icon={<Instagram size={24} />}
            text="Follow my Instagram"
            delay={700}
          />
          <LinkItem
            href="https://linkedin.com"
            icon={<Linkedin size={24} />}
            text="Connect on LinkedIn"
            delay={800}
          />
          <LinkItem
            href="https://example.com"
            icon={<Globe size={24} />}
            text="Visit my Website"
            delay={900}
          />
          <LinkItem
            href="mailto:contact@example.com"
            icon={<Mail size={24} />}
            text="Send me an Email"
            delay={1000}
          />
        </div>

        <footer className="mt-12 text-center text-white/70 animate-fade-in animation-delay-1000">
          © 2024 John Doe. All rights reserved.
        </footer>
      </div>
    </div>
  );
}

export default App;