import React from 'react';
import { motion } from 'framer-motion';

const Datenschutz: React.FC = () => {
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
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUpVariants}
          custom={0}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-secondary mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-lg max-w-none text-secondary-lighter">
            <h2>1. Datenschutz auf einen Blick</h2>
            <h3>Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, 
              wenn Sie diese Website besuchen. Diese Website erhebt keine personenbezogenen Daten.
            </p>

            <h2>2. Hosting</h2>
            <p>
              Diese Website wird auf Squarespace gehostet. Die Server von Squarespace befinden sich in den USA.
            </p>

            <h2>3. Datenerfassung und Verarbeitung</h2>
            <p>
              Auf dieser Website werden keine personenbezogenen Daten erhoben oder verarbeitet. Es werden keine Tracking-Tools 
              wie Google Analytics oder Facebook Pixel verwendet.
            </p>

            <h2>4. Kontaktmöglichkeiten</h2>
            <p>
              Die einzige Kontaktmöglichkeit besteht über einen WhatsApp-Button mit direkter Weiterleitung. Bei der Nutzung 
              von WhatsApp gelten die Datenschutzbestimmungen von WhatsApp Inc.
            </p>

            <h2>5. Newsletter und E-Mail-Marketing</h2>
            <p>
              Es gibt keine Newsletter-Anmeldung oder E-Mail-Marketing-Aktivitäten. Es erfolgt keine Erhebung von 
              E-Mail-Adressen für Marketingzwecke.
            </p>

            <h2>6. Datenweitergabe</h2>
            <p>
              Da keine personenbezogenen Daten erhoben werden, erfolgt auch keine Weitergabe von Daten an externe 
              Dienstleister oder Dritte.
            </p>

            <h2>7. Datenspeicherung</h2>
            <p>
              Es erfolgt keine Speicherung von personenbezogenen Daten, da keine solchen Daten erhoben werden.
            </p>

            <h2>8. Ihre Rechte</h2>
            <p>
              Da keine personenbezogenen Daten erhoben oder verarbeitet werden, entfallen die üblichen Rechte auf 
              Auskunft, Berichtigung, Löschung etc. Bei Fragen zum Datenschutz können Sie uns dennoch jederzeit 
              kontaktieren.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Datenschutz;