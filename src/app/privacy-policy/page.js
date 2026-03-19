"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Scroll listener for Back to Top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

    const cardUp = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 70, damping: 15, delay: 0.2 },
    },
  };

  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* HERO */}
       <motion.div
              className="flex flex-col text-white"
              variants={cardUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
      <section className="w-full bg-[#f6fafd] py-16 flex justify-center">
        <div className="w-[90%] lg:w-[70%] text-center">
          <h1 className="text-4xl font-bold text-[#004188] mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600 text-lg">
            Please read these policies carefully before using our website.
          </p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="w-full flex justify-center py-16">
        <div className="w-[90%] lg:w-[70%] text-gray-700 leading-relaxed space-y-12">
          {/* Agreement */}
          <div>
            <p>
              Protecting your private information is our priority. This
              Statement of Privacy applies to https://fastlinkleads.com, and
              Fast Link Marketing and Consulting LLC and governs data collection
              and usage. For the purposes of this Privacy Policy, unless
              otherwise noted, all references to Fast Link Marketing and
              Consulting LLC include https://fastlinkleads.com and Fast Link
              Leads. The Fast Link Leads website is a Lead Generation site. By
              using the Fast Link Leads website, you consent to the data
              practices described in this statement.
            </p>
          </div>

          {/* Collection of your Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Collection of your Personal Information
            </h2>
            <p>
              In order to better provide you with products and services offered,
              Fast Link Leads may collect personally identifiable information,
              such as your:
            </p>

            <p>
              If you purchase Fast Link Leads’s products and services, we
              collect billing and credit card information. This information is
              used to complete the purchase transaction. We do not collect any
              personal information about you unless you voluntarily provide it
              to us. However, you may be required to provide certain personal
              information to us when you elect to use certain products or
              services. These may include: (a) registering for an account; (b)
              entering a sweepstakes or contest sponsored by us or one of our
              partners; (c) signing up for special offers from selected third
              parties; (d) sending us an email message; (e) submitting your
              credit card or other payment information when ordering and
              purchasing products and services. To wit, we will use your
              information for, but not limited to, communicating with you in
              relation to services and/or products you have requested from us.
              We also may gather additional personal or non-personal information
              in the future.
            </p>
          </div>

          {/* Use of your Personal Information
           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Use of your Personal Information
            </h2>
            <p>
              Fast Link Leads collects and uses your personal information to
              operate and deliver the services you have requested. Fast Link
              Leads may also use your personally identifiable information to
              inform you of other products or services available from Fast Link
              Leads and its affiliates.
            </p>
          </div>

          {/* Sharing Information with Third Parties
           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Sharing Information with Third parties
            </h2>
            <p>
              Fast Link Leads does not sell, rent or lease its customer lists to
              third parties. Fast Link Leads may, from time to time, contact you
              on behalf of external business partners about a particular
              offering that may be of interest to you. In those cases, your
              unique personally identifiable information (e-mail, name, address,
              telephone number) is transferred to the third party. Fast Link
              Leads may share data with trusted partners to help perform
              statistical analysis, send you
            </p>
             <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>First and Last Name</li>
              <li>E-mail Address</li>
              <li>Phone Number</li>
            </ul>
            <p>
              email or postal mail, provide customer support, or arrange for
              deliveries. All such third parties are prohibited from using your
              personal information except to provide these services to Fast Link
              Leads, and they are required to maintain the confidentiality of
              your information. Fast Link Leads may disclose your personal
              information, without notice, if required to do so by law or in the
              good faith belief that such action is necessary to: (a) conform to
              the edicts of the law or comply with legal process served on Fast
              Link Leads or the site; (b) protect and defend the rights or
              property of Fast Link Leads; and/or (c) act under exigent
              ircumstances to protect the personal safety of users of Fast Link
              Leads, or the public.
            </p>
          </div>

          {/* Opt-Out of Disclosure of Personal Information to Third Parties */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Opt-Out of Disclosure of Personal Information to Third Parties
            </h2>

            <p>
              In connection with any personal information we may disclose to a
              third party for a business purpose, you have the right to know:
            </p>

            <p className="mt-4">
              You have the right under the California Consumer Privacy Act of
              2018 (CCPA) and certain other privacy and data protection laws, as
              applicable, to opt-out of the disclosure of your personal
              information. If you exercise your right to opt-out of the
              disclosure of your personal information, we will refrain from
              disclosing your personal information, unless you subsequently
              provide express authorization for the disclosure of your personal
              information. To opt-out of the disclosure of your personal
              information, visit this Web page
              https://fastlinkleads.com/contact-us/.
            </p>
          </div>

          {/* Automatically Collected Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Automatically Collected Information
            </h2>

            <p>
              Information about your computer hardware and software may be
              automatically collected by Fast Link Leads. This information can
              include: your IP address, browser type, domain names, access times
              and referring website addresses. This information is used for the
              operation of the service, to maintain quality of the service, and
              to provide general statistics regarding use of the Fast Link Leads
              website.
            </p>
          </div>

          {/* Use of Cookies */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Use of Cookies
            </h2>

            <p>
              The Fast Link Leads website may use “cookies” to help you
              personalize your online experience. A cookie is a text file that
              is placed on your hard disk by a web page server. Cookies cannot
              be used to run programs or deliver viruses to your computer.
              Cookies are uniquely assigned to you, and can only be read by a
              web server in the domain that issued the cookie to you. One of the
              primary purposes of cookies is to provide a convenience feature to
              save you time. The purpose of a cookie is to tell the Web server
              that you have returned to a specific page. For example, if you
              personalize Fast Link Leads pages, or register with Fast Link
              Leads site or services, a cookie helps Fast Link Leads to recall
              your specific information on subsequent visits. This simplifies
              the process of recording your personal information, such as
              billing addresses, shipping addresses, and so on. When you return
              to the same Fast Link Leads website, the information you
              previously provided can be retrieved, so you can easily use the
              Fast Link Leads features that you customized.
            </p>
             <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                The categories of personal information that we disclosed about
                you for a business purpose.
              </li>
            </ul>
            <p>
              You have the ability to accept or decline cookies. Most Web
              browsers automatically accept cookies, but you can usually modify
              your browser setting to decline cookies if you prefer. If you
              choose to decline cookies, you may not be able to fully experience
              the interactive features of the Fast Link Leads services or
              websites you visit.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Links
            </h2>

            <p>
              This website contains links to other sites. Please be aware that
              we are not responsible for the content or privacy practices of
              such other sites. We encourage our users to be aware when they
              leave our site and to read the privacy statements of any other
              site that collects personally identifiable information.
            </p>
          </div>

          {/* Security of your Personal Information */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Security of your Personal Information
            </h2>

            <p>
              Fast Link Leads secures your personal information from
              unauthorized access, use, or disclosure. Fast Link Leads uses the
              following methods for this purpose:
            </p>

            <p>
              When personal information (such as a credit card number) is
              transmitted to other websites, it is protected through the use of
              encryption, such as the Secure Sockets Layer (SSL) protocol. We
              strive to take appropriate security measures to protect against
              unauthorized access to or alteration of your personal information.
              Unfortunately, no data transmission over the Internet or any
              wireless network can be guaranteed to be 100% secure. As a result,
              while we strive to protect your personal information, you
              acknowledge that: (a) there are security and privacy limitations
              inherent to the Internet which are beyond our control; and (b)
              security, integrity, and privacy of any and all information and
              data exchanged between you and us through this Site cannot be
              guaranteed.
            </p>
          </div>

          {/* Right to Deletion */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Right to Deletion
            </h2>

            <p>
              Subject to certain exceptions set out below, on receipt of a
              verifiable request from you, we will:
            </p>

            <p>
              Please note that we may not be able to comply with requests to
              delete your personal information if it is necessary to:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>SSL Protocol</li>
            </ul>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Delete your personal information from our records; and</li>
              <li>
                Direct any service providers to delete your personal information
                from their records.
              </li>
            </ul>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Complete the transaction for which the personal information was
                collected, fulfill the terms of a written warranty or product
                recall conducted in accordance with federal law, provide a good
                or service requested by you, or reasonably anticipated within
                the context of our ongoing business relationship with you, or
                otherwise perform a contract between you and us;
              </li>

              <li>
                Detect security incidents, protect against malicious, deceptive,
                fraudulent, or illegal activity; or prosecute those responsible
                for that activity;
              </li>

              <li>
                Debug to identify and repair errors that impair existing
                intended functionality;
              </li>

              <li>
                Exercise free speech, ensure the right of another consumer to
                exercise his or her right
              </li>
            </ul>
          </div>

          {/* Children Under Thirteen
           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Children Under Thirteen
            </h2>

            <p>
              Fast Link Leads does not knowingly collect personally identifiable
              information from children under the age of thirteen. If you are
              under the age of thirteen, you must ask your parent or guardian
              for permission to use this website.
            </p>
          </div>

          {/* Opt-Out & Unsubscribe from Third Party Communications
           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Opt-Out & Unsubscribe from Third Party Communications
            </h2>

            <p className="mt-4">
              We respect your privacy and give you an opportunity to opt-out of
              receiving announcements of certain information. Users may opt-out
              of receiving any or all communications from third-party partners
              of Fast Link Leads by contacting us here:
            </p>

             <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Web page: https://fastlinkleads.com/contact-us/</li>
              <li>Email: support@fastlinkleads.com</li>
              <li>Phone: 844-884-5323</li>
            </ul>
          </div>

          {/* E-mail Communications
           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              E-mail Communications
            </h2>

            <p>
              From time to time, Fast Link Leads may contact you via email for
              the purpose of providing announcements, promotional offers,
              alerts, confirmations, surveys, and/or other general
              communication. In order to improve our Services, we may receive a
              notification when you open an email from Fast Link Leads or click
              on a link therein. If you would like to stop receiving marketing
              or promotional communications via email from Fast Link Leads, you
              may opt out of such communications by replying STOP.
            </p>
          </div>

          {/* External Data Storage Sites

           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              External Data Storage Sites
            </h2>

            <p>
              We may store your data on servers provided by third party hosting
              vendors with whom we have contracted.
            </p>
          </div>

          {/* Changes to this Statement


           */}
          <div>
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Changes to this Statement
            </h2>

            <p>
              Fast Link Leads reserves the right to change this Privacy Policy
              from time to time. We will notify you about significant changes in
              the way we treat personal information by sending a notice to the
              primary email address specified in your account, by placing a
              prominent notice on our website, and/or by updating any privacy
              information. Your continued use of the website and/or Services
              available after such modifications will constitute your: (a)
              acknowledgment of the modified Privacy Policy; and (b) agreement
              to abide and be bound by that Policy. of free speech, or exercise
              another right provided for by law;
            </p>
             <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>
                Comply with the California Electronic Communications Privacy
                Act;
              </li>
              <li>
                Engage in public or peer-reviewed scientific, historical, or
                statistical research in the public interest that adheres to all
                other applicable ethics and privacy laws, when our deletion of
                the information is likely to render impossible or seriously
                impair the achievement of such research, provided we have
                obtained your informed consent;
              </li>
              <li>
                Enable solely internal uses that are reasonably aligned with
                your expectations based on your relationship with us;
              </li>
              <li>Comply with an existing legal obligation; or</li>
              <li>
                Otherwise use your personal information, internally, in a lawful
                manner that is compatible with the context in which you provided
                the information.
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-[#f6fafd] p-8 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#004188] mb-4">
              Contact Us
            </h2>

            <div className="space-y-2">
              <p>
                Fast Link Leads welcomes your questions or comments regarding
                this Statement of Privacy. If you believe that Fast Link Leads
                has not adhered to this Statement, please contact Fast Link
                Leads at: Fast Link Marketing and Consulting LLC
              </p>
              <p>200 Continental Dr. Suite 401</p>
              <p>Newark, Delaware 19713</p>
              <p>Email: support@fastlinkleads.com</p>
              <p>Phone: 844-884-5323</p>

              <p className="text-sm text-gray-500 mt-4">
                Effective as of December 12, 2023
              </p>
            </div>
          </div>
        </div>
      </section>
</motion.div>

      <Footer />

      {/* BACK TO TOP BUTTON */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 lg:right-8 z-50 w-14 h-14 rounded-full bg-[#0858af] flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </main>
  );
}
