import './Header.css'
import logo from '../../assets/images/logo.png'


export default function Header() {
  return (
    <section className='header'>
      <img className='logo' src={logo} alt='logo'></img>
      <p>Media o nas</p>
      <p>Kontakt</p>
      <p>Sklep</p>
      <p>Sklepik (dla dzieci)</p>
      <p>LangLion</p>
      <button>Zaloguj sie</button>
    </section>
  )
}
