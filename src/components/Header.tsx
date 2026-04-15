'use client'

import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-3xl font-serif font-bold text-coffee-600">
              ☕ SEDNA
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-coffee-900 hover:text-coffee-600 transition">Home</a>
            <a href="#menu" className="text-coffee-900 hover:text-coffee-600 transition">Menu</a>
            <a href="#about" className="text-coffee-900 hover:text-coffee-600 transition">About</a>
            <a href="#contact" className="text-coffee-900 hover:text-coffee-600 transition">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#home" className="block text-coffee-900 hover:text-coffee-600 py-2">Home</a>
            <a href="#menu" className="block text-coffee-900 hover:text-coffee-600 py-2">Menu</a>
            <a href="#about" className="block text-coffee-900 hover:text-coffee-600 py-2">About</a>
            <a href="#contact" className="block text-coffee-900 hover:text-coffee-600 py-2">Contact</a>
          </div>
        )}
      </nav>
    </header>
  )
}
