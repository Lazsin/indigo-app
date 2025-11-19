import './Footer.css'
import logo from '../../assets/images/logo.png'
import facebook from '../../assets/images/footer/facebook.svg'
import fb_mess from '../../assets/images/footer/facebook-messenger.svg'
import instagramm from '../../assets/images/footer/instagram.svg'
import tiktok from '../../assets/images/footer/tiktok.svg'
import whatsapp from '../../assets/images/footer/whatsapp.svg'




export default function Footer() {
  return (
    <div className="footer grid max-w-[1052px] mx-auto bg-gray-100 rounded-t-[30px] mt-5 px-6 pb-0 w-full">

      {/* NAV */}
      <nav className="flex justify-between items-center my-4 px-4 py-3 bg-white shadow-sm font-bold rounded-xl max-md:flex-col gap-4">
        <img className="w-40" src={logo} alt="logo" />

        <div className=" md:flex hidden gap-8 text-[#7d65d3] max-md:flex-wrap max-md:justify-center">
          <p className="hover:text-[#fe169e] cursor-pointer">Cennik</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Media o nas</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Opinie</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Olimpiady</p>
        </div>

        <button className="standart  hidden md:block bg-[#fe169e] text-white rounded-full px-6 py-2">
          Zaloguj sie
        </button>
      </nav>

      {/* CONTACT BLOCK */}
      <div className="flex flex-wrap justify-center md:justify-between gap-4 my-4 bg-white p-6 rounded-xl">

        {/* BLOCK TEMPLATE repeated */}
        <div className="grid items-center justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4 text-center">
          <h4 className="text-[#7d65d3] font-bold">Media</h4>
          <div className="flex gap-4">
            <img className="icon h-8 cursor-pointer hover:scale-110 transition" src={instagramm} alt="Instagram" />
            <img className="icon h-8 cursor-pointer hover:scale-110 transition" src={facebook} alt="Facebook" />
            <img className="icon h-8 cursor-pointer hover:scale-110 transition" src={tiktok} alt="TikTok" />
          </div>
        </div>

        <div className="grid items-center justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4 text-center">
          <h4 className="text-[#7d65d3] font-bold">Email</h4>
          <label className="text-[#ff15a0]">biuro@indigomental.pl</label>
        </div>

        <div className="grid items-center justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4 text-center">
          <h4 className="text-[#7d65d3] font-bold">Połączenie</h4>
          <div className="flex gap-4">
            <img className="icon  h-8 cursor-pointer hover:scale-110 transition" src={whatsapp} alt="WhatsApp" />
            <img className="icon  h-8 cursor-pointer hover:scale-110 transition" src={fb_mess} alt="Messenger" />
          </div>
        </div>

        <div className="grid justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4">
          <h4 className="text-[#7d65d3] font-bold">Dział rekrutacji uczniów</h4>
          <p className="text-[#7d65d3]">8:00 - 19:00</p>
          <label className="text-[#ff15a0]">+48 531 041 100</label>
        </div>

        <div className="grid justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4">
          <h4 className="text-[#7d65d3] font-bold">Dział administr.-finansowy</h4>
          <p className="text-[#7d65d3]">9:00 - 17:00</p>
          <label className="text-[#ff15a0]">+48 573 569 807</label>
        </div>

        <div className="grid justify-items-center bg-[#f6f4fe] h-28 min-w-[260px] rounded-xl px-4">
          <h4 className="text-[#7d65d3] font-bold">Dział jakości</h4>
          <p className="text-[#7d65d3]">9:00 - 17:00</p>
          <label className="text-[#ff15a0]">+48 792 683 552</label>
        </div>
      </div>

      {/* MORE INFO */}
      <div className="grid justify-items-center bg-white rounded-xl my-4 px-6 py-4 gap-4 text-center">
        <p className="font-bold text-[#7d65d3]">
          Indigo Mental Club Polska Sp. z o.o.
        </p>

        <p className="text-[#7d65d3]">
          <span className="font-bold">NIP:</span> 5272982422,{" "}
          <span className="font-bold">Address:</span> Al. Jerozolimskie 123A 02-017 Warszawa.
        </p>

        <p className="text-[#7d65d3] text-sm leading-tight">
          Regulamin, Polityka prywatności, Standardy Ochrony Małoletnich,
          Klauzula informacyjna RODO, Oświadczenie o odstąpieniu od umowy.
          <br />
          Spółka wpisana do KRS 0000940436, REGION 520790293,
          kapitał zakładowy 5.000 zł.
        </p>
      </div>

    </div>
  );
}