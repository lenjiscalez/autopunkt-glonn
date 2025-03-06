import React from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
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
        title="Kontakt"
        subtitle="Wir freuen uns auf Ihre Nachricht"
        backgroundImage="https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      />

      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white shadow-elegant p-8 lg:p-12">
              <h2 className="text-2xl font-bold text-secondary mb-6 uppercase tracking-tight">Kontaktinformationen</h2>
              <div className="w-16 h-1 bg-primary mb-12"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <div className="flex items-start">
                    <MapPin size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2 uppercase tracking-wider">Adresse</h3>
                      <p className="text-secondary-lighter">Kastenseestraße 6</p>
                      <p className="text-secondary-lighter">85625 Glonn</p>
                      <p className="text-secondary-lighter">Deutschland</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2 uppercase tracking-wider">Telefon</h3>
                      <p className="text-secondary-lighter">
                        <a href="tel:+491736851896" className="hover:text-primary transition-colors">
                          +49 173 6851896
                        </a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2 uppercase tracking-wider">E-Mail</h3>
                      <p className="text-secondary-lighter">
                        <a href="mailto:autopunkt-glonn@gmx.de" className="hover:text-primary transition-colors">
                          autopunkt-glonn@gmx.de
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-8">
                  <div className="flex items-start">
                    <Clock size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2 uppercase tracking-wider">Öffnungszeiten</h3>
                      <p className="text-secondary-lighter">Montag - Freitag: 9:30 - 18:00 Uhr</p>
                      <p className="text-secondary-lighter">Samstag: 9:30 - 14:00 Uhr</p>
                      <p className="text-secondary-lighter">Sonntag: Geschlossen</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Instagram size={24} className="text-primary mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-secondary mb-2 uppercase tracking-wider">Social Media</h3>
                      <p className="text-secondary-lighter">
                        <a 
                          href="https://www.instagram.com/autopunkt.glonn" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          @autopunkt.glonn
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6 uppercase tracking-tight">So finden Sie uns</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-secondary-lighter max-w-2xl mx-auto">
              Besuchen Sie uns in Glonn. Wir freuen uns auf Ihren Besuch!
            </p>
          </motion.div>
          
          <motion.div 
            className="overflow-hidden shadow-elegant h-[500px]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={1}
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2670.342866954078!2d11.860576977294112!3d47.987760671227505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479dfbac6e935269%3A0x9bfb073e81e38dcc!2sKastenseestra%C3%9Fe%206%2C%2085625%20Glonn!5e0!3m2!1sde!2sde!4v1741078232252!5m2!1sde!2sde" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Autopunkt Glonn Standort"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;