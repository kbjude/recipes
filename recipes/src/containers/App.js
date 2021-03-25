import './App.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meal from '../components/Meal';
import fetchMeals from '../api/fetchMeals';

function App() {
  const { data } = useSelector(state => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMeals());
  }, []);

  return (
    <>
      {data.meals && data.meals.map(meal => (
        <Meal
          key={meal.idCategory}
          id={meal.idCategory}
          name={meal.strCategory}
          description={meal.strCategoryDescription}
          image={meal.strCategoryThumb}
        />
      ))}
    </>
  );
}

export default App;
