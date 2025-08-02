'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Scissors, Utensils, Wrench, Store } from 'lucide-react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
   /* {
      id: 1,
      title: 'Studio Elegancji',
      category: 'salon',
      description: 'Nowoczesna strona salonu z systemem rezerwacji online',
      image: 'salon',
      icon: Scissors,
      color: 'from-pink-500 to-rose-500',
      tags: ['Salon Fryzjerski', 'Rezerwacje', 'Galeria'],
    }, */
    {
      id: 2,
      title: 'Bistro Bella',
      category: 'restaurant',
      description: 'Strona restauracji z cyfrowym menu i zamówieniami',
      image: 'restaurant',
      icon: Utensils,
      color: 'from-orange-500 to-red-500',
      tags: ['Restauracja', 'Menu', 'Zamówienia'],
    },
    {
      id: 3,
      title: 'Warsztat Pro Auto',
      category: 'mechanic',
      description: 'Profesjonalny warsztat z katalogiem usług',
      image: 'mechanic',
      icon: Wrench,
      color: 'from-blue-500 to-cyan-500',
      tags: ['Naprawa Aut', 'Usługi', 'Zaufanie'],
    },
  /*  {
      id: 4,
      title: 'Rękodzieło Artisan',
      category: 'retail',
      description: 'Sklep e-commerce z produktami ręcznie robionymi',
      image: 'retail',
      icon: Store,
      color: 'from-green-500 to-emerald-500',
      tags: ['E-commerce', 'Ręcznie Robione', 'Sklep'],
    }, */
   /* {
      id: 5,
      title: 'SPA Zen',
      category: 'salon',
      description: 'Relaksująca strona spa z rezerwacją zabiegów',
      image: 'spa',
      icon: Scissors,
      color: 'from-purple-500 to-indigo-500',
      tags: ['SPA', 'Wellness', 'Rezerwacje'],
    }, */
    {
      id: 6,
      title: 'Pizzeria Tony\'ego',
      category: 'restaurant',
      description: 'Pizzeria z zamówieniami na wynos',
      image: 'pizza',
      icon: Utensils,
      color: 'from-yellow-500 to-orange-500',
      tags: ['Pizza', 'Dostawa', 'Zamówienia Online'],
    },
  ];

  const filters = [
    { id: 'all', label: 'Wszystkie Projekty' },
    { id: 'salon', label: 'Salony i SPA' },
    { id: 'restaurant', label: 'Restauracje' },
    { id: 'mechanic', label: 'Warsztaty' },
    //{ id: 'retail', label: 'Sklepy' },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-24 bg-gray-50">
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
            Nasze Ostatnie <span className="gradient-text">Prace</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zobacz jak pomagaliśmy firmom takim jak Twoja odnieść sukces online dzięki 
            pięknym, funkcjonalnym stronom, które przynoszą rezultaty.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100 shadow-md'
              }`}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  {/* Project Image/Preview */}
                  <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white/20 backdrop-blur-sm p-6 rounded-2xl"
                      >
                        <project.icon className="w-16 h-16 text-white" />
                      </motion.div>
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    
                    {/* View Button */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileHover={{ opacity: 1, scale: 1 }}
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-2 rounded-lg">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-8">
            Gotowy, żeby Twoja firma została tutaj przedstawiona?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            Rozpocznij Swój Projekt Już Dziś
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
