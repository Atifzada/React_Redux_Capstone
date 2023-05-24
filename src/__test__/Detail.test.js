import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import CryptoDetails from '../routes/Detail';

describe('CryptoDetail page testing', () => {
  test('renders correctly when crypto details are available', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <CryptoDetails />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
