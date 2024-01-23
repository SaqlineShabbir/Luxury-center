import NavBar from './components/shared/Navbar'
import Banner from './components/home/Banner'
import Services from './components/home/Services'
import Profession from './components/home/Profession'
import Testimonials from './components/home/Testimonials'
import Message from './components/home/Message'
import Footer from './components/shared/Footer'
import '../../src/app/globals.css';
export default function Home() {
  return (
    <main className="bg-slate-100">


      <NavBar />
      <Banner />
      <Services />
      <Profession />
      <Testimonials />
      <Message />
      <Footer />


    </main>
  );
}
