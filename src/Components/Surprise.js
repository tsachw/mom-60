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

        return (
            <div>
                <h2>הפתעה</h2>
                {comp}
            </div>
        )
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

        return(
            <div>
                -משימה-
                <h4>חובה עליך:</h4>
                {data}
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