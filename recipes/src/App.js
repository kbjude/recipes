import './App.css';

function App() {
  return (
    <div className="App">
      Capstone
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onListRicipes: () => dispatch({type: 'LIST_RICIPES'}),
    onViewDetails: () => dispatch({type: 'VIEW_DETAILS'}),
    onAddRecipe: () => dispatch({type: 'ADD_RICIPE'})
  }
};

export default App; 