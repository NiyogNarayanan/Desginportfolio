const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-lg font-bold bg-warm-gradient bg-clip-text text-transparent">
            Niyog Narayanan
          </div>
          
          <div className="text-sm text-background/70">
            © 2024 Niyog Narayanan A O. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            <a href="#about" className="text-background/70 hover:text-background transition-colors">
              About
            </a>
            <a href="#projects" className="text-background/70 hover:text-background transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-background/70 hover:text-background transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;