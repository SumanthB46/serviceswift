"use client";

import React from "react";
import { Button } from "antd";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200 bg-[#FCF8FF]/80 backdrop-blur-md">
      <div className="mx-auto flex h-12 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Link href="/" className="text-lg font-bold text-[#1D2B83]">
            ArchitecturalService
          </Link>
        </div>
        <div className="hidden md:block">

        </div>
        <div className="flex items-center space-x-4">
          <Button type="text" className="font-semibold text-slate-600">
            LOGIN
          </Button>
          <Button type="primary" className="bg-[#1D2B83] font-bold">
            SIGN UP
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
