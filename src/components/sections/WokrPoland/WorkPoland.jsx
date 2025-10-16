import './WorkPoland.css'
import map from '../../../assets/images/map.png'

export default function WorkPoland(){
    return(
        <section className="workpoland">
            <div className="title">
                <h1>Pracujemy na terenie <p>całej Polski</p></h1>
            </div>
            <div className="map">
                <img src={map} alt="map"></img>
            </div>
        </section>
    )
}