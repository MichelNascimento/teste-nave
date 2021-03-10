import { Link } from 'react-router-dom'

import styles from './Actions.module.css'

import edit from '../../assets/edit.svg'
import trash from '../../assets/delete.svg'

export default function Actions() {
  return (
    <div className={styles.actions}>
      <Link to="/ModalNaverDelete">
        <img src={trash} alt="Excluir Naver"/>
      </Link>
      <Link to="/NaverRegister">
        <img src={edit} alt="Editar Naver"/>
      </Link>
    </div>
  )
}