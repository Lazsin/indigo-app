import './Reviews.css'
import googleIcon from '../../../assets/images/reviews/google-icon-logo.svg'
import png1 from '../../../assets/images/reviews/1png.png'
import png2 from '../../../assets/images/reviews/2png.png'
import png3 from '../../../assets/images/reviews/3png.png'
import png4 from '../../../assets/images/reviews/4png.png'
import png5 from '../../../assets/images/reviews/1png.png'
import png6 from '../../../assets/images/reviews/2png.png'
import png7 from '../../../assets/images/reviews/3png.png'
import png8 from '../../../assets/images/reviews/4png.png'
import { useRef } from 'react'

export default function Reviews() {
  return (
    <section className="reviews grid justify-center mt-10 mx-auto py-4 px-12 text-center max-w-6xl">
      <h1 className="text-white font-bold text-3xl md:text-4xl mb-5 ">
        Opinie rodziców
      </h1>
      {/* Google Bar */}
      <div className="bg-white rounded-3xl flex flex-col md:flex-row items-center justify-between px-6 py-4 gap-4 w-full mx-auto mb-10">
        
        <div className="flex items-center gap-3">
          <img src={googleIcon} alt="icon" className="w-10 h-10" />
          <p className="font-bold text-[#7d65d3]">Doskonaly wlaczone Google</p>
        </div>
        <button className="px-6 py-3 bg-[#1a7bff] text-white font-semibold rounded-full hover:opacity-90 transition">
          Ocen nas na Facebooku
        </button>
      </div>
      {/* Slider */}
      <Slider/>
    </section>
  );
}


function Slider() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: "smooth" });
  };

  const images = [png1, png2, png3, png4, png5, png6, png7, png8];

  return (
    <div className="relative w-full flex justify-center items-center py-6">
      {/* Левая кнопка */}
      <button
        onClick={scrollLeft}
        className="hidden sm:flex absolute z-10 right-1
                   w-8 h-8 md:w-10 md:h-10 rounded-full 
                   bg-white/90 backdrop-blur-sm shadow-md
                   text-[#7d65d3] text-2xl 
                   justify-center items-center font-bold 
                   cursor-pointer hover:scale-110 transition"
      >
        ❮
      </button>

      {/* Контейнер с карточками */}
      {/* <div
        ref={scrollRef}
        className="flex flex-nowrap overflow-x-auto scroll-smooth gap-1 no-scrollbar w-full"
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="
              bg-white 
              w-full h-full sm:w-1/2 md:w-1/3 lg:w-1/4 
              rounded-2xl flex justify-center items-center p-1 
              shadow hover:shadow-lg hover:-translate-y-1 transition
              shrink-0
            "
          >
            <img
              src={img}
              alt={`slide-${idx}`}
              className="object-contain max-h-full max-w-full rounded-xl"
            />
          </div>
        ))}
      </div> */}
      <div
  ref={scrollRef}
  className="flex flex-nowrap overflow-x-auto scroll-smooth gap-1 no-scrollbar w-full"
>
  {images.map((img, idx) => (
    <div
      key={idx}
      className="
        bg-white 
        basis-[100%] sm:basis-1/2 md:basis-1/3 lg:basis-1/4 
        rounded-2xl flex justify-center items-center p-2 
        shrink-0
      "
    >
      <img
        src={img}
        alt={`slide-${idx}`}
        className="object-contain max-h-full max-w-full rounded-xl"
      />
    </div>
  ))}
</div>


      {/* Правая кнопка */}
      <button
        onClick={scrollRight}
        className="hidden sm:flex absolute z-10 left-1
                   w-8 h-8 md:w-10 md:h-10 rounded-full 
                   bg-white/90 backdrop-blur-sm shadow-md
                   text-[#7d65d3] text-2xl
                   justify-center items-center font-bold 
                   cursor-pointer hover:scale-110 transition"
      >
        ❯
      </button>
    </div>
  );
}



