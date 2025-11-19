import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import GeneralBanner from './components/sections/GeneralBanner/GeneralBanner'
import MentalArifmetic from './components/sections/MentalArifmetic/MentalArifmetic'
import OurStudents from './components/sections/OurStudents/OurStudents'
import CourseTechniques from './components/sections/CourseTechniques/CourseTechniques'
import OurLessons from './components/sections/OurLessons/OurLessons'
import Reviews from './components/sections/Reviews/Reviews'
import MediaAboutUs from './components/sections/MediaAboutUs/MediaAboutUs'
import Director from './components/sections/Director/Director'
import WorkPoland from './components/sections/WokrPoland/WorkPoland'
import PriceList from './components/sections/PriceList/PriceList'
import { ModalProvider } from './components/modal/ModalContext'








export default function App() {
  
  return (
    <div className='overflow-x-hidden'>
      <ModalProvider>
        
        <Header />
        <GeneralBanner />
        <MentalArifmetic />
        <OurStudents />
        <CourseTechniques />
        <OurLessons/>
        <Reviews/>
        <MediaAboutUs/>
        <Director/>
        <WorkPoland/>
        <PriceList/> 
        <Footer />
      </ModalProvider>



    </div>
  )
}
