import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import {SpotifyProvider} from './context/spotify/SpotifyContext';
import Navbar from './components/layouts/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <SpotifyProvider>
      <Router>
        <div>
          <div>
            <Navbar />
          </div>
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
