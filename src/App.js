import React from 'react';
import './App.css';
import Footer from './components_orig/Footer.js'
import Header from './components_orig/Header.js'
import Main from './components_orig/Main.js'

class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
