import Button from './Button';
import Card from './Card'

const menu = [
    { id: 1, image: './greek salad.jpg',title: 'Greek salad', price: '$12.99',
    description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    { id: 2, image: './bruschetta.png', title: 'Bruschetta', price: '$5.99',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    { id: 3, image: './lemondessert.jpg', title: 'Lemon Dessert', price: '$5.00',
    description: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

export default function ArticleTwo() {
    return (
        <article className="article-two">
            <section className="specials-header">
                <h2>Specials</h2>
                <Button className="button menu-button">Online Menu</Button>
            </section>
            <section className="card-section">
                {menu.map(item => (
                <Card
                key={item.id} image={item.image} title={item.title}
                price={item.price} description={item.description}
                />
                ))}
            </section>
        </article>
    );
}