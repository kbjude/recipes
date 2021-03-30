import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Category from '../components/Category';
import fetchCategories from '../api/fetchCategories';

function App() {
  const { category } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <>
      {category.categories && category.categories.map(category => (
        <Category
          key={category.idCategory}
          id={category.idCategory}
          name={category.strCategory}
          description={category.strCategoryDescription}
          image={category.strCategoryThumb}
          path={`/meals/${category.strCategory}`}
        />
      ))}
    </>
  );
}
export default App;
