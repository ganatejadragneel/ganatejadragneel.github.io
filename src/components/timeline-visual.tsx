'use client'

import { motion } from 'framer-motion'

// Timeline data combining experience and education (ordered left to right: oldest to newest)
const timelineEvents = [
  {
    id: "vit-btech",
    title: "BTech Computer Science",
    organization: "VIT",
    period: "2016-2020",
    type: "education",
    year: 2020
  },
  {
    id: "amazon-intern",
    title: "SDE Intern",
    organization: "Amazon",
    period: "Feb-Jul 2020",
    type: "experience",
    year: 2020
  },
  {
    id: "amazon-sde",
    title: "Software Development Engineer",
    organization: "Amazon",
    period: "Jul 2020-Jun 2022",
    type: "experience",
    year: 2022
  },
  {
    id: "jio",
    title: "Software Engineer",
    organization: "Reliance Jio",
    period: "Aug 2022-Aug 2023",
    type: "experience",
    year: 2023
  },
  {
    id: "umassamherst-ms",
    title: "MS Computer Science",
    organization: "UMass Amherst",
    period: "2023-2025",
    type: "education",
    year: 2024
  },
  {
    id: "mindful-performance",
    title: "Software Developer Intern",
    organization: "MindfulPerformance",
    period: "Jun-Aug 2024",
    type: "experience",
    year: 2024
  }
]

export function TimelineVisual() {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="relative py-20"
      >
        {/* Timeline container */}
        <div className="relative flex items-center justify-between">
          {timelineEvents.map((event, index) => {
            const isEducation = event.type === 'education'
            const isAbove = index % 2 === 0
            
            return (
              <div key={event.id} className="relative flex-1 flex flex-col items-center">
                {/* Event card - alternating above/below */}
                <motion.div 
                  initial={{ opacity: 0, y: isAbove ? -30 : 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8 + (index * 0.2), duration: 0.6 }}
                  className={isAbove ? 'mb-20' : 'mt-20 order-3'}
                >
                  <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg border border-gray-200 dark:border-gray-700 min-w-40 max-w-44 mx-auto`}>
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-2 leading-tight break-words">
                      {event.title}
                    </h4>
                    <p className={`text-sm font-medium mb-2 leading-tight break-words ${
                      isEducation ? 'text-green-600 dark:text-green-400' : 'text-yellow-600 dark:text-yellow-400'
                    }`}>
                      {event.organization}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-tight">
                      {event.period}
                    </p>
                  </div>
                </motion.div>

                {/* Vertical connector line - alternating direction */}
                <motion.div 
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 1, scaleY: 1 }}
                  transition={{ delay: 2 + (index * 0.1), duration: 0.4 }}
                  className={`w-1 h-20 ${
                    isEducation 
                      ? 'bg-gradient-to-b from-green-500 to-green-700 dark:from-green-400 dark:to-green-600' 
                      : 'bg-gradient-to-b from-yellow-500 to-yellow-600 dark:from-yellow-400 dark:to-yellow-500'
                  } shadow-sm absolute ${isAbove ? 'top-0 transform -translate-y-full' : 'bottom-0 transform translate-y-full order-2'}`}
                ></motion.div>

                {/* Timeline segments and year */}
                <div className="flex items-center w-full order-2">
                  {/* Left line segment */}
                  {index > 0 && (
                    <div className="flex-1 h-1 bg-gradient-to-r from-gray-400 to-gray-500 dark:from-gray-500 dark:to-gray-400"></div>
                  )}
                  
                  {/* Year badge - breaks the line */}
                  <motion.div 
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2 + (index * 0.1), duration: 0.4 }}
                    className="px-4 py-2 bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-full text-sm font-bold text-gray-700 dark:text-gray-300 shadow-md z-10 mx-2"
                  >
                    {event.year}
                  </motion.div>
                  
                  {/* Right line segment */}
                  {index < timelineEvents.length - 1 && (
                    <div className="flex-1 h-1 bg-gradient-to-r from-gray-500 to-gray-400 dark:from-gray-400 dark:to-gray-500"></div>
                  )}
                </div>
              </div>
            )
          })}
        </div>
        
        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.8 }}
          className="flex justify-center items-center gap-6 mt-12 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Education</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}