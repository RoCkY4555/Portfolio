"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-md" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/#hero" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors" onClick={closeMenu}>
            <Briefcase className="h-8 w-8" />
            <span className="font-headline text-2xl font-bold">JavaDevFolio</span>
          </Link>

          <div className="hidden md:flex space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-medium text-foreground hover:text-primary transition-colors duration-200 py-2"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} aria-label="Toggle menu">
              {isOpen ? <X className="h-7 w-7 text-primary" /> : <Menu className="h-7 w-7 text-primary" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "md:hidden absolute top-20 left-0 right-0 bg-background shadow-lg transition-all duration-300 ease-in-out origin-top",
          isOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        )}
        style={{ transformOrigin: 'top' }}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-medium text-lg text-foreground hover:text-primary transition-colors duration-200"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
