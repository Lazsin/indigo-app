import './Reviews.css'
import googleIcon from '../../../assets/images/reviews/google-icon-logo.svg'
import png1 from '../../../assets/images/reviews/1png.png'
import png2 from '../../../assets/images/reviews/2png.png'
import png3 from '../../../assets/images/reviews/3png.png'
import png4 from '../../../assets/images/reviews/4png.png'
import png5 from '../../../assets/images/reviews/5png.png'
import png6 from '../../../assets/images/reviews/6png.png'
import png7 from '../../../assets/images/reviews/7png.png'
import png8 from '../../../assets/images/reviews/8png.png'

export default function Reviews() {
  return (
    <section className="reviews grid justify-center p-10 text-center">
      
      <h1 className="text-white font-bold text-3xl md:text-4xl mb-5 ">
        Opinie rodziców
      </h1>

      {/* Google Bar */}
      <div className="bg-white rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 w-full max-w-[900px] mx-auto mb-10">
        
        <div className="flex items-center gap-3">
          <img src={googleIcon} alt="icon" className="w-10 h-10" />
          <p className="font-bold text-[#7d65d3]">Doskonaly wlaczone Google</p>
        </div>

        <button className="px-6 py-3 bg-[#1a7bff] text-white font-semibold rounded-full hover:opacity-90 transition">
          Ocen nas na Facebooku
        </button>

      </div>

      {/* Slider */}
      <div className="flex items-center justify-center gap-1">

        {/* Left Button */}
        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white text-[#7d65d3] text-3xl justify-center items-center font-bold cursor-pointer hover:scale-110 transition">
          ❮
        </div>

        {/* Images */}
        <div className="flex flex-wrap justify-center gap-2">
          
          {[png1, png2, png3, png4].map((img, idx) => (
            <div key={idx} className="bg-white md:w-1/3 lg:w-1/5 h-[150px] rounded-2xl flex justify-center items-center p-2 shadow">
              <img src={img} alt="review" className="object-contain max-h-full max-w-full rounded-xl" />
            </div>
          ))}

        </div>

        {/* Right Button */}
        <div className="hidden sm:flex w-12 h-12 rounded-full bg-white text-[#7d65d3] text-3xl justify-center items-center font-bold cursor-pointer hover:scale-110 transition">
          ❯
        </div>

      </div>

    </section>
  );
}



// export default function Reviews(){
//     return(
//         <section className="reviews">
//             <h1 className='title'>Opinie rodziców</h1>
//             <div className='int-bar'>
//                 <div className='int-bar-content'>
//                     <div className='int-bar-icon'>
//                         <img src={googleIcon} alt='icon'></img>
//                     </div>
//                     <div className='int-bar-text'>Doskonaly wlaczone Google</div>
//                 </div>
//                 <button className='reviews-button'>Ocen nas na Facebooku</button>
//             </div>
//             <div className='slidebar'>
//                 <div className='switch'>❮</div>
//                 <div className='slidebar-content'>
//                     <div className='review'>
//                         <img src={png1} alt='review'></img>
//                     </div>
//                     <div className='review'>
//                         <img src={png2} alt='review'></img>
//                     </div>
//                     <div className='review'>
//                         <img src={png3} alt='review'></img>
//                     </div>
//                     <div className='review'>
//                         <img src={png4} alt='review'></img>
//                     </div>
//                 </div>
//                 <div className='switch'>❯</div>
//             </div>

//         </section>
//     )
// }


