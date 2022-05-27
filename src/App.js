import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './components/Home';
import Users from './components/Users';

function App() {
  return (
    <Router>
      <div className='bg-light-clr min-h-screen'>
        <NavBar />

        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/flights' element={<Home />} />
          <Route exact path='/about' element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
