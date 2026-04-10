import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 bg-bg min-h-screen">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8">PRIVACY POLICY</h1>
          <p className="text-black/60 mb-12">Effective Date: 1 May 2026</p>

          <div className="space-y-8 text-black/80 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p>
                Welcome to the privacy policy of Hexa Business UK Ltd ("we", "us", or "our"). We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (www.hexa.business) or engage with our consulting and corporate services, and tell you about your privacy rights and how the law protects you.
              </p>
              <p className="mt-4">
                Hexa Business UK Ltd is the data controller and is responsible for your personal data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">2. The Data We Collect About You</h2>
              <p>
                Personal data means any information about an individual from which that person can be identified. We may collect, use, store, and transfer different kinds of personal data about you, which we have grouped together as follows:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Identity Data:</strong> Includes first name, last name, username or similar identifier, title, and company name.</li>
                <li><strong>Contact Data:</strong> Includes billing address, corporate email address, and telephone numbers.</li>
                <li><strong>Technical Data:</strong> Includes internet protocol (IP) address, browser type and version, time zone setting and location, operating system, and platform.</li>
                <li><strong>Usage Data:</strong> Includes information about how you use our website, products, and services.</li>
                <li><strong>Marketing and Communications Data:</strong> Includes your preferences in receiving marketing from us and our third parties, and your communication preferences.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">3. How We Collect Your Data</h2>
              <p>
                We use different methods to collect data from and about you, including through:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Direct Interactions:</strong> You may give us your Identity and Contact Data by filling in forms or by corresponding with us by post, phone, email, or otherwise (e.g., requesting a proposal or subscribing to our insights).</li>
                <li><strong>Automated Technologies:</strong> As you interact with our website, we will automatically collect Technical Data about your equipment and browsing actions using cookies and server logs.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">4. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Performance of a Contract:</strong> Where we need to perform the contract we are about to enter into or have entered into with your organisation.</li>
                <li><strong>Legitimate Interests:</strong> Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                <li><strong>Legal Obligation:</strong> Where we need to comply with a legal or regulatory obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">5. Data Security</h2>
              <p>
                We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used, or accessed in an unauthorised way, altered, or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors, and other third parties who have a business need to know. They will only process your personal data on our instructions, and they are subject to a duty of confidentiality.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">6. Data Retention</h2>
              <p>
                We will only retain your personal data for as long as reasonably necessary to fulfil the purposes we collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting, or reporting requirements. By law, we have to keep basic information about our clients for six years after they cease being clients for tax purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">7. Your Legal Rights</h2>
              <p>
                Under the UK General Data Protection Regulation (UK GDPR), you have rights under data protection laws in relation to your personal data, including the right to:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Request access to your personal data.</li>
                <li>Request correction of your personal data.</li>
                <li>Request erasure of your personal data (the right to be forgotten).</li>
                <li>Object to processing of your personal data.</li>
                <li>Request restriction of processing your personal data.</li>
                <li>Request transfer of your personal data.</li>
                <li>Withdraw consent at any time.</li>
              </ul>
              <p className="mt-4">
                If you wish to exercise any of the rights set out above, please contact us using the details below.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">8. Contact Details</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us in the following ways:
              </p>
              <div className="mt-4 space-y-2">
                <p><strong>Full Name of Legal Entity:</strong> Hexa Business UK Ltd</p>
                <p><strong>Email Address:</strong> info@hexa.business</p>
                <p><strong>Postal Address:</strong> London, UK</p>
                <p><strong>Company Registration Number:</strong> 12345678</p>
              </div>
              <p className="mt-6">
                You have the right to make a complaint at any time to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection issues (www.ico.org.uk). We would, however, appreciate the chance to deal with your concerns before you approach the ICO, so please contact us in the first instance.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
