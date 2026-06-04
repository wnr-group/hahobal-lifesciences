'use client';

import { motion, Variants } from 'framer-motion';
import { Cookie, Settings, BarChart3, Shield, Info, Mail } from 'lucide-react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
  }
};

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-[#f8fafb] font-sans text-gray-800">
      {/* Hero Section */}
      <motion.section
        className="bg-[#0a5c57] text-white py-20 px-6 lg:px-20"
        initial="hidden"
        animate="visible"
        variants={fadeUpVariant}
      >
        <div className="max-w-4xl mx-auto text-center">
          <Cookie className="w-16 h-16 mx-auto mb-6 text-[#90f4e8]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Cookie Policy</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            Understanding how Hahobal Lifesciences uses cookies to enhance your browsing experience and improve our services.
          </p>
          <p className="text-sm text-white/70 mt-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-20 py-16">

        {/* What Are Cookies */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <Info className="w-6 h-6 text-[#0a5c57]" />
              What Are Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Cookies allow websites to recognize your device, remember your preferences, and understand how you interact with the site. They do not contain any personally identifiable information unless you explicitly provide it.
            </p>
          </div>
        </motion.section>

        {/* How We Use Cookies */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Cookie className="w-6 h-6 text-[#0a5c57]" />
              How Hahobal Lifesciences Uses Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Hahobal Lifesciences uses cookies to:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Enable essential website functionality and security features</li>
              <li>Remember your preferences and settings</li>
              <li>Understand how visitors use our website and identify areas for improvement</li>
              <li>Analyze website traffic and user behavior patterns</li>
              <li>Ensure the security and integrity of our website</li>
              <li>Provide relevant information based on your interests</li>
            </ul>
          </div>
        </motion.section>

        {/* Types of Cookies */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Settings className="w-6 h-6 text-[#0a5c57]" />
              Types of Cookies We Use
            </h2>

            <div className="space-y-8">
              {/* Strictly Necessary */}
              <div className="border-l-4 border-[#0a5c57] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Strictly Necessary Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Purpose:</strong> These cookies are essential for the website to function properly and cannot be disabled.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>What they do:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Enable core website features like navigation and secure access</li>
                  <li>Maintain session state and security</li>
                  <li>Remember your cookie consent preferences</li>
                  <li>Protect against fraudulent activity</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Legal Basis:</strong> Legitimate interest (essential for website operation)
                </p>
              </div>

              {/* Performance/Analytics */}
              <div className="border-l-4 border-[#006a63] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Performance and Analytics Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Purpose:</strong> These cookies help us understand how visitors interact with our website by collecting anonymous information.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>What they do:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Track which pages are most and least popular</li>
                  <li>Monitor how users navigate through the site</li>
                  <li>Identify technical errors and performance issues</li>
                  <li>Measure the effectiveness of our content</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  <strong>Examples:</strong> Google Analytics (if implemented)
                </p>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Legal Basis:</strong> Consent (can be disabled through browser settings)
                </p>
              </div>

              {/* Functional */}
              <div className="border-l-4 border-[#0f6e56] pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Functional Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Purpose:</strong> These cookies enable enhanced functionality and personalization.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>What they do:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Remember your language and region preferences</li>
                  <li>Store information you've entered in forms</li>
                  <li>Provide enhanced features like live chat support (if enabled)</li>
                  <li>Remember your display preferences</li>
                </ul>
                <p className="text-sm text-gray-500 mt-3">
                  <strong>Legal Basis:</strong> Legitimate interest / Consent
                </p>
              </div>

              {/* Targeting/Marketing */}
              <div className="border-l-4 border-gray-400 pl-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Targeting and Marketing Cookies</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>Purpose:</strong> These cookies may be used to deliver relevant content and measure advertising effectiveness.
                </p>
                <p className="text-gray-600 leading-relaxed mb-3">
                  <strong>What they do:</strong>
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4">
                  <li>Track your browsing activity across websites</li>
                  <li>Build a profile of your interests</li>
                  <li>Deliver targeted advertising (currently not implemented)</li>
                  <li>Measure campaign effectiveness</li>
                </ul>
                <p className="text-sm font-semibold text-[#0a5c57] mt-3">
                  ℹ️ Hahobal Lifesciences currently does not use targeting or marketing cookies.
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  <strong>Legal Basis:</strong> Consent (required before activation)
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Third-Party Cookies */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              In addition to our own cookies, we may use third-party service providers who set cookies on our website to deliver their services. These may include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Analytics Providers:</strong> To help us understand website usage (e.g., Google Analytics)</li>
              <li><strong>Content Delivery Networks (CDNs):</strong> To load external resources like maps, fonts, and libraries</li>
              <li><strong>Security Services:</strong> To protect against malicious activity and spam</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              Third-party cookies are subject to the respective privacy policies of these external services. We recommend reviewing their policies:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-600 ml-4 mt-3">
              <li><a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Google Analytics Cookie Policy</a></li>
            </ul>
          </div>
        </motion.section>

        {/* Cookie Duration */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-[#0a5c57]" />
              Cookie Duration
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Cookies can be either session cookies or persistent cookies:
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-900 mb-2">Session Cookies</p>
                <p className="text-gray-600 leading-relaxed">
                  Temporary cookies that are deleted when you close your browser. They allow us to link your actions during a browsing session.
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-900 mb-2">Persistent Cookies</p>
                <p className="text-gray-600 leading-relaxed">
                  Remain on your device for a set period (ranging from days to years) or until you manually delete them. They help remember your preferences for future visits.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Managing Cookies */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-[#0a5c57]" />
              How to Manage and Control Cookies
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              You have the right to accept or reject cookies. Most web browsers automatically accept cookies, but you can modify your browser settings to decline cookies if you prefer.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Browser Settings</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You can manage cookies through your browser settings. Here are instructions for popular browsers:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Apple Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Microsoft Edge</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Opt-Out Tools</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  You can also use the following opt-out tools:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li><a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">Google Analytics Opt-out Browser Add-on</a></li>
                  <li><a href="http://www.allaboutcookies.org/" target="_blank" rel="noopener noreferrer" className="text-[#0a5c57] hover:underline">All About Cookies</a> - Comprehensive cookie information and management guide</li>
                </ul>
              </div>

              <div className="bg-[#fff3cd] border border-[#ffc107]/30 p-4 rounded">
                <p className="text-sm text-gray-700 leading-relaxed">
                  <strong>⚠️ Important:</strong> Blocking or deleting cookies may impact your user experience. Some features of our website may not function properly, and you may need to re-enter information on subsequent visits.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Do Not Track */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Do Not Track (DNT) Signals</h2>
            <p className="text-gray-600 leading-relaxed">
              Some browsers offer a &quot;Do Not Track&quot; (DNT) signal. Currently, there is no industry standard for responding to DNT signals. Hahobal Lifesciences does not currently respond to DNT signals, but we respect your right to control cookies through browser settings and opt-out mechanisms.
            </p>
          </div>
        </motion.section>

        {/* Updates to Policy */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Cookie Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Cookie Policy from time to time to reflect changes in technology, legislation, or our business operations. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically to stay informed about how we use cookies.
            </p>
          </div>
        </motion.section>

        {/* Contact Information */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-[#eef7f6] p-8 rounded-lg border border-[#0a5c57]/20">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Mail className="w-6 h-6 text-[#0a5c57]" />
              Questions About Cookies?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us:
            </p>
            <div className="space-y-3 text-gray-700">
              <p className="font-semibold text-lg text-[#0a5c57]">Hahobal Biopharmaceuticals India Pvt. Ltd.</p>
              <p>
                NO 201 Swaroop Aditya Avenue,<br />
                Marol Pipeline Road, International Airport,<br />
                Kranti Nagar, Andheri East,<br />
                Mumbai - 400 059, Maharashtra, India
              </p>
              <p><strong>Email:</strong> <a href="mailto:info@hahoballifesciences.com" className="text-[#0a5c57] hover:underline">info@hahoballifesciences.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919840070222" className="text-[#0a5c57] hover:underline">+91 98400 70222</a></p>
            </div>
          </div>
        </motion.section>

        {/* Consent Statement */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-[#0a5c57] text-white p-6 rounded-lg text-center">
            <p className="text-sm leading-relaxed">
              By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein.
            </p>
          </div>
        </motion.section>

      </div>
    </main>
  );
}
