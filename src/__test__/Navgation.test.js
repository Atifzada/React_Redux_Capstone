import React from 'react';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import Nav from '../components/Navgation';
import store from '../redux/store';
import '@testing-library/jest-dom/extend-expect';

describe('Navigation page testing', () => {
  test('Renders nav accuratly ', () => {
    const tree = render(
      <Provider store={store}>
        <Router>
          <Nav />
        </Router>
      </Provider>,
    );
    expect(tree).toMatchSnapshot();
  });
  test('renders correctly logo and text ', () => {
    render(
      <Router>
        <Nav />
      </Router>,
    );
    const logo = screen.getByAltText('Logo');
    const text = screen.getByText('(MCT)');
    expect(logo).toBeInTheDocument();
    expect(text).toBeInTheDocument();
  });
});
