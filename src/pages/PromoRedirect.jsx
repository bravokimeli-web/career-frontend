import { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { dashboardService } from '../services/api'

export default function PromoRedirect() {
  const { code } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    // record the visit and then send user to home
    const sessionId = sessionStorage.getItem('careerstart_session_id') ||
                     (sessionStorage.setItem('careerstart_session_id', Math.random().toString(36).substr(2, 9)),
                      sessionStorage.getItem('careerstart_session_id'))
    const promo = code
    // store promo in session for future tracking
    sessionStorage.setItem('promoCode', promo)

    dashboardService.trackPageVisit({
      page: 'promo',
      sessionId,
      timeSpent: 0,
      promoCode: promo,
    }).catch(() => {})

    // navigate after a short delay to ensure track request is fired
    const t = setTimeout(() => {
      navigate(`/`, { replace: true })
    }, 200)
    return () => clearTimeout(t)
  }, [code, navigate])

  // simple message while redirecting
  return <div style={{ padding: 40, textAlign: 'center' }}>Redirecting…</div>
}
