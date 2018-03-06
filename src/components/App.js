import React from 'react';
import { connect } from 'react-redux'
import '../styles/App.css';

const App = ({isOpen}) =>  {
  
  const tabKeys = Object.keys(isOpen)
  const makeTabs = tabKeys.map(x => {
    const active = isOpen[x] ? "category-link active" : 'category-link'
    return <div className={active}><h4  >{x}</h4></div>
  })
  
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Ben Hart</h1>
          <h3 className="App-subtitle">Web Resume</h3>
        </header>
        <nav className="category-nav">
          <div className="flex-container">
            {makeTabs}
          </div>
        </nav>
      </div>
    );
}

function mapStateToProps({isOpen}){
  return { isOpen }
}

export default connect(mapStateToProps)(App);
