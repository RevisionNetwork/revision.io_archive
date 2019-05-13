import React, { Component } from 'react';
//import Header from "./header"
//import Footer from "./footer"
//import Repeater from "./ui-repeater"
//import Cta from "./cta"
//import Link from './ui-link'

class Landing extends Component {
    render() {
        const {data} = this.props

        return (
            <div 
            id={"landing"} 
            className="tile tile-4"
            data-subtitle={data.title} >
                {/* <div className="tile-item tile-quarter">
                    <Header data={data} />
                </div>
                <div className="tile-item tile-quarter no-pad-v">
                    <Repeater title={data.baseline} />
                </div>
                <div className="tile-item tile-quarter">
                    <Link 
                    data={
                        {
                            title:"BUY TICKETS", 
                            url:data.tickets
                        }
                    }/>
                </div>
                <div className="tile-item tile-quarter">
                    <div className="fm">{data.description}</div>
                </div> */}
                
        </div>
        );
    }
}

export default Landing;