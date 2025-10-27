import photoVideo1 from '../../../assets/images/our-students/photo-video1.png'
import photoVideo2 from '../../../assets/images/our-students/photo-video2.png'
import photoVideo3 from '../../../assets/images/our-students/photo-video3.png'
import './OurStudents.css'

export default function OurStudents() {
    return (
        <section className="our-students">

                <h1>Nasi uczniowe</h1>
                <div className="students-list">
                    <img src={photoVideo1} alt='photoVideo1' ></img>
                    <div className='photos'>
                        <img src={photoVideo2}  alt='photoVideo2'></img>
                        <img src={photoVideo3}  alt='photoVideo3'></img>
                    </div>
                </div>
                <div className="buttons">
                    <button className='standart'>Sprobuj za darmo</button>
                    <button className="another">Quiz Indigo</button>
                </div>
        </section>
    )
}   