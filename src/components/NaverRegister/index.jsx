import { useState } from 'react'
import { Link } from 'react-router-dom'

import Input from '../../components/Input'
import Button from '../../components/Button'

import styles from './NaverRegister.module.css'
import api from '../../services/api'

import back from '../../assets/back.svg'

export default function NaverRegister(props) {
  const [userInfo, setUserInfo] = useState({
    name: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
    url: '',
  })

  const token = localStorage.getItem('token')

  async function handleRegister() {
    try {
      await api.post('/navers', userInfo, {
        headers: {
          Authorization: token
        }
      }).then(response => console.log(response))

    } catch (e) {
      console.log(e)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.NaverRegisterContainer}>
        <div className={styles.title}>
          <Link to="/ListNavers">
            <img src={back} alt="Voltar" />
          </Link>
          <span>{props.action} Naver</span>
        </div>
        <div className={styles.form}>
          <div>
            <Input id="txtNome" placeholder="Nome" type="text" onChange={e => setUserInfo({ ...userInfo, name: e.target.value })} />
            <Input id="txtJobRole" placeholder="Cargo" type="text" onChange={e => setUserInfo({ ...userInfo, job_role: e.target.value })} />
            <Input id="txtAge" placeholder="Idade" type="text" onChange={e => setUserInfo({ ...userInfo, birthdate: e.target.value })} />
          </div>
          <div>
            <Input id="txtTime" placeholder="Tempo de empresa" type="text" onChange={e => setUserInfo({ ...userInfo, admission_date: e.target.value })} />
            <Input id="txtProjects" placeholder="Projetos que participou" type="text" onChange={e => setUserInfo({ ...userInfo, project: e.target.value })} />
            <Input id="txtUrl" placeholder="URL da foto do Naver" type="text" onChange={e => setUserInfo({ ...userInfo, url: e.target.value })} />
            <Button text="Salvar" onClick={handleRegister} />
          </div>
        </div>
      </div>
    </div>
  )
}