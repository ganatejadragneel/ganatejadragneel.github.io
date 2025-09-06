import Link from 'next/link'
import { Github, Linkedin, Mail } from 'lucide-react'
import { personalInfo } from '@/lib/data'

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Personal Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Contact Information
            </h3>
            <div className="space-y-3 text-gray-600 dark:text-gray-400">
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <a href={`mailto:${personalInfo.email}`} className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                  {personalInfo.email}
                </a>
              </p>
              <p>{personalInfo.location}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link href="#about" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                About
              </Link>
              <Link href="#projects" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Projects
              </Link>
              <Link href="/blog" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Blog
              </Link>
              <Link href="#contact" className="block text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors group"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-2 bg-gray-200 dark:bg-gray-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 transition-colors group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © 2024 {personalInfo.name}. All rights reserved.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2 md:mt-0">
              Built with Next.js & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}