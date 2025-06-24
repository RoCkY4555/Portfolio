import { Navbar } from './(portfolio-components)/navbar';
import { HeroSection } from './(portfolio-components)/hero-section';
import { AboutMeSection } from './(portfolio-components)/about-me-section';
import { ProjectsSection } from './(portfolio-components)/projects-section';
import { ResumeContactSection } from './(portfolio-components)/resume-contact-section';
import { Footer } from './(portfolio-components)/footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <AboutMeSection />
        <ProjectsSection />
        <ResumeContactSection />
      </main>
      <Footer />
    </div>
  );
}
