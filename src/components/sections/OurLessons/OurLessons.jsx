import './OurLessons.css'
import pc from '../../../assets/images/our-lessons/PC.bmp'
import puzzle from '../../../assets/images/our-lessons/puzzle.png'
import notebook from '../../../assets/images/our-lessons/notebook.png'
import prize from '../../../assets/images/our-lessons/prize.png'
import game from '../../../assets/images/our-lessons/game.png'
import tv from '../../../assets/images/our-lessons/TV.bmp'


//там где должни стоять иконки на блоки стоят ЄМОДЗИ 

export default function OurLessons(){
    return(
        <section className='our-lessons'>
            <h1>Dlaczego<p> dziecko będzie zainteresowane</p> naszymi lekcjami?</h1>
            <div className='lessons-block'>
                <div className='lessons'>
                    <div className='title-lesson'>
                        <span>🖥️</span>
                        <p>Platforma online</p>
                    </div>
                    <img src={pc} className='media' alt='media'></img>
                </div>
                <div className='dbl-lessons'>
                    <div className='lessons'>
                    <div className='title-lesson'>
                        <span>🧩</span>
                        <p>Gry edukacyjne</p>
                    </div>
                    <img  src={puzzle} className='media' alt='media'></img>
                    </div>
                    <div className='lessons'>
                    <div className='title-lesson'>
                        <span>💻</span>
                        <p>Podręczniki interaktywne</p>
                    </div>
                    <img src={notebook} className='media' alt='media'></img>
                </div>
                </div>
            </div>
            <div className='lessons-block'>
                <div className='dbl-lessons'>
                    <div className='lessons'>
                    <div className='title-lesson'>
                        <span>🏆</span>
                        <p>Udział w olimpiadach i zawodach</p>
                    </div>
                    <img src={prize} className='media' alt='media'></img>
                    </div>
                    <div className='lessons'>
                    <div className='title-lesson'>
                        <span>🎮</span>
                        <p>Konkursy, questy i grywalizacja</p>
                    </div>
                    <img src={game} className='media' alt='media'></img>
                </div>
                </div>
                <div className='lessons'>
                    <div className='title-lesson'>
                        <span>📺</span>
                        <p>Udział w programach telewizyjnych</p>
                    </div>
                    <img src={tv} className='media' alt='media'></img>
                </div>
            </div>
            <div className='buttons'>
                <button>Darmowa lekcja</button>
                <button className='another'>Spersonalizuj nauke dziecka</button>
            </div>
        </section>
    )
}