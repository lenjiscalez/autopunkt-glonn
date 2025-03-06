import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import Button from '../components/Button';
import { Car, ShieldCheck, Banknote, Clock, ArrowRight, CreditCard, CarFront, FileCheck } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: <CarFront size={36} className="text-primary" />,
      title: 'Inzahlungnahme',
      description: 'Unkomplizierter Fahrzeugwechsel: Geben Sie Ihr aktuelles Fahrzeug in Zahlung und profitieren Sie von einer schnellen Bewertung – auf Wunsch auch per WhatsApp.',
    },
    {
      icon: <CreditCard size={36} className="text-primary" />,
      title: 'Finanzierung',
      description: 'Maßgeschneiderte Finanzierungslösungen für Ihr Wunschfahrzeug. Wir beraten Sie individuell und finden die optimale Rate für Ihre Bedürfnisse.',
    },
    {
      icon: <ShieldCheck size={36} className="text-primary" />,
      title: 'Garantie',
      description: 'Sorgenfrei fahren mit unserer umfassenden Fahrzeuggarantie. Alle Fahrzeuge werden gründlich geprüft und in einwandfreiem Zustand übergeben.',
    },
    {
      icon: <FileCheck size={36} className="text-primary" />,
      title: 'Zulassungsservice',
      description: 'Sparen Sie Zeit und Aufwand: Wir übernehmen alle Formalitäten der Fahrzeugzulassung für Sie – schnell, zuverlässig und ohne zusätzlichen Stress.',
    },
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
        title="Fahrzeuge, auf die Sie zählen können"
        subtitle="Ihr zuverlässiger Partner für den Ankauf und Verkauf von Fahrzeugen"
        buttonText="Fahrzeuge entdecken"
        buttonLink="/fahrzeuge"
        backgroundImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
      />

      {/* About Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6 uppercase tracking-tight">
              Über Autopunkt Glonn
              <div className="w-20 h-1 bg-primary mx-auto mt-6"></div>
            </h2>
            <p className="text-secondary-lighter mb-6 leading-relaxed">
              Seit unserer Gründung haben wir uns auf den An- und Verkauf von hochwertigen Fahrzeugen spezialisiert. 
              Unser Ziel ist es, Ihnen den bestmöglichen Service zu bieten und Sie bei der Suche nach Ihrem Traumauto 
              oder beim Verkauf Ihres Fahrzeugs optimal zu unterstützen.
            </p>
            <p className="text-secondary-lighter mb-8 leading-relaxed">
              Mit jahrelanger Erfahrung im Automobilbereich und einer Leidenschaft für Fahrzeuge aller Art 
              sind wir Ihr zuverlässiger Partner in Glonn und Umgebung.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link to="/fahrzeuge">
                <Button variant="primary" className="group w-full sm:w-auto">
                  Fahrzeuge ansehen
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" className="w-full sm:w-auto">
                  Kontakt aufnehmen
                </Button>
              </Link>
            </div>

            {/* Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                variants={fadeInUpVariants}
                custom={1}
                className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-elegant"
              >
                <img
                  src="/assets/Adobe Express - file.png"
                  alt="Autopunkt Glonn Außenansicht"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={fadeInUpVariants}
                custom={2}
                className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-elegant"
              >
                <img
                  src="/assets/Adobe Express Image 2.png"
                  alt="Autopunkt Glonn Showroom"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                variants={fadeInUpVariants}
                custom={3}
                className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden shadow-elegant"
              >
                <img
                  src="/assets/Adobe Express Image 3.png"
                  alt="Autopunkt Glonn Fahrzeuge"
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background-alt">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-3xl font-bold text-secondary mb-6 uppercase tracking-tight">Unsere Leistungen</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-secondary-lighter max-w-2xl mx-auto">
              Bei Autopunkt Glonn bieten wir Ihnen umfassende Dienstleistungen rund um den Fahrzeughandel.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 shadow-elegant hover:shadow-hover transition-all duration-300"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeInUpVariants}
                custom={index + 1}
              >
                <div className="mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-secondary mb-4">{feature.title}</h3>
                <p className="text-secondary-lighter">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-primary to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUpVariants}
            custom={0}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Bereit, Ihr Fahrzeug zu verkaufen?</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-accent-light text-lg mb-10 max-w-2xl mx-auto">
              Wir bieten Ihnen faire Preise und einen unkomplizierten Verkaufsprozess. 
              Kontaktieren Sie uns noch heute für ein unverbindliches Angebot.
            </p>
            <Link to="/ankauf">
              <Button variant="primary" size="lg" className="group">
                Jetzt Fahrzeug verkaufen
                <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;