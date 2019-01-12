import React, { Component } from 'react';


global.colors = {
  background: '#e6e9e1',
  main: '#f70d3f',
}

class App extends Component {
  
  render() {
    return (
      <div className="root_cont">
      <div style={{backgroundColor: global.colors.main, borderRadius: '100%', width: 200, height:200}}/>
        <h1 style={{backgroundColor: 'white'}}>שישימא</h1>
        <h3>שישו ושימחו ביום ההולדת 60</h3>
        <p>אוכל והפתעות שבועיות</p>
      </div>
    );
  }
}

export default App;
