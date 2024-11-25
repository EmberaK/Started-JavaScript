
import React from 'react';
import HeaderSite from './Components/HeaderSite';
import MainSite from './Components/MainSite';



const App = () => {
  return (
    <div style={{ margin: '0 50px', width: 'calc(100% - (50px * 2))', }}>
      <h1 style={{ textTransform: 'uppercase' }}>swapi</h1>
      <HeaderSite/>
      <MainSite/>
    </div>
  );
};

export default App;
