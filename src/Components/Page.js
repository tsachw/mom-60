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

        return (
            <div ref={this.page} id="page_container" style={{
                position: 'absolute',
                bottom: 16,
                right: 16 + 8*index,
                zIndex: 10-index,
                width: w - 72,
                height: h - 32,
                backgroundColor: 'white',
                overflowX: 'hidden',
                overflowY: 'hidden',
                borderRadius: '16px 4px 4px 16px',
                boxShadow: "-10px 0 20px rgba(50,0,10,0.2)",
                transform: `rotate(${ -1 + 2*Math.random()}deg)`,
                pointerEvents: index === 0 ? '' : 'none',
                transition: 'transform 0.4s ease-out',
            }}>
                {/* <h2>{title}</h2> */}
                {this.props.children}
            </div>
        )
    }
}