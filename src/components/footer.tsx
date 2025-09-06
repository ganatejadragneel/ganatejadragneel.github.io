'use client'

import Link from 'next/link'
import { Zap, Star, Flame, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { motion } from 'framer-motion'
import { SocialLinks } from '@/components/ui/social-links'

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-900 via-orange-900 to-red-900 border-t-4 border-yellow-400 overflow-hidden">
      {/* DBZ Energy Effect Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 left-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-10 animate-pulse"></div>
      </div>

      {/* Dragon Balls Pattern */}
      <div className="absolute inset-0 opacity-5">
        {[
          { left: '10%', top: '20%' },
          { left: '80%', top: '15%' },
          { left: '25%', top: '60%' },
          { left: '70%', top: '40%' },
          { left: '45%', top: '80%' },
          { left: '15%', top: '90%' },
          { left: '90%', top: '70%' }
        ].map((position, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: position.left,
              top: position.top,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: 360,
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Star className="h-8 w-8 text-yellow-400 fill-yellow-400" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information - Capsule Corp Style */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black text-yellow-400 mb-4 uppercase tracking-wider flex items-center">
              <Zap className="h-5 w-5 mr-2 animate-pulse" />
              Contact Transmission
            </h3>
            <div className="space-y-3 text-yellow-100">
              <motion.p 
                className="flex items-center group"
                whileHover={{ x: 5 }}
              >
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                <a 
                  href={`mailto:${personalInfo.email}`} 
                  className="hover:text-yellow-300 transition-colors relative"
                >
                  {personalInfo.email}
                  <span className="absolute -right-16 text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    ⚡9000
                  </span>
                </a>
              </motion.p>
              <motion.p 
                className="flex items-center"
                whileHover={{ x: 5 }}
              >
                <Flame className="h-4 w-4 mr-2 text-orange-400 animate-pulse" />
                {personalInfo.location}
              </motion.p>
              <p className="text-xs text-orange-300 mt-4">
                📍 Training Grounds: Earth
              </p>
            </div>
          </motion.div>

          {/* Quick Links - Scouter Menu Style */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black text-yellow-400 mb-4 uppercase tracking-wider flex items-center">
              <Star className="h-5 w-5 mr-2 animate-spin-slow" />
              Navigation Array
            </h3>
            <div className="space-y-2">
              {[
                { href: '#about', label: 'About', power: '5000' },
                { href: '#projects', label: 'Projects', power: '7500' },
                { href: '/blog', label: 'Blog', power: '6000' },
                { href: '#contact', label: 'Contact', power: '8000' }
              ].map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ x: 10, scale: 1.05 }}
                  className="group"
                >
                  <Link 
                    href={link.href} 
                    className="flex items-center justify-between text-yellow-100 hover:text-yellow-300 transition-all font-bold uppercase text-sm"
                  >
                    <span className="flex items-center">
                      <span className="mr-2 text-cyan-400">▸</span>
                      {link.label}
                    </span>
                    <span className="text-xs text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      PWR: {link.power}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links - Power Level Scanner */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-black text-yellow-400 mb-4 uppercase tracking-wider flex items-center">
              <Flame className="h-5 w-5 mr-2 animate-pulse" />
              Power Links
            </h3>
            <SocialLinks variant="footer" />
            
            {/* Power Level Display */}
            <motion.div 
              className="mt-6 p-3 bg-black/50 rounded-lg border-2 border-cyan-400"
              animate={{
                borderColor: ['#00ffff', '#ffff00', '#00ffff'],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-xs font-mono text-cyan-300 uppercase">
                Combined Power Level:
              </p>
              <motion.p 
                className="text-2xl font-black text-yellow-400"
                animate={{
                  textShadow: [
                    '0 0 10px rgba(255, 200, 0, 0.5)',
                    '0 0 20px rgba(255, 200, 0, 1)',
                    '0 0 10px rgba(255, 200, 0, 0.5)',
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                OVER 9000!
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar - Saiyan Pride */}
        <motion.div 
          className="mt-12 pt-8 border-t-2 border-yellow-400/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            <motion.p 
              className="text-yellow-100 text-sm font-bold uppercase tracking-wider"
              whileHover={{ scale: 1.05 }}
            >
              © 2024 {personalInfo.name} | <span className="text-orange-400">SAIYAN DEVELOPER</span>
            </motion.p>
            <motion.p 
              className="text-yellow-100 text-sm mt-2 md:mt-0 font-bold uppercase"
              whileHover={{ scale: 1.05 }}
            >
              POWERED BY <span className="text-cyan-400">NEXT.JS</span> & <span className="text-orange-400">KAMEHAMEHA CSS</span>
            </motion.p>
          </div>
          
          {/* Final Power Statement */}
          <motion.div 
            className="text-center mt-6"
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <p className="text-xs text-yellow-300 font-mono uppercase tracking-widest">
              ⚡ Training to become the legendary super developer ⚡
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  )
}