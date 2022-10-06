import './App.css';
import Home from './components/home';
import Todolist from './components/todolist';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Link to="/">Home</Link>{' '}
          <Link to="/todolist">Todolist</Link>{' '}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todolist" element={<Todolist />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;