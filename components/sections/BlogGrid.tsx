import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

const BlogGrid: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of Business Strategy in 2024',
      excerpt: 'Discover the key trends and strategies that will shape business success in the coming year.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-1.webp',
      author: 'John Doe',
      date: '2024-01-15',
      category: 'Strategy',
      slug: 'future-business-strategy-2024'
    },
    {
      id: '2',
      title: 'Digital Transformation Best Practices',
      excerpt: 'Learn how to successfully navigate digital transformation in your organization.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-2.webp',
      author: 'Jane Smith',
      date: '2024-01-10',
      category: 'Digital',
      slug: 'digital-transformation-best-practices'
    },
    {
      id: '3',
      title: 'Customer Experience Optimization',
      excerpt: 'Improve your customer experience with these proven strategies and techniques.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-3.webp',
      author: 'Mike Johnson',
      date: '2024-01-05',
      category: 'Customer Experience',
      slug: 'customer-experience-optimization'
    },
    {
      id: '4',
      title: 'Sustainable Business Practices',
      excerpt: 'How to integrate sustainability into your business model for long-term success.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-4.webp',
      author: 'Sarah Wilson',
      date: '2024-01-01',
      category: 'Sustainability',
      slug: 'sustainable-business-practices'
    },
    {
      id: '5',
      title: 'Marketing Trends for 2024',
      excerpt: 'Stay ahead with the latest marketing trends and strategies for the new year.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-5.webp',
      author: 'David Brown',
      date: '2023-12-28',
      category: 'Marketing',
      slug: 'marketing-trends-2024'
    },
    {
      id: '6',
      title: 'Leadership in Remote Teams',
      excerpt: 'Effective leadership strategies for managing remote and hybrid teams.',
      content: 'Full article content...',
      image: '/assets/images/blog/blog-6.webp',
      author: 'Lisa Davis',
      date: '2023-12-25',
      category: 'Leadership',
      slug: 'leadership-remote-teams'
    }
  ];

  return (
    <section className="tj-blog-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Latest Articles
              </span>
              <h2 className="sec-title title-anim">
                Business <span>Insights</span> & Expert Advice
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                Stay informed with our latest articles on business strategy, digital transformation, and industry trends.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row row-gap-4">
          {blogPosts.map((post, index) => (
            <div key={post.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="blog-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="blog-img">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    width={400}
                    height={250}
                  />
                  <div className="blog-meta">
                    <span className="category">{post.category}</span>
                    <span className="date">{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
                <div className="blog-content">
                  <h4 className="title">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h4>
                  <p className="excerpt">{post.excerpt}</p>
                  <div className="blog-footer">
                    <div className="author">
                      <span>By {post.author}</span>
                    </div>
                    <Link href={`/blog/${post.slug}`} className="read-more">
                      Read More <i className="tji-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="blog-pagination text-center wow fadeInUp" data-wow-delay=".8s">
              <nav aria-label="Blog pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">2</Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">3</Link>
                  </li>
                  <li className="page-item">
                    <Link href="#" className="page-link">Next</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
