import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail, MapPin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Hackathons', href: '#hackathons' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', href: 'https://github.com/ShatakshiPalli', icon: Github },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/shatakshipalli', icon: Linkedin },
    { name: 'Twitter', href: 'https://x.com/shatakshipalli', icon: Twitter },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">Shatakshi</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                Machine Learning Engineer passionate about building innovative AI solutions and exploring cutting-edge technologies.
                Creating impactful ML systems through thoughtful engineering and data-driven insights.
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <MapPin className="w-4 h-4" />
                <span>Telangana,India</span>
              </div>
              <div className="flex items-center gap-3 text-slate-400 text-sm">
                <Mail className="w-4 h-4" />
                <Link 
                  href="mailto:hello@shatakshi.dev" 
                  className="hover:text-white transition-colors duration-200"
                >
                  hello@shatakshi.dev
                </Link>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-white transition-colors duration-200 inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-white font-medium mb-4">Connect</h4>
            <div className="flex flex-col space-y-3">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors duration-200 group"
                  >
                    <IconComponent className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
                    {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-slate-800/50">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-slate-400 text-sm">
              © {currentYear} Shatakshi. All rights reserved.
            </div>
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};