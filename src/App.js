import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/UI/header/Header';
import Home from './pages/Home';
import CountryDetails from './pages/CountryDetails';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<CountryDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
