import React, { Component } from 'react';
import Model from './react-3d-viewer/model' 
import PubSub from 'pubsub-js';
//import MediaQuery from "react-responsive";

class ThreeWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //playState: 'initial',
            width: '150',
            height: '150'
        }
    }

    componentDidMount(){
        if(window.innerWidth <= 768){
            this.setState({
                width: '150',
                height: '150'
            })
        }else{
            this.setState({
                width: '300',
                height: '300'
            })
        }
    }
    _onClick(){
        PubSub.publish('MENU', {open: true})
    }

    _onLoad(){
        PubSub.publish('3D_LOADED')
    }

    render() {
        const {width, height} = this.state
        //console.log(width, height)
        const {src, mtl, texPath} = this.props
        return (
            <div id="obj3d"
            onClick={() => this._onClick()}>
                <Model 
                    width={width} height={height}
                    // position={{x:1.5,y:0,z:0}} 
                    // scale={{x:1.5, y:1.5, z: 1.5}}
                    background="transparent"
                    src={src} 
                    mtl={mtl}
                    texPath={texPath}
                    onLoad={this._onLoad} />
            </div>
        );
    }
}

export default ThreeWrapper;