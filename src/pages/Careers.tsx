import { motion } from 'motion/react';
import { ArrowRight, Briefcase, MapPin, Clock } from 'lucide-react';

const jobs = [
  { title: 'Senior Strategy Consultant', type: 'Full-time', location: 'London', dept: 'Advisory' },
  { title: 'Digital Transformation Lead', type: 'Full-time', location: 'Remote / London', dept: 'Technology' },
  { title: 'Market Research Analyst', type: 'Contract', location: 'London', dept: 'Data' },
  { title: 'UX/UI Design Thinking Specialist', type: 'Full-time', location: 'London', dept: 'Design' },
];

export default function Careers() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Shape the <br />
              <span className="text-primary">Future with Us.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed mb-10">
              If you are passionate about making a difference, we encourage you to join our team. We are a diverse and inclusive team, constantly learning, and excited to see what the future holds.
            </p>
            <button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-black transition-all duration-300">
              View Open Positions
            </button>
          </motion.div>
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/careers/800/600" 
              alt="Careers at Hexa" 
              className="rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Diverse & Inclusive</h3>
              <p className="text-black/60">We believe that our strength lies in our diversity. We foster an environment where everyone feels valued and heard.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Constant Learning</h3>
              <p className="text-black/60">The world is changing fast, and so are we. We provide ample opportunities for professional growth and skill development.</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Meaningful Impact</h3>
              <p className="text-black/60">Work on projects that matter. Help global organisations address some of the most pressing societal problems.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold tracking-tighter mb-16">Open Positions</h2>
          <div className="space-y-4">
            {jobs.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl border border-black/5 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-primary transition-colors cursor-pointer"
              >
                <div>
                  <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{job.dept}</div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{job.title}</h3>
                  <div className="flex flex-wrap gap-6 text-sm text-black/50">
                    <span className="flex items-center gap-2"><Briefcase size={16} /> {job.type}</span>
                    <span className="flex items-center gap-2"><MapPin size={16} /> {job.location}</span>
                    <span className="flex items-center gap-2"><Clock size={16} /> Posted 2 days ago</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                  <ArrowRight className="text-black" />
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-black/60 mb-6">Don't see a role that fits? We're always looking for talent.</p>
            <a href="mailto:careers@hexa.business" className="font-bold text-black border-b-2 border-primary pb-1">Send us your CV</a>
          </div>
        </div>
      </section>
    </div>
  );
}
