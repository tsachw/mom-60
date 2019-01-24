import React, { Component } from 'react';
import Cover from './Components/Cover';
import Ingredients from './Components/Ingredients';
import Recipe from './Components/Recipe';
import Surprise from './Components/Surprise';
import FamilyPicture from './Components/FamilyPicture';
import dates from './Data/dates.json';
import Page from './Components/Page';

global.colors = {
  background: '#fbfaf7',
  main: '#f70d3f',
}

global.isLandscape = window.innerWidth > window.innerHeight;

class App extends Component {

  
  constructor(props){
    super(props);
    
    this.state = {
      availableWeeks: [],
      data: null,
      height: window.innerHeight,
      width: window.innerWidth,
      pageOrder: [0,1,2,3,4],
      spread: false,
    }

    this.updateDimensions = this.updateDimensions.bind(this);
    this.pageSelected = this.pageSelected.bind(this);

    global.turnPage = ()=>{
      let order = this.state.pageOrder;
      order.unshift(order.pop());
      this.setState({pageOrder:order});
    }
  }

  componentDidMount(){
    GenerateDates();
    this.findWeeks(); 

    window.addEventListener("resize", this.updateDimensions);
  }

  updateDimensions() {
    global.isLandscape = window.innerWidth > window.innerHeight;

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

  pageSelected(i){
    let order = [];
    for(let p=0; p<5; p++){
      order.push((5-i+p)%5);
    }

    this.setState({pageOrder: order, spread: false});
  }
  
  render() {
    const {data, availableWeeks, width, height, pageOrder, spread} = this.state;

    if(!data) return null;

    return (
      <div className="root_cont">
        <Page index={0} displayOrder={pageOrder[0]} w={width} h={height} title={"❥"} spread={spread} pageSelected={this.pageSelected}>
          <Cover data={data} availableWeeks={availableWeeks} onSelectDate={(w)=>{this.loadWeekData(w)}}/>
        </Page>
        <Page index={1} displayOrder={pageOrder[1]} w={width} h={height} title={"לוֹטוֹ מצרכים"} spread={spread} pageSelected={this.pageSelected}>
          <Ingredients data={data}/>
        </Page>
        <Page index={2} displayOrder={pageOrder[2]} w={width} h={height} title={"מתכּוֹנִפְלא"} spread={spread} pageSelected={this.pageSelected}>
          <Recipe data={data.recipe}/>  
        </Page>
        <Page index={3} displayOrder={pageOrder[3]} w={width} h={height} title={"מהאלבום"} spread={spread} pageSelected={this.pageSelected}>
          <FamilyPicture data={data}/>
        </Page>
        <Page index={4} displayOrder={pageOrder[4]} w={width} h={height} title={"הפתעה"} spread={spread} pageSelected={this.pageSelected}>
          <Surprise data={data}/>
        </Page>
        <div style={{
          position: 'absolute',
          borderRadius: '100%',
          bottom: 20,
          left: 20,
          width: 40,
          height: 40,
          backgroundColor: global.colors.main,
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
        }} onClick={_=>this.setState({spread: !spread})}>{ spread ? '✕' : '〓'}</div>
      </div>
    );
  }
}

export default App;


function GenerateDates(){
    let dates = "[";
    
    for(let i=0; i<60; i++){
      const pre = ('0' + (i+1)).slice(-2);
      let d = new Date("01 Jan 2018");
      d.setDate(d.getDate() + i*7);
      dates += `{"d":"${d}","w":"week_${pre}"},\n`
    }

    dates += "]";

    console.log(dates);
}