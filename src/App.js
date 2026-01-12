import React, { useState } from 'react';
import './App.css';

import img1 from './assets/images/1.png';
import img2 from './assets/images/2.png';
import img3 from './assets/images/3.png';
import img4 from './assets/images/4.png';
import img5 from './assets/images/5.png';
import img6 from './assets/images/6.png';
import img7 from './assets/images/7.png';
import img8 from './assets/images/8.png';
import img9 from './assets/images/9.png';
import img10 from './assets/images/10.png';
import img11 from './assets/images/11.png';
import img12 from './assets/images/12.png';
import img13 from './assets/images/13.png';
import img14 from './assets/images/14.png';
import img15 from './assets/images/15.png';
import img16 from './assets/images/16.png';
import img17 from './assets/images/17.png';
import img18 from './assets/images/18.png';
import img19 from './assets/images/19.png';
import img20 from './assets/images/20.png';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailScroll, setThumbnailScroll] = useState(0);

  const apartmentData = {
    name: "Apartamento Delventto",
    images: [
      img1, img2, img3, img4, img5, 
      img6, img7, img8, img9, img10,
      img11, img12, img13, img14, img15,
      img16, img17, img18, img19, img20
    ],
    services: [
      { icon: "🛏️", name: "2 Habitaciones" },
      { icon: "🚿", name: "2 Baños" },
      { icon: "📶", name: "WiFi Gratis" },
      { icon: "❄️", name: "Aire Acondicionado" },
      { icon: "🍳", name: "Cocina Equipada" },
      { icon: "📺", name: "TV Cable" },
      { icon: "🅿️", name: "Estacionamiento" },
      { icon: "🏊", name: "Piscina" }
    ],
    location: {
      address: "Calle Principal #123, Santa Marta",
      phone: "+573041175118",
      whatsappMessage: "Hola, estoy interesado en el Apartamento Delventto"
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === apartmentData.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? apartmentData.images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  const scrollThumbnails = (direction) => {
    const scrollAmount = 420;
    setThumbnailScroll(prev => {
      const newScroll = direction === 'left' ? prev - scrollAmount : prev + scrollAmount;
      const maxScroll = (apartmentData.images.length * 135) - 900;
      return Math.max(0, Math.min(newScroll, maxScroll));
    });
  };

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${apartmentData.location.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(apartmentData.location.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <section className="hero-section">
        <div className="container">
          <h1 className="apartment-name">{apartmentData.name}</h1>
          <p className="apartment-subtitle">Tu hogar ideal te espera</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-container">
            <button className="gallery-btn prev" onClick={prevImage}>❮</button>
            <div className="main-image">
              <img 
                src={apartmentData.images[currentImageIndex]} 
                alt={`Apartamento ${currentImageIndex + 1}`}
              />
            </div>
            <button className="gallery-btn next" onClick={nextImage}>❯</button>
          </div>
            <div className="thumbnails-wrapper">
            <button 
              className="thumbnail-nav-btn left" 
              onClick={() => scrollThumbnails('left')}
              disabled={thumbnailScroll === 0}
            >
              ❮
            </button>
            <div className="thumbnails-container">
              <div 
                className="thumbnails" 
                style={{ transform: `translateX(-${thumbnailScroll}px)` }}
              >
                {apartmentData.images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={image} alt={`Miniatura ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
            <button 
              className="thumbnail-nav-btn right" 
              onClick={() => scrollThumbnails('right')}
              disabled={thumbnailScroll >= (apartmentData.images.length * 135) - 900}
            >
              ❯
            </button>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2>Servicios y Comodidades</h2>
          <div className="services-grid">
            {apartmentData.services.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <p className="service-name">{service.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>Ubicación y Contacto</h2>
          <div className="contact-content">
            <div className="location-info">
              <div className="info-item">
                <span className="info-icon">📍</span>
                <p>{apartmentData.location.address}</p>
              </div>
              <div className="info-item">
                <span className="info-icon">📞</span>
                <p>{apartmentData.location.phone}</p>
              </div>
            </div>
            <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
              <span className="whatsapp-icon">💬</span>
              Reservar por WhatsApp
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Delventto. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}

export default App;