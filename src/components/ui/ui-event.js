import React, { Component } from 'react';
import moment from 'moment';
import Peoples from "./peoples"

class Event extends Component {
    render() {
        const {data} = this.props
        //console.log(data)
        return (
            <div className="ui-event">
                <h2 className="fm">{data.title}</h2>

                {data.subheadline !== "" &&
                    <h3 className="fm">{data.subheadline}</h3>
                }
                <time className="fm" dateTime="2018-07-07">{moment(data.date).format('LL')}</time>

                {data.peoples !== "" &&
                    <Peoples length={data.peoples.length} data={data.peoples} />
                }

                <div className="bottom">
                    <div className="eventType fs">{data.eventType}</div>
                </div>
            </div>
        );
    }
}

export default Event;