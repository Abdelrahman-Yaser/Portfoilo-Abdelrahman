import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle2, ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero-image.png'; // تأكد من مسار الصورة
import { FaWhatsapp } from 'react-icons/fa';

export const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center justify-center relative isolate overflow-hidden bg-[#0a0f1c] text-white py-20">
      {/* Grid + Blue Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(100,116,139,0.14) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(100,116,139,0.14) 1px, transparent 1px),
            radial-gradient(ellipse 55% 85% at 82% 45%, rgba(37,99,235,0.22), transparent 72%)
          `,
          backgroundSize: "45px 45px, 45px 45px, 100% 100%",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* الجانب الأيسر: النصوص والأزرار */}
          <div className="text-left flex-1 mt-10 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* شارة متاح لمشاريع جديدة */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm mb-6 text-gray-300 shadow-sm backdrop-blur-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-pulse"></span>
                Available for new projects
              </div>

              {/* الاسم والمسمى الوظيفي */}
              <h2 className="text-lg md:text-xl text-gray-300 mb-4 font-medium tracking-wide">
                Abdelrahman <span className="mx-2 text-gray-500">•</span> Full Stack Developer
              </h2>

              {/* العنوان الرئيسي */}
              <h1 className="text-5xl lg:text-[4.5rem] font-bold mb-6 text-white leading-[1.1] tracking-tight">
                High-performance <br />
                web applications, <br />
                <span className="relative inline-block pb-2">
                  built to scale.
                  {/* الخط البرتقالي تحت الكلمة */}
                  <span className="absolute bottom-0 left-0 w-full h-[6px] bg-[#f99339] rounded-full"></span>
                </span>
              </h1>

              {/* الوصف */}
              <p className="text-gray-400 max-w-lg mb-10 leading-relaxed text-lg">
                I create beautiful, functional web experiences. Specialized in React & NestJS, turning ideas into scalable solutions with clean, maintainable code.
              </p>

              {/* الأزرار */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <a 
                  href="https://wa.me/201027427662" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#f9a339] text-gray-900 rounded-xl hover:bg-[#e68128] hover:scale-105 transition-all font-bold text-lg"
                >
                  <FaWhatsapp size={22} />
                  Start a project
                </a>
                <a 
                  href="#projects" 
                  className="flex items-center gap-2 px-8 py-3.5 bg-[#1b2333] border border-gray-700 text-white rounded-xl hover:bg-[#252f44] hover:border-gray-500 transition-all font-semibold text-lg"
                >
                  See my work
                  <ArrowRight size={20} />
                </a>
              </div>

              {/* نص صغير تحت الأزرار */}
              <div className="flex items-center gap-2 text-sm text-gray-400 font-medium">
                <CheckCircle2 size={16} className="text-emerald-500" />
                <span>Free intro call <span className="mx-1">•</span> Reply immediately</span>
              </div>
            </motion.div>
          </div>

          {/* الجانب الأيمن: الصورة مع الإضاءة (Glow) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center lg:justify-end relative w-full max-w-[500px]"
          >
            {/* تأثير الإضاءة الخلفية للصورة */}
            <div className="absolute inset-0 bg-blue-600/20 blur-[120px] rounded-full transform scale-110"></div>
            
            <div className="relative w-full aspect-[4/5] max-w-[420px] rounded-[2rem] overflow-hidden bg-[#1b2333] p-2 shadow-[0_0_50px_rgba(37,99,235,0.25)] border border-white/10 group">
              <img 
                src={heroImage} 
                alt="Abdelrahman" 
                className="w-full h-full object-cover rounded-[1.5rem] transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* المربع العائم (البادج) التخيلي مثل الموجود بالصورة */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md text-gray-900 p-4 rounded-2xl shadow-xl transform transition-transform duration-500 hover:-translate-y-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-600 text-white font-bold p-3 rounded-xl flex items-center justify-center">
                    3+
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Years building production systems</h4>
                    <p className="text-xs text-gray-500">Frontend • Backend • Full Stack</p>
                  </div>
                </div>
              </div>
              
            </div>
          </motion.div>

        </div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-500 hover:text-emerald-500 transition-colors cursor-pointer"
      >
        <ArrowDown size={30} />
      </motion.div>

    </section>
  );
};