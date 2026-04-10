import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-primary flex items-center justify-center rounded-sm">
              <span className="text-black font-bold text-lg">H</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">HEXA</span>
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mb-8">
            A premier service provider and consulting firm dedicated to helping organizations create sustainable innovation.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://www.facebook.com/hexabusiness" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Facebook size={18} />
            </a>
            <a 
              href="https://www.instagram.com/hexa.business/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary hover:text-black transition-all duration-300"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-primary">Services</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li><Link to="/services" className="hover:text-white transition-colors">Strategic Consultancy</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Digital Transformation</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Market Intelligence</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Brand Strategy</Link></li>
            <li><Link to="/services" className="hover:text-white transition-colors">Hexa Academy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-6 text-primary">Contact</h4>
          <ul className="space-y-4 text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-primary shrink-0" />
              <span>London, UK</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary shrink-0" />
              <span>+447345305377</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary shrink-0" />
              <span>info@hexa.business</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
        <p>© {new Date().getFullYear()} HEXA Business Consultancy. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
        </div>
      </div>
    </footer>
  );
}
