'use client'

import { motion } from 'framer-motion'
import { animationConfig } from '@/lib/animations'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  className?: string
}

export function SectionHeader({ title, subtitle, className = '' }: SectionHeaderProps) {
  return (
    <motion.div 
      {...animationConfig.fadeInUp}
      className={`text-center mb-12 ${className}`}
    >
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
      </h2>
      <div className="w-20 h-1 bg-primary-600 mx-auto mb-8"></div>
      {subtitle && (
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}