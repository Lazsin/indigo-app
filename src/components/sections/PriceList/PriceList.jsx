import './PriceList.css'
import photo1 from '../../../assets/images/price-list/1.png'
import photo2 from '../../../assets/images/price-list/2.png'
import photo3 from '../../../assets/images/price-list/3.png'

export default function PriceList(){
    return(
        <section className="pricelist">
        <div className="title">
            <h1>CENNIK</h1>
        </div>
        <div className="content-prices">
            <div className="block-prices">
                <div className="block-title">
                    <h1>Bezpłatna lekcja</h1>
                    <img src={photo1} alt='logo'></img>
                    <hr></hr>
                </div>
                <hr></hr>
                <div className="block-content">
                    <div className="block-text">
                        <p>Darmowy pokaz dla dzieci i rodziców</p>
                        <p>Zobaczysz podstawy arytmetyki mentalnej</p>
                        <p>Poznasz sekrety technik nauki Eidetics</p>
                        <p>Dowolny dzień i godzina</p>
                    </div>
                    <div className="block-cost">
                        <p>Spróbuj za darmo</p>
                        <p className="cost">0 zł</p>
                    </div>
                    <button>Zapisz się</button>
                </div>
            </div>
            <div className="block-prices">
                <div className="block-title">
                    <h1>Zajęcia grupowe</h1>
                    <img src={photo2} alt='logo'></img>
                </div>
                <hr></hr>
                <div className="block-content">
                    <div className="block-text">
                        <p>4 spotkania w miesiącu</p><p className="another">(8 godzin lekcyjnych po 30 minut lub 45 minut)</p>
                        <p>5-10 osób</p>
                        <p>Dostosowane do Twojej dyspozycji</p>
                        <p>3 TECHNIKI:</p><p className="another">szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie</p>
                        <p>Codzienne indywidualne prace domowe na naszej platformie</p>
                    </div>
                    <div className="block-cost">
                        <p>-10% dla rodzeństwa</p>
                        <p className="cost">399 zł</p>
                    </div>
                    <button>Zapisz się</button>
                </div>
            </div>
            <div className="block-prices">
                <div className="block-title">
                    <h1>Zajęcia indywidualne</h1>
                    <img src={photo3} alt='logo'></img>
                </div>
                <hr></hr>
                <div className="block-content">
                    <div className="block-text">
                        <p>4 spotkania w miesiącu do 60 minut</p>
                        <p>Indywidualne z trenerem</p>
                        <p>Dostosowane do Twojej dyspozycji</p>
                        <p>3 TECHNIKI:</p><p className="another">szybkie liczenie, szybkie czytanie, szybkie zapamiętywanie</p>
                        <p>Codzienne indywidualne prace domowe na naszej platformie</p>
                    </div>
                    <div className="block-cost">
                        <p>Tylko dla dzieci z orzeczeniem o niepełnosprawności</p>
                        <p className="cost">600 zł</p>
                    </div>
                    <button>Zapisz się</button>
                </div>
            </div>
        </div>
    </section>
    )
}