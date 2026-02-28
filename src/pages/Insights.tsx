import { motion } from 'motion/react';
import { Users, Heart, Lightbulb, Leaf } from 'lucide-react';

const principles = [
  { icon: <Users size={40} />, title: 'Co-creation', desc: 'The best solutions are created when everyone involved has a voice. We foster collaborative environments.' },
  { icon: <Heart size={40} />, title: 'Empathy', desc: 'We use empathy to gain a deep understanding of the challenges that people face in their daily lives.' },
  { icon: <Lightbulb size={40} />, title: 'Innovation', desc: 'We use our expertise in design thinking to come up with creative and innovative solutions for complex problems.' },
  { icon: <Leaf size={40} />, title: 'Sustainability', desc: 'We create solutions that are efficient, effective, and sustainable in the long term for our planet.' },
];

export default function Insights() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Insights & <br />
              <span className="text-primary">Impact.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed">
              Our methodologies are deeply rooted in understanding the needs and behaviours of the people we serve. We don't just consult; we create lasting change.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center mb-32">
            <div>
              <h2 className="text-4xl font-bold tracking-tighter mb-8">Our Approach</h2>
              <p className="text-lg text-black/70 mb-8 leading-relaxed">
                We believe that the most effective solutions come from a deep understanding of the human experience. Our approach is systematic yet flexible, allowing us to adapt to the unique needs of every client.
              </p>
              <div className="p-8 bg-primary/10 rounded-2xl border-l-4 border-primary">
                <p className="italic text-xl text-black font-medium">
                  "Innovation is not just about new ideas; it's about creating value that resonates with people's lives."
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/insight1/400/500" alt="Insight 1" className="rounded-2xl shadow-lg mt-12" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/insight2/400/500" alt="Insight 2" className="rounded-2xl shadow-lg" referrerPolicy="no-referrer" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {principles.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-10 rounded-2xl shadow-sm border border-black/5"
              >
                <div className="text-primary mb-6">{p.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{p.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Teaser */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Impact in Action</h2>
            <p className="text-black/60 max-w-2xl mx-auto">Explore how we've helped global organisations achieve their goals through innovation.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              { title: 'Digital Transformation for UNESCO', category: 'Technology', img: 'https://picsum.photos/seed/unesco/800/500' },
              { title: 'Strategic Innovation with Save the Children', category: 'Consultancy', img: 'https://picsum.photos/seed/save/800/500' }
            ].map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="text-xs font-bold text-primary uppercase tracking-widest mb-2">{item.category}</div>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
