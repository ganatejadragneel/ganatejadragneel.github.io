'use client'

import { motion } from 'framer-motion'

// Timeline events with alternating positions
const timelineEvents = [
  {
    id: "vit-btech",
    title: "BTech Computer Science",
    organization: "VIT",
    period: "2016-2020",
    type: "education",
    year: 2020,
    position: "above"
  },
  {
    id: "amazon-intern",
    title: "SDE Intern",
    organization: "Amazon",
    period: "Feb-Jul 2020",
    type: "experience",
    year: 2020,
    position: "below"
  },
  {
    id: "amazon-sde",
    title: "Software Development Engineer",
    organization: "Amazon",
    period: "2020-2022",
    type: "experience",
    year: 2021,
    position: "above"
  },
  {
    id: "jio",
    title: "Software Engineer",
    organization: "Reliance Jio",
    period: "2022-2023",
    type: "experience",
    year: 2022,
    position: "below"
  },
  {
    id: "umass-ms",
    title: "MS Computer Science",
    organization: "UMass Amherst",
    period: "2023-2025",
    type: "education",
    year: 2024,
    position: "above"
  },
  {
    id: "mindful",
    title: "Software Developer Intern",
    organization: "MindfulPerformance",
    period: "Jun-Aug 2024",
    type: "experience",
    year: 2024,
    position: "below"
  }
]

export function TimelineVisual() {
  // Get unique years for the timeline
  const uniqueYears = [...new Set(timelineEvents.map(e => e.year))].sort((a, b) => a - b)
  
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="relative"
      >
        {/* Main timeline container */}
        <div className="relative h-[240px] flex items-center justify-center">
          
          {/* Horizontal timeline line */}
          <motion.div 
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute w-full h-0.5 bg-gray-300 dark:bg-gray-600 top-1/2 transform -translate-y-1/2"
          />

          {/* Timeline with events */}
          <div className="relative w-full flex justify-between items-center">
            {timelineEvents.map((event, index) => {
              const isAbove = index % 2 === 0
              const position = (index / (timelineEvents.length - 1)) * 100
              
              return (
                <div 
                  key={event.id} 
                  className="absolute flex flex-col items-center"
                  style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                  {/* Event box */}
                  <motion.div
                    initial={{ opacity: 0, y: isAbove ? 20 : -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + (index * 0.15), duration: 0.6 }}
                    className={isAbove ? "absolute bottom-[25px]" : "absolute top-[25px]"}
                  >
                    {isAbove && (
                      <>
                        <div className={`bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-lg border-2 ${
                          event.type === 'education' 
                            ? 'border-green-200 dark:border-green-700' 
                            : 'border-yellow-200 dark:border-yellow-700'
                        } min-w-[140px] max-w-[160px] text-center`}>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">{event.title}</p>
                          <p className={`text-xs font-medium mt-1 ${
                            event.type === 'education' 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-yellow-600 dark:text-yellow-400'
                          }`}>
                            {event.organization}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{event.period}</p>
                        </div>
                        {/* Connector line */}
                        <div className={`w-0.5 h-4 ${
                          event.type === 'education'
                            ? 'bg-green-300 dark:bg-green-600'
                            : 'bg-yellow-300 dark:bg-yellow-600'
                        } mx-auto`} />
                      </>
                    )}
                    
                    {!isAbove && (
                      <>
                        {/* Connector line */}
                        <div className={`w-0.5 h-4 ${
                          event.type === 'education'
                            ? 'bg-green-300 dark:bg-green-600'
                            : 'bg-yellow-300 dark:bg-yellow-600'
                        } mx-auto`} />
                        <div className={`bg-white dark:bg-gray-800 rounded-lg px-4 py-3 shadow-lg border-2 ${
                          event.type === 'education' 
                            ? 'border-green-200 dark:border-green-700' 
                            : 'border-yellow-200 dark:border-yellow-700'
                        } min-w-[140px] max-w-[160px] text-center`}>
                          <p className="text-xs font-bold text-gray-900 dark:text-white">{event.title}</p>
                          <p className={`text-xs font-medium mt-1 ${
                            event.type === 'education' 
                              ? 'text-green-600 dark:text-green-400' 
                              : 'text-yellow-600 dark:text-yellow-400'
                          }`}>
                            {event.organization}
                          </p>
                          <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-1">{event.period}</p>
                        </div>
                      </>
                    )}
                  </motion.div>

                  {/* Timeline dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.9 + (index * 0.1), duration: 0.4 }}
                    className={`w-3 h-3 ${
                      event.type === 'education'
                        ? 'bg-green-500 dark:bg-green-400'
                        : 'bg-yellow-500 dark:bg-yellow-400'
                    } rounded-full z-10 border-2 border-white dark:border-gray-800`}
                  />
                </div>
              )
            })}
          </div>

          {/* Year markers */}
          <div className="absolute w-full flex justify-between items-center top-1/2 transform -translate-y-1/2 pointer-events-none">
            {uniqueYears.map((year, index) => {
              const position = uniqueYears.length === 1 ? 50 : (index / (uniqueYears.length - 1)) * 100
              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.5 + (index * 0.1), duration: 0.6 }}
                  className="absolute"
                  style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
                >
                  <div className="px-2 py-0.5 bg-white dark:bg-gray-800 text-[10px] font-semibold text-gray-600 dark:text-gray-400 rounded">
                    {year}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex justify-center items-center gap-6 text-xs mt-4"
        >
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
            <span className="text-gray-600 dark:text-gray-400">Education</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}