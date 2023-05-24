import { Routes, Route } from 'react-router';
import { Provider } from 'react-redux';
import Home from './routes/Home';
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
        </Routes>
        <Footer />
      </Provider>
    </>
  );
}

export default App;
