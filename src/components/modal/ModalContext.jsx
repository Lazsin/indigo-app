import { createContext, useContext, useState } from "react";
import Modal from "./Modal";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  // состояние формы
  const [form, setForm] = useState({
    email: "",
    parent: "",
    child: "",
    phoneCode: "+48",
    phone: "",
    age: 9,
    days: [],
    mode: "online",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleCheckbox = (name, value) => {
    setForm((prev) => {
      const arr = prev[name];
      return arr.includes(value)
        ? { ...prev, [name]: arr.filter((v) => v !== value) }
        : { ...prev, [name]: [...arr, value] };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", form);
    alert("Formularz wysłany ✅");
    setIsOpen(false);
  };
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      <Modal isOpen={isOpen} onClose={closeModal}>
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#ff18a0]">
          Lekcja pokazowa z Arytmetyki Mentalnej
        </h1>

        <h2 className="text-md md:text-lg font-semibold mb-6 text-center text-[#7d65d3]">
          Oferujemy bezpłatne lekcje pokazowe (online lub stacjonarnie w Warszawie).  
          Grupy dobieramy wiekowo.
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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

          {/* Imię rodzica */}
          <input
            type="text"
            name="parent"
            placeholder="Imię rodzica"
            value={form.parent}
            onChange={handleChange}
            className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
            required
          />

          {/* Imię dziecka */}
          <input
            type="text"
            name="child"
            placeholder="Imię dziecka"
            value={form.child}
            onChange={handleChange}
            className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
            required
          />

          {/* Слайдер возраста */}
          <div>
            <label className="block font-medium text-[#7d65d3] text-2xl">
              Wiek dziecka: <span className="text-[#7d65d3]">{form.age}</span> lat
            </label>
            <input
              type="range"
              name="age"
              min="5"
              max="14"
              value={form.age}
              onChange={handleChange}
              className="w-full accent-[#7d65d3]"
            />
            <div className="flex justify-between">
               <label className="text-[#7d65d3] font-bold">5</label>
               <label className="text-[#7d65d3] font-bold">14</label>
            </div>
          </div>

          {/* Numer telefonu */}
          <div className="flex gap-2">
            <select
              name="phoneCode"
              value={form.phoneCode}
              onChange={handleChange}
              className="border-3 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
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
              placeholder="123 456 789"
              value={form.phone}
              onChange={handleChange}
              className="border-2 rounded-lg px-5 py-4 text-[#7d65d3] font-bold"
              required
            />
          </div>

          

          {/* Дни недели */}
          <div>
            <p className="font-medium mb-2 text-2xl text-[#7d65d3]">Preferowane dni zajęć:</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1">
              {["Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"].map(
                (day) => (
                  <label key={day} className="flex items-center gap-2 cursor-pointer select-none font-bold text-[#7d65d3]">
                    <input
                      type="checkbox"
                      className="e w-6 h-6 border-2 border-pink-500 rounded checked:bg-pink-500 checked:border-pink-500 focus:outline-none checked:"
                      checked={form.days.includes(day)}
                      onChange={() => handleCheckbox("days", day)}
                    />
                    <span>{day}</span>
                  </label>
                )
              )}
            </div>
          </div>

          {/* Формат */}
          <div>
            <p className="font-medium mb-1 text-2xl text-[#7d65d3]">Forma zajęć:</p>
            <div className="flex gap-4">
              {["online", "offline"].map((mode) => (
                <label key={mode} className="flex items-center gap-2 font-bold text-[#7d65d3] select-none">
                  <input
                    type="radio"
                    name="mode"
                    className="w-5 h-5 border-[#7d65d3] "
                    value={mode}
                    checked={form.mode === mode}
                    onChange={handleChange}
                  />
                  <span className="capitalize">{mode}</span>
                </label>
              ))}
            </div>
            {form.mode === "offline" && (
              <div className="mt-4">
                <label htmlFor="offlineLocation" className="block mb-2 text-[#7d65d3] font-semibold">Adres zajęć offline:</label>
                <input
                  id="offlineLocation"
                  name="offlineLocation"
                  type="text"
                  className="border border-[#7d65d3] text-[#7d65d3] rounded px-3 py-2 w-full max-w-md"
                  value={form.offlineLocation || ""}
                  onChange={handleChange}
                  placeholder="Wpisz adres"
                />
              </div>)}
          </div>

          <button
            type="submit"
            className="bg-[#fe169e] hover:bg-[#ff4ab8] text-white font-bold rounded-lg py-2"
          >
            Wyślij
          </button>
        </form>
      </Modal>
    </ModalContext.Provider>
  );
}

export function useModal() {
  return useContext(ModalContext);
}

