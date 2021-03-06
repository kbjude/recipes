import { render, screen, act } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../reducers/store';
import Pagination from '../../components/Pagination';

const mockPaginate = () => 'test';
const charsNum = 10;
const total = 500;
const current = 2;

describe('Rendering component', () => {
  it('creates a Pagination component', () => {
    act(() => {
      render(
        <BrowserRouter>
          <Provider store={store}>
            <Pagination
              charsPerPage={charsNum}
              totalChars={total}
              paginate={mockPaginate}
              currentPage={current}
            />
          </Provider>
        </BrowserRouter>,
      );
    });
    screen.getByText('2');
  });
});
