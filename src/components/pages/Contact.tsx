import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export const Contact = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-500">I usually respond within 24 hours</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Mail className="text-purple-600" />
              <a href="mailto:abdooy640@gmail.com" className="hover:text-purple-600">abdooy640@gmail.com</a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <Phone className="text-green-500" />
              <a href="tel:+01027427662" className="hover:text-green-500">01027427662</a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <MapPin className="text-red-500" />
              <span>Cairo, Egypt</span>
            </div>
          </div>

          {/* Formspree - يرسل مباشرة لإيميلك */}
{/* استبدل الرابط أدناه بالرابط الذي حصلت عليه من Formspree */}
<form 
  action="https://formspree.io/f/your_unique_id" // ضع الكود الخاص بك هنا
  method="POST" 
  className="space-y-4"
>
  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
    <input 
      name="name" 
      type="text" 
      required 
      className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white" 
      placeholder="Your Name"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
    <input 
      name="email" 
      type="email" 
      required 
      className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white" 
      placeholder="Your Email"
    />
  </div>

  <div>
    <label className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
    <textarea 
      name="message" 
      rows={4} 
      required 
      className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white" 
      placeholder="How can I help you?"
    ></textarea>
  </div>

  <button 
    type="submit" 
    className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all active:scale-95 shadow-lg shadow-purple-500/20"
  >
    Send Message
  </button>
</form>
        </div>
      </div>
    </section>
  );
};