import './PriceList.css'
import photo1 from '../../../assets/images/price-list/1.png'
import photo2 from '../../../assets/images/price-list/2.png'
import photo3 from '../../../assets/images/price-list/3.png'

// export default function PriceList(){
//     return(
//         <section className="pricelist">
//         <div className="title">
//             <h1>CENNIK</h1>
//         </div>
//         <div className="content-prices">
//             <div className="block-prices">
//                 <div className="block-title">
//                     <h1>Bezpłatna lekcja</h1>
//                     <img src={photo1} alt='logo'></img>
//                     <hr></hr>
//                 </div>
//                 <hr></hr>
//                 <div className="block-content">
//                     <div className="block-text">
//                         <p>Darmowy pokaz dla dzieci i rodziców</p>
//                         <p>Zobaczysz podstawy arytmetyki mentalnej</p>
//                         <p>Poznasz sekrety technik nauki Eidetics</p>
//                         <p>Dowolny dzień i godzina</p>
//                     </div>
//                     <div className="block-cost">
//                         <p>Spróbuj za darmo</p>
//                         <p className="cost">0 zł</p>
//                     </div>
//                     <button className='standart'>Zapisz się</button>
//                 </div>
//             </div>
//             <div className="block-prices">
//                 <div className="block-title">
//                     <h1>Zajęcia grupowe</h1>
//                     <img src={photo2} alt='logo'></img>
//                 </div>
//                 <hr></hr>
//                 <div className="block-content">
//                     <div className="block-text">
//                         <p>4 spotkania w miesiącu</p><p className="another">(8 godzin lekcyjnych po 30 minut lub 45 minut)</p>
//                         <p>5-10 osób</p>
//                         <p>Dostosowane do Twojej dyspozycji</p>
//                         <p>3 TECHNIKI:</p><p className="another">szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie</p>
//                         <p>Codzienne indywidualne prace domowe na naszej platformie</p>
//                     </div>
//                     <div className="block-cost">
//                         <p>-10% dla rodzeństwa</p>
//                         <p className="cost">399 zł</p>
//                     </div>
//                     <button className='standart'>Zapisz się</button>
//                 </div>
//             </div>
//             <div className="block-prices">
//                 <div className="block-title">
//                     <h1>Zajęcia indywidualne</h1>
//                     <img src={photo3} alt='logo'></img>
//                 </div>
//                 <hr></hr>
//                 <div className="block-content">
//                     <div className="block-text">
//                         <p>4 spotkania w miesiącu do 60 minut</p>
//                         <p>Indywidualne z trenerem</p>
//                         <p>Dostosowane do Twojej dyspozycji</p>
//                         <p>3 TECHNIKI:</p><p className="another">szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie</p>
//                         <p>Codzienne indywidualne prace domowe na naszej platformie</p>
//                     </div>
//                     <div className="block-cost">
//                         <p>Tylko dla dzieci z orzeczeniem o niepełnosprawności</p>
//                         <p className="cost">600 zł</p>
//                     </div>
//                     <button className='standart'>Zapisz się</button>
//                 </div>
//             </div>
//         </div>
//     </section>
//     )
// }


export default function PriceList() {
  const prices = [
    {
      title: "Bezpłatna lekcja",
      img: photo1,
      texts: [
        "Darmowy pokaz dla dzieci i rodziców",
        "Zobaczysz podstawy arytmetyki mentalnej",
        "Poznasz sekrety technik nauki Eidetics",
        "Dowolny dzień i godzina",
      ],
      cost: "0 zł",
      costText: "Spróbuj za darmo",
      button: "Zapisz się",
    },
    {
      title: "Zajęcia grupowe",
      img: photo2,
      texts: [
        "4 spotkania w miesiącu",
        "(8 godzin lekcyjnych po 30 minut lub 45 minut)",
        "5-10 osób",
        "Dostosowane do Twojej dyspozycji",
        "3 TECHNIKI: szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie",
        "Codzienne indywidualne prace domowe na naszej platformie",
      ],
      cost: "399 zł",
      costText: "-10% dla rodzeństwa",
      button: "Zapisz się",
    },
    {
      title: "Zajęcia indywidualne",
      img: photo3,
      texts: [
        "4 spotkania w miesiącu do 60 minut",
        "Indywidualne z trenerem",
        "Dostosowane do Twojej dyspozycji",
        "3 TECHNIKI: szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie",
        "Codzienne indywidualne prace domowe na naszej platformie",
      ],
      cost: "600 zł",
      costText: "Tylko dla dzieci z orzeczeniem o niepełnosprawności",
      button: "Zapisz się",
    },
  ];

  return (
    <section className="pricelist p-8">
      <div className="title mb-8 text-center">
        <h1 className="text-4xl font-bold text-white">CENNIK</h1>
      </div>

      <div className="content-prices flex flex-col md:flex-row justify-center gap-6 flex-wrap">
        {prices.map((item, index) => (
          <div
            key={index}
            className="block-prices flex flex-col justify-between bg-white rounded-3xl shadow-md w-full md:w-96 h-auto overflow-hidden"
          >
            {/* Заголовок карточки */}
            <div className="block-title flex items-center justify-between h-36 px-6">
              <h1 className="text-purple-700 text-2xl font-bold">{item.title}</h1>
              <img src={item.img} alt="logo" className="w-16 h-16 object-contain" />
            </div>
            <hr className="border-none h-px bg-purple-200 mx-6" />

            {/* Контент карточки */}
            <div className="block-content flex flex-col justify-between p-6 flex-1">
              <div className="block-text text-purple-700 font-bold space-y-2 text-sm">
                {item.texts.map((text, i) => (
                  <p
                    key={i}
                    className={text.includes("TECHNIKI") || text.startsWith("(") ? "text-purple-400 font-normal text-xs" : ""}
                  >
                    {text}
                  </p>
                ))}
              </div>

              {/* Цена */}
              <div className="block-cost bg-purple-700 text-center rounded-2xl py-4 my-4">
                <p className="text-white">{item.costText}</p>
                <p className="text-white font-bold text-3xl">{item.cost}</p>
              </div>

              <button className="standart bg-pink-500 text-white font-bold py-3 w-full rounded-lg hover:bg-pink-600 transition">
                {item.button}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
