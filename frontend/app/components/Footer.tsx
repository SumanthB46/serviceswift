import React from 'react';
import Link from 'next/link';
import { Share2, MessageSquare, Globe, Play, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              Service<span className="text-gray-400">Swift</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Providing premium home services with verified professionals. Your comfort is our priority.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Share2 className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <Play className="h-5 w-5" />
              </Link>
              <Link href="#" className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-bold mb-6">Company</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Services</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">Home Cleaning</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">AC Repair & Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Salon for Women</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Plumbing & Electrical</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                <span>support@serviceswift.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-3" />
                <span>123 Service St, Innovation Hub, NY</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-500 text-xs">
          <p>© 2026 ServiceSwift. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
