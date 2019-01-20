import React, { Component } from 'react';

export default class Surprise extends Component {
    render(){
        const {data} = this.props;

        let comp;
        switch(data.surpriseType){
            case "poem": comp = <Poem data={data.poem}/>; break;
            case "task": comp = <Task data={data.task}/>; break;
            case "plant": comp = <Plant data={data.plant}/>; break;
            default: comp = null;
        }

        return comp;

        // return (
        //     <div>
        //         <h2>הפתעה</h2>
        //         {comp}
        //     </div>
        // )
    }
}

class Poem extends Component {
    render(){
        const {data} = this.props;

        const vx = global.isLandscape ? 'vh' : 'vw';

        return(
            <div style={{
                position: 'absolute',
                padding: `8${vx}`,
                width: `calc( 100% - 16${vx} )`,
                height: `calc( 100% - 16${vx} )`,
                overflowY: 'scroll',
                overflowX: 'hidden',               
            }}>
            <div style={{
                    textAlign: 'center',                  
            }}>- שירה -</div>
            <div style={{
                fontFamily: 'narkisBold',
                fontSize: 24,
                marginTop: `8${vx}`,
                marginBottom: `4${vx}`,
            }}>{`${data.poem_title} / ${data.written_by}`}</div>

            {data.poem_body.split('\n').map((l, i)=>{
                    return <p key={'l_'+i}>{l}</p>
                })}
            </div>
        )
    }
}

class Task extends Component {
    render(){
        const {data} = this.props;

        const vx = global.isLandscape ? 'vh' : 'vw';

        return(
            <div style={{
                position: 'absolute',
                padding: `8${vx}`,
                width: `calc( 100% - 16${vx} )`,
                height: `calc( 100% - 16${vx} )`, 
                color: 'white',
                backgroundColor: '#4e1824'              
            }}>
                <div style={{
                    textAlign: 'center',                  
                }}>- משימה -</div>
                <div style={{
                    height: '95%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                }}>
                    <h4 style={{
                        fontSize: `8${vx}`,
                        // marginTop: '30%',
                        marginBottom: '4vw',
                        color: global.colors.main,
                    }}>חובה עליך:</h4>
                    <div style={{
                        fontSize: `8${vx}`,
                    }}>{data}</div>
                </div>
            </div>
        )
    }
}

class Plant extends Component {
    render(){
        const {data} = this.props;
        if(!data.plant_image || data.plant_image === "") return null;
        const vx = global.isLandscape ? 'vh' : 'vw';

        const img = require(`../Images/plants/${data.plant_image}`);
        return(
            <div style={{
                position: 'absolute',
                paddingTop: `8${vx}`,
                paddingBottom: `8${vx}`,
                width: `100%`,
                height: `calc( 100% - 16${vx} )`, 
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',              
            }}>
                <div style={{
                    textAlign: 'center',                  
                }}>- צמח השבוע -</div>
                
                <img src={img} alt="plant" style={{
                    maxWidth: "100%",
                    maxHeight: `calc( 100% - 16${vx} )`,
                    // marginBottom: global.isLandscape ? '' : '20vh',
                    // marginRight: global.isLandscape ? '20vw' : '',
                }}/>

                <div className="plant-name" style={{
                    fontFamily: 'davidCursive',
                    fontSize: 18,
                    textAlign: 'center',
                    paddingRight: `8${vx}`,
                    paddingLeft: `8${vx}`,
                }}>{data.plant_name}</div>
            </div>
        )
    }
}