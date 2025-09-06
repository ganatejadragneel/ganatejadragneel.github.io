import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Navigation } from '@/components/navigation'
import { Footer } from '@/components/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Gana Teja Akula - Software Engineer',
    template: '%s | Gana Teja Akula'
  },
  description: 'Experienced software engineer with 3+ years building scalable systems that serve millions of users worldwide. Expertise in full-stack development, AI integration, and system optimization.',
  keywords: [
    'Gana Teja Akula',
    'Software Engineer',
    'Full Stack Developer',
    'React',
    'Next.js',
    'Python',
    'C++',
    'Amazon',
    'Jio',
    'UMass Amherst',
    'AI',
    'Machine Learning',
    'System Design'
  ],
  authors: [{ name: 'Gana Teja Akula' }],
  creator: 'Gana Teja Akula',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ganatejadragneel.github.io/portfolio-new/',
    title: 'Gana Teja Akula - Software Engineer',
    description: 'Experienced software engineer building scalable systems that serve millions of users worldwide.',
    siteName: 'Gana Teja Akula Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gana Teja Akula - Software Engineer',
    description: 'Experienced software engineer building scalable systems that serve millions of users worldwide.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
