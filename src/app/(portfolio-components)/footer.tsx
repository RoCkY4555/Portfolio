import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://github.com/RoCkY4555" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile"
                className="text-primary-foreground hover:text-accent transition-colors">
            <Github className="h-6 w-6" />
          </Link>
          <Link href="https://www.linkedin.com/in/yash-sharma-a17724253/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile"
                className="text-primary-foreground hover:text-accent transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="mailto:syash28072005@gmail.com" aria-label="Email Me"
                className="text-primary-foreground hover:text-accent transition-colors">
            <Mail className="h-6 w-6" />
          </Link>
        </div>
        <p className="text-sm">
          &copy; {currentYear} JavaDevFolio. 
        </p>
        <p className="text-xs mt-1">
          
        </p>
      </div>
    </footer>
  );
}
