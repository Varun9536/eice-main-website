import React, { useState, useEffect } from 'react';
import imgn from "../assets/photo/logo2n.webp";

// Images for phone
import set1 from "../assets/clients_phone/img1w.webp";
import set2 from "../assets/clients_phone/img2w.webp";
import set3 from "../assets/clients_phone/img3w.webp";

export default function Clients() {
  const images = [set1, set2, set3]; 

  const [currentIndex, setCurrentIndex] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  // Handle window resize to update width dynamically
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Automatically change slides every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="font-manrope" style={{ margin: "60px auto", width: "90%" }}>
        <h2 className="text-bloo text-center fontsize_2 fontweight_1 mb-6">
          Our Clients
        </h2>
        <h1 className="text-center text-2xl sm:text-3xl mx-auto md:text-3xl lg:text-[32px] max-w-3xl py-1 fontweight_1 mb-8">
          Partnering with visionary clients to drive success and innovation
        </h1>

        <div style={{ display: "flex", justifyContent: "center" }}>
          {width > 1000 ? (
            <img src={imgn} alt="Large screen client logo" />
          ) : (
            <div style={{ width: '100%', maxWidth: '300px' }}>
              <div>
                <img
                  src={images[currentIndex]}
                  alt={`Client ${currentIndex + 1}`}
                  style={{ width: '100%', display: 'block' }}
                />
              </div>

              <div className="dots" style={{ textAlign: 'center', marginTop: '10px' }}>
                {images.map((_, index) => (
                  <span
                    key={index}
                    style={{
                      height: '8px',
                      width: '25px',   // Increase width for cylindrical shape
                      margin: '0 5px',
                      backgroundColor: index === currentIndex ? '#1e3a8a' : 'rgb(1 176 241 / 0.3)',
                      display: 'inline-block',
                      borderRadius: '10px',   // Makes it cylindrical
                      cursor: 'pointer'
                    }}
                    onClick={() => setCurrentIndex(index)}
                  ></span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
