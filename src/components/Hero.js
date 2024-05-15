import Button from './Button'

export default function Hero() {
return (
    <article className="hero">
        <section className="left-panel">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean
        restaurant, focused on traditional
        recipes served with a modern twist.</p>
        <Button className="button">Reserve a table</Button>
        </section>
        <img className="hero-image" src="/restaurantfood.jpg" alt="promo plate" width="300"/>
    </article>
    );
}