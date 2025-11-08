import photoVideo1 from '../../../assets/images/our-students/photo-video1.png'
import photoVideo2 from '../../../assets/images/our-students/photo-video2.png'
import photoVideo3 from '../../../assets/images/our-students/photo-video3.png'
import './OurStudents.css'
import { useModal } from '../../modal/ModalContext'

// export default function OurStudents() {
//     return (
//         <section className="our-students">

//                 <h1>Nasi uczniowe</h1>
//                 <div className="students-list">
//                     <img src={photoVideo1} alt='photoVideo1' ></img>
//                     <div className='photos'>
//                         <img src={photoVideo2}  alt='photoVideo2'></img>
//                         <img src={photoVideo3}  alt='photoVideo3'></img>
//                     </div>
//                 </div>
//                 <div className="buttons">
//                     <button className='standart'>Sprobuj za darmo</button>
//                     <button className="another">Quiz Indigo</button>
//                 </div>
//         </section>
//     )
// }   


export default function OurStudents() {
  const {openModal}=useModal();
  return (
    <section className="our-students text-center px-4 py-10 max-w-7xl mx-auto">
      
      <h1 className="text-3xl md:text-4xl font-bold text-white mb-10">
        Nasi uczniowe
      </h1>

      {/* Students Images */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        
        <img
          src={photoVideo1}
          alt="photoVideo1"
          className="max-h-[340px] rounded-xl bg-white hover:scale-105 transition-transform cursor-pointer"
        />

        <div className="flex flex-col sm:flex-row gap-4">
          <img
            src={photoVideo2}
            alt="photoVideo2"
            className="max-h-[340px] rounded-xl bg-white hover:scale-105 transition-transform cursor-pointer"
          />
          <img
            src={photoVideo3}
            alt="photoVideo3"
            className="max-h-[340px] rounded-xl bg-white hover:scale-105 transition-transform cursor-pointer"
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button
        onClick={openModal}
        className="standart  w-full md:max-w-1/3 bg-pink-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-pink-600 transition">
          Sprobuj za darmo
        </button>
        <button className="another  w-full md:max-w-1/3 bg-white text-purple-700 font-bold py-3 px-6 rounded-lg hover:bg-purple-100 transition">
          Quiz Indigo
        </button>
      </div>
    </section>
  );
}
