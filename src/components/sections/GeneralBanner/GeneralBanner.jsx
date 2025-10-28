import './GeneralBanner.css'
import photo from '../../../assets/images/GeneralBanner.png'

// export default function GeneralBanner() {
//   return (
//     <section className='general banner'>
//         <div className='general banner-text'>
//             <div className='general banner-text-title'>Klub Arytmetyki Mentalnej</div>
//             <h1>Arytmetyka Mentalna</h1>
//             <h2>dla dzieci od 5 do 14 lat</h2>
//             <p>Nauka błyskawicznego liczenia w wyobraźni, ekspresowego czytania oraz szybkiego zapamiętywania, rozwój myślenia logicznego i wyobrażeniowego, zwiększenie koncentracji i pewności siebie u dziecka</p>
//             <div className='general banner-text-buttons'>
//             <button className='standart'>Sprobuj za darmo</button>
//             <button className='another' >Spersonalizuj nauke dziecka</button>
//             </div>
//           </div>
//           <img src={photo} alt='GeneralBanner'></img>
//       </section>
//     )
// }


export default function GeneralBanner() {
  return (
    <section className="generalbanner max-w-7xl flex flex-col md:flex-row justify-between items-center my-5 bg-gray-100 rounded-3xl p-6 gap-6">
      
      {/* TEXT */}
      <div className="grid max-w-[600px] space-y-5 md:space-y-6">
        
        <div className="bg-[#7d65d3] text-[#fff0c2] rounded-2xl px-6 py-2 font-bold w-fit">
          Klub Arytmetyki Mentalnej
        </div>

        <h1 className="text-[#7d65d3] text-4xl md:text-6xl font-bold leading-tight">
          Arytmetyka Mentalna
        </h1>

        <h2 className="text-[#fff0c2] bg-[#7d65d3] text-2xl md:text-4xl font-bold rounded-lg px-3 py-1 w-fit">
          dla dzieci od 5 do 14 lat
        </h2>

        <p className="text-[#7d65d3]">
          Nauka błyskawicznego liczenia w wyobraźni, ekspresowego czytania oraz szybkiego
          zapamiętywania, rozwój myślenia logicznego i wyobrażeniowego, zwiększenie
          koncentracji i pewności siebie u dziecka
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="standart bg-[#fe169e] hover:bg-[#ff4ab8] text-white rounded-xl font-bold px-5 py-2">
            Sprobuj za darmo
          </button>
          <button className=" another bg-[#7d65d3] hover:bg-[#8c79de] text-white rounded-xl font-bold px-5 py-2">
            Spersonalizuj nauke dziecka
          </button>
        </div>
      </div>

      {/* IMAGE */}
      <img
        src={photo}
        alt="General Banner"
        className="max-w-[380px] md:max-w-[400px] w-full object-cover rounded-3xl bg-white"
      />
    </section>
  );
}