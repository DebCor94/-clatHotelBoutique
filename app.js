// App.js
import React, { useState, useEffect } from 'react';
import { ChevronDown, Wifi, Concierge, Palette, MapPin } from 'lucide-react';

// Definición de estilos base
const styles = {
  colors: {
    primary: '#1A2B3C',
    secondary: '#D4B982',
    light: '#F5F5F0',
    accent: '#808C6C'
  }
};

// Componente de navegación mejorado
const Navigation = ({ currentLang, setCurrentLang }) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages = {
    ES: "Español",
    EN: "English",
    POR: "Português",
    CN: "中文"
  };

  return (
    <nav className="fixed w-full z-50 bg-white/95 shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="w-64 h-24">
            <img 
              src="/logo.svg" 
              alt="Éclat Hotel Logo" 
              className="h-full object-contain"
            />
          </div>

          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-gray-800 hover:text-gray-600">Inicio</a>
            <a href="#rooms" className="text-gray-800 hover:text-gray-600">Habitaciones</a>
            <a href="#experience" className="text-gray-800 hover:text-gray-600">experiencia</a>
            <a href="#location" className="text-gray-800 hover:text-gray-600">Ubicación</a>
            <a href="#contact" className="text-gray-800 hover:text-gray-600">Contacto</a>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative">
              <button 
                className="flex items-center space-x-1"
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
              >
                <span>{currentLang}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-white shadow-lg rounded-lg overflow-hidden">
                  {Object.entries(languages).map(([code, name]) => (
                    <button
                      key={code}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-100"
                      onClick={() => {
                        setCurrentLang(code);
                        setIsLangMenuOpen(false);
                      }}
                    >
                      {name}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <a 
              href="https://www.booking.com" 
              className="hidden md:block bg-[#1A2B3C] text-white px-6 py-2 rounded hover:bg-opacity-90 transition-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Componente Hero con galería
const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    "/hotel-image-1.jpg",
    "/hotel-image-2.jpg",
    "/hotel-image-3.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 transition-opacity duration-1000">
        <img
          src={images[currentImageIndex]}
          alt={`Hotel view ${currentImageIndex + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen bg-black bg-opacity-40">
        <div className="text-center text-white">
          <h1 className="text-6xl md:text-7xl font-light mb-6">
            Éclat Hotel Boutique
          </h1>
          <p className="text-xl mb-8">
            Lujo contemporáneo en el corazón de Palermo Viejo
          </p>
          <a
            href="https://www.booking.com"
            className="bg-[#D4B982] text-[#1A2B3C] px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Reservar Ahora
          </a>
        </div>
      </div>
    </div>
  );
};

// Componente de experiencia mejorado con íconos
const Experience = () => {
  const experiences = [
    {
      icon: <Wifi size={32} className="text-[#1A2B3C]" />,
      title: "Tecnología Inteligente",
      description: "Asistencia personalizada 24/7"
    },
    {
      icon: <Concierge size={32} className="text-[#1A2B3C]" />,
      title: "Servicio de Excelencia",
      description: "Atención personalizada"
    },
    {
      icon: <Palette size={32} className="text-[#1A2B3C]" />,
      title: "experiencia Cultural",
      description: "Arte y cultura local"
    },
    {
      icon: <MapPin size={32} className="text-[#1A2B3C]" />,
      title: "Ubicación Premium",
      description: "Corazón de Palermo"
    }
  ];

  return (
    <section className="py-20 bg-[#F5F5F0]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl text-center mb-16 text-[#1A2B3C]">
          La experiencia Éclat
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#F5F5F0] rounded-full">
                {exp.icon}
              </div>
              <h3 className="text-xl mb-2">{exp.title}</h3>
              <p className="text-gray-600">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Aplicación principal
const App = () => {
  const [currentLang, setCurrentLang] = useState('ES');

  return (
    <div className="min-h-screen">
      <Navigation currentLang={currentLang} setCurrentLang={setCurrentLang} />
      <Hero />
      <Experience />
      {/* Aquí irían los demás componentes */}
    </div>
  );
};

export default App;