import './Footer.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/footer/facebook.svg'
import fb_mess from '../../assets/images/footer/facebook-messenger.svg'
import instagramm from '../../assets/images/footer/instagram.svg'
import tiktok from '../../assets/images/footer/tiktok.svg'
import whatsapp from '../../assets/images/footer/whatsapp.svg'

export default function Footer() {
  return (
    <footer className='footer'>
      <nav className='nav-footer'>
        <img className='logo' src={logo} alt='logo'></img>
        <div className='nav-text-footer'>
          <p>Cennik</p>
          <p>Media o nas</p>
          <p>Opinie</p>
          <p>Olimpiady</p>
        </div>
        <button>Zaloguj sie</button>
      </nav>
      <div className='contact-footer'>
        <div className='media-footer'>
          <h4>Media</h4>
          <div className='icons'>
            <img className='icon' src={instagramm} alt='Instagramm' />
            <img className='icon' src={facebook} alt='Facebook' />
            <img className='icon' src={tiktok} alt='TikTok' />
          </div>
          
        </div>
        <div className='media-footer'>
          <h4>Email</h4>
          <label>biuro@indigomental.pl</label>
        </div>
        <div className='media-footer'>
          <h4>Polaczenie</h4>
          <div className='icons'>
            <img className='icon' src={whatsapp} alt='WhatsApp' />
            <img className='icon' src={fb_mess} alt='Messenger' />
          </div>
          
        </div>
        <div className='media-footer' >
          <h4>Dział rekrutacji uczniów</h4>
          <p>8:00 - 19:00</p>
          <label>+48 531 041 100</label>
        </div>
        <div className='media-footer'>
          <h4>Dział administracyjno-finansowy</h4>
          <p>9:00 - 17:00</p>
          <label>+48 573 569 807</label>
        </div>
        <div className='media-footer'>
          <h4>Dział jakości</h4>
          <p>9:00 - 17:00</p>
          <label>+48 792 683 552</label>
        </div>
      </div>
      <div className='more-info-footer'>
        <div className='more-info-text-footer'>
          <p>Indigo Mental Club Polska Sp. z o.o.</p>
          <p><span>NIP:</span> 5272982422, <span>Address:</span> Al. Jerozolimskie 123A 02-017 Warszawa.</p>
        </div>
        <div className='more-info-text-footer'>
          <p>Regulamin, Polityka prywatności, Standardy Ochrony Małoletnich, Klauzula informacyjna RODO, Oświadczenie o odstąpieniu<span> od umowy. Spółka wpisana do rejestru przedsiębiorców prowadzony przez Sąd Rejonowy dla m. st. Warszawy, XIII Wydział Gospodarczy Krajowego Rejestru Sądowego, pod numerem KRS 0000940436, REGION 520790293, kapitał zakładowy w wysokości 5.000 zł </span></p>
        </div>
      </div>
    </footer>
  )
}