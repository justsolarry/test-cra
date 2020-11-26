import './App.scss';
import colors from './colors.scss'
import React from 'react'

function App() {
    console.log(colors)
    console.log(colors.primary)
  return (
    <div className="App">
      <header className="App-header">
        <p style={{color: colors.primary}}>
          This should be red
        </p>
      </header>
    </div>
  );
}

export default App;
