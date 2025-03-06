import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import Button from './Button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  title,
  subtitle,
  buttonText,
  buttonLink,
  backgroundImage,
}) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start('visible');
  }, [controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] },
    },
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay with gradient - Enhanced for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/60 to-transparent opacity-80"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24">
        <motion.div
          className="max-w-3xl"
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          
          {subtitle && (
            <motion.p 
              className="text-xl md:text-2xl text-white mb-10 font-light"
              variants={itemVariants}
            >
              {subtitle}
            </motion.p>
          )}
          
          {buttonText && buttonLink && (
            <motion.div variants={itemVariants}>
              <Link to={buttonLink}>
                <Button variant="primary" size="lg" className="group">
                  {buttonText}
                  <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="w-0.5 h-16 bg-white mx-auto"
          animate={{ 
            scaleY: [1, 0.5, 1],
            opacity: [0.7, 0.3, 0.7]
          }}
          transition={{ 
            duration: 2, 
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;