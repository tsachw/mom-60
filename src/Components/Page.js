import React, { Component } from 'react';

export default class Page extends Component {

    render(){
        const {index, displayOrder, w,h, title, spread, pageSelected} = this.props;

        const pHeight = global.isLandscape ? h - 32 : h - 96; 
        const pWidth = global.isLandscape ? w - 128 : w - 72;

        const deg = global.isLandscape ? 1 : 2;

        let transformState = `rotate(${ -0.5*deg + deg*Math.random()}deg)`;
        const origin = global.isLandscape ? "100% 50%" : "50% 50%";
        const direction = global.isLandscape ? 1 : -1;
        if(spread){
            transformState = `rotate(${ direction*5*(4-displayOrder)}deg)
            translate(${20*(4-displayOrder)}px,0)`;
        }

        return (
            <div id="page_container" style={{
                position: 'absolute',
                bottom: global.isLandscape ? 16 : '',
                top: global.isLandscape ? '' : 16,
                right: 16 + 8*displayOrder,
                zIndex: 10-displayOrder,
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
                {/* <div style={{
                    position: 'absolute',
                    top:0,
                    right:0,
                    backgroundColor: 'white',
                    width:'100%',
                    height: '100%',
                    opacity: spread ? 0.9 : 0,
                    transition: 'opacity 0.4s ease-out', 
                }}/> */}
                <div style={{
                    zIndex: 999,
                    position: 'absolute',
                    padding: '8px 14px 10px 14px',
                    borderRadius: global.isLandscape ? '0 8px 0 0' : '8px 0 0 0',
                    bottom: 0,
                    left: 0,
                    backgroundColor: global.colors.main,
                    opacity: spread ? 1 : 0,
                    transformOrigin: global.isLandscape ? "" : "0% 100%",
                    transform: global.isLandscape ? "" : 'rotate(90deg) translate(-100%, 0%)',
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