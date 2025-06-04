import type { Metadata } from "next"
import PremiumHeader from "@/components/premium-header"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "Terms of Service | Carter Digitals",
  description: "Terms of Service for Carter Digitals website design and development services in South Africa.",
  alternates: {
    canonical: "https://carterdigitals.com/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <PremiumHeader />

      <section className="pt-32 pb-16 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Last updated: May 20, 2024</p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-invert">
            <h2>Agreement to Terms</h2>
            <p>
              These Terms of Service constitute a legally binding agreement made between you and Carter Digitals ("we,"
              "us," or "our"), concerning your access to and use of our website and services.
            </p>
            <p>
              You agree that by accessing the site and/or services, you have read, understood, and agree to be bound by
              all of these Terms of Service. If you do not agree with all of these Terms of Service, then you are
              expressly prohibited from using the site and/or services and you must discontinue use immediately.
            </p>

            <h2>Services</h2>
            <p>
              Carter Digitals provides website design and development services, e-commerce solutions, branding, digital
              marketing, content creation, virtual assistants, and professional presentations. The specific details,
              deliverables, and timelines for each service will be outlined in a separate agreement or proposal provided
              to you.
            </p>

            <h2>Intellectual Property Rights</h2>
            <h3>Our Intellectual Property</h3>
            <p>
              The site, services, and their entire contents, features, and functionality (including but not limited to
              all information, software, text, displays, images, video, and audio, and the design, selection, and
              arrangement thereof) are owned by Carter Digitals, its licensors, or other providers of such material and
              are protected by South African and international copyright, trademark, patent, trade secret, and other
              intellectual property or proprietary rights laws.
            </p>
            <h3>Your Content</h3>
            <p>
              You retain ownership of any intellectual property rights that you hold in content that you submit to us
              for use in your project. By providing content to us, you grant us a worldwide, royalty-free license to
              use, reproduce, modify, and display your content solely for the purpose of providing the services to you.
            </p>
            <h3>Client Websites</h3>
            <p>
              Upon full payment for our services, you will own the website we create for you, including all content
              created specifically for your project. However, we retain ownership of any pre-existing materials, tools,
              or frameworks that we use in creating your website.
            </p>

            <h2>Payment Terms</h2>
            <p>
              Payment terms will be specified in the proposal or agreement provided to you. Typically, we require a
              deposit before beginning work, with the remaining balance due upon completion of the project or in
              installments as outlined in the agreement.
            </p>
            <p>
              If you fail to make any payment when due, we reserve the right to suspend or terminate services until
              payment is received. Late payments may be subject to a late fee as specified in your agreement.
            </p>

            <h2>Revisions and Changes</h2>
            <p>
              The number of revisions included in your project will be specified in your agreement. Additional revisions
              beyond those included may incur additional charges at our standard hourly rate.
            </p>
            <p>
              Significant changes to the project scope after work has begun may require a revised quote and timeline.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              In no event will Carter Digitals, or its directors, employees, or agents be liable to you or any third
              party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages,
              including lost profit, lost revenue, loss of data, or other damages arising from your use of the services,
              even if we have been advised of the possibility of such damages.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to defend, indemnify, and hold harmless Carter Digitals and its employees, contractors,
              officers, and directors from and against any loss, damage, liability, claim, or demand, including
              reasonable attorneys' fees and expenses, made by any third party due to or arising out of your breach of
              these Terms of Service or your violation of any law or the rights of a third party.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason whatsoever, including without limitation if you breach these Terms of Service.
            </p>
            <p>
              If you wish to terminate your agreement with us, you may do so by providing written notice. Termination
              fees may apply as specified in your agreement.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and defined following the laws of South Africa. Carter Digitals and
              yourself irrevocably consent that the courts of South Africa shall have exclusive jurisdiction to resolve
              any dispute which may arise in connection with these terms.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. We will notify you of any changes by
              posting the new Terms of Service on this page and updating the "Last Updated" date at the top of this
              page.
            </p>

            <h2>Contact Us</h2>
            <p>If you have any questions about these Terms of Service, please contact us at:</p>
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
