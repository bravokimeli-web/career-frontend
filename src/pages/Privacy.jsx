import styles from './Legal.module.css'

export default function Privacy() {
  return (
    <div className={styles.content}>
      <h1>Privacy Policy</h1>
      <p className={styles.lastUpdated}>Last updated: February 25, 2026</p>

      <section>
        <h2>Introduction</h2>
        <p>CareerStart ("we," "our," or "us") operates the CareerStart platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.</p>
      </section>

      <section>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as:</p>
        <ul>
          <li>Name, email address, and contact information</li>
          <li>Educational background and work experience</li>
          <li>Resume and cover letter documents</li>
          <li>Application and profile information</li>
          <li>Payment information (processed securely via Paystack)</li>
        </ul>
        <p>We also collect information automatically, including:</p>
        <ul>
          <li>Browser type and operating system</li>
          <li>Pages viewed and time spent on the platform</li>
          <li>IP address and device information</li>
        </ul>
      </section>

      <section>
        <h2>2. How We Use Your Information</h2>
        <p>We use your information to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Process your applications and payments</li>
          <li>Send transactional emails and notifications</li>
          <li>Verify your identity and prevent fraud</li>
          <li>Comply with legal obligations</li>
        </ul>
      </section>

      <section>
        <h2>3. Information Sharing</h2>
        <p>We share your information with:</p>
        <ul>
          <li>Employers when you apply for opportunities they've posted</li>
          <li>Payment processors (Paystack) for transaction processing</li>
          <li>Email service providers (Resend) for sending communications</li>
          <li>Cloud storage providers for file storage (Cloudinary)</li>
        </ul>
        <p>We do not sell your personal information to third parties.</p>
      </section>

      <section>
        <h2>4. Data Security</h2>
        <p>We implement industry-standard security measures including encryption, secure authentication, and access controls to protect your personal information.</p>
      </section>

      <section>
        <h2>5. Your Rights</h2>
        <p>You have the right to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Request correction or deletion of your data</li>
          <li>Opt-out of marketing communications</li>
          <li>Request a copy of your information</li>
        </ul>
      </section>

      <section>
        <h2>6. Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p><strong>Email:</strong> opportunity.app@gmail.com</p>
      </section>
    </div>
  )
}
