import React from 'react';
import '../App.css';
import Todos from '../containers/Todos'
import AddTodo from './AddTodo'
import Footer from '../containers/FilterLink'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AddTodo/>
        <Todos/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
