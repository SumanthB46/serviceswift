"use client";

import React from 'react';
import Link from 'next/link';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Footer = () => {
    const reveal = useScrollReveal(0.1);

    return (
        <footer className="bg-white border-t border-gray-100 py-10">
            <div
                ref={reveal.ref}
                className={`max-w-7xl mx-auto px-6 scroll-hidden ${reveal.isVisible ? 'scroll-visible' : ''}`}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <Link href="/" className="text-2xl font-bold text-blue-900 tracking-tight">
                            ArchitecturalService
                        </Link>
                        <p className="text-gray-500 leading-relaxed max-w-xs">
                            We provide premium home maintenance and repair services
                            backed by architectural expertise and professional standards.
                        </p>
                    </div>

                    {/* Company Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-gray-500 hover:text-blue-900 transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-gray-500 hover:text-blue-900 transition-colors">Contact Us</Link></li>
                            <li><Link href="/careers" className="text-gray-500 hover:text-blue-900 transition-colors">Careers</Link></li>
                            <li><Link href="/blog" className="text-gray-500 hover:text-blue-900 transition-colors">Journal</Link></li>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Services</h4>
                        <ul className="space-y-4">
                            <li><Link href="/services/plumbing" className="text-gray-500 hover:text-blue-900 transition-colors">Plumbing</Link></li>
                            <li><Link href="/services/electrical" className="text-gray-500 hover:text-blue-900 transition-colors">Electrical</Link></li>
                            <li><Link href="/services/renovations" className="text-gray-500 hover:text-blue-900 transition-colors">Renovations</Link></li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="space-y-6">
                        <h4 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/terms" className="text-gray-500 hover:text-blue-900 transition-colors">Terms of Service</Link></li>
                            <li><Link href="/privacy" className="text-gray-500 hover:text-blue-900 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/licensing" className="text-gray-500 hover:text-blue-900 transition-colors">Licensing</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} ArchitecturalService. All rights reserved.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-400">
                        <Link href="/social/instagram" className="hover:text-blue-900 transition-colors">Instagram</Link>
                        <Link href="/social/twitter" className="hover:text-blue-900 transition-colors">Twitter</Link>
                        <Link href="/social/linkedin" className="hover:text-blue-900 transition-colors">LinkedIn</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
