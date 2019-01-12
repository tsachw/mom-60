import React, { Component } from 'react';
import Ingredients from './Components/Ingredients';
import Recipe from './Components/Recipe';
import Surprise from './Components/Surprise';
import FamilyPicture from './Components/FamilyPicture';

global.colors = {
  background: '#e6e9e1',
  main: '#f70d3f',
}

class App extends Component {

  state = {
    startingDate: 1547312325,
    data: null,
  }

  componentDidMount(){
    const currentTime = Date.now().valueOf()/1000; //milliseconds to seconds
    const timeSpan = Math.ceil((currentTime - this.state.startingDate) / 60 ); //seconds to minutes

    const weekNum = ('0' + timeSpan).slice(-2);
    import(`./Data/week_${'04'}`)
        .then(d=>this.setState({data:d.data}))
        .catch(err => alert("לא נמצא תוכן עבור שבוע זה"));
  }
  
  render() {
    const {data} = this.state;

    if(!data) return null;

    return (
      <div className="root_cont">
      <div style={{backgroundColor: global.colors.main, borderRadius: '100%', width: 40, height:40}}/>
        <h1 style={{backgroundColor: 'white'}}>שישימא</h1>
        <h3>שישו ושימחו ביום ההולדת 60</h3>
        <p>אוכל והפתעות שבועיות</p>
        <Ingredients data={data}/>
        <Recipe data={data.recipe}/>
        <Surprise data={data}/>
        <FamilyPicture data={data}/>
      </div>
    );
  }
}

export default App;
