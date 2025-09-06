'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code, Trophy, Users, Lightbulb } from 'lucide-react'
import { personalInfo } from '@/lib/data'

const highlights = [
  {
    icon: Code,
    title: "3+ Years Experience",
    description: "Building scalable systems at Amazon and Reliance Jio"
  },
  {
    icon: Users,
    title: "Millions of Users",
    description: "Systems serving millions worldwide with high reliability"
  },
  {
    icon: Trophy,
    title: "Performance Leader",
    description: "Achieved 30-70% improvements in system performance"
  },
  {
    icon: Lightbulb,
    title: "Innovation Focus",
    description: "Integrating AI and modern technologies into practical solutions"
  }
]

const education = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Massachusetts Amherst",
    year: "2025",
    courses: "Computer Architecture, Reinforcement Learning, Distributed Systems"
  },
  {
    degree: "Bachelor of Technology in Computer Science",
    school: "Vellore Institute of Technology",
    year: "2020",
    courses: "Data Structures & Algorithms, Databases, Software Engineering"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              <span className="text-gray-600 dark:text-gray-400">{personalInfo.location}</span>
            </div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4 flex-shrink-0">
                    <highlight.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8"
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-3">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.school}
                  </p>
                  
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    <strong>Relevant Coursework:</strong> {edu.courses}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}