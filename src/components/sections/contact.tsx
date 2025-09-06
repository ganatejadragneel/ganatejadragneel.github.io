'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MapPin, Phone, Anchor, Ship, Compass, Flag } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SocialLinks } from '@/components/ui/social-links'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now, we'll just show an alert since the form isn't connected yet
    alert('Contact form is not yet enabled. Please email me directly at ' + personalInfo.email)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="relative py-20 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-900 overflow-hidden">
      {/* Ocean Wave Animation Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/30 to-transparent"
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-cyan-600/20 to-transparent"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5
          }}
        />
        {/* Floating Ships */}
        <motion.div
          className="absolute top-20 left-10 opacity-20"
          animate={{
            x: [0, 30, 0],
            y: [0, -10, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ship className="h-16 w-16 text-white" />
        </motion.div>
        <motion.div
          className="absolute top-40 right-20 opacity-20"
          animate={{
            x: [0, -20, 0],
            y: [0, -15, 0],
            rotate: [5, -5, 5]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Ship className="h-20 w-20 text-white" />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Wanted Poster Style Header */}
          <div className="inline-block relative">
            {/* Custom Straw Hat in top left */}
            <div className="absolute -top-8 -left-8 z-20">
              <motion.div
                animate={{ rotate: [-15, 10, -15] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="transform -rotate-12"
              >
                {/* Custom straw hat made with CSS */}
                <div className="relative">
                  {/* Hat top */}
                  <div className="w-24 h-24 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                  {/* Hat brim */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-br from-yellow-400 to-amber-500 rounded-full shadow-lg"></div>
                  {/* Red band */}
                  <div className="absolute top-1/2 left-0 right-0 h-3 bg-red-600 transform -translate-y-1/2"></div>
                </div>
              </motion.div>
            </div>
            
            <motion.div
              initial={{ rotate: -5 }}
              animate={{ rotate: [- 5, 5, -5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -inset-4 bg-gradient-to-r from-yellow-400 to-amber-600 rounded-lg opacity-30 blur-lg"
            />
            <div className="relative bg-gradient-to-b from-amber-100 to-yellow-200 dark:from-amber-900 dark:to-yellow-900 p-8 rounded-lg border-8 border-amber-800 dark:border-amber-600 shadow-2xl transform -rotate-2">
              
              {/* Corner Anchors */}
              <div className="absolute top-3 right-3">
                <Anchor className="h-5 w-5 text-amber-700 dark:text-amber-300 opacity-60" />
              </div>
              <div className="absolute bottom-3 left-3">
                <Anchor className="h-5 w-5 text-amber-700 dark:text-amber-300 opacity-60" />
              </div>
              
              <h2 className="text-3xl sm:text-5xl font-black text-amber-900 dark:text-amber-100 mb-3 uppercase tracking-wider transform rotate-2">
                WANTED
              </h2>
              <h3 className="text-2xl sm:text-3xl font-black text-amber-800 dark:text-amber-200 uppercase mb-2">
                New Crew Member
              </h3>
              <p className="text-lg sm:text-xl font-bold text-blue-700 dark:text-blue-400">
                For Epic Adventures
              </p>
              <div className="flex items-center justify-center mt-4">
                <Ship className="h-8 w-8 text-blue-700 dark:text-blue-400 animate-pulse" />
              </div>
            </div>
          </div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl text-white mt-12 max-w-3xl mx-auto font-bold"
          >
            "I'm gonna be King of the Developers! Join my crew for the greatest coding adventure!"
          </motion.p>
          <p className="text-lg text-cyan-300 mt-4 max-w-3xl mx-auto">
            Set sail with me on new projects and technological treasures across the Grand Line of innovation!
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information - Log Pose Style */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-100 to-yellow-100 dark:from-amber-900/50 dark:to-yellow-900/50 backdrop-blur-md rounded-2xl p-8 border-4 border-amber-700 dark:border-amber-500 shadow-2xl">
              <div className="flex items-center mb-8">
                <Compass className="h-8 w-8 text-amber-700 dark:text-amber-400 mr-3 animate-spin-slow" />
                <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 uppercase">
                  Navigation Log
                </h3>
              </div>

              <div className="space-y-6">
                {/* Email - Den Den Mushi */}
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-blue-600/20 dark:bg-blue-400/20 rounded-lg mr-4 group-hover:bg-blue-600/30 transition-colors">
                    <Mail className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1 uppercase text-sm">
                      Den Den Mushi
                    </h4>
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-amber-700 dark:text-amber-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </motion.div>

                {/* Phone - Marine Contact */}
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-green-600/20 dark:bg-green-400/20 rounded-lg mr-4 group-hover:bg-green-600/30 transition-colors">
                    <Phone className="h-6 w-6 text-green-700 dark:text-green-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1 uppercase text-sm">
                      Marine Line
                    </h4>
                    <a 
                      href={`tel:${personalInfo.phone}`}
                      className="text-amber-700 dark:text-amber-300 hover:text-green-600 dark:hover:text-green-400 transition-colors font-medium"
                    >
                      {personalInfo.phone}
                    </a>
                  </div>
                </motion.div>

                {/* Location - Current Island */}
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 5 }}
                >
                  <div className="p-3 bg-red-600/20 dark:bg-red-400/20 rounded-lg mr-4 group-hover:bg-red-600/30 transition-colors">
                    <MapPin className="h-6 w-6 text-red-700 dark:text-red-300" />
                  </div>
                  <div>
                    <h4 className="font-bold text-amber-900 dark:text-amber-100 mb-1 uppercase text-sm">
                      Current Island
                    </h4>
                    <p className="text-amber-700 dark:text-amber-300 font-medium">
                      {personalInfo.location}
                    </p>
                    <p className="text-xs text-amber-600 dark:text-amber-400 mt-1">
                      East Blue → Grand Line
                    </p>
                  </div>
                </motion.div>
              </div>

              {/* Crew Links - Jolly Roger Style */}
              <div className="mt-12">
                <h4 className="font-black text-amber-900 dark:text-amber-100 mb-4 uppercase flex items-center">
                  <Flag className="h-5 w-5 mr-2" />
                  Join the Crew
                </h4>
                <SocialLinks variant="contact" />
              </div>

              {/* Bounty */}
              <motion.div 
                className="mt-8 p-4 bg-red-600/20 dark:bg-red-400/20 rounded-lg border-2 border-red-700 dark:border-red-500"
                animate={{
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-xs font-bold text-red-800 dark:text-red-300 uppercase">Current Bounty:</p>
                <p className="text-2xl font-black text-red-900 dark:text-red-200">
                  ฿ 1,000,000,000
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Treasure Map Style */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-900/50 dark:to-yellow-900/50 backdrop-blur-md rounded-2xl p-8 border-4 border-amber-700 dark:border-amber-500 shadow-2xl">
              <div className="flex items-center mb-6">
                <Ship className="h-8 w-8 text-amber-700 dark:text-amber-400 mr-3" />
                <h3 className="text-2xl font-black text-amber-900 dark:text-amber-100 uppercase">
                  Send a Message in a Bottle
                </h3>
              </div>
              
              <div className="mb-6 p-4 bg-blue-100 dark:bg-blue-900/30 border-2 border-blue-400 dark:border-blue-600 rounded-lg">
                <p className="text-blue-800 dark:text-blue-200 text-sm font-bold">
                  <strong>Yohohoho!</strong> The message bottle isn't sailing yet! Send a Den Den Mushi call to{' '}
                  <a href={`mailto:${personalInfo.email}`} className="underline hover:no-underline text-blue-600 dark:text-blue-400">
                    {personalInfo.email}
                  </a>
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2 uppercase">
                      Pirate Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      disabled
                      className="w-full px-4 py-3 border-2 border-amber-600 dark:border-amber-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-amber-900 dark:text-amber-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold placeholder-amber-400"
                      placeholder="Monkey D. Luffy"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2 uppercase">
                      Den Den Mushi *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled
                      className="w-full px-4 py-3 border-2 border-amber-600 dark:border-amber-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-amber-900 dark:text-amber-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold placeholder-amber-400"
                      placeholder="pirate@grandline.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2 uppercase">
                    Quest Title *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    disabled
                    className="w-full px-4 py-3 border-2 border-amber-600 dark:border-amber-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-amber-900 dark:text-amber-100 disabled:opacity-50 disabled:cursor-not-allowed font-bold placeholder-amber-400"
                    placeholder="Finding the One Piece (Project)"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-amber-800 dark:text-amber-200 mb-2 uppercase">
                    Your Adventure Story *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    disabled
                    className="w-full px-4 py-3 border-2 border-amber-600 dark:border-amber-500 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white/80 dark:bg-gray-800/80 text-amber-900 dark:text-amber-100 disabled:opacity-50 disabled:cursor-not-allowed resize-none font-bold placeholder-amber-400"
                    placeholder="Tell me about your grand adventure or the treasure you seek!"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-black uppercase tracking-wider transition-all shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed text-lg border-2 border-red-800"
                >
                  <Anchor className="h-6 w-6 mr-2 animate-pulse" />
                  Set Sail!
                </motion.button>
              </form>

              {/* Straw Hat Symbol */}
              <motion.div 
                className="text-center mt-8"
                animate={{
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <p className="text-3xl">👒</p>
                <p className="text-xs font-bold text-amber-700 dark:text-amber-300 mt-2 uppercase">
                  Future Pirate King's Developer
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}