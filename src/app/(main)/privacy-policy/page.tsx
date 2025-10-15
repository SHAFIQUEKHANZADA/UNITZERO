import React from 'react'
import { Shield, Lock, Eye, Mail, MapPin, Calendar, FileText, Zap } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "UNITZERO Privacy Policy: how we collect, use, and protect your data.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
}

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-omniv-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(0,212,170,0.05),transparent_50%)]"></div>
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.03),transparent_50%)]"></div>
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-omniv-card/50 backdrop-blur-sm border border-omniv-primary/30 mb-8">
              <Shield className="w-5 h-5 text-omniv-primary" />
              <span className="text-omniv-primary font-medium">Privacy & Security</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white via-omniv-primary to-omniv-secondary bg-clip-text text-transparent mb-6">
              Privacy Policy
            </h1>

            <p className="text-xl text-omniv-muted max-w-3xl mx-auto leading-relaxed mb-8">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>

            <div className="flex items-center justify-center gap-4 text-omniv-muted">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-omniv-primary" />
                <span>Effective: January 2024</span>
              </div>
              <div className="w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-omniv-secondary" />
                <span>GDPR Compliant</span>
              </div>
              <div className="w-1 h-1 bg-omniv-muted rounded-full"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-omniv-primary" />
                <span>Data Protected</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content */}
      <section className="relative z-10 container mx-auto px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          {/* Company Info Card */}
          <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv mb-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-omniv-primary/20 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-omniv-primary" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">UNITZERO (Pvt.) Ltd.</h2>
                <p className="text-omniv-muted mb-4">
                  We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our services, forms, and website.
                </p>
                <div className="flex items-center gap-6 text-sm text-omniv-muted">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-omniv-primary" />
                    <span>Effective Date: January 2024</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-omniv-secondary" />
                    <span>Karachi, Pakistan</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Policy Sections */}
          <div className="space-y-8">
            {/* Section 1: Information We Collect */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-primary/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-omniv-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">1. Information We Collect</h3>
              </div>
              <div className="space-y-4 text-omniv-muted">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p><span className="text-white font-medium">Personal Information:</span> Name, email address, phone number, and company details provided through forms.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p><span className="text-white font-medium">Service Data:</span> Information related to service inquiries, appointments, or demo requests.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p><span className="text-white font-medium">Technical Data:</span> Browser type, device information, and usage patterns (via cookies/analytics).</p>
                </div>
              </div>
            </div>

            {/* Section 2: How We Use Your Information */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-secondary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-omniv-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">2. How We Use Your Information</h3>
              </div>
              <div className="space-y-4 text-omniv-muted">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-secondary mt-2 flex-shrink-0"></div>
                  <p>To contact you regarding your request or inquiry.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-secondary mt-2 flex-shrink-0"></div>
                  <p>To provide and improve our services (AI automations, chatbots, workflow tools, etc.).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-secondary mt-2 flex-shrink-0"></div>
                  <p>To send updates, offers, or marketing communications (you can opt out anytime).</p>
                </div>
              </div>
            </div>

            {/* Section 3: How We Share Information */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-primary/20 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-omniv-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">3. How We Share Information</h3>
              </div>
              <div className="space-y-4 text-omniv-muted">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p><span className="text-white font-medium">We do not sell or rent</span> your data to third parties.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p>Information may be shared with trusted service providers who help us operate our business (e.g., hosting, CRM, email systems).</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p>We may disclose information if required by law or to protect our rights and safety.</p>
                </div>
              </div>
            </div>

            {/* Section 4: Data Security */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-secondary/20 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-omniv-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">4. Data Security</h3>
              </div>
              <p className="text-omniv-muted">
                We implement reasonable technical and organizational measures to protect your personal data against unauthorized access, use, alteration, or disclosure. Our security practices include encryption, secure servers, and regular security audits.
              </p>
            </div>

            {/* Section 5: Your Rights */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-primary/20 flex items-center justify-center">
                  <Eye className="w-5 h-5 text-omniv-primary" />
                </div>
                <h3 className="text-2xl font-bold text-white">5. Your Rights</h3>
              </div>
              <div className="space-y-4 text-omniv-muted">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p>You can request access, correction, or deletion of your personal data.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p>You can opt out of marketing communications anytime.</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-omniv-primary mt-2 flex-shrink-0"></div>
                  <p>You have the right to data portability and to restrict processing.</p>
                </div>
              </div>
            </div>

            {/* Section 6: Contact Us */}
            <div className="bg-omniv-card/50 backdrop-blur-sm rounded-2xl p-8 border border-omniv">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-10 h-10 rounded-full bg-omniv-secondary/20 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-omniv-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white">6. Contact Us</h3>
              </div>
              <p className="text-omniv-muted mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="bg-omniv-muted/10 rounded-xl p-6 border border-omniv">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Company Details</h4>
                    <div className="space-y-2 text-omniv-muted">
                      <p className="font-medium text-white">UNITZERO (Pvt.) Ltd.</p>
                      <p>F1-18, Sunny Pride, Johar Mor</p>
                      <p>Gulistan-e-Johar, Karachi, Pakistan</p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Contact Information</h4>
                    <div className="space-y-2 text-omniv-muted">
                      <p className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-omniv-primary" />
                        <span>info@unitzero.tech</span>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-omniv-secondary" />
                        <span>Karachi, Pakistan</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Update Notice */}
            <div className="bg-gradient-to-r from-omniv-primary/10 to-omniv-secondary/10 rounded-2xl p-6 border border-omniv-primary/30">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-omniv-primary/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-omniv-primary" />
                </div>
                <h4 className="text-lg font-semibold text-white">Policy Updates</h4>
              </div>
              <p className="text-omniv-muted">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Effective Date&quot; at the top.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PrivacyPolicy