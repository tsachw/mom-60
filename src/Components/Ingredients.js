import React, { Component } from 'react';

export default class Ingredients extends Component {
    
    
    render(){
        const{data} = this.props;

        const ingStyle = {
            fontSize: global.isLandscape ? '6vh' : '6vw',
            color: 'white',
            borderBottom: `6px solid rgba(0,0,0,0.4)`,
            height:  global.isLandscape ? '12vh' : '12vw',
            marginBottom: global.isLandscape ? '6vh' : '6vw', 
        }
        return (
            <div style={{
                width: "calc( 100% - 12vw )",
                height: "calc( 100% - 24vh )",
                // backgroundColor: 'red',
                backgroundImage: `url(${require('../Images/red-bg.png')})`,
                padding: '12vh 12vw 12vh 0',
                borderRadius: '16px 4px 4px 16px'
            }}>
                {/* <h2>לוֹטוֹ מצרכים</h2> */}
                <br/>
                {data.ingredients.map((ing, i)=>{
                    return <div key={'ing_'+i} style={ingStyle}>
                        <span style={{fontFamily:'narkisBold'}}>{`${i+1}. `}</span>
                        &nbsp;&nbsp;&nbsp;{ing}
                    </div>
                })}
            </div>
        )
    }
}