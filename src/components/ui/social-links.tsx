'use client'

import { Github, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'
import { personalInfo } from '@/lib/data'

export type SocialLinkVariant = 'default' | 'dbz' | 'footer' | 'contact'

interface SocialLinksProps {
  variant?: SocialLinkVariant
  className?: string
  showPowerLevels?: boolean
}

const socialData = [
  {
    name: 'GitHub',
    href: personalInfo.github,
    icon: Github,
    power: '7000',
    ariaLabel: 'GitHub Profile'
  },
  {
    name: 'LinkedIn',
    href: personalInfo.linkedin,
    icon: Linkedin,
    power: '6500',
    ariaLabel: 'LinkedIn Profile'
  },
  {
    name: 'Email',
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    power: '8000',
    ariaLabel: 'Email'
  }
]

const variantStyles = {
  default: {
    container: 'flex items-center space-x-4',
    link: 'p-2 text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors',
    iconSize: 'h-5 w-5'
  },
  dbz: {
    container: 'hidden md:flex items-center space-x-3',
    link: 'p-2 text-yellow-300 hover:text-yellow-100 transition-colors relative group',
    iconSize: 'h-5 w-5'
  },
  footer: {
    container: 'flex items-center space-x-4 mt-6',
    link: 'p-3 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg text-white hover:from-orange-600 hover:to-red-700 transition-all transform hover:scale-110 shadow-lg hover:shadow-orange-500/50',
    iconSize: 'h-6 w-6'
  },
  contact: {
    container: 'flex justify-center space-x-4 mt-6',
    link: 'p-3 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-lg text-gray-900 hover:from-amber-500 hover:to-yellow-600 transition-all transform hover:scale-110 shadow-lg hover:shadow-amber-400/50 border-2 border-amber-600',
    iconSize: 'h-6 w-6'
  }
}

export function SocialLinks({ 
  variant = 'default', 
  className = '',
  showPowerLevels = false 
}: SocialLinksProps) {
  const styles = variantStyles[variant]
  const shouldShowPower = showPowerLevels && variant === 'dbz'

  return (
    <div className={`${styles.container} ${className}`}>
      {socialData.map((social) => {
        const Icon = social.icon
        
        return shouldShowPower ? (
          <motion.a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 360 }}
            className={styles.link}
            aria-label={social.ariaLabel}
          >
            <Icon className={styles.iconSize} />
            <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-xs font-bold text-yellow-300 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              Power: {social.power}
            </span>
          </motion.a>
        ) : (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
            aria-label={social.ariaLabel}
          >
            <Icon className={styles.iconSize} />
          </a>
        )
      })}
    </div>
  )
}