import React, { Component } from 'react';

export default class FamilyPicture extends Component {
    
    render(){
        const{data} = this.props;
        if(!data.family_image || data.family_image === "") return null;
        const img = require(`../Images/family/${data.family_image}`)
        return (
            <div>
                <h2>מהאלבום</h2>
                <br/>
                <img src={img} alt="family"/>
            </div>
        )
    }
}