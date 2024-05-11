import Button from './Button'

export default function ArticleOne() {
return (
    <article className="article-one">
        <section className="left-panel">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean
        restaurant, focused on traditional
        recipes served with a modern twist.</p>
        <Button>Reserve a table</Button>
        </section>
        <img className="image-right" src="/restaurantfood.jpg" alt="promo plate" width="300"/>
    </article>
    );
}