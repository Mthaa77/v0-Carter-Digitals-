import type { Metadata } from "next"
import PremiumHeader from "@/components/premium-header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Privacy Policy | Carter Digitals",
  description: "Privacy Policy for Carter Digitals website design and development services in South Africa.",
  alternates: {
    canonical: "https://carterdigitals.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PremiumHeader />

      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Last updated: May 20, 2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2>Introduction</h2>
            <p>
              Carter Digitals ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy
              explains how we collect, use, disclose, and safeguard your information when you visit our website or use
              our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy,
              please do not access the site.
            </p>

            <h2>Information We Collect</h2>
            <p>We may collect information about you in a variety of ways. The information we may collect includes:</p>
            <h3>Personal Data</h3>
            <p>
              Personally identifiable information, such as your name, email address, telephone number, and other similar
              contact data that you voluntarily give to us when you register with the site or when you choose to
              participate in various activities related to the site, such as online chat and message boards. You are
              under no obligation to provide us with personal information of any kind, however your refusal to do so may
              prevent you from using certain features of the site.
            </p>
            <h3>Derivative Data</h3>
            <p>
              Information our servers automatically collect when you access the site, such as your IP address, your
              browser type, your operating system, your access times, and the pages you have viewed directly before and
              after accessing the site.
            </p>
            <h3>Financial Data</h3>
            <p>
              Financial information, such as data related to your payment method (e.g., valid credit card number, card
              brand, expiration date) that we may collect when you purchase, order, return, exchange, or request
              information about our services from the site.
            </p>

            <h2>Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized
              experience. Specifically, we may use information collected about you via the site to:
            </p>
            <ul>
              <li>Create and manage your account.</li>
              <li>Process your payments.</li>
              <li>Email you regarding your account or order.</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions related to the site.</li>
              <li>Increase the efficiency and operation of the site.</li>
              <li>Monitor and analyze usage and trends to improve your experience with the site.</li>
              <li>Notify you of updates to the site.</li>
              <li>Offer new products, services, and/or recommendations to you.</li>
              <li>Perform other business activities as needed.</li>
              <li>Request feedback and contact you about your use of the site.</li>
              <li>Resolve disputes and troubleshoot problems.</li>
              <li>Respond to product and customer service requests.</li>
              <li>Send you a newsletter.</li>
            </ul>

            <h2>Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain situations. Your information may be
              disclosed as follows:
            </p>
            <h3>By Law or to Protect Rights</h3>
            <p>
              If we believe the release of information about you is necessary to respond to legal process, to
              investigate or remedy potential violations of our policies, or to protect the rights, property, and safety
              of others, we may share your information as permitted or required by any applicable law, rule, or
              regulation.
            </p>
            <h3>Third-Party Service Providers</h3>
            <p>
              We may share your information with third parties that perform services for us or on our behalf, including
              payment processing, data analysis, email delivery, hosting services, customer service, and marketing
              assistance.
            </p>
            <h3>Marketing Communications</h3>
            <p>
              With your consent, or with an opportunity for you to withdraw consent, we may share your information with
              third parties for marketing purposes, as permitted by law.
            </p>

            <h2>Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal
              information. While we have taken reasonable steps to secure the personal information you provide to us,
              please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method
              of data transmission can be guaranteed against any interception or other type of misuse.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
            <p>
              Carter Digitals
              <br />
              Email: kadiakakabelo4@gmail.com
              <br />
              Phone: 072 402 6893
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
