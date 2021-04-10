import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import App from '../../containers/App';

const character = {
  name: 'Breakfast',
  description: 'Breakfast',
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
describe('Rendering component', () => {
  it('creates a CharInfo component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <MealDetails
              match={{ params: { id: '52940' } }}
              name={character.strCategory}
              description={character.strCategoryDescription}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('Chicken');
  });
});
