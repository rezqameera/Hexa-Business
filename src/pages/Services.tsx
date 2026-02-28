import { motion } from 'motion/react';
import { 
  Lightbulb, Rocket, BarChart3, Search, 
  Cpu, Smartphone, Megaphone, PenTool, 
  GraduationCap, Users2, Calendar, Zap 
} from 'lucide-react';

const serviceGroups = [
  {
    title: 'Advisory & Innovation',
    services: [
      { icon: <Lightbulb />, name: 'Strategic Consultancy', desc: 'We use design thinking to help your organization understand customers, identify opportunities, and develop innovative solutions.' },
      { icon: <Rocket />, name: 'Corporate Venturing', desc: 'We assist in developing new solutions and launching new businesses based on innovative ideas.' },
    ]
  },
  {
    title: 'Data & Market Intelligence',
    services: [
      { icon: <BarChart3 />, name: 'Creative Studies', desc: 'We turn data into insights that drive your business forward with precision.' },
      { icon: <Search />, name: 'Market Intelligence', desc: 'Rigorous market research and feasibility studies to understand your market and competitors.' },
    ]
  },
  {
    title: 'Digital & Technology',
    services: [
      { icon: <Cpu />, name: 'Digital Transformation', desc: 'Tailored digital solutions that leverage technology to elevate organizational success.' },
      { icon: <Smartphone />, name: 'Tech Solutions', desc: 'High-quality mobile and web-based applications that meet the specific needs of our clients.' },
    ]
  },
  {
    title: 'Marketing & Communications',
    services: [
      { icon: <Megaphone />, name: 'Brand Strategy', desc: 'Impactful marketing strategies and advocacy plans that captivate your stakeholders.' },
      { icon: <PenTool />, name: 'Media Surveillance & Storytelling', desc: 'Real-time monitoring and mission storytelling that inspires your audience.' },
    ]
  },
  {
    title: 'People & Training (Hexa Academy)',
    services: [
      { icon: <GraduationCap />, name: 'Competency-Based Training', desc: 'Empowering individuals and organizations to excel through proven methodologies.' },
      { icon: <Users2 />, name: 'Leadership & Change Management', desc: 'Empowering leaders and equipping employees with resilience during transitions.' },
    ]
  },
  {
    title: 'Corporate Events',
    services: [
      { icon: <Calendar />, name: 'Innovative Events Planning', desc: 'Handling all aspects of event planning, from initial concept to final execution.' },
      { icon: <Zap />, name: 'Summits & Hackathons', desc: 'Impactful conferences and immersive hackathons that ignite innovation.' },
    ]
  }
];

export default function Services() {
  return (
    <div className="pt-32">
      {/* Hero */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
              Stay ahead of the <br />
              <span className="text-primary">competition.</span>
            </h1>
            <p className="text-xl text-white/60 leading-relaxed">
              Thrive in the future with Hexa's innovative consulting services. We provide the tools and expertise needed for sustainable growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="space-y-32">
            {serviceGroups.map((group, groupIndex) => (
              <div key={groupIndex}>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-4">
                  <span className="w-12 h-1 bg-primary rounded-full" />
                  {group.title}
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {group.services.map((service, serviceIndex) => (
                    <motion.div
                      key={serviceIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-black/5 group"
                    >
                      <div className="w-16 h-16 bg-bg rounded-xl flex items-center justify-center text-black mb-8 group-hover:bg-primary transition-colors duration-300">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{service.name}</h3>
                      <p className="text-black/60 leading-relaxed">{service.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-primary">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-8 text-black">
            Need a custom solution?
          </h2>
          <p className="text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Our team is ready to develop a tailored approach that meets your unique organizational needs.
          </p>
          <button className="bg-black text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all duration-300">
            Let's Talk Strategy
          </button>
        </div>
      </section>
    </div>
  );
}
