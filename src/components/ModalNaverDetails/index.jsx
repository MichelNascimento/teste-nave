import { useEffect } from 'react'

import styles from './ModalNaverDetails.module.css'

import Actions from '../Actions'
import api from '../../services/api'

import close from '../../assets/close.svg'

export default function ModalNaverDetails(props) {

  const token = localStorage.getItem('token')

  async function loadNaver() {
    await api.get(`/navers/${props.id}`, {
      headers: {
        Authorization: token
      }
    })
  }

  useEffect(() => {
    loadNaver()
  }, [])

  return (
    <div className={styles.overlay}>
      <main className={styles.naverDetailsContainer}>
        <div className={styles.naverPhoto}>
          <img src={props.url} alt="Foto do Naver" />
        </div>
        <div className={styles.naverDetails}>
          <img src={close} alt="Fechar modal de detalhes do Naver" />
          <span className={styles.naverName}>{props.name}</span>
          <span className={styles.naverRole}>{props.job_role}</span>
          <dl>
            <dt>Idade</dt>
            <dd>{props.birthdate}</dd>
            <dt>Tempo de empresa</dt>
            <dd>{props.admission_date}</dd>
            <dt>Projetos que participou</dt>
            <dd>{props.project}</dd>
          </dl>
          <Actions />
        </div>
      </main>
    </div>
  )
}