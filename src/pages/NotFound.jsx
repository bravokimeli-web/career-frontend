import { useNavigate } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  const navigate = useNavigate()

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.code}>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for might have been removed or is temporarily unavailable.</p>
        
        <div className={styles.actions}>
          <button className={styles.btnPrimary} onClick={() => navigate('/')}>
            Back to Home
          </button>
          <button className={styles.btnSecondary} onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>

        <div className={styles.suggestions}>
          <h3>Popular Pages:</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/app/browse">Browse Opportunities</a></li>
            <li><a href="/app/dashboard">Dashboard</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}
