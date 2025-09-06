'use client'

import { motion } from 'framer-motion'
import { Code, Database, Cloud, Brain, Wrench } from 'lucide-react'
import { skills } from '@/lib/data'
import { SectionHeader } from '@/components/ui/section-header'
import { styles, cn } from '@/lib/styles'

const categoryIcons = {
  languages: Code,
  frameworks: Wrench,
  cloud: Cloud,
  ai: Brain,
  tools: Database
}

const categoryLabels = {
  languages: 'Programming Languages',
  frameworks: 'Frameworks & Libraries',
  cloud: 'Cloud & DevOps',
  ai: 'AI & Machine Learning',
  tools: 'Databases & Tools'
}

const categoryColors = {
  languages: 'bg-blue-500',
  frameworks: 'bg-green-500',
  cloud: 'bg-purple-500',
  ai: 'bg-orange-500',
  tools: 'bg-red-500'
}

export function SkillsSection() {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {} as Record<string, typeof skills>)

  return (
    <section id="skills" className={cn("py-20", styles.background.section)}>
      <div className={styles.container.default}>
        <SectionHeader 
          title="Technical Skills"
          subtitle="Expertise across full-stack development, cloud infrastructure, and cutting-edge AI technologies"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills], index) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons]
            const colorClass = categoryColors[category as keyof typeof categoryColors]
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className={`p-3 ${colorClass} rounded-lg mr-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-4">
                  {categorySkills
                    .sort((a, b) => b.proficiency - a.proficiency)
                    .map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: (index * 0.1) + (skillIndex * 0.05) }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-gray-700 dark:text-gray-300 font-medium">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.proficiency}%
                        </span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          transition={{ duration: 1, delay: (index * 0.1) + (skillIndex * 0.05) + 0.2 }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${colorClass}`}
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-blue-600 rounded-2xl p-8 text-center text-white"
        >
          <h3 className="text-2xl font-bold mb-4">
            Ready to Build Something Amazing?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            With expertise spanning multiple domains and a passion for innovation, 
            I'm always excited to tackle new challenges and create impactful solutions.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center px-8 py-3 bg-white text-primary-600 rounded-lg font-medium hover:bg-gray-100 transition-colors shadow-lg"
          >
            Let's Work Together
          </button>
        </motion.div>
      </div>
    </section>
  )
}