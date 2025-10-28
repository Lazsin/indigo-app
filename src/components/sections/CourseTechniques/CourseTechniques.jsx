import './CourseTechniques.css';
import photo134 from '../../../assets/images/course-techniques/134.svg';
import photoMind from '../../../assets/images/course-techniques/mind.png';
import photoKubiks from '../../../assets/images/course-techniques/kubiks.png';


// export  default function CourseTechniques() {
//   return (
//     <section className="coursetechniques"> 
//         <h1>W ramach naszego kursu uczymy <span className='dif'>3 technik</span></h1>
//         <div className="techniques">
//             <div className="technique">
//                 <div className='technique-photo'><img src={photo134} alt='134'></img></div>
//                 <div className='text'>
//                     <div className='text-title'>
//                         <h2>Szybkiego</h2>
//                         <h3>liczenia</h3>
//                     </div>
//                 <div className='points'>
//                     <p className='point'>Abacus</p>
//                     <p className='point'>Manualność</p>
//                     <p className='point'>Inteligencja</p>
//                     <p className='point'>Zdolności umysłowe</p>
//                 </div>
//                 </div>
//             </div>
//             <div className='circle-plus'>
//                 <div className='circle'>
//                     <span className='plus'>+</span>
//                 </div>
//             </div>
//             <div className="technique">
//                 <div className='technique-photo'><img src={photoMind} alt='mind'></img></div>
//                 <div className='text'>
//                     <div className='text-title'>
//                 <h2>Szybkiego</h2>
//                 <h3>zapamiętywania</h3>
//                 </div>
//                 <div className='points'>
//                     <p className='point'>Pamięć</p>
//                     <p className='point'>Obrazy</p>
//                     <p className='point'>Dźwięki</p>
//                     <p className='point'>Liczby</p>
//                     <p className='point'>Asocjacje</p>
//                     <p className='point'>Eidetics</p>
//                 </div>
//                 </div>
                
//             </div>
//              <div className='circle-plus'>
//                 <div className='circle'>
//                     <span className='plus'>+</span>
//                 </div>
//             </div>
//             <div className="technique">
//                 <div className='technique-photo'><img src={photoKubiks} alt='kubiks'></img></div>
                
//                 <div className='text'>
//                     <div className='text-title'>
//                 <h2>Szybkiego</h2>
//                 <h3>czytania</h3>
//                 </div>
//                 <div className='points'>
//                     <p className='point'>Twórczość</p>
//                     <p className='point'>Widzenie peryferyjne</p>
//                     <p className='point'>Skupienie</p>
//                     <p className='point'>Wyobraźnia</p>
//                     <p className='point'>Pamięć wzrokowa</p>
//                 </div>
//                 </div>
                
//             </div>
//            </div>
//            <div className='buttons'>
//                 <button className='standart'>Sprobuj za darmo</button>
//                 <button className='another'>Spersonalizuj nauke dziecka</button>
//             </div>
//     </section>
//   )
// }


// export default function CourseTechniques() {
//   const techniques = [
//     {
//       img: photo134,
//       titleH2: "Szybkiego",
//       titleH3: "liczenia",
//       points: ["Abacus", "Manualność", "Inteligencja", "Zdolności umysłowe"],
//     },
//     {
//       img: photoMind,
//       titleH2: "Szybkiego",
//       titleH3: "zapamiętywania",
//       points: ["Pamięć", "Obrazy", "Dźwięki", "Liczby", "Asocjacje", "Eidetics"],
//     },
//     {
//       img: photoKubiks,
//       titleH2: "Szybkiego",
//       titleH3: "czytania",
//       points: ["Twórczość", "Widzenie peryferyjne", "Skupienie", "Wyobraźnia", "Pamięć wzrokowa"],
//     },
//   ];

