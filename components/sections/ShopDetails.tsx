import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ShopDetails: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');

  const product = {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299.99,
    originalPrice: 399.99,
    discount: 25,
    rating: 4.8,
    reviews: 124,
    description: 'Experience superior sound quality with our premium wireless headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design.',
    features: [
      'Active Noise Cancellation',
      '30-hour battery life',
      'Quick charge (5 min = 3 hours)',
      'Premium sound quality',
      'Comfortable over-ear design',
      'Bluetooth 5.0 connectivity'
    ],
    specifications: {
      'Battery Life': '30 hours',
      'Charging Time': '2 hours',
      'Connectivity': 'Bluetooth 5.0',
      'Frequency Response': '20Hz - 20kHz',
      'Impedance': '32 ohms',
      'Weight': '250g'
    },
    images: [
      '/assets/images/shop/shop-details-1.jpg',
      '/assets/images/shop/shop-details-2.jpg',
      '/assets/images/shop/shop-details-3.jpg',
      '/assets/images/shop/shop-details-4.jpg'
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'White', 'Blue', 'Red'],
    inStock: true,
    stockCount: 15,
    category: 'Electronics',
    tags: ['headphones', 'wireless', 'premium', 'audio'],
    sku: 'BEX-HP-001'
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Wireless Earbuds',
      price: 199.99,
      image: '/assets/images/shop/related-1.jpg',
      rating: 4.6
    },
    {
      id: '3',
      name: 'Bluetooth Speaker',
      price: 149.99,
      image: '/assets/images/shop/related-2.jpg',
      rating: 4.7
    },
    {
      id: '4',
      name: 'Gaming Headset',
      price: 249.99,
      image: '/assets/images/shop/related-3.jpg',
      rating: 4.9
    }
  ];

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1 && newQuantity <= product.stockCount) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    // Add to cart logic
    console.log('Added to cart:', {
      product: product.id,
      quantity,
      size: selectedSize,
      color: selectedColor
    });
  };

  const handleWishlist = () => {
    // Add to wishlist logic
    console.log('Added to wishlist:', product.id);
  };

  return (
    <div className="shop-details-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="product-gallery">
              <div className="main-image">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  width={600}
                  height={600}
                  className="img-fluid"
                />
                {product.discount > 0 && (
                  <div className="discount-badge">
                    -{product.discount}%
                  </div>
                )}
              </div>
              <div className="thumbnail-gallery">
                {product.images.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      width={100}
                      height={100}
                      className="img-fluid"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="product-info">
              <div className="product-meta">
                <span className="category">{product.category}</span>
                <span className="sku">SKU: {product.sku}</span>
              </div>
              
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-rating">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <i
                      key={i}
                      className={`fa fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                    />
                  ))}
                </div>
                <span className="rating-text">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>
              
              <div className="product-price">
                <span className="current-price">${product.price}</span>
                {product.originalPrice > product.price && (
                  <span className="original-price">${product.originalPrice}</span>
                )}
              </div>
              
              <div className="product-description">
                <p>{product.description}</p>
              </div>
              
              <div className="product-options">
                <div className="size-options">
                  <label>Size:</label>
                  <div className="size-buttons">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-btn ${selectedSize === size ? 'active' : ''}`}
                        onClick={() => setSelectedSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="color-options">
                  <label>Color:</label>
                  <div className="color-buttons">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`color-btn ${selectedColor === color ? 'active' : ''}`}
                        onClick={() => setSelectedColor(color)}
                        style={{ backgroundColor: color.toLowerCase() }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-controls">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange(1)}
                    disabled={quantity >= product.stockCount}
                  >
                    +
                  </button>
                </div>
                <span className="stock-info">
                  {product.stockCount} in stock
                </span>
              </div>
              
              <div className="product-actions">
                <button className="btn btn-primary add-to-cart" onClick={handleAddToCart}>
                  <i className="fa fa-shopping-cart" />
                  Add to Cart
                </button>
                <button className="btn btn-outline wishlist-btn" onClick={handleWishlist}>
                  <i className="fa fa-heart" />
                  Wishlist
                </button>
              </div>
              
              <div className="product-features">
                <h4>Key Features:</h4>
                <ul>
                  {product.features.map((feature, index) => (
                    <li key={index}>
                      <i className="fa fa-check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="product-tabs">
          <div className="tab-navigation">
            <button className="tab-btn active">Description</button>
            <button className="tab-btn">Specifications</button>
            <button className="tab-btn">Reviews</button>
            <button className="tab-btn">Shipping</button>
          </div>
          
          <div className="tab-content">
            <div className="tab-pane active">
              <div className="product-description">
                <p>{product.description}</p>
                <p>
                  Our premium wireless headphones are designed for audiophiles who demand the best sound quality. 
                  With advanced noise cancellation technology and premium drivers, you'll experience every detail 
                  of your music with crystal-clear clarity.
                </p>
              </div>
            </div>
            
            <div className="tab-pane">
              <div className="specifications">
                <table className="spec-table">
                  <tbody>
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key}>
                        <td className="spec-label">{key}</td>
                        <td className="spec-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="tab-pane">
              <div className="reviews-section">
                <div className="reviews-summary">
                  <div className="rating-overview">
                    <span className="rating-number">{product.rating}</span>
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i
                          key={i}
                          className={`fa fa-star ${i < Math.floor(product.rating) ? 'filled' : ''}`}
                        />
                      ))}
                    </div>
                    <span className="total-reviews">{product.reviews} reviews</span>
                  </div>
                </div>
                
                <div className="reviews-list">
                  <div className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h5>John Doe</h5>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star filled" />
                          ))}
                        </div>
                      </div>
                      <span className="review-date">2 days ago</span>
                    </div>
                    <p className="review-text">
                      Excellent sound quality and very comfortable. The noise cancellation works perfectly 
                      and the battery life is impressive.
                    </p>
                  </div>
                  
                  <div className="review-item">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <h5>Sarah Smith</h5>
                        <div className="review-rating">
                          {[...Array(5)].map((_, i) => (
                            <i key={i} className="fa fa-star filled" />
                          ))}
                        </div>
                      </div>
                      <span className="review-date">1 week ago</span>
                    </div>
                    <p className="review-text">
                      Great headphones for the price. The build quality is solid and the sound is amazing. 
                      Highly recommended!
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="tab-pane">
              <div className="shipping-info">
                <h4>Shipping Information</h4>
                <div className="shipping-options">
                  <div className="shipping-option">
                    <h5>Standard Shipping</h5>
                    <p>5-7 business days</p>
                    <span className="shipping-price">Free</span>
                  </div>
                  <div className="shipping-option">
                    <h5>Express Shipping</h5>
                    <p>2-3 business days</p>
                    <span className="shipping-price">$9.99</span>
                  </div>
                  <div className="shipping-option">
                    <h5>Next Day Delivery</h5>
                    <p>1 business day</p>
                    <span className="shipping-price">$19.99</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="related-products">
          <h3>Related Products</h3>
          <div className="row">
            {relatedProducts.map((product) => (
              <div key={product.id} className="col-lg-4 col-md-6">
                <div className="product-card">
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="img-fluid"
                    />
                    <div className="product-actions">
                      <button className="action-btn">
                        <i className="fa fa-heart" />
                      </button>
                      <button className="action-btn">
                        <i className="fa fa-shopping-cart" />
                      </button>
                      <button className="action-btn">
                        <i className="fa fa-eye" />
                      </button>
                    </div>
                  </div>
                  <div className="product-info">
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
                    </div>
                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
