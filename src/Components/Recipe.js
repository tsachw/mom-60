import React, { Component } from 'react';

export default class Recipe extends Component {
    render(){
        const {data} = this.props;

        const ts = {
            display:'inline-block',
            borderBottom:"1px solid black",
            margin: "16px 0 8px 0",
        }

        return (
            <div>
                <h2>מתכּוֹנִפְלא</h2>
                <h4>{data.recipe_title}</h4>
                <div style={ts}>מצרכים:</div>
                {data.recipe_ingredients.map((ing,i)=>{return(
                    <div key={"recipe_ing_"+i}>
                        {ing}
                    </div>
                    )
                })}
                <div style={ts}>אופן ההכנה:</div>
                <br/>
                {data.instructions.split('\n').map((p,i)=>{
                    return <p key={"recipe_p"+i}>{p}</p>
                })}
            </div>
        )
    }
}