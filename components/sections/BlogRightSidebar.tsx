import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/types';

const BlogRightSidebar: React.FC = () => {
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

  const categories = [
    { name: 'Strategy', count: 12 },
    { name: 'Digital', count: 8 },
    { name: 'Marketing', count: 15 },
    { name: 'Leadership', count: 6 },
    { name: 'Sustainability', count: 4 },
    { name: 'Customer Experience', count: 10 }
  ];

  const recentPosts = blogPosts.slice(0, 4);

  return (
    <section className="tj-blog-right-sidebar-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-posts">
              {blogPosts.map((post, index) => (
                <div key={post.id} className="blog-post-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="blog-post-img">
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
                  <div className="blog-post-content">
                    <h3 className="post-title">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="post-excerpt">{post.excerpt}</p>
                    <div className="post-footer">
                      <div className="post-author">
                        <span>By {post.author}</span>
                      </div>
                      <Link href={`/blog/${post.slug}`} className="read-more">
                        Read More <i className="tji-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="blog-pagination wow fadeInUp" data-wow-delay=".8s">
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
          
          <div className="col-xl-4 col-lg-5">
            <div className="blog-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">Search</h4>
                <div className="search-form">
                  <form>
                    <input type="text" placeholder="Search articles..." />
                    <button type="submit">
                      <i className="tji-search"></i>
                    </button>
                  </form>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Categories</h4>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link href={`/blog?category=${category.name.toLowerCase()}`}>
                        {category.name}
                        <span className="count">({category.count})</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
                <h4 className="widget-title">Recent Posts</h4>
                <div className="recent-posts">
                  {recentPosts.map((post, index) => (
                    <div key={index} className="recent-post">
                      <div className="post-img">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          width={80}
                          height={60}
                        />
                      </div>
                      <div className="post-content">
                        <h6 className="post-title">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h6>
                        <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".9s">
                <h4 className="widget-title">Newsletter</h4>
                <p className="newsletter-desc">
                  Subscribe to our newsletter for the latest business insights and industry trends.
                </p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Enter your email" required />
                  <button type="submit" className="tj-primary-btn">
                    <span className="btn-text">Subscribe</span>
                  </button>
                </form>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay="1.1s">
                <h4 className="widget-title">Tags</h4>
                <div className="tags-cloud">
                  {['Strategy', 'Digital', 'Marketing', 'Leadership', 'Sustainability', 'Innovation', 'Growth', 'Technology'].map((tag, index) => (
                    <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`} className="tag">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogRightSidebar;
