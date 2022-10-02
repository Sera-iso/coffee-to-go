import { Routes, Route } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home'
import LogIn from './Log-in';
import SignUp from './Sign-up';
import NoPage from './NoPage';
import LegalTerms from './LegalTerms';

function App() {
  return (
    <div className='mx-auto max-w-7xl px-4 sm:px-6'>
        <Header />
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LogIn />} />
            <Route exact path="/signup" element={<SignUp />} />
            <Route exact path="/terms" element={<LegalTerms />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
