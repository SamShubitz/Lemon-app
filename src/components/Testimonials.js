import TestimonialCard from "./TestimonialCard"

const customerTestimonials = [
    {rating: 4, photo: './homer.png', name: 'Lucas Bennett', comment: `"Unbeatable flavors in a cozy setting!"`},
    {rating: 4, photo: './marge.png', name: 'Mia Chavez', comment: `"Authentic cuisine, unforgettable experience!"`},
    {rating: 4, photo: './bart.png', name: 'Jack Rivera', comment: `"Friendly vibes and great food!"`},
    {rating: 5, photo: './lisa.png', name: 'Emily Thompson', comment: `"Chicago's best kept secret for classic cuisine!"`}
    ]


export default function Testimonials() {
    return (
        <div className='testimonials-section'>
            <h2>Testimonials</h2>
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