import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Users, CheckCircle, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'Years of innovations', value: '7+' },
  { label: 'Projects completed', value: '153+' },
  { label: 'Events organised', value: '78' },
  { label: 'Happy clients globally', value: '50+' },
];

const partners = [
  'European Union', 'UNESCO', 'UNFPA', 'Save the Children'
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 bg-bg">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 -skew-x-12 transform origin-top-right hidden lg:block" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-black text-xs font-bold uppercase tracking-widest mb-6">
              <Zap size={14} />
              Premier Consulting Firm
            </div>
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-8">
              Innovate.<br />
              <span className="text-primary">Impact.</span><br />
              Empower.
            </h1>
            <p className="text-xl text-black/70 max-w-lg mb-10 leading-relaxed">
              HEXA is a premier service provider and consulting firm dedicated to helping organizations create sustainable innovation. We believe that innovation is the key to success in today's rapidly changing world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/services"
                className="bg-black text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-primary hover:text-black transition-all duration-300 group"
              >
                Discover Our Expertise
                <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full font-semibold border border-black/10 flex items-center justify-center gap-2 hover:bg-white transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://picsum.photos/seed/consultancy/800/800" 
                alt="Business Consultancy" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-2xl -z-0 hidden md:block" />
            <div className="absolute -top-10 -right-10 w-32 h-32 border-4 border-black rounded-full -z-0 hidden md:block" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2 tracking-tighter">{stat.value}</div>
                <div className="text-sm text-black/50 uppercase font-semibold tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-20 border-y border-black/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-black/40 mb-12">
            Trusted by Global Organisations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {partners.map((partner) => (
              <div key={partner} className="text-2xl font-bold tracking-tighter text-black/80">
                {partner}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services Teaser */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
                Tailored solutions for <span className="text-primary">complex challenges.</span>
              </h2>
              <p className="text-lg text-black/60">
                We combine deep industry expertise with human-centered design to deliver results that matter.
              </p>
            </div>
            <Link to="/services" className="flex items-center gap-2 font-bold text-black border-b-2 border-primary pb-1 hover:gap-4 transition-all">
              View All Services <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Strategic Consultancy', icon: <Globe />, desc: 'Human-centered approach to problem-solving and opportunity identification.' },
              { title: 'Digital Transformation', icon: <Zap />, desc: 'Leveraging technology to elevate organizational success and efficiency.' },
              { title: 'Market Intelligence', icon: <Users />, desc: 'Turning data into insights through rigorous research and feasibility studies.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-black/5"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-black mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-black/60 mb-8 leading-relaxed">{service.desc}</p>
                <Link to="/services" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                  Learn More <ChevronRight size={16} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 text-center">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 max-w-4xl mx-auto">
            Ready to transform your <span className="text-primary">organisation?</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 max-w-2xl mx-auto">
            Let's discuss how our innovative consulting services can help you stay ahead of the competition.
          </p>
          <Link
            to="/contact"
            className="inline-flex bg-primary text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-all duration-300"
          >
            Start a Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
