import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { applicationService } from '../services/api'
import styles from './Interview.module.css'

export default function Interview() {
  const { token } = useParams()
  const [interview, setInterview] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState({})
  const [recording, setRecording] = useState(false)
  const [mediaRecorder, setMediaRecorder] = useState(null)
  const [recordedChunks, setRecordedChunks] = useState([])
  const videoRef = useRef(null)
  const streamRef = useRef(null)

  useEffect(() => {
    loadInterview()
  }, [token])

  const loadInterview = async () => {
    try {
      const res = await applicationService.getInterview(token)
      setInterview(res.data)
      setAnswers(res.data.responses.reduce((acc, r, i) => ({ ...acc, [i]: r }), {}))
    } catch (err) {
      setError(err.response?.data?.message || 'Interview not found')
    } finally {
      setLoading(false)
    }
  }

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true
      })
      streamRef.current = stream
      videoRef.current.srcObject = stream

      const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
      setMediaRecorder(recorder)

      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          setRecordedChunks(prev => [...prev, event.data])
        }
      }

      recorder.start()
      setRecording(true)
    } catch (err) {
      alert('Could not access camera/microphone: ' + err.message)
    }
  }

  const stopRecording = () => {
    if (mediaRecorder) {
      mediaRecorder.stop()
      setRecording(false)
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop())
      }
    }
  }

  const submitAnswer = async () => {
    if (!answers[currentQuestion]?.trim()) {
      alert('Please provide an answer')
      return
    }

    try {
      const formData = new FormData()
      formData.append('questionIndex', currentQuestion)
      formData.append('answer', answers[currentQuestion])

      if (recordedChunks.length > 0) {
        const blob = new Blob(recordedChunks, { type: 'video/webm' })
        formData.append('video', blob, `response_q${currentQuestion}.webm`)
      }

      await applicationService.submitInterviewResponse(token, formData)
      setRecordedChunks([])

      if (currentQuestion < interview.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
      } else {
        // Complete interview
        await applicationService.completeInterview(token)
        alert('Interview completed! Thank you.')
        window.location.href = '/'
      }
    } catch (err) {
      alert('Failed to submit answer: ' + err.message)
    }
  }

  if (loading) return <div className={styles.container}><p>Loading interview...</p></div>
  if (error) return <div className={styles.container}><p className={styles.error}>{error}</p></div>
  if (!interview) return <div className={styles.container}><p>Interview not found</p></div>

  const question = interview.questions[currentQuestion]
  const hasAnswer = answers[currentQuestion]?.trim()

  return (
    <div className={styles.container}>
      <Helmet>
        <title>Interview | CareerStart</title>
        <meta name="description" content="Complete your application interview" />
      </Helmet>

      <div className={styles.header}>
        <h1>Application Interview</h1>
        <p><strong>Position:</strong> {interview.opportunity.title} at {interview.opportunity.company}</p>
        <p><strong>Applicant:</strong> {interview.applicant.name}</p>
      </div>

      <div className={styles.progress}>
        Question {currentQuestion + 1} of {interview.questions.length}
      </div>

      <div className={styles.question}>
        <h2>{question}</h2>
      </div>

      <div className={styles.recording}>
        <video ref={videoRef} autoPlay muted className={styles.video} />
        <div className={styles.controls}>
          {!recording ? (
            <button type="button" onClick={startRecording} className={styles.btnPrimary}>
              Start Recording
            </button>
          ) : (
            <button type="button" onClick={stopRecording} className={styles.btnSecondary}>
              Stop Recording
            </button>
          )}
        </div>
      </div>

      <div className={styles.answer}>
        <textarea
          value={answers[currentQuestion] || ''}
          onChange={(e) => setAnswers(prev => ({ ...prev, [currentQuestion]: e.target.value }))}
          placeholder="Type your answer here..."
          className={styles.textarea}
          rows={4}
        />
      </div>

      <div className={styles.actions}>
        {currentQuestion > 0 && (
          <button type="button" onClick={() => setCurrentQuestion(currentQuestion - 1)} className={styles.btnSecondary}>
            Previous
          </button>
        )}
        <button type="button" onClick={submitAnswer} disabled={!hasAnswer} className={styles.btnPrimary}>
          {currentQuestion < interview.questions.length - 1 ? 'Next Question' : 'Complete Interview'}
        </button>
      </div>
    </div>
  )
}