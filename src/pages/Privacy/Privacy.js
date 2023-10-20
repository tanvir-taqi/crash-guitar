import React, { useEffect } from "react";

const Privacy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div className="bg-gray-100 py-16 text-justify px-12">
      <div className=" bg-white mx-auto p-8">
        <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Introduction</h2>
          <p className="text-gray-700">
            Welcome to Research Window's Privacy Policy. At Research Window, we
            value your privacy and are committed to protecting your personal
            information. This Privacy Policy outlines how we collect, use, and
            safeguard your data when you visit our website and interact with our
            services.
          </p>
          <p className="text-gray-700">
            We understand the importance of your personal information and are
            dedicated to maintaining your trust. By using our website, you agree
            to the practices described in this Privacy Policy.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
          <p className="text-gray-700">
            At Research Window, we may collect various types of information from
            you to enhance your experience and improve our services. The types
            of information we collect include, but are not limited to:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Your Personal Information:</strong> This includes your
              name, email address, and contact details. We collect this
              information when you register for an account or communicate with
              us.
            </li>
            <li>
              <strong>Location Information:</strong> We may collect information
              about your approximate location based on your IP address or other
              data. This helps us provide localized content and services.
            </li>
            <li>
              <strong>Browsing Activity:</strong> We gather data related to your
              interactions with our website. This includes pages visited, links
              clicked, and the duration of your visits. We use this information
              to analyze user behavior and improve our website's functionality.
            </li>
            <li>
              <strong>Device and Browser Information:</strong> We collect data
              about your device type, operating system, browser type, and screen
              resolution. This helps us optimize our website for different
              devices and browsers.
            </li>
            <li>
              <strong>Log Data:</strong> Our servers automatically record
              certain information when you use our services. This data may
              include your IP address, browser user agent, timestamps, and
              referral URLs.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Rest assured that we handle your information with care and in
            accordance with applicable data protection laws. We use this
            collected data to provide, personalize, and improve our services, as
            well as to communicate with you and for research purposes.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">How We Use Information</h2>
          <p className="text-gray-700">
            At Research Window, we are committed to using the information we
            collect responsibly and in ways that benefit you. Here's how we use
            the information you provide:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Personalization:</strong> We use the information to
              personalize your experience on our website. This includes
              tailoring content, recommendations, and features to match your
              preferences and interests.
            </li>
            <li>
              <strong>Improvement:</strong> Your data helps us improve our
              website's functionality, usability, and overall performance. We
              analyze user behavior to identify areas for enhancement.
            </li>
            <li>
              <strong>Communication:</strong> We may use your contact
              information to communicate with you. This includes sending
              updates, notifications, and responses to your inquiries.
            </li>
            <li>
              <strong>Marketing:</strong> With your consent, we may use your
              information for marketing purposes. This includes sending
              promotional emails, newsletters, and offers. You can opt-out of
              marketing communications at any time.
            </li>
            <li>
              <strong>Research:</strong> We conduct research to better
              understand user preferences and trends. This research helps us
              refine our services and develop new features.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            We take data privacy seriously and do not sell your personal
            information to third parties. Your data is used exclusively to
            enhance your experience and improve our services. If you have any
            concerns or questions about how your information is used, please
            don't hesitate to contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">
            Cookies and Similar Technologies
          </h2>
          <p className="text-gray-700">
            At Research Window, we use cookies and similar technologies to
            provide you with an enhanced browsing experience. These technologies
            play a vital role in improving our website's functionality and
            tailoring content to your preferences. Below, we provide more
            details about how these technologies work and how they benefit you:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Cookies:</strong> Cookies are small text files that are
              placed on your device when you visit our website. They help us
              remember your preferences, such as language settings and login
              status, for a smoother browsing experience.
            </li>
            <li>
              <strong>Analytics:</strong> We use cookies to gather data about
              your interactions with our website. This includes information
              about the pages you visit, the links you click, and the duration
              of your visits. Analytics data is anonymized and used for
              improving our website's performance and user experience.
            </li>
            <li>
              <strong>Third-Party Cookies:</strong> Some of our web pages may
              contain content from third-party websites (e.g., social media
              plugins, embedded videos). These third parties may also use
              cookies to track your interaction with their content. Please
              review the privacy policies of these third parties for more
              information on their cookie usage.
            </li>
            <li>
              <strong>Opting Out:</strong> You have the option to manage your
              cookie preferences. Most web browsers allow you to control cookies
              through their settings. You can choose to accept, reject, or
              delete cookies based on your preferences. However, please note
              that disabling cookies may affect certain features of our website.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Rest assured, the information collected through cookies is used
            solely for the purpose of enhancing your browsing experience and
            improving our website's functionality. We respect your privacy, and
            your personal data is not sold or shared with third parties without
            your consent.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
          <p className="text-gray-700">
            At Research Window, we believe in giving you control over your
            personal information. You have the right to make choices regarding
            how your data is collected, used, and shared. Below, we outline some
            of the choices available to you:
          </p>
          <ul className="list-disc pl-8">
            <li>
              <strong>Account Information:</strong> You can update your account
              information, including your name, email address, and contact
              details, by accessing your account settings.
            </li>
            <li>
              <strong>Email Communications:</strong> You can choose to opt-out
              of receiving email communications from us by following the
              unsubscribe instructions provided in our emails. Please note that
              even if you opt out of marketing emails, you may still receive
              essential service-related communications.
            </li>
            <li>
              <strong>Cookie Preferences:</strong> Most web browsers allow you
              to manage your cookie preferences through their settings. You can
              accept, reject, or delete cookies based on your preferences.
              However, please be aware that disabling cookies may impact certain
              features of our website.
            </li>
            <li>
              <strong>Privacy Policy Review:</strong> We encourage you to review
              our Privacy Policy regularly to stay informed about how your data
              is handled. If you have any questions or concerns about our
              practices, please don't hesitate to contact us.
            </li>
          </ul>
          <p className="text-gray-700 mt-4">
            Your privacy matters to us, and we are committed to respecting your
            choices. If you have specific requests or need assistance with
            managing your data preferences, please reach out to our support
            team, and we will be happy to assist you.
          </p>
        </section>
        <h1 className="text-3xl font-semibold mb-6">Thank You!!</h1>
      </div>
    </div>
  );
};

export default Privacy;
