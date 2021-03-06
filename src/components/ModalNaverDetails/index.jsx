import styles from './ModalNaverDetails.module.css'

import Actions from '../Actions'

import img from '../../assets/IMG_9945.jpg'
import close from '../../assets/close.svg'

export default function ModalNaverDetails() {
  return (
    <div className={styles.overlay}>
      <main className={styles.naverDetailsContainer}>
        <div className={styles.naverPhoto}>
          <img src={img} alt="Foto do Naver" />
        </div>
        <div className={styles.naverDetails}>
          <img src={close} alt="Fechar modal de detalhes do usuário"/>
            <span className={styles.naverName}>Juliano Reis</span>
            <span className={styles.naverRole}>Front-end Developer</span>
          <dl>
            <dt>Idade</dt>
            <dd>22 anos</dd>
            <dt>Tempo de empresa</dt>
            <dd>2 anos</dd>
            <dt>Projetos que participou</dt>
            <dd>Lorem ipsum</dd>
          </dl>
          <Actions />
        </div>
      </main>
    </div>
  )
}