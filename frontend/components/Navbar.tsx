"use client";

import React from 'react';
import Link from 'next/link';

const Navbar = () => {

    return (
        <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent py-5">
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="text-2xl font-bold tracking-tight text-[#1E3A8A]">
                    ArchitecturalService
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link href="/login" className="text-gray-600 hover:text-[#1E3A8A] font-medium transition-colors">
                        Login
                    </Link>
                    <Link href="/signup" className="bg-[#1E3A8A] text-white px-6 py-2.5 rounded-lg font-medium shadow-lg shadow-blue-900/20 hover:bg-blue-800 transition-all active:scale-95">
                        Sign Up
                    </Link>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;
