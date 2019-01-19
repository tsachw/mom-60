import React, { Component } from 'react';
import Cover from './Components/Cover';
import Ingredients from './Components/Ingredients';
import Recipe from './Components/Recipe';
import Surprise from './Components/Surprise';
import FamilyPicture from './Components/FamilyPicture';
import dates from './Data/dates.json';
import Page from './Components/Page';

global.colors = {
  background: '#e6e9e1',
  main: '#f70d3f',
}

class App extends Component {

  
  constructor(props){
    super(props);
    
    this.state = {
      availableWeeks: [],
      data: null,
      height: window.innerHeight,
      width: window.innerWidth,
      pageOrder: [0,1,2,3,4],
    }

    this.updateDimensions = this.updateDimensions.bind(this);

    this.bounds = React.createRef();
    global.turnPage = ()=>{
      let order = this.state.pageOrder;
      order.unshift(order.pop());
      this.setState({pageOrder:order});
    }
  }

  componentDidMount(){
    // GenerateDates();
    this.findWeeks(); 

    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      height: window.innerHeight, 
      width: window.innerWidth
    });
  }

  findWeeks(){
    const now = new Date();
    let weeks = [];
    for(let i=0; i < dates.length; i++){
      if(Date.parse(dates[i].d) <= now) {
        weeks.push(dates[i]);
      }
    }

    this.setState({availableWeeks: weeks}, _=>this.loadWeekData(weeks[weeks.length-1].w))
  }

  loadWeekData(w) {
    import(`./Data/${w}`)
        .then(d=>this.setState({data:d.data}))
        .catch(err => alert("לא נמצא תוכן עבור שבוע זה"));
  }
  
  render() {
    const {data, availableWeeks, width, height, pageOrder} = this.state;

    if(!data) return null;

    return (
      <div className="root_cont" ref={this.bounds}>
        <Page index={pageOrder[0]} w={width} h={height} title={""} bounds={this.bounds}>
          <Cover data={data} availableWeeks={availableWeeks} onSelectDate={(w)=>{this.loadWeekData(w)}}/>
        </Page>
        <Page index={pageOrder[1]} w={width} h={height} title={"מצרכים"} bounds={this.bounds}>
          <Ingredients data={data}/>
        </Page>
        <Page index={pageOrder[2]} w={width} h={height} title={"מתכונים"} bounds={this.bounds}>
          <Recipe data={data.recipe}/>  
        </Page>
        <Page index={pageOrder[3]} w={width} h={height} title={"הפתעה"} bounds={this.bounds}>
          <Surprise data={data}/>
        </Page>
        <Page index={pageOrder[4]} w={width} h={height} title={"תמונה"} bounds={this.bounds}>
          <FamilyPicture data={data}/>
        </Page>

      </div>
    );
  }
}

export default App;


function GenerateDates(){
    let dates = "[";
    
    for(let i=0; i<60; i++){
      const pre = ('0' + (i+1)).slice(-2);
      let d = new Date("15 Jan 2019");
      d.setDate(d.getDate() + i*1);
      dates += `{"d":"${d}","w":"week_${pre}"},\n`
    }

    dates += "]";

    console.log(dates);
}