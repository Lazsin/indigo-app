import './OurLessons.css'
import pc from '../../../assets/images/our-lessons/PC.bmp'
import puzzle from '../../../assets/images/our-lessons/puzzle.png'
import notebook from '../../../assets/images/our-lessons/notebook.png'
import prize from '../../../assets/images/our-lessons/prize.png'
import game from '../../../assets/images/our-lessons/game.png'
import tv from '../../../assets/images/our-lessons/TV.bmp'
import { useModal } from '../../modal/ModalContext'


//там где должни стоять иконки на блоки стоят ЄМОДЗИ 

// export default function OurLessons(){
//     return(
//         <section className='our-lessons'>
//             <h1>Dlaczego<p> dziecko będzie zainteresowane</p> naszymi lekcjami?</h1>
//             <div className='lessons-block'>
//                 <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>🖥️</span>
//                         <p>Platforma online</p>
//                     </div>
//                     <img src={pc} className='media' alt='media'></img>
//                 </div>
//                 <div className='dbl-lessons'>
//                     <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>🧩</span>
//                         <p>Gry edukacyjne</p>
//                     </div>
//                     <img  src={puzzle} className='media' alt='media'></img>
//                     </div>
//                     <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>💻</span>
//                         <p>Podręczniki interaktywne</p>
//                     </div>
//                     <img src={notebook} className='media' alt='media'></img>
//                 </div>
//                 </div>
//             </div>
//             <div className='lessons-block'>
//                 <div className='dbl-lessons'>
//                     <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>🏆</span>
//                         <p>Udział w olimpiadach i zawodach</p>
//                     </div>
//                     <img src={prize} className='media' alt='media'></img>
//                     </div>
//                     <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>🎮</span>
//                         <p>Konkursy, questy i grywalizacja</p>
//                     </div>
//                     <img src={game} className='media' alt='media'></img>
//                 </div>
//                 </div>
//                 <div className='lessons'>
//                     <div className='title-lesson'>
//                         <span>📺</span>
//                         <p>Udział w programach telewizyjnych</p>
//                     </div>
//                     <img src={tv} className='media' alt='media'></img>
//                 </div>
//             </div>
//             <div className='buttons'>
//                 <button className='standart'>Darmowa lekcja</button>
//                 <button className='another'>Spersonalizuj nauke dziecka</button>
//             </div>
//         </section>
//     )
// }

