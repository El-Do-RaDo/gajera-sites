import { motion } from 'motion/react';
import PageTransition from '../components/PageTransition';
import ParallaxImage from '../components/ParallaxImage';

export default function Contact() {
  return (
    <PageTransition>
      <div className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto min-h-[80vh] flex flex-col lg:flex-row gap-24">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-6">
            Let's <span className="text-[#d4af37] italic">Connect</span>
          </h1>
          <p className="font-sans text-[#1a1a1a]/60 dark:text-white/60 max-w-md leading-relaxed mb-16 transition-colors duration-500">
            Whether you're looking for a luxury residence or a commercial masterpiece, our team is ready to bring your vision to life.
          </p>

          <div className="space-y-12">
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Headquarters</h3>
              <p className="font-serif text-2xl text-[#1a1a1a]/80 dark:text-white/80 transition-colors duration-500">
                101 Gajera Tower, Bandra Kurla Complex<br />
                Ahmedabad, Gujarat 380058<br />
                India
              </p>
            </div>
            
            <div>
              <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Contact Info</h3>
              <p className="font-serif text-2xl text-[#1a1a1a]/80 dark:text-white/80 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors cursor-pointer">
                +91 98765 43210
              </p>
              <p className="font-serif text-2xl text-[#1a1a1a]/80 dark:text-white/80 hover:text-[#d4af37] dark:hover:text-[#d4af37] transition-colors cursor-pointer">
                info@gajeraestate.com
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 bg-white dark:bg-[#050505] p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/5 transition-colors duration-500 shadow-xl shadow-black/5 dark:shadow-none"
        >
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">Full Name</label>
              <input
                type="text"
                id="name"
                className="bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-xl font-serif focus:outline-none focus:border-[#d4af37] dark:focus:border-[#d4af37] transition-colors"
                placeholder="John Doe"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">Email Address</label>
              <input
                type="email"
                id="email"
                className="bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-xl font-serif focus:outline-none focus:border-[#d4af37] dark:focus:border-[#d4af37] transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="interest" className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">Area of Interest</label>
              <select
                id="interest"
                className="bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-xl font-serif focus:outline-none focus:border-[#d4af37] dark:focus:border-[#d4af37] transition-colors appearance-none"
              >
                <option value="residential" className="bg-white dark:bg-[#0a0a0a]">Luxury Residential</option>
                <option value="commercial" className="bg-white dark:bg-[#0a0a0a]">Commercial Spaces</option>
                <option value="other" className="bg-white dark:bg-[#0a0a0a]">Other Inquiries</option>
              </select>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">Message</label>
              <textarea
                id="message"
                rows={4}
                className="bg-transparent border-b border-black/20 dark:border-white/20 pb-4 text-xl font-serif focus:outline-none focus:border-[#d4af37] dark:focus:border-[#d4af37] transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="mt-8 px-8 py-4 bg-[#d4af37] text-black font-sans text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-300 rounded-full w-max"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
}
