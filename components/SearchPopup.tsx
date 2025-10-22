import React, { useEffect } from 'react';

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const SearchPopup: React.FC<SearchPopupProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search submission here
    console.log('Search submitted');
  };

  return (
    <>
      <div 
        className={`search-popup-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      <div 
        className={`search_popup ${isOpen ? 'active' : ''}`}
        onKeyDown={handleKeyDown}
        tabIndex={-1}
      >
        <div className="search_close">
          <button 
            className="search_close_btn" 
            onClick={onClose}
            aria-label="Close search"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-8">
              <div className="tj_search_wrapper">
                <div className="search_form">
                  <form onSubmit={handleSubmit}>
                    <div className="search_input">
                      <div className="search-box">
                        <input 
                          className="search-form-input" 
                          type="text" 
                          placeholder="Type Words and Hit Enter" 
                          required 
                          autoFocus={isOpen}
                        />
                        <button type="submit">
                          <i className="tji-search"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchPopup;
