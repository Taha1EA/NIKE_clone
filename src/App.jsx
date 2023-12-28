import Hero from './sections/Hero'
import CustumorsReviews from './sections/CustumorsReviews';
import PopulaireProducts from './sections/PopulaireProducts';
import Services from './sections/Services';
import Subscribe from './sections/Subscribe';
import SuperQuality from './sections/SuperQuality';
import SpecialOffer from './sections/SpecialOffer';
import Footer from './sections/Footer';
import Nav from './components/Nav';
const App =() =>(
  <main className="relative">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding ">
      <PopulaireProducts /> 
    </section>
    <section className="padding ">
      <SuperQuality /> 
    </section>
    
    <section className="padding-x py-10">
      <Services /> 
    </section>
    <section className="padding ">
      <SpecialOffer /> 
    </section>
    <section className="padding bg-pale-blue">
      <CustumorsReviews /> 
    </section>
    <section className="padding-x sm:py32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding-x padding-t bg-black pb-8 ">
      <Footer /> 
    </section>
  </main>
);
export default App;