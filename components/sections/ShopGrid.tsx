import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopGrid: React.FC = () => {
  const [sortBy, setSortBy] = useState('default');
  const [viewMode, setViewMode] = useState('grid');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const products = [
    {
      id: '1',
      name: 'Premium Wireless Headphones',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      rating: 4.8,
      reviews: 124,
      image: '/assets/images/shop/product-1.jpg',
      category: 'Electronics',
      brand: 'Bexon',
      inStock: true,
      isNew: true,
      isFeatured: true
    },
    {
      id: '2',
      name: 'Wireless Earbuds',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.6,
      reviews: 89,
      image: '/assets/images/shop/product-2.jpg',
      category: 'Electronics',
      brand: 'Bexon',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      rating: 4.7,
      reviews: 156,
      image: '/assets/images/shop/product-3.jpg',
      category: 'Electronics',
      brand: 'Bexon',
      inStock: true,
      isNew: true,
      isFeatured: false
    },
    {
      id: '4',
      name: 'Gaming Headset',
      price: 249.99,
      originalPrice: 299.99,
      discount: 17,
      rating: 4.9,
      reviews: 203,
      image: '/assets/images/shop/product-4.jpg',
      category: 'Gaming',
      brand: 'Bexon',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: '5',
      name: 'Smart Watch',
      price: 399.99,
      originalPrice: 499.99,
      discount: 20,
      rating: 4.5,
      reviews: 78,
      image: '/assets/images/shop/product-5.jpg',
      category: 'Wearables',
      brand: 'Bexon',
      inStock: true,
      isNew: true,
      isFeatured: false
    },
    {
      id: '6',
      name: 'Laptop Stand',
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4.4,
      reviews: 45,
      image: '/assets/images/shop/product-6.jpg',
      category: 'Accessories',
      brand: 'Bexon',
      inStock: false,
      isNew: false,
      isFeatured: false
    },
    {
      id: '7',
      name: 'Mechanical Keyboard',
      price: 179.99,
      originalPrice: 229.99,
      discount: 22,
      rating: 4.8,
      reviews: 167,
      image: '/assets/images/shop/product-7.jpg',
      category: 'Accessories',
      brand: 'Bexon',
      inStock: true,
      isNew: false,
      isFeatured: true
    },
    {
      id: '8',
      name: 'Wireless Mouse',
      price: 59.99,
      originalPrice: 79.99,
      discount: 25,
      rating: 4.3,
      reviews: 92,
      image: '/assets/images/shop/product-8.jpg',
      category: 'Accessories',
      brand: 'Bexon',
      inStock: true,
      isNew: true,
      isFeatured: false
    }
  ];

  const categories = ['All', 'Electronics', 'Gaming', 'Wearables', 'Accessories'];
  const brands = ['All', 'Bexon', 'Apple', 'Samsung', 'Sony'];

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(prev => 
        prev.includes(category) 
          ? prev.filter(c => c !== category)
          : [...prev, category]
      );
    }
  };

  const handleBrandChange = (brand: string) => {
    if (brand === 'All') {
      setSelectedBrands([]);
    } else {
      setSelectedBrands(prev => 
        prev.includes(brand) 
          ? prev.filter(b => b !== brand)
          : [...prev, brand]
      );
    }
  };

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return categoryMatch && brandMatch && priceMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'newest':
        return b.isNew ? 1 : -1;
      default:
        return 0;
    }
  });

  const handleAddToCart = (productId: string) => {
    console.log('Added to cart:', productId);
  };

  const handleWishlist = (productId: string) => {
    console.log('Added to wishlist:', productId);
  };

  return (
    <div className="shop-grid-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="shop-sidebar">
              <div className="sidebar-widget">
                <h4 className="widget-title">Categories</h4>
                <div className="category-list">
                  {categories.map((category) => (
                    <label key={category} className="category-item">
                      <input
                        type="checkbox"
                        checked={category === 'All' ? selectedCategories.length === 0 : selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                      />
                      <span className="checkmark"></span>
                      <span className="category-name">{category}</span>
                      <span className="category-count">
                        {category === 'All' ? products.length : products.filter(p => p.category === category).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget">
                <h4 className="widget-title">Brands</h4>
                <div className="brand-list">
                  {brands.map((brand) => (
                    <label key={brand} className="brand-item">
                      <input
                        type="checkbox"
                        checked={brand === 'All' ? selectedBrands.length === 0 : selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      <span className="checkmark"></span>
                      <span className="brand-name">{brand}</span>
                      <span className="brand-count">
                        {brand === 'All' ? products.length : products.filter(p => p.brand === brand).length}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="sidebar-widget">
                <h4 className="widget-title">Price Range</h4>
                <div className="price-range">
                  <div className="price-inputs">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    />
                    <span>-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                    />
                  </div>
                  <div className="price-slider">
                    <input
                      type="range"
                      min="0"
                      max="1000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    />
                  </div>
                </div>
              </div>

              <div className="sidebar-widget">
                <h4 className="widget-title">Featured Products</h4>
                <div className="featured-products">
                  {products.filter(p => p.isFeatured).slice(0, 3).map((product) => (
                    <div key={product.id} className="featured-product">
                      <div className="product-image">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="img-fluid"
                        />
                      </div>
                      <div className="product-info">
                        <h6 className="product-title">
                          <Link href={`/shop-details?id=${product.id}`}>
                            {product.name}
                          </Link>
                        </h6>
                        <div className="product-price">
                          <span className="current-price">${product.price}</span>
                          {product.originalPrice > product.price && (
                            <span className="original-price">${product.originalPrice}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-9">
            <div className="shop-content">
              <div className="shop-header">
                <div className="shop-info">
                  <p>Showing {sortedProducts.length} of {products.length} products</p>
                </div>
                <div className="shop-controls">
                  <div className="sort-controls">
                    <label>Sort by:</label>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="sort-select"
                    >
                      <option value="default">Default</option>
                      <option value="price-low">Price: Low to High</option>
                      <option value="price-high">Price: High to Low</option>
                      <option value="rating">Rating</option>
                      <option value="newest">Newest</option>
                    </select>
                  </div>
                  <div className="view-controls">
                    <button
                      className={`view-btn ${viewMode === 'grid' ? 'active' : ''}`}
                      onClick={() => setViewMode('grid')}
                    >
                      <i className="fa fa-th" />
                    </button>
                    <button
                      className={`view-btn ${viewMode === 'list' ? 'active' : ''}`}
                      onClick={() => setViewMode('list')}
                    >
                      <i className="fa fa-list" />
                    </button>
                  </div>
                </div>
              </div>

              <div className={`products-grid ${viewMode === 'list' ? 'list-view' : ''}`}>
                {sortedProducts.map((product) => (
                  <div key={product.id} className="product-card">
                    <div className="product-image">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="img-fluid"
                      />
                      {product.discount > 0 && (
                        <div className="discount-badge">
                          -{product.discount}%
                        </div>
                      )}
                      {product.isNew && (
                        <div className="new-badge">New</div>
                      )}
                      {product.isFeatured && (
                        <div className="featured-badge">Featured</div>
                      )}
                      <div className="product-actions">
                        <button
                          className="action-btn"
                          onClick={() => handleWishlist(product.id)}
                        >
                          <i className="fa fa-heart" />
                        </button>
                        <button
                          className="action-btn"
                          onClick={() => handleAddToCart(product.id)}
                        >
                          <i className="fa fa-shopping-cart" />
                        </button>
                        <button className="action-btn">
                          <i className="fa fa-eye" />
                        </button>
                      </div>
                    </div>
                    <div className="product-info">
                      <div className="product-meta">
                        <span className="category">{product.category}</span>
                        <span className="brand">{product.brand}</span>
                      </div>
                      <h5 className="product-title">
                        <Link href={`/shop-details?id=${product.id}`}>
                          {product.name}
                        </Link>
                      </h5>
                      <div className="product-rating">
                        <div className="stars">
                          {[...Array(5)].map((_, i) => (
                            <i
                              key={i}
                              className={`fa fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                            />
                          ))}
                        </div>
                        <span className="rating-text">({product.reviews})</span>
                      </div>
                      <div className="product-price">
                        <span className="current-price">${product.price}</span>
                        {product.originalPrice > product.price && (
                          <span className="original-price">${product.originalPrice}</span>
                        )}
                      </div>
                      <div className="product-actions-bottom">
                        <button
                          className="btn btn-primary add-to-cart"
                          onClick={() => handleAddToCart(product.id)}
                          disabled={!product.inStock}
                        >
                          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {sortedProducts.length === 0 && (
                <div className="no-products">
                  <div className="no-products-content">
                    <i className="fa fa-search"></i>
                    <h4>No products found</h4>
                    <p>Try adjusting your filters to see more products.</p>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setSelectedCategories([]);
                        setSelectedBrands([]);
                        setPriceRange([0, 1000]);
                      }}
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              )}

              <div className="pagination">
                <button className="page-btn" disabled>
                  <i className="fa fa-chevron-left" />
                </button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn">
                  <i className="fa fa-chevron-right" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopGrid;
