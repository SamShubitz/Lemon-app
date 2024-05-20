import CallToAction from './CallToAction';
import Specials from './Specials';
import Testimonials from './Testimonials';
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