import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import LogIn from './Log-in';
import SignUp from './Sign-up';


import './App.css';
import ProductList from './ProductList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
      </header>
      <main>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
