import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen pt-16 bg-white overflow-x-hidden">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
      </div>
    </main>
  );
}
