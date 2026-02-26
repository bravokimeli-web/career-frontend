import { useState, useEffect } from 'react'
import { messageService } from '../services/api'
import styles from './Applications.module.css'

export default function Messages() {
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    messageService.getAll()
      .then(res => setList(Array.isArray(res.data) ? res.data : []))
      .catch(() => setList([]))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className={styles.content}>
      <h2 className={styles.title}>Messages</h2>
      {loading ? (
        <p className={styles.msg}>Loading…</p>
      ) : list.length === 0 ? (
        <p className={styles.msg}>No messages yet. When recruiters contact you, they’ll appear here.</p>
      ) : (
        <div className={styles.tableWrap}>
          <table className={`${styles.table} ${styles.messagesTable}`}> 
            <thead>
              <tr>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {list.map(msg => (
                <tr key={msg._id} className={!msg.read ? styles.unread : ''}>
                  <td><small className={styles.timestamp}>{new Date(msg.sentAt || msg.createdAt).toLocaleString()}</small></td>
                  <td>{msg.subject}</td>
                  <td>{msg.content}</td>
                  <td>
                    {!msg.read && (
                      <button
                        type="button"
                        className={styles.btnSecondary}
                        onClick={async () => {
                          try {
                            await messageService.markRead(msg._id)
                            setList(lst => lst.map(m => m._id === msg._id ? { ...m, read: true } : m))
                          } catch {}
                        }}
                      >Mark as read</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
