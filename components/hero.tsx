"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Twitter, ArrowDown } from "lucide-react";
import Image from "next/image";

export const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0B0716] to-[#1A0B2E] relative overflow-hidden">
      {/* Background gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-transparent" />
      <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
      
      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center p-6 lg:p-8">
        <div className="text-white font-bold text-xl">
          Shatakshi <span className="text-muted-foreground">Portfolio</span>
        </div>
        <div className="hidden md:flex space-x-8 text-sm text-muted-foreground">
          <button 
            onClick={() => scrollToSection('projects')} 
            className="hover:text-white transition-colors duration-300"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="hover:text-white transition-colors duration-300"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="hover:text-white transition-colors duration-300"
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main Hero Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between min-h-[calc(100vh-120px)]">
        
        {/* Left Content Card */}
        <Card className="bg-gradient-to-br from-gray-800/40 to-gray-900/60 border-gray-700/50 backdrop-blur-sm p-8 lg:p-12 max-w-2xl lg:mr-8 mb-8 lg:mb-0 shadow-2xl">
          <div className="flex items-center mb-6">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center mr-3">
              <span className="text-black text-sm font-bold">S</span>
            </div>
            <span className="text-muted-foreground text-sm">Hi, I'm Shatakshi</span>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mb-8">
            <a
              href="https://twitter.com/shatakshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/shatakshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/shatakshi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-white transition-all duration-300 hover:scale-110"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Passionate to pursue{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              the technology
            </span>
            .
          </h1>

          {/* Description */}
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            I enjoy learning new things and try to overcome new challenges while analyzing how I improved through them.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold px-8 py-3 hover:shadow-lg hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => scrollToSection('contact')}
              className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 transition-all duration-300"
            >
              Get In Touch
            </Button>
          </div>
        </Card>

        {/* Right Avatar Card */}
        <Card className="bg-gradient-to-br from-yellow-400 to-orange-500 p-8 max-w-sm shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-yellow-500/25">
          <div className="relative">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/0525cfe9-ee8e-4392-9525-7e3dcdb065a8/generated_images/professional-3d-avatar-of-a-confident-fe-12d2373c-20250610042032.jpg"
              alt="Shatakshi - ML Engineer"
              width={300}
              height={400}
              className="rounded-2xl object-cover w-full h-[400px] shadow-lg"
              priority
            />
            
            {/* Professional Tag */}
            <div className="absolute bottom-4 left-4 right-4 bg-black/20 backdrop-blur-sm rounded-lg p-3">
              <p className="text-black font-semibold text-sm">
                Machine Learning Engineer
              </p>
              <p className="text-black/80 text-xs">
                Specializing in AI & Data Science
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection('projects')}
          className="text-muted-foreground hover:text-white transition-colors duration-300"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-orange-500 rounded-full animate-pulse delay-1000" />
      <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-500" />
    </section>
  );
};