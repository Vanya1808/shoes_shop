import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './components/Header'




class App extends React.Component{
  render(){
    return(
      
        <div className="app">
          <Router>
            <Header />
           
          </Router>
        </div>
     
    );
  }
}

export default App;