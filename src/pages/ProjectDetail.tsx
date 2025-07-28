import { useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

// Project data - moved from Projects component
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';
import project5 from '@/assets/project-5.jpg';
import project6 from '@/assets/project-6.jpg';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Web & Mobile Application',
    description: 'Designed a dual-platform e-commerce experience focused on simplicity and engagement. Developed high-fidelity prototypes for product pages, checkout flows, and admin dashboards.',
    category: 'E-commerce Platform',
    image: project1,
    tags: ['Mobile App', 'Web Design', 'UX Flow'],
    overview: 'This comprehensive e-commerce project involved designing both web and mobile experiences for a modern retail platform. The focus was on creating an intuitive shopping experience that drives conversions while maintaining brand consistency across all touchpoints.',
    challenge: 'The main challenge was creating a seamless experience across different devices while optimizing for both user experience and business goals. We needed to balance feature-rich functionality with simple, intuitive navigation.',
    solution: 'I developed a design system that scales beautifully across platforms, with emphasis on visual hierarchy, clear call-to-actions, and streamlined checkout processes. The solution included responsive design principles and mobile-first approach.',
    results: 'The new design improved user engagement by 45% and increased conversion rates by 30%. The unified design system reduced development time and ensured consistency across all platforms.',
    process: [
      'User Research & Competitive Analysis',
      'Information Architecture & User Flows',
      'Wireframing & Prototyping',
      'Visual Design & Design System',
      'Usability Testing & Iteration'
    ]
  },
  {
    id: 2,
    title: 'Nova - Minecraft Server App',
    description: 'Designed a mobile app for a Minecraft server integrating community features, news, and user profiles. Focused on accessibility, onboarding flow, and interface consistency.',
    category: 'Mobile App Design',
    image: project6,
    tags: ['Community App', 'Gaming', 'Mobile UX'],
    overview: 'Nova is a companion mobile app designed for a Minecraft server community, bringing together players through integrated features like news updates, user profiles, and community interactions.',
    challenge: 'Creating an engaging mobile experience for a gaming community while ensuring accessibility and smooth onboarding for users of all technical levels.',
    solution: 'Developed an intuitive interface with gamified elements, clear information hierarchy, and community-focused features that enhance the Minecraft server experience.',
    results: 'Successfully increased community engagement and provided players with a seamless way to stay connected with their server community.',
    process: [
      'Gaming Community Research',
      'User Journey Mapping',
      'Mobile-First Design',
      'Community Feature Integration',
      'Accessibility Testing'
    ]
  },
  {
    id: 3,
    title: 'Tribble Tokes Website Redesign',
    description: 'Complete website redesign with modern, user-focused approach. Implemented clean visual aesthetic and intuitive layout aligned with brand identity.',
    category: 'Website Redesign',
    image: project3,
    tags: ['Web Redesign', 'Brand Identity', 'UX Strategy'],
    overview: 'A comprehensive website redesign project focused on modernizing the digital presence while maintaining brand authenticity and improving user experience.',
    challenge: 'The existing website had outdated design patterns and poor user experience. The challenge was to modernize the interface while preserving brand recognition.',
    solution: 'Implemented a clean, modern design with improved navigation, better content organization, and enhanced visual hierarchy that aligns with current web standards.',
    results: 'The redesign resulted in improved user engagement, better brand perception, and increased conversion rates.',
    process: [
      'Brand Analysis & Audit',
      'User Experience Research',
      'Content Strategy',
      'Visual Design Implementation',
      'Performance Optimization'
    ]
  },
  {
    id: 4,
    title: 'Mindor Tech Company Website',
    description: 'Designed new website with improved UX and custom-designed cards to showcase services. Included smooth animations for better SEO and user flow design.',
    category: 'Corporate Website',
    image: project4,
    tags: ['Corporate', 'Service Design', 'SEO'],
    overview: 'A modern corporate website design for Mindor Tech, focusing on showcasing their services through custom-designed components and improved user experience.',
    challenge: 'Creating a professional corporate website that effectively communicates complex technical services while maintaining user engagement.',
    solution: 'Developed custom card designs, implemented smooth animations, and created clear service presentations that improve both user experience and SEO performance.',
    results: 'Enhanced brand credibility, improved lead generation, and better search engine visibility.',
    process: [
      'Corporate Brand Analysis',
      'Service Architecture Design',
      'Custom Component Development',
      'SEO Optimization',
      'Performance Enhancement'
    ]
  },
  {
    id: 5,
    title: 'House of Baisa E-commerce',
    description: 'Redesigned online clothing store with better layout and modern UI while maintaining brand aesthetics. Improved user experience and shopping flow.',
    category: 'E-commerce Redesign',
    image: project2,
    tags: ['Fashion', 'E-commerce', 'UI Redesign'],
    overview: 'A complete e-commerce redesign for House of Baisa, a fashion retailer, focusing on improving the shopping experience while maintaining the brand\'s aesthetic identity.',
    challenge: 'Balancing modern design trends with established brand aesthetics while improving the overall shopping experience and conversion rates.',
    solution: 'Created a modern, clean interface that highlights products effectively while streamlining the purchase process and maintaining brand consistency.',
    results: 'Improved user experience, increased conversion rates, and enhanced brand perception in the competitive fashion e-commerce market.',
    process: [
      'Fashion Industry Research',
      'User Shopping Behavior Analysis',
      'Brand Identity Preservation',
      'E-commerce UX Optimization',
      'Conversion Rate Testing'
    ]
  },
  {
    id: 6,
    title: 'Student Management System for Institutions',
    description: 'Designed a responsive web app for an educational institution with admin CRUD features for students, teachers, and courses, payment management, and dedicated portals for teachers and students to manage schedules, assignments, and profiles.',
    category: 'Dashboard Design',
    image: project5,
    tags: ['Dashboard', 'Web design'],
    overview: 'A comprehensive student management system designed for educational institutions, featuring multiple user roles and complex data management capabilities.',
    challenge: 'Creating an intuitive interface for complex educational data management while serving different user types (admins, teachers, students) with varying needs.',
    solution: 'Developed role-based dashboards with clear information hierarchy, efficient data entry forms, and user-friendly navigation for all user types.',
    results: 'Streamlined educational administration processes and improved communication between students, teachers, and administrators.',
    process: [
      'Educational Workflow Analysis',
      'Multi-User Experience Design',
      'Data Management Interface',
      'Role-Based Access Design',
      'System Integration Planning'
    ]
  },
  {
    id: 7,
    title: 'Subscription Page Design',
    description: 'Designed an intuitive and user-friendly subscription page flow, focusing on seamless user experience, clear pricing tiers, and optimized conversion pathways.',
    category: 'App Design',
    image: project2,
    tags: ['Mobile app Design', 'UI/UX'],
    overview: 'A focused project on designing an effective subscription page that converts visitors into paying customers through clear value proposition and intuitive user flow.',
    challenge: 'Creating a subscription flow that clearly communicates value while reducing friction in the conversion process.',
    solution: 'Designed clear pricing tiers, emphasized value propositions, and created a streamlined subscription process with minimal steps.',
    results: 'Improved subscription conversion rates and reduced user drop-off during the sign-up process.',
    process: [
      'Conversion Funnel Analysis',
      'Pricing Strategy Design',
      'User Flow Optimization',
      'A/B Testing Implementation',
      'Conversion Rate Optimization'
    ]
  },
  {
    id: 8,
    title: 'Mindor Website Redesign',
    description: 'Redesigning Mindor website, giving it a completely new look with improved UX and custom-designed cards to showcase services. Included smooth modern animations for better SEO and user flow design.',
    category: 'Web Design',
    image: project4,
    tags: ['Web Design', 'Modern Design', 'UI/UX', 'UI Animations'],
    overview: 'A complete website redesign for Mindor, focusing on modern aesthetics, improved user experience, and enhanced service presentation.',
    challenge: 'Modernizing an existing corporate website while improving user engagement and search engine optimization.',
    solution: 'Implemented modern design principles, custom animations, and improved content structure to create a compelling user experience.',
    results: 'Enhanced user engagement, improved search rankings, and better lead generation.',
    process: [
      'Website Audit & Analysis',
      'Modern Design Implementation',
      'Animation Integration',
      'SEO Optimization',
      'Performance Enhancement'
    ]
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === parseInt(id || ''));

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-subtle-gradient">
        <div className="max-w-6xl mx-auto px-6">
          <Button 
            variant="ghost" 
            size="sm" 
            className="mb-6 text-muted-foreground hover:text-foreground"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                {project.category}
              </span>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mt-2 mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[400px] object-cover rounded-lg shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Overview */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Project Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.overview}
              </p>
            </CardContent>
          </Card>

          {/* Challenge & Solution */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Challenge</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenge}
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-4">The Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Design Process */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-6">Design Process</h2>
              <div className="space-y-4">
                {project.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-foreground font-medium">{step}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Results */}
          <Card className="mb-12">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-foreground mb-4">Results & Impact</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.results}
              </p>
            </CardContent>
          </Card>

          {/* Call to Action */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Interested in working together?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss how I can help bring your project to life.
            </p>
            <Button size="lg" asChild>
              <a href="/#contact">
                Get In Touch
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail;
