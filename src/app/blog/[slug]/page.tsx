import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { BlogPost } from '@/components/blog/blog-post'

// This would normally fetch from a CMS or file system
const blogPosts = [
  {
    id: '1',
    title: 'Building Scalable Systems at Amazon: Lessons from the Kindle Platform',
    description: 'Insights from working on document conversion systems that process millions of files daily, including performance optimization techniques and reliability patterns.',
    date: '2024-01-15',
    readTime: '8 min read',
    slug: 'scalable-systems-amazon-kindle',
    tags: ['System Design', 'Performance', 'AWS'],
    published: true,
    content: `
# Building Scalable Systems at Amazon: Lessons from the Kindle Platform

Working on Amazon's Kindle Core Conversion Team was an incredible learning experience that taught me the fundamentals of building systems at massive scale. In this post, I'll share key insights from developing and maintaining systems that process millions of documents daily.

## The Challenge

When I joined the team, we were responsible for converting various document formats (PDF, DOCX, HTML) into Kindle-compatible formats like EPUB and AZW. The system needed to:

- Handle millions of documents per day
- Maintain high fidelity across complex document structures  
- Process documents with sub-second latency for most formats
- Scale automatically based on demand
- Maintain 99.9%+ uptime

## Architecture Principles

### 1. Horizontal Scalability

Our system was designed from the ground up to scale horizontally. Instead of trying to make individual machines more powerful, we focused on distributing work across multiple instances.

\`\`\`cpp
// Simplified example of our worker pattern
class DocumentProcessor {
private:
    ThreadPool thread_pool_;
    MessageQueue input_queue_;
    
public:
    void ProcessDocument(const Document& doc) {
        thread_pool_.Submit([this, doc]() {
            auto result = ConvertDocument(doc);
            PublishResult(result);
        });
    }
};
\`\`\`

### 2. Async Processing

Everything was asynchronous. Documents would be queued for processing, and clients would poll for results or receive callbacks when conversion completed.

### 3. Circuit Breakers

We implemented circuit breakers for external dependencies to prevent cascading failures.

## Performance Optimizations

The most significant improvement I led was optimizing our PDF to EPUB conversion pipeline, which achieved a 30% performance improvement. Here's what we did:

### Memory Management

C++ gave us fine-grained control over memory allocation, which was crucial for processing large documents efficiently.

### Caching Strategy

We implemented multiple levels of caching:
- Font cache for common typefaces
- Image processing cache for repeated images
- Template cache for document structures

### Parallel Processing

We parallelized independent operations like image processing and text extraction.

## Reliability Patterns

### Health Checks

Every service exposed health check endpoints that monitored:
- Memory usage
- Queue depths  
- Response times
- Error rates

### Graceful Degradation

When under heavy load, the system would automatically reduce quality settings to maintain throughput.

### Dead Letter Queues

Failed documents were moved to dead letter queues for manual investigation.

## Lessons Learned

1. **Profile Before Optimizing**: We spent weeks optimizing the wrong bottlenecks before proper profiling revealed the real issues.

2. **Monitor Everything**: You can't fix what you can't measure. Comprehensive monitoring was essential.

3. **Design for Failure**: Systems will fail. Design with failure in mind from day one.

4. **Incremental Deployment**: We used feature flags and gradual rollouts for all changes.

## Impact

The systems I worked on processed over 100 million documents during my tenure, with the performance improvements I contributed saving thousands of compute hours monthly.

Building systems at this scale taught me the importance of thinking beyond individual features to consider the entire system's health and scalability.
    `
  }
]

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)
  
  if (!post) {
    return {
      title: 'Post Not Found'
    }
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
    }
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find(p => p.slug === slug)

  if (!post || !post.published) {
    notFound()
  }

  return (
    <div className="pt-16">
      <BlogPost post={post} />
    </div>
  )
}

export async function generateStaticParams() {
  return blogPosts
    .filter(post => post.published)
    .map((post) => ({
      slug: post.slug,
    }))
}