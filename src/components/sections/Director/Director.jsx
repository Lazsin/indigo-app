import './Director.css'
import directorpng from '../../../assets/images/director-img.png'
import { useModal } from '../../modal/ModalContext';


// export default function Director(){
//     return(
//         <section className="director">
//             <div className="title">
//                 <h1>Dyrektorka<p> Indigo Mental Club Polska</p></h1>
//             </div>
//             <div className="content-d">
//                 <div className="content-text">
//                     <h1 className="name">Karolina Lubenets</h1>
//                     <p> <span className="another">Osobiście zajmuję się ulepszaniem umysłów dzieci,</span> ich możliwościami i umiejętnościami dotyczącymi szybkiej analizy, sprawniejszego zapamiętywania faktów, lepszego reagowania na sytuacje stresowe. Sama zawsze korzystałam z każdego źródła, aby nieustannie się rozwijać i pokonywać swoje granice.</p>
//                     <p><span className="another">Naszym głównym celem jest zniwelowanie problemów z nauką wśród naszych uczniów</span> oraz podwyższenie osiągnięć szkolnych - umiejętność liczenia szybciej niż kalkulator lub zapamiętanie wiersza w minutę to jedynie efekty uboczne- liczba mnoga. Najważniejsza jest dla mnie jak najwyższa jakość naszych zajęć - stacjonarnych, jak i on-line. Między innymi tym wyróżniamy się na polskim rynku, zawsze dając z siebie 100%.</p>
//                     <p> <span className="another">Nasi trenerzy łamią stereotypy o typowych nauczycielach</span> - ci przekazują uczniom maksimum energii i motywacji. Ładują w uczniów 100% energii i motywacji! Nasza kadra zadba o to, żeby Twoje dziecko osiągnęło niesamowicie wysokie wyniki i czuło się u nas jak najlepiej!</p>
//                 </div>
//                 <div className="content-img">
//                     <img src={directorpng} className="director-img" alt="director-img" ></img>
//                 </div>
//                 </div>
//                 <div className="buttons">
//                     <button className='standart'>Zapisz sie</button>
//                     <button className="another">Spersonalizuj nauke dziecka</button>
//                 </div>
//         </section>
//     )
// }


export default function Director() {
  const {openModal}=useModal();
  return (
    <section className="director flex-row mx-auto text-center p-5 max-w-6xl">
      {/* Заголовок */}
      <div className="title my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Dyrektorka
          <p className="inline text-yellow-200"> Indigo Mental Club Polska</p>
        </h1>
      </div>

      {/* Основной контент */}
      <div className="content-d flex flex-col-reverse lg:flex-row justify-between bg-white rounded-3xl p-4 md:p-8 gap-6 mx-8">
        {/* Текст */}
        <div className="content-text text-left flex-1 space-y-4">
        <h1 className="name text-[#7d65d3] text-2xl font-bold">Karolina Lubenets</h1>
          <p className="text-[#7d65d3]">
            <span className="font-bold">Osobiście zajmuję się ulepszaniem umysłów dzieci,</span> ich możliwościami i umiejętnościami dotyczącymi szybkiej analizy, sprawniejszego zapamiętywania faktów, lepszego reagowania na sytuacje stresowe. Sama zawsze korzystałam z każdego źródła, aby nieustannie się rozwijać i pokonywać swoje granice.
          </p>
          <p className="text-[#7d65d3]">
            <span className="font-bold">Naszym głównym celem jest zniwelowanie problemów z nauką wśród naszych uczniów</span> oraz podwyższenie osiągnięć szkolnych - umiejętność liczenia szybciej niż kalkulator lub zapamiętanie wiersza w minutę to jedynie efekty uboczne. Najważniejsza jest dla mnie jak najwyższa jakość naszych zajęć - stacjonarnych, jak i on-line. Między innymi tym wyróżniamy się na polskim rynku, zawsze dając z siebie 100%.
          </p>
          <p className="text-[#7d65d3]">
            <span className="font-bold">Nasi trenerzy łamią stereotypy o typowych nauczycielach</span> - ci przekazują uczniom maksimum energii i motywacji. Ładują w uczniów 100% energii i motywacji! Nasza kadra zadba o to, żeby Twoje dziecko osiągnęło niesamowicie wysokie wyniki i czuło się u nas jak najlepiej!
          </p>
        </div>

        {/* Изображение */}
        <div className="content-img flex-1 max-w-3/4 flex self-center items-center">
          <img src={directorpng} alt="director-img" className="director-img rounded-2xl max-w-full h-auto" />
        </div>
      </div>

      {/* Кнопки */}
      <div className="buttons flex flex-col md:flex-row justify-center gap-4 mt-6">
        <button
        onClick={openModal}
        className="standart w-full md:max-w-1/3  bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition">
          Zapisz sie
        </button>
        <button className="another w-full md:max-w-1/3  bg-white text-[#7d65d3] font-bold py-2 px-6 rounded-lg hover:bg-purple-100 transition">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
