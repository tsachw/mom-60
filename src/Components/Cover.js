import React, { Component } from 'react';
import WeekChooser from './WeekChooser';


export default class Cover extends Component {
    render(){
        const {data, availableWeeks, onSelectDate} = this.props;
        const spineW= '6vw';
        if( global.isLandscape ) {
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
                        width: `calc( 100% - 18vw)`,
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <div style={{
                            // flex: 2,
                            marginLeft: '6vw',
                        }}>
                            <h1 style={{
                                fontSize: '20vh',
                                marginTop: "4vh",
                                zIndex: 10,
                                // marginBottom: "6vh",
                            }}>שִׁישִּׁימָּא</h1>
                            <img src={require('../Images/hearts.svg')} style={{                      
                                width: "70vh",
                                marginTop: '5vh',
                                marginRight: "-3vh",
                            }}/>
                        </div>
                        <div style={{                       
                            // height: "100%",
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'space-between',
                            alignItems: 'flex-end',
                            marginTop: '6vh',
                            marginBottom: '6vh',
                        }}>
                        <div style={{
                            textAlign: 'left',
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
        else return (
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
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}>
                    <h1 style={{
                        marginTop: "8vh",
                        zIndex: 10,
                        // marginBottom: "6vh",
                    }}>שִׁישִּׁימָּא</h1>
                    <img src={require('../Images/hearts.svg')} style={{                      
                        width: "100%",
                    }}/>
                    <div style={{                       
                        width: "100%",
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-end',
                        marginTop: '4vh',
                        marginBottom: '8vh',
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