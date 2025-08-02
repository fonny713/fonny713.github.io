'use client';

import { motion } from 'framer-motion';
import { Scissors, Wrench, Utensils, Store, Home, Dumbbell } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Salony Fryzjerskie i SPA',
      description: 'Piękne strony z rezerwacją online i galerią usług.',
      features: ['Rezerwacje Online', 'Galeria Usług', 'Profile Personelu'],
      color: 'from-pink-500 to-rose-500',
    },
    {
      icon: Wrench,
      title: 'Warsztaty Samochodowe',
      description: 'Profesjonalne strony, które budują zaufanie i generują leady.',
      features: ['Katalog Usług', 'Zapytania o Wycenę', 'Certyfikaty'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Utensils,
      title: 'Restauracje i Kawiarnie',
      description: 'Apetyczne strony z menu i zamówieniami online.',
      features: ['Menu Cyfrowe', 'Zamówienia Online', 'Rezerwacje'],
      color: 'from-orange-500 to-red-500',
    },
    /*{
      icon: Store,
      title: 'Sklepy Detaliczne',
      description: 'Kompletne rozwiązania e-commerce dla lokalnych sklepów.',
      features: ['Katalog Produktów', 'Koszyk', 'Płatności'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Home,
      title: 'Usługi Domowe',
      description: 'Strony generujące leady dla wykonawców i usług.',
      features: ['Galeria Projektów', 'Formularze Wyceny', 'Obszar Działania'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Dumbbell,
      title: 'Fitness i Zdrowie',
      description: 'Dynamiczne strony dla siłowni i specjalistów zdrowia.',
      features: ['Harmonogram Zajęć', 'Karnety', 'Profile Trenerów'],
      color: 'from-teal-500 to-blue-500',
    }, */
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Specjalizujemy się w Twojej <span className="gradient-text">Branży</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Rozumiemy unikalne potrzeby różnych firm i tworzymy dostosowane rozwiązania, 
            które przynoszą rezultaty w Twojej konkretnej branży.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-full h-full text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.1 + featureIndex * 0.1 + 0.3,
                        duration: 0.4
                      }}
                      className="flex items-center text-gray-700"
                    >
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Nie widzisz swojej branży? Współpracujemy ze wszystkimi typami firm.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Omówmy Twój Projekt
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
