import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy",
  description:
    "How SafeStart Medical collects, uses, protects, and discloses your information — including HIPAA-aligned security practices and your rights to your health data.",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Last Modified: March 12, 2015
      </p>

      <div className="mt-10 space-y-4 text-muted-foreground [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h3]:mt-8 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        <h2>Security Overview</h2>
        <p>
          SafeStart is compliant with HIPPA. We provide this overview so that
          you can better understand the security measures we&apos;ve put in
          place to protect the information that you store using SafeStart.
        </p>

        <h2>Secure Storage &amp; Reserved Instances</h2>
        <p>
          All data stored in our databases is symmetrically encrypted using AES
          256 keys. Amazon Web Services stores data over several large-scale
          data centers. You can find more information about Amazon Web
          Services&apos; security at the Amazon Web Services&apos; website.
          Encryption keys are stored using further encryption.
        </p>

        <h2>Secure Transfers</h2>
        <p>
          Your files are sent from SafeStart&apos;s mobile and web apps to our
          servers over a secure channel using SSL encryption, the standard for
          secure Internet network connections.
        </p>

        <h2>User Accounts</h2>
        <p>
          User accounts are password protected. Upon successful entry of a
          unique email, password and authentication token, the user then gains
          access to his or her account.
        </p>

        <h2>Your Data is Backed Up</h2>
        <p>
          SafeStart and Amazon Web Services keep redundant backups of all data
          over multiple locations to prevent the remote possibility of data
          loss.
        </p>

        <h2>Privacy</h2>
        <p>
          We guard your privacy and work hard to protect your information from
          unauthorized access. Except as stated in the next sentence, SafeStart
          employees are prohibited from viewing the content of files you store
          in your SafeStart profile(s), and are only permitted to view file
          metadata (e.g., file names and locations). Like most online services,
          we have a small number of employees who must be able to access user
          data for the reasons stated in the SafeStart Privacy Policy (e.g.,
          when legally required to do so). We have strict policy and technical
          access controls that prohibit employee access except in these rare
          circumstances. Any user data may be accessed by a medical personnel
          in the course of providing treatment to the adult user or person
          having authority for the patient&apos;s medical care.
        </p>

        <h2>Compliance with Laws and Law Enforcement</h2>
        <p>
          SafeStart cooperates with United States law enforcement when it
          receives valid legal process, which may require SafeStart to disclose
          information contained in your SafeStart profile(s). In the case of
          being compelled to disclose information as above, SafeStart will
          decrypt the data before providing them to law enforcement.
        </p>

        <h2>Auditing</h2>
        <p>
          Our auditing process tracks all records that are created, deleted and
          modified. We also track activity on the site by users, such as,
          login, page view, viewing images, adding notes and other activity on
          the site by Patients and Medical Professionals.
        </p>
        <p>
          You understand that your medical history is entered into the
          SafeStart database and that all reasonable measures have been and
          will be taken to protect the confidentiality of this medical and
          personal information &ndash; in accordance with HIPAA standards. You
          know that no computer or phone system is completely 100% secure.
          SafeStart understands your rights to reasonable privacy in accordance
          with HIPAA standards and state laws, and in accordance with our
          Privacy Policy, will not release information to anyone without your
          written authorization or as required permitted by law, or in
          accordance with your health insurer&apos;s privacy policy if
          applicable, or as otherwise disclosed via our Privacy Policy.
        </p>

        <h2 className="mt-12! text-2xl!">
          Single Point of Truth, LLC Privacy Policy
        </h2>
        <h3>SafeStart Privacy Policy</h3>
        <p className="text-sm">Last Modified: February 23, 2015</p>
        <p>
          SafeStart takes your privacy very seriously. We are committed to
          protecting the privacy of visitors to the SafeStartMedical.com web
          site and mobile application (the &quot;Site&quot;). The purpose of
          this Privacy Policy is to inform you what kinds of information we may
          collect about you when you visit the Site or use the service offered
          on the Site (the &quot;Service&quot;), how we may use that
          information, to whom we may disclose it, and the choices you have
          regarding our use of, and your ability to manage and edit, your
          information. This Privacy Policy applies to the Site and the Service.
          This Privacy Policy does not apply to other web sites to which we may
          link.
        </p>
        <p>
          This Privacy Policy governs information we collect about patients who
          use the Service (&quot;Patients&quot;) and about designated health
          care professionals who are part of a Patient&apos;s health care team
          (&quot;Medical Professionals&quot;).
        </p>
        <p>
          Patients and Medical Professionals can access the Service through the
          Sites, via desktop or laptop computer, mobile phone, tablet, or other
          consumer electronic device. This Privacy Policy governs your use of
          the Service regardless of how you access the Service, and by using
          the Service you consent to the collection, transfer, processing,
          storage, disclosure and other uses of your information described in
          this Privacy Policy.
        </p>

        <h3>Introduction</h3>
        <p>
          The Service is a health records platform that allows patients to view
          protected health information online and to communicate and share that
          information with designated Medical Professionals. This Service also
          allows Medical Professionals to gather, edit, add to, store and share
          protected health information online related to the treatment of their
          patients and share that information with their patients and other
          designated Medical Professionals.
        </p>
        <p>
          When you use the Service, the Service collects identifying
          information about you (e.g., name and email address) as well as, if
          you are a Patient, your protected health information n (e.g., photos,
          videos, notes, doctor communications, and health history), and, if
          you are a Medical Professional, your patient communications.
        </p>

        <h3>The Information we Collect</h3>
        <p>
          We may collect and store the following information when you use the
          Service:
        </p>

        <h3>Identifying Information</h3>
        <p>
          When you register to create an account with the Service, we collect
          some information about you, such as your email address. If you are a
          Medical Professional, we also may collect information about your
          medical credentials, such as your medical license number, degree,
          office number, email address, and specialty.
        </p>

        <h3>Protected Health Information</h3>
        <p>
          You cannot delete or alter any photos and/or information from your
          account.
        </p>

        <h3>Financial Information</h3>
        <p>
          When you make payment for your use of the Service, we collect
          additional financial information as required to process those
          purchase transactions.
        </p>

        <h3>Analytics Information</h3>
        <p>
          When you use the Service, we automatically record information, from
          the computer, mobile phone or other consumer electronic device you
          use to access the Service, that device&apos;s software, and your
          activity using the Service (collectively, &quot;Analytics
          Information&quot;). This may include the device&apos;s Internet
          Protocol (&quot;IP&quot;) address, browser type, the web pages you
          visit on our website, information you search for on our website,
          locale preferences, identification numbers associated with your
          device, your mobile carrier, date and time stamps associated with
          transactions, system configuration information, captured metadata
          from photos and video concerning your uploaded health information,
          and other interactions with the Service.
        </p>
        <p>
          The Service allows you to view your health records or those of your
          dependent children.
        </p>

        <h3>How we Use the Information we Collect</h3>
        <p>How we use non-personally identifying information:</p>
        <p>
          We may use Analytics Information to monitor and analyze use of the
          Service, for the Service&apos;s technical administration, to increase
          the Service&apos;s functionality and user-friendliness, and to verify
          users have the authorization needed for the Service to process their
          requests.
        </p>
        <p>
          As of the date this Privacy Policy went into effect, we use Google
          Analytics. To learn more about the privacy policy of Google
          Analytics, visit:{" "}
          <a
            href="https://www.google.com/intl/en/policies/privacy/"
            className="text-primary underline underline-offset-2"
          >
            https://www.google.com/intl/en/policies/privacy/
          </a>
        </p>
        <p>
          We may also use, or share with third parties, other non-personally
          identifying information in the aggregate for the purpose of improving
          the Service and for business and administrative purposes, or for
          medical studies of quality, safety, and outcomes.
        </p>
        <p>How we use personally identifying information</p>
        <p>
          We use personally identifying information collected through the
          Service, including Patients&apos; protected health information:
        </p>
        <ul>
          <li>to provide the Service</li>
          <li>to assemble Patients&apos; health records</li>
          <li>to send you an email summarizing recent account activity</li>
          <li>
            to provide you with important information about the Service,
            including critical updates and notifications
          </li>
          <li>
            to send you the SafeStart e-mail newsletter (unless you opt out)
          </li>
        </ul>
        <p>
          We may also ask you to participate in use surveys, questionnaires or
          polls, to facilitate feedback and input from our users. When you
          respond to surveys, questionnaires or polls, this information is
          collected only as anonymous, aggregated information and is used for
          statistical purposes only.
        </p>

        <h3>How the Service facilitates your sharing of health information</h3>
        <p>
          A key purpose of the Service is to facilitate the sharing by Patients
          of health information with Medical Professionals that are designated
          members of the Patient&apos;s health care team.
        </p>
        <p>
          Patients share protected health information with designated Medical
          Professionals once they have established a Medical Professional -
          Patient relationship as outlined in our Terms of Service. Once data
          is shared it will remain shared with the Medical Professional.
        </p>
        <p>
          No Medical Professional who accepts a sharing invitation has the
          ability to use the Service to share a Patient&apos;s health
          information with third parties, the exception being that Medical
          Professionals can use or disclose protected health information, such
          as X-rays, laboratory and pathology reports, diagnoses, photos,
          videos, and other medical information for treatment purposes only
          without the patient&apos;s authorization. This includes sharing the
          information to consult with other providers, including providers who
          are not covered entities, to treat a different patient, or to refer
          the patient.
        </p>

        <h3>To Whom we Disclose the Information we Collect</h3>

        <h3>Service Providers</h3>
        <p>
          We may permit certain trusted third party companies and individuals
          to access your information in connection with their performance of
          services to help us maintain, operate, analyze, and improve the
          Service, including but not limited to data storage, maintenance
          services, database management, web analytics, payment processing, and
          improvement of the Service&apos;s features. These third parties may
          have access to your information only for purposes of performing these
          tasks on our behalf and under obligations similar to those in this
          Privacy Policy.
        </p>

        <h3>
          Compliance with Laws and Law Enforcement Requests; Protection of
          Single Point of Truth, LLC&apos;s Rights
        </h3>
        <p>
          We may disclose your personally identifying information to third
          parties when we have a good faith belief that disclosure is
          reasonably necessary to (a) comply with a law, regulation or
          compulsory legal request; (b) protect the safety of any person from
          death or serious bodily injury; (c) prevent fraud or abuse of
          SafeStart or its users; or (d) to protect SafeStart&apos;s property
          rights. If we provide your personally identifying information to a
          law enforcement agency as set forth above, when legally required, we
          will remove SafeStart&apos;s encryption from the files before
          providing them to law enforcement.
        </p>

        <h3>Business Transfers</h3>
        <p>
          If we are involved in a merger, acquisition, or sale of all or a
          portion of our assets, your personally identifying information may be
          transferred as part of that transaction, but we will notify you of
          this transfer of your information (for example, via email and/or a
          prominent notice on the Site). We will also notify you of choices you
          may have regarding the transfer of your information.
        </p>

        <h3>Disclosure of Non-Personally Identifying Information</h3>
        <p>
          We may disclose your non-personally identifying information to third
          parties as described above under &quot;How we use aggregate
          non-personally identifying information.&quot; We do not sell, trade
          or rent your personal information to third parties.
        </p>

        <h3>How Long We Keep Your Personally Identifying Information</h3>
        <p>We will retain copies of your information if required by law.</p>

        <h3>How We Protect Your Personal Information</h3>
        <p>
          We follow generally accepted industry standards to protect your
          health information and other personally identifying information that
          we collect about you. We use firewall barriers, SSL 256-bit
          high-grade encryption techniques and authentication procedures, among
          others, to maintain the security of your online session and to
          protect user accounts and systems from unauthorized access. However,
          no method of transmission over the Internet or method of electronic
          storage is 100% secure.
        </p>

        <h3>Minors</h3>
        <p>
          The Service is not intended for use by individuals under the age of
          18. A parent or guardian can create a Profile for a child and grant
          others access to the data. If a parent or guardian becomes aware that
          his or her child has provided us with personally identifying
          information without their consent, he or she should contact us at
          contact@safestartmedical.com. If we become aware that a child has
          provided us with personally identifying information, we will take
          steps to delete such information from our files.
        </p>

        <h3>Revisions of This Privacy Policy</h3>
        <p>
          SafeStart may revise and update this Privacy Policy at any time,
          without notice to you. We encourage you to periodically check the
          Site to see if there have been any changes to our Privacy Policy that
          may affect you.
        </p>

        <h3>Internet Cookies</h3>
        <p>
          An internet cookie is a string of information that a website stores
          on a visitor&apos;s computer, and that the visitor&apos;s browser
          provides to the website each time the visitor returns. We use cookies
          to help us identify and track visitors to the Site, their usage of
          the Site, and their website access preferences. Visitors to the Site
          who do not wish to have cookies placed on their computers should set
          their browsers to refuse cookies before using the Site, with the
          caveat that certain features of the Site may not function properly
          without the aid of cookies.
        </p>

        <h3>Patient Rights to Protected Health Information (PHI)</h3>
        <p>You have a right to:</p>
        <p>
          1. View your medical records. You can access your medical records
          that have been provided to SafeStart within 30 days of your request
          to do so. You can view your medical records at any time by accessing
          your account online.
        </p>
        <p>
          2. Inspect and copy your PHI. You must submit your request to inspect
          or copy your PHI online to SafeStart. SafeStart may impose a fee for
          the costs of copying, mailing, labor and supplies associated with
          your request. SafeStart may deny your request to inspect and/or copy
          your PHI in certain limited circumstances. If that occurs, SafeStart
          will inform you of the reason for the denial, and you may request a
          review of the denial.
        </p>
        <p>
          3. Amend your PHI. If you believe your file is incomplete or
          incorrect, you can request that SafeStart add an addendum to your
          PHI. SafeStart may, under certain circumstances, deny your request.
          If that occurs, you have the right to submit a statement of
          disagreement for inclusion in your records. You cannot change any PHI
          after the information has been used for the completion of a surgical
          safety time out.
        </p>
        <p>
          If you cancel your operation your information remains part of the
          the medical record and we will keep the information as long as
          specified by the law.
        </p>
        <p>
          4. Accounting and disclosures. You always have the decision whether
          or not to give permission for your PHI to be shared before it is used
          or shared. Your chosen health professionals that use the Service are
          prohibited from using or sharing your personally identifiable medical
          records for any purposes that are not part of normal, routine health
          care processes. You have the right to receive an accounting of all
          disclosures SafeStart has made of your PHI. Accordingly, upon
          request, made in a 12 month period SafeStart shall provide the
          patient, at no charge, with a copy of accounting of disclosures.
        </p>
        <p>
          SafeStart will provide you a notice that tells you how your PHI has
          been used and shared. This accounting will be provided without charge
          for the first request made in a 12-month period. Reasonable
          cost-based charges can be imposed to provide an additional
          accounting(s) if the request for the 2nd (3rd...) accounting is
          within the 12 month period, as permitted by law.
        </p>
        <p>
          5. Complaint. You may complain to SafeStart and to the Secretary of
          the Department of Health and Human Services if you believe that your
          privacy rights have been violated.
        </p>
        <p>
          If you have any questions about this Privacy Policy, please contact
          us at contact@safestartmedical.com.
        </p>
        <p className="text-sm">Last Modified: March 12, 2015</p>
      </div>
    </section>
  );
}
