import './App.css';
import { Link, Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <h1 className="App__title">Assesment</h1>
      <nav className="App__menu">
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{' '}
        <Link to="/productdetail">Productdetail</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default App;
