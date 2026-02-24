import styles from './Legal.module.css'

export default function Terms() {
  return (
    <div className={styles.content}>
      <h1>Terms of Service</h1>
      <p className={styles.lastUpdated}>Last updated: February 25, 2026</p>

      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>By accessing and using CareerStart, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.</p>
      </section>

      <section>
        <h2>2. Use License</h2>
        <p>Permission is granted to temporarily download one copy of the materials from CareerStart for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:</p>
        <ul>
          <li>Modifying the materials</li>
          <li>Using the materials for any commercial purpose or for any public display</li>
          <li>Attempting to decompile or reverse engineer any software contained on the platform</li>
          <li>Removing any copyright or other proprietary notations from the materials</li>
          <li>Transferring the materials to another person or "mirroring" the materials on any other server</li>
        </ul>
      </section>

      <section>
        <h2>3. Disclaimer</h2>
        <p>The materials on CareerStart are provided on an 'as is' basis. CareerStart makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      </section>

      <section>
        <h2>4. Limitations</h2>
        <p>In no event shall CareerStart or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on CareerStart.</p>
      </section>

      <section>
        <h2>5. Accuracy of Materials</h2>
        <p>The materials appearing on CareerStart could include technical, typographical, or photographic errors. CareerStart does not warrant that any of the materials on the platform are accurate, complete, or current. CareerStart may make changes to the materials contained on the platform at any time without notice.</p>
      </section>

      <section>
        <h2>6. Links</h2>
        <p>CareerStart has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by CareerStart of the site. Use of any such linked website is at the user's own risk.</p>
      </section>

      <section>
        <h2>7. Modifications</h2>
        <p>CareerStart may revise these terms of service for the platform at any time without notice. By using this platform, you are agreeing to be bound by the then current version of these terms of service.</p>
      </section>

      <section>
        <h2>8. Governing Law</h2>
        <p>These terms and conditions are governed by and construed in accordance with the laws of Kenya, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.</p>
      </section>

      <section>
        <h2>9. Contact Us</h2>
        <p>If you have questions about these Terms of Service, please contact us at:</p>
        <p><strong>Email:</strong> opportunity.app@gmail.com</p>
      </section>
    </div>
  )
}
