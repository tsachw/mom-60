import React, { Component } from 'react';
import {TweenMax, Draggable, Elastic} from "gsap/all";


export default class Page extends Component {
    constructor(props){
        super(props);

        this.page = React.createRef();
    }

    componentDidMount(){
        // Draggable.create(this.page.current, {
        //     type: 'x,y',
        //     bounds: this.props.bounds.current,
        //     edgeResistance:0.98,
        //     onDragEnd:()=>{
        //         TweenMax.to(this.page.current, 1, {ease: Elastic.easeOut, transform: 'translate(0,0)'});
        //         global.turnPage();
        //     },
        // });
    }
    
    render(){
        const {index, w,h, title} = this.props;

        const pHeight = global.isLandscape ? h - 32 : h - 96; 
        const pWidth = global.isLandscape ? w - 128 : w - 72;

        // let ticketStyle={
        //     position: 'absolute',
        //     fontSize: '4vw',
        //     height: 24,
        //     width: 60,
        //     bottom: -24,
        //     left: 24 + (4-index) * 60,
        //     backgroundColor: global.colors.main,
        //     color: 'white',
        //     display: 'flex',
        //     justifyContent: 'center',
        //     alignItems: 'center'
        // }



        return (
            <div ref={this.page} id="page_container" style={{
                position: 'absolute',
                bottom: global.isLandscape ? 16 : '',
                top: global.isLandscape ? '' : 16,
                right: 16 + 8*index,
                zIndex: 10-index,
                width: pWidth,
                height: pHeight,
                backgroundColor: 'white',
                overflowX: 'hidden',
                overflowY: 'hidden',
                borderRadius: '16px 4px 4px 16px',
                boxShadow: "-10px 0 20px rgba(50,0,10,0.2)",
                transform: `
                    rotate(${ -1 + 2*Math.random()}deg)
                    // translate(${ -40 -60*(index)}px , 0)
                `,
                // transform: `rotate(${ -20 +10*index}deg)`,
                // transformOrigin: '100% 0%',
                transition: 'transform 0.4s ease-out',
            }}>
                {/* {index !== 0 && <div style={ticketStyle}>{title}</div> } */}
                {this.props.children}
            </div>
        )
    }
}