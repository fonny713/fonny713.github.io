'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Star } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div 
          className="absolute inset-0 opacity-40" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        animate={{ 
          y: [-10, 10, -10], 
          rotate: [0, 5, -5, 0] 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-20 left-10 text-blue-400 opacity-20"
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-10, 10, -10], 
          rotate: [0, 5, -5, 0] 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-32 right-20 text-purple-400 opacity-20"
      >
        <Zap className="h-6 w-6" />
      </motion.div>
      
      <motion.div
        animate={{ 
          y: [-10, 10, -10], 
          rotate: [0, 5, -5, 0] 
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-32 left-20 text-yellow-400 opacity-20"
      >
        <Star className="h-7 w-7" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          {/* Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-4"
          >
            <Sparkles className="h-4 w-4 mr-3" />
            Stworzymy Twoją Wymarzoną Stronę
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight"
          >
            <span className="block text-gray-900">Innowacyjne</span>
            <span className="block gradient-text">Strony</span>
          </motion.h1>

          {/* Subtitle line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-8"
          >
            <span className="block text-gray-700 text-2xl md:text-3xl lg:text-4xl font-light max-w-4xl mx-auto">
              które przekształcają odwiedzających w klientów
            </span>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            Tworzymy premium strony internetowe dla lokalnych biznesów. 
            <span className="text-blue-600 font-semibold"> Nowoczesny design</span> spotyka się z 
            <span className="text-purple-600 font-semibold"> mocnymi rezultatami</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
              className="group bg-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <span>Rozpocznij Swój Projekt</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToPortfolio}
              className="text-gray-700 font-semibold text-lg hover:text-blue-600 transition-colors duration-200 underline underline-offset-4"
            >
              Zobacz Nasze Prace
            </motion.button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto"
          >
            {[
              { number: '50+', label: 'Zbudowanych Stron' },
              { number: '98%', label: 'Zadowolenia Klientów' },
              { number: '24/7', label: 'Wsparcie' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;