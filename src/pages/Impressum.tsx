import React from 'react';
import { motion } from 'framer-motion';

const Impressum: React.FC = () => {
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
          <h1 className="text-3xl font-bold text-secondary mb-8">Impressum</h1>
          
          <div className="prose prose-lg max-w-none text-secondary-lighter">
            <h2>Angaben gemäß § 5 TMG</h2>
            <p>
              Mentor Palloshi Einzelunternehmen<br />
              Kastenseestraße 6<br />
              85625 Glonn
            </p>

            <h2>Kontakt</h2>
            <p>
              Telefon: +49 173 6851896<br />
              E-Mail: autopunkt-glonn@gmx.de
            </p>

            <h2>Vertreten durch</h2>
            <p>
              Mentor Palloshi<br />
              Inhaber
            </p>

            <h2>Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
              https://ec.europa.eu/consumers/odr/.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
            
            <p>
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h2>Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu 
              forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Impressum;