export default function OurLessons() {
  const {openModal}=useModal();
  const items = [
    { icon: "🖥️", title: "Platforma online", img: pc },
    { icon: "🧩", title: "Gry edukacyjne", img: puzzle },
    { icon: "💻", title: "Podręczniki interaktywne", img: notebook },
    { icon: "🏆", title: "Udział w olimpiadach i zawodach", img: prize },
    { icon: "🎮", title: "Konkursy, questy i grywalizacja", img: game },
    { icon: "📺", title: "Udział w programach telewizyjnych", img: tv },
  ];


  return (
    <section className="our-lessons flex justify-center text-center max-w-6xl">
      <h1 className="text-2xl md:text-4xl font-bold text-white mb-12 px-6">
        Dlaczego
        <p className="inline text-yellow-200"> dziecko będzie zainteresowane</p> naszymi lekcjami?
      </h1>

      {/* блок */}
      <div className="flex flex-wrap justify-center gap-2 mb-4 text-pink-500">
        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 min-h-40 md:max-w-2/5">
          <div className="flex items-center text-left mb-4" >
            <span className="text-xl mx-2">🖥️</span>
            <p className="text-pink-500 font-bold">Platforma online</p>
          </div>
          <img src={pc} alt="media" className="rounded-3xl h-full w-full" />
        </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 md:max-w-1/4">
            <div className="flex items-center text-left mb-4">
              <span className="text-xl mx-2">🧩</span>
              <p className="text-pink-500 font-bold">Gry edukacyjne</p>
            </div>
            <img src={puzzle} alt="media" className="rounded-3xl h-full w-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 md:max-w-1/4">
            <div className="flex items-center text-left mb-4">
              <span className="text-xl mx-2">💻</span>
              <p className="text-pink-500 font-bold">Podręczniki interaktywne</p>
            </div>
            <img src={notebook} alt="media" className="rounded-3xl h-full w-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 md:max-w-1/4">
            <div className="flex items-center text-left mb-4">
              <span className="text-xl mx-2">🏆</span>
              <p className="text-pink-500 font-bold">Udział w olimpiadach i zawodach</p>
            </div>
            <img src={prize} alt="media" className="rounded-3xl h-full w-full" />
          </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 md:max-w-1/4">
            <div className="flex items-center text-left mb-4">
              <span className="text-xl mx-2">🎮</span>
              <p className="text-pink-500 font-bold">Konkursy, questy i grywalizacja</p>
            </div>
            <img src={game} alt="media" className="rounded-3xl h-full w-full" />
          </div>
        

        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center max-w-5/6 min-h-40 md:max-w-2/5">
          <div className="flex items-center text-left mb-4">
            <span className="text-xl mx-2">📺</span>
            <p className="text-pink-500 font-bold">Udział w programach telewizyjnych</p>
          </div>
          <img src={tv} alt="media" className="rounded-3xl h-full w-full" />
      </div>
      </div>
      

      {/* Кнопки */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <button
        onClick={openModal}
        className=" standart bg-pink-500 w-full md:max-w-1/3 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition">
          Darmowa lekcja
        </button>
        <button className="another bg-white w-full md:max-w-1/3 text-purple-700 font-bold py-2 px-6 rounded-lg hover:bg-purple-100 transition">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}



// export default function OurLessons() {
//   return (
//     <section className="our-lessons text-center mx-5">
      
//       <h1 className="text-white font-bold text-3xl md:text-4xl mb-10">
//         Dlaczego <p className="text-pink-500 inline">dziecko będzie zainteresowane</p> naszymi lekcjami?
//       </h1>

//       {/* Row 1 */}
//       <div className="flex flex-col md:flex-row justify-center gap-6 mb-8">
        
//         {/* Card */}
//         <div className="bg-white rounded-3xl p-4 shadow-lg">
//           <div className="flex items-center gap-3 mb-4 text-left">
//             <span className="text-4xl">🖥️</span>
//             <p className="text-pink-500 font-bold">Platforma online</p>
//           </div>
//           <img src={pc} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//         </div>

//         {/* Two cards */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-white rounded-3xl p-4 shadow-lg">
//             <div className="flex items-center gap-3 mb-4 text-left">
//               <span className="text-4xl">🧩</span>
//               <p className="text-pink-500 font-bold">Gry edukacyjne</p>
//             </div>
//             <img src={puzzle} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//           </div>

//           <div className="bg-white rounded-3xl p-4 shadow-lg">
//             <div className="flex items-center gap-3 mb-4 text-left">
//               <span className="text-4xl">💻</span>
//               <p className="text-pink-500 font-bold">Podręczniki interaktywne</p>
//             </div>
//             <img src={notebook} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//           </div>
//         </div>
//       </div>

//       {/* Row 2 */}
//       <div className="flex flex-col md:flex-row justify-center gap-6 mb-10">
        
//         {/* Two cards */}
//         <div className="flex flex-col gap-6">
//           <div className="bg-white rounded-3xl p-4 shadow-lg">
//             <div className="flex items-center gap-3 mb-4 text-left">
//               <span className="text-4xl">🏆</span>
//               <p className="text-pink-500 font-bold">Udział w olimpiadach i zawodach</p>
//             </div>
//             <img src={prize} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//           </div>

//           <div className="bg-white rounded-3xl p-4 shadow-lg">
//             <div className="flex items-center gap-3 mb-4 text-left">
//               <span className="text-4xl">🎮</span>
//               <p className="text-pink-500 font-bold">Konkursy, questy i grywalizacja</p>
//             </div>
//             <img src={game} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//           </div>
//         </div>

//         {/* Card */}
//         <div className="bg-white rounded-3xl p-4 shadow-lg">
//           <div className="flex items-center gap-3 mb-4 text-left">
//             <span className="text-4xl">📺</span>
//             <p className="text-pink-500 font-bold">Udział w programach telewizyjnych</p>
//           </div>
//           <img src={tv} alt="media" className="rounded-2xl max-w-[380px] w-full mx-auto object-cover" />
//         </div>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col md:flex-row justify-center gap-4">
//         <button className="standart px-6 py-3 font-semibold text-white bg-pink-500 rounded-full">
//           Darmowa lekcja
//         </button>
//         <button className="px-6 py-3 font-semibold text-[#7d65d3] bg-white rounded-full">
//           Spersonalizuj naukę dziecka
//         </button>
//       </div>

//     </section>
//   );
// }
