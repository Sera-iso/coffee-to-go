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
            <Route path="/" element={<App />} />
            <Route index element={<Home />} />
            <Route path="login" element={<LogIn />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="terms" element={<LegalTerms />} />
            <Route path="*" element={<NoPage />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
