import React from "react"

class Repeater extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            length: 20
        }        
    }

    componentDidMount(){
        this._tick()
    }

    _tick(){
        const scroller = this.refs.scroller;
        
        setInterval(() => {
            //console.log(scroller.scrollTop + scroller.offsetHeight, scroller.scrollHeight)
            scroller.scrollTop += 1;

            if(scroller.scrollTop + scroller.offsetHeight >= scroller.scrollHeight) {
                const {length} = this.state
                this.setState({
                    length: length + 20
                })
            }
		}, 50);
    }

    renderItems(){
        const {data} = this.props
        const {length} = this.state
//console.log(data.title)
        const arr = Array.from(new Array(length),(val,index)=>index);
        const items = arr.map(index => (
                <div 
                key={index}
                className='item blink fm' style={{
                    animationDelay: index+"00ms"
                }}>{data.title}</div>
        ))
        return items
    }

    render(){
        //const {menuClass} = this.state
        //const {title} = this.props
        return(
            <div className="ui-repeater" ref="scroller">
                {this.renderItems()}
            </div>
        )
    }
}

export default Repeater
