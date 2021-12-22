import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header from './components/UI/header/Header';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
