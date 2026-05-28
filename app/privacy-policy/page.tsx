'use client';

import { motion, Variants } from 'framer-motion';
import { Shield, Lock, Eye, UserCheck, FileText, Globe, Mail } from 'lucide-react';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.2, 1, 0.3, 1] }
  }
};

export default function PrivacyPolicyPage() {
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
          <Shield className="w-16 h-16 mx-auto mb-6 text-[#90f4e8]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">Privacy Policy</h1>
          <p className="text-lg text-white/90 leading-relaxed">
            At Hahobal Lifesciences, protecting your privacy is fundamental to our commitment to trust, integrity, and ethical healthcare practices.
          </p>
          <p className="text-sm text-white/70 mt-6">
            Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 lg:px-20 py-16">

        {/* Introduction */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#0a5c57]" />
              Introduction
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hahobal Biopharmaceuticals India Pvt. Ltd. ("Hahobal Lifesciences," "we," "us," or "our") is committed to protecting the privacy and security of personal information provided by visitors to our website, business partners, healthcare professionals, and other stakeholders.
            </p>
            <p className="text-gray-600 leading-relaxed">
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <strong>hahoballifesciences.com</strong> or engage with our services. Please read this policy carefully.
            </p>
          </div>
        </motion.section>

        {/* Information We Collect */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Eye className="w-6 h-6 text-[#0a5c57]" />
              Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Personal Information You Provide</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily provide when you:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>Submit inquiries through our contact forms</li>
                  <li>Request product information or business partnerships</li>
                  <li>Apply for career opportunities</li>
                  <li>Subscribe to newsletters or updates</li>
                  <li>Register for events or webinars</li>
                </ul>
                <p className="text-gray-600 leading-relaxed mt-3">
                  <strong>This may include:</strong> Name, email address, phone number, company name, job title, country, and any message or inquiry details you provide.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Automatically Collected Information</h3>
                <p className="text-gray-600 leading-relaxed mb-3">
                  When you visit our website, we may automatically collect certain technical information:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Pages visited and time spent on pages</li>
                  <li>Referral source and clickstream data</li>
                  <li>Geographic location (country/region level)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Cookies and Tracking Technologies</h3>
                <p className="text-gray-600 leading-relaxed">
                  We use cookies and similar tracking technologies to enhance user experience, analyze website traffic, and improve our services. For detailed information, please see our <a href="/cookie-policy" className="text-[#0a5c57] font-semibold hover:underline">Cookie Policy</a>.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* How We Use Your Information */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <UserCheck className="w-6 h-6 text-[#0a5c57]" />
              How We Use Your Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Hahobal Lifesciences uses the collected information for the following purposes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Business Communications:</strong> To respond to inquiries, provide product information, and facilitate business partnerships</li>
              <li><strong>Order Processing:</strong> To process orders, quotations, and distribution agreements</li>
              <li><strong>Career Management:</strong> To evaluate job applications and communicate with candidates</li>
              <li><strong>Marketing & Updates:</strong> To send newsletters, product updates, and relevant oncology healthcare information (with consent)</li>
              <li><strong>Website Improvement:</strong> To analyze usage patterns and enhance website functionality</li>
              <li><strong>Compliance:</strong> To comply with legal obligations, regulatory requirements, and pharmacovigilance responsibilities</li>
              <li><strong>Security:</strong> To protect against fraud, unauthorized access, and ensure website security</li>
            </ul>
          </div>
        </motion.section>

        {/* Sharing Your Information */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Globe className="w-6 h-6 text-[#0a5c57]" />
              Sharing and Disclosure of Information
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We do not sell, rent, or trade your personal information. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li><strong>Service Providers:</strong> With trusted third-party vendors who assist with website hosting, email services, analytics, and business operations (under strict confidentiality agreements)</li>
              <li><strong>Business Partners:</strong> With authorized distributors, healthcare institutions, or partners for legitimate business purposes</li>
              <li><strong>Legal Compliance:</strong> When required by law, regulation, legal process, or governmental request</li>
              <li><strong>Protection of Rights:</strong> To enforce our terms, protect our rights, privacy, safety, or property, and that of our users</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets (with notice to affected users)</li>
            </ul>
          </div>
        </motion.section>

        {/* Data Security */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Lock className="w-6 h-6 text-[#0a5c57]" />
              Data Security
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
              <li>Secure Socket Layer (SSL) encryption for data transmission</li>
              <li>Restricted access to personal data on a need-to-know basis</li>
              <li>Regular security assessments and updates</li>
              <li>Employee training on data protection and confidentiality</li>
            </ul>
            <p className="text-gray-600 leading-relaxed mt-4">
              However, no method of transmission over the internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
            </p>
          </div>
        </motion.section>

        {/* Your Rights */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Depending on your location, you may have the following rights regarding your personal information:
            </p>
            <div className="space-y-3 text-gray-600">
              <p><strong>Access:</strong> Request access to the personal information we hold about you</p>
              <p><strong>Correction:</strong> Request correction of inaccurate or incomplete information</p>
              <p><strong>Deletion:</strong> Request deletion of your personal information (subject to legal obligations)</p>
              <p><strong>Objection:</strong> Object to processing of your information for certain purposes</p>
              <p><strong>Data Portability:</strong> Request transfer of your data to another organization</p>
              <p><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications at any time</p>
            </div>
            <p className="text-gray-600 leading-relaxed mt-4">
              To exercise any of these rights, please contact us at: <a href="mailto:info@hahoballifesciences.com" className="text-[#0a5c57] font-semibold hover:underline">info@hahoballifesciences.com</a>
            </p>
          </div>
        </motion.section>

        {/* International Data Transfers */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">International Data Transfers</h2>
            <p className="text-gray-600 leading-relaxed">
              Hahobal Lifesciences is based in Mumbai, India. If you are accessing our website from outside India, please be aware that your information may be transferred to, stored, and processed in India or other countries where our service providers operate. We ensure appropriate safeguards are in place for international data transfers in compliance with applicable laws.
            </p>
          </div>
        </motion.section>

        {/* Data Retention */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
            <p className="text-gray-600 leading-relaxed">
              We retain personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When information is no longer needed, we securely delete or anonymize it.
            </p>
          </div>
        </motion.section>

        {/* Children's Privacy */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have inadvertently collected information from a child, we will take steps to delete it promptly.
            </p>
          </div>
        </motion.section>

        {/* Third-Party Links */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
            <p className="text-gray-600 leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review their privacy policies before providing any personal information.
            </p>
          </div>
        </motion.section>

        {/* Changes to Privacy Policy */}
        <motion.section
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeUpVariant}
        >
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
            <p className="text-gray-600 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. The "Last Updated" date at the top of this page indicates when the policy was last revised. We encourage you to review this policy periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
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
              Contact Us
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
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

      </div>
    </main>
  );
}
