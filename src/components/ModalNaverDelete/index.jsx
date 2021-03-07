import styles from './ModalNaverDelete.module.css'

export default function ModalNaverDelete() {
  return (
    <div className={styles.overlay}>
      <main className={styles.naverDeleteContainer}>
        <span>Excluir Naver</span>
        <span>Tem certeza que deseja excluir este Naver?</span>
        <div className={styles.options}>
          <button>Cancelar</button>
          <button>Excluir</button>
        </div>
      </main>
    </div>
  )
}