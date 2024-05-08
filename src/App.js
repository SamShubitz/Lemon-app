import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header/>
      <main>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <article>
          <p>We are a family owned Mediterranean
          restaurant, focused on traditional
          recipes served with a modern twist.</p>
          <button>Reserve a table</button>
          <img src="/restauranfood.jpg" alt="promo plate" width="300"/>
        </article>
        <h2>Specials</h2>
        <article>
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
      <Footer/>
    </>
  );
}

export default App;
