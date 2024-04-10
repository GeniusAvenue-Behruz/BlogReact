import React from 'react';
import './styles/Header.css'; 
import Header from './components/Header.js';
import News from './components/News.js'
const App = () => {
  return (
    <div>
    <Header />
      <News />
    </div>
   
  );
}

export default App;
