import Header from './Header';
import Hero from './Hero';
import ProductList from './ProductList';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Hero />
      </main>
      <section>
        <ProductList />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
