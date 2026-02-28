import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Globe } from 'lucide-react';

export default function Contact() {
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
              Let's talk about how <br />
              <span className="text-primary">we can help you.</span>
            </h1>
            <p className="text-xl text-black/60 leading-relaxed">
              Whether you're interested in exploring new opportunities, need a solution tailored to your unique needs, or want to learn more about our services, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 bg-bg">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <div className="bg-white p-10 md:p-16 rounded-3xl shadow-sm border border-black/5">
            <h2 className="text-3xl font-bold mb-8 tracking-tighter">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-6 py-4 bg-bg border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-black/40">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com" 
                    className="w-full px-6 py-4 bg-bg border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Subject</label>
                <select className="w-full px-6 py-4 bg-bg border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Strategic Consultancy</option>
                  <option>Digital Transformation</option>
                  <option>Market Intelligence</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-black/40">Message</label>
                <textarea 
                  rows={5} 
                  placeholder="How can we help you achieve your goals?" 
                  className="w-full px-6 py-4 bg-bg border-none rounded-xl focus:ring-2 focus:ring-primary outline-none transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-black text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-primary hover:text-black transition-all duration-300">
                Send Message
                <Send size={18} />
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="lg:pt-10">
            <div className="space-y-12">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <Mail className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/40 font-bold uppercase tracking-widest mb-1">Email</div>
                      <div className="text-xl font-bold">Info@hexa.business</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <Phone className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/40 font-bold uppercase tracking-widest mb-1">Telephone</div>
                      <div className="text-xl font-bold">+44 28-58548</div>
                      <div className="text-lg text-black/60">Mobile: 0592491468</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                      <Globe className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-black/40 font-bold uppercase tracking-widest mb-1">Website</div>
                      <div className="text-xl font-bold">www.hexa.business</div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Our Headquarters</h3>
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm shrink-0">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-black/40 font-bold uppercase tracking-widest mb-1">Location</div>
                    <div className="text-xl font-bold">London – second floor</div>
                    <div className="text-lg text-black/60">United Kingdom</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 w-full h-64 bg-white rounded-3xl border border-black/5 overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-black/20 font-bold uppercase tracking-widest">
                Interactive Map Placeholder
              </div>
              <img 
                src="https://picsum.photos/seed/map/800/400?blur=2" 
                alt="Map" 
                className="w-full h-full object-cover opacity-50"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
