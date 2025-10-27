import './MentalArifmetic.css'
import mental1 from '../../../assets/images/mental/mental1.png'
import mental2 from '../../../assets/images/mental/mental2.png'
import mental3 from '../../../assets/images/mental/mental3.png'
import mental4 from '../../../assets/images/mental/mental4.png'
import mental5 from '../../../assets/images/mental/mental5.png'
import mental6 from '../../../assets/images/mental/mental6.png'

export default function MentalArifmetic() {
    return ( <section className='mental arifmetic'>
        <h1>Co poprawi <p>Twoje dziecko</p> dzięki arytmetyce mentalnej?</h1>
        <div className='mental arifmetic-items'>
          <div className='item'>
            <img src={mental1} alt='Pewność siebie'></img>
            <div className='item-text'>
              <h2>Pewność siebie</h2>
              <p>Wzmocni pewność siebie poprzez rozwijanie umiejętności miękkich oraz liczne sukcesy</p>
            </div>
            </div>
          <div className='item'>
            <img src={mental2} alt='Myślenie logiczne'></img>
            <div className='item-text'>
              <h2>Myślenie logiczne</h2>
              <p>Udoskonali logiczne i kreatywne myślenie przez rozwijanie obu półkul mózgu jednocześnie</p>
            </div>
          </div>
          <div className='item'>
            <img src={mental3} alt='Naukę języków'></img>
            <div className='item-text'>
              <h2>Naukę języków</h2>
              <p>Zdecydowanie szybciej będzie przyswajać języki obce</p>
            </div>
          </div>
          <div className='item'>
            <img src={mental4} alt='Umiejętność liczenia'></img>
            <div className='item-text'>
              <h2>Umiejętność liczenia</h2>
              <p>Zapomni o problemach z matematyką dzięki codziennemu liczeniu w wyobraźni</p>
            </div>
          </div>
          <div className='item'>
            <img src={mental5} alt='Wyniki szkolne'></img>
            <div className='item-text'>
              <h2>Wyniki szkolne</h2>
              <p>Poprawi oceny oraz pozna techniki szybkiego i efektywnego uczenia się</p>
            </div>
          </div>
          <div className='item'>
            <img src={mental6} alt='Koncentrację'></img>
            <div className='item-text'>
              <h2>Koncentrację</h2>
              <p>Nauczy się koncentracji dzięki ćwiczeniom wydłużającym czas skupienia</p>
            </div>
          </div>
        </div>
        <div className='mental arifmetic-buttons'>
          <button className='standart'>Sprobuj za darmo</button>
          <button className='another'>Spersonalizuj nauke dziecka</button>
        </div>
      </section>
    )
}