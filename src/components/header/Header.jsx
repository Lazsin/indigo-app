import './Header.css'
import logo from '../../assets/images/logo.png'
import { useState } from 'react';



export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* HEADER */}
      <section className="header flex justify-between mx-auto  items-center my-3 bg-gray-100 rounded-full font-bold max-w-6xl w-full px-6 py-2">
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
    </>
  );
}
