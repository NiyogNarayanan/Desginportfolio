import { Mail, MessageCircle, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'niyognarayanan@gmail.com',
      action: 'Send Email'
    },
    {
      icon: MessageCircle,
      title: 'Phone',
      description: '+91 7009857869',
      action: 'Call Now'
    }
  ];

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/niyognarayanan/' },
    { icon: Twitter, label: 'Behance', href: 'https://www.behance.net/niyognarayanan' }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have a project in mind? I'd love to collaborate and create something amazing together. 
            Let's discuss how we can bring your ideas to life with exceptional user experiences.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactMethods.map((method, index) => (
              <Card 
                key={index} 
                className="text-center shadow-card hover:shadow-hero transition-all duration-300 border-border animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <Button variant="outline">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center space-y-6 animate-fade-in">
            <div className="bg-warm-gradient p-8 rounded-2xl text-center shadow-hero">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Create Amazing Experiences?
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                I'm passionate about solving user problems through thoughtful design. Currently available 
                for new projects and collaborations in UI/UX design and product development.
              </p>
              <Button variant="secondary" size="lg" className="bg-white text-primary hover:bg-white/90">
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 pt-8">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="flex items-center justify-center w-12 h-12 bg-muted text-muted-foreground rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;