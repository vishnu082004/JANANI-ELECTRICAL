import PageBanner from '../components/Hero.jsx'
import { contactEmail } from '../content/company.js'

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" image="3903-scaled.webp" />
      <section className="section-space privacy-section">
        <div className="container privacy-content">
          <p className="privacy-updated">Last updated: September 30, 2026</p>
          <h2>Who we are</h2>
          <p>Janani Electricals operates this website at <a href="https://jananielectricals.com/">jananielectricals.com</a>. This policy explains how information may be handled when you visit the website or contact us.</p>

          <h2>Comments</h2>
          <p>This website does not currently provide public comments or visitor accounts, so it does not collect comment or account profile details through those features.</p>

          <h2>Media</h2>
          <p>Visitors cannot upload images to this website. Images displayed here are provided by Janani Electricals.</p>

          <h2>Cookies</h2>
          <p>This website does not offer comment or login features that set the related convenience cookies described on some websites. Embedded third-party services may use cookies or similar technologies under their own policies.</p>

          <h2>Embedded content from other websites</h2>
          <p>The Contact page includes an embedded Google Maps location. When you load it, Google may collect information and process it in the same way as when visiting Google services directly.</p>

          <h2>Who we share your data with</h2>
          <p>If you submit a contact or project enquiry, the name, phone number, email address, and message you provide are sent through FormSubmit to our sales inbox at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. FormSubmit processes the submission to deliver it. The embedded map is provided by Google.</p>

          <h2>How long we retain your data</h2>
          <p>Enquiry details may be retained in our email records for as long as needed to respond, manage follow-up, and maintain business records.</p>

          <h2>What rights you have over your data</h2>
          <p>You may contact us to ask about the personal information you have provided or request that we correct or delete it. We may need to retain information where required for legitimate business or legal purposes.</p>

          <h2>Where your data is sent</h2>
          <p>Contact form submissions are sent to FormSubmit for delivery to Janani Electricals. Information may also be processed by Google when the embedded map is loaded.</p>

          <h2>Questions</h2>
          <p>For privacy questions, contact <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
        </div>
      </section>
    </>
  )
}
