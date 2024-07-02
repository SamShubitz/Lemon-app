import StarRating from './StarRating'

export default function TestimonialCard({rating, photo, name, comment}) {
    return (
        <div className="testimonial-card">
            <StarRating
            className="rating-stars"
            rating={rating} />
            <div className="customer-profile">
                <img className="customer-photo" src={photo} alt={name} />
                <b>{name}</b>
            </div>
            <p className="ratings-comment">{comment}</p>
        </div>
    );
}