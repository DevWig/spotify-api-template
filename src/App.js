import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {SpotifyProvider} from './context/SpotifyContext';

import './App.css'
import Home from './pages/Home';

function App() {
  return (
    <SpotifyProvider>
      <Router>
        <div>
          <main>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
          </main>
        </div>
      </Router>
    </SpotifyProvider>
  );
}

export default App;
