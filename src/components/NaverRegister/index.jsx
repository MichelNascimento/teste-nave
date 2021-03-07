import Input from '../../components/Input'
import Button from '../../components/Button'

import styles from './NaverRegister.module.css'

import back from '../../assets/back.svg'

export default function NaverRegister() {
  return (
    <div className={styles.container}>
      <div className={styles.NaverRegisterContainer}>
        <div className={styles.title}>
          <img src={back} alt="Voltar" />
          <span>Adicionar Naver</span>
        </div>
        <div className={styles.form}>
          <div>
            <Input id="txtNome" placeholder="Nome" type="text" />
            <Input id="txtCargo" placeholder="Cargo" type="text" />
            <Input id="txtIdade" placeholder="Idade" type="text" />
          </div>
          <div>
            <Input id="txtTempo" placeholder="Tempo de empresa" type="text" />
            <Input id="txtProjetos" placeholder="Projetos que participou" type="text" />
            <Input id="txtUrl" placeholder="URL da foto do Naver" type="text" />
            <Button text="Salvar" />
          </div>
        </div>
      </div>
    </div>
  )
}