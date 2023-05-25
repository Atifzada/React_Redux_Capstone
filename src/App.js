import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Home from './routes/Home';
import CryptoDetails from './routes/Detail';
import store from './redux/store';
import Nav from './components/Navgation';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Provider store={store}>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/" element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
