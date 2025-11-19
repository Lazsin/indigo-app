import './GeneralBanner.css'
import photo from '../../../assets/images/GeneralBanner.png'
import { useModal } from '../../modal/ModalContext';

export default function GeneralBanner() {
  const {openModal}=useModal();
  return (
    <section className="generalbanner max-w-6xl flex flex-col-reverse md:flex-row justify-between items-center my-5 bg-gray-100 rounded-3xl p-2 md:p-6 gap-6">
      
      {/* TEXT */}
      <div className="flex-col justify-center max-w-[600px] md:text-left text-center space-y-5 md:space-y-6">
        
        <div className="bg-[#7d65d3] hidden md:block text-[#fff0c2] rounded-2xl px-6 py-2 font-bold w-fit">
          Klub Arytmetyki Mentalnej
        </div>

        <h1 className="text-[#7d65d3] text-4xl md:text-6xl font-bold leading-tight">
          Arytmetyka Mentalna
        </h1>

        <h2 className="text-[#fff0c2]  bg-[#7d65d3] text-xl md:text-4xl font-bold rounded-lg px-3 py-1 w-fit">
          dla dzieci od 5 do 14 lat
        </h2>

        <p className="text-[#7d65d3]">
          Nauka błyskawicznego liczenia w wyobraźni, ekspresowego czytania oraz szybkiego
          zapamiętywania, rozwój myślenia logicznego i wyobrażeniowego, zwiększenie
          koncentracji i pewności siebie u dziecka
        </p>

        <div className="flex flex-col lg:flex-row gap-3">
          <button
          onClick={openModal}
          className="standart bg-[#fe169e] hover:bg-[#ff4ab8] w-full text-white rounded-xl font-bold px-5 py-2">
            Sprobuj za darmo
          </button>
          <button className=" bg-[#7d65d3] hover:bg-[#8c79de] hover:scale-105 w-full text-white rounded-xl font-bold px-5 py-2">
            Spersonalizuj nauke dziecka
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <img
        src={photo}
        alt="General Banner"
        className="w-full md:max-w-[380px] object-cover rounded-3xl bg-white"
      />
      

    </section>
  );
}