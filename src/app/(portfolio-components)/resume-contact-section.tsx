import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { DownloadCloud, Mail, Linkedin, Github } from 'lucide-react';
import { SectionScrollWrapper } from './section-scroll-wrapper';

const contactMethods = [
  {
    name: "Email",
    value: "syash28072005@gmail.com", // Replace with actual email
    href: "mailto:syash28072005@gmail.com", // Replace with actual email
    icon: <Mail className="h-6 w-6 text-primary" />
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yash-sharma-a17724253/", // Replace with actual profile
    href: "https://www.linkedin.com/in/yash-sharma-a17724253/", // Replace with actual profile
    icon: <Linkedin className="h-6 w-6 text-primary" />
  },
  {
    name: "GitHub",
    value: "github.com/RoCkY4555", // Replace with actual username
    href: "https://github.com/RoCkY4555", // Replace with actual username
    icon: <Github className="h-6 w-6 text-primary" />
  }
];

export function ResumeContactSection() {
  return (
    <SectionScrollWrapper>
      <section id="contact" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">Get In Touch</h2>
          
          <div className="max-w-3xl mx-auto">
            <Card className="shadow-xl border-primary/20 p-6 md:p-8">
              <CardContent className="text-center space-y-8">
                <p className="text-lg text-muted-foreground">
                  I&apos;m currently looking for new opportunities and would love to hear from you. 
                  Whether you have a question or just want to say hi, feel free to reach out!
                </p>
                
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">Contact Me</h3>
                  <div className="space-y-4">
                    {contactMethods.map((method) => (
                      <Link key={method.name} href={method.href} target="_blank" rel="noopener noreferrer" 
                            className="flex items-center justify-center p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors group">
                        {method.icon}
                        <span className="ml-3 text-foreground group-hover:text-primary">{method.value}</span>
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">My Resume</h3>
                  <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md transition-transform hover:scale-105">
                    {/* Make sure to place your resume PDF in the public folder */}
                    <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      <DownloadCloud className="mr-2 h-5 w-5" /> Download Resume
                    </Link>
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2"></p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </SectionScrollWrapper>
  );
}
