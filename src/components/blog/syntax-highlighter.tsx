'use client'

import { useState, useEffect } from 'react'

interface LazyCodeBlockProps {
  language: string
  children: string
  className?: string
  [key: string]: any
}

export function LazyCodeBlock({ language, children, className, ...props }: LazyCodeBlockProps) {
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null)
  const [theme, setTheme] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadComponents = async () => {
      try {
        const [{ Prism }, { oneDark }] = await Promise.all([
          import('react-syntax-highlighter'),
          import('react-syntax-highlighter/dist/cjs/styles/prism')
        ])
        
        setSyntaxHighlighter(() => Prism)
        setTheme(oneDark)
        setLoading(false)
      } catch (error) {
        console.error('Failed to load syntax highlighter:', error)
        setLoading(false)
      }
    }

    loadComponents()
  }, [])

  if (loading || !SyntaxHighlighter || !theme) {
    return (
      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
        <pre className="text-gray-300 text-sm font-mono">
          <code>{children}</code>
        </pre>
      </div>
    )
  }

  return (
    <SyntaxHighlighter
      style={theme}
      language={language}
      PreTag="div"
      className={`rounded-lg ${className || ''}`}
      {...props}
    >
      {children}
    </SyntaxHighlighter>
  )
}