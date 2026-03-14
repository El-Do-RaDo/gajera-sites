import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import ParallaxImage from '../components/ParallaxImage';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(heroScroll, [0, 1], ['0%', '50%']);
  const opacity = useTransform(heroScroll, [0, 0.8], [1, 0]);

  const textY = useTransform(heroScroll, [0, 1], ['0%', '-100%']);
  const textOpacity = useTransform(heroScroll, [0, 0.6], [1, 0]);

  const introRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: introScroll } = useScroll({
    target: introRef,
    offset: ['start end', 'end start'],
  });
  
  const introY1 = useTransform(introScroll, [0, 1], [100, -100]);
  const introY2 = useTransform(introScroll, [0, 1], [-100, 100]);
  const introRotate1 = useTransform(introScroll, [0, 1], [-10, 10]);
  const introRotate2 = useTransform(introScroll, [0, 1], [10, -10]);

  return (
    <PageTransition>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden -mt-24">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-white/40 dark:bg-black/40 transition-colors duration-500" />
          <img
            src="https://lh3.googleusercontent.com/0r0otSppNfRnAcjOdvVfLoan1SikEHn9VV87tN8i5n24323tjPTOsOk9QcDL5KdFO9ygWnHJlwYKWoUWollGuAC580MbOMZnE3A=w3840-h2160-c-rw-v3"
            alt="City Under Construction Drone View"
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/40 dark:from-black/40 via-transparent to-[#f5f2ed] dark:to-[#0a0a0a] transition-colors duration-500" />
        </motion.div>

        <motion.div style={{ y: textY, opacity: textOpacity }} className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter uppercase mb-6 drop-shadow-2xl text-[#1a1a1a] dark:text-white">
              <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Beyond</span>
              <span className="block drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] dark:drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">Architecture</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-sm md:text-base tracking-[0.3em] uppercase text-[#1a1a1a] dark:text-[#d4af37] max-w-2xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.1)] dark:drop-shadow-md transition-colors duration-500"
          >
            Redefining Luxury Living in India
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-black/50 dark:text-white/50 transition-colors duration-500">Scroll to explore</span>
          <div className="w-[1px] h-16 bg-gradient-to-b from-[#d4af37] to-transparent" />
        </motion.div>
      </section>

      {/* Intro Section */}
      <section ref={introRef} className="py-32 px-6 md:px-12 max-w-7xl mx-auto perspective-[2000px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="z-20"
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8 leading-tight text-[#1a1a1a] dark:text-white">
              Crafting <span className="text-[#d4af37] italic">Masterpieces</span><br />
              in Concrete & Glass
            </h2>
            <p className="font-sans text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed mb-8 max-w-md transition-colors duration-500">
              Gajera Estate brings a unique blend of Indian heritage and ultra-modern design. We don't just build structures; we sculpt environments that elevate the human experience.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] hover:text-black dark:hover:text-white transition-colors group">
              Discover Our Story
              <span className="w-8 h-[1px] bg-[#d4af37] group-hover:bg-black dark:group-hover:bg-white transition-colors" />
            </Link>
          </motion.div>
          
          <div className="relative h-[600px] w-full mt-12 lg:mt-0">
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: -15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 z-10"
            >
              <ParallaxImage
                src="https://media.istockphoto.com/id/1295808919/photo/hong-kong-central-district-skyscrapers.jpg?s=612x612&w=0&k=20&c=wUzkai_7_LbovCgLG2HmpaoFc7TS8O3MXnxEW-d-VL4="
                alt="Ahmedabad Skyline Construction"
                containerClassName="w-full h-full"
              />
            </motion.div>

            <motion.div
              style={{ y: introY1, rotate: introRotate1 }}
              className="absolute -bottom-16 -left-8 md:-left-16 w-48 md:w-64 h-64 md:h-80 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 z-20 border border-black/10 dark:border-white/10 hidden sm:block transition-colors duration-500"
            >
              <ParallaxImage
                src="https://images.pexels.com/photos/34480706/pexels-photo-34480706.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Mindfulness and Yoga"
                containerClassName="w-full h-full"
              />
            </motion.div>

            <motion.div
              style={{ y: introY2, rotate: introRotate2 }}
              className="absolute -top-12 -right-8 w-40 md:w-48 h-56 md:h-64 rounded-2xl overflow-hidden shadow-2xl shadow-black/80 z-20 border border-black/10 dark:border-white/10 hidden sm:block transition-colors duration-500"
            >
              <ParallaxImage
                src="https://images.pexels.com/photos/29000265/pexels-photo-29000265.jpeg?auto=compress&cs=tinysrgb&w=1920"
                alt="Infrastructure and Storage"
                containerClassName="w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-32 bg-white dark:bg-[#141414] px-6 md:px-12 transition-colors duration-500">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-[#1a1a1a] dark:text-white">Our <span className="text-[#d4af37] italic">Vision</span></h2>
            <p className="font-sans text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed max-w-3xl mx-auto mb-12 text-lg transition-colors duration-500">
              To pioneer the future of Indian real estate by integrating sustainable infrastructure, mindful living spaces, and cutting-edge construction technology. We envision cities where concrete and nature coexist in perfect harmony.
            </p>
            <Link to="/about" className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] hover:text-black dark:hover:text-white transition-colors group">
              Read Our Full Vision
              <span className="w-8 h-[1px] bg-[#d4af37] group-hover:bg-black dark:group-hover:bg-white transition-colors" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-[#f5f2ed] dark:bg-[#050505] transition-colors duration-500">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-16 flex justify-between items-end">
          <div>
            <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] mb-4">Portfolio</h3>
            <h2 className="font-serif text-5xl md:text-7xl text-[#1a1a1a] dark:text-white">Featured <span className="italic text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">Works</span></h2>
          </div>
          <Link to="/projects" className="hidden md:flex items-center gap-2 font-sans text-xs tracking-[0.2em] uppercase text-[#1a1a1a]/70 dark:text-white/70 hover:text-[#d4af37] transition-colors duration-500">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="flex flex-col gap-32 px-6 md:px-12 max-w-7xl mx-auto perspective-[2000px]">
          {[
            { id: '01', title: 'The Aurelia', location: 'Shela , Ahmedabad', img: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920' },
            { id: '02', title: 'Crest Commercial', location: 'Shilaj, Ahmedabad', img: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920' },
            { id: '03', title: 'Oasis Wellness', location: 'SoBo, Ahmedabad', img: 'https://images.pexels.com/photos/2581598/pexels-photo-2581598.jpeg?auto=compress&cs=tinysrgb&w=1920' }
          ].map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 100, rotateX: 15 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-2/3 h-[50vh] lg:h-[70vh] rounded-2xl overflow-hidden relative group shadow-2xl shadow-black/50">
                <ParallaxImage
                  src={project.img}
                  alt={project.title}
                  containerClassName="w-full h-full"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              
              <div className="w-full lg:w-1/3 flex flex-col">
                <span className="font-serif text-6xl text-[#1a1a1a]/10 dark:text-white/10 mb-4 transition-colors duration-500">{project.id}</span>
                <h3 className="font-serif text-4xl mb-2 text-[#1a1a1a] dark:text-white">{project.title}</h3>
                <p className="font-sans text-sm tracking-widest uppercase text-[#d4af37] mb-8">{project.location}</p>
                <Link to="/projects" className="w-12 h-12 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-300">
                  <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-24 text-center md:hidden">
          <Link to="/projects" className="inline-flex items-center gap-4 font-sans text-xs tracking-[0.2em] uppercase text-[#d4af37] hover:text-black dark:hover:text-white transition-colors group">
            View All Projects
            <span className="w-8 h-[1px] bg-[#d4af37] group-hover:bg-black dark:group-hover:bg-white transition-colors" />
          </Link>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl mb-8 text-[#1a1a1a] dark:text-white">Let's Build the <span className="text-[#d4af37] italic">Future</span></h2>
            <p className="font-sans text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed mb-8 transition-colors duration-500">
              Whether you're looking for a luxury residence, a commercial hub, or a mindful retreat, our team is ready to bring your vision to life.
            </p>
            <Link to="/contact" className="inline-block border border-[#d4af37] text-[#d4af37] px-8 py-4 font-sans text-xs tracking-[0.2em] uppercase hover:bg-[#d4af37] hover:text-white dark:hover:text-black transition-colors">
              Get in Touch
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
          >
            <img 
              src="https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1920" 
              alt="Contact Us" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer" 
            />
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
}
