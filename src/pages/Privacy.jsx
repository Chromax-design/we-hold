import React from "react";
import { Link } from "react-router-dom";

const Privacy = () => {
  return (
    <main>
      <div className="max-w-5xl mx-auto py-20 px-3 space-y-5">
        <h1 className="capitalize text-4xl font-semibold">Privacy policy</h1>
        <p>
          Welcome to We Hold A Hand Mentoring Platform ("We Hold A Hand," "us,"
          "we," or "our"). This Privacy Policy outlines the policies and
          practices regarding the collection, use, and disclosure of personal
          data when you use our mentoring platform and the choices you have
          associated with that data. By using We Hold A Hand, you agree to the
          collection and use of information in accordance with this policy.
          Terms used in this Privacy Policy have the same meanings as in our
          Terms and Conditions, accessible from our website.
        </p>
        <div>
          <h3 className="text-xl font-semibold mb-3">
            Information Collection And Use
          </h3>
          <p>
            We collect various types of information for the purpose of providing
            and improving our mentoring platform.
          </p>
        </div>
        <h3 className="text-xl font-semibold mb-3">Types of Data Collected</h3>
        <div className="space-y-3">
          <h4 className="text-lg font-bold capitalize">personal data:</h4>
          <p>
            When using our platform, we may request personally identifiable
            information that can be used to contact or identify you ("Personal
            Data"). This may include, but is not limited to:
          </p>
          <ul className="capitalize list-inside list-disc">
            <li>email address</li>
            <li>firstname and last name</li>
            <li>phone number</li>
            <li>address, state, province, ZIP/postal code, city</li>
            <li>cookies and usage data</li>
          </ul>
          <p>
            We may also collect information on how you access and use our
            platform ("Usage Data"). This data may include your computer's
            Internet Protocol (IP) address, browser type, browser version, pages
            visited, time and date of visits, time spent on pages, unique device
            identifiers, and other diagnostic data.
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-bold capitalize">
            Tracking & Cookies Data:
          </h4>
          <p>
            We use cookies and similar tracking technologies to track activity
            on our platform and store certain information. Cookies are files
            with a small amount of data that may include an anonymous unique
            identifier. These cookies are sent to your browser from a website
            and stored on your device. We also use beacons, tags, and scripts to
            collect and track information and to improve and analyze our
            platform. You can instruct your browser to refuse all cookies or to
            indicate when a cookie is being sent. However, if you do not accept
            cookies, you may not be able to use some portions of our platform.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Use of Data</h3>
          <p>
            We Hold A Hand uses the collected data for various purposes,
            including:
          </p>
          <ul className="list-disc list-inside">
            <li>Providing and maintaining the mentoring platform</li>
            <li>Notifying you about changes to our platform</li>
            <li>
              Enabling you to participate in interactive features of our
              platform when you choose to do so
            </li>
            <li>Providing customer care and support</li>
            <li>Analyzing data to improve the platform</li>
            <li>Monitoring platform usage</li>
            <li>Detecting, preventing, and addressing technical issues</li>
            <li>Targeted advertisements and marketing purposes</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Transfer Of Data</h3>
          <p className="mt-3">
            Your information, including Personal Data, may be transferred to and
            maintained on computers located outside of your state, province,
            country, or other governmental jurisdiction where data protection
            laws may differ from those in your jurisdiction. If you are located
            outside Romania and choose to provide information to us, please note
            that we transfer the data, including Personal Data, to Romania and
            process it there. Your consent to this Privacy Policy, followed by
            the submission of such information, represents your agreement to the
            transfer. We will take all reasonable steps to ensure that your data
            is treated securely and in accordance with this Privacy Policy. No
            transfer of your Personal Data will take place to an organization or
            country unless there are adequate controls in place, including the
            security of your data and other personal information.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Disclosure Of Data</h3>
          <p>
            We may disclose your Personal Data in the good faith belief that
            such action is necessary to:
          </p>
          <ul className="list-disc list-inside">
            <li>Comply with a legal obligation</li>
            <li>Protect and defend the rights or property of We Hold A Hand</li>
            <li>
              Prevent or investigate possible wrongdoing in connection with the
              platform
            </li>
            <li>Protect the personal safety of users or the public</li>
            <li>Protect against legal liability</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold">Security Of Data</h3>
          <p>
            The security of your data is important to us, but please remember
            that no method of transmission over the Internet or method of
            electronic storage is 100% secure. While we strive to use
            commercially acceptable means to protect your Personal Data, we
            cannot guarantee its absolute security.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Service Providers</h3>
          <p>
            We may employ third-party companies and individuals to facilitate
            our mentoring platform, provide services on our behalf, perform
            service-related tasks, or assist us in analyzing how our platform is
            used. These third parties have access to your Personal Data only to
            perform these tasks on our behalf and are obligated not to disclose
            or use it for any other purpose.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Analytics</h3>
          <p>
            We may use third-party Service Providers to monitor and analyze the
            use of our platform, such as Google Analytics. Google Analytics is a
            web analytics service offered by Google that tracks and reports
            website traffic. The data collected by Google Analytics is shared
            with other Google services and may be used to personalize ads within
            Google's advertising network. To opt-out of Google Analytics, you
            can install the Google Analytics opt-out browser add-on.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Links To Other Sites</h3>
          <p>
            Our platform may contain links to third-party sites that are not
            operated by us. We strongly advise you to review the Privacy Policy
            of any third-party site you visit. We have no control over and
            assume no responsibility for the content, privacy policies, or
            practices of third-party sites or services.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Children's Privacy</h3>
          <p>
            Our platform does not address anyone under the age of 15
            ("Children"). We do not knowingly collect personally identifiable
            information from anyone under the age of 18. If you are a parent or
            guardian and you are aware that your child has provided us with
            Personal Data, please contact us. If we become aware that we have
            collected Personal Data from children without verification of
            parental consent, we take steps to remove that information from our
            servers.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">
            Changes To This Privacy Policy
          </h3>
          <p>
            We may update our Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page.
            We will also notify you via email and/or a prominent notice on our
            platform prior to the change becoming effective. You are advised to
            review this Privacy Policy periodically for any changes. Changes to
            this Privacy Policy are effective when they are posted on this page.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-semibold mb-3">Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us:
          </p>
          <p className="italic font-semibold">
            By email:{" "}
            <Link to={"mailto:info@weholdahand.com"}>info@weholdahand.com</Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default Privacy;
