import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Instagram, 
  Youtube,
  Phone, 
  Mail, 
  MapPin,
  ArrowRight,
  Send
} from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import Logo from './Logo';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const footerLinks = {
    company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/about#team" },
      { name: "Careers", path: "/careers" },
      { name: "News & Press", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
    services: [
      { name: "Software Development", path: "/services/software-development" },
      { name: "Cloud Solutions", path: "/services/cloud-solutions" },
      { name: "AI & ML", path: "/services/ai-ml" },
      { name: "Mobile Development", path: "/services/mobile-development" },
      { name: "DevOps", path: "/services/devops" },
    ],
    //TODO
    // solutions: [
    //   { name: 'ERP Systems', path: '/solutions/erp' },
    //   { name: 'CRM Solutions', path: '/solutions/crm' },
    //   { name: 'E-commerce', path: '/solutions/ecommerce' },
    //   { name: 'Healthcare', path: '/solutions/healthcare' },
    //   { name: 'Education', path: '/solutions/education' },
    // ],
    // resources: [
    //   { name: 'Case Studies', path: '/case-studies' },
    //   { name: 'Blog', path: '/blog' },
    //   { name: 'Documentation', path: '/docs' },
    //   { name: 'Support', path: '/support' },
    //   { name: 'Privacy Policy', path: '/privacy' },
    // ],
  };

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "https://facebook.com/SelicaTech",
    },
    { name: "Twitter", icon: Twitter, url: "https://twitter.com/SelicaTech" },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/company/SelicaTech",
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/SelicaTech",
    },
    { name: "YouTube", icon: Youtube, url: "https://youtube.com/SelicaTech" },
  ];

  const offices = [
    {
      city: "Bengaluru",
      address:
        "46/4, Hosur Rd, Kudlu Gate, Krishna Reddy Industrial Area, H.S, R Extension, 560068",
      phone: "+91 6363 472 891",
      email: "contact@selicatech.com",
    },
    {
      city: "New York",
      address: "456 Innovation Ave, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@SelicaTech.com",
    },
    {
      city: "London",
      address: "789 Digital Lane, EC1A 1BB",
      phone: "+44 20 1234 5678",
      email: "london@SelicaTech.com",
    },
  ];

  return (
    <footer className="bg-dark-900 text-white">
      {/* Newsletter Section */}
      <div className="border-b border-dark-700">
        <div className="container mx-auto container-padding py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
              <p className="text-gray-400">
                Get the latest insights on technology trends, industry news, and
                our company updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-dark-800 border border-dark-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button className="btn btn-primary flex items-center justify-center">
                <Send size={18} className="mr-2" />
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Logo className="h-10 w-10" />
              <span className="text-xl font-bold">SelicaTech</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Leading IT company providing innovative software development,
              cloud solutions, AI services, and digital transformation for
              global businesses.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-dark-800 text-gray-400 hover:text-white hover:bg-primary-600 transition-all duration-300"
                    aria-label={social.name}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.company")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.services")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-3">
              {footerLinks?.solutions.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Resources Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-6">
              {t("footer.resources")}
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    {link.name}
                    <ArrowRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>

        {/* Office Locations */}
        <div className="mt-16 pt-8 border-t border-dark-700">
          <h4 className="text-lg font-semibold mb-6">Global Offices</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((office) => (
              <div key={office.city} className="bg-dark-800 rounded-xl p-6">
                <h5 className="font-semibold mb-4">{office.city}</h5>
                <div className="space-y-3 text-sm text-gray-400">
                  <div className="flex items-start">
                    <MapPin
                      size={16}
                      className="mr-2 mt-0.5 text-primary-500 flex-shrink-0"
                    />
                    <span>{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone
                      size={16}
                      className="mr-2 text-primary-500 flex-shrink-0"
                    />
                    <a
                      href={`tel:${office.phone}`}
                      className="hover:text-white transition-colors"
                    >
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail
                      size={16}
                      className="mr-2 text-primary-500 flex-shrink-0"
                    />
                    <a
                      href={`mailto:${office.email}`}
                      className="hover:text-white transition-colors"
                    >
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-dark-700">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} SelicaTech. {t("footer.rights")}
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;