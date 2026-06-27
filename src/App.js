import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { 
  FaBed, FaShower, FaWifi, FaSnowflake, FaTv, FaParking, 
  FaSwimmingPool, FaDog, FaDumbbell, FaBan, FaPhone, FaWhatsapp,
  FaTelegram, FaInstagram, FaMapMarkerAlt, FaWind, FaSpa 
} from 'react-icons/fa';
import { MdKitchen, MdBalcony, MdBeachAccess, MdLocalLaundryService} from 'react-icons/md';
import { GiWashingMachine, GiWaves } from 'react-icons/gi';
import { IoMdPlayCircle } from 'react-icons/io';
import { PiHairDryerBold  } from "react-icons/pi";
import { IoLogoNoSmoking } from "react-icons/io5";
import { FaWaze } from "react-icons/fa";

import img1 from './assets/images/1.png';
import img2 from './assets/images/2.png';
import img3 from './assets/images/3.png';
import img4 from './assets/images/4.png';
// import img5 from './assets/images/5.png';
import img6 from './assets/images/6.png';
// import img7 from './assets/images/7.png';
// import img8 from './assets/images/8.png';
import img9 from './assets/images/9.png';
import img10 from './assets/images/10.png';
// import img11 from './assets/images/11.png';
// import img12 from './assets/images/12.png';
import img13 from './assets/images/13.png';
import img14 from './assets/images/14.png';
import img15 from './assets/images/15.png';
import img16 from './assets/images/16.png';
// import img17 from './assets/images/17.png';
import img18 from './assets/images/18.png';
import img19 from './assets/images/19.png';
import img20 from './assets/images/20.png';
import img21 from './assets/images/21.png';
import img22 from './assets/images/22.png';
import img23 from './assets/images/23.png';
// import img24 from './assets/images/24.png';
import img25 from './assets/images/25.png';
import img26 from './assets/images/26.png';
import img27 from './assets/images/27.png';

// Zonas Comunes

import img30 from './assets/images/30.webp';
import img32 from './assets/images/32.webp';
import img33 from './assets/images/33.webp';
import img34 from './assets/images/34.webp';
import img35 from './assets/images/35.webp';
import img36 from './assets/images/36.webp';
import img37 from './assets/images/37.webp';
import img38 from './assets/images/38.webp';
import img39 from './assets/images/39.jpeg';
import img40 from './assets/images/40.jpeg';
import img41 from './assets/images/41.jpeg';

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailScroll, setThumbnailScroll] = useState(0);
  const thumbnailsContainerRef = useRef(null);
  const touchStartX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX < -50) {
      nextImage();
    } else if (deltaX > 50) {
      prevImage();
    }
    touchStartX.current = null;
  };

  const apartmentData = {
    name: "Apartamento en Santa Marta",
    images: [
      img1, img2, img3, img4, img6, 
      img6, img9, img10, img13, img14, img15,
      img16, img18, img19, img20, img21 , img22, img23,img25,img26,img27,
      // Zonas Comunes
      img30,img32,img33,img34,img35,img36,img37,img38,img39,img40,img41
    ],
    services: [
      { icon: <FaBed />, name: <>2 Camas <br />4 Personas</> },
      { icon: <FaShower />, name: "Baño privado" },
      { icon: <FaWifi />, name: "WiFi" },
      { icon: <FaSnowflake />, name: "Aire Acondicionado" },
      { icon: <MdKitchen />, name: "Cocina Equipada" },
      { icon: <FaTv />, name: "Televisión" },
      { icon: <FaParking />, name: "Parqueadero" },
      { icon: <FaSwimmingPool />, name: "Piscina" },
      // { icon: <GiWashingMachine />, name: "Lavadora" },
      // { icon: <IoMdPlayCircle />, name: "Parque Infantil" },
      { icon: <FaDog />, name: "Mascotas Permitidas" },
      { icon: <FaDumbbell />, name: "Gimnasio" },
      { icon: <FaSpa />, name: "Sauna" },
      { icon: <IoLogoNoSmoking />, name: "Prohibido Fumar" },
      { icon: <MdBalcony />, name: "Balcón" },
      // { icon: <GiWaves />, name: "Vista al Mar" },
      { icon: <MdBeachAccess />, name: "Cerca de la Playa" },
      { icon: <FaMapMarkerAlt />, name: "Ubicación Privilegiada" },
      // { icon: <FaPhone />, name: "Teléfono" },
      // { icon: <FaWhatsapp />, name: "WhatsApp" },
      // { icon: <FaTelegram />, name: "Telegram" },
      // { icon: <FaInstagram />, name: "Instagram" },
      { icon: <MdLocalLaundryService />, name: "Lavaplatos" },
      { icon: <PiHairDryerBold  />, name: "Secador de Cabello" },
    ],
    location: {
      address: "Cabo Tortuga - Pozos Colorados, Santa Marta",
      phone: "+57 304 117 51 18",
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

  const getMaxScroll = () => {
    const container = thumbnailsContainerRef.current;
    if (!container) return 0;
    return Math.max(0, container.scrollWidth - container.clientWidth);
  };

  const scrollThumbnails = (direction) => {
    const container = thumbnailsContainerRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    const target = direction === 'left'
      ? container.scrollLeft - scrollAmount
      : container.scrollLeft + scrollAmount;
    const clamped = Math.max(0, Math.min(target, getMaxScroll()));
    container.scrollTo({ left: clamped, behavior: 'smooth' });
    setThumbnailScroll(clamped);
  };

  const handleThumbnailScroll = (e) => {
    setThumbnailScroll(e.target.scrollLeft);
  };

  useEffect(() => {
    const container = thumbnailsContainerRef.current;
    if (!container) return;
    const active = container.querySelector('.thumbnail.active');
    if (!active) return;
    const target = active.offsetLeft - (container.clientWidth / 2) + (active.offsetWidth / 2);
    const clamped = Math.max(0, Math.min(target, getMaxScroll()));
    container.scrollTo({ left: clamped, behavior: 'smooth' });
    setThumbnailScroll(clamped);
  }, [currentImageIndex]);

  useEffect(() => {
    const handleResize = () => {
      const container = thumbnailsContainerRef.current;
      if (!container) return;
      const max = Math.max(0, container.scrollWidth - container.clientWidth);
      if (container.scrollLeft > max) {
        container.scrollLeft = max;
        setThumbnailScroll(max);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${apartmentData.location.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(apartmentData.location.whatsappMessage)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <section className="hero-section">
        <div className="container">
          <h1 className="apartment-name">{apartmentData.name}</h1>
          <p className="apartment-subtitle">A solo 2 minutos de las tranquilas playas de Cabo Tortuga</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-container">
            <button className="gallery-btn prev" onClick={prevImage}>❮</button>
            <div className="main-image" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
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
            <div className="thumbnails-container" ref={thumbnailsContainerRef} onScroll={handleThumbnailScroll}>
              <div 
                className="thumbnails" 
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
              disabled={thumbnailScroll >= getMaxScroll() - 1}
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
                <FaMapMarkerAlt className="info-icon" />
                <p>{apartmentData.location.address}</p>
              </div>
              {/* <div className="info-item">
                <FaPhone className="info-icon" />
                <a href={`tel:${apartmentData.location.phone}`}>{apartmentData.location.phone}</a>
              </div> */}
            </div>
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
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