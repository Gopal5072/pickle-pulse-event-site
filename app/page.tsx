import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
//import Schedule from '../components/Schedule'
import Venue from '../components/Venue'
import Sponsors from '../components/Sponsors'
import RegistrationForm from '../components/RegistrationForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <About />
      {/* <Schedule /> */}
      <Venue />
      <RegistrationForm />
      <Footer />
    </>
  )
}
