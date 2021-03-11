import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Button from '../Button'
import CardNaver from '../CardNaver'

import api from '../../services/api'
import styles from './ListNavers.module.css'

export default function ListNavers() {
  const [userInfo, setUserInfo] = useState([])

  const token = localStorage.getItem('token')

  async function loadNavers() {
    try {
      await api.get('/navers', {
        headers: {
          Authorization: token
        }
      }).then(response => {
        setUserInfo(response.data)
      })

    } catch (e) {
      alert('Erro ao carregar Navers: ', e)
    }
  }

  useEffect(() => {
    loadNavers()
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.ListNaversContainer}>
        <div className={styles.title}>
          <h1>Navers</h1>
          <Link to="/NaverRegister" text="Adicionar Naver">
            Adicionar naver
          </Link>
        </div>
        <div className={styles.listNavers}>
          {userInfo.map((user, index) => (
            <CardNaver
              key={index}
              urlPhoto={user.url}
              name={user.name}
              jobRole={user.job_role}
            />
          ))}
        </div>
      </div>
    </div>
  )
}