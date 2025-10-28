import './OurLessons.css'
import pc from '../../../assets/images/our-lessons/PC.bmp'
import puzzle from '../../../assets/images/our-lessons/puzzle.png'
import notebook from '../../../assets/images/our-lessons/notebook.png'
import prize from '../../../assets/images/our-lessons/prize.png'
import game from '../../../assets/images/our-lessons/game.png'
import tv from '../../../assets/images/our-lessons/TV.bmp'


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
  return (
    <section className="our-lessons text-center p-5 ">
      <h1 className="text-4xl md:text-5xl font-bold my-8 text-white">
        Dlaczego
        <p className="inline text-yellow-200"> dziecko będzie zainteresowane</p> naszymi lekcjami?
      </h1>

      {/* Первый блок */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
          <div className="flex items-center text-left mb-4">
            <span className="text-3xl mx-2">🖥️</span>
            <p className="text-pink-500 font-bold">Platforma online</p>
          </div>
          <img src={pc} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
            <div className="flex items-center text-left mb-4">
              <span className="text-3xl mx-2">🧩</span>
              <p className="text-pink-500 font-bold">Gry edukacyjne</p>
            </div>
            <img src={puzzle} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
          </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
            <div className="flex items-center text-left mb-4">
              <span className="text-3xl mx-2">💻</span>
              <p className="text-pink-500 font-bold">Podręczniki interaktywne</p>
            </div>
            <img src={notebook} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
          </div>
        </div>
      </div>

      {/* Второй блок */}
      <div className="flex flex-col md:flex-row justify-center gap-6 mb-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
            <div className="flex items-center text-left mb-4">
              <span className="text-3xl mx-2">🏆</span>
              <p className="text-pink-500 font-bold">Udział w olimpiadach i zawodach</p>
            </div>
            <img src={prize} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
          </div>

          <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
            <div className="flex items-center text-left mb-4">
              <span className="text-3xl mx-2">🎮</span>
              <p className="text-pink-500 font-bold">Konkursy, questy i grywalizacja</p>
            </div>
            <img src={game} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-md p-4 flex flex-col items-center">
          <div className="flex items-center text-left mb-4">
            <span className="text-3xl mx-2">📺</span>
            <p className="text-pink-500 font-bold">Udział w programach telewizyjnych</p>
          </div>
          <img src={tv} alt="media" className="rounded-3xl max-w-xs md:max-w-sm max-h-72 p-2" />
        </div>
      </div>

      {/* Кнопки */}
      <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
        <button className="bg-pink-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-pink-600 transition">
          Darmowa lekcja
        </button>
        <button className="bg-white text-purple-700 font-bold py-2 px-6 rounded-lg hover:bg-purple-100 transition">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
