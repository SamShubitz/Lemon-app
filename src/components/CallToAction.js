import Button from './Button'
import { Link } from 'react-router-dom';

export default function CallToAction() {
return (
    <article className="hero">
        <section className="left-panel">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean
        restaurant, focused on traditional
        recipes served with a modern twist.</p>
        <Link to="/reservations">
            <Button className="button">Reserve a table</Button>
        </Link>
        </section>
        <img className="hero-image" src="/restaurantfood.jpg" alt="promo plate" width="300"/>
    </article>
    );
}