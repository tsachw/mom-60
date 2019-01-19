import React, { Component } from 'react';

export default class Recipe extends Component {
    render(){
        const {data} = this.props;

        const ts = {
            fontFamily: 'davidCursive',
            color: global.colors.main,
            display:'inline-block',
            margin: "2em 0 0.5em 0",
        }

        return ([
            <div key="r1" style={{
                position:'absolute',
                backgroundColor: global.colors.main, 
                width: '1vw', 
                height:'100%'
            }}/>,
        
            <div key="r2" style={{
                padding: '6vw',
                width: 'calc( 100% - 13vw )',
                height: 'calc( 100% - 12vw )',
                overflowY: 'scroll',
                overflowX: 'hidden',                
            }}>
                {/* <h2>מתכּוֹנִפְלא</h2> */}
                <h4 style={{
                    textAlign: 'center',
                    marginTop: global.isLandscape ? '1vh' : '2vw',
                    marginBottom: global.isLandscape ? '2vh' : '2vw',
                    // padding: '1vh 3vw 2vh 3vW',
                    // borderWidth: `0 4px 0 4px`,
                    // borderColor: global.colors.main,
                    // borderStyle: 'double'
                }}>≈<br/>{data.recipe_title}<br/>≈</h4>
                <div style={ts}>מצרכים:</div>
                {data.recipe_ingredients.map((ing,i)=>{
                    return <Ingredient key={'ing_ ' + i} txt={ing}/>
                })}
                <div style={ts}>אופן ההכנה:</div>
                <br/>
                {data.instructions.split('\n').map((p,i)=>{
                    return <p key={"recipe_p"+i}>{p}</p>
                })}
            </div>
            ]
        )
    }
}

class Ingredient extends Component {
    state={ check: false }

    render(){
        const{txt} = this.props;
        return <div style={{
            borderBottom: `1px solid ${global.colors.main}`,
            padding: '0.6em 1.2em 0.8em 1.2em',
            textDecoration: this.state.check ? 'line-through' : 'none',
            color: this.state.check ? 'silver' : 'black',
        }} onClick={()=>{this.setState({check:true})}}>{txt}</div>
    }
}