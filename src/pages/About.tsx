import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PageTransition from '../components/PageTransition';
import ParallaxImage from '../components/ParallaxImage';

const timelineData = [
  {
    year: '2005',
    title: 'The Foundation',
    description: 'Gajera Estate was established with a vision to transform the urban landscape of India, starting with boutique residential projects in Mumbai.',
  },
  {
    year: '2010',
    title: 'Scaling Heights',
    description: 'Completed our first major high-rise luxury apartment complex, setting a new benchmark for premium living spaces.',
  },
  {
    year: '2015',
    title: 'National Expansion',
    description: 'Expanded our footprint to Delhi and Bangalore, introducing sustainable and eco-friendly commercial architectures.',
  },
  {
    year: '2020',
    title: 'Smart Innovations',
    description: 'Pioneered the integration of IoT and smart home technologies across all our new residential developments.',
  },
  {
    year: '2023',
    title: 'Architectural Marvels',
    description: 'Launched "The Zenith", our most ambitious skyscraper project, blending cutting-edge design with unparalleled luxury.',
  },
  {
    year: '2026',
    title: 'Sustainable Future',
    description: 'Committing to zero-carbon footprint buildings and continuing our legacy of building sustainable, human-centric spaces.',
  }
];

function JourneyRoadmap() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="py-32 relative" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-32"
        >
          <h2 className="font-serif text-5xl md:text-7xl mb-6">Our <span className="text-[#d4af37] italic">Journey</span></h2>
          <p className="font-sans text-[#1a1a1a]/60 dark:text-white/60 max-w-2xl mx-auto text-lg">
            A roadmap of our progress, milestones, and the legacy we are building from 2005 to 2026.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Central Line Background */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-black/10 dark:bg-white/10 transform md:-translate-x-1/2 rounded-full" />
          
          {/* Animated Progress Line */}
          <motion.div 
            style={{ height: lineHeight }}
            className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-[#d4af37] via-[#f3e5ab] to-[#d4af37] transform md:-translate-x-1/2 origin-top rounded-full shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          />

          <div className="space-y-24 md:space-y-32">
            {timelineData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`relative flex items-start md:justify-between flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <motion.div 
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="absolute left-8 md:left-1/2 w-5 h-5 rounded-full bg-[#050505] dark:bg-white border-4 border-[#d4af37] transform -translate-x-1/2 mt-6 md:mt-8 shadow-[0_0_15px_rgba(212,175,55,0.6)] z-10" 
                  />

                  {/* Content Card */}
                  <div className="w-full md:w-[45%] pl-20 md:pl-0">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 50 : -50, y: 20 }}
                      whileInView={{ opacity: 1, x: 0, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className={`p-8 md:p-10 rounded-3xl bg-white dark:bg-[#0a0a0a] border border-black/5 dark:border-white/5 shadow-2xl hover:border-[#d4af37]/40 transition-all duration-500 relative group overflow-hidden`}
                    >
                      {/* Hover Gradient Background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Large Background Year */}
                      <span className="font-serif text-7xl md:text-9xl text-black/[0.03] dark:text-white/[0.03] absolute -bottom-4 -right-4 font-bold select-none pointer-events-none transition-transform duration-700 group-hover:scale-110 group-hover:-translate-y-4 group-hover:-translate-x-4">
                        {item.year}
                      </span>
                      
                      <div className="relative z-10">
                        <div className="inline-block px-4 py-1 rounded-full border border-[#d4af37]/30 text-[#d4af37] text-sm font-mono mb-6 tracking-widest">
                          {item.year}
                        </div>
                        <h4 className="font-serif text-3xl md:text-4xl mb-4 text-[#1a1a1a] dark:text-white group-hover:text-[#d4af37] transition-colors duration-500">
                          {item.title}
                        </h4>
                        <p className="font-sans text-[#1a1a1a]/70 dark:text-white/70 leading-relaxed text-lg">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Empty space for the other side on desktop */}
                  <div className="hidden md:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  return (
    <PageTransition>
      <div className="pt-24 pb-12">
        <div className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-serif text-6xl md:text-8xl mb-6">
              The <span className="text-[#d4af37] italic">Visionaries</span>
            </h1>
            <p className="font-sans text-[#1a1a1a]/60 dark:text-white/60 max-w-2xl leading-relaxed text-lg transition-colors duration-500">
              Gajera Estate was founded on a simple premise: architecture should elevate the human spirit. We are a collective of dreamers, builders, and perfectionists dedicated to redefining India's skyline.
            </p>
          </motion.div>
        </div>

        <div className="relative h-[70vh] w-full mb-12">
          <ParallaxImage
            src="https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Gajera Estate Team"
            containerClassName="w-full h-full"
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="font-serif text-5xl md:text-7xl text-white text-center px-4">
              Building <span className="italic">Legacies</span> Since 2005
            </h2>
          </div>
        </div>

        <JourneyRoadmap />

        <div className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 pb-32">
          {[
            {
              title: 'Innovation',
              desc: 'We leverage cutting-edge 3D modeling and sustainable materials to create future-proof structures.'
            },
            {
              title: 'Craftsmanship',
              desc: 'Every detail is meticulously planned and executed by master artisans and engineers.'
            },
            {
              title: 'Human-Centric',
              desc: 'Our designs prioritize natural light, spatial harmony, and the well-being of the inhabitants.'
            }
          ].map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-8 border border-black/10 dark:border-white/10 rounded-2xl bg-white dark:bg-[#050505] hover:border-[#d4af37]/50 transition-colors duration-500"
            >
              <h3 className="font-serif text-3xl mb-4 text-[#d4af37]">{value.title}</h3>
              <p className="font-sans text-[#1a1a1a]/60 dark:text-white/60 leading-relaxed transition-colors duration-500">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
