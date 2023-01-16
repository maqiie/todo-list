import logo from './logo.svg';
import './App.css';
import home from './views/home';
import Todolist from './components/todolist';
function App() {
  return (
    <div className="App">
   
      <home/>
      <Todolist/>
    </div>
  );
}

export default App;
