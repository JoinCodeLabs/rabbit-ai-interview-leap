import { Globe, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: [
        { name: "Features", href: "#features" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "Analytics", href: "#analytics" },
        { name: "Security", href: "#security" },
        { name: "Integrations", href: "#integrations" }
      ]
    },
    {
      title: "Company", 
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Blog", href: "#blog" },
        { name: "Partners", href: "#partners" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Documentation", href: "#docs" },
        { name: "API Reference", href: "#api" },
        { name: "Case Studies", href: "#cases" },
        { name: "Help Center", href: "#help" },
        { name: "Status", href: "#status" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "GDPR", href: "#gdpr" },
        { name: "Security", href: "#security-legal" },
        { name: "Compliance", href: "#compliance" }
      ]
    }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-foreground rounded-xl flex items-center justify-center">
                <span className="text-background font-bold text-lg">R</span>
              </div>
              <span className="text-2xl font-bold text-foreground">Rabbit AI</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              The future of hiring is here. AI-powered interviews that scale 
              with your business and transform your recruitment process.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-foreground" />
                <span className="text-muted-foreground">hello@rabbitai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-foreground" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-foreground" />
                <span className="text-muted-foreground">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="mb-6 sm:mb-0">
                <h4 className="font-semibold text-foreground mb-4">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <div className="text-muted-foreground text-sm text-center md:text-left">
              © 2024 Rabbit AI. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Globe className="w-4 h-4" />
                <span>Available in 120+ languages</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <div className="flex gap-4">
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    LinkedIn
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    Twitter
                  </a>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors duration-200">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;