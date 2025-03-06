import React from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, Mail, MapPin, ArrowRight, MapIcon as WhatsappIcon } from 'lucide-react';
import Button from '../components/Button';

const Purchase: React.FC = () => {
  const benefits = [
    'Faire und transparente Preise',
    'Schnelle Abwicklung ohne Umwege',
    'Kostenlose Fahrzeugbewertung',
    'Sofortige Barauszahlung möglich',
    'Übernahme aller Formalitäten',
    'Abholung in ganz Bayern',
  ];

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.4, 0.0, 0.2, 1]
      }
    })
  };

  return (
    <div className="pt-24">
      <HeroSection
        title="Verkaufen Sie Ihr Fahrzeug"
        subtitle="Schnell, unkompliziert und zu fairen Preisen"
        backgroundImage="https://images.unsplash.com/photo-1518987048-93e29699e79a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits Section */}
            <motion.div
              className="bg-white shadow-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={0}
            >
              <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-tight">Ihre Vorteile</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              <ul className="space-y-6">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle size={24} className="text-primary mt-0.5 mr-4 flex-shrink-0" />
                    <span className="text-secondary-lighter text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Section */}
            <motion.div
              className="bg-white shadow-elegant p-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUpVariants}
              custom={1}
            >
              <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-tight">Kontakt</h2>
              <div className="w-16 h-1 bg-primary mb-8"></div>
              
              <p className="text-lg text-secondary-lighter mb-8">
                Sie haben Fragen zum Verkauf Ihres Fahrzeugs? Kontaktieren Sie uns direkt:
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider">Telefon</h3>
                    <a 
                      href="tel:+491736851896" 
                      className="text-secondary-lighter hover:text-primary transition-colors text-lg"
                    >
                      +49 173 6851896
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider">E-Mail</h3>
                    <a 
                      href="mailto:autopunkt-glonn@gmx.de" 
                      className="text-secondary-lighter hover:text-primary transition-colors text-lg"
                    >
                      autopunkt-glonn@gmx.de
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-bold text-secondary mb-1 uppercase tracking-wider">Adresse</h3>
                    <a 
                      href="https://maps.google.com/?q=Kastenseestraße 6, 85625 Glonn" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-secondary-lighter hover:text-primary transition-colors text-lg"
                    >
                      Kastenseestraße 6, 85625 Glonn
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-12 flex flex-col sm:flex-row gap-4">
                <a 
                  href="tel:+491736851896"
                  className="flex-1"
                >
                  <Button variant="primary" fullWidth className="group">
                    Jetzt anrufen
                    <Phone size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </a>
                
                <a 
                  href="https://wa.me/491736851896?text=Hallo%20Autopunkt%20Glonn,%20ich%20möchte%20mein%20Fahrzeug%20verkaufen." 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button variant="outline" fullWidth className="bg-[#25D366] border-[#25D366] text-white hover:bg-[#128C7E] hover:border-[#128C7E]">
                    WhatsApp Kontakt
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Purchase;