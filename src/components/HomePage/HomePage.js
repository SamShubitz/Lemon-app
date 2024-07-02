import CallToAction from './CallToAction';
import Specials from './SpecialsSection/Specials';
import Testimonials from './TestimonialSection/Testimonials';
import Chicago from './Chicago';

export default function MainPage() {
    return (
        <main className="app-main">
          <CallToAction />
          <Specials />
          <Testimonials />
          <Chicago />
        </main>
    )
}