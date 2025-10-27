import './Director.css'
import directorpng from '../../../assets/images/director-img.png'


export default function Director(){
    return(
        <section className="director">
            <div className="title">
                <h1>Dyrektorka<p> Indigo Mental Club Polska</p></h1>
            </div>
            <div className="content-d">
                <div className="content-text">
                    <h1 className="name">Karolina Lubenets</h1>
                    <p> <span className="another">Osobiście zajmuję się ulepszaniem umysłów dzieci,</span> ich możliwościami i umiejętnościami dotyczącymi szybkiej analizy, sprawniejszego zapamiętywania faktów, lepszego reagowania na sytuacje stresowe. Sama zawsze korzystałam z każdego źródła, aby nieustannie się rozwijać i pokonywać swoje granice.</p>
                    <p><span className="another">Naszym głównym celem jest zniwelowanie problemów z nauką wśród naszych uczniów</span> oraz podwyższenie osiągnięć szkolnych - umiejętność liczenia szybciej niż kalkulator lub zapamiętanie wiersza w minutę to jedynie efekty uboczne- liczba mnoga. Najważniejsza jest dla mnie jak najwyższa jakość naszych zajęć - stacjonarnych, jak i on-line. Między innymi tym wyróżniamy się na polskim rynku, zawsze dając z siebie 100%.</p>
                    <p> <span className="another">Nasi trenerzy łamią stereotypy o typowych nauczycielach</span> - ci przekazują uczniom maksimum energii i motywacji. Ładują w uczniów 100% energii i motywacji! Nasza kadra zadba o to, żeby Twoje dziecko osiągnęło niesamowicie wysokie wyniki i czuło się u nas jak najlepiej!</p>
                </div>
                <div className="content-img">
                    <img src={directorpng} className="director-img" alt="director-img" ></img>
                </div>
                </div>
                <div className="buttons">
                    <button className='standart'>Zapisz sie</button>
                    <button className="another">Spersonalizuj nauke dziecka</button>
                </div>
        </section>
    )
}