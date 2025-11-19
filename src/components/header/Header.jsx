import logo from '../../assets/images/logo.png'
import { useState } from 'react';



export default function Header() {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

    const [form, setForm] = useState({
    email: "",
    name: "",
    phoneCode: "+48",
    phone: "",
  });
    const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
    const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Formularz wysłany ✅");
    setIsOpen(false);
  };

  return (
    <>
      {/* HEADER */}
      <section id="header" className="header flex justify-between mx-auto items-center my-3 bg-gray-100 rounded-full font-bold max-w-[1052px] w-full px-6 py-2">
        <img src={logo} alt="logo" className="w-28 md:w-24" />
        
        {/* Desktop menu */}
        <nav className="hidden md:flex gap-6 px-5 text-center text-[#7d65d3]">
          <p className="hover:text-[#fe169e] cursor-pointer">Media o nas</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Kontakt</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Sklep</p>
          <p className="hover:text-[#fe169e] cursor-pointer">Sklepik (dla dzieci)</p>
          <p className="hover:text-[#fe169e] cursor-pointer">LangLion</p>
        </nav>

        <button className="standart hidden md:block bg-[#fe169e] text-white rounded-full px-6 py-2">
          Zaloguj sie
        </button>

        {/* Burger */}
        <div
          className="md:hidden text-[#7d65d3] text-3xl cursor-pointer"
          onClick={() => setOpen(true)}
        >
          ☰
        </div>
      </section>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* SIDEBAR MENU */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-xl p-6 flex flex-col gap-6 text-[#7d65d3] text-lg font-bold transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <p
          className="self-end text-3xl cursor-pointer hover:text-[#fe169e]"
          onClick={() => setOpen(false)}
        >
          ✕
        </p>
        <p className="hover:text-[#fe169e] cursor-pointer">Media o nas</p>
        <p className="hover:text-[#fe169e] cursor-pointer">Kontakt</p>
        <p className="hover:text-[#fe169e] cursor-pointer">Sklep</p>
        <p className="hover:text-[#fe169e] cursor-pointer">Sklepik (dla dzieci)</p>
        <p className="hover:text-[#fe169e] cursor-pointer">LangLion</p>
        <button className="bg-[#fe169e] text-white rounded-full px-6 py-2 mt-4">
          Zaloguj sie
        </button>
      </aside>
        
        {/*Якорь*/}
      <div className="fixed left-4 bottom-4 z-50 flex">
        <button 
          onClick={() => (window.location.href = "#header")}
          className="cursor-pointer" >
            <svg
      role="presentation"
      width="50"
      height="50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="50"
        height="50"
        rx="50"
        fill="#ff169f"
        fillOpacity="0.9"
        stroke="none"
      ></rect>
      <path
        d="M14 28L25 18l10 10"
        stroke="#ffffff"
        strokeWidth="1"
        fill="none"
      ></path>
            </svg>
        </button>
      </div>

      {/* Модальное окно */}
      <div
        className={`fixed md:right-4 bottom-20 w-full z-50 md:max-w-1/2 lg:max-w-1/3 xl:max-w-1/4 bg-white p-6 rounded-2xl shadow-lg transform duration-300
          ${
            isOpen
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "translate-y-full opacity-0 pointer-events-none"
          }`}
        style={{ minWidth: "280px" }}
      >
        <h1 className="text-md md:text-2xl font-semibold mb-4 text-center text-[#7d65d3]">
          Masz pytania? Zostaw numer – oddzwonimy!
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Имя */}
          <input
            type="text"
            name="name"
            placeholder="Imię"
            value={form.name}
            onChange={handleChange}
            className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
            required
          />
          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
            required
          />
          {/* Телефон */}
          <div className="flex gap-2 justify-around">
            <select
              name="phoneCode"
              value={form.phoneCode}
              onChange={handleChange}
              className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
            >
              <option value="+48">🇵🇱 +48</option>
              <option value="+380">🇺🇦 +380</option>
              <option value="+49">🇩🇪 +49</option>
              <option value="+44">🇬🇧 +44</option>
              <option value="+33">🇫🇷 +33</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="000 000 000"
              value={form.phone}
              onChange={handleChange}
              className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-[#fe169e] hover:bg-[#ff4ab8] text-white font-bold rounded-lg py-2"
          >
            Tak, proszę o kontakt
          </button>
          <label className="text-[#fe169e] text-center text-xs block mt-2">
            *Zgadzam się na nagrywanie rozmowy związanej ze zgłoszeniem z formularza.
          </label>
          <label className="text-[#fe169e] text-center text-xs block">
            *Zapoznałem się i akceptuję treść Regulaminu, Polityki Prywatności, Rodo.
          </label>
        </form>
      </div>

      {/* Кнопка */}
      <div className="fixed right-4 bottom-4 z-50 flex bg-white rounded-full">
        <button onClick={() => setIsOpen(!isOpen)}>
          <svg
            fill="#ffffff"
            height="50px"
            width="50px"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="-256 -256 1024.00 1024.00"
            enableBackground="new 0 0 512 512"
            xmlSpace="preserve"
            stroke="#ffffff"
            strokeWidth="0.00512"
            transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#7d65d3"
              strokeWidth="51.2"
            >
              <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64 C512,28.6,483.4,0,448,0z"></path>
            </g>
            <g id="SVGRepo_iconCarrier">
              <path d="M448,0H64C28.6,0,0,28.6,0,64v256c0,35.4,28.6,64,64,64h128l-42.7,128l192-128H448c35.4,0,64-28.6,64-64V64 C512,28.6,483.4,0,448,0z"></path>
            </g>
          </svg>
        </button>
      </div>
    </>
  );
}
