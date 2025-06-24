import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coffee, Leaf, Atom, Braces, FileCode2, Palette, Database, GitFork, Network, Briefcase, GraduationCap, Target, Brain, DraftingCompass } from 'lucide-react';
import { SectionScrollWrapper } from './section-scroll-wrapper';

const skills = [
  { name: 'Java', icon: <Coffee className="h-7 w-7 text-primary" />, description: "Core Java, OOP" },
  { name: 'Spring Boot', icon: <Leaf className="h-7 w-7 text-primary" />, description: "REST APIs, MVC" },
  { name: 'SQL', icon: <Database className="h-7 w-7 text-primary" />, description: "Database Management" },
  { name: 'Git GitHub', icon: <GitFork className="h-7 w-7 text-primary" />, description: "Version Control" },
  { name: 'REST APIs', icon: <Network className="h-7 w-7 text-primary" />, description: "API Design" },
    { name: 'DSA', icon: <Brain className="h-7 w-7 text-primary" />, description: "Data Structure and Algorithm" },
    { name: 'C', icon: <Braces className="h-7 w-7 text-primary" />, description: "C language basics" },
    { name: 'Postman', icon: <DraftingCompass className="h-7 w-7 text-primary" />, description: "Application Programming Interface" },

];

export function AboutMeSection() {
  return (
    <SectionScrollWrapper>
      <section id="about" className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl text-primary">
                  <Briefcase className="mr-3 h-7 w-7" /> Who I Am
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-lg">
                <p>
                  A highly motivated Computer Science student with a solid foundation in programming and
 software development. Skilled in Java, C, and SQL, with expertise in Object-Oriented 
Programming (OOP’S) concepts such as inheritance, polymorphism, encapsulation, and abstraction. 

                </p>
                <p>
                  I am proficient in backend technologies like Spring Boot and have hands-on experience in 
                  building innovative solutions and solving complex technical challenges. Seeking an 
                  opportunity to leverage technical skills, contribute to impactful projects, and grow in a dynamic 
                  organization.
                </p>
              </CardContent>
            </Card>

            <div className="space-y-10">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <GraduationCap className="mr-3 h-7 w-7" /> Education
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg">
                  <p className="font-semibold">B.Tech in Computer Science and Enginnering</p>
                  <p>AKTU , 2026</p>
                  <p className="mt-2 text-sm">Relevant Coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Systems, Web Development, Software Engineering.</p>
                </CardContent>
              </Card>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl text-primary">
                    <Target className="mr-3 h-7 w-7" /> Career Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground text-lg">
                  <p>
                    Seeking a challenging entry-level position as a Java Developer where I can contribute to meaningful projects, enhance my technical expertise, 
                    and grow within a dynamic team environment. I aim to become a versatile full-stack developer and a valuable asset to any organization.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary text-center mb-10">My Skills</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
              {skills.map((skill) => (
                <SectionScrollWrapper key={skill.name} delay="delay-150">
                  <Card className="text-center p-6 shadow-md hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center justify-center">
                    <div className="mb-3 p-3 bg-primary/10 rounded-full">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-lg text-foreground mb-1">{skill.name}</h4>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </Card>
                </SectionScrollWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SectionScrollWrapper>
  );
}
