import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'services', href: '#services' },
    { key: 'contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/logo.png" alt="Se Myeong Korean Medicine Clinic Logo" className="h-12 w-auto" style={{background: 'transparent'}} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className={`text-muted-foreground hover:text-primary transition-colors duration-200 ${
                  language === 'ko' ? 'korean-text' : ''
                }`}
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Language Toggle and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Language Toggle */}
            <div className="flex items-center bg-muted rounded-lg p-1">
              <button
                onClick={() => setLanguage('ko')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'ko' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                KOR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
                  language === 'en' 
                    ? 'bg-primary text-primary-foreground shadow-sm' 
                    : 'text-foreground hover:text-primary'
                }`}
              >
                ENG
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-muted-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-3">
              {navItems.map(item => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`text-left text-muted-foreground hover:text-primary transition-colors duration-200 py-2 ${
                    language === 'ko' ? 'korean-text' : ''
                  }`}
                >
                  {t(item.key)}
                </button>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
