import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import App from '../../containers/App';

const character = {
  name: 'Beef',
  description: 'Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients'
};

describe('Display snapshot', () => {
    it('renders correctly a snapshot', () => {
      const snap = renderer.create(
        <BrowserRouter>
          <Provider store={store}>
            <App
              name={character.strCategory}
              description={character.strCategoryDescription}
            />
          </Provider>
        </BrowserRouter>,
      ).toJSON();
      expect(snap).toMatchSnapshot();
    });
});