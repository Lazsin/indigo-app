import './WorkPoland.css'
import map from '../../../assets/images/map.png'

// export default function WorkPoland(){
//     return(
//         <section className="workpoland">
//             <div className="title">
//                 <h1>Pracujemy na terenie <p>całej Polski</p></h1>
//             </div>
//             <div className="map">
//                 <img src={map} alt="map"></img>
//             </div>
//         </section>
//     )
// }


export default function WorkPoland() {
  return (
    <section className="workpoland mx-auto text-center py-5">
      {/* Заголовок */}
      <div className="title my-8">
        <h1 className="text-4xl md:text-5xl font-bold text-white">
          Pracujemy na terenie
          <p className="inline text-yellow-200"> całej Polski</p>
        </h1>
      </div>

      {/* Карта */}
      <div className="flex justify-center">
        <img
          src={map}
          alt="map"
          className="w-full max-w-2/3 h-auto"
        />
      </div>
    </section>
  );
}
