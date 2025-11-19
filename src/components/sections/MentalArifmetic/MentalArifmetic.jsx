import mental1 from '../../../assets/images/mental/mental1.png'
import mental2 from '../../../assets/images/mental/mental2.png'
import mental3 from '../../../assets/images/mental/mental3.png'
import mental4 from '../../../assets/images/mental/mental4.png'
import mental5 from '../../../assets/images/mental/mental5.png'
import mental6 from '../../../assets/images/mental/mental6.png'
import { useModal } from '../../modal/ModalContext'


export default function MentalArifmetic() {
  const {openModal}=useModal();
  return (
    <section className="text-center px-4 py-10 max-w-6xl mx-auto ">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Co poprawi{" "}
        <span className="text-[#fff0c2]">Twoje dziecko</span>{" "}
        dzięki arytmetyce mentalnej?
      </h1>

      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { img: mental1, title: "Pewność siebie", text: "Wzmocni pewność siebie poprzez rozwijanie umiejętności miękkich oraz liczne sukcesy" },
          { img: mental2, title: "Myślenie logiczne", text: "Udoskonali logiczne i kreatywne myślenie przez rozwijanie obu półkul mózgu jednocześnie" },
          { img: mental3, title: "Naukę języków", text: "Zdecydowanie szybciej będzie przyswajać języki obce" },
          { img: mental4, title: "Umiejętność liczenia", text: "Zapomni o problemach z matematyką dzięki codziennemu liczeniu w wyobraźni" },
          { img: mental5, title: "Wyniki szkolne", text: "Poprawi oceny oraz pozna techniki szybkiego i efektywnego uczenia się" },
          { img: mental6, title: "Koncentrację", text: "Nauczy się koncentracji dzięki ćwiczeniom wydłużającym czas skupienia" },
        ].map(({ img, title, text }) => (
          <div key={title} className="w-full sm:w-85 bg-white rounded-2xl overflow-hidden">
            <img src={img} alt={title} className="rounded-t-2xl w-full" />
            <div className="p-4 text-left">
              <h2 className="text-[#fff0c2] w-full text-center md:text-left bg-[#7d65d3] font-bold rounded-lg px-3 py-1 text-xl inline-block">
                {title}
              </h2>
              <p className="text-[#7d65d3] mt-2 text-md">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button 
        onClick={openModal}
        className="standart px-6 py-3 w-full md:max-w-1/3 bg-[#ff15a0] text-white font-bold rounded-xl hover:scale-105 duration-200">
          Sprobuj za darmo
        </button>
        <button className="another px-6 py-3 w-full md:max-w-1/3 bg-white text-[#7d65d3] font-bold rounded-xl hover:scale-105 duration-200">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
