'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, Tag } from 'lucide-react'
import Link from 'next/link'

// Placeholder blog posts - these would normally come from a CMS or markdown files
const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable Systems at Amazon: Lessons from the Kindle Platform',
    description: 'Insights from working on document conversion systems that process millions of files daily, including performance optimization techniques and reliability patterns.',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'scalable-systems-amazon-kindle',
    tags: ['System Design', 'Performance', 'AWS'],
    published: true
  },
  {
    id: '2',
    title: 'Integrating AI into Real-World Applications: A Practical Guide',
    description: 'How I built LinkinSync with LangChain and Llama3.2, including challenges faced and solutions implemented for production-ready AI features.',
    date: '2024-02-10',
    readTime: '12 min read',
    slug: 'integrating-ai-real-world-applications',
    tags: ['AI', 'LangChain', 'React'],
    published: true
  },
  {
    id: '3',
    title: 'From Startup to Scale: Performance Optimization at Jio Platforms',
    description: 'How we achieved 70% improvement in data retrieval times using Redis caching and built debugging infrastructure that reduced issue resolution by 83%.',
    date: '2024-03-05',
    readTime: '10 min read',
    slug: 'performance-optimization-jio-platforms',
    tags: ['Performance', 'Caching', 'DevOps'],
    published: true
  },
  {
    id: '4',
    title: 'The Future of Software Development: AI-Powered Development Tools',
    description: 'Exploring how AI is transforming the development workflow and what it means for software engineers in the next decade.',
    date: '2024-04-01',
    readTime: '6 min read',
    slug: 'future-software-development-ai-tools',
    tags: ['AI', 'Future Tech', 'Development'],
    published: false
  }
]

export function BlogList() {
  const publishedPosts = blogPosts.filter(post => post.published)

  return (
    <section className="py-20 bg-white dark:bg-gray-900 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Blog
          </h1>
          <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Insights on software engineering, AI integration, system design, and lessons learned from building scalable applications
          </p>
        </motion.div>

        {publishedPosts.length > 0 ? (
          <div className="max-w-4xl mx-auto">
            {publishedPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="mb-12 last:mb-0 bg-gray-50 dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg transition-shadow"
              >
                {/* Article Header */}
                <div className="mb-6">
                  <Link 
                    href={`/blog/${post.slug}`}
                    className="group"
                  >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                    {post.description}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {post.readTime}
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-medium hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Read Full Article →
                </Link>
              </motion.article>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-16"
          >
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-12 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Coming Soon!
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                I'm currently working on some exciting technical articles about system design, 
                AI integration, and performance optimization. Stay tuned!
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors"
              >
                Get Notified
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}