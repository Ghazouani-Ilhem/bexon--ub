import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('name');

  const products = [
    {
      id: '1',
      title: 'Business Strategy Development',
      description: 'Comprehensive business strategy development and implementation services.',
      price: 299,
      originalPrice: 399,
      image: '/assets/images/product/product-1.webp',
      category: 'Strategy',
      rating: 4.8,
      reviews: 24,
      badge: 'Popular'
    },
    {
      id: '2',
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern businesses.',
      price: 599,
      originalPrice: 799,
      image: '/assets/images/product/product-2.webp',
      category: 'Digital',
      rating: 4.9,
      reviews: 18,
      badge: 'Best Seller'
    },
    {
      id: '3',
      title: 'Marketing Strategy & Campaigns',
      description: 'Strategic marketing solutions to boost your brand visibility.',
      price: 199,
      originalPrice: 299,
      image: '/assets/images/product/product-3.webp',
      category: 'Marketing',
      rating: 4.7,
      reviews: 31,
      badge: 'New'
    },
    {
      id: '4',
      title: 'Customer Experience Solutions',
      description: 'Enhance your customer journey with our innovative experience design.',
      price: 399,
      originalPrice: 499,
      image: '/assets/images/product/product-4.webp',
      category: 'Customer Experience',
      rating: 4.6,
      reviews: 15,
      badge: ''
    },
    {
      id: '5',
      title: 'Sustainability and ESG Consulting',
      description: 'Integrate sustainable practices and ESG principles into your business.',
      price: 499,
      originalPrice: 599,
      image: '/assets/images/product/product-5.webp',
      category: 'Sustainability',
      rating: 4.8,
      reviews: 12,
      badge: 'Eco-Friendly'
    },
    {
      id: '6',
      title: 'Training and Development Programs',
      description: 'Empower your team with comprehensive training programs.',
      price: 149,
      originalPrice: 199,
      image: '/assets/images/product/product-6.webp',
      category: 'Training',
      rating: 4.5,
      reviews: 27,
      badge: ''
    }
  ];

  const categories = [
    { key: 'all', label: 'All Products' },
    { key: 'Strategy', label: 'Strategy' },
    { key: 'Digital', label: 'Digital' },
    { key: 'Marketing', label: 'Marketing' },
    { key: 'Customer Experience', label: 'Customer Experience' },
    { key: 'Sustainability', label: 'Sustainability' },
    { key: 'Training', label: 'Training' }
  ];

  const filteredProducts = activeFilter === 'all' 
    ? products 
    : products.filter(product => product.category === activeFilter);

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
      default:
        return a.title.localeCompare(b.title);
    }
  });

  return (
    <section className="tj-shop-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="sec-heading text-center">
              <span className="sub-title wow fadeInUp" data-wow-delay=".3s">
                <i className="tji-box"></i>Our Products
              </span>
              <h2 className="sec-title title-anim">
                Business <span>Solutions</span> for Every Need
              </h2>
              <p className="sec-desc wow fadeInUp" data-wow-delay=".6s">
                Discover our comprehensive range of business consulting services and solutions designed to help your organization succeed.
              </p>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="shop-filters wow fadeInUp" data-wow-delay=".8s">
              <div className="filter-buttons">
                {categories.map((category) => (
                  <button
                    key={category.key}
                    className={`filter-btn ${activeFilter === category.key ? 'active' : ''}`}
                    onClick={() => setActiveFilter(category.key)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
              <div className="sort-dropdown">
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="form-select"
                >
                  <option value="name">Sort by Name</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Sort by Rating</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="row row-gap-4">
          {sortedProducts.map((product, index) => (
            <div key={product.id} className="col-xl-4 col-lg-6 col-md-6">
              <div className="product-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                <div className="product-img">
                  <Image 
                    src={product.image} 
                    alt={product.title} 
                    width={400}
                    height={300}
                  />
                  {product.badge && (
                    <div className="product-badge">
                      <span className="badge">{product.badge}</span>
                    </div>
                  )}
                  <div className="product-overlay">
                    <div className="product-actions">
                      <button className="action-btn wishlist-btn">
                        <i className="fa-regular fa-heart"></i>
                      </button>
                      <button className="action-btn quick-view-btn">
                        <i className="fa-solid fa-eye"></i>
                      </button>
                      <button className="action-btn add-to-cart-btn">
                        <i className="fa-solid fa-cart-plus"></i>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="product-content">
                  <div className="product-category">{product.category}</div>
                  <h4 className="product-title">
                    <Link href="/shop-details">{product.title}</Link>
                  </h4>
                  <p className="product-description">{product.description}</p>
                  <div className="product-rating">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`fa-solid fa-star ${i < Math.floor(product.rating) ? 'active' : ''}`}
                        ></i>
                      ))}
                    </div>
                    <span className="rating-text">({product.reviews} reviews)</span>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="product-actions">
                    <Link href="/shop-details" className="tj-primary-btn">
                      <span className="btn-text">
                        <span>View Details</span>
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
        
        <div className="row">
          <div className="col-12">
            <div className="shop-pagination text-center wow fadeInUp" data-wow-delay=".8s">
              <nav aria-label="Shop pagination">
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

export default ShopSection;
