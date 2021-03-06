import styles from './CardNaver.module.css'

import Actions from '../Actions'

export default function CardNaver() {
  return (
    <div className={styles.container}>
      <img src="" alt="Foto do Naver" />
      <span className={styles.nameNaver}>Juliano Reis</span>
      <span className={styles.roleNaver}>Front-end Developer</span>
      <Actions />
    </div>
  )
}