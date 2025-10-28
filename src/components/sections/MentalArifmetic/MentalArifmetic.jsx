import './MentalArifmetic.css'
import mental1 from '../../../assets/images/mental/mental1.png'
import mental2 from '../../../assets/images/mental/mental2.png'
import mental3 from '../../../assets/images/mental/mental3.png'
import mental4 from '../../../assets/images/mental/mental4.png'
import mental5 from '../../../assets/images/mental/mental5.png'
import mental6 from '../../../assets/images/mental/mental6.png'

// export default function MentalArifmetic() {
//     return ( <section className='mental arifmetic'>
//         <h1>Co poprawi <p>Twoje dziecko</p> dzięki arytmetyce mentalnej?</h1>
//         <div className='mental arifmetic-items'>
//           <div className='item'>
//             <img src={mental1} alt='Pewność siebie'></img>
//             <div className='item-text'>
//               <h2>Pewność siebie</h2>
//               <p>Wzmocni pewność siebie poprzez rozwijanie umiejętności miękkich oraz liczne sukcesy</p>
//             </div>
//             </div>
//           <div className='item'>
//             <img src={mental2} alt='Myślenie logiczne'></img>
//             <div className='item-text'>
//               <h2>Myślenie logiczne</h2>
//               <p>Udoskonali logiczne i kreatywne myślenie przez rozwijanie obu półkul mózgu jednocześnie</p>
//             </div>
//           </div>
//           <div className='item'>
//             <img src={mental3} alt='Naukę języków'></img>
//             <div className='item-text'>
//               <h2>Naukę języków</h2>
//               <p>Zdecydowanie szybciej będzie przyswajać języki obce</p>
//             </div>
//           </div>
//           <div className='item'>
//             <img src={mental4} alt='Umiejętność liczenia'></img>
//             <div className='item-text'>
//               <h2>Umiejętność liczenia</h2>
//               <p>Zapomni o problemach z matematyką dzięki codziennemu liczeniu w wyobraźni</p>
//             </div>
//           </div>
//           <div className='item'>
//             <img src={mental5} alt='Wyniki szkolne'></img>
//             <div className='item-text'>
//               <h2>Wyniki szkolne</h2>
//               <p>Poprawi oceny oraz pozna techniki szybkiego i efektywnego uczenia się</p>
//             </div>
//           </div>
//           <div className='item'>
//             <img src={mental6} alt='Koncentrację'></img>
//             <div className='item-text'>
//               <h2>Koncentrację</h2>
//               <p>Nauczy się koncentracji dzięki ćwiczeniom wydłużającym czas skupienia</p>
//             </div>
//           </div>
//         </div>
//         <div className='mental arifmetic-buttons'>
//           <button className='standart'>Sprobuj za darmo</button>
//           <button className='another'>Spersonalizuj nauke dziecka</button>
//         </div>
//       </section>
//     )
// }


export default function MentalArifmetic() {
  return (
    <section className="text-center px-4 py-10 max-w-6xl mx-auto">
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
          <div key={title} className="w-full sm:w-72 bg-white rounded-2xl overflow-hidden">
            <img src={img} alt={title} className="rounded-t-2xl w-full" />
            <div className="p-4 text-left">
              <h2 className="text-[#fff0c2] bg-[#7d65d3] font-bold rounded-lg px-3 py-1 text-sm inline-block">
                {title}
              </h2>
              <p className="text-[#7d65d3] mt-2 text-sm">{text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="standart px-6 py-3 bg-[#ff15a0] text-white font-bold rounded-xl hover:scale-105 duration-200">
          Sprobuj za darmo
        </button>
        <button className=" another px-6 py-3 bg-white text-[#7d65d3] font-bold rounded-xl hover:scale-105 duration-200">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
