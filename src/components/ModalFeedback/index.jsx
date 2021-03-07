import styles from './ModalFeedback.module.css'

import close from '../../assets/close.svg'

export default function ModalFeedback() {
  return (
    <div className={styles.overlay}>
      <main className={styles.modalFeedbackContainer}>
        <img src={close} alt="Fechar modal de Feedback"/>
        <span>Naver excluído</span>
        <span>Naver excluído com sucesso!</span>
      </main>
    </div>
  )
}