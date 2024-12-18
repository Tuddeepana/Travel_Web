import './App.css'
import ActivitiesSection from './components/ActivitiesSection'
import ContactFormSection from './components/ContactFormSection'
import DestinationSection from './components/DestinationSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import PackagesSection from './components/PackagesSection'
import Footer from './components/Footer'
import ServicesSection from "./components/ServicesSection.jsx";
import VehicleSection from "./components/VehicleSection.jsx";

function App() {
  

  return (
    <>
      <div className='min-h-screen overflow-x-hidden'>
        <Navbar />
        <HeroSection />
        <DestinationSection />
        <PackagesSection />
        <ActivitiesSection />
        <ServicesSection />
        <VehicleSection />
        <ContactFormSection />
        <Footer />
      </div>
    </>
  )
}

export default App
