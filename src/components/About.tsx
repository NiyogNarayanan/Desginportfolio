import { Award, Users, Clock, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, value: '6+', label: 'Projects Completed' },
    { icon: Users, value: '50+', label: 'Audiobooks Produced' },
    { icon: Clock, value: '1.4+', label: 'Years Experience' },
    { icon: Coffee, value: '500+', label: 'Hours of Research' }
  ];

  const skills = [
    'User Research', 'Wireframing', 'Prototyping', 'Interaction Design',
    'Figma', 'Adobe XD', 'Community-Driven UX', 'Product Operations',
    'UX Research', 'Game Design', 'Visual Storytelling', 'Site Mapping'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              About Niyog
          </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Creative and detail-oriented UI/UX Designer with strong foundation in human-centered design, 
              usability principles, and UX research methodologies. Passionate about creating intuitive, 
              accessible, and visually engaging digital experiences.
            </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground">
              My Professional Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Currently working as a UI/UX Designer at Mindor Tech, I specialize in creating 
                responsive design systems and delivering user-centered wireframes and UI kits. 
                My experience spans across web and mobile platforms with a focus on pixel-perfect implementation.
              </p>
              <p>
                At Dreamloop.ai, I've enhanced user experiences across multiple products including 
                Max2D, Hora App, and NovelFM. Notable achievements include improving Google Play Store 
                ratings from 2.0 to 3.0 and increasing user engagement by 75% through strategic UX improvements.
              </p>
              <p>
                With a Bachelor's in Game Design from Chitkara University, I bring a unique perspective 
                to UI/UX design, combining interactive systems knowledge with user experience principles 
                to create engaging digital products.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Skills & Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-muted text-muted-foreground rounded-full text-sm border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6 animate-scale-in">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center shadow-card border-border hover:shadow-hero transition-all duration-300">
                <CardContent className="p-6">
                  <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
