import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Button from '../components/Button';
import BackToTop from '../components/BackToTop';

const Vehicles: React.FC = () => {
  const [iframeError, setIframeError] = useState(false);

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

  const handleIframeError = () => {
    setIframeError(true);
  };

  return (
    <div className="pt-24">
      <HeroSection
        title="Unsere Premium Fahrzeuge"
        subtitle="Entdecken Sie unsere Auswahl an hochwertigen Fahrzeugen"
        backgroundImage="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1283&q=80"
      />

      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4">
          {/* Mobile.de Integration */}
          <motion.div
            className="mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-secondary mb-4 uppercase tracking-tight">
                Unser Fahrzeugangebot
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-secondary-lighter max-w-2xl mx-auto">
                Entdecken Sie unsere aktuellen Fahrzeugangebote direkt auf mobile.de. 
                Kontaktieren Sie uns für weitere Informationen!
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-elegant overflow-hidden">
              {!iframeError ? (
                <div className="relative w-full overflow-x-auto">
                  <div className="max-w-full md:max-w-none overflow-hidden">
                    <iframe
                      src="https://home.mobile.de/home/index.html?partnerHead=false&customerId=25562543"
                      width="100%"
                      height="800"
                      className="border-0 w-full min-w-[320px] md:min-w-0 transition-all duration-300 transform-gpu"
                      style={{
                        maxWidth: '100vw',
                        WebkitOverflowScrolling: 'touch',
                      }}
                      onError={handleIframeError}
                      title="Autopunkt Glonn Fahrzeuge auf mobile.de"
                    />
                  </div>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-secondary-lighter mb-6">
                    Das Fahrzeugangebot konnte nicht geladen werden. 
                    Bitte besuchen Sie unsere mobile.de Seite direkt.
                  </p>
                  <a 
                    href="https://home.mobile.de/AUTOPUNKTGLONN#ses" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button variant="primary" className="group">
                      Zum mobile.de Angebot
                      <ExternalLink size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <BackToTop />
    </div>
  );
};

export default Vehicles;