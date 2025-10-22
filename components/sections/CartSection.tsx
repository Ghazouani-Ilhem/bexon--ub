import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CartSection: React.FC = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      title: 'Business Strategy Development',
      description: 'Comprehensive business strategy development and implementation services.',
      price: 299,
      quantity: 1,
      image: '/assets/images/service/service-1.webp',
      category: 'Strategy'
    },
    {
      id: '2',
      title: 'Digital Transformation',
      description: 'Complete digital transformation solutions for modern businesses.',
      price: 599,
      quantity: 1,
      image: '/assets/images/service/service-2.webp',
      category: 'Digital'
    }
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1; // 10% tax
  const total = subtotal + tax;

  return (
    <section className="tj-cart-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="cart-items">
              <div className="cart-header wow fadeInUp" data-wow-delay=".3s">
                <h2 className="cart-title">Shopping Cart</h2>
                <p className="cart-subtitle">
                  Review your selected services and proceed to checkout.
                </p>
              </div>
              
              {cartItems.length > 0 ? (
                <div className="cart-items-list">
                  {cartItems.map((item, index) => (
                    <div key={item.id} className="cart-item wow fadeInUp" data-wow-delay={`${0.1 + index * 0.1}s`}>
                      <div className="cart-item-img">
                        <Image 
                          src={item.image} 
                          alt={item.title} 
                          width={120}
                          height={80}
                        />
                      </div>
                      <div className="cart-item-content">
                        <div className="item-category">{item.category}</div>
                        <h4 className="item-title">
                          <Link href="/service-details">{item.title}</Link>
                        </h4>
                        <p className="item-description">{item.description}</p>
                        <div className="item-price">
                          <span className="price">${item.price}</span>
                          <span className="period">/month</span>
                        </div>
                      </div>
                      <div className="cart-item-quantity">
                        <div className="quantity-controls">
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            -
                          </button>
                          <span className="quantity">{item.quantity}</span>
                          <button 
                            className="quantity-btn"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="cart-item-total">
                        <span className="item-total">${item.price * item.quantity}</span>
                      </div>
                      <div className="cart-item-actions">
                        <button 
                          className="remove-btn"
                          onClick={() => removeFromCart(item.id)}
                        >
                          <i className="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-cart text-center wow fadeInUp" data-wow-delay=".3s">
                  <div className="empty-icon">
                    <i className="fa-solid fa-shopping-cart"></i>
                  </div>
                  <h3 className="empty-title">Your cart is empty</h3>
                  <p className="empty-description">
                    Start exploring our services and add them to your cart.
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
              )}
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="cart-summary">
              <div className="summary-card wow fadeInUp" data-wow-delay=".5s">
                <h4 className="summary-title">Order Summary</h4>
                <div className="summary-details">
                  <div className="summary-row">
                    <span className="label">Subtotal:</span>
                    <span className="value">${subtotal}</span>
                  </div>
                  <div className="summary-row">
                    <span className="label">Tax (10%):</span>
                    <span className="value">${tax.toFixed(2)}</span>
                  </div>
                  <div className="summary-row total">
                    <span className="label">Total:</span>
                    <span className="value">${total.toFixed(2)}</span>
                  </div>
                </div>
                <div className="summary-actions">
                  <Link href="/checkout" className="tj-primary-btn w-100">
                    <span className="btn-text">
                      <span>Proceed to Checkout</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                  <Link href="/service" className="tj-secondary-btn w-100">
                    <span className="btn-text">
                      <span>Continue Shopping</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </Link>
                </div>
              </div>
              
              <div className="summary-card wow fadeInUp" data-wow-delay=".7s">
                <h4 className="summary-title">Why Choose Us?</h4>
                <ul className="benefits-list">
                  <li>
                    <i className="tji-check"></i>
                    Expert consulting team
                  </li>
                  <li>
                    <i className="tji-check"></i>
                    Proven track record
                  </li>
                  <li>
                    <i className="tji-check"></i>
                    24/7 support
                  </li>
                  <li>
                    <i className="tji-check"></i>
                    Money-back guarantee
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartSection;
