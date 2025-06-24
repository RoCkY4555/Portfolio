import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';
import { SectionScrollWrapper } from './section-scroll-wrapper';

export function HeroSection() {
  return (
    <SectionScrollWrapper>
      <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-secondary to-background py-20 pt-28 md:pt-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            
            
            <h1 className="font-headline text-4xl sm:text-5xl md:text-6xl font-bold text-primary mb-6">
              Hi, I&apos;m Yash Sharma
            </h1>
            <p className="font-headline text-2xl sm:text-3xl text-foreground mb-8">
              A Passionate Java Software Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Crafting robust and scalable applications with a focus on backend technologies and a love for continuous learning.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transition-transform hover:scale-105">
                <Link href="/#projects">View My Work <ArrowDown className="ml-2 h-5 w-5 animate-bounce" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 shadow-lg transition-transform hover:scale-105">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SectionScrollWrapper>
  );
}
