import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Loader2, CheckCircle2, XCircle } from 'lucide-react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export const Contact = () => {
  const [status, setStatus] = useState<Status>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

    if (!serviceId || !templateId || !publicKey) {
      console.error(
        'EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file. See .env.example.'
      );
      setStatus('error');
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, e.currentTarget, { publicKey });
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

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
              <a href="tel:+201143497181" className="hover:text-green-500">+20 114 349 7181</a>
            </div>
            <div className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <MapPin className="text-red-500" />
              <span>Cairo, Egypt</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white"
                placeholder="Your Name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white"
                placeholder="Your Email"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1 text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full p-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700 focus:ring-2 focus:ring-purple-600 outline-none text-black dark:text-white"
                placeholder="How can I help you?"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-all active:scale-95 shadow-lg shadow-purple-500/20 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {status === 'sending' && <Loader2 className="animate-spin" size={18} />}
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="flex items-center gap-2 text-green-600 text-sm font-medium">
                <CheckCircle2 size={16} /> Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="flex items-center gap-2 text-red-500 text-sm font-medium">
                <XCircle size={16} /> Something went wrong. Please email me directly at abdooy640@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
