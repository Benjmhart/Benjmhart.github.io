import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Employment from './Employment'
import Projects from './Projects'
import Education from './Education'
import setOpen from "../actions/action_setOpen"
import '../styles/App.css';

const App = ({isOpen, setOpen}) =>  {
  
  const tabKeys = Object.keys(isOpen)
  const capFirst = (x) => {
    const first = x.substring(0,1)
    const rest = x.substring(1, x.length)
    const upper = first.toUpperCase()
    return upper+rest
  }
  
  const getActive =  (arr) => {
    const active =  arr.reduce((end,x) => isOpen[x] ? x : end , '')
    switch (active) {
      case "employment" :
        return <Employment />
      case "projects": 
        return <Projects />
      case "education":
        return <Education />
      default:
        return ''
    }
  } 
  
  const makeTabs = tabKeys.map(x => {
    const active = isOpen[x] ? "category-link active" : 'category-link'
    
    
    return <div className={active} key={x} onClick={() => setOpen(x)}><h4>{capFirst(x)}</h4></div>
  })
  
    return (
      <div className="App">
        <div className="header-nav">
          <header className="App-header">
            <h1 className="App-title">Ben Hart</h1>
            <h2>Front End Web Developer</h2>
            <h2><a href="mailto:Benjmhart@gmail.com" >Benjmhart@gmail.com</a></h2>
          </header>
          <nav className="category-nav">
            <div className="flex-container">
              {makeTabs}
            </div>
          </nav>
        </div>
        <div className="content-container">
        {getActive(tabKeys)}
        </div>
      </div>
    );
}

function mapStateToProps({isOpen}){
  return { isOpen }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ setOpen }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
