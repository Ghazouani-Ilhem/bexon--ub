import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogDetails: React.FC = () => {
  const blogPost = {
    title: 'The Future of Business Strategy in 2024',
    author: 'John Doe',
    date: '2024-01-15',
    category: 'Strategy',
    image: '/assets/images/blog/blog-1.webp',
    content: `
      <p>As we step into 2024, the business landscape continues to evolve at an unprecedented pace. Organizations that want to stay competitive must adapt their strategies to meet the challenges and opportunities of the digital age.</p>
      
      <p>In this comprehensive guide, we'll explore the key trends and strategies that will shape business success in the coming year. From artificial intelligence and automation to sustainability and remote work, we'll cover everything you need to know to position your organization for growth.</p>
      
      <h3>1. Embracing Digital Transformation</h3>
      <p>Digital transformation is no longer optional—it's essential for survival. Companies that have successfully digitized their operations are seeing significant improvements in efficiency, customer satisfaction, and profitability.</p>
      
      <h3>2. The Rise of Artificial Intelligence</h3>
      <p>AI is revolutionizing how businesses operate, from customer service chatbots to predictive analytics. Organizations that invest in AI technologies will have a significant competitive advantage.</p>
      
      <h3>3. Sustainability as a Business Strategy</h3>
      <p>Environmental responsibility is becoming a key differentiator for businesses. Companies that prioritize sustainability are not only doing good for the planet but also attracting customers and investors who value ethical practices.</p>
      
      <h3>4. The Future of Work</h3>
      <p>Remote and hybrid work models are here to stay. Organizations that create flexible, inclusive work environments will attract and retain top talent.</p>
      
      <p>By implementing these strategies and staying ahead of emerging trends, your organization can position itself for success in 2024 and beyond. The key is to start now and be prepared to adapt as the business landscape continues to evolve.</p>
    `,
    tags: ['Strategy', 'Digital Transformation', 'AI', 'Sustainability', 'Future of Work'],
    relatedPosts: [
      {
        title: 'Digital Transformation Best Practices',
        image: '/assets/images/blog/blog-2.webp',
        date: '2024-01-10',
        href: '/blog/digital-transformation-best-practices'
      },
      {
        title: 'Customer Experience Optimization',
        image: '/assets/images/blog/blog-3.webp',
        date: '2024-01-05',
        href: '/blog/customer-experience-optimization'
      },
      {
        title: 'Sustainable Business Practices',
        image: '/assets/images/blog/blog-4.webp',
        date: '2024-01-01',
        href: '/blog/sustainable-business-practices'
      }
    ]
  };

  return (
    <section className="tj-blog-details-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="blog-details-content">
              <div className="blog-meta wow fadeInUp" data-wow-delay=".3s">
                <span className="category">{blogPost.category}</span>
                <span className="date">{new Date(blogPost.date).toLocaleDateString()}</span>
                <span className="author">By {blogPost.author}</span>
              </div>
              
              <h1 className="blog-title wow fadeInUp" data-wow-delay=".5s">{blogPost.title}</h1>
              
              <div className="blog-img wow fadeInUp" data-wow-delay=".7s">
                <Image 
                  src={blogPost.image} 
                  alt={blogPost.title} 
                  width={800}
                  height={400}
                />
              </div>
              
              <div className="blog-content wow fadeInUp" data-wow-delay=".9s">
                <div dangerouslySetInnerHTML={{ __html: blogPost.content }} />
              </div>
              
              <div className="blog-tags wow fadeInUp" data-wow-delay="1.1s">
                <h5 className="tags-title">Tags:</h5>
                <div className="tags-list">
                  {blogPost.tags.map((tag, index) => (
                    <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`} className="tag">
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>
              
              <div className="blog-share wow fadeInUp" data-wow-delay="1.3s">
                <h5 className="share-title">Share this article:</h5>
                <div className="share-links">
                  <a href="#" className="share-link facebook">
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a href="#" className="share-link twitter">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a href="#" className="share-link linkedin">
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="share-link email">
                    <i className="fa-solid fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="blog-sidebar">
              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".3s">
                <h4 className="widget-title">About the Author</h4>
                <div className="author-info">
                  <div className="author-img">
                    <Image 
                      src="/assets/images/team/team-1.webp" 
                      alt="Author" 
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className="author-details">
                    <h5 className="author-name">{blogPost.author}</h5>
                    <p className="author-bio">
                      Senior Business Consultant with 10+ years of experience in strategic planning and digital transformation.
                    </p>
                    <div className="author-social">
                      <a href="#" className="social-link">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                      <a href="#" className="social-link">
                        <i className="fa-brands fa-x-twitter"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".5s">
                <h4 className="widget-title">Related Articles</h4>
                <div className="related-posts">
                  {blogPost.relatedPosts.map((post, index) => (
                    <div key={index} className="related-post">
                      <div className="post-img">
                        <Image 
                          src={post.image} 
                          alt={post.title} 
                          width={100}
                          height={80}
                        />
                      </div>
                      <div className="post-content">
                        <h6 className="post-title">
                          <Link href={post.href}>{post.title}</Link>
                        </h6>
                        <span className="post-date">{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget wow fadeInUp" data-wow-delay=".7s">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
