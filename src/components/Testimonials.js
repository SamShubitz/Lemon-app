import TestimonialCard from "./TestimonialCard"
import homerPhoto from '../assets/homer.png';
import margePhoto from '../assets/marge.png';
import bartPhoto from '../assets/bart.png';
import lisaPhoto from '../assets/lisa.png';

const customerTestimonials = [
    {rating: 4, photo: homerPhoto, name: 'Lucas Bennett', comment: `"Unbeatable flavors in a cozy setting!"`},
    {rating: 4, photo: margePhoto, name: 'Mia Chavez', comment: `"Authentic cuisine, unforgettable experience!"`},
    {rating: 4, photo: bartPhoto, name: 'Jack Rivera', comment: `"Friendly vibes and great food!"`},
    {rating: 5, photo: lisaPhoto, name: 'Emily Thompson', comment: `"Chicago's best kept secret for classic cuisine!"`}
];


export default function Testimonials() {
    return (
        <div className='testimonials-section'>
            <h1>Testimonials</h1>
            <div className="testimonial-card-section">
                {customerTestimonials.map((card) => {
                    return (
                <TestimonialCard rating={card.rating} photo={card.photo} name={card.name} comment={card.comment} />
                    );
                })}
            </div>
        </div>
    )
}