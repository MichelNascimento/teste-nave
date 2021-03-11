import { Link } from 'react-router-dom'

import './Header.module.css'

import logo from '../../assets/logo.svg'

export default function Header() {

  function logout() {
    localStorage.clear()
  }

  return (
    <header>
      <img src={logo} alt="Logo da Nave.rs" />
      <Link to="/" onClick={logout}>
        Sair
      </Link>
    </header>
  )
}