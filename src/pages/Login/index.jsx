import { useState } from 'react'
import { useHistory } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'

import api from '../../services/api'

import styles from './Login.module.css'
import logo from '../../assets/logo.svg'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const history = useHistory()

  const data = {
    email, password
  }

  async function handleLogin(event) {
    event.preventDefault()

    try {
      await api.post('/users/login', data)
      .then(response => {
        localStorage.setItem('token', `Bearer ${response.data.token}`)
      })

      history.push('/ListNavers')

    } catch (error) {
      alert('Falha ao realizar login: ', error)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <img src={logo} alt="Logo da Nave" />
        <form className={styles.inputGroup}>
          <div className={styles.inputItem}>
            <Input
              type="text"
              placeholder="E-mail"
              id="txtEmail"
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.inputItem}>
            <Input
              type="password"
              placeholder="Senha"
              id="txtSenha"
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <Button type="submit" text="Entrar" onClick={handleLogin} />
        </form>
      </div>
    </div>
  )
}