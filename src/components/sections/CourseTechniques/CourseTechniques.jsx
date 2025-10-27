import './CourseTechniques.css';
import photo134 from '../../../assets/images/course-techniques/134.svg';
import photoMind from '../../../assets/images/course-techniques/mind.png';
import photoKubiks from '../../../assets/images/course-techniques/kubiks.png';


export  default function CourseTechniques() {
  return (
    <section className="coursetechniques"> 
        <h1>W ramach naszego kursu uczymy <span className='dif'>3 technik</span></h1>
        <div className="techniques">
            <div className="technique">
                <div className='technique-photo'><img src={photo134} alt='134'></img></div>
                <div className='text'>
                    <div className='text-title'>
                        <h2>Szybkiego</h2>
                        <h3>liczenia</h3>
                    </div>
                <div className='points'>
                    <p className='point'>Abacus</p>
                    <p className='point'>Manualność</p>
                    <p className='point'>Inteligencja</p>
                    <p className='point'>Zdolności umysłowe</p>
                </div>
                </div>
            </div>
            <div className='circle-plus'>
                <div className='circle'>
                    <span className='plus'>+</span>
                </div>
            </div>
            <div className="technique">
                <div className='technique-photo'><img src={photoMind} alt='mind'></img></div>
                <div className='text'>
                    <div className='text-title'>
                <h2>Szybkiego</h2>
                <h3>zapamiętywania</h3>
                </div>
                <div className='points'>
                    <p className='point'>Pamięć</p>
                    <p className='point'>Obrazy</p>
                    <p className='point'>Dźwięki</p>
                    <p className='point'>Liczby</p>
                    <p className='point'>Asocjacje</p>
                    <p className='point'>Eidetics</p>
                </div>
                </div>
                
            </div>
             <div className='circle-plus'>
                <div className='circle'>
                    <span className='plus'>+</span>
                </div>
            </div>
            <div className="technique">
                <div className='technique-photo'><img src={photoKubiks} alt='kubiks'></img></div>
                
                <div className='text'>
                    <div className='text-title'>
                <h2>Szybkiego</h2>
                <h3>czytania</h3>
                </div>
                <div className='points'>
                    <p className='point'>Twórczość</p>
                    <p className='point'>Widzenie peryferyjne</p>
                    <p className='point'>Skupienie</p>
                    <p className='point'>Wyobraźnia</p>
                    <p className='point'>Pamięć wzrokowa</p>
                </div>
                </div>
                
            </div>
           </div>
           <div className='buttons'>
                <button className='standart'>Sprobuj za darmo</button>
                <button className='another'>Spersonalizuj nauke dziecka</button>
            </div>
    </section>
  )
}
