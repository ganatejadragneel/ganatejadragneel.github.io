'use client'

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Code, Trophy, Users, Lightbulb } from 'lucide-react'
import { personalInfo } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { animationConfig } from '@/lib/animations'
import { styles, cn } from '@/lib/styles'

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
      <div className={styles.container.default}>
        <SectionHeader title="About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio Section */}
          <motion.div {...animationConfig.slideInLeft}>
            <div className="flex items-center mb-6">
              <MapPin className="h-5 w-5 text-primary-600 mr-2" />
              <span className={styles.text.body}>{personalInfo.location}</span>
            </div>
            
            <p className={cn("text-lg leading-relaxed mb-8", styles.text.subheading)}>
              {personalInfo.bio}
            </p>

            {/* Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  {...animationConfig.fadeInUp}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="p-2 bg-primary-100 dark:bg-primary-900/20 rounded-lg mr-4 flex-shrink-0">
                    <highlight.icon className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className={cn("font-semibold mb-1", styles.text.heading)}>
                      {highlight.title}
                    </h3>
                    <p className={cn("text-sm", styles.text.body)}>
                      {highlight.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            {...animationConfig.slideInRight}
            className={cn("rounded-2xl p-8", styles.background.card)}
          >
            <div className="flex items-center mb-8">
              <GraduationCap className="h-6 w-6 text-primary-600 mr-3" />
              <h3 className={cn("text-2xl font-bold", styles.text.heading)}>Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  {...animationConfig.fadeInUp}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative pl-6 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                  
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mb-3">
                      {edu.year}
                    </span>
                  </div>
                  
                  <h4 className={cn("text-lg font-semibold mb-2", styles.text.heading)}>
                    {edu.degree}
                  </h4>
                  
                  <p className={cn("font-medium mb-2", styles.text.primary)}>
                    {edu.school}
                  </p>
                  
                  <p className={cn("text-sm", styles.text.body)}>
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