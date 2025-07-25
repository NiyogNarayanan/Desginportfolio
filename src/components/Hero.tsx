import { ArrowDown, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroPortrait from '@/assets/hero-portrait.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-subtle-gradient pt-16">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Crafting Digital
                <span className="block bg-warm-gradient bg-clip-text text-transparent">
                  Experiences
                </span>
                That Connect
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
                Creative UI/UX Designer with 1+ years of experience in user research, 
                interaction design, and creating intuitive digital experiences across web and mobile platforms.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#projects">
                <Button size="lg" className="shadow-hero">
                  View My Work
                </Button>
              </a>
              <a href="mailto:niyognarayanan@gmail.com">
                <Button variant="outline" size="lg">
                  Get In Touch
                </Button>
              </a>
              <a href="/Niyog_Narayanan_Resume.pdf" download="Niyog_Narayanan_Resume.pdf">
                <Button variant="secondary" size="lg" className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <span>Based in Kottayam, Kerala • Available for projects</span>
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-scale-in">
            <div className="relative">
              <img 
                src={heroPortrait} 
                alt="Niyog Narayanan A O"
                className="w-full max-w-md mx-auto rounded-2xl shadow-card"
              />
              <div className="absolute inset-0 rounded-2xl bg-warm-gradient opacity-10"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-20">
          <a 
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
          >
            <span className="text-sm">Scroll Down</span>
            <ArrowDown className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;