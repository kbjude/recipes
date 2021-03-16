import './App.css';

function App() {
  return (
    <div className="App">
      Capstone
    </div>
  );
}



const mapDispatchToProps = dispatch => {
  return {
    onListRicipes: () => dispatch({type: 'LISTRICIPES'}),
    onViewDetails: () => dispatch({type: 'VIEWDETAILS'}),
    onAddRecipe: () => dispatch({type: 'ADDRICIPE'})
  }
};

export default App; 