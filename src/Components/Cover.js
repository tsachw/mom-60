import React, { Component } from 'react';
import WeekChooser from './WeekChooser';


export default class Cover extends Component {
    render(){
        const {data, availableWeeks, onSelectDate} = this.props;
        const spineW= '6vw';
        return (
            [
                <div key="c1" style={{
                    position:'absolute',
                    backgroundColor: global.colors.main, 
                    width: spineW, 
                    height:'100%'
                }}/>,
                <div key="c2" style={{
                    position:'absolute',
                    right: spineW,
                    paddingRight: '6vw',
                    paddingLeft: '6vw',
                    height: '100%',
                }}>
                <h1 style={{
                    marginTop: "8vh",
                    // marginBottom: "6vh",
                    }}>שִׂישִׂימָּא</h1>
                    <div style={{
                        position: 'absolute',
                        width: "calc(100% - 12vw)",
                        bottom: '10vh',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                    }}>
                    <div style={{
                        fontSize: '3vw',
                    }}>אוכל<br/> והפתעות<br/> שבועיות</div>
                    <h3 style={{
                        display: 'inline-block',
                        textAlign: 'center',
                        margin: 0,
                        letterSpacing: '0.1em',
                    }}>גליון<br/>-{data.key.slice(5)}-</h3>
                    <WeekChooser list={availableWeeks} currentWeek={data.key} onSelect={(w)=>{onSelectDate(w)}}/>
                    </div>
                </div>
            ]
        )
    }
}