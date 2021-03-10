import styles from './CardNaver.module.css'

import Actions from '../Actions'
import ModalNaverDetails from '../ModalNaverDetails'

export default function CardNaver(props) {
  return (
    <div className={styles.container} onClick={() => <ModalNaverDetails id={props.id} />}>
      <img src={props.urlPhoto} alt="Foto do Naver" />
      <span className={styles.nameNaver}>{props.name}</span>
      <span className={styles.roleNaver}>{props.jobRole}</span>
      <Actions />
    </div>
  )
} 