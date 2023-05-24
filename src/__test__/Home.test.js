import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../routes/Home';
import store from '../redux/store';

describe('home page testinfg', () => {
  test('Renders home page correctly', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Home />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
});
