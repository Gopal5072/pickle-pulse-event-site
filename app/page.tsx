'use client'
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

      {/* Blinking Register CTA button */}
      <a href="#register" className="register-cta">
        Register
      </a>

      <style jsx>{`
        .register-cta {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #ff5722; /* bright color */
          color: white;
          padding: 15px 25px;
          border-radius: 50px;
          font-weight: bold;
          text-decoration: none;
          box-shadow: 0 4px 8px rgba(255, 87, 34, 0.4);
          animation: blink 2s infinite;
          transition: background-color 0.3s ease, box-shadow 0.3s ease;
          z-index: 1000;
        }

        .register-cta:hover {
          background-color: #e64a19;
          box-shadow: 0 6px 12px rgba(230, 74, 25, 0.7);
          animation-play-state: paused; /* stops blinking on hover */
        }

        @keyframes blink {
          0%, 100% {
            opacity: 1;
            box-shadow: 0 4px 8px rgba(255, 87, 34, 0.6);
          }
          50% {
            opacity: 0.5;
            box-shadow: 0 8px 12px rgba(255, 87, 34, 0.3);
          }
        }
      `}</style>
    </>
  )
}
