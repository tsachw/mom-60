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

        return(
            <div>
            -שיר-
            <h4>{`${data.poem_title} / ${data.written_by}`}</h4>

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

        const img = require(`../Images/plants/${data.plant_image}`);
        return(
            <div>
                -צמח השבוע-
                <br/>
                <img alt="plant" src={img}/>
                <div className="plant-name">{data.plant_name}</div>
            </div>
        )
    }
}