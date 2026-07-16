import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import {
  FaBed, FaShower, FaWifi, FaSnowflake, FaTv,
  FaDog, FaMapMarkerAlt
} from 'react-icons/fa';
import { MdKitchen, MdBalcony, MdLocalLaundryService} from 'react-icons/md';
import { PiHairDryerBold  } from "react-icons/pi";
import { IoLogoNoSmoking } from "react-icons/io5";

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
// import img15 from './assets/images/15.png';
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

import img30 from './assets/images/30.png';
import img31 from './assets/images/31.png';
import img33 from './assets/images/33.png';
import img35 from './assets/images/35.png';
import img36 from './assets/images/36.png';
import img37 from './assets/images/37.png';
import img38 from './assets/images/38.png';
import img39 from './assets/images/39.png';
import img40 from './assets/images/40.png';
import img41 from './assets/images/41.png';

const decode = (b64) =>
  typeof window === 'undefined'
    ? atob(b64)
    : decodeURIComponent(
        Array.prototype.map
          .call(atob(b64), (c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      );

const PHONE_B64 = 'KzU3MzA0MTE3NTExOA==';
const MSG_B64 = 'SG9sYSwgZXN0b3kgaW50ZXJlc2FkbyBlbiBlbCBBcGFydGFtZW50byBEZWx2ZW50dG8=';

const translations = {
  es: {
    apartmentName: "Apartamento en Santa Marta",
    subtitle: "A solo 2 minutos de las tranquilas playas de Cabo Tortuga",
    galleryAlt: (i) => `Apartamento ${i + 1}`,
    thumbAlt: (i) => `Miniatura ${i + 1}`,
    servicesTitle: "Servicios y Comodidades",
    roomServicesTitle: "Servicios de Habitación",
    familyServicesTitle: "Amenidades del Conjunto",
    contactTitle: "Ubicación y Contacto",
    whatsappBtn: "Reservar por WhatsApp",
    footer: "Todos los derechos reservados.",
    address: "Cabo Tortuga - Pozos Colorados, Santa Marta",
    modalTitle: "Advertencia",
    modalWarning: "⚠️ Antiestafa:",
    modalWarningText: "Nunca se solicitarán pagos por anticipado.",
    modalCancel: "Cancelar",
    modalContinue: "Continuar",
    roomServices: [
      { icon: <FaBed />, name: <>2 Camas <br />4 Personas</> },
      { icon: <FaShower />, name: "Baño privado" },
      { icon: <FaWifi />, name: "WiFi" },
      { icon: <FaSnowflake />, name: "Aire Acondicionado" },
      { icon: <MdKitchen />, name: "Cocina Equipada" },
      { icon: <FaTv />, name: "Televisión" },
      { icon: <MdBalcony />, name: "Balcón" },
      { icon: <MdLocalLaundryService />, name: "Lavaplatos" },
      { icon: <PiHairDryerBold />, name: "Secador de Cabello" },
      { icon: <FaDog />, name: "Mascotas Permitidas" },
      { icon: <IoLogoNoSmoking />, name: "Prohibido Fumar" },
    ],
    familyServices: [
      "Gimnasio", "Parqueadero", "Piscina para adultos y adolescentes",
      "Parque acuático para niños", "Piscina para niños y bebés",
      "Zona de juegos infantiles", "Jacuzzi", "Spa",
      "Baño turco y sauna", "Barbacoa", "Pista de squash",
      "Zona de ping-pong", "Mesa de juegos y mesa de billar", "Salón social",
    ],
  },
  en: {
    apartmentName: "Apartment in Santa Marta",
    subtitle: "Just 2 minutes from the peaceful beaches of Cabo Tortuga",
    galleryAlt: (i) => `Apartment ${i + 1}`,
    thumbAlt: (i) => `Thumbnail ${i + 1}`,
    servicesTitle: "Services & Amenities",
    roomServicesTitle: "Room Services",
    familyServicesTitle: "Resort Amenities",
    contactTitle: "Location & Contact",
    whatsappBtn: "Book via WhatsApp",
    footer: "All rights reserved.",
    address: "Cabo Tortuga - Pozos Colorados, Santa Marta",
    modalTitle: "Warning",
    modalWarning: "⚠️ Anti-scam:",
    modalWarningText: "No advance payments will be requested.",
    modalCancel: "Cancel",
    modalContinue: "Continue",
    roomServices: [
      { icon: <FaBed />, name: <>2 Beds <br />4 Guests</> },
      { icon: <FaShower />, name: "Private Bathroom" },
      { icon: <FaWifi />, name: "WiFi" },
      { icon: <FaSnowflake />, name: "Air Conditioning" },
      { icon: <MdKitchen />, name: "Equipped Kitchen" },
      { icon: <FaTv />, name: "Television" },
      { icon: <MdBalcony />, name: "Balcony" },
      { icon: <MdLocalLaundryService />, name: "Dishwasher" },
      { icon: <PiHairDryerBold />, name: "Hair Dryer" },
      { icon: <FaDog />, name: "Pets Allowed" },
      { icon: <IoLogoNoSmoking />, name: "No Smoking" },
    ],
    familyServices: [
      "Gym", "Parking", "Pool for adults and teens",
      "Water park for kids", "Pool for kids and babies",
      "Children's playground", "Jacuzzi", "Spa",
      "Turkish bath and sauna", "BBQ", "Squash court",
      "Ping-pong area", "Game tables and billiards", "Social hall",
    ],
  },
};

function detectLang() {
  const stored = localStorage.getItem('delventto-lang');
  if (stored) return stored;
  const browser = (navigator.language || 'es').toLowerCase();
  return browser.startsWith('en') ? 'en' : 'es';
}

function App() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [thumbnailScroll, setThumbnailScroll] = useState(0);
  const [isSecureModalOpen, setIsSecureModalOpen] = useState(false);
  const [lang, setLang] = useState(detectLang);
  const thumbnailsContainerRef = useRef(null);
  const touchStartX = useRef(null);
  const t = translations[lang];

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    setLang(newLang);
    localStorage.setItem('delventto-lang', newLang);
  };

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

  const images = [
    img1, img2, img3, img4, img6, img9, img10, img13, img14,
    img16, img18, img19, img20, img21, img22, img23,
    // Zonas Comunes
    img30, img31, img33, img35, img36, img37, img38, img39, img40, img41,
    // Playa
    img25, img26, img27
  ];

  const locationData = {
    phone: decode(PHONE_B64),
    whatsappMessage: decode(MSG_B64),
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
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
    setIsSecureModalOpen(true);
  };

  const closeSecureModal = () => setIsSecureModalOpen(false);

  const openWhatsApp = () => {
    const url = `https://wa.me/${locationData.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(locationData.whatsappMessage)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsSecureModalOpen(false);
  };

  return (
    <div className="App">
      <section className="hero-section">
        <button className="lang-switch" onClick={toggleLang} aria-label="Switch language">
          {lang === 'es' ? '🇬🇧 EN' : '🇨🇴 ES'}
        </button>
        <div className="container">
          <h1 className="apartment-name">{t.apartmentName}</h1>
          <p className="apartment-subtitle">{t.subtitle}</p>
        </div>
      </section>

      <section className="gallery-section">
        <div className="container">
          <div className="gallery-container">
            <button className="gallery-btn prev" onClick={prevImage}>❮</button>
            <div className="main-image" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>
              <img 
                src={images[currentImageIndex]} 
                alt={t.galleryAlt(currentImageIndex)}
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
                {images.map((image, index) => (
                  <div 
                    key={index}
                    className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                    onClick={() => goToImage(index)}
                  >
                    <img src={image} alt={t.thumbAlt(index)} />
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
          <h2>{t.servicesTitle}</h2>

          <h3 className="services-subtitle">{t.roomServicesTitle}</h3>
          <div className="services-grid">
            {t.roomServices.map((service, index) => (
              <div key={index} className="service-card">
                <span className="service-icon">{service.icon}</span>
                <p className="service-name">{service.name}</p>
              </div>
            ))}
          </div>

          <h3 className="services-subtitle">{t.familyServicesTitle}</h3>
          <div className="family-services">
            {t.familyServices.map((item, index) => (
              <div key={index} className="family-service-item">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <h2>{t.contactTitle}</h2>
          <div className="contact-content">
            <div className="location-info">
              <div className="service-card location-card">
                <span className="service-icon"><FaMapMarkerAlt /></span>
                <p className="service-name">{t.address}</p>
              </div>
              <div className="map-embed">
                <div className="map-clip">
                  <iframe
                    title="Google Maps - Delventto"
                    src="https://maps.google.com/maps?q=Cabo+Tortuga+Pozos+Colorados+Santa+Marta&z=15&output=embed&iwloc=near"
                    width="100%"
                    height="150"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
                <a
                  className="map-link"
                  href="https://www.google.com/maps/place/Playa+cabo+tortuga/@11.172476,-74.2369208,17z/data=!4m10!1m2!2m1!1sCabo+Tortuga+Pozos+Colorados+Santa+Marta!3m6!1s0x8ef4f76d5b86efbf:0xcf9e35e669e7aeb8!8m2!3d11.173728!4d-74.2351794!15sCihDYWJvIFRvcnR1Z2EgUG96b3MgQ29sb3JhZG9zIFNhbnRhIE1hcnRhkgEMcHVibGljX2JlYWNo4AEA!16s%2Fg%2F11j8_rrm99?entry=ttu&g_ep=EgoyMDI2MDYyNC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {lang === 'es' ? 'Ver en Google Maps' : 'View on Google Maps'} ↗
                </a>
              </div>
            </div>
              <button className="whatsapp-btn" onClick={handleWhatsAppClick}>
                {t.whatsappBtn}
              </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2026 Delventto. {t.footer}</p>
      </footer>

      {isSecureModalOpen && (
        <div className="secure-modal-overlay" onClick={closeSecureModal}>
          <div className="secure-modal" onClick={(e) => e.stopPropagation()}>
            <button className="secure-modal-close" onClick={closeSecureModal} aria-label={t.modalCancel}>&times;</button>
            <h3 className="secure-modal-title">{t.modalTitle}</h3>
            <div className="secure-modal-warnings">
              <p><strong>{t.modalWarning}</strong></p>
              <ul>
                <li>{t.modalWarningText}</li>
              </ul>
            </div>
            <div className="secure-modal-actions">
              <button className="secure-modal-btn secure-modal-cancel" onClick={closeSecureModal}>{t.modalCancel}</button>
              <button className="secure-modal-btn secure-modal-confirm" onClick={openWhatsApp}>{t.modalContinue}</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;