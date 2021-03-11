import { useHistory } from 'react-router-dom'

import styles from './ModalNaverDelete.module.css'

import api from '../../services/api'

export default function ModalNaverDelete(props) {

  const token = localStorage.getItem('token')

  const history = useHistory()

  async function handleDelete() {
    try {
      await api.delete(`/navers/${props.id}`, {
        headers: {
          Authorization: token
        }
      }).then(response => alert(`Usuário com id: ${props.id} excluído.`))

      history.push('/ListNavers')

    } catch (e) {
      console.error(e)
    }
  }

  function cancel() {
    history.push('/ListNavers')
  }

  return (
    <div className={styles.overlay}>
      <main className={styles.naverDeleteContainer}>
        <span>Excluir Naver</span>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <div className={styles.options}>
          <button onClick={cancel}>Cancelar</button>
          <button onClick={handleDelete}>Excluir</button>
        </div>
      </main>
    </div>
  )
}