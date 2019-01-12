import React, { Component } from 'react';
import Ingredients from './Components/Ingredients';
import Recipe from './Components/Recipe';
import Surprise from './Components/Surprise';

global.colors = {
  background: '#e6e9e1',
  main: '#f70d3f',
}

class App extends Component {

  state = {
    data: null,
  }

  componentDidMount(){
    const weekNum = '01';
    import(`./Data/week_${weekNum}`)
        .then(d=>this.setState({data:d.data}));
  }
  
  render() {
    const {data} = this.state;

    return (
      <div className="root_cont">
      <div style={{backgroundColor: global.colors.main, borderRadius: '100%', width: 40, height:40}}/>
        <h1 style={{backgroundColor: 'white'}}>שישימא</h1>
        <h3>שישו ושימחו ביום ההולדת 60</h3>
        <p>אוכל והפתעות שבועיות</p>
        <Ingredients data={data}/>
        <Recipe/>
        <Surprise/>
      </div>
    );
  }
}

export default App;
