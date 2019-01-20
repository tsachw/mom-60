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
        const {index, w,h, title, spread, pageSelected} = this.props;

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

        let transformState = `rotate(${ -1 + 2*Math.random()}deg)`;
        let origin = "50% 50%";
        if(spread){
            transformState = `rotate(${ -5*(4-index)}deg)
            translate(${20*(4-index)}px,0)`;
            // origin = "0% 0%";
        }

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
                transform: transformState,
                transformOrigin: origin,
                transition: 'transform 0.3s ease-out',
            }}>
                {/* {index !== 0 && <div style={ticketStyle}>{title}</div> } */}
                {this.props.children}
                <div style={{
                    position: 'absolute',
                    padding: '8px 14px 10px 14px',
                    borderRadius: '8px 0 0 0',
                    bottom: 0,
                    left: 0,
                    backgroundColor: global.colors.main,
                    opacity: spread ? 1 : 0,
                    transformOrigin: "0% 100%",
                    transform: 'rotate(90deg) translate(-100%, 0%)',
                    userSelect: 'none',
                    cursor: 'pointer',
                    pointerEvents: spread ? '' : 'none',
                    transition: 'opacity 0.3s ease-out',
                }} onClick={_=>pageSelected(index)}>
                    {title}
                </div>
            </div>
        )
    }
}