export const cn = (...classes: (string | undefined | null | false)[]) => {
  return classes.filter(Boolean).join(' ')
}

export const styles = {
  text: {
    heading: 'text-gray-900 dark:text-white',
    subheading: 'text-gray-700 dark:text-gray-300',
    body: 'text-gray-600 dark:text-gray-400',
    muted: 'text-gray-500 dark:text-gray-500',
    primary: 'text-primary-600 dark:text-primary-400'
  },
  
  background: {
    card: 'bg-white dark:bg-gray-800',
    cardHover: 'hover:bg-gray-50 dark:hover:bg-gray-700',
    section: 'bg-gray-50 dark:bg-gray-900',
    gradient: {
      primary: 'bg-gradient-to-br from-primary-100 to-blue-100 dark:from-primary-900/20 dark:to-blue-900/20',
      subtle: 'bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20'
    }
  },
  
  border: {
    default: 'border-gray-200 dark:border-gray-700',
    hover: 'hover:border-primary-400 dark:hover:border-primary-500'
  },
  
  shadow: {
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
    glow: 'shadow-lg hover:shadow-xl hover:shadow-primary-500/20'
  },
  
  container: {
    default: 'container mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-20 sm:py-32'
  },
  
  transition: {
    default: 'transition-all duration-300',
    fast: 'transition-all duration-150',
    slow: 'transition-all duration-500'
  }
}

export const getSkillColor = (category: string) => {
  const colors: Record<string, string> = {
    'Languages': 'from-blue-500 to-cyan-500',
    'Frontend': 'from-purple-500 to-pink-500',
    'Backend': 'from-green-500 to-emerald-500',
    'Database': 'from-orange-500 to-red-500',
    'DevOps': 'from-indigo-500 to-purple-500',
    'Tools': 'from-gray-500 to-gray-600'
  }
  return colors[category] || 'from-gray-500 to-gray-600'
}