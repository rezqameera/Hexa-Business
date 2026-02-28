import { motion } from 'motion/react';
import { Target, Eye, Shield, Heart, Leaf, Award } from 'lucide-react';

const values = [
  { icon: <Award className="text-primary" />, title: 'Professionalism', desc: 'Delivering exceptional quality work and upholding the highest standards.' },
  { icon: <Shield className="text-primary" />, title: 'Integrity', desc: 'Conducting ourselves with honesty, transparency, and ethical behavior.' },
  { icon: <Heart className="text-primary" />, title: 'Empathy', desc: 'Deeply understanding and connecting with the needs of our clients and communities.' },
  { icon: <Leaf className="text-primary" />, title: 'Sustainability', desc: 'Creating solutions that are environmentally friendly and promote long-term well-being.' },
];

export default function About() {
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
              Driven by Purpose, <br />
              <span className="text-primary">Powered by Design.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed">
              At Hexa, our story is one of collaboration and passion for creating meaningful change. Our dynamic team brings together diverse skills and experiences spanning social and business entrepreneurship, project management, design, and branding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Detail */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <img 
              src="https://picsum.photos/seed/team/800/600" 
              alt="Our Team" 
              className="rounded-2xl shadow-xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary p-8 rounded-2xl hidden md:block">
              <p className="text-black font-bold text-2xl tracking-tighter">Human-Centred <br />Design Thinking</p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="text-lg text-black/70 mb-8 leading-relaxed">
              We are driven by a shared belief in the power of human-centred design thinking to address the most pressing societal problems. Our approach isn't just about business; it's about people and the impact we can create together.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Target className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Mission</h4>
                  <p className="text-black/60">We strive to empower passionate entrepreneurs, creative, and innovators to transform their ideas into tangible realities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm shrink-0">
                  <Eye className="text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Our Vision</h4>
                  <p className="text-black/60">To be the catalyst for meaningful transformation, inspiring a future where innovation and compassion go hand in hand.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold tracking-tighter mb-6">Our Core Values</h2>
            <p className="text-black/60">We uphold the highest standards of professional excellence through our core values that guide everything we do.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-black/5 hover:border-primary/50 transition-colors"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-black/60 text-sm leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
