import { Metadata } from 'next'
import { BlogList } from '@/components/blog/blog-list'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Technical articles and insights on software engineering, AI, and system design.',
}

export default function BlogPage() {
  return (
    <div className="pt-16">
      <BlogList />
    </div>
  )
}