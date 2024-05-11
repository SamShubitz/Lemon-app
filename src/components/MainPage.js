import ArticleOne from './ArticleOne';

export default function MainPage() {
    return (
        <main className="app-main">
          <ArticleOne/>
          <article className="article-two">
            <h2>Specials</h2>
            <section>
              <h4>Greek Salad</h4>
              <p>$12.99</p>
              <p>The famous greek salad of crispy
                lettuce, peppers, olives and our
                Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons. </p>
              <b>Order a delivery</b>
            </section>
          <h4>Bruschetta</h4>
            <section>
              <p>$12.99</p>
              <p>The famous greek salad of crispy
                lettuce, peppers, olives and our
                Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons. </p>
              <b>Order a delivery</b>
            </section>
            <section>
              <h4>Lemon Dessert</h4>
              <p>$12.99</p>
              <p>The famous greek salad of crispy
                lettuce, peppers, olives and our
                Chicago style feta cheese, garnished
                with crunchy garlic and rosemary croutons. </p>
              <b>Order a delivery</b>
            </section>
          </article>
        </main>
    )
}