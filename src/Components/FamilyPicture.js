import React, { Component } from 'react';

export default class FamilyPicture extends Component {
    
    render(){
        const{data} = this.props;
        if(!data.family_image || data.family_image === "") return null;
        const img = require(`../Images/family/${data.family_image}`)
        return ([
            <div key="img1" style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                // backgroundColor: global.colors.background,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                {/* <h2>מהאלבום</h2> */}
                {/* <br/> */}
                
                <img src={img} alt="family" style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                    marginBottom: global.isLandscape ? '' : '20vh',
                    marginRight: global.isLandscape ? '20vw' : '',
                }}/>
                
            </div>,
            <div key="img2" style={{
                position: 'absolute',
                bottom: '6vw',
                right: '6vw',
                backgroundColor: 'white',
                padding: '8px 16px 12px 16px'
            }}>
                {data.family_image_title}
            </div>
        ])
    }
}