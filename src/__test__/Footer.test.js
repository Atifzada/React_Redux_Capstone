import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import Footer from '../components/Footer';
import store from '../redux/store';

describe('Footer Component', () => {
  test('Renders correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Footer />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
