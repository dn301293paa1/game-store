import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePages from './pages/home-pages/HomePages.js';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<HomePages />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
