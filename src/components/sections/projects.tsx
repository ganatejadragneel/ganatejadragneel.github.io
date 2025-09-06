'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ExternalLink, Github, Calendar, Star } from 'lucide-react'
import Image from 'next/image'
import { projects } from '@/lib/data'

const categories = ['All', 'Featured', 'AI/ML', 'Full-Stack', 'System Design']

export function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  const filteredProjects = projects.filter(project => {
    if (activeCategory === 'All') return true
    if (activeCategory === 'Featured') return project.featured
    if (activeCategory === 'AI/ML') return project.technologies.some(tech => 
      tech.includes('AI') || tech.includes('OpenAI') || tech.includes('LangChain') || tech.includes('Llama')
    )
    if (activeCategory === 'Full-Stack') return project.technologies.some(tech => 
      tech.includes('React') || tech.includes('Next') || tech.includes('Angular')
    )
    if (activeCategory === 'System Design') return project.technologies.some(tech => 
      tech.includes('C++') || tech.includes('Java') || tech.includes('Go') || tech.includes('Kafka')
    )
    return true
  })

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my work spanning AI integration, system design, and full-stack development
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20 overflow-hidden">
                {project.featured && (
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                      <Star className="h-3 w-3 mr-1" />
                      Featured
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 right-4 z-10">
                  <span className="px-2 py-1 bg-black/20 backdrop-blur-sm text-white text-xs rounded-full">
                    {project.year}
                  </span>
                </div>

                {/* Placeholder for project image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-500/20 to-blue-500/20">
                  <div className="text-primary-600 dark:text-primary-400 text-6xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>

                {/* Overlay on hover */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="flex space-x-4">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-5 w-5 text-white" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-5 w-5 text-white" />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 text-xs rounded-md">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    {project.year}
                  </div>
                  
                  <div className="flex space-x-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View live project"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        aria-label="View source code"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}