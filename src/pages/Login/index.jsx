import styles from './Login.module.css'

import logo from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

export default function Login() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="Logo da Nave" />
        <form className={styles.inputGroup}>
          <div className={styles.inputItem}>
            <Input type="text" placeholder="E-mail" id="txtEmail" />
          </div>
          <div className={styles.inputItem}>
            <Input type="password" placeholder="Senha" id="txtSenha" />
          </div>
          <Button text="Entrar" />
        </form>
      </div>
    </div>
  )
}