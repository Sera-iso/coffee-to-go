import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import LogIn from './Log-in';
import SignUp from './Sign-up';
import LegalTerms from './LegalTerms';

function App() {
  return (
    <div>
      <header>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/terms" element={<LegalTerms />} />
        </Routes>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
