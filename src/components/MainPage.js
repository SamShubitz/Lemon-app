import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import About from './About';

export default function MainPage() {
    return (
        <main className="app-main">
          <Hero />
          <Specials />
          <Testimonials />
          <About />
        </main>
    )
}