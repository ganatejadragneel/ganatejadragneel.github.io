'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Menu, X, Zap, Star } from 'lucide-react'
import { ThemeToggle } from './theme-toggle'
import { motion } from 'framer-motion'
import { SocialLinks } from '@/components/ui/social-links'

const navItems = [
  { href: '/', label: 'Home', power: '9000' },
  { href: '#about', label: 'About', power: '8500' },
  { href: '#experience', label: 'Experience', power: '9500' },
  { href: '#projects', label: 'Projects', power: '10000' },
  { href: '#skills', label: 'Skills', power: '8000' },
  { href: '/blog', label: 'Blog', power: '7500' },
  { href: '#contact', label: 'Contact', power: '9999' }
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-gradient-to-r from-orange-500/90 via-orange-600/90 to-red-600/90 backdrop-blur-lg border-b-4 border-yellow-400 shadow-2xl' 
        : 'bg-gradient-to-r from-orange-500/70 via-orange-600/70 to-red-600/70 backdrop-blur-md'
    }`}>
      {/* DBZ Energy Aura Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1 left-0 right-0 h-2 bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-300 opacity-80 animate-pulse"></div>
        <div className="absolute -bottom-1 left-0 right-0 h-2 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 opacity-60 animate-pulse"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo with DBZ Style */}
          <div className="flex items-center space-x-6">
            <Link href="/" className="group flex items-center space-x-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="relative"
              >
                <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
                <span className="absolute inset-0 animate-ping">
                  <Star className="h-8 w-8 text-yellow-300 opacity-50" />
                </span>
              </motion.div>
              <span className="text-xl font-black text-white tracking-wider uppercase transform hover:scale-110 transition-transform">
                GANA TEJA
              </span>
              <Zap className="h-5 w-5 text-yellow-300 animate-pulse" />
            </Link>
            
            {/* Social Links with DBZ Power Level */}
            <SocialLinks variant="dbz" showPowerLevels />
          </div>

          {/* Desktop Navigation with Power Levels */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.1, y: -2 }}
                className="relative group"
              >
                <Link
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-white font-bold uppercase tracking-wider text-sm hover:text-yellow-300 transition-all duration-200 relative"
                >
                  {item.label}
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-400 origin-left"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 text-[10px] font-bold text-cyan-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  ⚡ {item.power}
                </span>
              </motion.div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation - DBZ Style */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-gradient-to-b from-orange-600 to-red-700 border-t-4 border-yellow-400"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="flex justify-between items-center px-3 py-2 text-white font-bold uppercase hover:bg-yellow-400/20 rounded-md transition-all group"
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-cyan-300">⚡{item.power}</span>
                  </Link>
                </motion.div>
              ))}
              
              {/* Mobile Social Links */}
              <div className="pt-4 pb-2 border-t border-gray-200 dark:border-gray-800 mt-4">
                <SocialLinks variant="default" className="justify-center" />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  )
}