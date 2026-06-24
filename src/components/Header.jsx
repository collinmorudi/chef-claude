import chefLogo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="header">
      <img src={chefLogo} alt="Chef Claude Logo" className="logo" />
      <h1>Chef Claude</h1>
    </header>
  )
}