import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="tj-preloader is-loading">
      <div className="tj-preloader-inner">
        <div className="tj-preloader-ball-wrap">
          <div className="tj-preloader-ball-inner-wrap">
            <div className="tj-preloader-ball-inner">
              <div className="tj-preloader-ball"></div>
            </div>
            <div className="tj-preloader-ball-shadow"></div>
          </div>
          <div id="tj-weave-anim" className="tj-preloader-text">Loading...</div>
        </div>
      </div>
      <div className="tj-preloader-overlay"></div>
    </div>
  );
};

export default Preloader;
