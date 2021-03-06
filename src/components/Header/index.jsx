import './Header.module.css'

import logo from '../../assets/logo.svg'

export default function Header() {
  return (
    <header>
      <img src={logo} alt="Logo da Nave.rs" />
      <a href="#">Sair</a>
    </header>
  )
}