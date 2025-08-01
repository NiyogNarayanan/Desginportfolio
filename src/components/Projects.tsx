import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Web & Mobile Application',
      description: 'Designed a dual-platform e-commerce experience focused on simplicity and engagement. Developed high-fidelity prototypes for product pages, checkout flows, and admin dashboards.',
      category: 'E-commerce Platform',
      image: project1,
      tags: ['Mobile App', 'Web Design', 'UX Flow']
    },
    {
      id: 2,
      title: 'Nova - Minecraft Server App',
      description: 'Designed a mobile app for a Minecraft server integrating community features, news, and user profiles. Focused on accessibility, onboarding flow, and interface consistency.',
      category: 'Mobile App Design',
      image: project6,
      tags: ['Community App', 'Gaming', 'Mobile UX']
    },
    {
      id: 3,
      title: 'Tribble Tokes Website Redesign',
      description: 'Complete website redesign with modern, user-focused approach. Implemented clean visual aesthetic and intuitive layout aligned with brand identity.',
      category: 'Website Redesign',
      image: project3,
      tags: ['Web Redesign', 'Brand Identity', 'UX Strategy']
    },
    {
      id: 4,
      title: 'Mindor Tech Company Website',
      description: 'Designed new website with improved UX and custom-designed cards to showcase services. Included smooth animations for better SEO and user flow design.',
      category: 'Corporate Website',
      image: project4,
      tags: ['Corporate', 'Service Design', 'SEO']
    },
    {
      id: 5,
      title: 'House of Baisa E-commerce',
      description: 'Redesigned online clothing store with better layout and modern UI while maintaining brand aesthetics. Improved user experience and shopping flow.',
      category: 'E-commerce Redesign',
      image: project2,
      tags: ['Fashion', 'E-commerce', 'UI Redesign']
    },
    {
      id: 6,
      title: 'Student management system for institutions',
      description: 'Designed a responsive web app for an educational institution with admin CRUD features for students, teachers, and courses, payment management, and dedicated portals for teachers and students to manage schedules, assignments, and profiles.',
      category: 'Dashbord Design',
      image: project5,
      tags: ['Dashbord', 'Web design']
  },
//  {
//      id: 7,
//      title: 'Subscription Page design',
//      description: 'Designed an intuitive and user-friendly subscription page flow, focusing on seamless user experience, clear pricing tiers, and optimized conversion pathways.',
//      category: 'App design',
//      image: project2,
//      tags: ['Mobile app Design', 'UI/UX' ]
//  },
  {
      id: 8,
      title: 'Mindor Website redesign',
      description: 'Redesigning Mindor website, giving it a completely new look with improved UX and custom-designed cards to showcase services. Included smooth modern animations for better SEO and user flow design.',
      category: 'Web design',
      image: project4,
      tags: ['Web Design', 'Modern Design', 'UI/UX', 'UI Animations' ]
  }
  ];

  return (
    <section id="projects" className="py-20 bg-subtle-gradient">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects spanning e-commerce platforms, mobile applications, 
            corporate websites, and community-driven experiences across various industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={project.id} to={`/project/${project.id}`}>
              <Card 
                className="group overflow-hidden shadow-card hover:shadow-hero transition-shadow duration-200 border-border h-full cursor-pointer"
              >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover will-change-transform transition-transform duration-200 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-200"></div>
                <Button
                  size="sm"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-lg"
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-primary font-medium">
                      {project.category}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <a href="#contact">
            <Button variant="outline" size="lg">
              Let's Discuss Your Project
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