//   return (
//     <section className="px-4 py-10 max-w-7xl mx-auto text-center">
//       <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
//         W ramach naszego kursu uczymy{" "}
//         <span className="text-[#fff0c2]">3 technik</span>
//       </h1>

//       {/* Techniques with pluses between */}
//       <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">

//         {techniques.map((tech, idx) => (
//           <div key={idx} className="flex items-center">
//             {/* Card */}
//             <div className="flex flex-col bg-white rounded-2xl p-4 min-w-[280px] md:min-w-[375px]">
//               <div className="flex justify-center mb-4">
//                 <img
//                   src={tech.img}
//                   alt={tech.titleH3}
//                   className="rounded-xl max-w-[220px]"
//                 />
//               </div>
//               <div className="text-center mb-4">
//                 <div className="flex justify-center gap-2 mb-2">
//                   <h2 className="text-[#7d65d3] font-bold text-lg">{tech.titleH2}</h2>
//                   <h3 className="text-[#ff169f] font-bold text-lg">{tech.titleH3}</h3>
//                 </div>
//                 <div className="flex flex-wrap justify-center gap-2">
//                   {tech.points.map((point, i) => (
//                     <p
//                       key={i}
//                       className="bg-[#f5f3fe] text-[#7d65d3] rounded-lg px-2 py-1 text-sm"
//                     >
//                       {point}
//                     </p>
//                   ))}
//                 </div>
//               </div>
//             </div>

//             {/* Plus circle between cards */}
//             {idx < techniques.length - 1 && (
//               <div className="hidden md:flex flex-col items-center mx-4 relative h-72 w-5 bg-[#7b61d3]">
//                 <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full border-8 border-[#7d65d3] flex items-center justify-center text-[#7b61d3] text-3xl font-bold">
//                   +
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}

//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
//         <button className="px-6 py-3 bg-[#ff15a0] text-white font-bold rounded-xl hover:scale-105 transition-transform w-72 h-12">
//           Sprobuj za darmo
//         </button>
//         <button className="px-6 py-3 bg-white text-[#7d65d3] font-bold rounded-xl hover:scale-105 transition-transform w-72 h-12">
//           Spersonalizuj nauke dziecka
//         </button>
//       </div>
//     </section>
//   );
// }

export default function CourseTechniques() {
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
    <section className="px-4 py-10 max-w-7xl mx-auto text-center bg-purple-600">
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        W ramach naszego kursu uczymy{" "}
        <span className="text-yellow-300">3 technik</span>
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
        {techniques.map((tech, idx) => (
          <div key={idx} className="flex items-center gap-4">
            {/* Карточка */}
            <div className="flex flex-col bg-white rounded-2xl p-4 min-w-[280px] md:min-w-[250px]">
              <div className="flex justify-center mb-4">
                <img
                  src={tech.img}
                  alt={tech.titleH3}
                  className="rounded-xl max-w-[220px]"
                />
              </div>
              <div className="text-center mb-4">
                <div className="flex justify-center gap-2 mb-2">
                  <h2 className="text-[#7d65d3] font-bold text-lg">{tech.titleH2}</h2>
                  <h3 className="text-pink-500 font-bold text-lg">{tech.titleH3}</h3>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
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

            {/* Плюс между карточками */}
            {idx < techniques.length - 1 && (
              <div className="hidden md:flex items-center justify-center">
                <div className="w-10 h-10 rounded-full bg-white border-4 border-[#7d65d3] flex items-center justify-center text-[#7b61d3] font-bold text-2xl">
                  +
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Кнопки */}
      <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
        <button className="px-6 py-3 bg-[#ff15a0] text-white font-bold rounded-xl hover:scale-105 transition-transform w-72 h-12">
          Sprobuj za darmo
        </button>
        <button className="px-6 py-3 bg-white text-[#7d65d3] font-bold rounded-xl hover:scale-105 transition-transform w-72 h-12">
          Spersonalizuj nauke dziecka
        </button>
      </div>
    </section>
  );
}
