import './MediaAboutUs.css'
import png1 from '../../../assets/images/media-about-us/315fc58e-631a-4ade-8.png'
import png3 from '../../../assets/images/media-about-us/Vector-1.svg'
import png2 from '../../../assets/images/media-about-us/Vector.svg'
import png5 from '../../../assets/images/media-about-us/svg_1737490731055.svg'
import png4 from '../../../assets/images/media-about-us/mam_talent_indigo.png'
import png6 from '../../../assets/images/media-about-us/4fa0b728-40d6-4157-8.png'


export default function MediaAboutUs(){
    return(
        <section className="media-about-us">
            
            <div className="titless">
                <h1>Media<p> o nas</p></h1>
                <p className="subtitle">Kliknij w logo, żeby obejrzeć wywiad</p>
            </div>
            <div className="content">
                <div className="media-icon">
                    <img src={png1}></img>
                </div>
                <div className="media-icon">
                    <img src={png2}></img>
                </div>
                <div className="media-icon">
                    <img src={png3}></img>
                </div>
                <div className="media-icon">
                    <img src={png4}></img>
                </div>
                <div className="media-icon">
                    <img src={png5}></img>
                </div>
                <div className="media-icon">
                    <img src={png6}></img>
                </div>
            </div>
        </section>
    )
}