import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const WishlistSection: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: '1',
      title: 'Business Strategy Development',
      description: 'Comprehensive business strategy development and implementation services.',
      price: '$299',
      period: '/month',
      image: '/assets/images/service/service-1.webp',
      category: 'Strategy'
    },
    {
      id: '2',
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern businesses.',
      price: '$599',
      period: '/month',
      image: '/assets/images/service/service-2.webp',
      category: 'Digital'
    },
    {
      id: '3',
      title: 'Marketing Strategy & Campaigns',
      description: 'Strategic marketing solutions to boost your brand visibility.',
      price: '$199',
      period: '/month',
      image: '/assets/images/service/service-3.webp',
      category: 'Marketing'
    }
  ]);

  const removeFromWishlist = (id: string) => {
    setWishlistItems(items => items.filter(item => item.id !== id));
  };

  return (
    <section className="tj-wishlist-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="wishlist-header wow fadeInUp" data-wow-delay=".3s">
              <h2 className="wishlist-title">My Wishlist</h2>
              <p className="wishlist-subtitle">
                Save your favorite services and solutions for easy access later.
              </p>
            </div>
          </div>
        </div>
        
        {wishlistItems.length > 0 ? (
          <div className="row">
            {wishlistItems.map((item, index) => (
              <div key={item.id} className="col-xl-4 col-lg-6 col-md-6">
                <div className="wishlist-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                  <div className="wishlist-item-img">
                    <Image 
                      src={item.image} 
                      alt={item.title} 
                      width={400}
                      height={250}
                    />
                    <button 
                      className="remove-btn"
                      onClick={() => removeFromWishlist(item.id)}
                    >
                      <i className="fa-solid fa-times"></i>
                    </button>
                  </div>
                  <div className="wishlist-item-content">
                    <div className="item-category">{item.category}</div>
                    <h4 className="item-title">
                      <Link href="/service-details">{item.title}</Link>
                    </h4>
                    <p className="item-description">{item.description}</p>
                    <div className="item-price">
                      <span className="price">{item.price}</span>
                      <span className="period">{item.period}</span>
                    </div>
                    <div className="item-actions">
                      <Link href="/contact" className="tj-primary-btn">
                        <span className="btn-text">
                          <span>Get Started</span>
                        </span>
                        <span className="btn-icon">
                          <i className="tji-arrow-right-long"></i>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="row">
            <div className="col-12">
              <div className="empty-wishlist text-center wow fadeInUp" data-wow-delay=".3s">
                <div className="empty-icon">
                  <i className="fa-regular fa-heart"></i>
                </div>
                <h3 className="empty-title">Your wishlist is empty</h3>
                <p className="empty-description">
                  Start exploring our services and add your favorites to your wishlist.
                </p>
                <Link href="/service" className="tj-primary-btn">
                  <span className="btn-text">
                    <span>Explore Services</span>
                  </span>
                  <span className="btn-icon">
                    <i className="tji-arrow-right-long"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default WishlistSection;
