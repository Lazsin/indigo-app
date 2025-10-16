import './Reviews.css'
import googleIcon from '../../../assets/images/reviews/google-icon-logo.svg'
import png1 from '../../../assets/images/reviews/1png.png'
import png2 from '../../../assets/images/reviews/2png.png'
import png3 from '../../../assets/images/reviews/3png.png'
import png4 from '../../../assets/images/reviews/4png.png'
import png5 from '../../../assets/images/reviews/5png.png'
import png6 from '../../../assets/images/reviews/6png.png'
import png7 from '../../../assets/images/reviews/7png.png'
import png8 from '../../../assets/images/reviews/8png.png'


export default function Reviews(){
    return(
        <section className="reviews">
            <h1 className='title'>Opinie rodziców</h1>
            <div className='int-bar'>
                <div className='int-bar-content'>
                    <div className='int-bar-icon'>
                        <img src={googleIcon} alt='icon'></img>
                    </div>
                    <div className='int-bar-text'>Doskonaly wlaczone Google</div>
                </div>
                <button className='reviews-button'>Ocen nas na Facebooku</button>
            </div>
            <div className='slidebar'>
                <div className='switch'>❮</div>
                <div className='slidebar-content'>
                    <div className='review'>
                        <img src={png1} alt='review'></img>
                    </div>
                    <div className='review'>
                        <img src={png2} alt='review'></img>
                    </div>
                    <div className='review'>
                        <img src={png3} alt='review'></img>
                    </div>
                    <div className='review'>
                        <img src={png4} alt='review'></img>
                    </div>
                </div>
                <div className='switch'>❯</div>
            </div>

        </section>
    )
}