import { Award, Users, Clock, Coffee } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '25+', label: 'Happy Clients' },
    { icon: Clock, value: '3+', label: 'Years Experience' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' }
  ];

  const skills = [
    'User Research', 'Wireframing', 'Prototyping', 'Visual Design',
    'Interaction Design', 'Usability Testing', 'Figma', 'Adobe Creative Suite'
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm passionate about creating user-centered designs that solve real problems 
            and deliver exceptional experiences across all digital touchpoints.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-foreground">
              My Design Journey
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                With over 3 years of experience in UI/UX design, I've had the privilege 
                of working with startups and established companies to create digital 
                products that users love.
              </p>
              <p>
                My approach combines user research, strategic thinking, and beautiful 
                visual design to deliver solutions that not only look great but perform 
                exceptionally well.
              </p>
              <p>
                When I'm not designing, you'll find me exploring new design trends, 
                contributing to design communities, or enjoying a good cup of coffee 
                while sketching new ideas.
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