import React from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio'; // Assumendo che Portfolio.js sia nella
import 'bootstrap/dist/css/bootstrap.css'; // Importa il CSS di Bootstrap
import './App.css';

function App() {
  return (
   
      <div className="App">
        <Portfolio />
      </div>
    
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
export default App;
