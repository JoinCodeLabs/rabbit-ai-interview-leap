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
    <footer className="bg-slate-900 text-slate-100 border-t border-slate-800">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1 mb-8 md:mb-0">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent-purple rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <span className="text-2xl font-bold text-white">Rabbit AI</span>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 text-lg">
              The future of hiring is here. AI-powered interviews that scale 
              with your business and transform your recruitment process.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <span className="text-slate-300">hello@rabbitai.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-slate-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-slate-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="col-span-1 md:col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="mb-6 sm:mb-0">
                <h4 className="font-bold text-white mb-6 text-lg">{section.title}</h4>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href={link.href}
                        className="text-slate-300 hover:text-primary transition-colors duration-300 font-medium"
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
        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left font-medium">
              © 2024 Rabbit AI. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
              <div className="flex items-center gap-3 text-sm text-slate-300">
                <Globe className="w-5 h-5 text-primary" />
                <span className="font-medium">Available in 120+ languages</span>
              </div>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <span className="text-sm text-slate-400 font-medium">Follow us:</span>
                <div className="flex gap-6">
                  <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-300 font-medium">
                    LinkedIn
                  </a>
                  <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-300 font-medium">
                    Twitter
                  </a>
                  <a href="#" className="text-slate-300 hover:text-primary transition-colors duration-300 font-medium">
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