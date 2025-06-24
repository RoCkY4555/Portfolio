import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink } from 'lucide-react';
import type { ReactNode } from 'react';

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col h-full shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-lg border border-border">
      <CardHeader className="p-0">
        <div className="relative w-full h-48 sm:h-56">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.imageHint}
          />
        </div>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl font-semibold text-primary mb-2">{project.title}</CardTitle>
        <CardDescription className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</CardDescription>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground border-accent/30">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0 border-t border-border mt-auto">
        <div className="flex space-x-3 w-full">
          {project.githubUrl && (
            <Button asChild variant="outline" className="flex-1 border-primary text-primary hover:bg-primary/10">
              <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
        
        </div>
      </CardFooter>
    </Card>
  );
}
