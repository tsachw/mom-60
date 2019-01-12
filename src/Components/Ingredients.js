import React, { Component } from 'react';

export default class Ingredients extends Component {
    
    
    render(){
        const{data} = this.props;

        return (
            <div>
                <h2>לוֹטוֹ מצרכים</h2>
                <br/>
                {data && data.ingredients.map((ing, i)=>{
                    return <div key={'ing_'+i}>{`${i+1}. ${ing}`}</div>
                })}
            </div>
        )
    }
}