import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-hero-pattern" />
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our innovative IT solutions can help you achieve your digital transformation goals. 
              Our experts are ready to provide personalized recommendations for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="btn bg-white text-primary-700 hover:bg-gray-100 group"
              >
                Get Free Consultation
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <button className="btn bg-transparent border-2 border-white text-white hover:bg-white/10 group">
                <MessageCircle size={20} className="mr-2" />
                Start Live Chat
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">24/7</div>
              <div className="text-blue-100">Support Available</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">48h</div>
              <div className="text-blue-100">Response Time</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">99%</div>
              <div className="text-blue-100">Client Satisfaction</div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center">
              <div className="text-3xl font-bold mb-2">Free</div>
              <div className="text-blue-100">Initial Consultation</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;