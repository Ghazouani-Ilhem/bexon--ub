import React, { useState } from 'react';
import Link from 'next/link';

const CheckoutSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    paymentMethod: 'credit',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    billingAddress: '',
    billingCity: '',
    billingState: '',
    billingZip: '',
    terms: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle checkout logic here
    console.log('Checkout form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const orderItems = [
    {
      title: 'Business Strategy Development',
      price: 299,
      quantity: 1
    },
    {
      title: 'Digital Transformation',
      price: 599,
      quantity: 1
    }
  ];

  const subtotal = orderItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <section className="tj-checkout-section section-gap">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-7">
            <div className="checkout-form">
              <form onSubmit={handleSubmit}>
                <div className="form-section wow fadeInUp" data-wow-delay=".3s">
                  <h3 className="section-title">Billing Information</h3>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="firstName" className="form-label">First Name *</label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="lastName" className="form-label">Last Name *</label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">Email Address *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">Phone Number *</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="company" className="form-label">Company Name</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>
                </div>

                <div className="form-section wow fadeInUp" data-wow-delay=".5s">
                  <h3 className="section-title">Billing Address</h3>
                  <div className="form-group">
                    <label htmlFor="address" className="form-label">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="city" className="form-label">City *</label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="state" className="form-label">State *</label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-group">
                        <label htmlFor="zipCode" className="form-label">ZIP Code *</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          value={formData.zipCode}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="country" className="form-label">Country *</label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className="form-control"
                      required
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="UK">United Kingdom</option>
                      <option value="AU">Australia</option>
                    </select>
                  </div>
                </div>

                <div className="form-section wow fadeInUp" data-wow-delay=".7s">
                  <h3 className="section-title">Payment Information</h3>
                  <div className="payment-methods">
                    <div className="payment-method">
                      <input
                        type="radio"
                        id="credit"
                        name="paymentMethod"
                        value="credit"
                        checked={formData.paymentMethod === 'credit'}
                        onChange={handleChange}
                      />
                      <label htmlFor="credit">Credit Card</label>
                    </div>
                    <div className="payment-method">
                      <input
                        type="radio"
                        id="paypal"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleChange}
                      />
                      <label htmlFor="paypal">PayPal</label>
                    </div>
                  </div>
                  
                  {formData.paymentMethod === 'credit' && (
                    <div className="credit-card-form">
                      <div className="form-group">
                        <label htmlFor="cardNumber" className="form-label">Card Number *</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleChange}
                          className="form-control"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="expiryDate" className="form-label">Expiry Date *</label>
                            <input
                              type="text"
                              id="expiryDate"
                              name="expiryDate"
                              value={formData.expiryDate}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label htmlFor="cvv" className="form-label">CVV *</label>
                            <input
                              type="text"
                              id="cvv"
                              name="cvv"
                              value={formData.cvv}
                              onChange={handleChange}
                              className="form-control"
                              placeholder="123"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <label htmlFor="cardName" className="form-label">Cardholder Name *</label>
                        <input
                          type="text"
                          id="cardName"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleChange}
                          className="form-control"
                          required
                        />
                      </div>
                    </div>
                  )}
                </div>

                <div className="form-section wow fadeInUp" data-wow-delay=".9s">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="form-check-input"
                      required
                    />
                    <label htmlFor="terms" className="form-check-label">
                      I agree to the <Link href="/terms-and-conditions">Terms and Conditions</Link> and <Link href="/privacy-policy">Privacy Policy</Link>
                    </label>
                  </div>
                </div>

                <div className="form-actions wow fadeInUp" data-wow-delay="1.1s">
                  <button type="submit" className="tj-primary-btn">
                    <span className="btn-text">
                      <span>Complete Order</span>
                    </span>
                    <span className="btn-icon">
                      <i className="tji-arrow-right-long"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          
          <div className="col-xl-4 col-lg-5">
            <div className="checkout-summary">
              <div className="summary-card wow fadeInUp" data-wow-delay=".5s">
                <h4 className="summary-title">Order Summary</h4>
                <div className="order-items">
                  {orderItems.map((item, index) => (
                    <div key={index} className="order-item">
                      <div className="item-info">
                        <h6 className="item-title">{item.title}</h6>
                        <span className="item-quantity">Qty: {item.quantity}</span>
                      </div>
                      <div className="item-price">${item.price * item.quantity}</div>
                    </div>
                  ))}
                </div>
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
              </div>
              
              <div className="summary-card wow fadeInUp" data-wow-delay=".7s">
                <h4 className="summary-title">Security</h4>
                <div className="security-features">
                  <div className="security-item">
                    <i className="fa-solid fa-shield"></i>
                    <span>SSL Encrypted</span>
                  </div>
                  <div className="security-item">
                    <i className="fa-solid fa-lock"></i>
                    <span>Secure Payment</span>
                  </div>
                  <div className="security-item">
                    <i className="fa-solid fa-check"></i>
                    <span>Money Back Guarantee</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutSection;
