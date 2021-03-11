import styles from './ModalFeedback.module.css'

import close from '../../assets/close.svg'

export default function ModalFeedback(props) {
  return (
    <div className={styles.overlay}>
      <main className={styles.modalFeedbackContainer}>
        <img src={close} alt="Fechar modal de Feedback"/>
        <span>{props.title}</span>
        <span>{props.description}</span>
      </main>
    </div>
  )
}