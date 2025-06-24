import { ProjectCard, type Project } from './project-card';
import { SectionScrollWrapper } from './section-scroll-wrapper';
import { Layers3, Wind } from 'lucide-react'; // Icons for Next.js, Tailwind

const projectsData: Project[] = [
  {
    title: "Chat App",
    description: " A real-time anonymous chat platform allowing users to connect securely without revealing personal identities..",
    imageUrl: "https://img.freepik.com/premium-vector/chat-app-logo-sms-messenger-label-design-mobile-app-online-conversation-with-texting-message-ui-design-concept-vector-illustration_172533-1513.jpg",
    imageHint: "ecommerce api",
    technologies: ["Java", "Spring Boot",  "WebTokens","Maven"],
    githubUrl: "https://github.com/RoCkY4555/chat-application", // Replace with actual link
  },
  {
    title: "Weather Web App",
    description: "A full-stack task management application allowing users to create, track, and manage their daily tasks. Features a React frontend and a Spring Boot backend.",
    imageUrl: "https://9to5mac.com/wp-content/uploads/sites/6/2023/04/Apple-Weather-app.jpg?quality=82&strip=all&w=1024",
    imageHint: "task app",
    technologies: ["Java", "Spring Boot", "Rest API",],
    githubUrl: "https://github.com/RoCkY4555/Weather-App-start", // Replace with actual link
    liveUrl: "#", // Replace with actual link or remove if not applicable
  },
  {
    title: "Password Genrator",
    description: "A secure and interactive Java-based desktop application that allows users to generate strong passwords and evaluate the strength of custom passwords based on industry-standard metrics.",
    imageUrl: "https://code-projects.org/wp-content/uploads/2020/01/Capture2-1.png",
    imageHint: "code portfolio",
    technologies: ["Java" ],
    githubUrl: "https://github.com/RoCkY4555/passwordGenrator", // Replace with actual link
  },
];

export function ProjectsSection() {
  return (
    <SectionScrollWrapper>
      <section id="projects" className="py-16 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary text-center mb-12">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <SectionScrollWrapper key={project.title} delay={`delay-${index * 150}`}>
                <ProjectCard project={project} />
              </SectionScrollWrapper>
            ))}
          </div>
        </div>
      </section>
    </SectionScrollWrapper>
  );
}
