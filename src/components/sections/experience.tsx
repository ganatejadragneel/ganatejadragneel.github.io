'use client'

import { motion } from 'framer-motion'
import { Calendar, MapPin, Award, TrendingUp } from 'lucide-react'
import { experiences } from '@/lib/data'

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Over 3 years of experience building scalable systems that serve millions of users worldwide
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-6 md:left-8 top-20 w-0.5 h-full bg-primary-200 dark:bg-primary-800 -z-10"></div>
              )}

              <div className="flex flex-col md:flex-row">
                {/* Timeline Icon */}
                <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
                  <div className="w-12 h-12 md:w-16 md:h-16 bg-primary-600 rounded-full flex items-center justify-center shadow-lg">
                    <Calendar className="h-6 w-6 md:h-8 md:w-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                        {exp.position}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm font-medium rounded-full mt-2 sm:mt-0">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {exp.company}
                    </p>
                    
                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-6">
                    <ul className="space-y-3">
                      {exp.description.map((desc, descIndex) => (
                        <li key={descIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700 dark:text-gray-300 leading-relaxed">
                            {desc}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Achievements */}
                  {exp.achievements.length > 0 && (
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-lg p-4">
                      <div className="flex items-center mb-3">
                        <Award className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-2" />
                        <h4 className="font-semibold text-gray-900 dark:text-white">Key Achievements</h4>
                      </div>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start">
                            <TrendingUp className="h-4 w-4 text-green-600 dark:text-green-400 mt-0.5 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm">
                              {achievement}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}