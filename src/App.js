import React, { Component } from 'react';
import Ingredients from './Components/Ingredients';
import Recipe from './Components/Recipe';
import Surprise from './Components/Surprise';
import FamilyPicture from './Components/FamilyPicture';
import dates from './Data/dates.json'

global.colors = {
  background: '#e6e9e1',
  main: '#f70d3f',
}

class App extends Component {

  state = {
    availableWeeks: [],
    data: null,
  }

  componentDidMount(){
    // GenerateDates();
    this.loadWeekData();
  }

  loadWeekData(){

    const now = new Date();
    let weeks = [];
    for(let i=0; i < dates.length; i++){
      if(Date.parse(dates[i].d) <= now) {
        weeks.push(dates[i].w);
      }
    }

    // this.setState({availableWeeks: weeks});

    import(`./Data/${weeks[weeks.length-1]}`)
        .then(d=>this.setState({data:d.data, availableWeeks: weeks}))
        .catch(err => alert("לא נמצא תוכן עבור שבוע זה"));
  }
  
  render() {
    const {data} = this.state;

    if(!data) return null;

    return (
      <div className="root_cont">
      <div style={{backgroundColor: global.colors.main, borderRadius: '100%', width: 40, height:40}}/>
        <h1 style={{backgroundColor: 'white'}}>שִׂישִׂימָּא</h1>
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


function GenerateDates(){
    let dates = "[";
    
    for(let i=0; i<60; i++){
      const pre = ('0' + (i+1)).slice(-2);
      let d = new Date("12 Jan 2019");
      d.setDate(d.getDate() + i*1);
      dates += `{"d":"${d}","w":"week_${pre}"},\n`
    }

    dates += "]";

    console.log(dates);
}