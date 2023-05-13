import Hero from './Hero.js'
import Services from './Services.js'
import './App.css';
import Portfolio from './Portfolio.js';
import Footer from './Footer.js';
import BackToTopButton from './BackToTopButton';

function App() {
  return (
    <div className="App">
      <Hero/>
      <section id="services">
        <Services/>
      </section>
      <section id="portfolio">
        <Portfolio/>
      </section>
      <section id="contact-us">
        <Footer/>
      </section>
      <BackToTopButton />
    </div>
  );
}

export default App;
