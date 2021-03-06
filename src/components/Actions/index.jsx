import styles from './Actions.module.css'

import edit from '../../assets/edit.svg'
import trash from '../../assets/delete.svg'

export default function Actions() {
  return (
    <div className={styles.actions}>
      <img src={trash} alt="Excluir Naver" />
      <img src={edit} alt="Editar Naver" />
    </div>
  )
}