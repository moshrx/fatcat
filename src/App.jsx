import Navbar from './components/Navbar'
import Hero from './components/Hero'
import PhotoCarousel from './components/PhotoCarousel'
import Menu from './components/Menu'
import CustomOrderForm from './components/CustomOrderForm'
import About from './components/About'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ChatBot from './components/ChatBot'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PhotoCarousel />
        <About />
        <Menu />
        <CustomOrderForm />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <ChatBot />
    </>
  )
}
