import styles from './Legal.module.css'

export default function Cookies() {
  return (
    <div className={styles.content}>
      <h1>Cookie Policy</h1>
      <p className={styles.lastUpdated}>Last updated: February 25, 2026</p>

      <section>
        <h2>1. What Are Cookies?</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work, or work more efficiently.</p>
      </section>

      <section>
        <h2>2. Types of Cookies We Use</h2>
        <p><strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly, including authentication and security features.</p>
        <p><strong>Preference Cookies:</strong> These cookies remember your preferences such as theme (light/dark mode) and language settings.</p>
        <p><strong>Analytics Cookies:</strong> We may use cookies to understand how you use our platform to improve our services.</p>
      </section>

      <section>
        <h2>3. Specific Cookies We Use</h2>
        <ul>
          <li><strong>careerstart_token:</strong> Stores your authentication token for session management</li>
          <li><strong>ias-theme:</strong> Stores your theme preference (light or dark mode)</li>
          <li><strong>Session cookies:</strong> Temporary cookies used during your browsing session</li>
        </ul>
      </section>

      <section>
        <h2>4. Managing Cookies</h2>
        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. However, if you do this, you may have to manually adjust some preferences every time you visit our site and some services and functionalities may not work.</p>
      </section>

      <section>
        <h2>5. Third-Party Cookies</h2>
        <p>Some cookies may be placed by third-party service providers such as:</p>
        <ul>
          <li>Payment processors (Paystack)</li>
          <li>File storage providers (Cloudinary)</li>
          <li>Authentication providers (Google OAuth)</li>
        </ul>
      </section>

      <section>
        <h2>6. Your Choices</h2>
        <p>Most web browsers allow you to refuse cookies or alert you when cookies are being sent. For information about these features, please check your browser's help menu or visit:</p>
        <ul>
          <li>Chrome: <code>chrome://settings/cookies</code></li>
          <li>Firefox: Preferences → Privacy & Security</li>
          <li>Safari: Preferences → Privacy</li>
          <li>Edge: Settings → Privacy, search, and services</li>
        </ul>
      </section>

      <section>
        <h2>7. Contact Us</h2>
        <p>If you have questions about this Cookie Policy, please contact us at:</p>
        <p><strong>Email:</strong> opportunity.app@gmail.com</p>
      </section>
    </div>
  )
}
