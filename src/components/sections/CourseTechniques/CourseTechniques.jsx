import photo134 from '../../../assets/images/course-techniques/134.svg';
import photoMind from '../../../assets/images/course-techniques/mind.png';
import photoKubiks from '../../../assets/images/course-techniques/kubiks.png';
import { useModal } from '../../modal/ModalContext';


export default function CourseTechniques() {
  const {openModal}=useModal();
  const techniques = [
    {
      img: photo134,
      titleH2: "Szybkiego",
      titleH3: "liczenia",
      points: ["Abacus", "Manualność", "Inteligencja", "Zdolności umysłowe"],
    },
    {
      img: photoMind,
      titleH2: "Szybkiego",
      titleH3: "zapamiętywania",
      points: ["Pamięć", "Obrazy", "Dźwięki", "Liczby", "Asocjacje", "Eidetics"],
    },
    {
      img: photoKubiks,
      titleH2: "Szybkiego",
      titleH3: "czytania",
      points: ["Twórczość", "Widzenie peryferyjne", "Skupienie", "Wyobraźnia", "Pamięć wzrokowa"],
    },
  ];

  return (
    <section className="py-10 max-w-6xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        W ramach naszego kursu uczymy{" "}
        <span className="text-[#fff0c2]">3 technik</span>
      </h1>

      


      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-4 md:gap-3">
  {techniques.map((tech, idx) => (
    <div key={idx} className="relative flex items-center justify-center">
      {/* Карточка */}
      <div className="flex flex-col justify-between bg-white rounded-2xl p-4 min-w-[340px] md:w-[300px] z-0 md:h-[380px] max-w-[280px]">
        <div className="flex justify-center mb-4 max-w-100 min-h-40 md:max-w-100">
          <img
            src={tech.img}
            alt={tech.titleH3}
            className="rounded-xl "
          />
        </div>
        <div className="text-center mb-4">
          <div className="flex justify-center gap-2 mb-2">
            <h2 className="text-[#7d65d3] font-bold text-lg">{tech.titleH2}</h2>
            <h3 className="text-pink-500 font-bold text-lg">{tech.titleH3}</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {tech.points.map((point, i) => (
              <p
                key={i}
                className="bg-[#f5f3fe] text-[#7d65d3] rounded-lg px-2 py-1 text-sm"
              >
                {point}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* Плюс поверх между карточками */}
      {idx < techniques.length - 1 && (
        <div className="hidden lg:block absolute top-1/2 right-[-25px] translate-y-[-50%] z-10">
          <div className="flex items-center text- justify-center bg-white w-10 h-10 border-5 border-[#7b61d3] rounded-full text-[#7b61d3] font-bold text-2xl shadow-md">
            +
          </div>
        </div>
      )}
    </div>
  ))}
      </div>


      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button
        onClick={openModal}
        className="standart  w-full md:max-w-1/3 px-6 py-3 bg-[#ff15a0] text-white font-bold rounded-xl hover:scale-105 transition-transform">
          Sprobuj za darmo
        </button>
        <button className="another  w-full md:max-w-1/3 px-6 py-3 bg-white text-[#7d65d3] font-bold rounded-xl hover:scale-105 transition-transform">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
