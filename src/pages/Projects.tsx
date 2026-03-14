import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import PageTransition from '../components/PageTransition';
import ParallaxImage from '../components/ParallaxImage';

const projects = [
  {
    id: 1,
    title: 'The Aurelia',
    category: 'Luxury Residential',
    location: 'Mumbai, India',
    image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2025'
  },
  {
    id: 2,
    title: 'Crest Commercial',
    category: 'Commercial Space',
    location: 'Pune, India',
    image: 'https://images.pexels.com/photos/323705/pexels-photo-323705.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2024'
  },
  {
    id: 3,
    title: 'Oasis Wellness',
    category: 'Lifestyle & Spa',
    location: 'Goa, India',
    image: 'https://images.pexels.com/photos/2581598/pexels-photo-2581598.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2026'
  },
  {
    id: 4,
    title: 'Skyline Infrastructure',
    category: 'Urban Development',
    location: 'Bengaluru, India',
    image: 'https://lh3.googleusercontent.com/0r0otSppNfRnAcjOdvVfLoan1SikEHn9VV87tN8i5n24323tjPTOsOk9QcDL5KdFO9ygWnHJlwYKWoUWollGuAC580MbOMZnE3A=w3840-h2160-c-rw-v3',
    year: '2023'
  },
  {
    id: 5,
    title: 'The Zenith',
    category: 'Cityscape',
    location: 'Delhi, India',
    image: 'https://media.istockphoto.com/id/1295808919/photo/hong-kong-central-district-skyscrapers.jpg?s=612x612&w=0&k=20&c=wUzkai_7_LbovCgLG2HmpaoFc7TS8O3MXnxEW-d-VL4=',
    year: '2025'
  },
  {
    id: 6,
    title: 'Lumina Tech Park',
    category: 'Commercial Construction',
    location: 'Hyderabad, India',
    image: 'https://images.pexels.com/photos/29000265/pexels-photo-29000265.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2026'
  },
  {
    id: 7,
    title: 'Sapphire Residences',
    category: 'Luxury Apartments',
    location: 'Chennai, India',
    image: 'https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2024'
  },
  {
    id: 8,
    title: 'Eco Retreat',
    category: 'Mindfulness Center',
    location: 'Kerala, India',
    image: 'https://images.pexels.com/photos/34480706/pexels-photo-34480706.jpeg?auto=compress&cs=tinysrgb&w=1920',
    year: '2027'
  }
];

function ProjectCard({ project, index }: { project: any, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [15, 0, -15]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, rotateX, scale, opacity }}
      className={`group cursor-pointer ${index % 2 !== 0 ? 'md:mt-48' : ''}`}
      style={{ perspective: 1000 }}
    >
      <motion.div style={{ rotateX, scale, opacity }}>
        <div className="relative h-[60vh] rounded-2xl overflow-hidden mb-6 shadow-2xl shadow-black/50">
          <ParallaxImage
            src={project.image}
            alt={project.title}
            containerClassName="w-full h-full"
            className="transition-transform duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-black/10 dark:bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110">
            <span className="text-black dark:text-white font-sans text-xs transition-colors duration-500">View</span>
          </div>
        </div>
        
        <div className="flex justify-between items-start px-2">
          <div>
            <h3 className="font-serif text-3xl mb-2 group-hover:text-[#d4af37] transition-colors">{project.title}</h3>
            <p className="font-sans text-xs tracking-widest uppercase text-[#1a1a1a]/50 dark:text-white/50 transition-colors duration-500">{project.category} &bull; {project.location}</p>
          </div>
          <span className="font-sans text-sm text-[#d4af37]">{project.year}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <PageTransition>
      <div className="pt-24 pb-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <h1 className="font-serif text-6xl md:text-8xl mb-6">
            Our <span className="text-[#d4af37] italic">Projects</span>
          </h1>
          <p className="font-sans text-[#1a1a1a]/60 dark:text-white/60 max-w-2xl leading-relaxed transition-colors duration-500">
            Explore our portfolio of visionary architecture. Each project represents our commitment to pushing the boundaries of design, sustainability, and luxury living in India.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-32 perspective-[2000px]">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
