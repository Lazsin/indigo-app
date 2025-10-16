import './GeneralBanner.css'
import photo from '../../../assets/images/GeneralBanner.png'

export default function GeneralBanner() {
  return (
    <section className='general banner'>
        <div className='general banner-text'>
            <div className='general banner-text-title'>Klub Arytmetyki Mentalnej</div>
            <h1>Arytmetyka Mentalna</h1>
            <h2>dla dzieci od 5 do 14 lat</h2>
            <p>Nauka błyskawicznego liczenia w wyobraźni, ekspresowego czytania oraz szybkiego zapamiętywania, rozwój myślenia logicznego i wyobrażeniowego, zwiększenie koncentracji i pewności siebie u dziecka</p>
            <div className='general banner-text-buttons'>
            <button>Sprobuj za darmo</button>
            <button className='another' >Spersonalizuj nauke dziecka</button>
            </div>
          </div>
          <img src={photo} alt='GeneralBanner'></img>
      </section>
    )
}