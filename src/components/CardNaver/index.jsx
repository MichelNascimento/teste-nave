import styles from './CardNaver.module.css'

import Actions from '../Actions'
import { Link } from 'react-router-dom'

export default function CardNaver(props) {
  return (
    <Link to={`/ModalNaversDetails/${props.id}`} className={styles.container}>
      <img src={props.urlPhoto} alt="Foto do Naver" />
      <span className={styles.nameNaver}>{props.name}</span>
      <span className={styles.roleNaver}>{props.jobRole}</span>
      <Actions />
    </Link>
  )
}