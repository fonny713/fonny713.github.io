'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, Clock, MapPin, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    industry: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: '(+48) 453 425 473',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'kontakt@StronaDlaWas.com',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Clock,
      title: 'Godziny Pracy',
      details: 'Pon - Pią: 9:00 - 18:00',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: MapPin,
      title: 'Lokalizacja',
      details: 'Obsługujemy firmy w całej Polsce',
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Gotowy na <span className="text-yellow-400">Transformację</span> Twojej Firmy?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Omówmy Twój projekt i stwórzmy stronę internetową, która przyniesie prawdziwe rezultaty Twojej firmie.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-8 text-yellow-400">
              Skontaktuj się z Nami
            </h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  className="flex items-center space-x-4"
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${info.color} p-3 flex-shrink-0`}>
                    <info.icon className="w-full h-full text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{info.title}</h4>
                    <p className="text-blue-200">{info.details}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Why Choose Us */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-12 p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20"
            >
              <h4 className="text-xl font-bold mb-4 text-yellow-400">Dlaczego My?</h4>
              <ul className="space-y-3">
                {[
                  'Specjalizacja branżowa',
                  'Nowoczesny, responsywny design',
                  'Optymalizacja SEO dla lokalnych wyszukiwań',
                  'Stałe wsparcie i utrzymanie strony',
                ].map((item, index) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-blue-100">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-100 mb-2">
                    Imię i Nazwisko
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="Twoje imię i nazwisko"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-100 mb-2">
                    Adres Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                    placeholder="twoj@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="business" className="block text-sm font-medium text-blue-100 mb-2">
                  Nazwa Firmy
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200"
                  placeholder="Nazwa Twojej firmy"
                />
              </div>

              <div>
                <label htmlFor="industry" className="block text-sm font-medium text-blue-100 mb-2">
                  Typ Działalności
                </label>
                <div className="relative">
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 appearance-none cursor-pointer hover:bg-white/15 backdrop-blur-sm"
                  >
                    <option value="" className="bg-gray-800 text-gray-200">Wybierz swoją branżę</option>
                    <option value="salon" className="bg-gray-800 text-white">Salon Fryzjerski / SPA</option>
                    <option value="restaurant" className="bg-gray-800 text-white">Restauracja / Kawiarnia</option>
                    <option value="mechanic" className="bg-gray-800 text-white">Warsztat / Mechanik</option>
                    <option value="retail" className="bg-gray-800 text-white">Handel / E-commerce</option>
                    <option value="fitness" className="bg-gray-800 text-white">Fitness / Zdrowie</option>
                    <option value="home-services" className="bg-gray-800 text-white">Usługi Domowe</option>
                    <option value="other" className="bg-gray-800 text-white">Inne</option>
                  </select>
                  {/* Custom dropdown arrow */}
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg className="w-5 h-5 text-blue-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-blue-100 mb-2">
                  Szczegóły Projektu
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Opowiedz nam o swoim projekcie, terminach i konkretnych wymaganiach..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitted}
                className={`w-full flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                  isSubmitted
                    ? 'bg-green-500 text-white'
                    : 'bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 hover:from-yellow-300 hover:to-orange-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Wiadomość Wysłana!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Wyślij Wiadomość</span>
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
